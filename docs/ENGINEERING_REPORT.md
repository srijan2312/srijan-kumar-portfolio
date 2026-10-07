# Engineering Report — Srijan Kumar Portfolio

Built 2026-10-06. Every claim below describes what was actually implemented and verified.

## Architecture

- **Next.js 16 (App Router) + React 19 + TypeScript (strict)**. Server components by
  default; `"use client"` only where interactivity requires it (nav, hero diagram,
  filters, contact copy button, reveals).
- **Tailwind CSS v4** with a CSS-first `@theme` design system (no config file).
- **Content is data, not JSX**: all portfolio content lives in typed files under
  `src/data/` (`projects`, `skills`, `experience`, `certifications`, `achievements`,
  `socials`, `nav`, `site`) conforming to `src/types/index.ts`. Components render
  these types and never hardcode portfolio facts.
- **Rendering**: home, `/projects`, and both case-study pages are statically
  prerendered; `/api/github` and `/opengraph-image` are dynamic server routes.

## Major components

| Area | Components |
|---|---|
| Layout | `SiteHeader` (sticky, shrinks on scroll, IntersectionObserver active-section, accessible mobile menu), `SiteFooter` |
| Hero | `HeroSection` (CSS staggered entrance), `SystemDiagram` (interactive SVG architecture viz: React/API/Node/MongoDB/Docker/AWS nodes, cursor-reactive, animated connections) |
| Sections | `AboutSection` (editorial split), `HowIBuildSection` (01–04 principles), `SkillsSection` (6 categories), `ExperienceSection` (timeline), `ProjectsSection`, `AchievementsSection`, `CertificationsSection`, `ResumeSection`, `ContactSection` (mailto CTA + copy-email, no fake form) |
| Projects | `ProjectCard` (editorial rows), `ProjectFilters` + `ProjectsExplorer` (URL-state `?category=` filtering with layout animation), `ArchitectureDiagram` (vertical blueprint flow), `ProjectCaseStudy` (problem → outcome) |
| UI | `Button` (cva variants), `Badge`, `Container`, `SectionHeading`, `Reveal` (IO + CSS, never stuck hidden) |

## Dependencies (runtime)

`next`, `react`, `react-dom`, `framer-motion` (filter layout animations only),
`lucide-react` (icons; brand glyphs hand-drawn as SVG — lucide v1 removed them),
`clsx`, `tailwind-merge`, `class-variance-authority`.
Dev: `typescript`, `eslint`, `vitest`, `@testing-library/*`, `jsdom`, `vite`.

## Routes

| Route | Result |
|---|---|
| `/` | Static home (10 sections) |
| `/projects` | Static index, `?category=` filter state (shareable URLs) |
| `/projects/interntrack`, `/projects/skillswap` | Static case studies (`generateStaticParams`, `dynamicParams: false`) |
| `/api/github?owner=&repo=` | Cached repo stats; 400 on bad input, 502 on GitHub failure |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image` | Generated at build/request time |
| Unknown paths | Custom 404 page with true 404 status |

## Data model

`Project { slug, title, tagline, category, period, description, problem, solution,
architecture: ArchitectureLayer[], features, technologies, challenges,
engineeringDecisions, results?, github?, live?, featured? }` plus `SkillCategory`,
`ExperienceItem`, `Certification`, `Achievement`, `SocialLink`, `NavItem`.
Adding a project = one object in `src/data/projects.ts` (QueueLess-ready).

## Implemented features

All 34 spec sections except the deliberate omissions below. Highlights:
- Interactive hero architecture visualization (cursor-reactive nodes, re-anchoring
  animated connections, `prefers-reduced-motion` aware, no WebGL).
- Project filtering with shareable URL state + empty-state for empty categories.
- Per-project architecture blueprints; case-study pages with 7 numbered sections.
- GitHub integration layer: `lib/github.ts` (optional `GITHUB_TOKEN`, 1h Data Cache,
  input validation, never throws) + `/api/github` route. No repository URLs were
  provided for the current projects, so no repo links are shown — the integration
  is ready to connect when URLs are supplied.
- Real resume PDF served at `/resume/Srijan_Kumar_Resume.pdf` with download CTAs.

## Deliberately not implemented (with reasons)

- **Redux Toolkit**: spec said "where actually required" — all state is local or URL
  params; adding it would be resume-driven bloat.
- **Contact form**: no backend/email service is configured; a form would be fake.
  Uses `mailto:` CTA + copy-email instead (spec-compliant fallback).
- **QueueLess as a listed project**: not on the resume; the data model accepts it
  the moment it's provided as completed project data.
- **Separate about/experience/contact pages**: adapted to anchored home sections
  (better for a portfolio single-page flow); `/projects` is a real index.

## Security considerations

- No secrets in source; `GITHUB_TOKEN`/`NEXT_PUBLIC_SITE_URL` via env (`.env.example` documents).
- Security headers: `X-Content-Type-Options`, `X-Frame-Options: DENY`,
  `Referrer-Policy`, `Permissions-Policy`; `poweredByHeader` off.
- `/api/github` validates `owner`/`repo` against a strict pattern before any fetch;
  failures return JSON errors, never stack traces; token never leaves the server.
- No `dangerouslySetInnerHTML` with user content (only static JSON-LD + a
  one-line `documentElement.classList` script).

## Performance optimizations

- Static prerendering for all content pages; `next/font` (Fraunces/Inter/JetBrains
  Mono, latin subsets, `display: swap`); no image assets (SVG diagrams inline).
- Entrance/scroll animations are pure CSS (zero JS animation runtime on load);
  Framer Motion ships only for the filter interaction.
- Client components are leaf-only; no data fetching on the client.

## Accessibility considerations

- Skip link, landmarks, semantic headings, visible `:focus-visible` rings,
  `aria-pressed`/`aria-expanded`/`aria-current`, keyboard-operable filters and menu
  (Escape closes), `aria-live` filter counts, alt/aria labels on diagrams.
- `prefers-reduced-motion`: CSS animations/transitions disabled globally; hero
  entrance and reveals resolve to visible content; diagram interaction disabled.
- Entrance system designed so content can never get stuck invisible (no-JS safe).

## Testing performed

- **23 Vitest tests, all passing**: project data integrity (required fields, unique
  URL-safe slugs, valid categories/URLs), `filterProjects` incl. empty-category,
  nav↔section id consistency, skill/social data, GitHub lib (validation, network
  failure, 404, payload mapping), `ProjectFilters` UI (aria-pressed, click,
  keyboard).
- `tsc --noEmit` clean, `eslint` clean, `next build` clean.
- **Live smoke tests** (production server): `/`, `/projects`,
  `/projects?category=backend`, both case studies → 200; unknown slug and path →
  404 with 404 body; `/api/github` → 200/400/502 as designed; sitemap/robots/OG
  image → 200; security headers present.
- **Visual verification** via headless Chromium screenshots: desktop hero, case
  study, projects index (filtered), and 390px mobile layout — all render correctly.
- Two real bugs found and fixed during verification: (1) unknown project slugs
  returned 200 with the 404 body → fixed with `dynamicParams: false`; (2) SVG
  `objectBoundingBox` gradients don't paint zero-area `<line>` bboxes → fixed with
  `userSpaceOnUse`; (3) a `useReducedMotion` conditional froze hero content at
  `opacity: 0` → replaced with race-free CSS animations.

## Remaining TODOs

- Set `NEXT_PUBLIC_SITE_URL` to the real production domain on deploy (currently a
  placeholder used for canonical/OG/sitemap URLs).
- Optional: connect `GITHUB_TOKEN` if live repo stats are ever displayed.
- Optional: replace the `mailto:` CTA with a real contact form backend if/when an
  email service is configured.
- Lighthouse/axe audits in a real browser were not run (no tooling available in
  this environment); the implementation targets the spec's thresholds by
  construction (semantic HTML, contrast-checked palette, minimal JS).
