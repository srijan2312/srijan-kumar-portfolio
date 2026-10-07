import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/experience";

/** Elegant vertical timeline. Content is verbatim from the resume. */
export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="relative scroll-mt-20 border-y border-white/[0.07] bg-ink-900/50 py-24 md:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Applied, mentor-guided training — presented exactly as it was, without inflation."
        />
        <ol className="relative ml-2 space-y-10 border-l border-white/10 pl-8 md:ml-4 md:pl-12">
          {experience.map((exp, i) => (
            <Reveal as="li" key={`${exp.role}-${exp.organization}`} delay={i * 0.1} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-8 flex h-4 w-4 items-center justify-center md:-left-12"
              >
                <span className="absolute h-4 w-4 rounded-full border border-accent-violet/50" />
                <span className="h-1.5 w-1.5 rounded-full bg-accent-violet" />
              </span>
              <article className="rounded-xl border border-white/[0.08] bg-ink-900/70 p-6 transition-colors duration-300 hover:border-white/[0.16] md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-medium text-paper-50 md:text-2xl">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-xs tracking-wide text-paper-500">{exp.period}</p>
                </div>
                <p className="mt-1.5 text-[15px] font-medium text-accent-blue-soft">
                  {exp.organization}
                </p>
                <ul className="mt-5 space-y-3.5">
                  {exp.highlights.map((h) => (
                    <li
                      key={h.slice(0, 32)}
                      className="flex gap-3 text-[14.5px] leading-relaxed text-paper-400"
                    >
                      <span aria-hidden="true" className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent-violet" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2" aria-label="Technologies and themes">
                  {exp.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
