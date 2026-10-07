import { Award, BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { certifications } from "@/data/certifications";

/** Elegant certificate cards — exactly the two resume certifications. */
export function CertificationsSection() {
  return (
    <section aria-label="Certifications" className="relative scroll-mt-20 py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Credentials" title="Certifications" />
        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal
              key={cert.title}
              delay={i * 0.1}
              className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-ink-900/60 p-7 transition-colors duration-300 hover:border-accent-blue/30 md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.22em] text-paper-500 uppercase">
                    {cert.issuer}
                  </p>
                  <h3 className="mt-2.5 font-display text-xl font-medium text-paper-50 md:text-[1.35rem]">
                    {cert.title}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] text-paper-400">{cert.detail}</p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-accent-blue-soft transition-colors duration-300 group-hover:border-accent-blue/40">
                  {i === 0 ? (
                    <Award aria-hidden="true" className="size-5" />
                  ) : (
                    <BadgeCheck aria-hidden="true" className="size-5" />
                  )}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
