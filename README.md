# Srijan Kumar — Portfolio

A premium, dark-first personal portfolio for **Srijan Kumar**, Full-Stack Software Engineer.
Built with Next.js 16, React 19, TypeScript (strict), Tailwind CSS v4, shadcn-style UI
primitives, Lucide icons and Framer Motion.

All content is sourced strictly from the attached resume (`public/resume/Srijan_Kumar_Resume.pdf`).
Nothing is invented — fields without real data are hidden, never faked.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Script          | Purpose                              |
|-----------------|--------------------------------------|
| `npm run dev`   | Development server                   |
| `npm run build` | Production build                     |
| `npm run start` | Serve the production build           |
| `npm run lint`  | ESLint                               |
| `npm run typecheck` | `tsc --noEmit`                   |
| `npm run test`  | Vitest suite (`vitest run`)          |

## Environment

Copy `.env.example` to `.env.local`:

- `NEXT_PUBLIC_SITE_URL` — production domain for canonical URLs, sitemap and Open Graph.
  Defaults to `https://srijankumar.dev` (placeholder — set the real domain on deploy).
- `GITHUB_TOKEN` — optional. Raises the GitHub API rate limit for `/api/github`
  and enables private repositories. Never commit a real token.

## Project structure

```
src/
├── app/                    # Routes: / , /projects, /projects/[slug], /api/github
│                           # + sitemap, robots, opengraph-image, not-found, error, loading
├── components/
│   ├── ui/                 # Button, Badge, Container, SectionHeading, Reveal
│   ├── layout/             # SiteHeader (sticky nav), SiteFooter
│   ├── hero/               # HeroSection, SystemDiagram (interactive SVG)
│   ├── sections/           # About, HowIBuild, Skills, Experience, Projects,
│   │                       # Achievements, Certifications, Resume, Contact
│   ├── projects/           # ProjectCard, ProjectFilters, ProjectsExplorer,
│   │                       # ArchitectureDiagram, ProjectCaseStudy
│   └── icons/              # Brand icons (GitHub, LinkedIn — lucide has none)
├── data/                   # Typed content: projects, skills, experience,
│                           # certifications, achievements, socials, nav, site
├── lib/                    # utils (cn), github (env-gated, cached API client)
└── types/                  # Content model (Project, SkillCategory, …)

tests/                      # Vitest: data integrity, filtering, GitHub lib, filters UI
public/resume/              # The real, downloadable resume PDF
```

## Content model — adding a project

Projects are data, not components. Append one object to `src/data/projects.ts`:

```ts
{
  slug: "my-project",          // → /projects/my-project (static route, auto-generated)
  title: "My Project",
  tagline: "What it is",
  category: "full-stack",      // frontend | full-stack | backend | blockchain
  period: "Jan 2024 – Mar 2024",
  description: "…",
  problem: "…",
  solution: "…",
  architecture: [{ label: "React.js", detail: "…" }, /* top → bottom */],
  features: ["…"],
  technologies: ["React.js", "Node.js"],
  challenges: [{ title: "…", detail: "…" }],
  engineeringDecisions: ["…"],
  results: ["…"],              // optional — only real outcomes
  github: "https://github.com/…", // optional — only verified URLs
  live: "https://…",           // optional — only verified URLs
}
```

Rules enforced by tests: every field required above must be non-empty, slugs must be
unique and URL-safe, categories must be valid, and `github`/`live` must be real
`https://` URLs. Omit `github`/`live`/`results` when there is nothing real — the UI
hides those sections automatically.

## Deployment

Deploy to Vercel (recommended) or any Node host:

```bash
npm run build && npm run start
```

Set `NEXT_PUBLIC_SITE_URL` (and optionally `GITHUB_TOKEN`) in the host's environment.

## Design notes

- Dark-first "engineering laboratory + editorial" identity: Fraunces (display serif),
  Inter (body), JetBrains Mono (technical labels); deep charcoal surfaces; restrained
  violet/blue accents; film grain + blueprint grid; no gradients-everywhere.
- Entrance and scroll animations are pure CSS (no hydration races, no-JS safe,
  instant under `prefers-reduced-motion`). Framer Motion is used only for the
  project-filter layout animations, which always resolve to a visible state.
- Redux Toolkit was deliberately **not** added: all state is local component state
  plus URL search params (`?category=`), which is the correct scope for this app.
