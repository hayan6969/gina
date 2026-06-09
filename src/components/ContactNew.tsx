'use client'

import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { handleContactSubmission } from '../api/contact'
import { useInView } from '../hooks/useInView'
import { animationClasses, getRevealDelayStyle } from '../lib/animations'

// Zod validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').trim(),
  organization: z.string().min(2, 'Organization is required').trim(),
  email: z.string().email('Invalid email address').trim(),
  phone: z.string().optional().transform(val => val?.trim() || ''),
  supportNeeded: z.string().min(1, 'Please select a support type'),
  preferredContact: z.string().min(1, 'Please select a preferred contact method'),
  message: z.string().optional().transform(val => val?.trim() || ''),
})

type ContactFormData = z.infer<typeof contactFormSchema>
type ToastVariant = 'success' | 'error'

type ToastState = {
  variant: ToastVariant
  title: string
  description: string
} | null

export default function ContactNew() {
  const [isLoading, setIsLoading] = useState(false)
  const [toastState, setToastState] = useState<ToastState>(null)
  const sectionRef = useInView<HTMLDivElement>()
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current)
      }
    }
  }, [])

  const showToast = (variant: ToastVariant, title: string, description: string) => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current)
    }

    setToastState({ variant, title, description })

    toastTimerRef.current = setTimeout(() => {
      setToastState(null)
    }, 5000)
  }
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true)
    
    try {
      await handleContactSubmission(data)
      
      showToast(
        'success',
        'Request submitted successfully!',
        'We look forward to partnering with you. You will hear from us shortly.'
      )
      
      reset()
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred'
      console.error('[v0] Form submission error:', errorMessage)
      
      showToast(
        'error',
        'Failed to submit request',
        'Please try again or contact us directly at gina@ginagspeaks.org'
      )
    } finally {
      setIsLoading(false)
    }
  }

  const supportOptions = [
   
  'Custom Programs',
  'Keynote Speaking',
  'Retreats & Workshops',
  'Break out and collaboration',
 
]

  const contactMethods = [
    'Email',
    'Phone Call',
    'Video Meeting',
    'In-Person Meeting',
  ]

  return (
    <section ref={sectionRef.ref} id="contactForm" className="w-full bg-white py-16 lg:py-24">
      <div className="pointer-events-none fixed right-4 top-4 z-50 w-[calc(100vw-2rem)] max-w-sm sm:right-6 sm:top-6 sm:w-full">
        <div
          className={`transform-gpu rounded-2xl border px-4 py-4 shadow-2xl backdrop-blur-md transition-all duration-300 ${
            toastState
              ? 'translate-y-0 opacity-100'
              : '-translate-y-3 opacity-0 pointer-events-none'
          } ${
            toastState?.variant === 'success'
              ? 'border-emerald-200 bg-emerald-50/95 text-emerald-950'
              : 'border-rose-200 bg-rose-50/95 text-rose-950'
          }`}
          aria-live="polite"
          role="status"
        >
          <div className="flex items-start gap-3">
            <div
              className={`mt-0.5 flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                toastState?.variant === 'success'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-rose-600 text-white'
              }`}
            >
              {toastState?.variant === 'success' ? '✓' : '!'}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold">{toastState?.title}</p>
              <p className="mt-1 text-sm leading-relaxed opacity-90">
                {toastState?.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${animationClasses.reveal} ${sectionRef.isInView ? animationClasses.visible : ''}`}>
          <h1
            className="font-heading text-4xl lg:text-5xl text-foreground mb-6 leading-tight text-balance"
            style={getRevealDelayStyle(0)}
          >
            Let&apos;s Transform Your Organization 
          </h1>
          <p
            className="text-lg text-gray-600/70 font-body max-w-2xl mx-auto leading-relaxed"
            style={getRevealDelayStyle(140)}
          >
            Experience transformation with GinaG Speaks—where leaders are inspired, teams are equipped, and communities are elevated.
          </p>
        </div>

        {/* Form and Contact Info */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className={`${animationClasses.revealLeft} ${sectionRef.isInView ? animationClasses.visible : ''} lg:col-span-2 bg-gray-50 p-8 rounded-lg`} style={getRevealDelayStyle(120)}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name and Organization Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register('name')}
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    disabled={isLoading}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                    Organization <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register('organization')}
                    id="organization"
                    type="text"
                    placeholder="Organization"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    disabled={isLoading}
                  />
                  {errors.organization && (
                    <p className="text-red-500 text-sm mt-1">{errors.organization.message}</p>
                  )}
                </div>
              </div>

              {/* Email and Phone Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register('email')}
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    disabled={isLoading}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone <span className="text-gray-500 text-xs">(optional)</span>
                  </label>
                  <input
                    {...register('phone')}
                    id="phone"
                    type="tel"
                    placeholder="(555) 555-5555"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Support Needed and Preferred Contact Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="supportNeeded" className="block text-sm font-medium text-foreground mb-2">
                    Support Needed <span className="text-primary">*</span>
                  </label>
                  <select
                    {...register('supportNeeded')}
                    id="supportNeeded"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                    disabled={isLoading}
                  >
                    <option value="">Select option</option>
                    {supportOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.supportNeeded && (
                    <p className="text-red-500 text-sm mt-1">{errors.supportNeeded.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredContact" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Contact Method <span className="text-primary">*</span>
                  </label>
                  <select
                    {...register('preferredContact')}
                    id="preferredContact"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                    disabled={isLoading}
                  >
                    <option value="">Select option</option>
                    {contactMethods.map((method) => (
                      <option key={method} value={method}>
                        {method}
                      </option>
                    ))}
                  </select>
                  {errors.preferredContact && (
                    <p className="text-red-500 text-sm mt-1">{errors.preferredContact.message}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message <span className="text-gray-500 text-xs">(optional)</span>
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  placeholder="Tell us more about your needs..."
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  disabled={isLoading}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {isLoading || isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  'Submit Request'
                )}
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className={`${animationClasses.revealRight} ${sectionRef.isInView ? animationClasses.visible : ''} lg:col-span-1`} style={getRevealDelayStyle(220)}>
            <div className="bg-gray-50 p-8 rounded-lg sticky top-20">
              <h2 className="font-heading text-2xl text-foreground mb-6">Get in Touch</h2>
              
              <div className="space-y-6 font-body">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Email</p>
                  <a
                    href="mailto:gina@ginagspeaks.org"
                    className="text-primary font-medium hover:underline break-all"
                  >
                    gina@ginagspeaks.org
                  </a>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">
                  We look forward to partnering with you to create transformative experiences for your team and organization.
                </p>

                <div className="pt-6 border-t border-gray-300">
                  <p className="text-xs text-gray-600/80 font-body">
                    Response time: We typically respond within 1-2 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
