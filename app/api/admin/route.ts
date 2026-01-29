import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

// Admin secret key - set this in your environment variables
const ADMIN_SECRET = process.env.ADMIN_SECRET

export async function POST(request: NextRequest) {
  try {
    // Verify admin secret
    const authHeader = request.headers.get('authorization')
    
    // Debug: Check if ADMIN_SECRET is even set
    if (!ADMIN_SECRET) {
      return NextResponse.json({ 
        error: 'ADMIN_SECRET environment variable is not set' 
      }, { status: 401 })
    }
    
    if (authHeader !== `Bearer ${ADMIN_SECRET}`) {
      return NextResponse.json({ 
        error: 'Invalid admin key' 
      }, { status: 401 })
    }

    const body = await request.json()
    const { action, email, note } = body

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    if (!['grant', 'revoke', 'check'].includes(action)) {
      return NextResponse.json(
        { error: 'Invalid action. Use: grant, revoke, or check' },
        { status: 400 }
      )
    }

    // Find customer by email
    const customers = await stripe.customers.list({
      email,
      limit: 1,
    })

    if (customers.data.length === 0) {
      // For grant action, create a new customer if none exists
      if (action === 'grant') {
        const newCustomer = await stripe.customers.create({
          email,
          metadata: {
            comp_access: 'true',
            comp_granted_at: new Date().toISOString(),
            comp_note: note || 'Admin granted access',
          },
        })

        return NextResponse.json({
          success: true,
          action: 'grant',
          email,
          customerId: newCustomer.id,
          message: `Created new customer and granted comp access to ${email}`,
        })
      }

      return NextResponse.json(
        { error: `No customer found with email: ${email}` },
        { status: 404 }
      )
    }

    const customer = customers.data[0]

    switch (action) {
      case 'grant': {
        // Grant comp access
        await stripe.customers.update(customer.id, {
          metadata: {
            ...customer.metadata,
            comp_access: 'true',
            comp_granted_at: new Date().toISOString(),
            comp_note: note || 'Admin granted access',
          },
        })

        return NextResponse.json({
          success: true,
          action: 'grant',
          email,
          customerId: customer.id,
          message: `Granted comp access to ${email}`,
        })
      }

      case 'revoke': {
        // Revoke comp access
        await stripe.customers.update(customer.id, {
          metadata: {
            ...customer.metadata,
            comp_access: 'false',
            comp_revoked_at: new Date().toISOString(),
          },
        })

        return NextResponse.json({
          success: true,
          action: 'revoke',
          email,
          customerId: customer.id,
          message: `Revoked comp access from ${email}`,
        })
      }

      case 'check': {
        // Check current status
        const isComp = customer.metadata?.comp_access === 'true'
        const grantedAt = customer.metadata?.comp_granted_at
        const note = customer.metadata?.comp_note

        return NextResponse.json({
          success: true,
          action: 'check',
          email,
          customerId: customer.id,
          isComp,
          grantedAt: grantedAt || null,
          note: note || null,
          metadata: customer.metadata,
        })
      }
    }
  } catch (error) {
    console.error('Admin API error:', error)
    return NextResponse.json(
      { error: 'Admin operation failed' },
      { status: 500 }
    )
  }
}

// GET method to list all comp users
export async function GET(request: NextRequest) {
  try {
    // Verify admin secret
    const authHeader = request.headers.get('authorization')
    
    // Debug: Check if ADMIN_SECRET is even set
    if (!ADMIN_SECRET) {
      return NextResponse.json({ 
        error: 'ADMIN_SECRET environment variable is not set' 
      }, { status: 401 })
    }
    
    if (authHeader !== `Bearer ${ADMIN_SECRET}`) {
      return NextResponse.json({ 
        error: 'Invalid admin key' 
      }, { status: 401 })
    }

    // List all customers and filter for comp users
    const compUsers: Array<{
      email: string
      customerId: string
      grantedAt: string | null
      note: string | null
    }> = []

    let hasMore = true
    let startingAfter: string | undefined

    while (hasMore) {
      const customers = await stripe.customers.list({
        limit: 100,
        starting_after: startingAfter,
      })

      for (const customer of customers.data) {
        if (customer.metadata?.comp_access === 'true') {
          compUsers.push({
            email: customer.email || 'No email',
            customerId: customer.id,
            grantedAt: customer.metadata?.comp_granted_at || null,
            note: customer.metadata?.comp_note || null,
          })
        }
      }

      hasMore = customers.has_more
      if (customers.data.length > 0) {
        startingAfter = customers.data[customers.data.length - 1].id
      }
    }

    return NextResponse.json({
      success: true,
      count: compUsers.length,
      users: compUsers,
    })
  } catch (error) {
    console.error('Admin API error:', error)
    return NextResponse.json(
      { error: 'Failed to list comp users' },
      { status: 500 }
    )
  }
}
