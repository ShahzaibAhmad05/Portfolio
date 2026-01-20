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
  const scrollAnimationRef = useRef<number | null>(null);

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

    smoothScrollTo(scroller, targetScroll, 800);
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
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50">
      {/* Animated fog effect - hidden on contact slide */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-700"
        style={{ opacity: isContactSlide ? 0 : 1 }}
      >
        {/* Deep Navy - Background Layer */}
        <div 
          className="absolute w-150 h-150 opacity-40"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.5) 0%, rgba(29, 78, 216, 0.3) 30%, transparent 65%)',
            filter: 'blur(120px)',
            left: `${-200 + scrollProgress * 50}px`,
            top: '10vh',
            animation: 'smokeFloat1 45s ease-in-out infinite',
          }}
        />
        
        {/* Sky Blue - Bright Accent */}
        <div 
          className="absolute w-125 h-125 opacity-45"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.5) 0%, rgba(14, 165, 233, 0.3) 35%, transparent 70%)',
            filter: 'blur(100px)',
            right: `${-150 + scrollProgress * 40}px`,
            top: '5vh',
            animation: 'smokeFloat2 50s ease-in-out infinite',
          }}
        />
        
        {/* Royal Blue - Mid Layer */}
        <div 
          className="absolute w-137.5 h-137.5 opacity-38"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.45) 0%, rgba(37, 99, 235, 0.25) 35%, transparent 68%)',
            filter: 'blur(110px)',
            left: `${30 + scrollProgress * 35}vw`,
            bottom: '15vh',
            animation: 'smokeFloat3 55s ease-in-out infinite',
          }}
        />
        
        {/* Cyan Blue - Corner Accent */}
        <div 
          className="absolute w-112.5 h-112.5 opacity-42"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(125, 211, 252, 0.48) 0%, rgba(56, 189, 248, 0.28) 38%, transparent 70%)',
            filter: 'blur(95px)',
            left: `${-180 + scrollProgress * 45}px`,
            bottom: '8vh',
            animation: 'smokeFloat4 48s ease-in-out infinite',
          }}
        />
        
        {/* Azure - Floating Center */}
        <div 
          className="absolute w-120 h-120 opacity-35"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.4) 0%, rgba(59, 130, 246, 0.22) 40%, transparent 68%)',
            filter: 'blur(105px)',
            left: `${40 + scrollProgress * 30}vw`,
            top: '25vh',
            animation: 'smokeFloat5 52s ease-in-out infinite',
          }}
        />
        
        {/* Indigo - Deep Accent */}
        <div 
          className="absolute w-130 h-130 opacity-36"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(67, 56, 202, 0.42) 0%, rgba(99, 102, 241, 0.24) 36%, transparent 70%)',
            filter: 'blur(115px)',
            right: `${-160 + scrollProgress * 38}px`,
            bottom: '12vh',
            animation: 'smokeFloat6 58s ease-in-out infinite',
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
