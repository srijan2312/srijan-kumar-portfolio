import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/brands";
import type { Project } from "@/types";
import { PROJECT_CATEGORY_LABELS } from "@/types";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { ArchitectureDiagram } from "./architecture-diagram";

function CaseSection({
  id,
  eyebrow,
  children,
}: {
  id: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal as="section" aria-label={eyebrow} className="scroll-mt-24">
      <h2 id={id} className="font-mono text-xs tracking-[0.25em] text-accent-violet-soft uppercase">
        {eyebrow}
      </h2>
      <div className="mt-5">{children}</div>
    </Reveal>
  );
}

/**
 * Full technical case study for one project.
 * Only sections with real data are rendered — empty fields stay hidden.
 */
export function ProjectCaseStudy({
  project,
  prev,
  next,
}: {
  project: Project;
  prev?: Project;
  next?: Project;
}) {
  const hasLinks = Boolean(project.github || project.live);

  return (
    <article>
      {/* Header */}
      <header className="relative overflow-hidden border-b border-white/[0.07]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(139,92,246,0.12),transparent_70%)]"
        />
        <Container className="relative pt-32 pb-12 md:pt-40 md:pb-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-mono text-xs text-paper-500">
              <li>
                <Link href="/projects" className="transition-colors hover:text-paper-50">
                  Projects
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-paper-200">{project.title}</li>
            </ol>
          </nav>
          <p className="mt-8 font-mono text-[11px] tracking-[0.22em] text-paper-500 uppercase">
            {PROJECT_CATEGORY_LABELS[project.category]}
            {project.period ? ` · ${project.period}` : null}
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-paper-50 text-balance sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-3 font-display text-xl text-accent-blue-soft italic">{project.tagline}</p>
          <p className="mt-6 max-w-3xl text-[16px] leading-relaxed text-paper-400">
            {project.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-2" aria-label="Technologies">
            {project.technologies.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </Container>
      </header>

      <Container className="space-y-16 py-16 md:space-y-20 md:py-20">
        <CaseSection id="problem" eyebrow="01 — Problem">
          <p className="max-w-3xl text-[16px] leading-relaxed text-paper-200">{project.problem}</p>
        </CaseSection>

        <CaseSection id="solution" eyebrow="02 — Solution">
          <p className="max-w-3xl text-[16px] leading-relaxed text-paper-200">{project.solution}</p>
        </CaseSection>

        <CaseSection id="architecture" eyebrow="03 — Architecture">
          <div className="max-w-3xl">
            <ArchitectureDiagram layers={project.architecture} />
          </div>
        </CaseSection>

        <CaseSection id="features" eyebrow="04 — Key features">
          <ul className="grid max-w-3xl gap-3.5 sm:grid-cols-2">
            {project.features.map((f) => (
              <li
                key={f}
                className="flex gap-3 rounded-lg border border-white/[0.08] bg-ink-900/60 px-4 py-3.5 text-[14.5px] text-paper-200"
              >
                <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-blue-soft" />
                {f}
              </li>
            ))}
          </ul>
        </CaseSection>

        <CaseSection id="decisions" eyebrow="05 — Engineering decisions">
          <ol className="max-w-3xl space-y-4">
            {project.engineeringDecisions.map((d, i) => (
              <li key={d.slice(0, 32)} className="flex gap-4">
                <span aria-hidden="true" className="font-mono text-sm text-accent-violet-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-relaxed text-paper-200">{d}</p>
              </li>
            ))}
          </ol>
        </CaseSection>

        <CaseSection id="challenges" eyebrow="06 — Challenges">
          <div className="grid max-w-4xl gap-5 md:grid-cols-2">
            {project.challenges.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-white/[0.08] bg-ink-900/60 p-6"
              >
                <h3 className="text-[15px] font-semibold text-paper-50">{c.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-paper-400">{c.detail}</p>
              </div>
            ))}
          </div>
        </CaseSection>

        {project.results && project.results.length > 0 ? (
          <CaseSection id="outcome" eyebrow="07 — Outcome">
            <ul className="max-w-3xl space-y-3">
              {project.results.map((r) => (
                <li key={r.slice(0, 32)} className="flex gap-3 text-[15px] text-paper-200">
                  <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent-violet-soft" />
                  {r}
                </li>
              ))}
            </ul>
          </CaseSection>
        ) : null}

        {hasLinks ? (
          <CaseSection id="links" eyebrow="Links">
            <div className="flex flex-wrap gap-3.5">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-white/15 bg-white/[0.03] px-6 text-sm font-medium text-paper-50 transition-colors duration-200 hover:border-white/30 hover:bg-white/[0.07]"
                >
                  <GithubIcon aria-hidden="true" className="size-4" />
                  View on GitHub
                  <ExternalLink aria-hidden="true" className="size-3.5 text-paper-500" />
                </a>
              ) : null}
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-paper-50 px-6 text-sm font-medium text-ink-950 transition-colors duration-200 hover:bg-white"
                >
                  Live demo
                  <ExternalLink aria-hidden="true" className="size-3.5" />
                </a>
              ) : null}
            </div>
          </CaseSection>
        ) : null}

        {/* Prev / next */}
        <nav aria-label="More projects" className="border-t border-white/[0.07] pt-10">
          <div className="grid gap-4 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="group rounded-xl border border-white/[0.08] bg-ink-900/60 p-6 transition-colors duration-200 hover:border-white/[0.18]"
              >
                <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-paper-500 uppercase">
                  <ArrowLeft aria-hidden="true" className="size-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
                  Previous
                </span>
                <span className="mt-2 block font-display text-xl text-paper-50">{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="group rounded-xl border border-white/[0.08] bg-ink-900/60 p-6 text-right transition-colors duration-200 hover:border-white/[0.18] sm:justify-self-end sm:w-full"
              >
                <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-paper-500 uppercase">
                  Next
                  <ArrowRight aria-hidden="true" className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
                <span className="mt-2 block font-display text-xl text-paper-50">{next.title}</span>
              </Link>
            ) : null}
          </div>
        </nav>
      </Container>
    </article>
  );
}
