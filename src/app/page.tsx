'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ProjectsSection } from '@/components/projects-section'
import { BlogPreviewSection } from '@/components/blog-preview-section'
import CertificationsSection from '@/components/certifications'
import { SkillsSection } from '@/components/skills-section'
import { InteractiveTimeline } from '@/components/interactive-timeline'
import { ContactSection } from '@/components/contact-section'
import { Navigation } from '@/components/navigation'
import Button from '@/components/ui/button'

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <main className='min-h-screen bg-background'>
      {isVisible && (
        <Button
          className='hidden lg:flex fixed bottom-8 right-8 z-50 h-14 w-14 rounded-full p-0 items-center justify-center shadow-lg'
          variant='outline'
          scrollTo='home'
          scrollAnimation='smooth'
        >
          <ArrowUp className='h-6 w-6' />
          <span className='sr-only'>Scroll to top</span>
        </Button>
      )}
      <Navigation />
      <div className=''>
        <HeroSection />

        <AboutSection />
        <ProjectsSection />
        {/* <BlogPreviewSection /> */}
        <SkillsSection />
        <CertificationsSection />
        <InteractiveTimeline />
        <ContactSection />
      </div>
    </main>
  )
}
