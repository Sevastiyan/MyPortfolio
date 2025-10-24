'use client'

import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { ExternalLink, Github, MapPin } from 'lucide-react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiPython,
  SiMongodb,
  SiVuedotjs,
  SiTensorflow,
  SiWebrtc,
  SiAndroid,
  SiSpringboot,
  SiKotlin,
  SiAwslambda,
  SiAmazondynamodb,
  SiAmazon,
} from 'react-icons/si'

export function ProjectsSection() {
  // Helper to remove undefined values from metrics
  function cleanMetrics(metrics: Record<string, string | undefined>): Record<string, string> {
    return Object.fromEntries(
      Object.entries(metrics).filter(([_, v]) => typeof v === 'string')
    ) as Record<string, string>
  }

  const projects = [
    {
      title: 'Real-time Pose Detection & Posture Coaching',
      description:
        'A real-time full-body posture detection platform for interactive workouts, integrating mobile devices and TVs to deliver AI-driven feedback during exercise sessions.',
      image: '/placeholder-project-1.jpg',
      technologies: ['MediaPipe', 'TensorFlow.js', 'React', 'Next.js', 'WebRTC', 'Tailwind CSS'],
      icons: [SiTensorflow, SiReact, SiNextdotjs, SiWebrtc],
      category: 'AI/ML',
      status: 'Beta',
      location: 'Seoul, South Korea',
      metrics: cleanMetrics({
        deployed: 'SamsungTV',
        uptime: '99.9%',
        satisfaction: '4.5/5',
      }),
      links: {
        demo: 'https://pose-webivew.vercel.app/workouts.html',
        github: '', // 'https://github.com/username/project',
      },
      featured: true,
    },
    {
      title: 'Gait Detection Algorithm for Wearable Devices',
      description:
        'A sensor-fusion gait analysis algorithm that transforms wearable IoT devices into a research-grade tool, delivering metrics comparable to gold-standard motion analysis systems.',
      image: '/placeholder-project-2.jpg',
      technologies: ['Sensor Fusion', 'Python', 'TensorFlow', 'Kotlin', 'Java', 'Android'],
      icons: [SiPython, SiReact, SiMongodb],
      category: 'AI/ML',
      status: 'Live',
      location: 'Singapore',
      metrics: cleanMetrics({
        accuracy: '96.8%',
        ensamble: '5 models',
        performance: 'A+',
      }),
      links: {
        demo: 'https://github.com/Sevastiyan/Sevastiyan/blob/main/projects/my_gait_algorithm/README.md',
        github: '', // 'https://github.com/username/project',
      },
      featured: true,
    },
    {
      title: 'Sleep Enhancement IoT Device and Platform',
      description:
        'IoT device and platform designed to improve sleep quality through monitoring and personalized recommendations.',
      image: '/placeholder-project-3.jpg',
      technologies: ['Node.js', 'DynamoDB', 'AWS', 'TensorFlow', 'Python'],
      icons: [SiAwslambda, SiAmazondynamodb, SiAmazon, SiNodedotjs, SiPython, SiTensorflow],
      category: 'Platform',
      status: 'Live',
      location: 'Seoul, South Korea',
      metrics: cleanMetrics({
        users: '2K+',
        devices: '50K+',
        engagement: '85%',
      }),
      links: {
        demo: 'https://www.wethm.com/',
      },
      featured: false,
    },
    {
      title: 'Real-Time Dashboard for Patient Monitoring',
      description:
        'Comprehensive dashboard for real-time monitoring of patient vitals, integrating data from IoT medical device and providing actionable insights.',
      image: '/placeholder-project-4.jpg',
      technologies: ['Android', 'Java', 'Spring Boot', 'Kotlin', 'MongoDB'],
      icons: [SiAndroid, SiKotlin, SiMongodb, SiSpringboot],
      category: 'Real-Time',
      status: 'Live',
      location: 'Seoul, South Korea',
      metrics: cleanMetrics({
        users: '100+',
        uptime: '99.8%',
        satisfaction: '4.7/5',
      }),
      links: {},
      featured: false,
    },
    {
      title: 'Portfolio Website Builder',
      description:
        'Drag-and-drop portfolio builder with customizable themes, hosting, and analytics for creative professionals.',
      image: '/placeholder-project-5.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Vercel'],
      icons: [SiNextdotjs, SiTypescript, SiTailwindcss],
      category: 'SaaS',
      status: 'Beta',
      location: 'Singapore',
      metrics: cleanMetrics({
        templates: '50+',
        users: '1K+',
        satisfaction: '4.8/5',
      }),
      links: {},
      featured: false,
    },
  ]

  const categories = ['All', 'Full-Stack', 'AI/ML', 'Web App', 'Real-Time', 'SaaS', 'Mobile']
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  const featuredProjects = projects.filter((project) => project.featured)
  const regularProjects = projects.filter((project) => !project.featured)

  return (
    <section id='projects' className='py-32 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background' />
      <div
        className='absolute top-20 left-20 w-40 h-40 rounded-full bg-accent/5 animate-float'
        style={{ animationDelay: '0s' }}
      />
      <div
        className='absolute bottom-40 right-10 w-32 h-32 rounded-full bg-primary/5 animate-float'
        style={{ animationDelay: '2s' }}
      />
      {/* New decorative elements */}
      <div
        className='absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-secondary/5 animate-float'
        style={{ animationDelay: '1s' }}
      />
      <div
        className='absolute bottom-10 left-10 w-24 h-24 rounded-full bg-accent/5 animate-float'
        style={{ animationDelay: '3s' }}
      />
      <div
        className='absolute top-1/4 right-3/4 w-20 h-20 rounded-full bg-primary/5 animate-float -z-10'
        style={{ animationDelay: '4s' }}
      />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance'>
            Featured{' '}
            <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
              Projects
            </span>
          </h2>

          <p className='text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed'>
            A showcase of <span className='text-primary font-medium'>innovative solutions</span> and
            creative problem-solving
          </p>
        </div>

        {/* Category Filter */}
        {/* <div className='flex flex-wrap justify-center gap-3 mb-16'>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                  : 'glass border-primary/30 hover:bg-primary/10'
              }`}
            >
              {category}
            </Button>
          ))}
        </div> */}

        {/* Featured Projects */}
        {selectedCategory === 'All' && (
          <div className='mb-20'>
            <div className='grid lg:grid-cols-2 gap-8'>
              {featuredProjects.map((project, index) => (
                <FeaturedProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* All Projects Grid */}
        <div className='space-y-8'>
          {selectedCategory !== 'All' && (
            <h3 className='text-2xl font-bold text-center text-foreground'>
              {selectedCategory} Projects
            </h3>
          )}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {(selectedCategory === 'All' ? regularProjects : filteredProjects).map(
              (project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              )
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center mt-20'>
          <div className='glass rounded-3xl p-12 border border-primary/20'>
            <h3 className='text-3xl font-bold mb-4 text-foreground'>
              Interested in Working Together?
            </h3>
            <p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
              I'm always excited to take on new challenges and create amazing digital experiences.
            </p>
            <Button
              size='lg'
              className='rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-4'
              scrollTo='contact'
              scrollAnimation='smooth'
            >
              Let's Start a Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    technologies: string[]
    icons: any[]
    category: string
    status: string
    location: string
    metrics: Record<string, string>
    links: {
      demo?: string
      github?: string
    }
    featured?: boolean
  }
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 150}ms` }}
      className={`transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Card className='group h-full flex flex-col glass border-primary/10 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden'>
        {/* Subtle top accent bar */}
        <div className='h-1 bg-gradient-to-r from-primary/20 to-accent/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500' />

        <CardContent className='p-6 pt-6 flex-1 flex flex-col space-y-6'>
          {/* Header section with badges */}
          <div className='space-y-4'>
            <div className='flex items-center justify-between gap-2'>
              <Badge variant='outline' className='glass border-primary/20 text-xs'>
                {project.category}
              </Badge>
              <Badge
                variant={project.status === 'Live' ? 'default' : 'secondary'}
                className={`text-xs ${
                  project.status === 'Live'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                }`}
              >
                {project.status}
              </Badge>
            </div>

            <CardTitle className='text-xl group-hover:text-primary transition-colors duration-300 line-clamp-2'>
              {project.title}
            </CardTitle>

            <div className='flex items-center text-xs text-muted-foreground'>
              <MapPin className='h-3 w-3 mr-1.5' />
              {project.location}
            </div>
          </div>

          {/* Description */}
          <p className='text-muted-foreground text-sm leading-relaxed line-clamp-4 flex-grow'>
            {project.description}
          </p>

          {/* Tech stack icons */}
          <div className='flex items-center gap-3'>
            {project.icons.slice(0, 5).map((Icon, iconIndex) => (
              <div
                key={iconIndex}
                className='p-2 rounded-xl bg-muted/30 group-hover:bg-primary/10 transition-all duration-300'
              >
                <Icon className='h-5 w-5 text-primary' />
              </div>
            ))}
            {project.icons.length > 5 && (
              <span className='text-xs text-muted-foreground ml-1'>
                +{project.icons.length - 5}
              </span>
            )}
          </div>

          {/* Metrics */}
          <div className='grid grid-cols-3 gap-3 p-4 rounded-xl bg-muted/20 group-hover:bg-primary/5 transition-colors duration-300'>
            {Object.entries(project.metrics)
              .slice(0, 3)
              .map(([key, value], i) => (
                <div key={i} className='text-center'>
                  <div className='text-base font-bold text-primary'>{value}</div>
                  <div className='text-xs text-muted-foreground capitalize mt-1'>{key}</div>
                </div>
              ))}
          </div>

          {/* Action buttons */}
          <div className='flex gap-3 pt-2'>
            {project.links.demo && (
              <Button
                variant='outline'
                size='sm'
                externalLink={project.links.demo}
                className={`${
                  project.links.github ? 'flex-1' : 'w-full'
                } rounded-full glass border-primary/20 hover:bg-primary/10 transition-all duration-300`}
              >
                <ExternalLink className='h-4 w-4 mr-2' />
                View Demo
              </Button>
            )}
            {project.links.github && (
              <Button
                variant='outline'
                size='sm'
                externalLink={project.links.github}
                className={`${
                  project.links.demo ? 'flex-1' : 'w-full'
                } rounded-full glass border-primary/20 hover:bg-primary/10 transition-all duration-300`}
              >
                <Github className='h-4 w-4 mr-2' />
                Code
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function FeaturedProjectCard({ project, index }: ProjectCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 200}ms` }}
      className={`transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Card className='group glass border-primary/10 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden'>
        {/* Subtle top accent bar */}
        <div className='h-1 bg-gradient-to-r from-primary/20 to-accent/20' />

        {/* Abstract visual header */}
        <div className='relative h-48 bg-gradient-to-br from-primary/10 via-accent/5 to-background overflow-hidden'>
          {/* Animated pattern */}
          <div className='absolute inset-0 opacity-30'>
            <div className='absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl' />
            <div className='absolute bottom-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl' />
          </div>

          {/* Display main tech icons */}
          <div className='absolute inset-0 flex items-center justify-center gap-6'>
            {project.icons.slice(0, 3).map((Icon, i) => (
              <Icon key={i} className='h-12 w-12 text-primary/40' />
            ))}
          </div>
        </div>

        <CardHeader className='pt-6 space-y-4'>
          <div className='space-y-4'>
            <div className='flex items-center justify-between gap-2'>
              <Badge variant='outline' className='glass border-primary/20 text-xs'>
                {project.category}
              </Badge>
              <Badge
                variant={project.status === 'Live' ? 'default' : 'secondary'}
                className={`text-xs px-3 py-1 ${
                  project.status === 'Live'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                }`}
              >
                {project.status}
              </Badge>
            </div>

            <CardTitle className='text-xl group-hover:text-primary transition-colors duration-300'>
              {project.title}
            </CardTitle>
          </div>

          <p className='text-muted-foreground leading-relaxed text-sm'>{project.description}</p>

          <div className='flex items-center text-xs text-muted-foreground'>
            <MapPin className='h-3 w-3 mr-1.5' />
            <span>{project.location}</span>
          </div>
        </CardHeader>

        <CardContent className='space-y-6'>
          {/* Technology stack */}
          <div>
            <h4 className='font-semibold mb-3 text-foreground text-sm'>Tech Stack</h4>
            <div className='flex flex-wrap gap-2'>
              {project.technologies.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant='secondary'
                  className='bg-muted/30 hover:bg-primary/10 transition-colors duration-300 text-xs'
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div>
            <h4 className='font-semibold mb-3 text-foreground text-sm'>Key Metrics</h4>
            <div className='grid grid-cols-3 gap-3'>
              {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                <div
                  key={metricIndex}
                  className='text-center p-3 rounded-xl bg-muted/20 group-hover:bg-primary/5 transition-colors duration-300'
                >
                  <div className='text-base font-bold text-primary'>{value}</div>
                  <div className='text-xs text-muted-foreground capitalize mt-1'>{key}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className='flex gap-3 pt-2'>
            {project.links.demo && (
              <Button
                size='sm'
                externalLink={project.links.demo}
                className='flex-1 rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300'
              >
                <ExternalLink className='h-4 w-4 mr-2' />
                View Project
              </Button>
            )}
            {project.links.github && (
              <Button
                variant='outline'
                size='sm'
                externalLink={project.links.github}
                className='rounded-full glass border-primary/20 hover:bg-primary/10 px-6 transition-all duration-300'
              >
                <Github className='h-4 w-4 mr-2' />
                Code
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Import React for useState
import React from 'react'
