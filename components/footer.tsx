import Link from 'next/link'
import { APP_NAME, FOOTER_LEGAL_LINKS, DISCLAIMER_SHORT } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-slate-50">
      <div className="container py-12">
        {/* Disclaimer */}
        <div className="mb-8 p-4 bg-white rounded-lg border border-slate-200">
          <p className="text-xs text-slate-500 leading-relaxed">
            {DISCLAIMER_SHORT}
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <Link 
              href="/" 
              className="font-semibold text-lg text-sage-700"
              aria-label={`${APP_NAME} home`}
            >
              {APP_NAME}
            </Link>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-4 sm:gap-6">
                {FOOTER_LEGAL_LINKS.map((link) => (
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
            © {currentYear} BAIRE, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
