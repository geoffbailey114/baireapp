import type { Metadata } from 'next'
import { APP_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: `Important disclaimer about ${APP_NAME} services. BAIRE is an educational tool, not a real estate agent or legal advisor.`,
  robots: {
    index: true,
    follow: true,
  },
}

export default function DisclaimerPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <article className="prose-legal">
          <h1>Disclaimer</h1>
          <p className="text-sm text-slate-500">Last updated: January 2025</p>

          <h2>Educational Purpose Only</h2>
          <p>
            BAIRE is an educational platform designed to help users understand the 
            home-buying process. All information, guidance, and content provided by 
            BAIRE is for general educational purposes only and should not be construed 
            as professional advice of any kind.
          </p>

          <h2>BAIRE Is Not:</h2>
          <ul>
            <li>A real estate agent or broker</li>
            <li>A licensed attorney or law firm</li>
            <li>A financial advisor or planner</li>
            <li>A tax advisor or CPA</li>
            <li>A home inspector or appraiser</li>
            <li>A mortgage lender or broker</li>
            <li>A fiduciary representative</li>
          </ul>

          <h2>BAIRE Does Not:</h2>
          <ul>
            <li>Provide legal, financial, or tax advice</li>
            <li>Negotiate on behalf of users</li>
            <li>Contact sellers, agents, or other parties for users</li>
            <li>Create any agency or fiduciary relationship</li>
            <li>Represent users in any transaction</li>
            <li>Guarantee the accuracy of any information provided</li>
            <li>Make recommendations about specific properties or transactions</li>
          </ul>

          <h2>Your Responsibility</h2>
          <p>
            By using BAIRE, you acknowledge and agree that:
          </p>
          <ul>
            <li>
              <strong>You are solely responsible</strong> for all decisions related to 
              your home purchase.
            </li>
            <li>
              <strong>You should consult licensed professionals</strong> including real 
              estate attorneys, CPAs, licensed real estate agents, home inspectors, and 
              other qualified experts for specific advice related to your situation.
            </li>
            <li>
              <strong>You should verify all information</strong> provided by BAIRE with 
              appropriate professionals and official sources.
            </li>
            <li>
              <strong>Real estate laws and practices vary</strong> by state and locality. 
              BAIRE provides general information that may not apply to your specific 
              jurisdiction or circumstances.
            </li>
            <li>
              <strong>Real estate transactions involve significant financial risk.</strong> You 
              should not rely solely on BAIRE for any transaction decisions.
            </li>
          </ul>

          <h2>No Professional Relationship</h2>
          <p>
            Using BAIRE does not create any professional relationship, including but not 
            limited to attorney-client, agent-principal, or fiduciary relationships. BAIRE 
            is a software tool, not a professional service provider.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            BAIRE provides information on an &quot;as is&quot; basis without any warranties, express 
            or implied. We are not liable for any damages arising from your use of BAIRE 
            or reliance on any information provided, including but not limited to financial 
            losses, property damages, or legal consequences.
          </p>

          <h2>Seek Professional Advice</h2>
          <p>
            We strongly encourage you to work with licensed professionals throughout your 
            home-buying journey. Consider consulting:
          </p>
          <ul>
            <li>A real estate attorney for legal matters and contract review</li>
            <li>A licensed real estate agent if you want professional representation</li>
            <li>A CPA or tax advisor for tax implications</li>
            <li>A licensed home inspector for property condition assessment</li>
            <li>A mortgage professional for financing advice</li>
            <li>An insurance agent for homeowner&apos;s insurance</li>
          </ul>

          <h2>Contact</h2>
          <p>
            If you have questions about this disclaimer, please contact us at 
            legal@baire.ai.
          </p>
        </article>
      </div>
    </div>
  )
}
