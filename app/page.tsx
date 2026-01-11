import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="border-b">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-green-700">
            BAIRE
          </Link>
          <div className="flex gap-4">
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link 
              href="/pricing" 
              className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center">
          <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
            Your AI-Powered Home Buying Guide
          </span>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Buy your home with <span className="text-green-700">confidence</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            BAIRE is an AI-powered educational consultant that helps self-represented 
            home buyers understand the process, terminology, and considerations 
            involved in purchasing a home.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link 
              href="/pricing"
              className="bg-green-700 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-green-800"
            >
              Get Started →
            </Link>
            <Link 
              href="/consultant"
              className="border border-gray-300 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-50"
            >
              Try Free
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mt-32 grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Document Understanding</h3>
            <p className="text-gray-600">
              Get clear explanations of contracts, disclosures, and other documents.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Questions Answered</h3>
            <p className="text-gray-600">
              Ask anything about home buying. Get straightforward answers in plain English.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">One-Time Fee</h3>
            <p className="text-gray-600">
              $599 for your entire home-buying transaction. No commissions, no surprises.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <p className="text-sm text-gray-500 text-center">
            BAIRE is an educational tool, not a real estate agent, broker, lawyer, or financial advisor. 
            Always consult licensed professionals for specific guidance.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700">Terms</Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700">Privacy</Link>
            <Link href="/disclaimer" className="text-sm text-gray-500 hover:text-gray-700">Disclaimer</Link>
            <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-700">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
