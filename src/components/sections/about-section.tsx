import Image from "next/image";
import { Container } from "@/components/ui/container";

const details = [
  {
    label: "Education",
    value: "Chandigarh University",
  },
  {
    label: "Degree",
    value: "B.E. Computer Science Engineering",
  },
  {
    label: "Focus",
    value: "Full-Stack Development",
  },
  {
    label: "DSA",
    value: "200+ Coding Challenges",
  },
  {
    label: "Experience",
    value: "Blockchain Technology Trainee",
  },
  {
    label: "Location",
    value: "Bettiah, Bihar, India",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_45%_at_10%_45%,rgba(139,92,246,0.07),transparent_75%)]"
      />

      <Container className="relative">
        {/* Section heading */}
        <div className="mb-12 sm:mb-16">
          <p className="font-mono text-xs tracking-[0.25em] text-accent-violet-soft uppercase">
            About
          </p>

          <h2
            id="about-heading"
            className="mt-4 max-w-3xl font-display text-4xl leading-tight font-medium tracking-tight text-paper-50 sm:text-5xl lg:text-6xl"
          >
            Engineer, not just a coder.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-paper-400 sm:text-lg sm:leading-8">
            I enjoy understanding how things work, solving problems, and
            building software that is useful beyond the development
            environment.
          </p>
        </div>

        {/* Portrait + biography + details */}
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(230px,0.72fr)_minmax(0,1.5fr)] lg:gap-14 xl:gap-20">
          {/* Personal photo */}
          <div className="mx-auto w-full max-w-[320px] lg:mx-0 lg:max-w-none">
            <div className="relative rounded-2xl border border-white/[0.10] bg-ink-900 p-2 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.9)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ink-800">
                <Image
                  src="/images/profile.png"
                  alt="Srijan Kumar, Full-Stack Developer"
                  fill
                  sizes="(max-width: 1023px) 320px, 30vw"
                  quality={100}
                  className="object-cover object-top"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent"
                />

                <span
                  aria-hidden="true"
                  className="absolute top-4 left-4 h-6 w-6 border-t border-l border-white/70"
                />

                <span
                  aria-hidden="true"
                  className="absolute right-4 bottom-4 h-6 w-6 border-r border-b border-white/70"
                />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3 px-1">
              <div>
                <p className="font-display text-xl text-paper-50">
                  Srijan Kumar
                </p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.16em] text-paper-500 uppercase">
                  Software Engineer
                </p>
              </div>

              <span className="flex items-center gap-2 rounded-full border border-white/[0.10] px-3 py-2 font-mono text-[10px] text-paper-400">
                <span className="size-1.5 rounded-full bg-accent-violet-soft" />
                Profile
              </span>
            </div>
          </div>

          {/* Biography and professional information */}
          <div className="min-w-0">
            <div className="space-y-5 text-[15px] leading-7 text-paper-400 sm:text-base sm:leading-8">
              <p>
                I am a Computer Science Engineering graduate from{" "}
                <span className="text-paper-200">
                  Chandigarh University
                </span>
                , with a focus on full-stack web development. I work with
                React and Next.js on the frontend, Node.js and Express
                for APIs, and MongoDB for data storage.
              </p>

              <p>
                My technical foundation includes problem-solving and{" "}
                <span className="text-paper-200">
                  200+ coding challenges
                </span>
                . I have also completed mentor-guided blockchain training
                involving Ethereum and Polygon.
              </p>

              <p>
                I value clean code, maintainable architecture, reliable
                APIs, and practical solutions. My goal is to build
                applications that are easy to understand, test, deploy,
                and improve.
              </p>
            </div>

            {/* Information grid */}
            <div className="mt-9 grid grid-cols-1 overflow-hidden rounded-xl border border-white/[0.10] sm:grid-cols-2">
              {details.map((item, index) => (
                <div
                  key={item.label}
                  className={`min-w-0 p-5 sm:p-6 ${
                    index % 2 === 0
                      ? "sm:border-r sm:border-white/[0.08]"
                      : ""
                  } ${
                    index < 4
                      ? "border-b border-white/[0.08]"
                      : ""
                  }`}
                >
                  <p className="font-mono text-[10px] tracking-[0.2em] text-paper-500 uppercase">
                    {item.label}
                  </p>

                  <p className="mt-3 break-words text-sm leading-6 font-medium text-paper-200 sm:text-[15px]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}