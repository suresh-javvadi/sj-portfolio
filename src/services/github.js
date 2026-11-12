const GITHUB_USERNAME = "suresh-javvadi";
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`;
const CACHE_KEY = `sj-github-repos-${GITHUB_USERNAME}`;
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes

function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { timestamp, data } = JSON.parse(raw);
    if (Date.now() - timestamp > CACHE_TTL_MS) return null;
    return data;
  } catch {
    return null;
  }
}

function writeCache(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data }));
  } catch {
    /* localStorage unavailable or full, safe to ignore */
  }
}

export async function fetchGithubRepos() {
  const cached = readCache();
  if (cached) return cached;

  const response = await fetch(API_URL, {
    headers: { Accept: "application/vnd.github+json" },
  });

  if (!response.ok) {
    throw new Error(`GitHub API responded with ${response.status}`);
  }

  const data = await response.json();

  const repos = data
    .filter((repo) => !repo.fork && !repo.private)
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      language: repo.language,
      stars: repo.stargazers_count,
      updatedAt: repo.pushed_at,
    }))
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  writeCache(repos);
  return repos;
}
