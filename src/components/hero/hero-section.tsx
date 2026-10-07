"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, ArrowDown } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SystemDiagram } from "./system-diagram";

/**
 * Hero section with:
 * - Staggered CSS entrance animation
 * - Repeating typewriter effect on the professional title
 * - Responsive system architecture visualization
 */
export function HeroSection() {
  const enter = (delay: number) =>
    ({ style: { animationDelay: `${delay}s` } }) as const;

  // Text used by the repeating typewriter effect.
  const typewriterText = "Full-Stack Software Engineer";

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  /**
   * Repeating typewriter effect:
   *
   * Type:
   * F → Fu → Ful → ... → Full-Stack Software Engineer
   *
   * Pause briefly.
   *
   * Delete:
   * Full-Stack Software Enginee → ... → ""
   *
   * Then repeat.
   */
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === typewriterText) {
      // Keep the complete title visible before deleting it.
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && displayText === "") {
      // Small pause before starting the next typing cycle.
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    } else {
      timeout = setTimeout(
        () => {
          if (isDeleting) {
            setDisplayText((current) =>
              current.slice(0, current.length - 1)
            );
          } else {
            setDisplayText(
              typewriterText.slice(0, displayText.length + 1)
            );
          }
        },
        isDeleting ? 45 : 85
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative overflow-hidden"
    >
      {/* Atmospheric backdrop */}
      <div
        aria-hidden="true"
        className="blueprint-grid absolute inset-0"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_30%_30%,rgba(139,92,246,0.13),transparent_70%),radial-gradient(ellipse_50%_40%_at_75%_65%,rgba(94,168,255,0.1),transparent_70%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 pt-36 pb-20 md:pt-44 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pb-28">
          {/* Left: identity + positioning */}
          <div className="max-w-xl">
            <p
              className="hero-enter font-mono text-xs tracking-[0.28em] text-accent-violet-soft uppercase"
              {...enter(0.1)}
            >
              Computer Science Engineering Graduate
            </p>

            <h1
              className="hero-enter mt-5 font-display text-5xl leading-[1.04] font-medium tracking-tight text-paper-50 text-balance sm:text-6xl lg:text-[4.4rem]"
              {...enter(0.19)}
            >
              Srijan Kumar
            </h1>

            {/* Repeating typewriter title */}
            <p
              className="hero-enter mt-4 font-display text-2xl text-paper-200 italic sm:text-[1.7rem]"
              {...enter(0.28)}
              aria-label={typewriterText}
            >
              {displayText}

              <span
                aria-hidden="true"
                className="ml-1 inline-block font-sans not-italic text-accent-violet-soft animate-pulse"
              >
                |
              </span>
            </p>

            <p
              className="hero-enter mt-6 max-w-lg text-[16px] leading-relaxed text-paper-400"
              {...enter(0.37)}
            >
              {site.tagline}
            </p>

            <div
              className="hero-enter mt-9 flex flex-wrap items-center gap-3.5"
              {...enter(0.46)}
            >
              <Link
                href="/#projects"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                View Projects
                <ArrowRight aria-hidden="true" />
              </Link>

              <a
                href={site.resumePath}
                download
                className={cn(
                  buttonVariants({
                    variant: "secondary",
                    size: "lg",
                  })
                )}
              >
                <Download aria-hidden="true" />
                View Resume
              </a>
            </div>

            {/* Contact / professional positioning */}
            <p
              className="hero-enter mt-6 text-[15px] text-paper-400"
              {...enter(0.55)}
            >
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-1.5 text-paper-200 underline decoration-white/20 underline-offset-4 transition-colors hover:text-paper-50 hover:decoration-accent-violet"
              >
                Contact me

                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <span
                className="mx-3 text-paper-500"
                aria-hidden="true"
              >
                ·
              </span>

              <span className="font-mono text-[13px]">
                Bihar, India · Full-Stack Developer
              </span>
            </p>
          </div>

          {/* Right: engineering system visualization */}
          <div
            className="hero-enter relative"
            {...enter(0.4)}
          >
            <div className="relative rounded-xl border border-white/[0.09] bg-ink-900/70 p-4 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.8)] backdrop-blur-sm sm:p-6">
              {/* Blueprint corner ticks */}
              <span
                aria-hidden="true"
                className="absolute -top-px -left-px h-4 w-4 border-t-2 border-l-2 border-accent-violet/60"
              />

              <span
                aria-hidden="true"
                className="absolute -top-px -right-px h-4 w-4 border-t-2 border-r-2 border-accent-violet/60"
              />

              <span
                aria-hidden="true"
                className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-accent-blue/60"
              />

              <span
                aria-hidden="true"
                className="absolute -right-px -bottom-px h-4 w-4 border-r-2 border-b-2 border-accent-blue/60"
              />

              <SystemDiagram />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className="relative flex justify-center pb-10"
          aria-hidden="true"
        >
          <span className="animate-cue text-paper-500">
            <ArrowDown className="size-5" />
          </span>
        </div>
      </Container>
    </section>
  );
}
