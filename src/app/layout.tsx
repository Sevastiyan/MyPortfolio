import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from 'next/font/google'
import { Sora, Geist_Mono, Figtree, Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Plus } from 'lucide-react'

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Sevastiyan Tsvetkov',
  description: 'Modern portfolio showcasing projects, skills, and professional experience',
  icons: {
    icon: '/portfolio.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${sora.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider defaultTheme='light' enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
