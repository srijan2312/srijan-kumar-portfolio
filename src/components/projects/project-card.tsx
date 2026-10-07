import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/brands";
import type { Project } from "@/types";
import { PROJECT_CATEGORY_LABELS } from "@/types";
import { Reveal } from "@/components/ui/reveal";

/**
 * Large editorial project row.
 * Displays the project overview, technology stack,
 * case study link, GitHub repository, and live demo.
 */
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const href = `/projects/${project.slug}`;

  return (
    <Reveal>
      <article className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-ink-900/60 transition-all duration-300 hover:border-white/[0.18] hover:bg-ink-850">
        {/* Accent line */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-accent-violet to-accent-blue opacity-40 transition-opacity duration-300 group-hover:opacity-100"
        />

        <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-12">
          {/* Project number */}
          <p
            aria-hidden="true"
            className="font-display text-5xl font-medium text-white/[0.09] transition-colors duration-300 group-hover:text-accent-violet/25 lg:text-6xl"
          >
            {String(index + 1).padStart(2, "0")}
          </p>

          {/* Project information */}
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-paper-500 uppercase">
              {PROJECT_CATEGORY_LABELS[project.category]}
              {project.period ? ` · ${project.period}` : null}
            </p>

            <h3 className="mt-3 font-display text-2xl font-medium text-paper-50 sm:text-3xl">
              <Link
                href={href}
                className="transition-colors group-hover:text-white"
                aria-label={`${project.title} — read the case study`}
              >
                {project.title}
              </Link>
            </h3>

            <p className="mt-1 text-[15px] text-accent-blue-soft">
              {project.tagline}
            </p>

            <p className="mt-3.5 max-w-2xl text-[14.5px] leading-relaxed text-paper-400">
              {project.description}
            </p>

            {/* Technology stack */}
            <p className="mt-5 font-mono text-[12px] leading-relaxed text-paper-500">
              {project.technologies.join("  →  ")}
            </p>
          </div>

          {/* Project actions */}
          <div className="flex items-center justify-start gap-2.5 lg:justify-end">
            {/* Case Study */}
            <Link
              href={href}
              aria-label={`${project.title} — read the case study`}
              className="inline-flex h-10 items-center gap-1.5 rounded-md px-2.5 text-sm font-medium text-paper-200 transition-colors hover:text-white"
            >
              Case study
              <ArrowUpRight
                className="size-4"
                aria-hidden="true"
              />
            </Link>

            {/* GitHub */}
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source code on GitHub (opens in new tab)`}
                title="View source code on GitHub"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/10 text-paper-400 transition-all duration-200 hover:border-white/25 hover:bg-white/[0.04] hover:text-paper-50"
              >
                <GithubIcon
                  className="size-[17px]"
                  aria-hidden="true"
                />
              </a>
            ) : null}

            {/* Live Demo */}
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo (opens in new tab)`}
                className="inline-flex h-10 shrink-0 items-center gap-2 rounded-md border border-accent-blue/30 bg-accent-blue/[0.08] px-3.5 text-sm font-medium text-accent-blue-soft transition-all duration-200 hover:border-accent-blue/55 hover:bg-accent-blue/[0.14] hover:text-white"
              >
                <span>Live Demo</span>
                <ExternalLink
                  className="size-3.5"
                  aria-hidden="true"
                />
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </Reveal>
  );
}