import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: 'default' | 'outline' | 'ghost'
  /** Size of the button */
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const variantClasses: Record<string, string> = {
    default:
      'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500',
    outline:
      'border border-blue-600 text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500',
    ghost:
      'bg-transparent text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500',
  }
  const sizeClasses: Record<string, string> = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  }

  const combinedClassName = [
    'inline-flex items-center justify-center rounded-md font-medium transition-colors',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  )
}

export default Button
