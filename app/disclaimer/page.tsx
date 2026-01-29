import type { Metadata } from 'next'
import { APP_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: `Important disclaimers about ${APP_NAME}. Understand what BAIRE is and is not.`,
}

export default function DisclaimerPage() {
  return (
    <PageWrapper>
    <div className="py-16 md:py-24">
      <div className="container">
        <article className="prose-legal mx-auto max-w-3xl">
          <h1>Disclaimer</h1>
          
          <p className="text-slate-500">
            <strong>BAIREAPP, LLC</strong><br />
            Last Updated: January 19, 2026
          </p>

          <h2>Educational Tool Only</h2>
          <p>
            BAIRE is an educational technology platform designed to provide general information 
            and AI-assisted tools to help self-represented home buyers understand and organize 
            aspects of the residential home-buying process.
          </p>

          <h2>Not a Real Estate Agent or Broker</h2>
          <p>
            BAIRE is <strong>not</strong> a real estate agent, broker, or brokerage. BAIRE does not:
          </p>
          <ul>
            <li>Represent you or any other party in real estate transactions</li>
            <li>Negotiate on your behalf</li>
            <li>Provide real estate agency services</li>
            <li>Owe fiduciary duties to any user</li>
          </ul>
          <p>
            <strong>No reasonable user should understand BAIRE to be acting as a real estate 
            agent or fiduciary, and BAIRE expressly disclaims any such role.</strong>
          </p>

          <h2>Not Legal, Financial, or Tax Advice</h2>
          <p>
            BAIRE does <strong>not</strong> provide:
          </p>
          <ul>
            <li>Legal advice or create an attorney-client relationship</li>
            <li>Financial or investment advice</li>
            <li>Tax advice or tax planning services</li>
            <li>Appraisals, valuations, or property inspections</li>
          </ul>
          <p>
            All information provided through BAIRE is for general educational purposes only 
            and should not be relied upon as professional advice.
          </p>

          <h2>Self-Representation</h2>
          <p>
            By using BAIRE, you acknowledge that you are representing yourself in any real 
            estate transaction. You are solely responsible for:
          </p>
          <ul>
            <li>All decisions related to your home purchase</li>
            <li>Verifying all information before acting on it</li>
            <li>Consulting with licensed professionals for personalized advice</li>
            <li>Understanding and complying with all applicable laws and regulations</li>
          </ul>

          <h2>AI-Generated Content</h2>
          <p>
            BAIRE uses artificial intelligence to generate educational content and guidance. 
            AI-generated outputs:
          </p>
          <ul>
            <li>May not account for every local rule, regulation, or unique situation</li>
            <li>May contain errors or inaccuracies</li>
            <li>Should be independently verified before relying on them</li>
            <li>Are not a substitute for professional judgment</li>
          </ul>

          <h2>No Guarantees</h2>
          <p>
            BAIRE does not guarantee:
          </p>
          <ul>
            <li>Any specific cost savings</li>
            <li>The availability of any property</li>
            <li>The outcome of any transaction</li>
            <li>The acceptance of any offer</li>
            <li>Seller concessions or cooperation</li>
          </ul>
          <p>
            Real estate transactions involve numerous factors outside of BAIRE's control, 
            including market conditions, seller decisions, and local regulations.
          </p>

          <h2>Consult Professionals</h2>
          <p>
            We strongly encourage you to consult with licensed professionals, including:
          </p>
          <ul>
            <li>Real estate attorneys</li>
            <li>Licensed home inspectors</li>
            <li>Mortgage lenders and financial advisors</li>
            <li>Tax professionals</li>
            <li>Title companies and escrow officers</li>
          </ul>

          <h2>Contact</h2>
          <p>
            If you have questions about this Disclaimer, please contact us at:{' '}
            <a href="mailto:legal@baireapp.com" className="text-sage-600 hover:text-sage-700">
              legal@baireapp.com
            </a>
          </p>
        </article>
      </div>
    </div>
  )
}
