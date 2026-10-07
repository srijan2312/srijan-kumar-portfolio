import Link from "next/link";
import { Mail, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brands";
import { site } from "@/data/site";
import { socials } from "@/data/socials";
import { Container } from "@/components/ui/container";

const iconFor: Record<string, React.ComponentType<{ className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  leetcode: Code2,
  email: Mail,
};

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.07] bg-ink-900/60">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg text-paper-50">{site.name}</p>
          <p className="mt-1 font-mono text-xs tracking-wide text-paper-500">
            {site.role}
          </p>
        </div>

        <nav aria-label="Social links">
          <ul className="flex items-center gap-2">
            {socials.map((s) => {
              const Icon = iconFor[s.id] ?? Mail;
              return (
                <li key={s.id}>
                  <Link
                    href={s.href}
                    target={s.id === "email" ? undefined : "_blank"}
                    rel={s.id === "email" ? undefined : "noopener noreferrer"}
                    aria-label={`${site.name} on ${s.label}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-paper-400 transition-colors duration-200 hover:border-white/25 hover:text-paper-50"
                  >
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <p className="font-mono text-xs text-paper-500">
          © {year} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
