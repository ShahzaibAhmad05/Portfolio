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
    name: "IRis",
    description: "A Digital Circuit Simulator AI-powered desktop app built with C#",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tech: ["C#", "Avalonia UI", "Python"],
    href: "#",
  },
  {
    name: "NextSearch",
    description: "An AI-powered search engine built with C++",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    tech: ["C++", "Next.js", "TypeScript", "Tailwind"],
    href: "#",
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/50 px-2.5 py-0.5 text-xs font-medium text-zinc-300">
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
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-zinc-50">
            Projects
          </h2>
          <p className="mt-2 text-zinc-400">
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
              className="relative shrink-0 w-96 cursor-pointer -ml-72 first:ml-0"
              style={{
                transformStyle: "preserve-3d",
                zIndex: 0,
              }}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement;
                const card = target.querySelector('.card-inner') as HTMLElement;
                if (card) {
                  card.style.transform = 'rotateY(0deg) rotateX(0deg) translateY(-1rem)';
                }
                target.style.zIndex = '10';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement;
                const card = target.querySelector('.card-inner') as HTMLElement;
                if (card) {
                  card.style.transform = 'rotateY(-15deg) rotateX(5deg) translateY(0)';
                }
                target.style.zIndex = '0';
              }}
            >
              {/* Glassy card without bevel */}
              <div 
                className="card-inner group relative transition-all duration-700" 
                style={{ 
                  transformStyle: "preserve-3d",
                  transform: "rotateY(-15deg) rotateX(5deg)",
                }}
              >
                {/* Main glassy surface */}
                <div
                  className="relative rounded-2xl bg-zinc-800/50 backdrop-blur-xl border border-zinc-700/60 p-8 shadow-2xl"
                  style={{
                    boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08) inset",
                  }}
                >
                  {/* Content on the glass card */}
                  <div
                    className="relative flex flex-col justify-between items-center text-center"
                    style={{ height: '320px' }}
                  >
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-zinc-50 mb-4">
                        {project.name}
                      </h3>
                      <p className="text-sm text-zinc-300 mb-6 px-4 line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {project.tech.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div>

                    <div className="text-xs uppercase tracking-wider text-zinc-500 pb-2">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md"
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
