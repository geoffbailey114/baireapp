import Link from 'next/link'

const footerLinks = [
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container py-12">
        {/* Disclaimer */}
        <div className="mb-10 p-6 bg-white rounded-xl border border-slate-200">
          <p className="text-sm text-slate-500 leading-relaxed">
            BAIRE is an educational tool, not a real estate agent, broker, lawyer, or financial advisor. 
            BAIRE does not negotiate on your behalf or provide legal, tax, or financial advice. 
            Always consult licensed professionals for specific guidance.
          </p>
        </div>

        {/* Footer content */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <Link 
              href="/" 
              className="font-bold text-xl text-slate-900"
            >
              BAIRE
            </Link>
            <nav>
              <ul className="flex flex-wrap gap-6">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <p className="text-sm text-slate-400">
            © 2026 BAIRE, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
