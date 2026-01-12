import type { Metadata } from 'next'
import { APP_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: `Terms of Use for ${APP_NAME}. Please read these terms carefully before using our service.`,
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <article className="prose-legal">
          <h1>Terms of Use</h1>
          <p className="text-sm text-slate-500">Last updated: January 2025</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using BAIRE (&quot;Service&quot;), you agree to be bound by these 
            Terms of Use. If you do not agree to these terms, please do not use our Service.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            BAIRE is an AI-powered educational platform designed to help self-represented 
            home buyers understand the home-buying process. Our Service provides:
          </p>
          <ul>
            <li>Educational information about home buying</li>
            <li>Explanations of real estate terminology</li>
            <li>General guidance on the home-buying process</li>
            <li>Assistance understanding documents and procedures</li>
          </ul>

          <h2>3. What BAIRE Is Not</h2>
          <p>
            <strong>BAIRE is not and does not provide:</strong>
          </p>
          <ul>
            <li>Real estate agent or broker services</li>
            <li>Legal advice or representation</li>
            <li>Financial or tax advice</li>
            <li>Fiduciary representation</li>
            <li>Negotiation services</li>
            <li>Appraisal or valuation services</li>
            <li>Home inspection services</li>
          </ul>
          <p>
            BAIRE does not create any agency, fiduciary, or representative relationship 
            between you and BAIRE or any third party. We do not contact sellers, agents, 
            lenders, or any other parties on your behalf.
          </p>

          <h2>4. User Responsibilities</h2>
          <p>
            You acknowledge and agree that:
          </p>
          <ul>
            <li>You are responsible for all decisions regarding your home purchase</li>
            <li>You will verify any information provided by BAIRE with qualified professionals</li>
            <li>You will consult licensed professionals (attorneys, CPAs, real estate agents) for specific advice</li>
            <li>The information provided is educational and general in nature</li>
            <li>You will not rely solely on BAIRE for any transaction decisions</li>
          </ul>

          <h2>5. Payment and Access</h2>
          <p>
            The Service is offered for a one-time fee of $599 per home-buying transaction. 
            Your access continues until you report that you have closed on your home or 
            otherwise completed your transaction. There are no refunds once access has been 
            granted, except as required by applicable law.
          </p>

          <h2>6. Free Trial</h2>
          <p>
            We offer a limited free trial that allows a small number of educational queries. 
            Free trial access is subject to these same terms and limitations.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, BAIRE AND ITS AFFILIATES SHALL NOT BE 
            LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, 
            OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR 
            ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
          </p>
          <ul>
            <li>Your use or inability to use the Service</li>
            <li>Any decisions made based on information provided by the Service</li>
            <li>Any unauthorized access to or use of our servers</li>
            <li>Any interruption or cessation of transmission to or from the Service</li>
          </ul>

          <h2>8. Disclaimer of Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY 
            KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE 
            UNINTERRUPTED, SECURE, OR ERROR-FREE, OR THAT THE INFORMATION PROVIDED WILL 
            BE ACCURATE, COMPLETE, OR SUITABLE FOR ANY PARTICULAR PURPOSE.
          </p>

          <h2>9. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless BAIRE and its affiliates from any 
            claims, damages, losses, or expenses arising from your use of the Service or 
            violation of these Terms.
          </p>

          <h2>10. Changes to Terms</h2>
          <p>
            We may modify these Terms at any time. Continued use of the Service after 
            changes constitutes acceptance of the modified Terms. We will provide notice 
            of material changes when practicable.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of 
            the State of Delaware, without regard to its conflict of law provisions.
          </p>

          <h2>12. Contact</h2>
          <p>
            For questions about these Terms, please contact us at legal@baireapp.com.
          </p>
        </article>
      </div>
    </div>
  )
}
