import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-slate-900 text-slate-300" role="contentinfo">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4" aria-label="BAIRE Home">
              <img
                src="/logo-white.svg"
                alt="BAIRE"
                className="h-8 w-auto"
                width={120}
                height={32}
              />
            </Link>
            <p className="text-slate-400 max-w-md">
              AI-powered home buying consultant. Everything an agent does — comp analysis,
              negotiation coaching, closing guidance — for $995 instead of $10,000+.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/how-baire-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} BAIREAPP, LLC. All rights reserved.
          </p>
          <a 
            href="mailto:hello@baireapp.com"
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            hello@baireapp.com
          </a>
        </div>
      </div>
    </footer>
  )
}
