'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant='ghost' size='sm' className='w-9 h-9 rounded-full'>
        <div className='h-[1.2rem] w-[1.2rem] animate-pulse bg-muted rounded' />
        <span className='sr-only'>Toggle theme</span>
      </Button>
    )
  }

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className='h-[1.2rem] w-[1.2rem] text-amber-500' />
      case 'dark':
        return <Moon className='h-[1.2rem] w-[1.2rem] text-blue-400' />
      default:
        return <Sun className='h-[1.2rem] w-[1.2rem] text-amber-500' />
    }
  }

  const getTooltip = () => {
    switch (theme) {
      case 'light':
        return 'Switch to dark mode'
      case 'dark':
        return 'Switch to light mode'
      default:
        return 'Switch to dark mode'
    }
  }

  return (
    <Button
      variant='ghost'
      size='sm'
      onClick={cycleTheme}
      className='w-9 h-9 rounded-full glass border border-primary/20 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 hover:scale-110'
      title={getTooltip()}
    >
      <div className='transition-all duration-300 ease-in-out'>{getIcon()}</div>
      <span className='sr-only'>{getTooltip()}</span>
    </Button>
  )
}

export function ThemeToggleExpanded() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className='flex items-center space-x-2 animate-pulse'>
        <div className='h-4 w-4 bg-muted rounded' />
        <div className='h-4 w-16 bg-muted rounded' />
      </div>
    )
  }

  const themes = [
    { value: 'light', icon: Sun, label: 'Light', color: 'text-amber-500' },
    { value: 'dark', icon: Moon, label: 'Dark', color: 'text-blue-400' },
  ]

  return (
    <div className='flex items-center space-x-1 bg-muted/30 rounded-full p-1'>
      {themes.map(({ value, icon: Icon, label, color }) => (
        <Button
          key={value}
          variant={theme === value ? 'default' : 'ghost'}
          size='sm'
          onClick={() => setTheme(value)}
          className={`h-8 px-3 rounded-full transition-all duration-300 ${
            theme === value
              ? 'bg-primary text-primary-foreground shadow-lg'
              : 'hover:bg-primary/10 hover:text-primary'
          }`}
        >
          <Icon className={`h-4 w-4 mr-2 ${theme === value ? 'text-current' : color}`} />
          <span className='text-sm font-medium'>{label}</span>
        </Button>
      ))}
    </div>
  )
}
