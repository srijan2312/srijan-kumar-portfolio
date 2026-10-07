import { getRepoStats, isValidRepoRef } from "@/lib/github";

/**
 * GET /api/github?owner=<owner>&repo=<repo>
 *
 * Optional, env-gated GitHub integration. Returns cached public repository
 * statistics for wiring live repo data into project pages later.
 *
 * - Input is strictly validated before any network call.
 * - Failures return a JSON error (502), never a stack trace.
 * - Responses are cached for 1h in the Data Cache (see lib/github.ts).
 * - No secrets are ever sent to the client; GITHUB_TOKEN stays server-side.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const owner = (searchParams.get("owner") ?? "").trim();
  const repo = (searchParams.get("repo") ?? "").trim();

  if (!isValidRepoRef(owner, repo)) {
    return Response.json(
      { error: "Invalid request: expected ?owner=<owner>&repo=<repo>." },
      { status: 400 },
    );
  }

  const stats = await getRepoStats(owner, repo);
  if (!stats) {
    return Response.json(
      { error: "Repository not found, or GitHub is temporarily unavailable." },
      { status: 502 },
    );
  }

  return Response.json(stats);
}
