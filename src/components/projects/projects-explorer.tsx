"use client";

import * as React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PROJECT_CATEGORIES, type Project } from "@/types";
import { filterProjects } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { ProjectFilters, type CategoryFilter } from "./project-filters";

function isValidFilter(v: string | null): v is CategoryFilter {
  return v === "all" || (PROJECT_CATEGORIES as string[]).includes(v ?? "");
}

/**
 * Filterable project index. The active filter lives in the `?category=`
 * search param so filtered views can be shared via URL.
 */
export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const reduceMotion = useReducedMotion();

  const param = searchParams.get("category");
  const active: CategoryFilter = isValidFilter(param) ? param : "all";

  const setFilter = React.useCallback(
    (value: CategoryFilter) => {
      const next = new URLSearchParams(searchParams.toString());
      if (value === "all") next.delete("category");
      else next.set("category", value);
      const qs = next.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [router, pathname, searchParams],
  );

  const counts = React.useMemo(() => {
    const c: Record<CategoryFilter, number> = {
      all: projects.length,
      frontend: 0,
      "full-stack": 0,
      backend: 0,
      blockchain: 0,
    };
    for (const p of projects) c[p.category] += 1;
    return c;
  }, [projects]);

  const visible = React.useMemo(() => filterProjects(projects, active), [projects, active]);

  return (
    <div>
      <ProjectFilters value={active} onChange={setFilter} counts={counts} />

      <p aria-live="polite" className="mt-6 font-mono text-xs tracking-wide text-paper-500">
        Showing {visible.length} of {projects.length} project{projects.length === 1 ? "" : "s"}
        {active !== "all" ? ` in ${active.replace("-", " ")}` : ""}
      </p>

      <motion.div layout={!reduceMotion} className="mt-8 space-y-6">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((p, i) => (
            <motion.div
              key={p.slug}
              layout={!reduceMotion}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={p} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-white/15 p-12 text-center">
          <p className="text-paper-50">No projects in this category yet.</p>
          <p className="mt-2 text-sm text-paper-400">
            New work is added here as it ships — check back soon.
          </p>
        </div>
      ) : null}
    </div>
  );
}
