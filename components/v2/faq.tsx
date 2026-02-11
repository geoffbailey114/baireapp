'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: "Can I actually tour homes without an agent?",
    answer: (
      <>
        <p className="mb-3">Yes. You can attend open houses freely, and for private showings, you contact the listing agent directly.</p>
        <p>BAIRE gives you the exact scripts — what to say, what to email, what to text. Most listing agents are happy to show their property to a serious, qualified buyer.</p>
      </>
    ),
  },
  {
    question: 'Will sellers take my offer seriously without an agent?',
    answer: (
      <>
        <p className="mb-3">Your offer is actually stronger. When you don&apos;t have a buyer&apos;s agent, there&apos;s no 2–3% commission for the seller to pay out.</p>
        <p>On a $400K home, that means the seller keeps $10,000 more from your offer than from an identical offer with an agent attached. You&apos;re not at a disadvantage — you&apos;re the better deal on paper.</p>
      </>
    ),
  },
  {
    question: "How will I know what the home is actually worth?",
    answer: (
      <>
        <p className="mb-3">BAIRE analyzes comparable sales, days on market, price trends, and seller motivation signals to help you understand a home&apos;s real value.</p>
        <p>This is the same analysis agents do (called a CMA) — you just get it instantly, without the commission attached.</p>
      </>
    ),
  },
  {
    question: 'What about inspections and appraisals?',
    answer: (
      <>
        <p className="mb-3">BAIRE guides you through hiring inspectors, reading reports, identifying deal-breakers vs. minor issues, ordering appraisals, and using findings as negotiation leverage.</p>
        <p>For what it&apos;s worth — agents don&apos;t inspect houses either. They hand you a business card. BAIRE does the same, plus teaches you what the report means.</p>
      </>
    ),
  },
  {
    question: 'What if something goes wrong and I need to back out?',
    answer: (
      <>
        <p>BAIRE includes an exit strategy playbook covering how contingencies protect you, exact language for exercising your right to cancel, and templates for repair requests, credit negotiations, or walking away. You&apos;ll always know your options.</p>
      </>
    ),
  },
  {
    question: 'Is AI really smart enough to replace an agent?',
    answer: (
      <>
        <p className="mb-3">BAIRE isn&apos;t replacing an agent with a chatbot. It&apos;s trained on the collective knowledge of thousands of real transactions — what works, what doesn&apos;t, what to watch for.</p>
        <p>It gives you the strategic thinking and market knowledge agents provide, without the commission or conflicts of interest. And it&apos;s available at 2am when you&apos;re stressing about your offer.</p>
      </>
    ),
  },
  {
    question: "I've never bought a home before. Can I really do this?",
    answer: (
      <>
        <p className="mb-3">That&apos;s exactly who BAIRE was built for. The entire platform is a step-by-step process — from your first search to closing day.</p>
        <p>At every stage, you&apos;ll know exactly what to do, what comes next, and what to watch for. You won&apos;t be guessing. You&apos;ll be guided.</p>
      </>
    ),
  },
  {
    question: 'Does BAIRE negotiate for me?',
    answer: (
      <>
        <p className="mb-3">No — and that&apos;s the point. Negotiation isn&apos;t who sends the message. It&apos;s knowing what to ask for, when, and why.</p>
        <p>BAIRE gives you the strategy. You make the call.</p>
      </>
    ),
  },
  {
    question: 'Is BAIRE a lawyer?',
    answer: (
      <>
        <p className="mb-3">No. Just like a good agent, BAIRE doesn&apos;t pretend to be one.</p>
        <p>Instead, it explains what matters, flags legal decision points, and helps you know when an attorney is worth involving — without guessing.</p>
      </>
    ),
  },
  {
    question: 'Is my information safe?',
    answer: (
      <>
        <p>Yes. Your data isn&apos;t sold, shared, or used for marketing.</p>
      </>
    ),
  },
]

export function FAQV2() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Common questions
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
