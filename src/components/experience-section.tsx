import { ExperienceCard } from './ui/experience-card'
import { EducationCard } from './ui/education-card'
import { GraduationCap, Briefcase, Sparkles } from 'lucide-react'
import Button from './ui/button'

export function ExperienceSection() {
  const experiences = [
    {
      title: 'Senior AI Engineer',
      company: 'Neurabody.ai',
      location: 'Seoul, South Korea',
      period: '2024 - Present',
      description:
        'Lead development of scalable web applications serving 100K+ users. Mentored junior developers and implemented best practices for code quality and performance.',
      technologies: ['React', 'Node.js', 'AWS', 'TypeScript', 'PostgreSQL'],
    },
    {
      title: 'Full Stack Engineer',
      company: 'Mellowing Factory.',
      location: 'Seoul, South Korea',
      period: '2021 - 2024',
      description:
        'Developed responsive web applications and collaborated with design teams to create exceptional user experiences. Improved application performance by 40%.',
      technologies: ['Vue.js', 'JavaScript', 'SCSS', 'Firebase', 'Figma'],
    },
    {
      title: 'AI Consultant',
      company: 'Flexosense Pte. Ltd.',
      location: 'Singapore',
      period: '2021 - 2025',
      description:
        'Built and maintained company websites and web applications. Gained experience in full-stack development and agile methodologies.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    },
    {
      title: 'Data Analyst',
      company: 'Flexosense Pte. Ltd.',
      location: 'Singapore',
      period: '2019 - 2021',
      description:
        'Built and maintained company websites and web applications. Gained experience in full-stack development and agile methodologies.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    },
  ]

  const education = [
    {
      degree: 'Master of Science in Medialogy',
      school: 'Aalborg University',
      location: 'Copenhagen, Denmark',
      period: '2016 - 2018',
      description:
        'Conducted research on user interaction and experience with interactive systems. Developed a thesis on the impact of recommendation systems.',
      achievements: ['Magna Cum Laude', 'AI Research Fellowship', "Dean's List"],
      coursework: ['Machine Learning', 'Deep Learning', 'Data Structures', 'Algorithms'],
    },
    {
      degree: 'Bachelor of Engineering in Global Business Engineering',
      school: 'VIA University',
      location: 'Horsens, Denmark',
      period: '2009 - 2014',
      description:
        'Focused on the intersection of technology and business. Developed a strong foundation in software development and project management.',
      achievements: [
        'Summa Cum Laude',
        'ACM Programming Contest Winner',
        'Outstanding Student Award',
      ],
      coursework: [
        'Software Engineering',
        'Database Systems',
        'Web Development',
        'Mobile Development',
      ],
    },
  ]

  return (
    <section id='experience' className='py-32 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background' />
      <div
        className='absolute top-20 left-10 w-40 h-40 rounded-full bg-primary/5 animate-float'
        style={{ animationDelay: '0s' }}
      />
      <div
        className='absolute bottom-40 right-20 w-32 h-32 rounded-full bg-accent/5 animate-float'
        style={{ animationDelay: '1s' }}
      />

      <div className='relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-20'>
          <div className='inline-block mb-6'>
            <span className='inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20'>
              🚀 My Journey
            </span>
          </div>

          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance'>
            Experience &{' '}
            <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
              Education
            </span>
          </h2>

          <p className='text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed'>
            My journey through <span className='text-primary font-medium'>professional growth</span>{' '}
            and <span className='text-accent font-medium'>academic excellence</span>
          </p>
        </div>

        {/* Experience Header */}
        <div className='relative flex-row items-center justify-center mb-4 md:mb-12'>
          <div className='ml-4 md:ml-0 md:text-center'>
            <div className='flex items-center text-start md:text-center justify-start md:justify-center mb-2'>
              <Briefcase className='h-6 w-6 text-primary inline-block mr-4' />
              <h3 className='text-2xl md:text-3xl font-bold text-primary mb-2'>
                Professional Experience
              </h3>
            </div>
          </div>
          <div className='ml-4 md:ml-0 md:text-center w-full md:w-full'>
            <p className='text-sm text-muted-foreground italic'>Today</p>
          </div>
        </div>

        {/* Timeline */}
        <div className='relative'>
          {/* Enhanced Timeline line */}
          <div className='space-y-4 md:space-y-0 mb-16'>
            {/* Experience Header with Icon */}
            <div className='absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary to-accent rounded-full shadow-lg md:transform md:-translate-x-0' />

            {/* Experience Section */}

            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </div>

          {/* Education Section */}
          <div className='space-y-4 md:space-y-0 '>
            {/* Education Header with Icon */}
            <div className='relative flex items-start justify-start mb-12'>
              <div className='ml-12 md:ml-4 w-full md:w-1/2 md:flex items-center text-center'>
                <GraduationCap className='h-6 w-6 text-accent inline-block mr-4' />
                <h3 className='text-2xl md:text-3xl font-bold text-accent mb-2'>
                  Academic Background
                </h3>
              </div>
            </div>

            {education.map((edu, index) => (
              <EducationCard key={index} education={edu} index={index + experiences.length} />
            ))}
          </div>
        </div>
        {/* Button to download Resume */}
        <div className='text-center mt-12'>
          <Button variant='default' size='lg' className='flex items-center'>
            <Sparkles className='h-5 w-5 mr-2' />
            Download My Resume
          </Button>
        </div>
      </div>
    </section>
  )
}
