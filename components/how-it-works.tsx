const steps = [
  {
    number: '1',
    title: 'Start your trial',
    description: 'Sign up in 30 seconds. No credit card needed for your 48-hour free trial.',
  },
  {
    number: '2',
    title: 'Ask BAIRE anything',
    description: 'Get personalized guidance on your specific situation. Upload documents for instant explanations.',
  },
  {
    number: '3',
    title: 'Make your purchase',
    description: 'Use BAIRE throughout your transaction. We guide you from offer to closing.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          {/* Section header */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16">
            How it works
          </h2>

          {/* Steps - clean, minimal */}
          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-8">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sage-600 text-white flex items-center justify-center text-xl font-semibold">
                  {step.number}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-lg text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
