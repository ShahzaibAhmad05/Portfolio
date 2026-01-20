// components/slides/projects.tsx
"use client";

type Project = {
  name: string;
  description: string;
  highlights: string[];
  tech: string[];
  href?: string;
  status?: "Live" | "In Progress" | "Private";
};

const PROJECTS: Project[] = [
  {
    name: "Portfolio Slides",
    description:
      "A horizontal snap-scrolling portfolio with keyboard navigation and dark mode.",
    highlights: [
      "Snap-based slide navigation with smooth scrolling",
      "Componentized layout for scalability",
      "Accessible controls (aria-current, labels)",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind"],
    href: "#",
    status: "Live",
  },
  {
    name: "Project Two",
    description:
      "Short description of what it does and the value it provides to users.",
    highlights: ["Feature one", "Feature two", "Feature three"],
    tech: ["React", "Node.js", "PostgreSQL"],
    status: "In Progress",
  },
  {
    name: "Project Three",
    description: "Another project description that’s concise but informative.",
    highlights: ["Result-oriented metric", "Optimization", "Clean UX"],
    tech: ["TypeScript", "API", "Cloud"],
    status: "Private",
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
      {children}
    </span>
  );
}

function StatusPill({ status }: { status?: Project["status"] }) {
  if (!status) return null;
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
      {status}
    </span>
  );
}

export default function ProjectsSlide() {
  return (
    <section className="relative h-full w-full flex-none snap-start">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col justify-center px-6 sm:px-10">
        <div className="max-w-4xl">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Projects
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                A few things I’ve built. (Swap in your real projects + links.)
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {PROJECTS.map((p) => (
              <article
                key={p.name}
                className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
              >
                <header className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {p.description}
                    </p>
                  </div>
                  <StatusPill status={p.status} />
                </header>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <div className="mt-5">
                  {p.href ? (
                    <a
                      href={p.href}
                      className="inline-flex items-center text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-900 dark:text-zinc-50 dark:decoration-zinc-700 dark:hover:decoration-zinc-200"
                      onClick={(e) => p.href === "#" && e.preventDefault()}
                    >
                      View project →
                    </a>
                  ) : (
                    <span className="text-sm text-zinc-500 dark:text-zinc-500">
                      Link coming soon
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
