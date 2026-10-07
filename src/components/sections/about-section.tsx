import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const facts = [
  { label: "Education", value: "Chandigarh University" },
  { label: "Degree", value: "B.E. Computer Science Engineering" },
  { label: "Focus", value: "Full-Stack Development" },
  { label: "DSA", value: "200+ coding challenges" },
  { label: "Experience", value: "Blockchain Technology Trainee" },
  { label: "Location", value: "Bettiah, Bihar, India" },
];

/** Editorial split: narrative left, compact engineering facts right. */
export function AboutSection() {
  return (
    <section id="about" aria-label="About" className="relative scroll-mt-20 py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="About" title="Engineer, not just a coder." />
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal className="space-y-5 text-[16px] leading-relaxed text-paper-400">
            <p>
              I&apos;m a Computer Science Engineering graduate from{" "}
              <strong className="font-medium text-paper-50">Chandigarh University</strong>{" "}
              who works across the full stack — designing React interfaces, building
              Node.js/Express REST APIs with JWT authentication, modeling data in
              MongoDB, and deploying with Docker and AWS.
            </p>
            <p>
              My foundation is problem-solving:{" "}
              <strong className="font-medium text-paper-50">200+ DSA challenges solved</strong>,
              and applied training in blockchain development on{" "}
              <strong className="font-medium text-paper-50">Ethereum and Polygon</strong>{" "}
              through a mentor-guided summer programme.
            </p>
            <p>
              I care about production quality — clean boundaries between UI, APIs,
              data and infrastructure, code that&apos;s easy to test and maintain,
              and systems I can explain end to end.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.07] sm:grid-cols-2">
              {facts.map((f) => (
                <div key={f.label} className="bg-ink-900 p-5 sm:p-6">
                  <dt className="font-mono text-[11px] tracking-[0.22em] text-paper-500 uppercase">
                    {f.label}
                  </dt>
                  <dd className="mt-2 text-[15px] font-medium text-paper-50">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
