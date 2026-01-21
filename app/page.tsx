// app/page.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import SlideDots from "@/components/dots";
import SlideScroller from "@/components/scroller";
import IntroSlide from "@/components/slides/intro";
import ProjectsSlide from "@/components/slides/projects";
import CertificatesSlide from "@/components/slides/certificates";
import ContactSlide from "@/components/slides/contact";
import BackgroundEffects from "@/components/background-effects";
import AppLauncher from "@/components/app-launcher";
import { useVerticalScroll } from "@/hooks/use-vertical-scroll";

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
  const scrollAnimationRef = useRef<number | null>(null);
  
  // GNOME-like overview effect (scroll DOWN to activate)
  const { overviewActive, scaleAmount, translateY, dismiss } = useVerticalScroll();

  const smoothScrollTo = (element: HTMLElement, target: number, duration: number) => {
    const start = element.scrollLeft;
    const distance = target - start;
    const startTime = performance.now();

    // Temporarily disable snap scrolling during animation
    element.style.scrollSnapType = 'none';

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      
      element.scrollLeft = start + distance * easedProgress;

      if (progress < 1) {
        scrollAnimationRef.current = requestAnimationFrame(animate);
      } else {
        scrollAnimationRef.current = null;
        // Re-enable snap scrolling after animation completes
        element.style.scrollSnapType = '';
      }
    };

    if (scrollAnimationRef.current !== null) {
      cancelAnimationFrame(scrollAnimationRef.current);
    }
    
    scrollAnimationRef.current = requestAnimationFrame(animate);
  };

  const scrollToIndex = (index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const i = clamp(index, 0, slideCount - 1);
    const width = scroller.clientWidth || 1;
    const targetScroll = i * width;

    smoothScrollTo(scroller, targetScroll, 1200);
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

  // Clean up scroll animation on unmount
  useEffect(() => {
    return () => {
      if (scrollAnimationRef.current !== null) {
        cancelAnimationFrame(scrollAnimationRef.current);
      }
    };
  }, []);

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

  // Hide smoke on contact slide (index 3)
  const isContactSlide = activeIndex === 3;

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50 overflow-hidden">
      {/* Animated fog effect - hidden on contact slide */}
      <BackgroundEffects 
        scrollProgress={scrollProgress}
        isVisible={!isContactSlide}
      />

      {/* Main content container with GNOME-like transform */}
      <div 
        className="transition-all duration-300 ease-out origin-top cursor-pointer"
        style={{
          transform: `scale(${scaleAmount}) translateY(${translateY}px)`,
        }}
        onClick={overviewActive ? dismiss : undefined}
      >
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

      {/* GNOME-like app launcher dock */}
      <AppLauncher isActive={overviewActive} />
    </div>
  );
}