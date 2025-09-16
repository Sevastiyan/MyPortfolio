'use client'

import { HighlightCard } from './ui/highlight-card'
import { Code, Palette, Zap } from 'lucide-react'

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time.',
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating beautiful interfaces that provide exceptional user experiences.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and user satisfaction.',
    },
  ]

  return (
    <section id='about' className='py-20 bg-muted/30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-4 text-balance'>About Me</h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto text-pretty'>
            Passionate developer with a love for creating digital experiences that matter
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <p className='text-lg text-muted-foreground leading-relaxed'>
              With over 5 years of experience in web development, I specialize in creating modern,
              responsive applications using cutting-edge technologies. My journey started with a
              curiosity about how things work on the web, and it has evolved into a passion for
              crafting exceptional digital experiences.
            </p>

            <p className='text-lg text-muted-foreground leading-relaxed'>
              I believe in the power of clean code, thoughtful design, and continuous learning. When
              I'm not coding, you can find me exploring new technologies, contributing to open
              source projects, or sharing knowledge with the developer community.
            </p>

            <div className='grid sm:grid-cols-3 gap-4 pt-6'>
              {highlights.map((highlight, index) => (
                <HighlightCard
                  key={index}
                  icon={highlight.icon}
                  title={highlight.title}
                  description={highlight.description}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div className='relative'>
            <div className='aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20'>
              <img
                src='/20250514_134910_retouched.jpg'
                alt='Professional portrait'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
