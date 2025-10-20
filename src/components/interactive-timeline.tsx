'use client'

import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import Button from './ui/button'
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  Trophy,
  Star,
  Download,
  Sparkles,
} from 'lucide-react'
import { useDownloadCV } from '@/hooks/useDownloadCV'

interface TimelineItem {
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

export function InteractiveTimeline() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const { downloadCV, isLoading, error } = useDownloadCV()

  const timelineData: TimelineItem[] = [
    {
      id: '1',
      type: 'experience',
      title: 'Senior AI Engineer',
      organization: 'Neurabody',
      location: 'Seoul, South Korea',
      startDate: '2024',
      endDate: 'Present',
      description:
        'Leading development of AI-powered posture and movement analytics for smart devices. Focused on real-time posture detection for Samsung Smart TVs and ergonomic seating systems.',
      achievements: [
        'Developed low-latency AI pipelines for posture tracking using MediaPipe and WebRTC',
        'Architected AWS backend (Lambda, DynamoDB, Kinesis) supporting 100K+ active users',
        'Optimized model inference and video processing pipeline, improving responsiveness by 60%',
      ],
      technologies: ['TypeScript', 'Node.js', 'AWS', 'WebRTC', 'MediaPipe', 'Machine Learning'],
    },
    {
      id: '2',
      type: 'experience',
      title: 'Full-Stack Developer',
      organization: 'Wethm',
      location: 'Seoul, South Korea',
      startDate: '2021',
      endDate: '2024',
      description:
        'Developed and scaled the backend for a sleep-enhancement IoT platform integrating biosignal analytics and AI-driven sleep scoring.',
      achievements: [
        'Integrated real-time sleep detection algorithms into production systems',
        'Built subscription and analytics backend serving 50K+ connected devices',
        'Implemented CI/CD and microservice architecture, ensuring 99.9% uptime',
      ],
      technologies: ['Node.js', 'Python', 'AWS', 'PostgreSQL', 'TypeScript', 'IoT'],
    },
    {
      id: '3',
      type: 'experience',
      title: 'AI Engineer / Data Analyst',
      organization: 'FlexoSense Pte. Ltd.',
      location: 'Singapore',
      startDate: '2019',
      endDate: '2021',
      description:
        'Designed sensor fusion and gait analysis algorithms for smart insoles and clinical monitoring. Contributed to healthcare and safety innovation projects.',
      achievements: [
        'Developed gait analysis pipeline for IoT insoles with 97% metric accuracy',
        'Delivered clinical pilot with NUH Singapore for gait monitoring',
        'Built dashboards and analytics for real-time patient and industrial safety monitoring',
      ],
      technologies: ['Python', 'TensorFlow', 'Sensor Fusion', 'Machine Learning', 'AWS', 'IoT'],
    },
    {
      id: '4',
      type: 'education',
      title: 'Master of Science in Medialogy',
      organization: 'Aalborg University',
      location: 'Copenhagen, Denmark',
      startDate: '2016',
      endDate: '2018',
      description:
        'Researched user interaction and biomechanics within intelligent systems. Master’s thesis focused on physiological signal interpretation and data-driven UX.',
      achievements: [
        'Completed MSc thesis on signal analysis and human–computer interaction',
        'Collaborated on projects combining AI, media technology, and human factors',
      ],
      technologies: [
        'Machine Learning',
        'Signal Processing',
        'Human–Computer Interaction',
        'Data Analysis',
        'Prototyping',
      ],
    },
    {
      id: '5',
      type: 'education',
      title: 'Bachelor of Engineering in Global Business Engineering',
      organization: 'VIA University College',
      location: 'Horsens, Denmark',
      startDate: '2009',
      endDate: '2014',
      description:
        'Interdisciplinary program merging software engineering, project management, and business strategy.',
      achievements: [
        'Completed projects bridging technology and business innovation',
        'Developed strong foundation in software development and system design',
      ],
      technologies: [
        'Software Engineering',
        'Database Systems',
        'Web Development',
        'Mobile Development',
        'Project Management',
      ],
    },
  ]

  // Removed timeline progress calculation since we're not using the filling animation

  const toggleItem = (id: string) => {
    setSelectedItem(selectedItem === id ? null : id)
  }

  const getItemIcon = (type: 'experience' | 'education') => {
    return type === 'experience' ? Briefcase : GraduationCap
  }

  return (
    <section id='timeline' className='py-32 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background' />

      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-20'>
          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance'>
            My{' '}
            <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
              Timeline
            </span>
          </h2>

          <p className='text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed'>
            Follow my journey from{' '}
            <span className='text-primary font-medium'>student to senior engineer</span>
          </p>
        </div>

        {/* Interactive Timeline */}
        <div ref={timelineRef} className='relative'>
          {/* Timeline Line - Static like original */}
          <div className='absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary to-accent rounded-full shadow-lg md:transform md:-translate-x-0' />

          {/* Timeline Items */}
          <div className='space-y-12'>
            {timelineData.map((item, index) => {
              const Icon = getItemIcon(item.type)
              const isLeft = index % 2 === 0
              const isExpanded = selectedItem === item.id

              return (
                <TimelineItem
                  key={item.id}
                  item={item}
                  isLeft={isLeft}
                  isExpanded={isExpanded}
                  onToggle={() => toggleItem(item.id)}
                  Icon={Icon}
                  index={index}
                />
              )
            })}
          </div>
        </div>

        {/* Download CV Button */}
        <div className='text-center mt-20'>
          <Button
            variant='default'
            size='lg'
            className='flex items-center mx-auto'
            onClick={downloadCV}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Sparkles className='h-5 w-5 mr-2 animate-spin' />
                Downloading...
              </>
            ) : (
              <>
                <Download className='h-5 w-5 mr-2' />
                Download Full Resume
              </>
            )}
          </Button>
          {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
        </div>
      </div>
    </section>
  )
}

interface TimelineItemProps {
  item: TimelineItem
  isLeft: boolean
  isExpanded: boolean
  onToggle: () => void
  Icon: any
  index: number
}

function TimelineItem({ item, isLeft, isExpanded, onToggle, Icon, index }: TimelineItemProps) {
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
      {/* Timeline Node - Using original style */}
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
          {/* Background gradient that appears on hover or when expanded */}
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

                {/* Technologies & Skills - Only show when expanded */}
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
