"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Mail,
  MessageCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brands";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/data/site";
import { socials } from "@/data/socials";

const iconFor: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  leetcode: Code2,
  email: Mail,
};

/**
 * Final CTA section.
 *
 * Provides:
 * - Direct email CTA
 * - Copy-email control
 * - WhatsApp contact button
 * - GitHub, LinkedIn and LeetCode profile links
 *
 * No contact form is used because direct contact methods are
 * simpler and more reliable for a personal developer portfolio.
 */
export function ContactSection() {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (permissions / insecure context).
      // The mailto link next to it still works.
      setCopied(false);
    }
  };

  const whatsappUrl =
    "https://wa.me/918986480209?text=" +
    encodeURIComponent("Hello Srijan, I found your portfolio and would like to connect.");

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative scroll-mt-20 overflow-hidden py-28 md:py-40"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_55%_55%_at_50%_60%,rgba(139,92,246,0.12),transparent_70%),radial-gradient(ellipse_40%_40%_at_70%_30%,rgba(94,168,255,0.08),transparent_70%)]"
      />

      <Container className="relative text-center">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.28em] text-accent-violet-soft uppercase">
            Contact
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-tight font-medium text-paper-50 text-balance sm:text-5xl md:text-6xl">
            Let&apos;s build something useful.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-paper-400">
            I&apos;m looking for entry-level Software Engineer / Full-Stack
            Developer roles. If you&apos;re hiring — or just want to talk shop
            — my inbox is open.
          </p>

          {/* Primary contact actions */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
            {/* Email */}
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent(
                "Hello Srijan — "
              )}`}
              className="inline-flex h-12 items-center gap-2 rounded-md bg-paper-50 px-8 text-[15px] font-medium text-ink-950 shadow-[0_0_32px_-8px_rgba(139,92,246,0.6)] transition-colors duration-200 hover:bg-white"
            >
              <Mail aria-hidden="true" className="size-4" />
              {site.email}
            </a>

            {/* Copy email */}
            <button
              type="button"
              onClick={copyEmail}
              aria-live="polite"
              className="inline-flex h-12 items-center gap-2 rounded-md border border-white/15 bg-white/[0.03] px-5 text-sm font-medium text-paper-50 transition-colors duration-200 hover:border-white/30 hover:bg-white/[0.07]"
            >
              {copied ? (
                <>
                  <Check
                    aria-hidden="true"
                    className="size-4 text-accent-blue-soft"
                  />
                  Copied
                </>
              ) : (
                <>
                  <Copy aria-hidden="true" className="size-4" />
                  Copy email
                </>
              )}
            </button>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Srijan on WhatsApp (opens in new tab)"
              className="inline-flex h-12 items-center gap-2 rounded-md border border-white/15 bg-white/[0.03] px-5 text-sm font-medium text-paper-50 transition-all duration-200 hover:border-white/30 hover:bg-white/[0.07]"
            >
              <MessageCircle
                aria-hidden="true"
                className="size-4 text-accent-blue-soft"
              />
              WhatsApp
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 text-paper-500"
              />
            </a>
          </div>

          {/* Social links */}
          <nav aria-label="Social links" className="mt-12">
            <ul className="flex flex-wrap items-center justify-center gap-3">
              {socials
                .filter((s) => s.id !== "email")
                .map((s) => {
                  const Icon = iconFor[s.id] ?? Mail;

                  return (
                    <li key={s.id}>
                      <Link
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-paper-400 transition-colors duration-200 hover:border-white/25 hover:text-paper-50"
                      >
                        <Icon aria-hidden="true" className="size-4" />

                        {s.label}

                        <ArrowUpRight
                          aria-hidden="true"
                          className="size-3.5 text-paper-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </Reveal>
      </Container>
    </section>
  );
}