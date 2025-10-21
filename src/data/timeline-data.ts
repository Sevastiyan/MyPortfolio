import { TimelineItemData } from '@/components/ui/timeline-item'

export const timelineData: TimelineItemData[] = [
  {
    id: '1',
    type: 'experience',
    title: 'Senior AI Engineer',
    organization: 'Neurabody',
    location: 'Seoul, South Korea',
    startDate: '2024',
    endDate: 'Present',
    description:
      'Leading development of AI-powered posture and movement analytics for smart devices. Focused on real-time posture detection for Samsung Smart TVs and ergonomic seating systems.',
    achievements: [
      'Developed low-latency AI pipelines for posture tracking using MediaPipe and WebRTC',
      'Architected AWS backend (Lambda, DynamoDB, Kinesis) supporting 100K+ active users',
      'Optimized model inference and video processing pipeline, improving responsiveness by 60%',
    ],
    technologies: ['TypeScript', 'Node.js', 'AWS', 'WebRTC', 'MediaPipe', 'Machine Learning'],
  },
  {
    id: '2',
    type: 'experience',
    title: 'Full-Stack Developer',
    organization: 'Wethm',
    location: 'Seoul, South Korea',
    startDate: '2021',
    endDate: '2024',
    description:
      'Developed and scaled the backend for a sleep-enhancement IoT platform integrating biosignal analytics and AI-driven sleep scoring.',
    achievements: [
      'Integrated real-time sleep detection algorithms into production systems',
      'Built subscription and analytics backend serving 50K+ connected devices',
      'Implemented CI/CD and microservice architecture, ensuring 99.9% uptime',
    ],
    technologies: ['Node.js', 'Python', 'AWS', 'PostgreSQL', 'TypeScript', 'IoT'],
  },
  {
    id: '3',
    type: 'experience',
    title: 'AI Engineer / Data Analyst',
    organization: 'FlexoSense Pte. Ltd.',
    location: 'Singapore',
    startDate: '2019',
    endDate: '2021',
    description:
      'Designed sensor fusion and gait analysis algorithms for smart insoles and clinical monitoring. Contributed to healthcare and safety innovation projects.',
    achievements: [
      'Developed gait analysis pipeline for IoT insoles with 97% metric accuracy',
      'Delivered clinical pilot with NUH Singapore for gait monitoring',
      'Built dashboards and analytics for real-time patient and industrial safety monitoring',
    ],
    technologies: ['Python', 'TensorFlow', 'Sensor Fusion', 'Machine Learning', 'AWS', 'IoT'],
  },
  {
    id: '4',
    type: 'education',
    title: 'Master of Science in Medialogy',
    organization: 'Aalborg University',
    location: 'Copenhagen, Denmark',
    startDate: '2016',
    endDate: '2018',
    description:
      "Researched user interaction and biomechanics within intelligent systems. Master's thesis focused on physiological signal interpretation and data-driven UX.",
    achievements: [
      'Completed MSc thesis on signal analysis and human–computer interaction',
      'Collaborated on projects combining AI, media technology, and human factors',
    ],
    technologies: [
      'Machine Learning',
      'Signal Processing',
      'Human–Computer Interaction',
      'Data Analysis',
      'Prototyping',
    ],
  },
  {
    id: '5',
    type: 'education',
    title: 'Bachelor of Engineering in Global Business Engineering',
    organization: 'VIA University College',
    location: 'Horsens, Denmark',
    startDate: '2009',
    endDate: '2014',
    description:
      'Interdisciplinary program merging software engineering, project management, and business strategy.',
    achievements: [
      'Completed projects bridging technology and business innovation',
      'Developed strong foundation in software development and system design',
    ],
    technologies: [
      'Software Engineering',
      'Database Systems',
      'Web Development',
      'Mobile Development',
      'Project Management',
    ],
  },
]
