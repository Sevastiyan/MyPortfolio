'use client'

import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin } from 'lucide-react'
import React from 'react'

interface Education {
  degree: string
  school: string
  location: string
  period: string
  description: string
  achievements: string[]
  coursework: string[]
}

interface EducationCardProps {
  education: Education
  index: number
}

export function EducationCard({ education, index }: EducationCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`relative flex items-center transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Enhanced Timeline dot with accent theme */}
      <div className='absolute left-1.5 md:left-1/2 md:transform md:-translate-x-2.5 z-10'>
        <div className='w-6 h-6 bg-gradient-to-br from-accent to-primary rounded-full shadow-lg ring-1 ring-background border-2 border-accent/30'>
          <div className='w-full h-full bg-gradient-to-br from-accent to-primary rounded-full animate-pulse opacity-60' />
        </div>
      </div>

      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
        <Card className='group ml-12 md:ml-0 glass border-accent/20 hover:border-accent/40 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl'>
          {/* Background gradient that appears on hover - accent themed */}
          <div className='absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

          <CardHeader className='relative'>
            <CardTitle className='text-xl lg:text-2xl font-bold group-hover:text-accent transition-colors duration-300'>
              {education.degree}
            </CardTitle>
            <div className='space-y-3 mt-6'>
              <div className='flex items-center text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300'>
                <div className='flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 mr-3 group-hover:bg-accent/20 transition-colors duration-300'>
                  <MapPin className='h-4 w-4 text-accent' />
                </div>
                <span className='font-semibold'>{education.school}</span>
                <span className='mx-2 text-accent'>•</span>
                <span>{education.location}</span>
              </div>
              <div className='flex items-center text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300'>
                <div className='flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 mr-3 group-hover:bg-primary/20 transition-colors duration-300'>
                  <Calendar className='h-4 w-4 text-primary' />
                </div>
                <span className='font-medium'>{education.period}</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className='relative space-y-6'>
            <p className='text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/80 transition-colors duration-300'>
              {education.description}
            </p>

            {/* Simplified - show only top achievements as badges */}
            <div className='flex flex-wrap gap-2'>
              {education.coursework.slice(0, 3).map((course, courseIndex) => (
                <Badge
                  key={courseIndex}
                  variant='secondary'
                  className='px-3 py-1 text-sm font-medium bg-muted/50 hover:bg-accent/10 hover:text-accent border border-border hover:border-accent/30 transition-all duration-300'
                >
                  {course}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
