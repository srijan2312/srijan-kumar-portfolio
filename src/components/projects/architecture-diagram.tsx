import type { ArchitectureLayer } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Elegant vertical architecture flow diagram.
 * Renders the project's real layer stack (client → UI → API → runtime → DB)
 * as a technical blueprint. Pure CSS/SVG — no client JS required.
 */
export function ArchitectureDiagram({ layers }: { layers: ArchitectureLayer[] }) {
  return (
    <figure
      aria-label="System architecture diagram"
      className="overflow-hidden rounded-xl border border-white/[0.08] bg-ink-900/60"
    >
      <figcaption className="border-b border-white/[0.07] px-6 py-4 font-mono text-[11px] tracking-[0.22em] text-paper-500 uppercase">
        System architecture
      </figcaption>
      <ol className="px-6 py-6 sm:px-10 sm:py-8">
        {layers.map((layer, i) => (
          <li key={layer.label} className="relative">
            <div
              className={cn(
                "flex flex-col gap-1 rounded-lg border border-white/[0.09] bg-ink-850 px-5 py-4 transition-colors duration-200 hover:border-accent-violet/40 sm:flex-row sm:items-center sm:justify-between",
              )}
            >
              <span className="flex items-center gap-3.5">
                <span
                  aria-hidden="true"
                  className="font-mono text-[11px] text-accent-blue-soft"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[13.5px] tracking-wide text-paper-50">
                  {layer.label}
                </span>
              </span>
              {layer.detail ? (
                <span className="pl-8 text-[13px] text-paper-400 sm:pl-0 sm:text-right">
                  {layer.detail}
                </span>
              ) : null}
            </div>
            {i < layers.length - 1 ? (
              <div aria-hidden="true" className="flex justify-center py-1.5">
                <svg width="14" height="30" viewBox="0 0 14 30" className="overflow-visible">
                  <line
                    x1="7"
                    y1="0"
                    x2="7"
                    y2="22"
                    stroke={`url(#arch-edge-${i})`}
                    strokeWidth="1.5"
                    strokeDasharray="4 5"
                    className="animate-flow"
                  />
                  <path d="M2.5 20 L7 26 L11.5 20" fill="none" stroke="#5ea8ff" strokeWidth="1.5" />
                  <defs>
                    {/* userSpaceOnUse: vertical <line> has a zero-width bbox,
                        which makes objectBoundingBox gradients unpaintable. */}
                    <linearGradient
                      id={`arch-edge-${i}`}
                      gradientUnits="userSpaceOnUse"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="30"
                    >
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#5ea8ff" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </figure>
  );
}
