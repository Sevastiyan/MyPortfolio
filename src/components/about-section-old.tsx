'use client'

import { HighlightCard } from './ui/highlight-card'
import { Bot, CloudCheck, ChartSpline } from 'lucide-react'

export function AboutSection() {
  const highlights = [
    {
      icon: Bot,
      title: 'AI & Machine Learning',
      description:
        'End-to-end development of production ready AI systems for real-time analytics and biomedical signal processing.',
    },
    {
      icon: CloudCheck,
      title: 'Scalable Cloud Systems',
      description:
        'Engineering secure, low-latency architectures with AWS while building robust backend services that grow.',
    },
    {
      icon: ChartSpline,
      title: 'Data & Algorithms',
      description:
        'Designing backend solutions for IoT and wearable devices, that apply analytics to extract meaningful insights with accuracy.',
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
          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance'>
            About{' '}
            <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
              Me
            </span>
          </h2>

          <p className='text-xl sm:text-2xl text-muted-foreground max-w-xl mx-auto text-pretty leading-relaxed'>
            Turning <span className='text-primary font-medium'>Research</span> into Production-Ready
            AI {'\n'} From Lab Precision to{' '}
            <span className='text-accent font-medium'>Scalable Products</span>
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-20 items-center mb-20'>
          <div className='space-y-8 lg:order-1'>
            <div className='space-y-6'>
              <p className='text-md md:text-lg text-muted-foreground leading-relaxed'>
                Ever since I started working with technology, I’ve been drawn to how advanced ideas
                can actually work in real life.
              </p>
              <p className='text-md md:text-lg text-muted-foreground leading-relaxed'>
                At FlexoSense, I analyzed data from IoT insoles designed to help prevent foot ulcers
                in diabetes patients. That experience taught me to stay precise — to pay attention
                to every small detail that makes data meaningful.
              </p>

              <p className='text-md md:text-lg text-muted-foreground leading-relaxed'>
                At Wethm, I carried that mindset into a bigger system: building the full backend for
                an AI-powered sleep analysis platform, from the ground up.
              </p>

              <p className='text-md md:text-lg text-muted-foreground leading-relaxed'>
                Now at Neurabody, I’m scaling those ideas even further — leading development for
                posture detection and smart ergonomic systems that combine computer vision, embedded
                sensing, and real-time analytics.
              </p>

              <p className='text-md md:text-lg text-muted-foreground leading-relaxed'>
                Across it all, my focus stays the same: build technology that’s rigorous, reliable,
                and genuinely useful.
              </p>
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
              Core philosophies shaping how I design and deliver technology
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
