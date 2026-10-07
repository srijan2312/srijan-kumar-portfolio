"use client";

import { PROJECT_CATEGORIES, PROJECT_CATEGORY_LABELS, type ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

export type CategoryFilter = ProjectCategory | "all";

const OPTIONS: { value: CategoryFilter; label: string }[] = [
  { value: "all", label: "All" },
  ...PROJECT_CATEGORIES.map((c) => ({ value: c as CategoryFilter, label: PROJECT_CATEGORY_LABELS[c] })),
];

interface ProjectFiltersProps {
  value: CategoryFilter;
  onChange: (value: CategoryFilter) => void;
  counts: Record<CategoryFilter, number>;
}

/**
 * Category filters. Keyboard-operable buttons with aria-pressed;
 * the parent syncs the selection to the `?category=` URL param so
 * filtered views are shareable.
 */
export function ProjectFilters({ value, onChange, counts }: ProjectFiltersProps) {
  return (
    <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2.5">
      {OPTIONS.map((opt) => {
        const active = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(opt.value)}
            className={cn(
              "inline-flex h-10 items-center gap-2 rounded-full border px-5 text-[13.5px] font-medium transition-all duration-200",
              active
                ? "border-accent-violet/60 bg-accent-violet/15 text-paper-50 shadow-[0_0_20px_-6px_rgba(139,92,246,0.6)]"
                : "border-white/10 bg-white/[0.03] text-paper-400 hover:border-white/25 hover:text-paper-50",
            )}
          >
            {opt.label}
            <span
              aria-hidden="true"
              className={cn(
                "font-mono text-[11px]",
                active ? "text-accent-violet-soft" : "text-paper-500",
              )}
            >
              {counts[opt.value]}
            </span>
          </button>
        );
      })}
    </div>
  );
}
