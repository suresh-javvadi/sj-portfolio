import { ArrowUpRight, Star } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import Container from "../components/common/Container";
import StaggerContainer from "../components/animations/StaggerContainer";
import { staggerItem } from "../components/animations/variants";
import { motion } from "motion/react";
import { useGithubRepos } from "../hooks/useGithubRepos";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { hiddenRepos, maxVisibleRepos } from "../data/github";

const EXCLUDED_REPOS = new Set([
  ...hiddenRepos,
  ...projects.map((p) => p.github?.split("/").pop()).filter(Boolean),
]);

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function RepoCardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-border bg-surface p-6">
      <div className="h-4 w-1/2 rounded bg-border" />
      <div className="mt-4 h-3 w-full rounded bg-border" />
      <div className="mt-2 h-3 w-2/3 rounded bg-border" />
      <div className="mt-6 h-3 w-1/3 rounded bg-border" />
    </div>
  );
}

export default function GithubFeed() {
  const { repos, status } = useGithubRepos();

  const visibleRepos = repos.filter((repo) => !EXCLUDED_REPOS.has(repo.name)).slice(0, maxVisibleRepos);
  const viewStatus = status === "success" && visibleRepos.length === 0 ? "empty" : status;

  return (
    <section id="github" className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="GitHub" title="More experiments. More code." />
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-fg transition-opacity duration-200 hover:opacity-70"
          >
            View full profile
            <ArrowUpRight size={15} strokeWidth={1.75} />
          </a>
        </div>

        <div className="mt-12">
          {viewStatus === "loading" && (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <RepoCardSkeleton key={i} />
              ))}
            </div>
          )}

          {viewStatus === "error" && (
            <div className="rounded-2xl border border-border bg-surface px-6 py-10 text-center">
              <p className="text-fg-secondary">
                GitHub activity couldn't be loaded right now.
              </p>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-fg hover:opacity-70"
              >
                View repositories on GitHub
                <ArrowUpRight size={15} strokeWidth={1.75} />
              </a>
            </div>
          )}

          {viewStatus === "empty" && (
            <div className="rounded-2xl border border-border bg-surface px-6 py-10 text-center text-fg-secondary">
              No public repositories to show just yet.
            </div>
          )}

          {viewStatus === "success" && (
            <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visibleRepos.map((repo) => (
                <motion.a
                  key={repo.id}
                  variants={staggerItem}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-fg"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base font-medium text-fg">{repo.name}</h3>
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.75}
                        className="shrink-0 text-fg-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                    {repo.description && (
                      <p className="mt-2 line-clamp-2 text-sm text-fg-secondary">{repo.description}</p>
                    )}
                  </div>

                  <div className="mt-6 flex items-center gap-4 text-xs text-fg-muted">
                    {repo.language && (
                      <span className="inline-flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-accent" />
                        {repo.language}
                      </span>
                    )}
                    {repo.stars > 0 && (
                      <span className="inline-flex items-center gap-1">
                        <Star size={12} strokeWidth={1.75} />
                        {repo.stars}
                      </span>
                    )}
                    <span>{formatDate(repo.updatedAt)}</span>
                  </div>
                </motion.a>
              ))}
            </StaggerContainer>
          )}
        </div>
      </Container>
    </section>
  );
}
