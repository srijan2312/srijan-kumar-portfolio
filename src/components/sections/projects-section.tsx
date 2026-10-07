import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";

/** Home-page projects preview: featured case studies + link to the index. */
export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  return (
    <section id="projects" aria-label="Projects" className="relative scroll-mt-20 py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Projects, as engineering case studies"
          description="Real systems I designed and built end to end — each with its architecture, decisions and trade-offs documented."
        />
        <div className="space-y-6">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-paper-50 transition-colors duration-200 hover:border-white/30 hover:bg-white/[0.07]"
          >
            Browse all projects
            <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
