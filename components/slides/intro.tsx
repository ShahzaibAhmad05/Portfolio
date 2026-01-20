// components/slides/intro.tsx
"use client";

import ScrollIndicator from "@/components/scroll-indicator";

export default function IntroSlide({ 
  onNext, 
  showScrollIndicator = false 
}: { 
  onNext: () => void;
  showScrollIndicator?: boolean;
}) {
  return (
    <section className="relative h-full w-full flex-none snap-start overflow-hidden">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center px-6 py-12 sm:px-10">
        {/* Left Side - Profile Picture */}
        <div className="flex-1 flex items-center justify-center">
          <div className="h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-zinc-800/50 border-2 border-zinc-700/60 overflow-hidden shadow-2xl">
            <img 
              src="/profile-placeholder.jpg" 
              alt="Profile" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="flex-1 flex flex-col justify-center pr-12 -ml-5">
          <div className="space-y-2">
            <h1 className="mt-10 text-6xl sm:text-7xl font-bold tracking-tight text-zinc-50">
              Hi, I'm{" "}
              <span className="underline decoration-zinc-500">
                Shahzaib
              </span>
            </h1>

            <p className="text-lg sm:text-md text-zinc-500">
              Software Engineer
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Welcome to my portfolio!
            </p>

            <p className="-mt-3 text-md leading-8 text-zinc-400">
              Well, you kinda have to scroll yourself to look around
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-700 px-6 text-sm font-medium tracking-wide text-zinc-300 transition hover:bg-zinc-800/50 hover:border-zinc-600"
                onClick={(e) => e.preventDefault()}
              >
                I'm here to stalk
              </a>
              <button
                type="button"
                onClick={onNext}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-50 px-6 text-sm font-medium tracking-wide text-zinc-950 transition hover:bg-zinc-200"
              >
                Scroll
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {showScrollIndicator && <ScrollIndicator />}
    </section>
  );
}
