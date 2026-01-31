import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import crypto from 'crypto'

export const dynamic = 'force-dynamic'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

const baseUrl = process.env.APP_BASE_URL || 'https://baireapp.com'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const normalizedEmail = email.toLowerCase().trim()

    // Look up Stripe customer by email
    const customers = await stripe.customers.list({
      email: normalizedEmail,
      limit: 1,
    })

    // Always return success to prevent email enumeration
    if (customers.data.length === 0) {
      return NextResponse.json({ 
        success: true,
        message: 'If an account exists with this email, you will receive a password reset link.',
      })
    }

    const customer = customers.data[0]

    // Check if they have a password (some customers may have gone through Stripe but not set password)
    if (!customer.metadata?.password_hash) {
      return NextResponse.json({ 
        success: true,
        message: 'If an account exists with this email, you will receive a password reset link.',
      })
    }

    // Generate secure reset token
    const resetToken = crypto.randomBytes(32).toString('hex')
    const resetTokenExpires = Date.now() + (60 * 60 * 1000) // 1 hour from now

    // Store token in Stripe metadata
    await stripe.customers.update(customer.id, {
      metadata: {
        ...customer.metadata,
        reset_token: resetToken,
        reset_token_expires: resetTokenExpires.toString(),
      },
    })

    const resetLink = `${baseUrl}/reset-password?token=${resetToken}&email=${encodeURIComponent(normalizedEmail)}`

    // Try to send email if Resend is configured
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: process.env.FROM_EMAIL || 'BAIRE <noreply@baireapp.com>',
            to: normalizedEmail,
            subject: 'Reset your BAIRE password',
            html: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                <h2>Reset Your Password</h2>
                <p>You requested to reset your BAIRE password. Click the button below to set a new password:</p>
                <p style="margin: 30px 0;">
                  <a href="${resetLink}" style="background-color: #4a7c59; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                    Reset Password
                  </a>
                </p>
                <p style="color: #666; font-size: 14px;">This link will expire in 1 hour.</p>
                <p style="color: #666; font-size: 14px;">If you didn't request this, you can safely ignore this email.</p>
                <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
                <p style="color: #999; font-size: 12px;">BAIRE - Your AI Home Buying Consultant</p>
              </div>
            `,
          }),
        })
      } catch (emailError) {
        console.error('Failed to send reset email:', emailError)
        // Continue anyway - user can use the link if we return it
      }
    }

    // In development or if no email service, include the link in response
    const isDev = process.env.NODE_ENV === 'development' || !process.env.RESEND_API_KEY

    return NextResponse.json({ 
      success: true,
      message: 'If an account exists with this email, you will receive a password reset link.',
      // Only include link for dev/testing (remove in production if email is working)
      ...(isDev && { resetLink }),
    })
  } catch (error) {
    console.error('Forgot password error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
