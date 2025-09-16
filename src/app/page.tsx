import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ProjectsSection } from '@/components/projects-section'
import { BlogPreviewSection } from '@/components/blog-preview-section'
import { SkillsSection } from '@/components/skills-section'
import { ExperienceSection } from '@/components/experience-section'
import { ContactSection } from '@/components/contact-section'
import { Navigation } from '@/components/navigation'

export default function Portfolio() {
  return (
    <main className='min-h-screen bg-background'>
      <Navigation />
      <div className=''>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <BlogPreviewSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </main>
  )
}
