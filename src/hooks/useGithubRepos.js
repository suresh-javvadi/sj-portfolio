import { useEffect, useState } from "react";
import { fetchGithubRepos } from "../services/github";

export function useGithubRepos() {
  const [status, setStatus] = useState("loading");
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    let cancelled = false;

    fetchGithubRepos()
      .then((data) => {
        if (cancelled) return;
        setRepos(data);
        setStatus(data.length === 0 ? "empty" : "success");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { repos, status };
}
