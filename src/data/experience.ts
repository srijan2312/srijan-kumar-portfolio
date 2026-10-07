import type { ExperienceItem } from "@/types";

/**
 * Professional experience, verbatim from the resume.
 * Presented as-is: a structured traineeship, not full-time employment.
 */
export const experience: ExperienceItem[] = [
  {
    role: "Blockchain Technology Trainee",
    organization: "MetaCrafters / Chandigarh University",
    period: "June 2024 – August 2024",
    location: "Chandigarh University",
    highlights: [
      "Completed a Summer Programme on Blockchain Technology using Ethereum and Polygon, gaining mentor-guided, practical exposure to blockchain fundamentals and EVM-based development.",
      "Completed the JS PROOF (Beginner Course) and ETH PROOF (Beginner EVM Course) modules, building foundational skills in JavaScript for blockchain and Ethereum Virtual Machine concepts.",
      "Gained industry-oriented, real-world project exposure through structured mentorship in the Ethereum and Polygon blockchain ecosystems.",
    ],
    tags: ["Ethereum", "Polygon", "EVM", "JavaScript", "Structured Mentorship"],
  },
];
