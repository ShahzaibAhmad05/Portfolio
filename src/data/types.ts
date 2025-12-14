export type ExperienceItem = {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  mode?: string;
  highlights?: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  credentialUrl?: string;
};

export type Project = {
  name: string;
  timeframe: string;
  description: string;
  tech: string[];
  githubLabel?: string;
  githubUrl?: string;
};

export type Profile = {
  name: string;
  headline: string;
  location?: string;
  about: string;
  githubUrl: string;
  linkedinUrl: string;

  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
  };

  experience: ExperienceItem[];
  certifications: Certification[];
  projects: Project[];
};
