'use client'

// Update the path below to the actual location of your Button component if different
import { Button } from './ui/button'
import { ArrowDown, Mail } from 'lucide-react'
import { SiGithub, SiLinkedin } from 'react-icons/si'

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-50' />
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5" />

      <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <div className='space-y-8'>
          <div className='space-y-4'>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl font-bold text-balance'>
              Hi, I'm <span className='text-primary'>Your Name</span>
            </h1>
            <p className='text-xl sm:text-2xl text-muted-foreground text-balance max-w-2xl mx-auto'>
              Full-Stack Developer & Creative Problem Solver
            </p>
          </div>

          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
            I craft digital experiences that blend beautiful design with powerful functionality.
            Passionate about creating solutions that make a difference.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Button size='lg' className='text-lg px-8'>
              View My Work
            </Button>
            <Button variant='outline' size='lg' className='text-lg px-8 bg-transparent'>
              Get In Touch
            </Button>
          </div>

          <div className='flex justify-center space-x-6 pt-8'>
            <Button variant='ghost' size='sm' className='p-2'>
              <SiGithub className='h-6 w-6' />
              <span className='sr-only'>GitHub</span>
            </Button>
            <Button variant='ghost' size='sm' className='p-2'>
              <SiLinkedin className='h-6 w-6' />
              <span className='sr-only'>LinkedIn</span>
            </Button>
            <Button variant='ghost' size='sm' className='p-2'>
              <Mail className='h-6 w-6' />
              <span className='sr-only'>Email</span>
            </Button>
          </div>
        </div>
      </div>
      <Button
        variant='ghost'
        size='sm'
        onClick={scrollToAbout}
        className='absolute bottom-50 left-1/2 transform -translate-x-1/2 animate-bounce'
      >
        <ArrowDown className='h-6 w-6' />
        <span className='sr-only'>Scroll to about section</span>
      </Button>
    </section>
  )
}
