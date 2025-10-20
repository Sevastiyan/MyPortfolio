'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export const useDownloadCV = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const downloadCV = async () => {
    try {
      setIsLoading(true)
      setError(null)

      // Get configuration from environment variables
      const bucketName = process.env.NEXT_PUBLIC_CV_BUCKET_NAME || 'documents'
      const filePath = process.env.NEXT_PUBLIC_CV_FILE_PATH || 'cv/resume.pdf'
      const downloadFilename = process.env.NEXT_PUBLIC_CV_DOWNLOAD_FILENAME || 'Resume.pdf'

      // Download the CV file from Supabase storage
      const { data, error } = await supabase.storage.from(bucketName).download(filePath)

      if (error) {
        throw error
      }

      // Create a blob URL and trigger download
      if (data) {
        const url = URL.createObjectURL(data)
        const link = document.createElement('a')
        link.href = url
        link.download = downloadFilename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
      }
    } catch (err) {
      console.error('Error downloading CV:', err)
      setError(err instanceof Error ? err.message : 'Failed to download CV')
    } finally {
      setIsLoading(false)
    }
  }

  return { downloadCV, isLoading, error }
}
