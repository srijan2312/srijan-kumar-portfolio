"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds for staggered sequences. */
  delay?: number;
  as?: "div" | "section" | "article" | "li";
}

/**
 * Scroll reveal driven by IntersectionObserver + CSS transitions.
 *
 * Deliberately not built on JS animation libraries: the hidden state is
 * CSS-scoped behind `html.js` (set by an inline script in <head>), so the
 * content can never get stuck invisible — not without JS, not with
 * prefers-reduced-motion, and not across hydration.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Ancient browsers without IntersectionObserver: reveal immediately via
    // direct DOM update (this component never re-renders after mount, so
    // React won't clobber the class).
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("reveal-visible");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "-80px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as "div";

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      className={cn("reveal", visible && "reveal-visible", className)}
    >
      {children}
    </Tag>
  );
}
