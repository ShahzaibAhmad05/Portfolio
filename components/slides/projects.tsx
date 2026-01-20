// components/slides/projects.tsx
"use client";

import { useEffect, useRef } from "react";
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
    name: "Portfolio Slides",
    description: "A horizontal snap-scrolling portfolio with keyboard navigation and dark mode.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    href: "#",
  },
  {
    name: "IRis",
    description: "A Digital Circuit Simulator AI-powered desktop app built with C#",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tech: ["React", "Node.js", "PostgreSQL"],
    href: "#",
  },
  {
    name: "AI Dashboard",
    description: "Analytics dashboard with AI-powered insights and visualizations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tech: ["TypeScript", "Python", "TensorFlow"],
    href: "#",
  },
  {
    name: "Mobile Fitness App",
    description: "Cross-platform fitness tracker with personalized workout plans.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
    tech: ["React Native", "Firebase", "REST API"],
    href: "#",
  },
  {
    name: "Cloud Storage Solution",
    description: "Secure file storage and sharing platform with encryption.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
    tech: ["AWS", "Node.js", "MongoDB"],
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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollAmount = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      if (!scrollContainer) return;
      
      scrollAmount += scrollSpeed;
      const maxScroll = scrollContainer.scrollWidth / 2;

      if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
      }

      scrollContainer.scrollLeft = scrollAmount;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationFrameId);
    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Duplicate projects for infinite scroll effect
  const duplicatedProjects = [...PROJECTS, ...PROJECTS];

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
          ref={scrollRef}
          className="flex -space-x-32 overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ perspective: "1500px" }}
        >
          {duplicatedProjects.map((project, index) => (
            <article
              key={`${project.name}-${index}`}
              className="group relative shrink-0 w-[400px] transition-all duration-700 hover:z-10 hover:scale-110 hover:rotate-0 hover:-translate-y-4"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateY(-15deg) rotateX(5deg)",
              }}
            >
              {/* 3D Plate Base - creates thickness */}
              <div className="relative" style={{ transformStyle: "preserve-3d" }}>
                {/* Plate depth/thickness layers */}
                <div
                  className="absolute inset-0 rounded-2xl bg-zinc-300 dark:bg-zinc-700 blur-sm"
                  style={{ transform: "translateZ(-10px)" }}
                />
                <div
                  className="absolute inset-0 rounded-2xl bg-zinc-200 dark:bg-zinc-800"
                  style={{ transform: "translateZ(-5px)" }}
                />
                
                {/* Main plate surface */}
                <div
                  className="relative rounded-2xl bg-gradient-to-br from-zinc-100 via-zinc-50 to-zinc-100 dark:from-zinc-800 dark:via-zinc-850 dark:to-zinc-900 p-3 shadow-2xl"
                  style={{
                    transform: "translateZ(0px)",
                    boxShadow:
                      "0 30px 60px -15px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
                  }}
                >
                  {/* Image elevated on plate */}
                  <div
                    className="relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-900 dark:bg-zinc-950"
                    style={{
                      transform: "translateZ(25px)",
                      boxShadow: "0 15px 35px -10px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              {/* Description below the plate */}
              <div className="mt-8 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
