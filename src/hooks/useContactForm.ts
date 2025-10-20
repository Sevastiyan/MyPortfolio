'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface UseContactFormReturn {
  submitForm: (data: ContactFormData) => Promise<void>
  isSubmitting: boolean
  error: string | null
  success: boolean
}

export const useContactForm = (): UseContactFormReturn => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  // Auto-reset success message after 5 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [success])

  // Auto-clear error after 10 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null)
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [error])

  const submitForm = async (formData: ContactFormData) => {
    try {
      setIsSubmitting(true)
      setError(null)
      setSuccess(false)

      // Validate form data
      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.subject.trim() ||
        !formData.message.trim()
      ) {
        throw new Error('All fields are required')
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address')
      }

      // Insert into Supabase
      const { error: supabaseError } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        },
      ])

      if (supabaseError) {
        throw supabaseError
      }

      setSuccess(true)

      // Optional: Send notification email to yourself
      // You can integrate with a service like Resend, SendGrid, etc.
    } catch (err) {
      console.error('Error submitting contact form:', err)
      setError(err instanceof Error ? err.message : 'Failed to send message')
    } finally {
      setIsSubmitting(false)
    }
  }

  return { submitForm, isSubmitting, error, success }
}
