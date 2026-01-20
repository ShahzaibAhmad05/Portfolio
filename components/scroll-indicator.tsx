// components/scroll-indicator.tsx
"use client";

export default function ScrollIndicator() {
  return (
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
  );
}
