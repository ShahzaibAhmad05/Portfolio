/**
 * Projects data
 */

import type { Project } from '@/lib/types';

export const PROJECTS: Project[] = [
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
