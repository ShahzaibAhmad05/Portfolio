// components/dots.tsx
"use client";

import type { Slide } from "@/lib/types";

export default function SlideDots({
  slides = [],
  activeIndex,
  onDotClick,
}: {
  slides?: Slide[];
  activeIndex: number;
  onDotClick: (index: number) => void;
}) {
  return (
    <>
      {slides.map((s, i) => (
        <button
          key={s.id}
          type="button"
          aria-label={`Go to ${s.label}`}
          aria-current={i === activeIndex ? "true" : "false"}
          onClick={() => onDotClick(i)}
          className={[
            "h-2.5 w-2.5 rounded-full transition",
            i === activeIndex
              ? "bg-zinc-900 dark:bg-zinc-50"
              : "bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-600",
          ].join(" ")}
        />
      ))}
    </>
  );
}
