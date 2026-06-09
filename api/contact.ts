import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const FROM_EMAIL = 'hayan@inostrik.com'
const TO_EMAIL = 'gina@ginagspeaks.org'

interface ContactFormData {
  name: string
  organization: string
  email: string
  phone?: string
  supportNeeded: string
  preferredContact: string
  message?: string
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set')
    return res.status(500).json({ success: false, message: 'Email service is not configured' })
  }

  const data = (req.body ?? {}) as Partial<ContactFormData>

  // Validate required fields
  if (
    !data.name ||
    !data.organization ||
    !data.email ||
    !data.supportNeeded ||
    !data.preferredContact
  ) {
    return res.status(400).json({ success: false, message: 'Missing required fields' })
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return res.status(400).json({ success: false, message: 'Invalid email format' })
  }

  const resend = new Resend(apiKey)

  const rows: Array<[string, string]> = [
    ['Name', data.name],
    ['Organization', data.organization],
    ['Email', data.email],
    ['Phone', data.phone || '—'],
    ['Support Needed', data.supportNeeded],
    ['Preferred Contact', data.preferredContact],
    ['Message', data.message || '—'],
  ]

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #1a1a1a; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">New contact form submission</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-weight: 600; background: #f9fafb; vertical-align: top; white-space: nowrap;">${escapeHtml(
              label,
            )}</td>
            <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${escapeHtml(value).replace(
              /\n/g,
              '<br />',
            )}</td>
          </tr>`,
          )
          .join('')}
      </table>
    </div>
  `

  const text = rows.map(([label, value]) => `${label}: ${value}`).join('\n')

  try {
    const { data: sent, error } = await resend.emails.send({
      from: `GinaG Speaks Website <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: data.email,
      subject: `New inquiry from ${data.name} (${data.organization})`,
      html,
      text,
    })

    if (error) {
      console.error('[contact] Resend error:', error)
      return res.status(502).json({ success: false, message: 'Failed to send email' })
    }

    return res.status(200).json({ success: true, message: 'Form submitted successfully', id: sent?.id })
  } catch (err) {
    console.error('[contact] Unexpected error:', err)
    return res.status(500).json({ success: false, message: 'An unexpected error occurred' })
  }
}
