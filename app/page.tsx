import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-emerald-700">
            BAIRE
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Pricing
            </Link>
            <Link 
              href="/pricing"
              className="bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-800 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700 mb-6">
              Your AI-Powered Home Buying Guide
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Buy your home with{' '}
              <span className="text-emerald-600">confidence</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              BAIRE is an AI-powered educational consultant that helps self-represented 
              home buyers understand the process, terminology, and considerations 
              involved in purchasing a home. Get clear answers to your questions, 
              understand documents, and feel empowered throughout your journey.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/pricing"
                className="w-full sm:w-auto bg-emerald-700 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-emerald-800 transition-colors"
              >
                Get Started →
              </Link>
              <Link 
                href="/consultant"
                className="w-full sm:w-auto border border-slate-300 px-8 py-3 rounded-md text-lg font-medium hover:bg-slate-50 transition-colors"
              >
                Try Free
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Educational only</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Plain English</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>24/7 availability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Everything you need to buy with confidence
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              BAIRE helps you understand the home-buying process so you can make 
              informed decisions. We educate and empower—you decide and act.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                <svg className="h-6 w-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">Document Understanding</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                Get clear explanations of contracts, disclosures, and other documents. Understand what you're signing before you sign it.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                <svg className="h-6 w-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">Questions Answered</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                Ask anything about the home-buying process. Get straightforward answers in plain English, not jargon.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                <svg className="h-6 w-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">Process Guidance</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                Understand each step of the journey from offer to closing. Know what to expect and what questions to ask.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                <svg className="h-6 w-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">Available 24/7</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                Get help whenever you need it. BAIRE is here to assist whether it's morning coffee or midnight questions.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                <svg className="h-6 w-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">One-Time Fee</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                $599 for your entire home-buying transaction. No commissions, no surprises, no recurring charges.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                <svg className="h-6 w-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">You Stay in Control</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                BAIRE educates and informs. You make all the decisions. We encourage consulting professionals for specific advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              How BAIRE works
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A simple process designed to empower you with knowledge throughout 
              your home-buying journey.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-12">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold">
                  01
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Start with a question</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Ask BAIRE anything about home buying. Whether you're curious about earnest money, inspection contingencies, or closing costs—just ask.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold">
                  02
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Get clear explanations</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Receive straightforward answers in plain English. No jargon, no complexity. Just the information you need to understand your situation.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold">
                  03
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Make informed decisions</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Use what you learn to guide your home-buying journey. BAIRE helps you know what questions to ask and what to consider.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold">
                  04
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Close with confidence</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  When you've completed your purchase, you'll feel good about understanding every step of the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-emerald-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Ready to buy your home with confidence?
            </h2>
            <p className="mt-4 text-lg text-emerald-100">
              Join buyers who have used BAIRE to understand the home-buying 
              process. Start with a free trial or get full access for $599.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/pricing"
                className="w-full sm:w-auto bg-white text-emerald-700 px-8 py-3 rounded-md text-lg font-medium hover:bg-emerald-50 transition-colors"
              >
                Get Started →
              </Link>
              <Link 
                href="/consultant"
                className="w-full sm:w-auto border border-emerald-300 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-emerald-600 transition-colors"
              >
                Try Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Disclaimer */}
          <div className="mb-8 p-4 bg-white rounded-lg border border-slate-200">
            <p className="text-xs text-slate-500 leading-relaxed">
              BAIRE is an educational tool, not a real estate agent, broker, lawyer, or financial advisor. 
              BAIRE does not negotiate on your behalf or provide legal, tax, or financial advice. 
              Always consult licensed professionals for specific guidance.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <Link href="/" className="font-semibold text-lg text-emerald-700">
                BAIRE
              </Link>
              <nav className="flex flex-wrap gap-4 sm:gap-6">
                <Link href="/terms" className="text-sm text-slate-500 hover:text-slate-700">
                  Terms of Use
                </Link>
                <Link href="/privacy" className="text-sm text-slate-500 hover:text-slate-700">
                  Privacy Policy
                </Link>
                <Link href="/disclaimer" className="text-sm text-slate-500 hover:text-slate-700">
                  Disclaimer
                </Link>
                <Link href="/contact" className="text-sm text-slate-500 hover:text-slate-700">
                  Contact
                </Link>
              </nav>
            </div>
            <p className="text-sm text-slate-400">
              © 2025 BAIRE. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
