import { Trophy, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { achievements } from "@/data/achievements";

/** Compact but distinctive: a stat block + a leadership card. Nothing inflated. */
export function AchievementsSection() {
  const [dsa, leadership] = achievements;
  return (
    <section
      id="achievements"
      aria-label="Achievements"
      className="relative scroll-mt-20 border-y border-white/[0.07] bg-ink-900/50 py-24 md:py-32"
    >
      <Container>
        <SectionHeading eyebrow="Proof of work" title="Achievements" />
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-ink-900 p-8 md:p-10">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_20%_20%,rgba(139,92,246,0.14),transparent_70%)]"
            />
            <Trophy aria-hidden="true" className="relative size-6 text-accent-violet-soft" />
            <p className="relative mt-6 font-display text-6xl font-medium text-paper-50 md:text-7xl">
              200<span className="text-accent-violet-soft">+</span>
            </p>
            <h3 className="relative mt-3 text-[15px] font-semibold text-paper-50">
              {dsa.title}
            </h3>
            <p className="relative mt-2 max-w-md text-[14.5px] leading-relaxed text-paper-400">
              {dsa.detail}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="rounded-xl border border-white/[0.08] bg-ink-900 p-8 md:p-10">
            <Users aria-hidden="true" className="size-6 text-accent-blue-soft" />
            <h3 className="mt-6 text-xl font-semibold text-paper-50">{leadership.title}</h3>
            <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-paper-400">
              {leadership.detail}
            </p>
            <p className="mt-5 font-mono text-[11px] tracking-[0.2em] text-paper-500 uppercase">
              Web dev workshops · Peer mentoring
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
