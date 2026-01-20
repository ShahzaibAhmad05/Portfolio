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
    <section className="relative h-full w-full flex-none snap-start">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col justify-center px-6 sm:px-10">
        <div className="max-w-2xl">
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl text-zinc-50">
            Hi, I'm{" "}
            <span className="underline decoration-zinc-500">
              Shahzaib
            </span>
          </h1>

          <p className="mt-1 text-sm font-medium text-zinc-500">
            Software Engineer
          </p>

          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Welcome to my portfolio!
          </p>

          <p className="text-md leading-8 text-zinc-400">
            Well, this is for my intro. The rest you have to scroll yourself to
            see.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onNext}
              className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-50 px-6 text-sm font-medium tracking-wide text-zinc-950 transition hover:bg-zinc-200"
            >
              Next →
            </button>

            <a
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-700 px-6 text-sm font-medium tracking-wide text-zinc-300 transition hover:bg-zinc-800/50 hover:border-zinc-600"
              onClick={(e) => e.preventDefault()}
            >
              (Optional) Secondary action
            </a>
          </div>
        </div>
      </div>
      
      {showScrollIndicator && <ScrollIndicator />}
    </section>
  );
}
