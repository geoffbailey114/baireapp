'use client'

import { Card, CardContent } from '@/components/ui/card'
import { PageWrapper } from '@/components/page-wrapper'

export default function TermsPage() {
  return (
    <PageWrapper>
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-600 mb-12">
            Last updated: January 2026
          </p>
          
          <Card>
            <CardContent className="prose prose-slate max-w-none p-8">
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing or using BAIRE ("Service"), you agree to be bound by these 
                Terms of Service. If you disagree with any part of these terms, you may 
                not access the Service.
              </p>
              
              <h2>2. Description of Service</h2>
              <p>
                BAIRE provides AI-powered educational guidance and tools to assist 
                individuals in understanding the home-buying process. BAIRE is not a 
                licensed real estate brokerage, and our Service does not constitute 
                real estate representation, legal advice, or financial advice.
              </p>

              <h2>3. Non-Professional Services Covenant</h2>
              <p>
                BAIREAPP, LLC is expressly prohibited from acting, and shall not act, as a 
                real estate broker, real estate agent, attorney, fiduciary, financial advisor, 
                or representative of any user or third party.
              </p>
              <p>
                BAIREAPP, LLC shall not negotiate, advocate, communicate, transact, or execute 
                documents on behalf of any user or third party.
              </p>
              <p>
                BAIREAPP, LLC provides only general educational information and user-controlled 
                software tools. All decisions and actions remain solely with the user.
              </p>

              <h2>4. AI-Assisted Outputs</h2>
              <p>
                "AI-Assisted Outputs" means automated or semi-automated informational outputs 
                generated using software algorithms or machine learning models. AI-Assisted 
                Outputs are general in nature, are not professional advice, are not tailored 
                recommendations, and require independent user judgment and verification prior 
                to reliance.
              </p>
              <p>
                BAIREAPP, LLC implements regular bias testing and accuracy audits for AI tools 
                to mitigate risks of discrimination or error.
              </p>

              <h2>5. No User Reliance</h2>
              <p>
                BAIREAPP, LLC does not intend for, and expressly disclaims, reliance by users 
                on the Company or its software as a substitute for professional judgment. Users 
                assume full responsibility for evaluating information and making all decisions.
              </p>
              <p>
                BAIREAPP, LLC disclaims all warranties, express or implied, including accuracy, 
                merchantability, and fitness for a particular purpose. Liability is limited to 
                the amount paid by the user in the prior 12 months.
              </p>
              
              <h2>6. User Responsibilities</h2>
              <p>You acknowledge and agree that:</p>
              <ul>
                <li>You are responsible for all decisions made regarding your home purchase</li>
                <li>BAIRE provides educational information only, not professional representation</li>
                <li>You should consult with licensed professionals (attorneys, inspectors, etc.) as needed</li>
                <li>You will provide accurate information when using our Service</li>
                <li>You will not misuse the Service or attempt to gain unauthorized access</li>
              </ul>
              
              <h2>7. Disclaimer of Warranties</h2>
              <p>
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES 
                OF ANY KIND. BAIRE MAKES NO REPRESENTATIONS OR WARRANTIES REGARDING 
                THE ACCURACY, COMPLETENESS, OR SUITABILITY OF THE INFORMATION PROVIDED.
              </p>
              
              <h2>8. Limitation of Liability</h2>
              <p>
                BAIRE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
                CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE. 
                OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE SERVICE 
                IN THE PRIOR 12 MONTHS.
              </p>
              
              <h2>9. Payment and Refunds</h2>
              <p>
                Payment is due at the time of purchase. Fees are non-refundable except 
                as required by law. We reserve the right to modify pricing with notice 
                to users.
              </p>
              
              <h2>10. Intellectual Property</h2>
              <p>
                All content, features, and functionality of the Service are owned by 
                BAIRE and protected by intellectual property laws. You may not reproduce, 
                distribute, or create derivative works without our written permission.
              </p>
              
              <h2>11. Account Termination</h2>
              <p>
                We may terminate or suspend your account at any time for violations of 
                these Terms. Upon termination, your right to use the Service ceases 
                immediately.
              </p>
              
              <h2>12. Governing Law</h2>
              <p>
                These Terms shall be governed by the laws of the State of Ohio, without 
                regard to conflict of law provisions.
              </p>
              
              <h2>13. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify 
                users of material changes via email or through the Service.
              </p>
              
              <h2>14. Contact Information</h2>
              <p>
                For questions about these Terms, please contact us at{' '}
                <a href="mailto:legal@baireapp.com" className="text-sage-600 hover:text-sage-700">
                  legal@baireapp.com
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </PageWrapper>
  )
}
