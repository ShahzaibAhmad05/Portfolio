// app/page.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import SlideDots from "@/components/dots";
import SlideScroller from "@/components/scroller";
import IntroSlide from "@/components/slides/intro";
import ProjectsSlide from "@/components/slides/projects";
import CertificatesSlide from "@/components/slides/certificates";
import ContactSlide from "@/components/slides/contact";

export type Slide = { id: string; label: string };

export const SLIDES: Slide[] = [
  { id: "intro", label: "Intro" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function Home() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  // keep active dot in sync with scroll position and track scroll progress
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onScroll = () => {
      const width = scroller.clientWidth || 1;
      const i = Math.round(scroller.scrollLeft / width);
      setActiveIndex(clamp(i, 0, slideCount - 1));
      
      // Calculate scroll progress (0 to 1)
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      const progress = maxScroll > 0 ? scroller.scrollLeft / maxScroll : 0;
      setScrollProgress(progress);
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
      {/* Animated fog effect */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Main fog layer */}
        <div 
          className="absolute top-0 w-200 h-200 opacity-50"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.5) 0%, rgba(37, 99, 235, 0.3) 30%, transparent 70%)',
            filter: 'blur(100px)',
            left: `calc(-400px + ${scrollProgress * 300}vw)`,
            top: `calc(0px + ${Math.sin(scrollProgress * Math.PI * 2) * 10}vh)`,
            transition: 'left 0.3s ease-out, top 0.3s ease-out',
          }}
        />
        {/* Secondary fog layer */}
        <div 
          className="absolute w-150 h-150 opacity-40"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.4) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)',
            filter: 'blur(80px)',
            left: `calc(-300px + ${scrollProgress * 250}vw)`,
            top: `calc(5vh + ${-Math.sin(scrollProgress * Math.PI * 2) * 15}vh)`,
            transform: `scale(${1 + scrollProgress * 0.3})`,
            transition: 'left 0.3s ease-out, top 0.3s ease-out, transform 0.3s ease-out',
          }}
        />
        {/* Tertiary fog layer */}
        <div 
          className="absolute w-125 h-125 opacity-30"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(125, 211, 252, 0.35) 0%, rgba(96, 165, 250, 0.15) 45%, transparent 70%)',
            filter: 'blur(90px)',
            left: `calc(-250px + ${scrollProgress * 220}vw)`,
            top: `calc(-2vh + ${Math.cos(scrollProgress * Math.PI * 3) * 8}vh)`,
            transform: `rotate(${scrollProgress * 360}deg)`,
            transition: 'left 0.3s ease-out, top 0.3s ease-out, transform 0.3s ease-out',
          }}
        />
      </div>

      {/* Top dots */}
      <div className="pointer-events-none fixed inset-x-0 top-6 z-10 flex items-center justify-center">
        <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60">
          {dots}
        </div>
      </div>

      <SlideScroller scrollerRef={scrollerRef}>
        <IntroSlide 
          onNext={() => scrollToIndex(activeIndex + 1)}
          showScrollIndicator={activeIndex === 0}
        />

        <ProjectsSlide />
        <CertificatesSlide />
        <ContactSlide />
      </SlideScroller>
    </div>
  );
}
