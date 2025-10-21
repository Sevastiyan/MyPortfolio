'use client'

import { useState, useRef } from 'react'
import Button from './ui/button'
import { TimelineItem } from './ui/timeline-item'
import { BackgroundElements } from './ui/background-elements'
import { Briefcase, GraduationCap, Download, Sparkles } from 'lucide-react'
import { useDownloadCV } from '@/hooks/useDownloadCV'
import { timelineData } from '@/data/timeline-data'

export function InteractiveTimeline() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const { downloadCV, isLoading, error } = useDownloadCV()

  const toggleItem = (id: string) => {
    setSelectedItem(selectedItem === id ? null : id)
  }

  const getItemIcon = (type: 'experience' | 'education') => {
    return type === 'experience' ? Briefcase : GraduationCap
  }

  return (
    <section id='timeline' className='py-32 relative overflow-hidden'>
      {/* Background Elements */}
      <BackgroundElements variant='timeline' />

      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-20'>
          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance'>
            My{' '}
            <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
              Timeline
            </span>
          </h2>

          <p className='text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed'>
            Follow my journey from{' '}
            <span className='text-primary font-medium'>student to senior engineer</span>
          </p>
        </div>

        {/* Interactive Timeline */}
        <div ref={timelineRef} className='relative'>
          {/* Timeline Line */}
          <div className='absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary to-accent rounded-full shadow-lg md:transform md:-translate-x-0' />

          {/* Timeline Items */}
          <div className='space-y-12'>
            {timelineData.map((item, index) => {
              const Icon = getItemIcon(item.type)
              const isLeft = index % 2 === 0
              const isExpanded = selectedItem === item.id

              return (
                <TimelineItem
                  key={item.id}
                  item={item}
                  isLeft={isLeft}
                  isExpanded={isExpanded}
                  onToggle={() => toggleItem(item.id)}
                  Icon={Icon}
                  index={index}
                />
              )
            })}
          </div>
        </div>

        {/* Download CV Button */}
        <div className='text-center mt-20'>
          <Button
            variant='default'
            size='lg'
            className='flex items-center mx-auto'
            onClick={downloadCV}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Sparkles className='h-5 w-5 mr-2 animate-spin' />
                Downloading...
              </>
            ) : (
              <>
                <Download className='h-5 w-5 mr-2' />
                Download Full Resume
              </>
            )}
          </Button>
          {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
        </div>
      </div>
    </section>
  )
}
