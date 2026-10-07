/**
 * Central content model.
 *
 * All portfolio content lives in typed data files under `src/data/`.
 * Components must never hardcode portfolio content — they render these types.
 * Adding a new project = appending one object to `src/data/projects.ts`.
 */

export type ProjectCategory = "frontend" | "full-stack" | "backend" ;

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "frontend",
  "full-stack",
  "backend",
];

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  frontend: "Frontend",
  "full-stack": "Full Stack",
  backend: "Backend",
};

/** One layer in a project's top-to-bottom architecture diagram. */
export interface ArchitectureLayer {
  /** Short label, e.g. "React.js SPA" */
  label: string;
  /** One-line technical detail, e.g. "Client-rendered UI, Axios data fetching" */
  detail?: string;
}

/** A challenge faced while building, kept qualitative — no invented metrics. */
export interface ProjectChallenge {
  title: string;
  detail: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  /** Display period, e.g. "Feb 2023 – May 2023". Omitted when not provided. */
  period?: string;
  description: string;
  problem: string;
  solution: string;
  /** Top-to-bottom architecture flow rendered by ArchitectureDiagram. */
  architecture: ArchitectureLayer[];
  features: string[];
  technologies: string[];
  challenges: ProjectChallenge[];
  engineeringDecisions: string[];
  /** Only real, verifiable outcomes. Omit when none exist. */
  results?: string[];
  /**
   * Verified GitHub repository URL. Only set when the repository was
   * confirmed to exist (public GitHub API). Never guess or fabricate.
   */
  github?: string;
  /** Verified live deployment URL. Only set when confirmed real. */
  live?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  label: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location?: string;
  highlights: string[];
  tags: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  detail: string;
}

export interface Achievement {
  title: string;
  detail: string;
}

export interface SocialLink {
  id: "github" | "linkedin" | "leetcode" | "email";
  label: string;
  href: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
