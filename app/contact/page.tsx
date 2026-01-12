import type { Metadata } from 'next'
import { Mail } from 'lucide-react'
import { APP_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${APP_NAME}. Get in touch with our team for questions and support.`,
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Have questions about BAIRE? We&apos;re here to help.
          </p>

          <div className="mt-12 space-y-8">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage-100">
                  <Mail className="h-5 w-5 text-sage-700" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    General Inquiries
                  </h2>
                  <p className="mt-1 text-slate-600">
                    For general questions about BAIRE and our services.
                  </p>
                  <a
                    href="mailto:hello@baireapp.com"
                    className="mt-3 inline-block text-sage-700 hover:text-sage-800 font-medium"
                  >
                    hello@baireapp.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage-100">
                  <Mail className="h-5 w-5 text-sage-700" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Support
                  </h2>
                  <p className="mt-1 text-slate-600">
                    Technical support and account-related questions.
                  </p>
                  <a
                    href="mailto:support@baireapp.com"
                    className="mt-3 inline-block text-sage-700 hover:text-sage-800 font-medium"
                  >
                    support@baireapp.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage-100">
                  <Mail className="h-5 w-5 text-sage-700" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Legal & Privacy
                  </h2>
                  <p className="mt-1 text-slate-600">
                    Questions about our terms, privacy policy, or legal matters.
                  </p>
                  <a
                    href="mailto:legal@baireapp.com"
                    className="mt-3 inline-block text-sage-700 hover:text-sage-800 font-medium"
                  >
                    legal@baireapp.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-lg bg-slate-50 p-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Before You Reach Out
            </h2>
            <p className="mt-2 text-slate-600">
              Please note that BAIRE provides educational information only. We cannot 
              provide legal, financial, or real estate advice. For specific questions 
              about your home purchase, please consult with licensed professionals in 
              your area.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
