'use client'

import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface HighlightCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export function HighlightCard({ icon: Icon, title, description, index }: HighlightCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 200}ms` }}
      className={`transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Card className='group relative text-center p-6 h-full glass hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-primary/10'>
        {/* Background gradient that appears on hover */}
        <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

        <CardContent className='relative pt-4 space-y-4'>
          <div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500 group-hover:scale-110'>
            <Icon className='h-8 w-8 text-primary group-hover:text-accent transition-colors duration-500' />
          </div>

          <h3 className='text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300'>
            {title}
          </h3>

          <p className='text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300'>
            {description}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
