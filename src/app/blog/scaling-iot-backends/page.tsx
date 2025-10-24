import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { blogPosts } from '@/data/blog-data'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Scaling IoT Backends: Lessons from 50K Connected Devices',
  description:
    'Deep dive into architecting a high-throughput IoT platform that processes biosignal data in real-time with AWS Lambda, DynamoDB, and Kinesis.',
}

export default function ScalingIoTPost() {
  const post = blogPosts.find((p) => p.slug === 'scaling-iot-backends')!

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
              Building an IoT backend that handles 50,000+ constantly connected devices taught us
              valuable lessons about scale, reliability, and cost optimization. Here's what we
              learned processing millions of biosignal events daily.
            </p>

            <h2>The Problem</h2>
            <p>Our sleep analytics platform needed to:</p>
            <ul>
              <li>
                Ingest <strong>biosignal data</strong> from smart mattresses (heart rate, breathing,
                movement)
              </li>
              <li>
                Process events in <strong>real-time</strong> (under 500ms latency)
              </li>
              <li>
                Generate <strong>sleep scores</strong> using ML models
              </li>
              <li>
                Support <strong>50K concurrent connections</strong>
              </li>
              <li>
                Maintain <strong>99.9% uptime</strong>
              </li>
            </ul>

            <p>Traditional monolithic backends wouldn't scale cost-effectively.</p>

            <h2>Architecture: Event-Driven Serverless</h2>
            <p>We chose a serverless event-driven architecture on AWS:</p>

            <pre>
              <code>{`IoT Devices
    ↓
AWS IoT Core (MQTT)
    ↓
Kinesis Data Streams
    ↓
Lambda Functions → DynamoDB
    ↓           ↓
  ML Pipeline   Analytics`}</code>
            </pre>

            <h3>Why This Stack?</h3>
            <p>
              <strong>AWS IoT Core</strong> handles MQTT connections and device authentication at
              scale. No connection pooling, no load balancers.
            </p>
            <p>
              <strong>Kinesis</strong> provides ordered, durable event streams. Critical for
              time-series biosignal data.
            </p>
            <p>
              <strong>Lambda</strong> auto-scales without capacity planning. Pay only for actual
              processing time.
            </p>
            <p>
              <strong>DynamoDB</strong> delivers single-digit millisecond reads at any scale.
            </p>

            <h2>Key Design Decisions</h2>

            <h3>1. Event Schema Design</h3>
            <p>We optimized payload size since we're charged per GB transferred:</p>

            <pre>
              <code>{`// Compact event format
interface BiosignalEvent {
  d: string      // device_id
  t: number      // timestamp (unix ms)
  h: number      // heart_rate
  b: number      // breathing_rate
  m: number[]    // movement (compressed)
}

// 50-70 bytes per event vs 200+ with verbose JSON`}</code>
            </pre>

            <h3>2. Lambda Batching</h3>
            <p>
              Processing events individually was expensive. We batch 100 events per Lambda
              invocation:
            </p>

            <pre>
              <code>{`export const handler = async (event: KinesisStreamEvent) => {
  const events = event.Records.map(r =>
    JSON.parse(Buffer.from(r.kinesis.data, 'base64').toString())
  )

  // Batch write to DynamoDB
  const batches = chunk(events, 25)  // DynamoDB limit

  await Promise.all(
    batches.map(batch => dynamodb.batchWriteItem({
      RequestItems: {
        'biosignals': batch.map(e => ({
          PutRequest: { Item: e }
        }))
      }
    }))
  )
}`}</code>
            </pre>

            <p>This reduced Lambda invocations by 100x and cut costs by 85%.</p>

            <h2>Results</h2>
            <p>Our monthly AWS costs for 50K devices:</p>

            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Cost</th>
                  <th>Optimization</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>IoT Core</td>
                  <td>$250</td>
                  <td>Connection reuse</td>
                </tr>
                <tr>
                  <td>Kinesis</td>
                  <td>$400</td>
                  <td>Right-sized shards</td>
                </tr>
                <tr>
                  <td>Lambda</td>
                  <td>$150</td>
                  <td>Batching</td>
                </tr>
                <tr>
                  <td>DynamoDB</td>
                  <td>$600</td>
                  <td>On-demand pricing</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>
                    <strong>$1,400</strong>
                  </td>
                  <td>
                    <strong>$0.03/device/month</strong>
                  </td>
                </tr>
              </tbody>
            </table>

            <h2>Lessons Learned</h2>
            <ol>
              <li>
                <strong>Event-driven architectures scale naturally</strong> – no capacity planning
              </li>
              <li>
                <strong>Batch everything</strong> – Lambda/DynamoDB pricing rewards batching
              </li>
              <li>
                <strong>Design for failure</strong> – DLQs and retries are non-negotiable
              </li>
              <li>
                <strong>Monitor cold starts</strong> – can impact p99 latency
              </li>
              <li>
                <strong>Single-table design</strong> saves money – fewer DynamoDB tables = simpler
                billing
              </li>
            </ol>

            <h2>Conclusion</h2>
            <p>
              Serverless isn't just a buzzword – it's the right architecture for bursty IoT
              workloads. Our system handles peak loads (10K events/sec) and quiet periods (1K
              events/sec) without manual intervention.
            </p>
            <p>
              The key is embracing event-driven design and optimizing for your cloud provider's
              pricing model.
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
