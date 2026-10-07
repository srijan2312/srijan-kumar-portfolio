import { describe, expect, it } from "vitest";
import {
  filterProjects,
  getAllProjectSlugs,
  getProject,
  projects,
} from "@/data/projects";
import { PROJECT_CATEGORIES } from "@/types";

describe("project data integrity", () => {
  it("has at least one project", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("gives every project a unique, URL-safe slug", () => {
    const slugs = getAllProjectSlugs();

    expect(new Set(slugs).size).toBe(slugs.length);

    for (const slug of slugs) {
      expect(slug).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it("fills every required content field (no empty sections)", () => {
    for (const p of projects) {
      expect(p.title.trim().length).toBeGreaterThan(0);
      expect(p.tagline.trim().length).toBeGreaterThan(0);
      expect(p.description.trim().length).toBeGreaterThan(0);
      expect(p.problem.trim().length).toBeGreaterThan(0);
      expect(p.solution.trim().length).toBeGreaterThan(0);
      expect(p.features.length).toBeGreaterThan(0);
      expect(p.technologies.length).toBeGreaterThan(0);
      expect(p.challenges.length).toBeGreaterThan(0);
      expect(p.engineeringDecisions.length).toBeGreaterThan(0);
      expect(p.architecture.length).toBeGreaterThan(1);

      for (const layer of p.architecture) {
        expect(layer.label.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it("uses only valid categories", () => {
    for (const p of projects) {
      expect(PROJECT_CATEGORIES).toContain(p.category);
    }
  });

  it("only links real, well-formed URLs", () => {
    for (const p of projects) {
      for (const url of [p.github, p.live]) {
        if (url === undefined) continue;

        expect(() => new URL(url)).not.toThrow();
        expect(url.startsWith("https://")).toBe(true);
      }
    }
  });

  it("resolves projects by slug and returns undefined for unknown slugs", () => {
    for (const p of projects) {
      expect(getProject(p.slug)?.title).toBe(p.title);
    }

    expect(getProject("no-such-project")).toBeUndefined();
  });
});

describe("filterProjects", () => {
  it("returns everything for 'all'", () => {
    expect(filterProjects(projects, "all")).toEqual(projects);
  });

  it("filters by category", () => {
    const fullStack = filterProjects(projects, "full-stack");

    expect(fullStack.length).toBeGreaterThan(0);
    expect(fullStack.every((p) => p.category === "full-stack")).toBe(true);
  });
});
