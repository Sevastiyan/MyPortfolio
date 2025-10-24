'use client'

import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'
import Link from 'next/link'
import { getFeaturedPosts } from '@/data/blog-data'

export function BlogPreviewSection() {
  const featuredPosts = getFeaturedPosts().slice(0, 3)

  return (
    <section id='blog-preview' className='py-32 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-b from-muted/10 via-background to-muted/10' />
      <div
        className='absolute top-20 right-20 w-40 h-40 rounded-full bg-accent/5 animate-float'
        style={{ animationDelay: '0s' }}
      />
      <div
        className='absolute bottom-40 left-10 w-32 h-32 rounded-full bg-primary/5 animate-float'
        style={{ animationDelay: '2s' }}
      />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-20'>
          <div className='inline-block mb-6'>
            <span className='inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20'>
              ✍️ Latest Thoughts
            </span>
          </div>

          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance'>
            Latest{' '}
            <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
              Blog Posts
            </span>
          </h2>

          <p className='text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed'>
            Technical insights on{' '}
            <span className='text-primary font-medium'>AI, IoT, and scalable systems</span>
          </p>
        </div>

        <div className='grid lg:grid-cols-3 gap-8 mb-16'>
          {featuredPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} index={index} />
          ))}
        </div>

        {/* Call to action */}
        <div className='text-center'>
          <Link href='/blog'>
            <Button
              size='lg'
              className='rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-4'
            >
              View All Posts
              <ArrowRight className='h-5 w-5 ml-2' />
            </Button>
          </Link>
        </div>
      </div>
    </section>
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
    tags?: string[]
    status?: 'published' | 'draft' | 'coming-soon'
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
      style={{ transitionDelay: `${index * 200}ms` }}
      className={`transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Link href={post.status === 'published' ? `/blog/${post.slug}` : '#'}>
        <Card className='group h-full glass border-primary/20 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer'>
          {/* Background gradient on hover */}
          <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

          <CardHeader className='relative pb-4'>
            <div className='flex items-center justify-between mb-4'>
              <Badge
                variant='secondary'
                className='bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300'
              >
                {post.category}
              </Badge>
              <div className='flex gap-2'>
                {post.featured && (
                  <Badge className='bg-gradient-to-r from-accent to-secondary text-white'>
                    Featured
                  </Badge>
                )}
                {post.status === 'coming-soon' && (
                  <Badge variant='outline' className='border-accent/50 text-accent'>
                    Coming Soon
                  </Badge>
                )}
              </div>
            </div>

            <CardTitle className='text-xl leading-tight group-hover:text-primary transition-colors duration-300'>
              {post.title}
            </CardTitle>
          </CardHeader>

          <CardContent className='relative space-y-6'>
            <p className='text-muted-foreground leading-relaxed line-clamp-3 group-hover:text-foreground/80 transition-colors duration-300'>
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

            <div className='flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2'>
              Read More
              <ArrowRight className='h-4 w-4 ml-1' />
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}
