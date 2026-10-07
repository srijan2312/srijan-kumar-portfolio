import { Download, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site, profile } from "@/data/site";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { certifications } from "@/data/certifications";
import { allSkills } from "@/data/skills";

/**
 * Dedicated resume section — a faithful, condensed rendering of the
 * uploaded resume. Facts are mirrored, never rewritten.
 */
export function ResumeSection() {
  return (
    <section
      id="resume"
      aria-label="Resume"
      className="relative scroll-mt-20 border-t border-white/[0.07] bg-ink-900/50 py-24 md:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Resume"
          title="The full picture, on one page"
          description="A condensed rendering of my resume. Download the original PDF for applications and referrals."
        />

        <Reveal>
          <div className="overflow-hidden rounded-xl border border-white/[0.1] bg-ink-900">
            {/* Document header */}
            <div className="border-b border-white/[0.08] bg-ink-850 px-7 py-8 md:px-10">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-3xl font-medium text-paper-50">{site.name}</h3>
                  <p className="mt-1.5 text-[15px] text-accent-blue-soft">{site.role}</p>
                  <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-paper-500">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin aria-hidden="true" className="size-3.5" />
                      {site.location}
                    </span>
                    <span>{site.email}</span>
                  </p>
                </div>
                <a
                  href={site.resumePath}
                  download
                  className={cn(buttonVariants({ variant: "primary" }))}
                >
                  <Download aria-hidden="true" className="size-4" />
                  Download Resume
                </a>
              </div>
            </div>

            <div className="grid gap-10 px-7 py-8 md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:px-10 md:py-10">
              {/* Left column */}
              <div className="space-y-9">
                <div>
                  <h4 className="font-mono text-[11px] tracking-[0.25em] text-accent-violet-soft uppercase">
                    Summary
                  </h4>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-paper-400">
                    {profile.summary}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-[11px] tracking-[0.25em] text-accent-violet-soft uppercase">
                    Experience
                  </h4>
                  {experience.map((exp) => (
                    <div key={exp.role} className="mt-3">
                      <p className="text-[15px] font-semibold text-paper-50">{exp.role}</p>
                      <p className="mt-0.5 text-[13.5px] text-paper-400">
                        {exp.organization} · {exp.period}
                      </p>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="font-mono text-[11px] tracking-[0.25em] text-accent-violet-soft uppercase">
                    Projects
                  </h4>
                  <ul className="mt-3 space-y-3.5">
                    {projects.map((p) => (
                      <li key={p.slug}>
                        <p className="text-[15px] font-semibold text-paper-50">
                          {p.title}
                          <span className="ml-2 font-normal text-paper-500">· {p.period}</span>
                        </p>
                        <p className="mt-1 text-[13.5px] leading-relaxed text-paper-400">
                          {p.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-[11px] tracking-[0.25em] text-accent-violet-soft uppercase">
                    Education
                  </h4>
                  <p className="mt-3 text-[15px] font-semibold text-paper-50">
                    {profile.education.degree}
                  </p>
                  <p className="mt-0.5 text-[13.5px] text-paper-400">
                    {profile.education.school} · {profile.education.period}
                  </p>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-9">
                <div>
                  <h4 className="font-mono text-[11px] tracking-[0.25em] text-accent-violet-soft uppercase">
                    Certifications
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {certifications.map((c) => (
                      <li key={c.title} className="text-[13.5px] leading-relaxed text-paper-400">
                        <span className="font-medium text-paper-50">{c.title}</span>
                        <br />
                        {c.detail} · {c.issuer}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-[11px] tracking-[0.25em] text-accent-violet-soft uppercase">
                    Leadership
                  </h4>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-paper-400">
                    <span className="font-medium text-paper-50">
                      Joint Secretary, DroidLinX Club
                    </span>
                    <br />
                    Led Web Development workshops and mentored students.
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-[11px] tracking-[0.25em] text-accent-violet-soft uppercase">
                    Technical skills
                  </h4>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-paper-400">
                    {allSkills.join(" · ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
