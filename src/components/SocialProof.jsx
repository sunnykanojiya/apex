import FadeInSection from './FadeInSection'

const testimonials = [
  {
    quote: 'The systems taught here gave me structure and confidence to crack my first AI-sales role.',
    name: 'Learner Outcome',
  },
  {
    quote: 'In 8 weeks, I moved from random outreach to a predictable multi-channel workflow.',
    name: 'Career Switcher',
  },
]

export default function SocialProof() {
  return (
    <FadeInSection className="px-4 py-14 sm:px-6 lg:px-8" delay={0.3}>
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Proof That Compounds</h2>
        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="glass rounded-2xl p-6">
              <p className="text-slate-200">"{item.quote}"</p>
              <footer className="mt-4 text-sm text-slate-400">{item.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </FadeInSection>
  )
}
