import type { NavItem } from "@/types";

/**
 * Primary navigation. `id` must match a section id on the home page.
 * Order follows the brief: Home, About, Experience, Projects, Skills, Achievements, Contact.
 */
export const navItems: NavItem[] = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "about", label: "About", href: "/#about" },
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "skills", label: "Skills", href: "/#skills" },
  { id: "achievements", label: "Achievements", href: "/#achievements" },
  { id: "contact", label: "Contact", href: "/#contact" },
];
