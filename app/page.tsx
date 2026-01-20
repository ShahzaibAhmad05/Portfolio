// app/page.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import SlideDots from "@/components/dots";
import SlideScroller from "@/components/scroller";
import IntroSlide from "@/components/slides/intro";
import ExperienceSlide from "@/components/slides/experience";
import ProjectsSlide from "@/components/slides/projects";
import CertificatesSlide from "@/components/slides/certificates";

export type Slide = { id: string; label: string };

export const SLIDES: Slide[] = [
  { id: "intro", label: "Intro" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
];

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function Home() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slideCount = SLIDES.length;

  const scrollToIndex = (index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const i = clamp(index, 0, slideCount - 1);
    const width = scroller.clientWidth || 1;

    scroller.scrollTo({
      left: i * width,
      behavior: "smooth",
    });
  };

  // keep active dot in sync with scroll position
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onScroll = () => {
      const width = scroller.clientWidth || 1;
      const i = Math.round(scroller.scrollLeft / width);
      setActiveIndex(clamp(i, 0, slideCount - 1));
    };

    onScroll();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, [slideCount]);

  // keyboard support
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") scrollToIndex(activeIndex + 1);
      if (e.key === "ArrowLeft") scrollToIndex(activeIndex - 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  const dots = useMemo(
    () => (
      <SlideDots
        slides={SLIDES}
        activeIndex={activeIndex}
        onDotClick={scrollToIndex}
      />
    ),
    [activeIndex]
  );

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50">
      <SlideScroller scrollerRef={scrollerRef}>
        <IntroSlide onNext={() => scrollToIndex(activeIndex + 1)} />

        <ExperienceSlide />
        <ProjectsSlide />
        <CertificatesSlide />
      </SlideScroller>

      {/* Bottom dots */}
      <div className="pointer-events-none fixed inset-x-0 bottom-6 z-10 flex items-center justify-center">
        <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60">
          {dots}
        </div>
      </div>
    </div>
  );
}
