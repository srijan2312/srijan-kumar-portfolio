import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllProjectSlugs, getProject, projects } from "@/data/projects";
import { ProjectCaseStudy } from "@/components/projects/project-case-study";
import { site } from "@/data/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Unknown slugs never match this route — they fall through to the root 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const url = `${site.url}/projects/${project.slug}`;
  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} | ${site.name}`,
      description: project.description,
      url,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${project.title} | ${site.name}`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? projects[idx - 1] : undefined;
  const next = idx < projects.length - 1 ? projects[idx + 1] : undefined;

  // Structured data: only real, verifiable facts about the project.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    author: { "@type": "Person", name: site.name, url: site.url },
    ...(project.github ? { codeRepository: project.github } : {}),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectCaseStudy project={project} prev={prev} next={next} />
    </main>
  );
}
