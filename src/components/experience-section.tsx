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
    <section id='experience' className='py-20'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-4 text-balance'>
            Professional Experience
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto text-pretty'>
            My journey through the world of software development
          </p>
        </div>

        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary/50 to-transparent md:transform md:-translate-x-0.5' />

          <div className='space-y-0'>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
