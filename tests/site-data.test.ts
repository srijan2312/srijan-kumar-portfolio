import { describe, expect, it } from "vitest";
import { site } from "@/data/site";
import { socials } from "@/data/socials";
import { navItems } from "@/data/nav";
import { skillCategories } from "@/data/skills";
import { experience } from "@/data/experience";
import { certifications } from "@/data/certifications";
import { achievements } from "@/data/achievements";

/** Sections that must exist on the home page for nav anchors to work. */
const HOME_SECTION_IDS = new Set([
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "achievements",
  "contact",
]);

describe("site data", () => {
  it("has a valid contact email", () => {
    expect(site.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it("links only real profile URLs", () => {
    for (const s of socials) {
      expect(() => new URL(s.href)).not.toThrow();
      expect(s.href.startsWith("https://") || s.href.startsWith("mailto:")).toBe(true);
    }
    const ids = socials.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("points every nav item at an existing home section", () => {
    for (const item of navItems) {
      expect(HOME_SECTION_IDS.has(item.id)).toBe(true);
      expect(item.href).toBe(`/#${item.id}`);
    }
  });

  it("keeps skill categories non-empty with unique ids", () => {
    expect(skillCategories.length).toBeGreaterThan(0);
    const ids = skillCategories.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const c of skillCategories) {
      expect(c.items.length).toBeGreaterThan(0);
    }
  });

  it("keeps experience, certifications and achievements non-empty", () => {
    expect(experience.length).toBeGreaterThan(0);
    expect(certifications.length).toBeGreaterThan(0);
    expect(achievements.length).toBeGreaterThan(0);
    for (const e of experience) {
      expect(e.highlights.length).toBeGreaterThan(0);
    }
  });
});
