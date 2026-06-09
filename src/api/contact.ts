// Client-side helper that submits the contact form to the
// Vercel serverless function at /api/contact (see /api/contact.ts),
// which sends the email through Resend.

interface ContactFormData {
  name: string
  organization: string
  email: string
  phone?: string
  supportNeeded: string
  preferredContact: string
  message?: string
}

export async function handleContactSubmission(data: ContactFormData) {
  let response: Response

  try {
    response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  } catch {
    throw new Error('Network error. Please check your connection and try again.')
  }

  let result: { success?: boolean; message?: string } = {}
  try {
    result = await response.json()
  } catch {
    // Non-JSON response (e.g. unexpected server error)
  }

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Failed to submit the form')
  }

  return result
}
