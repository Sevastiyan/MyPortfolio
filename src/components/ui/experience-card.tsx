'use client'

import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin } from 'lucide-react'
import React from 'react'

interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string
  technologies: string[]
}

interface ExperienceCardProps {
  experience: Experience
  index: number
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const { ref, inView } = useInView({
    // triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 200}ms` }}
      className={`relative flex items-center transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${index > 0 ? '-mt-12' : ''} ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Timeline dot */}
      <div className='absolute left-4 md:left-1/2 w-4 h-4 bg-primary ring-4 ring-background rounded-full md:transform md:-translate-x-2 z-10 shadow-lg' />

      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
        <Card className='ml-12 md:ml-0 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl'>
          <CardHeader>
            <CardTitle className='text-xl'>{experience.title}</CardTitle>
            <div className='space-y-2'>
              <div className='flex items-center text-muted-foreground'>
                <MapPin className='h-4 w-4 mr-2' />
                <span className='font-medium'>{experience.company}</span>
                <span className='mx-2'>•</span>
                <span>{experience.location}</span>
              </div>
              <div className='flex items-center text-muted-foreground'>
                <Calendar className='h-4 w-4 mr-2' />
                <span>{experience.period}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className='space-y-4'>
            <p className='text-muted-foreground leading-relaxed'>{experience.description}</p>
            <div className='flex flex-wrap gap-2'>
              {experience.technologies.map((tech, techIndex) => (
                <Badge key={techIndex} variant='secondary'>
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
