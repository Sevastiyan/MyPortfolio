import React from 'react'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Visual style variant */
  variant?: 'default' | 'secondary' | 'outline'
  children: React.ReactNode
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  className,
  children,
  ...props
}) => {
  const variantClasses: Record<string, string> = {
    default: 'bg-primary/10 text-primary text-xs md:text-sm border border-transparent',
    secondary: 'bg-secondary/10 text-secondary text-xs md:text-sm border border-transparent',
    outline: 'bg-transparent text-foreground text-xs md:text-sm border border-border',
  }

  const combinedClassName = [
    'inline-flex items-center px-5 py-0.5 rounded-md font-semibold transition-colors',
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={combinedClassName} {...props}>
      {children}
    </span>
  )
}

export default Badge
