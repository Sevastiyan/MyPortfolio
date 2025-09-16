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
      style={{ transitionDelay: `${index * 500}ms` }}
      className={`transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Card className='text-center p-4 h-full bg-card/60 backdrop-blur-sm hover:bg-card/90 transition-colors'>
        <CardContent className='pt-4'>
          <Icon className='h-8 w-8 text-primary mx-auto mb-3' />
          <h3 className='font-semibold mb-2'>{title}</h3>
          <p className='text-sm text-muted-foreground'>{description}</p>
        </CardContent>
      </Card>
    </div>
  )
}
