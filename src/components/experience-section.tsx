import { ExperienceCard } from './ui/experience-card'

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
      location: 'Singapore, SG',
      period: '2021 - 2025',
      description:
        'Built and maintained company websites and web applications. Gained experience in full-stack development and agile methodologies.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    },
    {
      title: 'Data Analyst',
      company: 'Flexosense Pte. Ltd.',
      location: 'Singapore, SG',
      period: '2019 - 2021',
      description:
        'Built and maintained company websites and web applications. Gained experience in full-stack development and agile methodologies.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
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
        style={{ animationDelay: '2s' }}
      />

      <div className='relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-20'>
          <div className='inline-block mb-6'>
            <span className='inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20'>
              🚀 Career Journey
            </span>
          </div>

          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance'>
            Professional{' '}
            <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
              Experience
            </span>
          </h2>

          <p className='text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed'>
            My journey through the world of{' '}
            <span className='text-primary font-medium'>software development</span>
          </p>
        </div>

        <div className='relative'>
          {/* Enhanced Timeline line */}
          <div className='absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary to-accent/20 md:transform md:-translate-x-0.5 rounded-full shadow-lg' />

          <div className='space-y-8'>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
