/**
 * Optional GitHub integration — designed to be connected later.
 *
 * - Reads an optional `GITHUB_TOKEN` from the environment (server only).
 * - Caches responses for one hour via the Next.js Data Cache.
 * - Never throws: failures resolve to `null` so the UI degrades gracefully.
 * - The token is never exposed to the client; this module must only be
 *   imported from server components or route handlers.
 */

export interface GitHubRepoStats {
  fullName: string;
  description: string | null;
  stars: number;
  forks: number;
  openIssues: number;
  language: string | null;
  updatedAt: string;
  htmlUrl: string;
}

const REPO_PATTERN = /^[a-zA-Z0-9_.-]{1,100}$/;

/** Validate an `owner/repo` pair before it ever reaches the network. */
export function isValidRepoRef(owner: string, repo: string): boolean {
  return REPO_PATTERN.test(owner) && REPO_PATTERN.test(repo);
}

interface GitHubApiRepo {
  full_name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string | null;
  updated_at: string;
  html_url: string;
  message?: string;
}

export async function getRepoStats(
  owner: string,
  repo: string,
): Promise<GitHubRepoStats | null> {
  if (!isValidRepoRef(owner, repo)) return null;

  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "srijan-portfolio",
  };
  // Higher rate limits + private-repo access when the owner configures it.
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers,
      // Cache for 1h; revalidated in the background.
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as GitHubApiRepo;
    if (!data.full_name) return null;
    return {
      fullName: data.full_name,
      description: data.description,
      stars: data.stargazers_count,
      forks: data.forks_count,
      openIssues: data.open_issues_count,
      language: data.language,
      updatedAt: data.updated_at,
      htmlUrl: data.html_url,
    };
  } catch {
    // Network failure, DNS failure, timeout — degrade gracefully.
    return null;
  }
}
