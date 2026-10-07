import { afterEach, describe, expect, it, vi } from "vitest";
import { getRepoStats, isValidRepoRef } from "@/lib/github";

describe("isValidRepoRef", () => {
  it("accepts well-formed owner/repo pairs", () => {
    expect(isValidRepoRef("srijan2312", "example-portfolio-app")).toBe(true);
    expect(isValidRepoRef("owner", "repo.js")).toBe(true);
  });

  it("rejects empty, malicious or oversized input", () => {
    expect(isValidRepoRef("", "repo")).toBe(false);
    expect(isValidRepoRef("owner", "")).toBe(false);
    expect(isValidRepoRef("own/er", "repo")).toBe(false);
    expect(isValidRepoRef("owner", "re po")).toBe(false);
    expect(isValidRepoRef("owner", "../etc")).toBe(false);
    expect(isValidRepoRef("o".repeat(101), "repo")).toBe(false);
  });
});

describe("getRepoStats", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns null for invalid refs without touching the network", async () => {
    const fetchSpy = vi.fn();
    vi.stubGlobal("fetch", fetchSpy);
    expect(await getRepoStats("bad owner", "repo")).toBeNull();
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("returns null when the network fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new Error("network down")),
    );
    expect(await getRepoStats("srijan2312", "some-repo")).toBeNull();
  });

  it("returns null on non-OK responses", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: false, status: 404 }),
    );
    expect(await getRepoStats("srijan2312", "missing-repo")).toBeNull();
  });

  it("maps the GitHub API payload to the typed contract", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          full_name: "srijan2312/example-portfolio-app",
          description: "Retail management app",
          stargazers_count: 3,
          forks_count: 1,
          open_issues_count: 0,
          language: "JavaScript",
          updated_at: "2024-05-01T00:00:00Z",
          html_url: "https://github.com/srijan2312/example-portfolio-app",
        }),
      }),
    );
    const stats = await getRepoStats("srijan2312", "example-portfolio-app");
    expect(stats).toMatchObject({
      fullName: "srijan2312/example-portfolio-app",
      stars: 3,
      forks: 1,
      language: "JavaScript",
    });
  });
});
