/**
 * Projects Slide Feature
 * Displays project cards with 3D playing card effect
 */

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Particles from "@/ui/effects/particles";
import { PROJECTS } from "@/lib/constants";

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
  const [showTitle, setShowTitle] = useState(false);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    // Staggered animations on mount
    setTimeout(() => setShowTitle(true), 100);
    setTimeout(() => setShowCards(true), 400);
  }, []);

  return (
    <section className="relative h-full w-full flex-none snap-start overflow-hidden">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center px-6 py-12 sm:px-10">
        {/* Left Side - Title Section */}
        <div className="flex-1 pr-12 flex flex-col justify-center">
          <div className={`space-y-4 ml-5 transition-all duration-1000 ${
            showTitle 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-50">
              Projects
            </h2>
            <p className="ml-2 text-lg sm:text-md text-zinc-500 max-w-md">
              Trying something new everyday.
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
            
            // Calculate rotation angle for playing card effect
            const baseRotation = (index - (PROJECTS.length - 1) / 2) * 8; // Spread cards by 8 degrees
            
            return (
              <article
                key={`${project.name}-${index}`}
                className={`relative shrink-0 w-96 cursor-pointer -ml-72 first:ml-0 transition-all duration-1000 ${
                  showCards 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  zIndex: isActive ? 20 : isHovered ? 15 : 0,
                  transitionDelay: showCards ? `${index * 150}ms` : '0ms',
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
                        : `rotateY(-15deg) rotateX(5deg) rotateZ(${baseRotation}deg)`,
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
      <Particles theme="teal" />
    </section>
  );
}
