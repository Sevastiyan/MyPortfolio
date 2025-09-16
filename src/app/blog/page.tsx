import { BlogPage } from '@/components/blog-page'
import { Navigation } from '@/components/navigation'

export default function Blog() {
  return (
    <main className='min-h-screen bg-background'>
      <Navigation />
      <div className='pt-20'>
        <BlogPage />
      </div>
    </main>
  )
}
