/**
 * Horizontal slide scroller container
 * Provides snap scrolling for slide-based layouts
 */

"use client";

import { PropsWithChildren, RefObject } from "react";

interface SlideScrollerProps {
  scrollerRef: RefObject<HTMLDivElement | null>;
}

export default function SlideScroller({
  scrollerRef,
  children,
}: PropsWithChildren<SlideScrollerProps>) {
  return (
    <div
      ref={scrollerRef}
      data-scroller
      className="h-screen w-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      <div className="flex h-full w-full">{children}</div>
    </div>
  );
}
