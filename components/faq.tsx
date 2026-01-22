'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What is BAIRE?',
    answer:
      "BAIRE is an AI-powered educational consultant designed to help self-represented home buyers understand the home-buying process. We provide clear explanations, answer your questions, and help you feel confident throughout your journey. We are not a real estate agent, broker, lawyer, or financial advisor.",
  },
  {
    question: 'Does BAIRE negotiate on my behalf?',
    answer:
      'No. BAIRE is strictly educational. We do not negotiate, represent, or act on your behalf in any way. We help you understand the process so you can make your own informed decisions. For negotiation and representation, you should work with a licensed real estate professional.',
  },
  {
    question: 'Is BAIRE a replacement for a real estate agent?',
    answer:
      'No. BAIRE is an educational tool that helps you understand the home-buying process. We do not provide the services of a licensed real estate agent, such as representation, negotiation, or fiduciary duties. Many buyers find BAIRE helpful alongside or instead of traditional agent services, but the choice is yours.',
  },
  {
    question: 'What does $599 include?',
    answer:
      "The $599 one-time fee provides access to BAIRE for your entire home-buying transaction—from initial questions through closing. There are no additional charges, no commissions, and no recurring fees. Your access continues until you report that you've closed on your home.",
  },
  {
    question: 'Can BAIRE give me legal or financial advice?',
    answer:
      'No. BAIRE provides educational information only. We do not provide legal, tax, or financial advice. For specific guidance in these areas, we encourage you to consult with licensed attorneys, CPAs, or financial advisors who can review your particular situation.',
  },
  {
    question: 'What happens after I close on my home?',
    answer:
      "When you've successfully closed on your home, you can mark your transaction as complete in BAIRE. This ends your current session. If you buy another home in the future, you're welcome to purchase access again for that new transaction.",
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes. You can try BAIRE with a limited number of educational queries before purchasing. The free trial gives you a sense of how BAIRE can help, though some features like detailed templates are reserved for paid members.',
  },
  {
    question: 'How is my information protected?',
    answer:
      "We take privacy seriously. BAIRE uses industry-standard security practices. We do not sell your personal information. Your conversations are used only to provide you with the educational service you've requested. Please review our Privacy Policy for complete details.",
  },
]

export function FAQ() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Have questions? We have answers. If you don&apos;t see what you&apos;re 
            looking for, feel free to reach out.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200">
                <AccordionTrigger className="text-left text-lg font-medium text-slate-900 hover:text-sage-700 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* FAQ Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  )
}
