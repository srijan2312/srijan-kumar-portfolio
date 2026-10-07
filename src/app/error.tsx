"use client";

import * as React from "react";
import { RotateCcw } from "lucide-react";
import { Container } from "@/components/ui/container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Surface to server logs / monitoring in production.
    console.error("Route error:", error);
  }, [error ]);

  return (
    <main className="relative flex min-h-[70vh] items-center">
      <Container className="relative py-32 text-center">
        <p className="font-mono text-sm tracking-[0.3em] text-accent-violet-soft uppercase">
          Something broke
        </p>
        <h1 className="mt-4 font-display text-4xl font-medium text-paper-50 sm:text-5xl">
          This section failed to load.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] text-paper-400">
          An unexpected error occurred while rendering this page. Try again — if
          it persists, reach me directly by email.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex h-11 items-center gap-2 rounded-md bg-paper-50 px-6 text-sm font-medium text-ink-950 transition-colors duration-200 hover:bg-white"
        >
          <RotateCcw aria-hidden="true" className="size-4" />
          Try again
        </button>
      </Container>
    </main>
  );
}
