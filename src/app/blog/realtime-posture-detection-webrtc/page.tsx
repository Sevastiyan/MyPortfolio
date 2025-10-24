import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { blogPosts } from '@/data/blog-data'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Building Real-time Posture Detection with WebRTC and MediaPipe',
  description:
    'How we built an AI-powered posture analytics system that runs on Samsung Smart TVs with sub-100ms latency using WebRTC and edge computing.',
}

export default function PostureDetectionPost() {
  const post = blogPosts.find((p) => p.slug === 'realtime-posture-detection-webrtc')!

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <main className='min-h-screen bg-background'>
      <Navigation />
      <div className='pt-32 pb-20'>
        <article className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Link
            href='/blog'
            className='inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group'
          >
            <ArrowLeft className='h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1' />
            Back to all posts
          </Link>

          <header className='mb-12'>
            <div className='flex flex-wrap gap-3 mb-6'>
              <Badge variant='secondary' className='bg-primary/10 text-primary'>
                {post.category}
              </Badge>
              {post.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant='outline' className='bg-muted/30'>
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight'>
              {post.title}
            </h1>

            <div className='flex items-center gap-6 text-muted-foreground'>
              <div className='flex items-center gap-2'>
                <Calendar className='h-4 w-4' />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <div className='flex items-center gap-2'>
                <Clock className='h-4 w-4' />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          <div className='mdx-content'>
            <p>
              When we set out to build a posture detection system for Samsung Smart TVs, we faced a
              unique challenge: how do you run complex AI models on consumer devices with limited
              compute while maintaining real-time performance?
            </p>

            <h2>The Challenge</h2>
            <p>
              Traditional cloud-based approaches introduce latency that makes real-time feedback
              impossible. Users need immediate visual cues when their posture degrades, not feedback
              that arrives 500ms later after a round-trip to the cloud.
            </p>

            <p>Our requirements were clear:</p>
            <ul>
              <li>
                <strong>Sub-100ms latency</strong> for posture feedback
              </li>
              <li>
                Run on <strong>Tizen OS</strong> (Samsung's Smart TV platform)
              </li>
              <li>
                Support <strong>30fps video processing</strong>
              </li>
              <li>Work with standard webcams</li>
            </ul>

            <h2>Architecture Overview</h2>
            <p>
              We built a hybrid edge-cloud architecture that processes video locally while
              offloading heavy computation to optimized inference pipelines:
            </p>

            <pre>
              <code>{`// Simplified architecture
const PostureDetectionPipeline = {
  capture: WebRTC,           // Video capture
  detection: MediaPipe,      // Pose landmark detection
  analysis: EdgeInference,   // Posture classification
  feedback: RealTimeUI       // Visual feedback
}`}</code>
            </pre>

            <h3>WebRTC for Low-Latency Video</h3>
            <p>
              WebRTC gave us direct access to camera streams without the overhead of traditional
              video APIs. Here's our capture setup:
            </p>

            <pre>
              <code>{`async function initializeVideoStream() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: {
      width: { ideal: 1280 },
      height: { ideal: 720 },
      frameRate: { ideal: 30 }
    }
  })

  return stream
}`}</code>
            </pre>

            <h3>MediaPipe for Pose Detection</h3>
            <p>
              Google's MediaPipe provided the perfect balance of accuracy and performance. Running
              on-device, it detects 33 body landmarks at 30fps:
            </p>

            <pre>
              <code>{`const pose = new Pose({
  locateFile: (file) => {
    return \`https://cdn.jsdelivr.net/npm/@mediapipe/pose/\${file}\`
  }
})

pose.setOptions({
  modelComplexity: 1,      // Balance speed vs accuracy
  smoothLandmarks: true,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
})`}</code>
            </pre>

            <h2>Optimization Strategies</h2>

            <h3>1. Frame Skipping</h3>
            <p>
              We don't need to analyze every frame. Processing every 3rd frame reduced CPU usage by
              60% with negligible accuracy impact:
            </p>

            <pre>
              <code>{`let frameCount = 0

function processFrame(videoFrame: ImageData) {
  if (frameCount++ % 3 !== 0) return

  // Process this frame
  analyzePosture(videoFrame)
}`}</code>
            </pre>

            <h3>2. Web Workers for Parallel Processing</h3>
            <p>Moving inference to a Web Worker kept the UI thread responsive:</p>

            <pre>
              <code>{`// main thread
const worker = new Worker('/posture-worker.js')

worker.postMessage({ landmarks, timestamp })

worker.onmessage = (e) => {
  updatePostureFeedback(e.data.posture)
}`}</code>
            </pre>

            <h2>Results</h2>
            <p>Our final system achieves:</p>
            <ul>
              <li>
                <strong>65ms average latency</strong> (frame capture to feedback)
              </li>
              <li>
                <strong>30fps sustained</strong> on mid-range Smart TVs
              </li>
              <li>
                <strong>92% posture classification accuracy</strong>
              </li>
              <li>
                <strong>Less than 15% CPU usage</strong> on Tizen OS
              </li>
            </ul>

            <h2>Key Takeaways</h2>
            <ol>
              <li>
                <strong>Edge processing is essential</strong> for real-time applications
              </li>
              <li>
                <strong>MediaPipe provides production-ready pose detection</strong> without custom
                training
              </li>
              <li>
                <strong>WebRTC eliminates unnecessary abstraction layers</strong> for video
              </li>
              <li>
                <strong>Smart optimization</strong> (frame skipping, caching, workers) matters more
                than raw compute
              </li>
            </ol>

            <p>
              The combination of WebRTC's low-latency video access and MediaPipe's optimized pose
              detection made real-time posture analytics viable on consumer hardware.
            </p>
          </div>

          <div className='mt-16 pt-8 border-t border-border'>
            <div className='glass rounded-2xl p-8 text-center'>
              <h3 className='text-2xl font-bold mb-3'>Enjoyed this post?</h3>
              <p className='text-muted-foreground mb-6'>
                Check out more articles or get in touch to discuss your project.
              </p>
              <div className='flex flex-wrap gap-4 justify-center'>
                <Link
                  href='/blog'
                  className='px-6 py-3 rounded-full bg-muted hover:bg-muted/80 transition-colors'
                >
                  More Posts
                </Link>
                <Link
                  href='/#contact'
                  className='px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg transition-all'
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}
