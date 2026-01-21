import type { Metadata } from 'next'
import { APP_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: `Terms of Use for ${APP_NAME}. Read our terms and conditions for using the BAIRE platform.`,
}

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <article className="prose-legal mx-auto max-w-3xl">
          <h1>Terms of Use</h1>
          
          <p className="text-slate-500">
            <strong>BAIRE, LLC</strong><br />
            Last Updated: January 19, 2026
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using BAIRE (the "Service"), you acknowledge that you have read, 
            understood, and agree to be bound by these Terms of Use (the "Terms"). If you do 
            not agree, you may not use the Service.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            BAIRE is a software platform that provides general educational information and 
            user-directed informational tools, including AI-assisted outputs, designed to help 
            individuals who choose to self-represent understand and organize aspects of the 
            residential home-buying process.
          </p>
          <p>The Service may include:</p>
          <ul>
            <li>Educational explanations of real estate concepts and terminology</li>
            <li>General information about common steps and procedures</li>
            <li>Document organization tools</li>
            <li>AI-assisted informational outputs generated from user-provided inputs</li>
          </ul>

          <h2>3. Affirmative Self-Representation Acknowledgment</h2>
          <p>By using the Service, you affirmatively acknowledge and agree that:</p>
          <ul>
            <li>You are representing yourself in any real estate transaction</li>
            <li>You are not hiring BAIRE as a real estate agent, broker, attorney, fiduciary, or advisor</li>
            <li>BAIRE does not represent you or any other party</li>
            <li>All decisions and actions are entirely your own</li>
          </ul>
          <p>
            <strong>No reasonable user should understand BAIRE to be acting as a real estate agent 
            or fiduciary, and BAIRE expressly disclaims any such role.</strong>
          </p>

          <h2>4. What BAIRE Is Not</h2>
          <p>BAIRE does not:</p>
          <ul>
            <li>Act as a real estate broker or agent</li>
            <li>Provide real estate representation, negotiation, or advocacy</li>
            <li>Provide legal advice or create an attorney-client relationship</li>
            <li>Provide financial, tax, or investment advice</li>
            <li>Provide appraisals, valuations, inspections, or transaction execution</li>
            <li>Communicate or negotiate with sellers, agents, lenders, or other third parties on your behalf</li>
          </ul>
          <p>
            No agency, fiduciary, advisory, or representative relationship is created by your 
            use of the Service.
          </p>

          <h2>5. AI-Assisted Outputs and No Reliance</h2>
          <p>The Service uses artificial intelligence to generate general informational outputs.</p>
          <p>You acknowledge and agree that:</p>
          <ul>
            <li>AI-assisted outputs are not professional advice</li>
            <li>Outputs are not tailored recommendations</li>
            <li>Outputs may be incomplete, inaccurate, or inapplicable to your situation</li>
            <li>You are solely responsible for verifying all information</li>
          </ul>
          <p>You agree not to rely on the Service as a substitute for professional judgment.</p>

          <h2>6. User Responsibilities</h2>
          <p>You agree that:</p>
          <ul>
            <li>You are solely responsible for all decisions related to any transaction</li>
            <li>You will independently verify information before acting</li>
            <li>You will consult licensed professionals for personalized advice</li>
            <li>You assume all risks arising from your use of the Service</li>
          </ul>

          <h2>7. Payment, Access, and Termination</h2>
          <p>
            The Service may be offered through paid access or limited trials as described at 
            the time of purchase.
          </p>
          <p>
            Fees are non-refundable once access is granted, except as required by applicable law.
          </p>
          <p>
            Access may terminate upon completion of your transaction or as otherwise described 
            in the Service.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
          <ul>
            <li>
              BAIRE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, 
              EXEMPLARY, OR PUNITIVE DAMAGES
            </li>
            <li>
              BAIRE SHALL NOT BE LIABLE FOR ANY DECISIONS OR OUTCOMES RESULTING FROM YOUR USE 
              OF THE SERVICE
            </li>
            <li>
              IN NO EVENT SHALL BAIRE'S TOTAL LIABILITY EXCEED THE AMOUNT PAID BY YOU TO BAIRE 
              IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </li>
          </ul>

          <h2>9. Disclaimer of Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
            EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF ACCURACY, COMPLETENESS, MERCHANTABILITY, 
            FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </p>

          <h2>10. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless BAIRE, its affiliates, managers, 
            and members from any claims, liabilities, damages, losses, or expenses (including 
            attorneys' fees) arising out of or related to:
          </p>
          <ul>
            <li>Your use of the Service</li>
            <li>Your decisions or actions</li>
            <li>Your violation of these Terms</li>
          </ul>

          <h2>11. Arbitration and Class Action Waiver</h2>
          <p>
            ALL DISPUTES arising out of or relating to these Terms or the Service shall be 
            resolved by binding arbitration administered by the American Arbitration Association 
            in Cuyahoga County, Ohio.
          </p>
          <p>
            <strong>
              YOU AGREE TO WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION, CLASS ARBITRATION, 
              OR REPRESENTATIVE PROCEEDING.
            </strong>
          </p>

          <h2>12. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Ohio, without regard to 
            conflict-of-law principles.
          </p>

          <h2>13. Changes to Terms</h2>
          <p>
            BAIRE may modify these Terms at any time. Continued use of the Service constitutes 
            acceptance of the modified Terms.
          </p>

          <h2>14. Contact</h2>
          <p>
            For legal inquiries, contact:{' '}
            <a href="mailto:legal@baireapp.com" className="text-sage-600 hover:text-sage-700">
              legal@baireapp.com
            </a>
          </p>
        </article>
      </div>
    </div>
  )
}
