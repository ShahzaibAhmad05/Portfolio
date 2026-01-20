// components/slides/projects.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

type Project = {
  name: string;
  description: string;
  image: string;
  tech: string[];
  href?: string;
};

const PROJECTS: Project[] = [
  {
    name: "NextSearch",
    description: "An AI-powered search engine built with C++",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    tech: ["C++", "Next.js", "TypeScript", "Tailwind"],
    href: "#",
  },
  {
    name: "IRis",
    description: "A Digital Circuit Simulator AI-powered desktop app built with C#",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tech: ["C#", "Avalonia UI", "Python"],
    href: "#",
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-2.5 py-0.5 text-xs text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
      {children}
    </span>
  );
}

export default function ProjectsSlide() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="relative h-full w-full flex-none snap-start overflow-hidden">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-6 py-12 sm:px-10">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Projects
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Showcasing my work across different technologies
          </p>
        </div>

        <div
          className="flex gap-6 justify-center [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ perspective: "1500px" }}
        >
          {PROJECTS.map((project, index) => (
            <article
              key={`${project.name}-${index}`}
              className="relative shrink-0 w-96 cursor-pointer -ml-48 first:ml-0"
              style={{
                transformStyle: "preserve-3d",
              }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Glassy card without bevel */}
              <div 
                className="group relative transition-all duration-700 hover:rotate-0 hover:-translate-y-4 hover:z-10" 
                style={{ 
                  transformStyle: "preserve-3d",
                  transform: "rotateY(-15deg) rotateX(5deg)",
                }}
              >
                {/* Main glassy surface */}
                <div
                  className="relative rounded-2xl bg-white/20 dark:bg-zinc-900/20 backdrop-blur-xl border border-white/30 dark:border-zinc-700/30 p-8 shadow-2xl"
                  style={{
                    boxShadow: "0 30px 60px -15px rgba(100, 100, 100, 0.4)",
                  }}
                >
                  {/* Content on the glass card */}
                  <div
                    className="relative h-80 flex flex-col justify-center items-center text-center"
                  >
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                      {project.name}
                    </h3>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-6 px-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.tech.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div>

                    <div className="mt-6 text-xs text-zinc-500 dark:text-zinc-400">
                      Click to view preview
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-800/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[80vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-12 right-0 text-white hover:text-zinc-300 transition"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={selectedProject.image}
                alt={selectedProject.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-white">{selectedProject.name}</h3>
              <p className="mt-2 text-sm text-zinc-300">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
