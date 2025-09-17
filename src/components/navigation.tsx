'use client'

import { useState, useEffect } from 'react'
import { Button } from '../components/ui/button'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  type NavItem =
    | { id: string; label: string; type: 'scroll' }
    | { id: string; label: string; type: 'link'; href: string }

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', type: 'scroll' },
    { id: 'about', label: 'About', type: 'scroll' },
    { id: 'projects', label: 'Projects', type: 'scroll' },
    { id: 'skills', label: 'Skills', type: 'scroll' },
    { id: 'experience', label: 'Experience', type: 'scroll' },
    // { id: 'blog', label: 'Blog', type: 'link', href: '/blog' },
    { id: 'contact', label: 'Contact', type: 'scroll' },
  ]

  const handleNavClick = (item: (typeof navItems)[0]) => {
    if (item.type === 'link' && item.href) {
      window.location.href = item.href
    } else {
      scrollToSection(item.id)
    }
  }

  return (
    <nav className='fixed top-4 left-4 right-4 z-50 max-w-6xl mx-auto'>
      <div className='glass rounded-2xl border border-primary/20 shadow-lg'>
        <div className='px-6 py-4'>
          <div className='flex justify-between items-center'>
            <div className='font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
              Sevastiyan
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-4'>
              <div className='flex items-center space-x-1 bg-muted/30 rounded-full p-1'>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <ThemeToggle />
            </div>

            {/* Mobile Navigation Button */}
            <div className='md:hidden flex items-center space-x-2'>
              <ThemeToggle />
              <Button
                variant='ghost'
                size='sm'
                className='p-2 rounded-xl hover:bg-primary/10'
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className='md:hidden mt-4 pt-4 border-t border-border/50'>
              <div className='grid grid-cols-2 gap-2'>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className={`px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
