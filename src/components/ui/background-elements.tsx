interface BackgroundElementsProps {
  variant?: 'default' | 'timeline'
}

export function BackgroundElements({ variant = 'default' }: BackgroundElementsProps) {
  if (variant === 'timeline') {
    return (
      <>
        {/* Timeline Background Elements */}
        <div className='absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background' />
        <div
          className='absolute top-20 left-10 w-40 h-40 rounded-full bg-primary/5 animate-float'
          style={{ animationDelay: '0s' }}
        />
        <div
          className='absolute bottom-1/4 right-1/8 w-32 h-32 rounded-full bg-accent/5 animate-float'
          style={{ animationDelay: '2s' }}
        />
        <div
          className='absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-secondary/10 animate-float'
          style={{ animationDelay: '1s' }}
        />
        <div
          className='absolute bottom-1/2 left-1/5 w-24 h-24 rounded-full bg-primary/10 animate-float'
          style={{ animationDelay: '3s' }}
        />
        <div
          className='absolute top-10 right-1/3 w-20 h-20 rounded-full bg-accent/10 animate-float'
          style={{ animationDelay: '4s' }}
        />
        <div
          className='absolute bottom-20 left-1/3 w-36 h-36 rounded-full bg-primary/8 animate-float'
          style={{ animationDelay: '1.5s' }}
        />
      </>
    )
  }

  return (
    <>
      {/* Default Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background' />
      <div
        className='absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 animate-float'
        style={{ animationDelay: '0s' }}
      />
      <div
        className='absolute bottom-1/4 right-1/8 w-24 h-24 rounded-full bg-accent/5 animate-float'
        style={{ animationDelay: '2s' }}
      />
      <div
        className='absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-secondary/10 animate-float'
        style={{ animationDelay: '1s' }}
      />
    </>
  )
}
