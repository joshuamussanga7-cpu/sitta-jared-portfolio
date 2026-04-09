import { NextRequest, NextResponse } from 'next/server'
import { ContactFormData } from '@/lib/types'

/**
 * Contact Form API Route
 * POST /api/contact
 * 
 * Handles contact form submissions
 * For now, logs to console. In production, integrate with email service.
 */
export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // TODO: Integrate with email service (Resend, SendGrid, Nodemailer, etc.)
    // Example with Resend:
    // const response = await resend.emails.send({
    //   from: 'noreply@example.com',
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `New Contact Form Submission: ${data.subject}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${data.name}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Subject:</strong> ${data.subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${data.message.replace(/\n/g, '<br>')}</p>
    //   `
    // })

    // For now, just log the submission
    console.log('📧 New contact form submission:', {
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    })

    // Return success response
    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
}
