'use client'

import { Mail, MessageCircle, FileText } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container py-16 md:py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-600">
            Have questions about BAIRE? We're here to help you navigate your 
            home-buying journey with confidence.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* General Inquiries */}
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-sage-600" />
              </div>
              <CardTitle className="text-xl">General Inquiries</CardTitle>
              <CardDescription>
                Questions about BAIRE or how we can help you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a 
                href="mailto:hello@baireapp.com"
                className="text-sage-600 hover:text-sage-700 font-medium"
              >
                hello@baireapp.com
              </a>
            </CardContent>
          </Card>

          {/* Customer Support */}
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-7 h-7 text-sage-600" />
              </div>
              <CardTitle className="text-xl">Customer Support</CardTitle>
              <CardDescription>
                Help with your account or technical issues
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a 
                href="mailto:support@baireapp.com"
                className="text-sage-600 hover:text-sage-700 font-medium"
              >
                support@baireapp.com
              </a>
            </CardContent>
          </Card>

          {/* Legal */}
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-7 h-7 text-sage-600" />
              </div>
              <CardTitle className="text-xl">Legal</CardTitle>
              <CardDescription>
                Privacy, terms, or legal matters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a 
                href="mailto:legal@baireapp.com"
                className="text-sage-600 hover:text-sage-700 font-medium"
              >
                legal@baireapp.com
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Response Time */}
        <div className="text-center mt-16">
          <p className="text-slate-600">
            We typically respond within 24 hours during business days.
          </p>
        </div>
      </div>
    </div>
  )
}
