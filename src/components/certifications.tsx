'use client'

import React, { useState, useEffect } from 'react'
import { Award, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { Badge } from './ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export interface Certification {
  title: string
  issuer: string
  date: string
  credentialId?: string
  url?: string
  topics?: string[]
  description?: string
}

const certifications: Certification[] = [
  {
    title: 'Full Stack Open',
    issuer: 'University of Helsinki',
    date: 'Sep 2022',
    url: 'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/7451be4ec49c3f6bac8f9ad54f857dbf',
    topics: ['Node.js', 'MongoDB', 'TypeScript', 'React', 'Redux', 'GraphQL'],
    description: 'Proficiency in modern web development practices and technologies.',
  },
  {
    title: 'Advanced Computer Vision with Deep Learning',
    issuer: 'SGInnovate',
    date: 'Mar 2021',
    url: 'https://1drv.ms/b/s!AtOqisQJgfEQpBO3jlFZMOkdoaS4?e=N2I0K7',
    topics: ['TensorFlow', 'PyTorch', 'Computer Vision'],
    description:
      'Professional certification for understanding of advanced computer vision techniques and deep learning methodologies.',
  },
  {
    title: 'Advanced Java Programming',
    issuer: 'University of Helsinki',
    date: 'Feb 2021',
    url: 'https://certificates.mooc.fi/validate/u1tyzjks4g',
    topics: ['Java', 'Object-Oriented Programming', 'Data Structures', 'Algorithms'],
    description: 'Advanced Java & OOP programming concepts and techniques.',
  },
  {
    title: 'Big Data Platforms',
    issuer: 'University of Helsinki',
    date: 'Nov 2021',
    url: 'https://certificates.mooc.fi/validate/vqbat9d9ru',
    topics: ['SQL', 'Machine Learning', 'Apache Spark', 'Hadoop', 'Data Engineering'],
    description: 'Proficiency in big data technologies and data engineering practices.',
  },
  {
    title: 'Deep Learning Foundations',
    issuer: 'SGInnovate',
    date: 'Mar 2021',
    url: 'https://1drv.ms/b/s!AtOqisQJgfEQpAuLWbeP-M8sTyb3?e=iarTRB',
    topics: ['TensorFlow', 'Keras', 'Machine Learning', 'Deep Learning'],
    description: 'Certification for developing deep learning models using TensorFlow and Keras.',
  },
  {
    title: 'Principles of Information Security Controls',
    issuer: 'SGInnovate',
    date: 'Nov 2019',
    topics: ['Information Security', 'Risk Management', 'Security Controls'],
    description: 'Certification for understanding security controls in information systems.',
  },
]

const CertificationsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  // Touch/swipe state
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  // Auto-rotate through certifications
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setDirection('right')
      setCurrentIndex((prev) => (prev + 1) % certifications.length)
    }, 5000) // Slower for better UX

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = () => {
    setDirection('right')
    setCurrentIndex((prev) => (prev + 1) % certifications.length)
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setDirection('left')
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length)
    setIsAutoPlaying(false)
  }

  const goToIndex = (index: number) => {
    const currentIdx = currentIndex
    setDirection(index > currentIdx ? 'right' : 'left')
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  // Touch handlers for swipe functionality
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null) // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      setDirection('right')
      goToNext()
    } else if (isRightSwipe) {
      setDirection('left')
      goToPrevious()
    }
  }

  const currentCert = certifications[currentIndex]

  return (
    <section id='certifications' className='pb-32 relative overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background' />
      <div
        className='absolute top-20 left-20 w-40 h-40 rounded-full bg-accent/5 animate-float'
        style={{ animationDelay: '0s' }}
      />
      <div
        className='absolute bottom-1/3 right-10 w-32 h-32 rounded-full bg-primary/5 animate-float'
        style={{ animationDelay: '2s' }}
      />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-20'>
          <div className='inline-flex items-center gap-3 mb-6'>
            <div className='h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center'>
              <Award className='h-6 w-6 text-white' />
            </div>
            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent'>
              Certifications
            </h2>
          </div>
          <p className='text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            Professional certifications that validate my expertise in cloud technologies,
            development practices, and project management methodologies.
          </p>
        </div>

        {/* Simple Spotlight Carousel - Mobile Optimized */}
        <div className='relative max-w-4xl mx-auto'>
          {/* Navigation Buttons - Hidden on mobile, use swipe + dots instead */}
          <button
            onClick={goToPrevious}
            className='hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass border border-primary/10 hover:bg-primary/5 transition-all duration-300 group'
            aria-label='Previous certification'
          >
            <ChevronLeft className='h-5 w-5 text-primary group-hover:scale-110 transition-transform' />
          </button>

          <button
            onClick={goToNext}
            className='hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass border border-primary/10 hover:bg-primary/5 transition-all duration-300 group'
            aria-label='Next certification'
          >
            <ChevronRight className='h-5 w-5 text-primary group-hover:scale-110 transition-transform' />
          </button>

          {/* Single Card Display */}
          <div className='px-4 md:px-16'>
            <div
              className='transition-all duration-500 ease-in-out transform'
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              key={currentIndex} // Force re-render for animation
            >
              <Card
                className={`w-full max-w-2xl mx-auto min-h-[320px] md:min-h-[280px] glass border-primary/10 shadow-2xl transition-shadow duration-500 select-none animate-in fade-in duration-500 ${
                  direction === 'right' ? 'slide-in-from-right-5' : 'slide-in-from-left-5'
                }`}
              >
                {/* Spotlight glow effect - Matching highlight card subtlety */}
                <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                <div className='absolute -inset-1 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl blur-sm -z-10' />

                <CardHeader className='relative pb-3 md:pb-4'>
                  <div className='flex items-center justify-between mb-3 md:mb-4'>
                    <div className='flex items-center gap-2 text-xs md:text-sm text-muted-foreground'>
                      <span className='font-medium text-primary'>{currentCert.issuer}</span>
                      <span>•</span>
                      <span>{currentCert.date}</span>
                    </div>

                    {currentCert.url && (
                      <a
                        href={currentCert.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='p-1.5 md:p-2 rounded-lg hover:bg-primary/5 transition-colors group/link'
                      >
                        <ExternalLink className='h-3.5 w-3.5 md:h-4 md:w-4 text-muted-foreground group-hover/link:text-primary transition-colors duration-300' />
                      </a>
                    )}
                  </div>

                  <CardTitle className='text-lg md:text-xl lg:text-2xl text-primary leading-tight line-clamp-2'>
                    {currentCert.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className='relative space-y-4 md:space-y-6 pb-12 md:pb-16 flex flex-col justify-between min-h-[180px] md:min-h-[140px]'>
                  {/* Description - Consistent height with line clamping */}
                  {currentCert.description && (
                    <p className='text-sm md:text-base text-muted-foreground leading-relaxed'>
                      <span className='md:hidden line-clamp-3'>{currentCert.description}</span>
                      <span className='hidden md:block line-clamp-2'>
                        {currentCert.description}
                      </span>
                    </p>
                  )}

                  {/* Topics - Consistent layout */}
                  {currentCert.topics && currentCert.topics.length > 0 && (
                    <div className='flex flex-wrap gap-1.5 md:gap-2 min-h-[24px] md:min-h-[28px] items-start'>
                      {/* Mobile: Show max 4 topics */}
                      <div className='md:hidden flex flex-wrap gap-1.5'>
                        {currentCert.topics.slice(0, 4).map((topic) => (
                          <Badge
                            key={topic}
                            variant='secondary'
                            className='bg-primary/5 text-primary border-primary/10 text-xs px-2 py-0.5'
                          >
                            {topic}
                          </Badge>
                        ))}
                        {currentCert.topics.length > 4 && (
                          <Badge
                            variant='secondary'
                            className='bg-muted/50 text-muted-foreground text-xs px-2 py-0.5'
                          >
                            +{currentCert.topics.length - 4}
                          </Badge>
                        )}
                      </div>

                      {/* Desktop: Show all topics */}
                      <div className='hidden md:flex flex-wrap gap-2'>
                        {currentCert.topics.map((topic) => (
                          <Badge
                            key={topic}
                            variant='secondary'
                            className='bg-primary/5 text-primary border-primary/10 hover:bg-primary/10 transition-colors duration-300'
                          >
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Credential indicator */}
                  <div className='absolute bottom-3 right-3 md:bottom-4 md:right-4'>
                    <div className='w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg'>
                      <Award className='h-3 w-3 md:h-4 md:w-4 text-white' />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Dots Indicator - Larger on mobile for better touch */}
          <div className='flex justify-center mt-6 md:mt-8 gap-2 md:gap-2'>
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-2.5 h-2.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125 shadow-lg shadow-primary/50'
                    : 'bg-muted-foreground/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to certification ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection
