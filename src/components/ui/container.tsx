import * as React from "react";
import { cn } from "@/lib/utils";

/** Centered content column; max-w tuned for editorial reading at desktop. */
export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10", className)}
      {...props}
    />
  );
}
