import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: 'default' | 'outline' | 'ghost'
  /** Size of the button */
  size?: 'sm' | 'md' | 'lg'
  /** Section ID to scroll to when clicked */
  scrollTo?: string
  /** Custom scroll offset from the top */
  scrollOffset?: number
  /** Animation type for scroll */
  scrollAnimation?: 'smooth' | 'instant' | 'bounce'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'md',
  scrollTo,
  scrollOffset = 80,
  scrollAnimation = 'smooth',
  className,

  children,
  onClick,
  ...props
}) => {
  const handleScrollClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (scrollTo) {
      e.preventDefault()

      const element = document.getElementById(scrollTo)
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - scrollOffset

        // Add a small bounce animation effect
        if (scrollAnimation === 'bounce') {
          // Create a custom bounce scroll effect
          const startPosition = window.pageYOffset
          const distance = offsetPosition - startPosition
          const duration = 1000
          let start: number | null = null

          function bounceAnimation(currentTime: number) {
            if (start === null) start = currentTime
            const timeElapsed = currentTime - start
            const progress = Math.min(timeElapsed / duration, 1)

            // Easing function for bounce effect
            const easeOutBounce = (t: number): number => {
              if (t < 1 / 2.75) {
                return 7.5625 * t * t
              } else if (t < 2 / 2.75) {
                return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
              } else if (t < 2.5 / 2.75) {
                return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
              } else {
                return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375
              }
            }

            const run = easeOutBounce(progress)
            window.scrollTo(0, startPosition + distance * run)

            if (progress < 1) {
              requestAnimationFrame(bounceAnimation)
            }
          }

          requestAnimationFrame(bounceAnimation)
        } else {
          // Use native smooth scrolling or instant
          window.scrollTo({
            top: offsetPosition,
            behavior: scrollAnimation === 'smooth' ? 'smooth' : 'auto',
          })
        }
      }
    }

    // Call the original onClick handler if provided
    if (onClick) {
      onClick(e)
    }
  }

  const variantClasses: Record<string, string> = {
    default:
      'bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300',
    outline:
      'border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300 backdrop-blur-sm',
    ghost:
      'bg-transparent text-muted-foreground hover:bg-primary/10 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300',
  }

  const sizeClasses: Record<string, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  }

  const combinedClassName = [
    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95',
    variantClasses[variant],
    sizeClasses[size],
    scrollTo ? 'cursor-pointer' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={combinedClassName} onClick={handleScrollClick} {...props}>
      {children}
    </button>
  )
}

export default Button
