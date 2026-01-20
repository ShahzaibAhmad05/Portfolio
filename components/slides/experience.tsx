// components/slides/experience.tsx
"use client";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
  tech?: string[];
};

const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Your Company",
    period: "2024 — Present",
    location: "Remote / City",
    bullets: [
      "Built and shipped user-facing features in a Next.js + TypeScript app.",
      "Improved performance by optimizing rendering and data fetching.",
      "Collaborated with design/product to deliver accessible UI components.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "REST"],
  },
  {
    role: "Frontend Developer",
    company: "Another Place",
    period: "2022 — 2024",
    location: "City",
    bullets: [
      "Created reusable UI components and design-system patterns.",
      "Integrated APIs and implemented robust error/loading states.",
      "Wrote maintainable code and improved DX with linting and conventions.",
    ],
    tech: ["React", "TypeScript", "CSS", "Git"],
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
      {children}
    </span>
  );
}

export default function ExperienceSlide() {
  return (
    <section className="relative h-full w-full flex-none snap-start">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col justify-center px-6 sm:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Experience
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            A quick overview of roles and impact. (Replace the sample content
            with yours.)
          </p>

          <div className="mt-8 space-y-4">
            {EXPERIENCE.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
              >
                <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {item.role} ·{" "}
                      <span className="text-zinc-700 dark:text-zinc-200">
                        {item.company}
                      </span>
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {item.location ? `${item.location} · ` : ""}
                      {item.period}
                    </p>
                  </div>
                </header>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                {item.tech?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
