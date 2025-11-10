'use client'

import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiAmazonwebservices,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiApifox,
  SiTensorflow,
  SiInvision,
  SiAndroid,
} from 'react-icons/si'
import { Brain, Laptop, Server, Smartphone, Cloud, ChartLine, Blocks, EyeIcon } from 'lucide-react'

export function SkillsSection() {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'Data Science (Pandas, NumPy, Scikit-learn)', icon: SiPython, level: 90 },
        { name: 'Signal Processing & Sensor Fusion', icon: ChartLine, level: 85 },
        { name: 'Computer Vision (MediaPipe, OpenCV)', icon: EyeIcon, level: 76 },
        { name: 'TensorFlow & Model Optimization', icon: SiTensorflow, level: 80 },
        { name: 'Real-Time ML Inference', icon: Blocks, level: 72 },
      ],
    },
    {
      title: 'Backend & Cloud',
      icon: Server,
      color: 'from-green-500 to-teal-600',
      skills: [
        { name: 'Node.js / TypeScript', icon: SiNodedotjs, level: 86 },
        { name: 'AWS (Lambda, DynamoDB, Kinesis, S3)', icon: SiAmazonwebservices, level: 82 },
        { name: 'Serverless Architecture', icon: Cloud, level: 78 },
        { name: 'DynamoDB & MongoDB', icon: SiMongodb, level: 76 },
        { name: 'Python (FastAPI, Flask)', icon: SiPython, level: 69 },
      ],
    },
    {
      title: 'Mobile & IoT',
      icon: Smartphone,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'Sensor Data Processing', icon: Blocks, level: 87 },
        { name: 'IoT Data Pipelines & Integration', icon: Server, level: 83 },
        { name: 'Android SDK (Kotlin, Java)', icon: SiNodedotjs, level: 78 },
        { name: 'Real-Time Streaming (WebRTC, MQTT)', icon: Cloud, level: 70 },
      ],
    },
    {
      title: 'Frontend & Tools',
      icon: Laptop,
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'React & Next.js', icon: SiReact, level: 84 },
        { name: 'TypeScript', icon: SiTypescript, level: 80 },
        { name: 'Git & Agile Development', icon: SiGit, level: 76 },
        { name: 'Docker & CI/CD', icon: SiDocker, level: 68 },
      ],
    },
  ]

  return (
    <section id='skills' className='py-32 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background' />
      <div
        className='absolute top-20 right-20 w-40 h-40 rounded-full bg-primary/5 animate-float'
        style={{ animationDelay: '0s' }}
      />
      <div
        className='absolute bottom-40 left-10 w-32 h-32 rounded-full bg-accent/5 animate-float'
        style={{ animationDelay: '2s' }}
      />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance'>
            Skills &{' '}
            <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
              Technologies
            </span>
          </h2>

          <p className='text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed'>
            Constantly evolving toolkit that powers{' '}
            <span className='text-primary font-medium'>exceptional digital experiences</span>
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 mb-16'>
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory key={categoryIndex} category={category} index={categoryIndex} />
          ))}
        </div>

        {/* Additional Skills as Badges */}
        <div className='text-center'>
          <h3 className='text-2xl font-bold text-foreground mb-8'>Additional Technologies</h3>
          <div className='flex flex-wrap justify-center gap-3 max-w-4xl mx-auto'>
            {[
              'PostgreSQL',
              'SQLite',
              'GitHub Actions',
              'Plotly',
              'Matplotlib',
              'IMU Sensors',
              'Pressure Sensors',
              'ZUPT',
              'Quaternion Math',
              'REST APIs',
              'Microservices',
              'Tizen TV',
              'Spring Boot',
              'Agile',
              'Linux',
              'Testing (PyTest, Jest)',
              'Data Visualization',
              'System Integration',
            ].map((skill, index) => (
              <SkillBadge key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface SkillCategoryProps {
  category: {
    title: string
    icon: any
    color: string
    skills: Array<{
      name: string
      icon: any
      level: number
    }>
  }
  index: number
}

function SkillCategory({ category, index }: SkillCategoryProps) {
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
      <Card className='group py-8 px-1 md:px-8 glass border-primary/20 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl'>
        {/* Background gradient on hover */}
        <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

        <CardContent className='relative p-0 space-y-8'>
          <div className='flex items-center space-x-4'>
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg`}>
              <category.icon className='h-8 w-8 text-white' />
            </div>
            <h3 className='text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300'>
              {category.title}
            </h3>
          </div>

          <div className='space-y-4'>
            {category.skills.map((skill, skillIndex) => (
              <SkillItem key={skillIndex} skill={skill} index={skillIndex} inView={inView} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

interface SkillItemProps {
  skill: {
    name: string
    icon: any
    level: number
  }
  index: number
  inView: boolean
}

function SkillItem({ skill, index, inView }: SkillItemProps) {
  return (
    <div className='flex items-center space-x-2'>
      <div className='flex items-center justify-center w-10 h-10 rounded-xl bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300'>
        <skill.icon className='h-5 w-5 text-primary' />
      </div>

      <div className='flex-1'>
        <div className='flex justify-between items-center mb-2'>
          <span className='font-medium text-sm md:text-md text-foreground'>{skill.name}</span>
          <span className='text-sm text-muted-foreground'>{skill.level}%</span>
        </div>

        <div className='h-2 bg-muted rounded-full overflow-hidden'>
          <div
            className={`h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out ${
              inView ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              width: inView ? `${skill.level}%` : '0%',
              transitionDelay: `${index * 100 + 500}ms`,
            }}
          />
        </div>
      </div>
    </div>
  )
}

interface SkillBadgeProps {
  skill: string
  index: number
}

function SkillBadge({ skill, index }: SkillBadgeProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 50}ms` }}
      className={`transition-all duration-500 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <Badge
        variant='secondary'
        className='px-4 py-2 font-medium bg-muted/50 hover:bg-primary/10 hover:text-primary border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105'
      >
        {skill}
      </Badge>
    </div>
  )
}
