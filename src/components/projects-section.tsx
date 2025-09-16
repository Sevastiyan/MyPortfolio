'use client'

import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { ExternalLink, Github, Calendar, Users } from 'lucide-react'
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
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with advanced features including real-time inventory management, payment processing, and analytics dashboard.',
      image: '/placeholder-project-1.jpg',
      technologies: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
      icons: [SiReact, SiNextdotjs, SiTypescript, SiPostgresql],
      category: 'Full-Stack',
      status: 'Live',
      metrics: cleanMetrics({
        users: '10K+',
        uptime: '99.9%',
        performance: 'A+',
      }),
      links: {
        demo: 'https://demo.example.com',
        github: 'https://github.com/username/project',
      },
      featured: true,
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description:
        'Machine learning dashboard that provides insights and predictions for business metrics with real-time data visualization.',
      image: '/placeholder-project-2.jpg',
      technologies: ['Python', 'React', 'FastAPI', 'TensorFlow', 'MongoDB'],
      icons: [SiPython, SiReact, SiMongodb],
      category: 'AI/ML',
      status: 'In Development',
      metrics: cleanMetrics({
        accuracy: '94%',
        models: '5',
        data: '1M+ records',
      }),
      links: {
        demo: 'https://demo.example.com',
        github: 'https://github.com/username/project',
      },
      featured: true,
    },
    {
      title: 'Social Media Manager',
      description:
        'Comprehensive social media management platform with scheduling, analytics, and team collaboration features.',
      image: '/placeholder-project-3.jpg',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Redis', 'AWS'],
      icons: [SiVuedotjs, SiNodedotjs, SiMongodb],
      category: 'Web App',
      status: 'Live',
      metrics: cleanMetrics({
        posts: '50K+',
        users: '2K+',
        engagement: '85%',
      }),
      links: {
        demo: 'https://demo.example.com',
        github: 'https://github.com/username/project',
      },
      featured: false,
    },
    {
      title: 'Real-Time Chat Application',
      description:
        'Modern chat application with video calls, file sharing, and end-to-end encryption for secure communication.',
      image: '/placeholder-project-4.jpg',
      technologies: ['React', 'Socket.io', 'Node.js', 'WebRTC', 'MongoDB'],
      icons: [SiReact, SiNodedotjs, SiMongodb],
      category: 'Real-Time',
      status: 'Live',
      metrics: cleanMetrics({
        messages: '1M+',
        users: '5K+',
        uptime: '99.8%',
      }),
      links: {
        demo: 'https://demo.example.com',
        github: 'https://github.com/username/project',
      },
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
      metrics: cleanMetrics({
        templates: '50+',
        users: '1K+',
        satisfaction: '4.8/5',
      }),
      links: {
        demo: 'https://demo.example.com',
        github: 'https://github.com/username/project',
      },
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

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-20'>
          <div className='inline-block mb-6'>
            <span className='inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20'>
              🚀 My Work
            </span>
          </div>

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
    metrics: Record<string, string>
    links: {
      demo: string
      github: string
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
      <Card className='group h-full glass border-primary/20 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden'>
        {/* Project Image */}
        <div className='relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden'>
          {/* Placeholder for project image */}
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='text-6xl opacity-20'>🚀</div>
          </div>

          {/* Status Badge */}
          <div className='absolute top-4 right-4'>
            <Badge
              variant={project.status === 'Live' ? 'default' : 'secondary'}
              className={`${
                project.status === 'Live' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
              }`}
            >
              {project.status}
            </Badge>
          </div>

          {/* Category */}
          <div className='absolute top-4 left-4'>
            <Badge variant='outline' className='glass border-white/30 text-white'>
              {project.category}
            </Badge>
          </div>
        </div>

        <CardHeader className='pb-4'>
          <CardTitle className='text-xl group-hover:text-primary transition-colors duration-300'>
            {project.title}
          </CardTitle>
          <p className='text-muted-foreground leading-relaxed'>{project.description}</p>
        </CardHeader>

        <CardContent className='space-y-6'>
          {/* Technologies */}
          <div className='flex items-center space-x-3'>
            {project.icons.slice(0, 4).map((Icon, iconIndex) => (
              <div
                key={iconIndex}
                className='p-2 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300'
              >
                <Icon className='h-5 w-5 text-primary' />
              </div>
            ))}
            {project.icons.length > 4 && (
              <div className='p-2 rounded-lg bg-muted/50 text-xs text-muted-foreground'>
                +{project.icons.length - 4}
              </div>
            )}
          </div>

          {/* Metrics */}
          <div className='grid grid-cols-3 gap-2 text-center'>
            {Object.entries(project.metrics)
              .slice(0, 3)
              .map(([key, value], metricIndex) => (
                <div key={metricIndex} className='space-y-1'>
                  <div className='text-sm font-bold text-primary'>{value}</div>
                  <div className='text-xs text-muted-foreground capitalize'>{key}</div>
                </div>
              ))}
          </div>

          {/* Links */}
          <div className='flex space-x-3 pt-2'>
            <Button
              variant='outline'
              size='sm'
              className='flex-1 rounded-full glass border-primary/30 hover:bg-primary/10'
            >
              <ExternalLink className='h-4 w-4 mr-2' />
              Demo
            </Button>
            <Button
              variant='outline'
              size='sm'
              className='flex-1 rounded-full glass border-primary/30 hover:bg-primary/10'
            >
              <Github className='h-4 w-4 mr-2' />
              Code
            </Button>
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
      <Card className='group glass border-primary/30 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden'>
        {/* Featured badge */}
        <div className='absolute top-4 left-4 z-10'>
          <Badge className='bg-gradient-to-r from-primary to-accent text-white shadow-lg'>
            ⭐ Featured
          </Badge>
        </div>

        {/* Large project image */}
        <div className='relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='text-8xl opacity-20'>🎯</div>
          </div>

          <div className='absolute top-4 right-4'>
            <Badge
              variant={project.status === 'Live' ? 'default' : 'secondary'}
              className={`${
                project.status === 'Live' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
              }`}
            >
              {project.status}
            </Badge>
          </div>
        </div>

        <CardHeader>
          <div className='flex justify-between items-start mb-2'>
            <CardTitle className='text-2xl group-hover:text-primary transition-colors duration-300'>
              {project.title}
            </CardTitle>
            <Badge variant='outline' className='glass border-primary/30'>
              {project.category}
            </Badge>
          </div>
          <p className='text-muted-foreground leading-relaxed text-lg'>{project.description}</p>
        </CardHeader>

        <CardContent className='space-y-6'>
          {/* Technology stack */}
          <div>
            <h4 className='font-semibold mb-3 text-foreground'>Tech Stack</h4>
            <div className='flex flex-wrap gap-2'>
              {project.technologies.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant='secondary'
                  className='bg-muted/50 hover:bg-primary/10 transition-colors duration-300'
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Enhanced metrics */}
          <div>
            <h4 className='font-semibold mb-3 text-foreground'>Key Metrics</h4>
            <div className='grid grid-cols-3 gap-4'>
              {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                <div
                  key={metricIndex}
                  className='text-center p-3 rounded-xl bg-muted/30 group-hover:bg-primary/5 transition-colors duration-300'
                >
                  <div className='text-xl font-bold text-primary'>{value}</div>
                  <div className='text-sm text-muted-foreground capitalize'>{key}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className='flex space-x-4 pt-2'>
            <Button className='flex-1 rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300'>
              <ExternalLink className='h-4 w-4 mr-2' />
              View Project
            </Button>
            <Button
              variant='outline'
              className='rounded-full glass border-primary/30 hover:bg-primary/10 px-6'
            >
              <Github className='h-4 w-4' />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Import React for useState
import React from 'react'
