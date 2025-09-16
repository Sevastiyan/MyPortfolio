'use client'

import { HighlightCard } from './ui/highlight-card'
import { Brain, Cloud, Code, Database, Palette, Zap } from 'lucide-react'

export function AboutSection() {
  const highlights = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description:
        'Building production-ready AI from inception to deployment for real-time analytics, and biomedical signals.',
    },
    {
      icon: Cloud,
      title: 'Scalable Cloud Systems',
      description:
        'Designing secure, low-latency infrastructure with AWS and robust backend services.',
    },
    {
      icon: Zap,
      title: 'Data & Algorithms',
      description:
        'Developing advanced analytics pipelines for IoT devices, and signal processing with precision.',
    },
  ]

  return (
    <section id='about' className='py-32 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20' />
      <div
        className='absolute top-40 right-10 w-32 h-32 rounded-full bg-accent/5 animate-float'
        style={{ animationDelay: '0.5s' }}
      />
      <div
        className='absolute top-120 left-26 w-64 h-64 rounded-full bg-accent/5 animate-float'
        style={{ animationDelay: '1.5s' }}
      />
      <div
        className='absolute bottom-20 left-10 w-24 h-24 rounded-full bg-primary/5 animate-float'
        style={{ animationDelay: '1.5s' }}
      />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-20'>
          <div className='inline-block mb-6'>
            <span className='inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20'>
              👋 Get to know me
            </span>
          </div>

          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance'>
            About{' '}
            <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
              Me
            </span>
          </h2>

          <p className='text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed'>
            Passionate developer with a love for creating digital experiences that{' '}
            <span className='text-primary font-medium'>matter</span>
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-20 items-center mb-20'>
          <div className='space-y-8 lg:order-1'>
            <div className='space-y-6'>
              <p className='text-xl text-muted-foreground leading-relaxed'>
                With over 6 years of experience in AI engineering and full-stack development, I
                build intelligent, scalable, and user-centric applications. My journey began with
                data algorithms for biomedical devices and has grown into creating production-grade
                systems that blend machine learning, cloud infrastructure, and engaging digital
                experiences.
              </p>

              <p className='text-xl text-muted-foreground leading-relaxed'>
                I believe in the power of clean code, thoughtful design, and continuous learning.
                When I'm not coding, you can find me exploring new technologies, contributing to
                open source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Key stats or achievements */}
            <div className='grid grid-cols-3 gap-6 pt-6'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-primary mb-2'>6+</div>
                <div className='text-sm text-muted-foreground'>Years Experience</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-accent mb-2'>5+</div>
                <div className='text-sm text-muted-foreground'>Projects Delivered</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-accent mb-2'>7+</div>
                <div className='text-sm text-muted-foreground'>AI Models in Production</div>
              </div>
            </div>
          </div>

          <div className='relative lg:order-2'>
            {/* Decorative background elements */}
            <div className='absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-30' />
            <div className='absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-20 animate-float' />
            <div
              className='absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-br from-accent to-secondary rounded-full opacity-15 animate-float'
              style={{ animationDelay: '1s' }}
            />

            <div className='relative aspect-square rounded-3xl overflow-hidden glass border-primary/10 shadow-2xl'>
              <img
                src='/20250514_134910_retouched.jpg'
                alt='Professional portrait'
                className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
              />

              {/* Gradient overlay for depth */}
              <div className='absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent' />
            </div>
          </div>
        </div>

        {/* Highlight Cards Section - Now separate and balanced */}
        <div className='space-y-8'>
          <div className='text-center'>
            <h3 className='text-2xl sm:text-3xl font-bold text-foreground mb-4'>
              What I Bring to the Table
            </h3>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Core values and skills that drive my development approach
            </p>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4'>
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
      </div>
    </section>
  )
}
