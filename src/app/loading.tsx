import { Container } from "@/components/ui/container";

/** Minimal loading state for route transitions. */
export default function Loading() {
  return (
    <main aria-label="Loading" className="min-h-[70vh]">
      <Container className="space-y-6 py-32">
        <div className="h-8 w-48 animate-pulse rounded-md bg-white/[0.06]" />
        <div className="h-56 animate-pulse rounded-xl border border-white/[0.08] bg-ink-900/60" />
        <div className="h-56 animate-pulse rounded-xl border border-white/[0.08] bg-ink-900/60" />
      </Container>
    </main>
  );
}
