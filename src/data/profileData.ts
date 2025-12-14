import type { Profile } from "./types";

export const profile: Profile = {
  name: "Shahzaib Ahmad",
  headline:
    "NUST’28 | Aspiring Software Engineer | Sophomore @ SEECS | Python Developer | AI/ML Enthusiast",
  location: "Islamabad, Pakistan",
  about:
    "Software Engineering undergraduate at SEECS, NUST. Strong foundation in Python, with proficiency in Java, C#, C++, and web tech.",

  githubUrl: "https://github.com/ShahzaibAhmad05",
  linkedinUrl: "https://www.linkedin.com/in/shahzaibahmad05/",

  skills: {
    languages: ["Python", "Java", "C++", "C#", "JavaScript", "HTML5", "CSS3"],
    frameworks: ["React", "Tailwind CSS", "Flask"],
    tools: ["OpenCV", "TensorFlow", "YOLO", "Git", "GitHub"],
  },

  experience: [
    {
      role: "Human Resources Executive",
      company: "NUST Chess Club",
      start: "Sep 2025",
      end: "Present",
      location: "Islamabad, Pakistan",
      mode: "On-site",
    },
    {
      role: "Summer Intern",
      company: "Alkhidmat Foundation Pakistan",
      start: "Jun 2025",
      end: "Aug 2025",
      location: "Islamabad, Pakistan",
      mode: "Hybrid",
      highlights: ["Marketing", "Fundraising"],
    },
  ],

  certifications: [
    {
      title: "Advanced Data Analytics Professional Certificate",
      issuer: "Google",
      issued: "Dec 2025",
      credentialId: "OL32KK3R0YFI",
    },
    {
      title: "Backend Developer Professional Certificate",
      issuer: "Meta",
      issued: "Dec 2025",
      credentialId: "LJJY4L5DLS7U",
    },
  ],

  projects: [
    {
      name: "NextSearch",
      timeframe: "Nov 2025 – Present",
      description:
        "A scalable search engine built on the CORD-19 dataset with a C++ backend and a React frontend.",
      tech: ["C++", "React"],
      githubLabel: "GitHub | NextSearch",
    },
    {
      name: "ChatApp - Group Chat in a console",
      timeframe: "Oct 2025",
      description:
        "A real-time terminal-based chat application using Python socket programming and threading.",
      tech: ["Python", "Sockets", "Threading"],
      githubLabel: "GitHub | ChatApp",
    },
  ],
};
