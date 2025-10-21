'use client'

import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from './card'
import { Badge } from './badge'
import { MapPin, Calendar, ChevronDown, ChevronUp, Trophy, Star } from 'lucide-react'

export interface TimelineItemData {
  id: string
  type: 'experience' | 'education'
  title: string
  organization: string
  location: string
  startDate: string
  endDate: string | 'Present'
  description: string
  achievements?: string[]
  technologies: string[]
}

interface TimelineItemProps {
  item: TimelineItemData
  isLeft: boolean
  isExpanded: boolean
  onToggle: () => void
  Icon: any
  index: number
}

export function TimelineItem({
  item,
  isLeft,
  isExpanded,
  onToggle,
  Icon,
  index,
}: TimelineItemProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <div
      ref={ref}
      className={`relative flex items-center transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline Node */}
      <div className='absolute left-1.5 md:left-1/2 md:transform md:-translate-x-2.5 z-10'>
        <div className='w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full shadow-lg ring-1 ring-background border-2 border-primary/30'>
          <div className='w-full h-full bg-gradient-to-br from-primary to-accent rounded-full animate-pulse opacity-60' />
        </div>
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
        <Card
          className={`group ml-12 md:ml-0 glass border-primary/20 hover:border-primary/40 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
            isExpanded ? 'ring-2 ring-primary/30 border-primary/40 -translate-y-2 shadow-2xl' : ''
          }`}
          onClick={onToggle}
        >
          {/* Background gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg transition-opacity duration-500 ${
              isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
          />

          <CardHeader className='relative pb-3'>
            <div className='flex items-start justify-between'>
              <div className='flex-1'>
                <div className='flex items-center gap-2 mb-2'>
                  <Icon className='h-5 w-5 text-primary' />
                  <Badge variant='secondary' className='text-xs'>
                    {item.type === 'experience' ? 'Work' : 'Education'}
                  </Badge>
                  {item.endDate === 'Present' && (
                    <Badge className='bg-green-500 text-white text-xs'>Current</Badge>
                  )}
                </div>

                <CardTitle className='text-xl lg:text-2xl font-bold group-hover:text-primary transition-colors duration-300 mb-1'>
                  {item.title}
                </CardTitle>

                <div className='space-y-3 mt-6'>
                  <div className='flex items-center text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300'>
                    <div className='flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 mr-3 group-hover:bg-primary/20 transition-colors duration-300'>
                      <MapPin className='h-4 w-4 text-primary' />
                    </div>
                    <span className='font-semibold text-sm md:text-lg'>{item.organization}</span>
                    <span className='mx-2 text-primary'>•</span>
                    <span className='text-xs md:text-sm'>{item.location}</span>
                  </div>
                  <div className='flex items-center text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300'>
                    <div className='flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 mr-3 group-hover:bg-accent/20 transition-colors duration-300'>
                      <Calendar className='h-4 w-4 text-accent' />
                    </div>
                    <span className='font-medium text-sm md:text-lg'>
                      {item.startDate} - {item.endDate}
                    </span>
                  </div>
                </div>
              </div>

              <div className='ml-4'>
                {isExpanded ? (
                  <ChevronUp className='h-5 w-5' />
                ) : (
                  <ChevronDown className='h-5 w-5' />
                )}
              </div>
            </div>
          </CardHeader>

          <CardContent className='relative space-y-6 pt-0'>
            <p className='text-muted-foreground leading-relaxed text-sm md:text-lg group-hover:text-foreground/80 transition-colors duration-300 mb-4'>
              {item.description}
            </p>

            {/* Expanded Content */}
            {isExpanded && (
              <div className='space-y-4 animate-in slide-in-from-top-2 duration-300 border-t border-border/50 pt-4 mt-4'>
                {item.achievements && (
                  <div>
                    <h4 className='font-semibold text-foreground mb-2 flex items-center gap-2'>
                      <Trophy className='h-4 w-4 text-primary' />
                      Key Achievements
                    </h4>
                    <ul className='space-y-1'>
                      {item.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className='text-sm text-muted-foreground flex items-start gap-2 group-hover:text-foreground/80 transition-colors duration-300'
                        >
                          <Star className='h-3 w-3 text-primary mt-0.5 flex-shrink-0' />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies & Skills */}
                <div>
                  <h4 className='font-semibold text-foreground mb-3'>
                    {item.type === 'experience' ? 'Technologies & Skills' : 'Coursework'}
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {item.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant='secondary'
                        className='px-3 py-1 font-medium bg-muted/50 hover:bg-primary/10 hover:text-primary border border-border hover:border-primary/30 transition-all duration-300'
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
