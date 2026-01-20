// components/scroller.tsx
"use client";

import { PropsWithChildren, RefObject } from "react";

export default function SlideScroller({
  scrollerRef,
  children,
}: PropsWithChildren<{ scrollerRef: RefObject<HTMLDivElement | null> }>) {
  return (
    <div
      ref={scrollerRef}
      className="h-screen w-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      <div className="flex h-full w-full">{children}</div>
    </div>
  );
}
