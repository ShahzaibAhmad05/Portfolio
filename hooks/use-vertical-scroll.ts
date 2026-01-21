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
          // Positive deltaY means scrolling DOWN - add to increase the value
          const next = prev + e.deltaY;
          // Clamp between 0 and 200 (200px max scroll for full effect)
          return clamp(next, 0, 200);
        });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const overviewActive = verticalScroll > 20;
  const scaleAmount = 1 - (Math.min(verticalScroll, 200) / 200) * 0.15;

  const dismiss = () => {
    setVerticalScroll(0);
  };

  return {
    verticalScroll,
    overviewActive,
    scaleAmount,
    dismiss,
  };
}
