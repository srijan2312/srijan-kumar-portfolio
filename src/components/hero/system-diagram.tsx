"use client";

import * as React from "react";

interface NodeDef {
  id: string;
  x: number;
  y: number;
  label: string;
  sub: string;
  accent: "violet" | "blue";
}

interface EdgeDef {
  from: string;
  to: string;
  /** Which side of the nodes the edge leaves/enters: keeps math axis-aligned. */
  axis: "h" | "v";
}

const NODES: NodeDef[] = [
  { id: "react", x: 112, y: 108, label: "REACT", sub: "UI Layer · Next.js", accent: "blue" },
  { id: "api", x: 300, y: 108, label: "REST API", sub: "JSON · Express routes", accent: "violet" },
  { id: "node", x: 488, y: 108, label: "NODE.JS", sub: "Runtime · Express", accent: "blue" },
  { id: "aws", x: 112, y: 328, label: "AWS", sub: "Cloud · EC2 / S3", accent: "violet" },
  { id: "docker", x: 300, y: 328, label: "DOCKER", sub: "Container", accent: "blue" },
  { id: "mongodb", x: 488, y: 328, label: "MONGODB", sub: "Database", accent: "violet" },
];

const EDGES: EdgeDef[] = [
  { from: "react", to: "api", axis: "h" },
  { from: "api", to: "node", axis: "h" },
  { from: "node", to: "mongodb", axis: "v" },
  { from: "api", to: "docker", axis: "v" },
  { from: "docker", to: "aws", axis: "h" },
];

const NODE_W = 148;
const NODE_H = 62;
const REACT_RADIUS = 170;
const MAX_SHIFT = 12;

/**
 * Abstract "engineering system" visualization — a miniature software
 * architecture diagram. Nodes subtly drift toward the cursor; connection
 * lines re-anchor to the shifted nodes. Pure SVG, no WebGL.
 * Fully static when the user prefers reduced motion.
 */
export function SystemDiagram() {
  const svgRef = React.useRef<SVGSVGElement>(null);
  const [pointer, setPointer] = React.useState<{ x: number; y: number } | null>(null);

  const onPointerMove = React.useCallback((e: React.PointerEvent) => {
    // Reduced-motion preference is checked at event time — no state, no
    // effect, no hydration mismatch. The CSS flow animation is disabled
    // for reduced motion by the global stylesheet instead.
    if (
      !svgRef.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const rect = svgRef.current.getBoundingClientRect();
    // Convert client coords to viewBox coords.
    const x = ((e.clientX - rect.left) / rect.width) * 600;
    const y = ((e.clientY - rect.top) / rect.height) * 440;
    setPointer({ x, y });
  }, []);

  /** Per-node shift toward the cursor, decaying with distance. */
  const shifts = React.useMemo(() => {
    const map = new Map<string, { dx: number; dy: number }>();
    for (const n of NODES) {
      if (!pointer) {
        map.set(n.id, { dx: 0, dy: 0 });
        continue;
      }
      const vx = pointer.x - n.x;
      const vy = pointer.y - n.y;
      const dist = Math.hypot(vx, vy);
      if (dist > REACT_RADIUS || dist === 0) {
        map.set(n.id, { dx: 0, dy: 0 });
        continue;
      }
      const strength = (1 - dist / REACT_RADIUS) * MAX_SHIFT;
      map.set(n.id, { dx: (vx / dist) * strength, dy: (vy / dist) * strength });
    }
    return map;
  }, [pointer]);

  const nodeById = React.useMemo(() => new Map(NODES.map((n) => [n.id, n])), []);

  const edgeCoords = (e: EdgeDef) => {
    const a = nodeById.get(e.from)!;
    const b = nodeById.get(e.to)!;
    const sa = shifts.get(e.from)!;
    const sb = shifts.get(e.to)!;
    const ax = a.x + sa.dx;
    const ay = a.y + sa.dy;
    const bx = b.x + sb.dx;
    const by = b.y + sb.dy;
    if (e.axis === "h") {
      const dir = bx > ax ? 1 : -1;
      return { x1: ax + dir * (NODE_W / 2), y1: ay, x2: bx - dir * (NODE_W / 2), y2: by };
    }
    const dir = by > ay ? 1 : -1;
    return { x1: ax, y1: ay + dir * (NODE_H / 2), x2: bx, y2: by - dir * (NODE_H / 2) };
  };

  return (
    <figure aria-label="Interactive diagram of the software stack: React, REST API, Node.js, MongoDB, Docker and AWS as connected architectural nodes">
      <svg
        ref={svgRef}
        viewBox="0 0 600 440"
        role="img"
        onPointerMove={onPointerMove}
        onPointerLeave={() => setPointer(null)}
        className="h-auto w-full touch-none"
      >
        <defs>
          {/* userSpaceOnUse: <line> elements have a zero-area bounding box,
              which makes objectBoundingBox gradients unpaintable. */}
          <linearGradient
            id="edge-grad"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="600"
            y2="440"
          >
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#5ea8ff" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* Connections */}
        {EDGES.map((e) => {
          const c = edgeCoords(e);
          return (
            <line
              key={`${e.from}-${e.to}`}
              x1={c.x1}
              y1={c.y1}
              x2={c.x2}
              y2={c.y2}
              stroke="url(#edge-grad)"
              strokeWidth={1.5}
              strokeDasharray="7 9"
              className="animate-flow"
              style={{
                transition: "x1 0.25s ease, y1 0.25s ease, x2 0.25s ease, y2 0.25s ease",
              }}
            />
          );
        })}

        {/* Nodes */}
        {NODES.map((n) => {
          const s = shifts.get(n.id)!;
          return (
            <g
              key={n.id}
              style={{
                transform: `translate(${s.dx}px, ${s.dy}px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              <rect
                x={n.x - NODE_W / 2}
                y={n.y - NODE_H / 2}
                width={NODE_W}
                height={NODE_H}
                rx={8}
                fill="#0f0f14"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth={1}
              />
              <rect
                x={n.x - NODE_W / 2}
                y={n.y - NODE_H / 2}
                width={NODE_W}
                height={NODE_H}
                rx={8}
                fill="none"
                stroke={n.accent === "violet" ? "#8b5cf6" : "#5ea8ff"}
                strokeOpacity={0.25}
                strokeWidth={1}
              />
              <circle
                cx={n.x - NODE_W / 2 + 16}
                cy={n.y - NODE_H / 2 + 16}
                r={3.5}
                fill={n.accent === "violet" ? "#8b5cf6" : "#5ea8ff"}
                className="animate-node-pulse"
              />
              <text
                x={n.x}
                y={n.y - 4}
                textAnchor="middle"
                fill="#f4f3ee"
                fontSize={13}
                fontFamily="var(--font-jbmono), monospace"
                letterSpacing={2}
              >
                {n.label}
              </text>
              <text
                x={n.x}
                y={n.y + 16}
                textAnchor="middle"
                fill="#a3a29b"
                fontSize={10.5}
                fontFamily="var(--font-jbmono), monospace"
              >
                {n.sub}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-3 text-center font-mono text-[11px] tracking-[0.2em] text-paper-500 uppercase">
        fig. 01 — the stack I build with
      </figcaption>
    </figure>
  );
}
