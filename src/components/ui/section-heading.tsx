import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

/** Editorial section header: mono eyebrow + serif title + optional lede. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className,
      )}
    >
      <p
        className={cn(
          "font-mono text-xs tracking-[0.25em] uppercase text-accent-violet-soft",
          align === "center" && "flex items-center justify-center gap-3",
        )}
      >
        {align === "center" && <span aria-hidden="true" className="h-px w-8 bg-white/20" />}
        <span>{eyebrow}</span>
        {align === "center" && <span aria-hidden="true" className="h-px w-8 bg-white/20" />}
      </p>
      <h2 className="mt-4 font-display text-3xl leading-tight font-medium text-paper-50 text-balance sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-[15px] leading-relaxed text-paper-400",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
