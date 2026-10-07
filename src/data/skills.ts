import type { SkillCategory } from "@/types";

/**
 * Skill categories exactly as specified — items mirror the resume.
 * Do not add technologies the user has not confirmed.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Axios",
      "Responsive Web Design",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    id: "databases",
    label: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    id: "cloud-devops",
    label: "Cloud & DevOps",
    items: ["AWS", "Docker", "GitHub Actions", "Vercel", "Netlify", "Render"],
  },
  {
    id: "languages",
    label: "Languages",
    items: ["JavaScript", "C++", "SQL"],
  },
  {
    id: "core-cs",
    label: "Core CS",
    items: [
      "Data Structures & Algorithms",
      "DBMS",
      "Object-Oriented Programming",
      "MVC Architecture",
    ],
  },
];

/** Flat list for SEO structured data (knowsAbout). */
export const allSkills: string[] = skillCategories.flatMap((c) => c.items);
