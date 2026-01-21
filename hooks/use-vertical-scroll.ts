"use client";

import { useEffect, useState } from "react";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function useVerticalScroll() {
  const [verticalScroll, setVerticalScroll] = useState(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Only respond to vertical scroll (deltaY)
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        setVerticalScroll(prev => {
          // Negative deltaY means scrolling UP - subtract to increase the value
          const next = prev - e.deltaY;
          // Clamp between 0 and 200 (200px max scroll for full effect)
          return clamp(next, 0, 200);
        });
        
        // Gradually decay back to 0 when not scrolling
        setTimeout(() => {
          setVerticalScroll(prev => Math.max(0, prev - 5));
        }, 100);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const overviewActive = verticalScroll > 20;
  const scaleAmount = 1 - (Math.min(verticalScroll, 200) / 200) * 0.15;
  const translateY = -(Math.min(verticalScroll, 200) / 200) * 80;

  return {
    verticalScroll,
    overviewActive,
    scaleAmount,
    translateY,
  };
}
