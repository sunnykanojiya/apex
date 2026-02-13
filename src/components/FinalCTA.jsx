import FadeInSection from './FadeInSection'

export default function FinalCTA() {
  return (
    <FadeInSection id="final-cta" className="px-4 pb-20 pt-8 sm:px-6 lg:px-8" delay={0.4}>
      <div className="mx-auto max-w-5xl rounded-2xl border border-blue-400/30 bg-gradient-to-r from-blue-500/20 via-cyan-400/15 to-violet-500/20 p-8 text-center shadow-glow sm:p-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Launch Your Career.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-200">
          Join a program built for execution, not theory. Build high-income, AI-enabled business capabilities in weeks.
        </p>
        <a
          href="#hero"
          className="mt-8 inline-flex rounded-2xl bg-blue-500 px-8 py-3 font-semibold text-white transition hover:bg-blue-400"
        >
          Enroll Now
        </a>
      </div>
    </FadeInSection>
  )
}
