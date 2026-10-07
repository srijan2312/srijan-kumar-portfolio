import { HeroSection } from "@/components/hero/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { HowIBuildSection } from "@/components/sections/how-i-build-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ResumeSection } from "@/components/sections/resume-section";
import { ContactSection } from "@/components/sections/contact-section";

/**
 * Home: single-page portfolio. Section order mirrors the primary nav
 * (Home, About, Experience, Projects, Skills, Achievements, Contact),
 * with Process, Certifications and Resume interleaved where they read best.
 */
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <HowIBuildSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <CertificationsSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
