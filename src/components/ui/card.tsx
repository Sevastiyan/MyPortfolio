import React from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Card: React.FC<CardProps> = ({ children, className, ...props }) => (
  <div
    className={['border border-border bg-card rounded-lg overflow-hidden', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    {children}
  </div>
)

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export const CardHeader: React.FC<CardHeaderProps> = ({ children, className, ...props }) => (
  <div className={['p-6', className].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
)

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
export const CardTitle: React.FC<CardTitleProps> = ({ children, className, ...props }) => (
  <h3
    className={['text-xl font-semibold tracking-tight', className].filter(Boolean).join(' ')}
    {...props}
  >
    {children}
  </h3>
)

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  className,
  ...props
}) => (
  <p className={['text-sm text-muted-foreground', className].filter(Boolean).join(' ')} {...props}>
    {children}
  </p>
)

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export const CardContent: React.FC<CardContentProps> = ({ children, className, ...props }) => (
  <div className={['p-6 pt-0', className].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
)
