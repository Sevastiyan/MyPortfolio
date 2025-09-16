import React from 'react'
import Badge from './ui/badge'
import { Card } from './ui/card' // assumes a Card component exists

export interface Certification {
  title: string
  issuer: string
  date: string
  credentialId?: string
  url?: string
  topics?: string[]
}

const certifications: Certification[] = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: 'Aug 2024',
    credentialId: 'ABC123456',
    url: 'https://www.credly.com/',
    topics: ['AWS', 'Architecture', 'Cloud'],
  },
  {
    title: 'Google Professional Cloud Developer',
    issuer: 'Google Cloud',
    date: 'May 2024',
    url: 'https://google.accredible.com/',
    topics: ['GCP', 'Kubernetes', 'CI/CD'],
  },
  {
    title: 'Scrum Master (PSM I)',
    issuer: 'Scrum.org',
    date: 'Jan 2024',
    topics: ['Agile', 'Scrum'],
  },
]

const CertificationsSection: React.FC = () => {
  return (
    <section id='certifications' className='py-20 relative'>
      {/* Soft gradient backdrop */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_60%)]'
      />
      <div className='mx-auto max-w-6xl px-6'>
        <div className='mb-10 flex flex-col gap-3'>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
            Certifications
          </h2>
          <p className='text-muted-foreground max-w-2xl'>
            Verified credentials that reinforce technical breadth and delivery practices.
          </p>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {certifications.map((c, i) => (
            <Card
              key={c.title}
              className='group relative overflow-hidden border border-border/60 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/50 rounded-xl p-5 flex flex-col gap-5 hover:border-primary/50 transition-colors'
            >
              {/* Accent aura */}
              <div className='pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute -inset-16 bg-[conic-gradient(from_140deg,theme(colors.primary/15),transparent_60%)] blur-2xl' />
              </div>

              {/* Subtle left bar on hover */}
              <div className='absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />

              <div className='flex items-start justify-between gap-3'>
                <div className='space-y-1.5'>
                  <h3 className='font-semibold leading-snug text-base md:text-[1.04rem]'>
                    {c.url ? (
                      <a
                        href={c.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-1 decoration-primary/40 hover:underline underline-offset-4'
                      >
                        {c.title}
                        <span className='text-[10px] px-1 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-medium'>
                          View
                        </span>
                      </a>
                    ) : (
                      c.title
                    )}
                  </h3>
                  <div className='text-xs text-muted-foreground/90 flex flex-wrap items-center gap-x-2 gap-y-1'>
                    <span className='font-medium text-foreground/90'>{c.issuer}</span>
                    <span className='text-border'>•</span>
                    <span>{c.date}</span>
                    {c.credentialId && (
                      <>
                        <span className='text-border'>•</span>
                        <span className='font-mono text-[11px] bg-muted/40 px-1.5 py-0.5 rounded border border-border/60'>
                          {c.credentialId}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                {/* Floating index badge */}
                <div className='shrink-0 text-[11px] font-semibold px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20'>
                  {(i + 1).toString().padStart(2, '0')}
                </div>
              </div>

              {c.topics && c.topics.length > 0 && (
                <div className='flex flex-wrap gap-2'>
                  {c.topics.map((t) => (
                    <Badge
                      key={t}
                      variant='secondary'
                      className='!px-3 !py-0.5 text-xs font-medium bg-secondary/20 hover:bg-secondary/30 border-secondary/30'
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Hover underline animation */}
              <div className='absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50 group-hover:via-primary/60 group-hover:opacity-100 transition-all' />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection
