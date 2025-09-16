'use client'

// Update the path below to the actual location of your Button component if different
import { Button } from './ui/button'
import { ArrowDown, Mail } from 'lucide-react'
import { SiGithub, SiLinkedin } from 'react-icons/si'

export function HeroSection() {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden'
    >
      {/* Enhanced Background with Gradient Mesh */}
      <div className='absolute inset-0 gradient-mesh' />
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5' />

      <div className='mt-50 pb-20'>
        {/* Floating Elements for Visual Interest */}
        <div
          className='absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float'
          style={{ animationDelay: '0s' }}
        />
        <div
          className='absolute top-40 right-20 w-16 h-16 rounded-full bg-accent/10 animate-float'
          style={{ animationDelay: '1s' }}
        />
        <div
          className='absolute bottom-40 left-20 w-12 h-12 rounded-full bg-secondary/10 animate-float'
          style={{ animationDelay: '2s' }}
        />

        <div className='relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='space-y-12'>
            <div className='space-y-6'>
              <h1 className='text-5xl sm:text-7xl lg:text-8xl font-bold text-balance leading-tight'>
                Hi, I'm{' '}
                <span className='relative inline-block'>
                  <span className='bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient'>
                    Sevi
                  </span>
                  <span className='absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-xl opacity-30 animate-pulse' />
                </span>
              </h1>

              <p className='text-2xl sm:text-3xl lg:text-4xl font-light text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed'>
                Full-Stack AI Engineer &{' '}
                <span className='text-primary font-medium'>Creative Problem Solver</span>
              </p>
            </div>

            <p className='text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed'>
              I craft digital experiences that blend the powerful functionality of AI with practical
              solutions. My passion lies in creating technologies that make a real difference in
              everyday life.
            </p>

            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center pt-4'>
              <Button
                variant='default'
                size='lg'
                scrollTo='projects'
                scrollAnimation='smooth'
                className='text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90'
              >
                View My Work
              </Button>
              <Button
                variant='outline'
                size='lg'
                scrollTo='contact'
                scrollAnimation='smooth'
                className='text-lg px-10 py-4 rounded-full backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 transform hover:scale-105'
              >
                Get In Touch
              </Button>
            </div>

            <div className='flex justify-center space-x-8 pt-8'>
              <Button
                variant='ghost'
                size='lg'
                className='p-4 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 transform hover:scale-110'
              >
                <SiGithub className='h-7 w-7' />
                <span className='sr-only'>GitHub</span>
              </Button>
              <Button
                variant='ghost'
                size='lg'
                className='p-4 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 transform hover:scale-110'
              >
                <SiLinkedin className='h-7 w-7' />
                <span className='sr-only'>LinkedIn</span>
              </Button>
              <Button
                variant='ghost'
                size='lg'
                className='p-4 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 transform hover:scale-110'
              >
                <Mail className='h-7 w-7' />
                <span className='sr-only'>Email</span>
              </Button>
            </div>
          </div>
        </div>
        <Button
          variant='ghost'
          size='lg'
          scrollTo='about'
          scrollAnimation='smooth'
          className='hidden absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce p-4 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300'
        >
          <ArrowDown className='h-6 w-6' />
          <span className='sr-only'>Scroll to about section</span>
        </Button>
      </div>
    </section>
  )
}
