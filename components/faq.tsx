'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: "How is BAIRE better than a buyer's agent?",
    answer: (
      <>
        <p className="mb-3">A buyer&apos;s agent is one person, paid on commission, with limited experience and availability.</p>
        <p className="mb-2">BAIRE is:</p>
        <ul className="list-disc list-inside mb-3 space-y-1">
          <li>Always on</li>
          <li>Not paid more when you pay more</li>
          <li>Trained on far more deal outcomes than any single agent</li>
        </ul>
        <p>It&apos;s not just cheaper. It&apos;s smarter and more aligned.</p>
      </>
    ),
  },
  {
    question: 'Does BAIRE negotiate for me?',
    answer: (
      <>
        <p className="mb-3">No — and that&apos;s the point.</p>
        <p className="mb-3">Negotiation isn&apos;t who sends the message. It&apos;s knowing what to ask for, when, and why.</p>
        <p>BAIRE gives you the strategy. You make the call.</p>
      </>
    ),
  },
  {
    question: 'Is BAIRE a lawyer?',
    answer: (
      <>
        <p className="mb-3">No.</p>
        <p className="mb-3">Just like a good agent, BAIRE doesn&apos;t pretend to be one.</p>
        <p>Instead, it explains what matters, flags legal decision points, and helps you know when an attorney is worth involving — without guessing.</p>
      </>
    ),
  },
  {
    question: 'Is this actually legal?',
    answer: (
      <>
        <p className="mb-3">Yes.</p>
        <p className="mb-3">You are never required to use a buyer&apos;s agent to buy a home.</p>
        <p>BAIRE exists because the process is learnable — and technology now makes it obvious.</p>
      </>
    ),
  },
  {
    question: 'How do I tour homes without an agent?',
    answer: (
      <>
        <p className="mb-3">BAIRE gives you the exact scripts and steps to schedule showings without hiring a buyer&apos;s agent.</p>
        <p>Once buyers see this step, everything else clicks.</p>
      </>
    ),
  },
  {
    question: 'What does the $995 cover?',
    answer: (
      <>
        <p className="mb-2">Everything you need — from first search to closing day:</p>
        <ul className="list-disc list-inside mb-3 space-y-1">
          <li>Comp analysis &amp; pricing intelligence</li>
          <li>Showing scripts &amp; listing agent contact guidance</li>
          <li>Offer strategy and negotiation coaching</li>
          <li>Inspection and appraisal guidance</li>
          <li>Closing support</li>
        </ul>
        <p>No commissions. No upsells.</p>
      </>
    ),
  },
  {
    question: 'Why is BAIRE so much cheaper?',
    answer: (
      <>
        <p className="mb-3">Because BAIRE doesn&apos;t take a percentage of your purchase.</p>
        <p className="mb-3">Agents earn more when you pay more. BAIRE costs the same either way.</p>
        <p>That difference matters.</p>
      </>
    ),
  },
  {
    question: 'Who is BAIRE not for?',
    answer: (
      <>
        <p className="mb-3">If you want someone else to control the process and earn commission for it, BAIRE isn&apos;t for you.</p>
        <p>If you want clarity, leverage, and control — it is.</p>
      </>
    ),
  },
  {
    question: 'What happens after I close?',
    answer: (
      <>
        <p className="mb-3">Nothing.</p>
        <p>You close. You keep the savings. BAIRE is done.</p>
      </>
    ),
  },
  {
    question: 'Is my information safe?',
    answer: (
      <>
        <p className="mb-3">Yes.</p>
        <p>Your data isn&apos;t sold, shared, or used for marketing.</p>
      </>
    ),
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
      </div>
    </section>
  )
}
