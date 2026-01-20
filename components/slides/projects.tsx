// components/slides/projects.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

type Project = {
  name: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
};

const PROJECTS: Project[] = [
  {
    name: "IRis",
    description: "A Digital Circuit Simulator AI-powered desktop app built with C#",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tech: ["C#", "Avalonia UI", "Python"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    name: "NextSearch",
    description: "An AI-powered search engine built with C++",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    tech: ["C++", "Next.js", "TypeScript", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [pinnedIndex, setPinnedIndex] = useState<number | null>(null);

  return (
    <section className="relative h-full w-full flex-none snap-start overflow-hidden">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center px-6 py-12 sm:px-10">
        {/* Left Side - Title Section */}
        <div className="flex-1 pr-12 flex flex-col justify-center">
          <div className="space-y-4 ml-5">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-50">
              Projects
            </h2>
            <p className="ml-2 text-lg sm:text-md text-zinc-500 max-w-md">
              Exploring something new everyday.
            </p>
          </div>
        </div>

        {/* Right Side - Project Cards */}
        <div
          className="flex-1 flex mr-15 justify-end [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ perspective: "1500px" }}
        >
          {PROJECTS.map((project, index) => {
            const isActive = pinnedIndex === index;
            const shouldShowImage = isActive && hoveredIndex === index;
            const isHovered = hoveredIndex === index;
            
            return (
              <article
                key={`${project.name}-${index}`}
                className="relative shrink-0 w-96 cursor-pointer -ml-72 first:ml-0"
                style={{
                  transformStyle: "preserve-3d",
                  zIndex: isActive ? 20 : isHovered ? 15 : 0,
                }}
                onClick={() => {
                  setPinnedIndex(pinnedIndex === index ? null : index);
                }}
                onMouseEnter={() => {
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  if (pinnedIndex === index) {
                    setPinnedIndex(null);
                  }
                }}
              >
                {/* Glassy card without bevel */}
                <div 
                  className="card-inner group relative transition-all duration-700" 
                  style={{ 
                    transformStyle: "preserve-3d",
                    transform: isActive 
                      ? "rotateY(0deg) rotateX(0deg) translateY(-1.5rem)"
                      : isHovered
                        ? "rotateY(0deg) rotateX(0deg) translateY(-0.5rem)"
                        : "rotateY(-15deg) rotateX(5deg)",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  {/* Main glassy surface */}
                  <div
                    className="relative rounded-2xl bg-zinc-600/50 backdrop-blur-sm border border-zinc-500/60 p-8 shadow-2xl overflow-hidden"
                    style={{
                      boxShadow: isActive
                        ? "0 40px 80px -20px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.12) inset"
                        : "0 30px 60px -15px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08) inset",
                      height: '450px',
                    }}
                  >
                    {/* Content on the glass card */}
                    <div
                      className="relative flex flex-col justify-between h-full"
                    >
                      {/* Image Preview at Top */}
                      <div 
                        className="w-full overflow-hidden rounded-lg transition-all duration-500"
                        style={{
                          height: shouldShowImage ? '140px' : '0px',
                          marginBottom: shouldShowImage ? '16px' : '0px',
                          opacity: shouldShowImage ? 1 : 0,
                        }}
                      >
                        {shouldShowImage && (
                          <div className="relative w-full h-full">
                            <Image
                              src={project.image}
                              alt={project.name}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                        )}
                      </div>

                      {/* Title, Buttons and Description - Left Aligned */}
                      <div className="flex-1 flex flex-col items-start transition-all duration-500">
                        <h3 className="text-2xl font-bold text-zinc-50 mb-3">
                          {project.name}
                        </h3>
                        
                        {/* Buttons */}
                        <div className="flex gap-2 mb-4">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              className="inline-flex items-center rounded-full border border-zinc-600 bg-zinc-700/50 px-3 py-1.5 text-xs font-medium text-zinc-200 transition hover:bg-zinc-600/50 hover:border-zinc-500"
                              onClick={(e) => project.githubUrl === "#" && e.preventDefault()}
                            >
                              GitHub
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              className="inline-flex items-center rounded-full border border-zinc-600 bg-zinc-700/50 px-3 py-1.5 text-xs font-medium text-zinc-200 transition hover:bg-zinc-600/50 hover:border-zinc-500"
                              onClick={(e) => project.liveUrl === "#" && e.preventDefault()}
                            >
                              Live Demo →
                            </a>
                          )}
                        </div>
                        
                        <p className="text-sm text-zinc-300 mb-6">
                          {project.description}
                        </p>
                      </div>
                      
                      {/* Tech Stack Tags - Bottom Left */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Tag key={tech}>{tech}</Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
