import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectsExplorer } from "@/components/projects/projects-explorer";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering case studies by Srijan Kumar — full-stack MERN applications with documented architecture, decisions and trade-offs.",
  alternates: { canonical: `${site.url}/projects` },
};

function ExplorerFallback() {
  return (
    <div className="mt-8 space-y-6" aria-hidden="true">
      {[0, 1].map((i) => (
        <div key={i} className="h-56 animate-pulse rounded-xl border border-white/[0.08] bg-ink-900/60" />
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(139,92,246,0.1),transparent_70%)]"
      />
      <Container className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <SectionHeading
          eyebrow="Index"
          title="All projects"
          description="Filter by layer of the stack. Every project ships with a full case study — architecture, decisions, challenges."
        />
        <Suspense fallback={<ExplorerFallback />}>
          <ProjectsExplorer projects={projects} />
        </Suspense>
      </Container>
    </main>
  );
}
