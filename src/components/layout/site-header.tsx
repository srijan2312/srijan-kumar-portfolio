"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import { navItems } from "@/data/nav";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Minimal sticky navigation:
 * - shrinks + gains backdrop blur after scrolling
 * - active section indicator via IntersectionObserver (home) or pathname
 * - accessible mobile menu (aria-expanded, Escape to close)
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [activeId, setActiveId] = React.useState<string>("home");
  // Menu state is bound to the pathname it was opened on: navigating
  // (including back/forward) implicitly closes it — no effect needed.
  const [menu, setMenu] = React.useState({ open: false, forPath: pathname });
  const menuOpen = menu.open && menu.forPath === pathname;
  const toggleMenu = () => setMenu({ open: !menuOpen, forPath: pathname });
  const closeMenu = () => setMenu((m) => ({ ...m, open: false }));
  const isHome = pathname === "/";

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track the visible home section for the active indicator.
  React.useEffect(() => {
    if (!isHome) return;
    const ids = navItems.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  React.useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (id: string) =>
    isHome ? activeId === id : id === "projects" && pathname.startsWith("/projects");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || menuOpen
          ? "border-b border-white/[0.07] bg-ink-950/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 sm:px-8 lg:px-10",
          scrolled ? "h-14" : "h-[4.5rem]",
        )}
      >
        <Link
          href="/#home"
          className="group flex items-center gap-3"
          aria-label="Srijan Kumar — home"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-white/[0.04] font-mono text-[13px] font-medium text-paper-50 transition-colors group-hover:border-accent-violet/60"
          >
            SK
          </span>
          <span className="hidden text-sm font-medium tracking-wide text-paper-50 sm:block">
            {site.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                aria-current={isActive(item.id) ? "true" : undefined}
                className={cn(
                  "relative rounded-md px-3.5 py-2 text-[13.5px] transition-colors duration-200",
                  isActive(item.id)
                    ? "text-paper-50"
                    : "text-paper-400 hover:text-paper-50",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-3.5 -bottom-px h-px bg-gradient-to-r from-accent-violet to-accent-blue transition-opacity duration-200",
                    isActive(item.id) ? "opacity-100" : "opacity-0",
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={site.resumePath}
            download
            className="inline-flex h-9 items-center gap-2 rounded-md border border-white/15 bg-white/[0.03] px-4 text-[13px] font-medium text-paper-50 transition-colors duration-200 hover:border-white/30 hover:bg-white/[0.07]"
          >
            <Download className="size-3.5" aria-hidden="true" />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-paper-50 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
        >
          {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-white/[0.07] bg-ink-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden",
          menuOpen ? "max-h-[70vh] border-b opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="space-y-1 px-5 py-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                onClick={closeMenu}
                aria-current={isActive(item.id) ? "true" : undefined}
                className={cn(
                  "block rounded-md px-3 py-2.5 text-[15px] transition-colors",
                  isActive(item.id)
                    ? "bg-white/[0.06] text-paper-50"
                    : "text-paper-400 hover:bg-white/[0.04] hover:text-paper-50",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={site.resumePath}
              download
              className="flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-paper-50"
            >
              <Download className="size-4" aria-hidden="true" />
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
