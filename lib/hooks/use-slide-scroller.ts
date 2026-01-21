/**
 * Custom hook for managing horizontal slide scrolling
 * Provides smooth scrolling, active index tracking, and keyboard navigation
 */

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { clamp, smoothScrollTo } from "@/lib/utils";

interface UseSlideScrollerOptions {
  slideCount: number;
  onScrollProgressChange?: (progress: number) => void;
}

export function useSlideScroller({ slideCount, onScrollProgressChange }: UseSlideScrollerOptions) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollAnimationRef = useRef<number | null>(null);

  const scrollToIndex = (index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const i = clamp(index, 0, slideCount - 1);
    const width = scroller.clientWidth || 1;
    const targetScroll = i * width;

    smoothScrollTo(scroller, targetScroll, 1200, scrollAnimationRef);
  };

  // Keep active dot in sync with scroll position and track scroll progress
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
      onScrollProgressChange?.(progress);
    };

    onScroll();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, [slideCount, onScrollProgressChange]);

  // Clean up scroll animation on unmount
  useEffect(() => {
    return () => {
      if (scrollAnimationRef.current !== null) {
        cancelAnimationFrame(scrollAnimationRef.current);
      }
    };
  }, []);

  // Keyboard support
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") scrollToIndex(activeIndex + 1);
      if (e.key === "ArrowLeft") scrollToIndex(activeIndex - 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return {
    scrollerRef,
    activeIndex,
    scrollToIndex,
  };
}
