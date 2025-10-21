'use client'

import React, { useState, useEffect } from 'react'
import { Award, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { Badge } from './ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import Button from './ui/button'

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
    description: 'Demonstrates proficiency in modern web development practices and technologies.',
  },
  {
    title: 'Advanced Computer Vision with Deep Learning',
    issuer: 'SGInnovate',
    date: 'Mar 2021',
    url: 'https://1drv.ms/b/s!AtOqisQJgfEQpBO3jlFZMOkdoaS4?e=N2I0K7',
    topics: ['TensorFlow', 'PyTorch', 'Computer Vision'],
    description:
      'Professional certification demonstrating understanding of advanced computer vision techniques and deep learning methodologies.',
  },
  {
    title: 'Advanced Java Programming',
    issuer: 'University of Helsinki',
    date: 'Feb 2021',
    url: 'https://certificates.mooc.fi/validate/u1tyzjks4g',
    topics: ['Java', 'Object-Oriented Programming', 'Data Structures', 'Algorithms'],
    description: 'Validates skills in advanced Java programming concepts and techniques.',
  },
  {
    title: 'Big Data Platforms',
    issuer: 'University of Helsinki',
    date: 'Nov 2021',
    url: 'https://certificates.mooc.fi/validate/vqbat9d9ru',
    topics: ['SQL', 'Machine Learning', 'Apache Spark', 'Hadoop', 'Data Engineering'],
    description:
      'Demonstrates proficiency in big data technologies and data engineering practices.',
  },
  {
    title: 'Deep Learning Foundations',
    issuer: 'SGInnovate',
    date: 'Mar 2021',
    url: 'https://1drv.ms/b/s!AtOqisQJgfEQpAuLWbeP-M8sTyb3?e=iarTRB',
    topics: ['TensorFlow', 'Keras', 'Machine Learning', 'Deep Learning'],
    description:
      'Certification for developing cloud solutions using Microsoft Azure services and development tools.',
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

  // Auto-rotate through certifications
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certifications.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % certifications.length)
    setIsAutoPlaying(false) // Stop auto-play when user interacts
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length)
    setIsAutoPlaying(false) // Stop auto-play when user interacts
  }

  const goToIndex = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false) // Stop auto-play when user interacts
  }

  // Get visible certifications (center + 2 on each side)
  const getVisibleCertifications = () => {
    const visible = []
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + certifications.length) % certifications.length
      visible.push({
        cert: certifications[index],
        position: i,
        index: index,
      })
    }
    return visible
  }
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

        {/* Spotlight Carousel */}
        <div className='relative max-w-6xl mx-auto'>
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className='absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass border border-primary/30 hover:bg-primary/10 transition-all duration-300 group'
            aria-label='Previous certification'
          >
            <ChevronLeft className='h-5 w-5 text-primary group-hover:scale-110 transition-transform' />
          </button>

          <button
            onClick={goToNext}
            className='absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass border border-primary/30 hover:bg-primary/10 transition-all duration-300 group'
            aria-label='Next certification'
          >
            <ChevronRight className='h-5 w-5 text-primary group-hover:scale-110 transition-transform' />
          </button>

          {/* Carousel Container */}
          <div className='relative h-96 flex items-center justify-center overflow-hidden px-8'>
            {getVisibleCertifications().map(({ cert, position, index }) => {
              const isCenter = position === 0
              const isAdjacent = Math.abs(position) === 1
              const isVisible = Math.abs(position) <= 2

              if (!isVisible) return null

              return (
                <div
                  key={`${cert.title}-${index}`}
                  className={`absolute transition-all duration-700 ease-out cursor-pointer ${
                    isCenter
                      ? 'z-10 scale-100'
                      : isAdjacent
                      ? 'z-5 scale-95'
                      : 'z-0 scale-90'
                  }`}
                  style={{
                    transform: `translateX(${position * 300}px) scale(${
                      isCenter ? 1 : isAdjacent ? 0.95 : 0.9
                    })`,
                  }}
                  onClick={() => !isCenter && goToIndex(index)}
                >
                  <Card
                    className={`w-80 h-80 glass transition-all duration-700 ${
                      isCenter
                        ? 'border-primary/40 shadow-2xl shadow-primary/20 opacity-100'
                        : isAdjacent
                        ? 'border-primary/20 shadow-xl shadow-black/20 opacity-70 hover:opacity-85'
                        : 'border-primary/10 shadow-lg shadow-black/30 opacity-40 hover:opacity-60'
                    }`}
                  >
                    {/* Enhanced spotlight effect for center card */}
                    {isCenter && (
                      <>
                        <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl' />
                        <div className='absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-sm -z-10' />
                      </>
                    )}

                    {/* Depth shadow for non-center cards */}
                    {!isCenter && (
                      <div className='absolute -inset-2 bg-black/20 rounded-2xl blur-md -z-10' />
                    )}

                    <CardHeader className='relative pb-4'>
                      <div className='flex items-center justify-between mb-4'>
                        <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                          <span className='font-medium text-primary'>{cert.issuer}</span>
                          <span>•</span>
                          <span>{cert.date}</span>
                        </div>

                        {cert.url && isCenter && (
                          <a
                            href={cert.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='p-2 rounded-lg hover:bg-primary/10 transition-colors group/link'
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className='h-4 w-4 text-muted-foreground group-hover/link:text-primary' />
                          </a>
                        )}
                      </div>

                      <CardTitle
                        className={`leading-tight transition-colors duration-300 ${
                          isCenter ? 'text-lg text-primary' : 'text-base group-hover:text-primary'
                        }`}
                      >
                        {cert.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className='relative space-y-4'>
                      {/* Description - show for center and adjacent cards */}
                      {cert.description && (isCenter || isAdjacent) && (
                        <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                          isCenter 
                            ? 'text-muted-foreground' 
                            : 'text-muted-foreground/70'
                        }`}>
                          {isCenter ? cert.description : `${cert.description.slice(0, 100)}...`}
                        </p>
                      )}

                      {/* Topics */}
                      {cert.topics && cert.topics.length > 0 && (
                        <div className='flex flex-wrap gap-2'>
                          {cert.topics.slice(0, isCenter ? cert.topics.length : isAdjacent ? 4 : 2).map((topic) => (
                            <Badge
                              key={topic}
                              variant='secondary'
                              className={`transition-colors duration-300 ${
                                isCenter
                                  ? 'bg-primary/15 text-primary border-primary/30'
                                  : isAdjacent
                                  ? 'bg-primary/10 text-primary/80 border-primary/20'
                                  : 'bg-primary/5 text-primary/60 border-primary/10'
                              }`}
                            >
                              {topic}
                            </Badge>
                          ))}
                          {!isCenter && cert.topics.length > (isAdjacent ? 4 : 2) && (
                            <Badge variant='secondary' className='bg-muted/50 text-muted-foreground text-xs'>
                              +{cert.topics.length - (isAdjacent ? 4 : 2)}
                            </Badge>
                          )}
                        </div>
                      )}

                      {/* Center card gets a special credential indicator */}
                      {isCenter && (
                        <div className='absolute bottom-4 right-4'>
                          <div className='w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg'>
                            <Award className='h-4 w-4 text-white' />
                          </div>
                        </div>
                      )}
                            <Award className='h-4 w-4 text-white' />
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
                  </Card>
                </div>
              )
            })}
          </div>

          {/* Dots Indicator */}
          <div className='flex justify-center mt-8 gap-2'>
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to certification ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className='text-center mt-4'>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className='text-xs text-muted-foreground hover:text-primary transition-colors'
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Auto-play'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection
