import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[70vh] items-center">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_40%,rgba(139,92,246,0.1),transparent_70%)]"
      />
      <Container className="relative py-32 text-center">
        <p className="font-mono text-sm tracking-[0.3em] text-accent-violet-soft uppercase">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-medium text-paper-50 sm:text-5xl">
          This route doesn&apos;t exist.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] text-paper-400">
          The page you&apos;re looking for was moved, renamed, or never shipped.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center gap-2 rounded-md border border-white/15 bg-white/[0.03] px-6 text-sm font-medium text-paper-50 transition-colors duration-200 hover:border-white/30 hover:bg-white/[0.07]"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to home
        </Link>
      </Container>
    </main>
  );
}
