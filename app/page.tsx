/**
 * Portfolio Homepage
 * Main page with horizontal slide navigation and GNOME-like overview effect
 */

"use client";

import { useMemo, useState } from "react";
import { SLIDES } from "@/lib/constants";
import { useVerticalScroll, useSlideScroller } from "@/lib/hooks";

// UI Components
import SlideDots from "@/ui/components/slide-dots";
import SlideScroller from "@/ui/components/slide-scroller";
import BackgroundEffects from "@/ui/effects/background-effects";

// Feature Components
import IntroSlide from "@/features/intro/intro-slide";
import ProjectsSlide from "@/features/projects/projects-slide";
import CertificatesSlide from "@/features/certificates/certificates-slide";
import ContactSlide from "@/features/contact/contact-slide";
import AppLauncher from "@/features/app-launcher/app-launcher";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const slideCount = SLIDES.length;
  
  // GNOME-like overview effect (scroll DOWN to activate)
  const { overviewActive, scaleAmount, dismiss, activate } = useVerticalScroll();

  // Horizontal slide scrolling
  const { scrollerRef, activeIndex, scrollToIndex } = useSlideScroller({
    slideCount,
    onScrollProgressChange: setScrollProgress,
  });

  const dots = useMemo(
    () => (
      <SlideDots
        slides={SLIDES}
        activeIndex={activeIndex}
        onDotClick={scrollToIndex}
      />
    ),
    [activeIndex, scrollToIndex]
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
        className="fixed inset-0 flex items-start justify-center transition-all duration-300 ease-out"
        style={{
          zIndex: overviewActive ? 30 : 10,
          paddingTop: overviewActive ? '0.75rem' : '0',
          paddingBottom: overviewActive ? '7rem' : '0',
          margin: overviewActive ? '-1.5rem' : '0',
          marginLeft: overviewActive ? '-2rem' : '0',
          marginRight: overviewActive ? '-2rem' : '0',
          marginBottom: overviewActive ? '-3rem' : '0',
        }}
        onClick={overviewActive ? dismiss : undefined}
      >
        <div
          className="w-full h-full transition-all duration-300 ease-out overflow-hidden"
          style={{
            transform: `scale(${scaleAmount})`,
            borderRadius: overviewActive ? '1rem' : '0',
            boxShadow: overviewActive ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' : 'none',
          }}
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
              onActivateTools={activate}
            />

            <ProjectsSlide />
            <CertificatesSlide />
            <ContactSlide />
          </SlideScroller>
        </div>
      </div>

      {/* GNOME-like app launcher dock */}
      <AppLauncher isActive={overviewActive} onClose={dismiss} />
    </div>
  );
}
