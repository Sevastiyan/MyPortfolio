export interface BlogPost {
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  slug: string
  featured?: boolean
  tags: string[]
  status: 'published' | 'draft' | 'coming-soon'
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Building Real-time Posture Detection with WebRTC and MediaPipe',
    excerpt:
      'How we built an AI-powered posture analytics system that runs on Samsung Smart TVs with sub-100ms latency using WebRTC and edge computing.',
    date: '2024-09-15',
    readTime: '8 min read',
    category: 'AI & ML',
    slug: 'realtime-posture-detection-webrtc',
    featured: true,
    tags: ['WebRTC', 'MediaPipe', 'Edge Computing', 'Computer Vision'],
    status: 'published',
  },
  {
    title: 'Scaling IoT Backends: Lessons from 50K Connected Devices',
    excerpt:
      'Deep dive into architecting a high-throughput IoT platform that processes biosignal data in real-time with AWS Lambda, DynamoDB, and Kinesis.',
    date: '2024-08-22',
    readTime: '12 min read',
    category: 'Backend',
    slug: 'scaling-iot-backends',
    featured: true,
    tags: ['AWS', 'IoT', 'Serverless', 'Node.js'],
    status: 'published',
  },
]

// Helper to get only published blog posts
export const getPublishedPosts = () => blogPosts.filter((post) => post.status === 'published')

// Helper to get featured blog posts
export const getFeaturedPosts = () => blogPosts.filter((post) => post.featured)

// Helper to get blog posts by category
export const getPostsByCategory = (category: string) =>
  blogPosts.filter((post) => post.category === category)
