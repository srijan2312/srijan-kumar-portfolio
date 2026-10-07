import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const principles = [
  {
    n: "01",
    title: "Understand",
    text: "Understand the problem before writing code.",
  },
  {
    n: "02",
    title: "Architect",
    text: "Design clean boundaries between UI, APIs, data and infrastructure.",
  },
  {
    n: "03",
    title: "Build",
    text: "Implement maintainable, testable features.",
  },
  {
    n: "04",
    title: "Improve",
    text: "Measure, debug, optimize and iterate.",
  },
];

/**
 * "How I Build" — presentation principles rendered as an engineering
 * process strip: oversized serif numerals, a connecting rule, and
 * restrained hover emphasis. No claims of professional experience.
 */
export function HowIBuildSection() {
  return (
    <section
      id="how-i-build"
      aria-label="How I build"
      className="relative scroll-mt-20 border-y border-white/[0.07] bg-ink-900/50 py-24 md:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="How I build"
          description="Four principles I apply to every project — from a weekend build to a production system."
        />
        <ol className="grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal as="li" key={p.n} delay={i * 0.08} className="group bg-ink-900 p-7 transition-colors duration-300 hover:bg-ink-850 md:p-8">
              <p
                aria-hidden="true"
                className="font-display text-6xl font-medium text-white/[0.1] transition-colors duration-300 group-hover:text-accent-violet/30 md:text-7xl"
              >
                {p.n}
              </p>
              <h3 className="mt-6 text-lg font-semibold text-paper-50">{p.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-paper-400">{p.text}</p>
              <span
                aria-hidden="true"
                className="mt-6 block h-px w-10 bg-gradient-to-r from-accent-violet to-accent-blue opacity-60 transition-all duration-300 group-hover:w-full group-hover:opacity-100"
              />
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
