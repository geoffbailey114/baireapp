import { FileText, MessageSquare, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: MessageSquare,
    title: 'Ask anything',
    description: 'Get instant answers about contracts, negotiations, inspections, and closing. Plain English, no jargon.',
  },
  {
    icon: FileText,
    title: 'Understand documents',
    description: "Upload purchase agreements, disclosures, and contracts. BAIRE explains what you're signing.",
  },
  {
    icon: CheckCircle,
    title: 'Stay on track',
    description: 'Know exactly what to do at each stage — from offer to keys in hand.',
  },
]

export function Features() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          {/* Section header */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-20">
            Everything you need to buy with confidence
          </h2>

          {/* Features grid - more spacing, no borders */}
          <div className="grid md:grid-cols-3 gap-16">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-sage-100 mb-6">
                  <feature.icon className="h-8 w-8 text-sage-700" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
