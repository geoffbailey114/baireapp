import { redirect } from 'next/navigation'
import Link from 'next/link'
import Stripe from 'stripe'

export const dynamic = 'force-dynamic'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

export default async function AccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string }
}) {
  const sessionId = searchParams.session_id

  // If no session_id, redirect to pricing
  if (!sessionId) {
    redirect('/pricing')
  }

  let email = 'Valued Customer'
  let isValid = false

  try {
    // Verify the Stripe session
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status === 'paid') {
      isValid = true
      email = session.customer_email || session.customer_details?.email || 'Valued Customer'
    }
  } catch (error) {
    console.error('Error verifying session:', error)
  }

  // If payment not valid, redirect to pricing
  if (!isValid) {
    redirect('/pricing')
  }

  // Payment is valid - show access page
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
            <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to BAIRE!
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your payment was successful. You now have full access to BAIRE for your home-buying journey.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Your Account</h2>
          <div className="space-y-3">
            <div>
              <span className="text-sm text-gray-500">Email:</span>
              <p className="text-gray-900">{email}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Plan:</span>
              <p className="text-gray-900">BAIRE Buyer Consultant</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Access:</span>
              <p className="text-gray-900">Active until you close on your home</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-green-900 mb-3">Getting Started</h2>
          <p className="text-green-800 mb-4">
            BAIRE is here to help you understand every step of your home-buying 
            journey. Here are some things you can ask about:
          </p>
          <ul className="space-y-2 text-green-800">
            <li>• Understanding purchase agreements and contracts</li>
            <li>• What to expect during home inspections</li>
            <li>• Explaining closing costs and fees</li>
            <li>• Questions to ask your mortgage lender</li>
            <li>• Understanding contingencies and timelines</li>
          </ul>
        </div>

        <div className="text-center">
          <Link 
            href="/consultant"
            className="inline-block bg-green-700 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-green-800"
          >
            Start Chatting with BAIRE →
          </Link>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Remember: BAIRE provides educational information only. For specific 
            legal, financial, or professional advice, please consult licensed 
            professionals.
          </p>
        </div>
      </div>
    </div>
  )
}
