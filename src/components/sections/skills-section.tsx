import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { skillCategories } from "@/data/skills";

/**
 * Skills grouped into engineering categories — no logo walls.
 * Subtle interactive cards: border emphasis on hover, no noise.
 */
export function SkillsSection() {
  return (
    <section id="skills" aria-label="Skills" className="relative scroll-mt-20 py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills, organized by layer"
          description="The technologies I reach for, grouped the way I think about systems — from interface to infrastructure."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <Reveal
              key={cat.id}
              delay={(i % 3) * 0.08}
              className="group rounded-xl border border-white/[0.08] bg-ink-900/60 p-6 transition-all duration-300 hover:border-accent-violet/30 hover:bg-ink-850 md:p-7"
            >
              <h3 className="flex items-center gap-3 text-[15px] font-semibold text-paper-50">
                <span
                  aria-hidden="true"
                  className="font-mono text-[11px] text-accent-blue-soft"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {cat.label}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${cat.label} skills`}>
                {cat.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-[13px] text-paper-200 transition-colors duration-200 group-hover:border-white/[0.12]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
