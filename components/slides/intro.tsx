// components/slides/intro.tsx
"use client";

export default function IntroSlide({ onNext }: { onNext: () => void }) {
  return (
    <section className="relative h-full w-full flex-none snap-start">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col justify-center px-6 sm:px-10">
        <div className="max-w-2xl">
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Hi, I’m{" "}
            <span className="underline decoration-zinc-300 dark:decoration-zinc-700">
              Shahzaib
            </span>
          </h1>

          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Software Engineer
          </p>

          {/* FIX: text-zinc-300 is very light on light-mode background; use zinc-600 in light mode */}
          <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            Welcome to my portfolio site!
          </p>

          <p className="text-md leading-8 text-zinc-500 dark:text-zinc-400">
            Well, this is for my intro. The rest you have to scroll yourself to
            see.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onNext}
              className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Next →
            </button>

            <a
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
              onClick={(e) => e.preventDefault()}
            >
              (Optional) Secondary action
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
