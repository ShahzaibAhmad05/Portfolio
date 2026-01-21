// components/scroll-indicator.tsx
"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [hasScrolledOnce, setHasScrolledOnce] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroller = document.querySelector("[data-scroller]") as HTMLElement;
      if (scroller && scroller.scrollLeft > 50 && !hasScrolledOnce) {
        setHasScrolledOnce(true);
      }
    };

    const scroller = document.querySelector("[data-scroller]");
    if (scroller) {
      scroller.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      if (scroller) {
        scroller.removeEventListener("scroll", handleScroll);
      }
    };
  }, [hasScrolledOnce]);

  // Don't render at all once user has scrolled
  if (hasScrolledOnce) {
    return null;
  }

  return (
    <>
      {/* Fog effect behind scroll indicator */}
      <div className="fixed right-2 top-1/2 -translate-y-1/2 w-48 h-64 pointer-events-none z-5">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 100% at 90% 50%, rgba(240, 240, 245, 0.12) 0%, rgba(250, 250, 250, 0.06) 35%, transparent 65%)',
            filter: 'blur(35px)',
          }}
        />
      </div>

      {/* Scroll indicator */}
      <div className="fixed right-8 top-1/2 z-10 -translate-y-1/2 flex flex-col items-center gap-2">
        <style jsx>{`
          @keyframes bounceHorizontal {
            0%, 100% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(8px);
            }
          }
          .bounce-horizontal {
            animation: bounceHorizontal 1.5s ease-in-out infinite;
          }
        `}</style>
        <div className="flex flex-col items-center gap-1">
          <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400 rotate-0 whitespace-nowrap [writing-mode:vertical-lr]">
            Scroll
          </div>
          <svg
            className="h-6 w-6 text-zinc-400 dark:text-zinc-500 bounce-horizontal"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
