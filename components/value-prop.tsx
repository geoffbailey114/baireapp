export function ValueProp() {
  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          {/* Big statement */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            The average buyer's agent commission is $12,000.
            <br />
            <span className="text-sage-600">BAIRE costs $599.</span>
          </h2>

          {/* Supporting text */}
          <p className="mt-8 text-xl text-slate-600 max-w-2xl leading-relaxed">
            We're not replacing agents — we're giving you the tools to represent yourself. 
            AI-powered guidance, document explanations, and step-by-step support through 
            your entire purchase.
          </p>
        </div>
      </div>
    </section>
  )
}
