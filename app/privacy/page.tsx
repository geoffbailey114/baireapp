'use client'

import { Card, CardContent } from '@/components/ui/card'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-600 mb-12">
            Last updated: January 2026
          </p>
          
          <Card>
            <CardContent className="prose prose-slate max-w-none p-8">
              <h2>1. Information We Collect</h2>
              <p>We collect information you provide directly to us, including:</p>
              <ul>
                <li>Account information (name, email address)</li>
                <li>Payment information (processed securely through Stripe)</li>
                <li>Property search preferences and criteria</li>
                <li>Communications with our AI consultant</li>
                <li>Documents you upload for review</li>
              </ul>
              
              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our Service</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Personalize your experience with BAIRE</li>
              </ul>
              
              <h2>3. Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share information 
                with third parties only in the following circumstances:
              </p>
              <ul>
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect the rights and safety of BAIRE and our users</li>
                <li>With service providers who assist in our operations (e.g., payment processing)</li>
              </ul>
              
              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to 
                protect your personal information. However, no method of transmission 
                over the Internet is 100% secure.
              </p>
              
              <h2>5. Data Retention</h2>
              <p>
                We retain your information for as long as your account is active or 
                as needed to provide you services. You may request deletion of your 
                data at any time.
              </p>
              
              <h2>6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>
              
              <h2>7. Cookies and Tracking</h2>
              <p>
                We use cookies and similar technologies to improve your experience, 
                understand usage patterns, and deliver personalized content. You can 
                control cookies through your browser settings.
              </p>
              
              <h2>8. Children's Privacy</h2>
              <p>
                Our Service is not intended for children under 18. We do not knowingly 
                collect information from children under 18.
              </p>
              
              <h2>9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify 
                you of any changes by posting the new Privacy Policy on this page.
              </p>
              
              <h2>10. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data practices, 
                please contact us at{' '}
                <a href="mailto:privacy@baireapp.com" className="text-sage-600 hover:text-sage-700">
                  privacy@baireapp.com
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
