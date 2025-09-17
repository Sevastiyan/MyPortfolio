'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Calendar } from 'lucide-react'
import { SiGithub, SiLinkedin, SiX, SiGmail } from 'react-icons/si'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Here you would integrate with your preferred email service
    console.log('Form submitted:', formData)

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
    setIsSubmitting(false)

    // Show success message (you can add toast notification here)
    alert("Message sent successfully! I'll get back to you soon.")
  }

  const contactInfo = [
    {
      icon: SiGmail,
      label: 'Email',
      value: 'sevastiyan.tsv@gmail.com',
      href: 'mailto:sevastiyan.tsv@gmail.com',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+82 (010) 3767-4724',
      href: 'tel:+821037674724',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Seoul, South Korea',
      href: 'https://maps.google.com/?q=Seoul,South Korea',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Calendar,
      label: 'Schedule',
      value: 'Book a Call',
      href: 'https://calendly.com/sevastiyan',
      color: 'from-purple-500 to-purple-600',
    },
  ]

  const socialLinks = [
    {
      icon: SiGithub,
      label: 'GitHub',
      href: 'https://github.com/sevastiyan',
      color: 'hover:bg-gray-900 hover:text-white',
    },
    {
      icon: SiLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sevastiyan-tsvetkov/',
      color: 'hover:bg-blue-600 hover:text-white',
    },
    {
      icon: SiX,
      label: 'Twitter/X',
      href: 'https://twitter.com/yourusername',
      color: 'hover:bg-gray-900 hover:text-white',
    },
  ]

  return (
    <section id='contact' className='py-32 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background' />
      <div
        className='absolute top-20 left-20 w-40 h-40 rounded-full bg-accent/10 animate-float'
        style={{ animationDelay: '0s' }}
      />
      <div
        className='absolute top-40 right-20 w-40 h-40 rounded-full bg-primary/5 animate-float'
        style={{ animationDelay: '0s' }}
      />
      <div
        className='absolute bottom-40 right-10 w-32 h-32 rounded-full bg-primary/10 animate-float'
        style={{ animationDelay: '2s' }}
      />
      <div
        className='absolute bottom-1/2 left-50 w-32 h-32 rounded-full bg-accent/5 animate-float'
        style={{ animationDelay: '1s' }}
      />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-20'>
          <div className='inline-block mb-6'>
            <span className='inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20'>
              💬 Get In Touch
            </span>
          </div>

          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance'>
            Let's{' '}
            <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
              Connect
            </span>
          </h2>

          <p className='text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed'>
            Ready to bring your ideas to life? Let's discuss your{' '}
            <span className='text-primary font-medium'>next project</span>
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-16 items-start'>
          {/* Contact Form */}
          <div className='order-2 lg:order-1'>
            <ContactForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          </div>

          {/* Contact Information */}
          <div className='space-y-8 order-1 lg:order-2'>
            <ContactInfo contactInfo={contactInfo} />
            <SocialLinks socialLinks={socialLinks} />
            {/* <AvailabilityCard /> */}{' '}
            {/* Optional: Uncomment if you want to show availability */}
          </div>
        </div>

        {/* Footer */}
        <div className='mt-20 pt-12 border-t border-border/50 text-center'>
          <p className='text-muted-foreground text-lg'>
            © 2025 Sevastiyan. Built with ❤️ using Next.js & TypeScript
          </p>
          <p className='text-muted-foreground text-sm mt-2'>
            Designed and developed to showcase my passion for modern development
          </p>
        </div>
      </div>
    </section>
  )
}

interface ContactFormProps {
  formData: {
    name: string
    email: string
    subject: string
    message: string
  }
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleSubmit: (e: React.FormEvent) => void
  isSubmitting: boolean
}

function ContactForm({
  formData,
  handleInputChange,
  handleSubmit,
  isSubmitting,
}: ContactFormProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Card className='glass border-primary/20 hover:border-primary/30 transition-all duration-500 shadow-xl'>
        <CardHeader>
          <CardTitle className='text-2xl text-foreground'>Send Message</CardTitle>
          <p className='text-muted-foreground'>
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-foreground mb-2'>
                  Name *
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className='w-full px-4 py-3 glass border border-primary/20 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-300'
                  placeholder='Your name'
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-sm font-medium text-foreground mb-2'>
                  Email *
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className='w-full px-4 py-3 glass border border-primary/20 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-300'
                  placeholder='your.email@example.com'
                />
              </div>
            </div>

            <div>
              <label htmlFor='subject' className='block text-sm font-medium text-foreground mb-2'>
                Subject *
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleInputChange}
                required
                className='w-full px-4 py-3 glass border border-primary/20 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-300'
                placeholder='Project inquiry, collaboration, etc.'
              />
            </div>

            <div>
              <label htmlFor='message' className='block text-sm font-medium text-foreground mb-2'>
                Message *
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className='w-full px-4 py-3 glass border border-primary/20 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-300 resize-none'
                placeholder='Tell me about your project, goals, timeline, and any specific requirements...'
              />
            </div>

            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full rounded-xl bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 py-4 text-lg font-medium'
            >
              {isSubmitting ? (
                <>
                  <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2' />
                  Sending...
                </>
              ) : (
                <>
                  <Send className='h-5 w-5 mr-2' />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

interface ContactInfoProps {
  contactInfo: Array<{
    icon: any
    label: string
    value: string
    href: string
    color: string
  }>
}

function ContactInfo({ contactInfo }: ContactInfoProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: '200ms' }}
    >
      <Card className='glass border-primary/20 shadow-xl'>
        <CardHeader>
          <CardTitle className='text-xl text-foreground'>Contact Information</CardTitle>
        </CardHeader>

        <CardContent className='space-y-4'>
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className='flex items-center space-x-4 p-4 rounded-xl glass border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group'
            >
              <div className={`p-3 rounded-xl bg-gradient-to-br ${info.color} shadow-lg`}>
                <info.icon className='h-5 w-5 text-white' />
              </div>
              <div>
                <p className='font-medium text-foreground group-hover:text-primary transition-colors duration-300'>
                  {info.label}
                </p>
                <p className='text-muted-foreground text-sm'>{info.value}</p>
              </div>
            </a>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

interface SocialLinksProps {
  socialLinks: Array<{
    icon: any
    label: string
    href: string
    color: string
  }>
}

function SocialLinks({ socialLinks }: SocialLinksProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: '400ms' }}
    >
      <Card className='glass border-primary/20 shadow-xl'>
        <CardHeader>
          <CardTitle className='text-xl text-foreground'>Follow Me</CardTitle>
        </CardHeader>

        <CardContent>
          <div className='flex space-x-4'>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                className={`p-4 rounded-xl glass border border-border/50 hover:border-primary/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${social.color} group`}
                aria-label={social.label}
              >
                <social.icon className='h-6 w-6 text-foreground group-hover:text-white transition-colors duration-300' />
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function AvailabilityCard() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: '600ms' }}
    >
      <Card className='glass border-primary/20 shadow-xl overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10' />

        <CardContent className='relative p-6'>
          <div className='flex items-center space-x-3 mb-4'>
            <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
            <span className='font-medium text-foreground'>Currently Available</span>
          </div>

          <p className='text-muted-foreground text-sm leading-relaxed'>
            I'm currently accepting new projects and collaborations. Looking for freelance
            opportunities, consulting, or full-time positions.
          </p>

          <div className='mt-4 flex flex-wrap gap-2'>
            <span className='px-3 py-1 bg-primary/10 text-primary text-xs rounded-full'>
              Full-time
            </span>
            <span className='px-3 py-1 bg-accent/10 text-accent text-xs rounded-full'>
              Freelance
            </span>
            <span className='px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full'>
              Consulting
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
