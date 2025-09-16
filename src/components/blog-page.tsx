'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Calendar, Clock, ArrowRight, Search, Filter } from 'lucide-react'
import Link from 'next/link'

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const blogPosts = [
    {
      title: 'Building Scalable React Applications: Lessons from Production',
      excerpt:
        "Discover the architectural patterns and best practices I've learned while building React applications that serve thousands of users. From component architecture to state management, here's what works in the real world.",
      date: '2024-09-10',
      readTime: '8 min read',
      category: 'React',
      slug: 'building-scalable-react-applications',
      featured: true,
      tags: ['React', 'Architecture', 'Best Practices', 'Performance'],
    },
    {
      title: 'The Journey from Junior to Senior Developer',
      excerpt:
        'Reflecting on my growth as a developer and the key milestones that shaped my career in software development. What I wish I knew when I started coding.',
      date: '2024-09-05',
      readTime: '6 min read',
      category: 'Career',
      slug: 'junior-to-senior-developer-journey',
      featured: true,
      tags: ['Career', 'Growth', 'Learning', 'Mentorship'],
    },
    {
      title: 'Modern CSS Techniques Every Developer Should Know',
      excerpt:
        'Exploring CSS Grid, Flexbox, and modern layout techniques that have revolutionized web design and development. Practical examples included.',
      date: '2024-08-28',
      readTime: '10 min read',
      category: 'CSS',
      slug: 'modern-css-techniques',
      featured: true,
      tags: ['CSS', 'Web Design', 'Layout', 'Modern Web'],
    },
    {
      title: 'Understanding TypeScript: From Beginner to Advanced',
      excerpt:
        'A comprehensive guide to TypeScript that covers everything from basic types to advanced features like conditional types and mapped types.',
      date: '2024-08-20',
      readTime: '12 min read',
      category: 'TypeScript',
      slug: 'understanding-typescript-guide',
      featured: false,
      tags: ['TypeScript', 'JavaScript', 'Type Safety', 'Development'],
    },
    {
      title: 'Optimizing Web Performance: A Complete Guide',
      excerpt:
        'Learn how to make your web applications lightning fast. Core Web Vitals, lazy loading, code splitting, and more performance optimization techniques.',
      date: '2024-08-15',
      readTime: '15 min read',
      category: 'Performance',
      slug: 'optimizing-web-performance-guide',
      featured: false,
      tags: ['Performance', 'Optimization', 'Core Web Vitals', 'Speed'],
    },
    {
      title: 'Building RESTful APIs with Node.js and Express',
      excerpt:
        'Step-by-step guide to creating robust, scalable APIs. Authentication, validation, error handling, and best practices for production-ready backends.',
      date: '2024-08-10',
      readTime: '11 min read',
      category: 'Backend',
      slug: 'building-restful-apis-nodejs',
      featured: false,
      tags: ['Node.js', 'Express', 'API', 'Backend', 'REST'],
    },
    {
      title: 'State Management in React: Redux vs Context vs Zustand',
      excerpt:
        'Comparing popular state management solutions for React applications. When to use each one and practical implementation examples.',
      date: '2024-08-05',
      readTime: '9 min read',
      category: 'React',
      slug: 'react-state-management-comparison',
      featured: false,
      tags: ['React', 'State Management', 'Redux', 'Context', 'Zustand'],
    },
  ]

  const categories = ['All', ...Array.from(new Set(blogPosts.map((post) => post.category)))]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className='min-h-screen relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background' />
      <div
        className='absolute top-20 left-20 w-40 h-40 rounded-full bg-primary/5 animate-float'
        style={{ animationDelay: '0s' }}
      />
      <div
        className='absolute bottom-40 right-10 w-32 h-32 rounded-full bg-accent/5 animate-float'
        style={{ animationDelay: '2s' }}
      />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        {/* Hero Section */}
        <div className='text-center mb-20'>
          <div className='inline-block mb-6'>
            <span className='inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20'>
              📚 Blog
            </span>
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance'>
            Development{' '}
            <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
              Journey
            </span>
          </h1>

          <p className='text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed'>
            Thoughts, tutorials, and insights from my{' '}
            <span className='text-primary font-medium'>software development journey</span>
          </p>
        </div>

        {/* Search and Filter */}
        <div className='flex flex-col sm:flex-row gap-4 mb-16 max-w-4xl mx-auto'>
          <div className='relative flex-1'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground' />
            <input
              type='text'
              placeholder='Search posts...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full pl-10 pr-4 py-3 glass border border-primary/20 rounded-full text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-300'
            />
          </div>

          <div className='flex flex-wrap gap-2'>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                    : 'glass border-primary/30 hover:bg-primary/10'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && selectedCategory === 'All' && (
          <div className='mb-20'>
            <h2 className='text-3xl font-bold text-center mb-12 text-foreground'>Featured Posts</h2>
            <div className='grid lg:grid-cols-3 gap-8'>
              {featuredPosts.map((post, index) => (
                <FeaturedBlogCard key={index} post={post} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div className='space-y-8'>
          {selectedCategory !== 'All' && (
            <h2 className='text-3xl font-bold text-center text-foreground'>
              {selectedCategory} Posts
            </h2>
          )}

          {filteredPosts.length === 0 ? (
            <div className='text-center py-20'>
              <div className='text-6xl mb-4 opacity-20'>📝</div>
              <p className='text-xl text-muted-foreground'>
                No posts found matching your criteria.
              </p>
            </div>
          ) : (
            <div className='grid md:grid-cols-2 gap-8'>
              {(selectedCategory === 'All' ? regularPosts : filteredPosts).map((post, index) => (
                <BlogPostCard key={index} post={post} index={index} />
              ))}
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className='mt-20'>
          <div className='glass rounded-3xl p-12 border border-primary/20 text-center'>
            <h3 className='text-3xl font-bold mb-4 text-foreground'>Stay Updated</h3>
            <p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
              Get notified when I publish new articles about web development, career insights, and
              tech tutorials.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-3 glass border border-primary/20 rounded-full text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-300'
              />
              <Button className='rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8'>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface BlogPostCardProps {
  post: {
    title: string
    excerpt: string
    date: string
    readTime: string
    category: string
    slug: string
    featured?: boolean
    tags: string[]
  }
  index: number
}

function BlogPostCard({ post, index }: BlogPostCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 150}ms` }}
      className={`transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className='group h-full glass border-primary/20 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer'>
          <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

          <CardHeader className='relative pb-4'>
            <div className='flex items-center justify-between mb-4'>
              <Badge
                variant='secondary'
                className='bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300'
              >
                {post.category}
              </Badge>
              {post.featured && (
                <Badge className='bg-gradient-to-r from-accent to-secondary text-white'>
                  Featured
                </Badge>
              )}
            </div>

            <CardTitle className='text-xl leading-tight group-hover:text-primary transition-colors duration-300'>
              {post.title}
            </CardTitle>
          </CardHeader>

          <CardContent className='relative space-y-6'>
            <p className='text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300'>
              {post.excerpt}
            </p>

            <div className='flex flex-wrap gap-2'>
              {post.tags.slice(0, 3).map((tag, tagIndex) => (
                <Badge
                  key={tagIndex}
                  variant='outline'
                  className='text-xs bg-muted/30 border-muted hover:bg-primary/10 hover:border-primary/30 transition-colors duration-300'
                >
                  {tag}
                </Badge>
              ))}
              {post.tags.length > 3 && (
                <Badge variant='outline' className='text-xs bg-muted/30 border-muted'>
                  +{post.tags.length - 3}
                </Badge>
              )}
            </div>

            <div className='flex items-center justify-between text-sm text-muted-foreground pt-2'>
              <div className='flex items-center space-x-4'>
                <div className='flex items-center space-x-1'>
                  <Calendar className='h-4 w-4' />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className='flex items-center space-x-1'>
                  <Clock className='h-4 w-4' />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <div className='flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2 pt-2'>
              Read More
              <ArrowRight className='h-4 w-4 ml-1' />
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}

function FeaturedBlogCard({ post, index }: BlogPostCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 200}ms` }}
      className={`transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className='group glass border-primary/30 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer overflow-hidden'>
          {/* Featured badge */}
          <div className='absolute top-4 left-4 z-10'>
            <Badge className='bg-gradient-to-r from-primary to-accent text-white shadow-lg'>
              ⭐ Featured
            </Badge>
          </div>

          {/* Header image placeholder */}
          <div className='relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden'>
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='text-6xl opacity-20'>📝</div>
            </div>

            <div className='absolute top-4 right-4'>
              <Badge variant='secondary' className='bg-white/90 text-foreground backdrop-blur-sm'>
                {post.category}
              </Badge>
            </div>
          </div>

          <CardHeader>
            <CardTitle className='text-xl leading-tight group-hover:text-primary transition-colors duration-300'>
              {post.title}
            </CardTitle>
          </CardHeader>

          <CardContent className='space-y-4'>
            <p className='text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300'>
              {post.excerpt}
            </p>

            <div className='flex items-center justify-between text-sm text-muted-foreground'>
              <div className='flex items-center space-x-4'>
                <div className='flex items-center space-x-1'>
                  <Calendar className='h-4 w-4' />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className='flex items-center space-x-1'>
                  <Clock className='h-4 w-4' />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <div className='flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2 pt-2'>
              Read Article
              <ArrowRight className='h-4 w-4 ml-1' />
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}
