/**
 * Shared type definitions
 */

export interface Slide {
  id: string;
  label: string;
}

export interface Project {
  name: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}
