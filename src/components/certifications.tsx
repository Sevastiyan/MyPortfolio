'use client'

import React from 'react'
import { Award, ExternalLink } from 'lucide-react'
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

// Duplicate the certifications array for infinite scroll effect
const infiniteCertifications = [...certifications, ...certifications]

const CertificationsSection: React.FC = () => {
  return (
    <section id='certifications' className='pb-32 relative overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background' />
      <div
        className='absolute top-20 left-20 w-40 h-40 rounded-full bg-accent/5 animate-float'
        style={{ animationDelay: '0s' }}
      />
      <div
        className='absolute bottom-40 right-10 w-32 h-32 rounded-full bg-primary/5 animate-float'
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

        {/* Infinite Scroll Carousel */}
        <div className='relative max-w-6xl mx-auto overflow-hidden'>
          {/* Fade overlays */}
          <div className='absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none' />
          <div className='absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none' />

          {/* Scrolling track */}
          <div className='flex animate-scroll hover:animation-paused'>
            {infiniteCertifications.map((cert, index) => (
              <div key={`${cert.title}-${index}`} className='flex-shrink-0 w-80 mr-6'>
                <Card className='group h-full glass border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl'>
                  {/* Background gradient on hover */}
                  <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                  <CardHeader className='relative pb-4'>
                    <div className='flex items-center justify-between mb-4'>
                      <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                        <span className='font-medium text-primary'>{cert.issuer}</span>
                        <span>•</span>
                        <span>{cert.date}</span>
                      </div>

                      {cert.url && (
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

                    <CardTitle className='text-lg leading-tight group-hover:text-primary transition-colors duration-300'>
                      {cert.title}
                    </CardTitle>

                    {cert.credentialId && (
                      <div className='text-xs font-mono bg-muted/50 px-2 py-1 rounded border border-border/50 inline-block mt-2'>
                        ID: {cert.credentialId}
                      </div>
                    )}
                  </CardHeader>

                  <CardContent className='relative space-y-4'>
                    {/* Description */}
                    {cert.description && (
                      <p className='text-sm text-muted-foreground leading-relaxed line-clamp-3 group-hover:text-foreground/80 transition-colors duration-300'>
                        {cert.description}
                      </p>
                    )}

                    {/* Topics */}
                    {cert.topics && cert.topics.length > 0 && (
                      <div className='flex flex-wrap gap-2 '>
                        {cert.topics.map((topic) => (
                          <Badge
                            key={topic}
                            variant='secondary'
                            className='text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-300'
                          >
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center mt-20'>
          <div className='glass rounded-2xl p-8 border border-primary/20'>
            <h3 className='text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
              Continuous Learning
            </h3>
            <p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
              I'm committed to staying current with industry trends and continuously expanding my
              skill set through professional certifications and hands-on learning.
            </p>
            <Button
              variant='outline'
              size='lg'
              scrollTo='contact'
              scrollAnimation='smooth'
              className='glass border-primary/30 hover:bg-primary/10'
            >
              Let's Discuss Your Project
            </Button>
          </div>
        </div>
      </div>

      {/* Custom CSS for the animation */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: calc(320px * 12);
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        .animation-paused {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-320px * 6));
          }
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll-mobile 25s linear infinite;
            width: calc(280px * 12);
          }

          @keyframes scroll-mobile {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-280px * 6));
            }
          }
        }
      `}</style>
    </section>
  )
}

export default CertificationsSection
