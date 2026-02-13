import FadeInSection from './FadeInSection'

export default function Hero() {
  return (
    <FadeInSection id="hero" className="md:mb-10 relative overflow-hidden px-4 pb-14 pt-20 sm:px-6 lg:px-8 lg:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="mx-auto h-96 w-96 rounded-full bg-blue-500/20 blur-[130px]" />
      </div>
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 inline-flex rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-1 text-xs font-medium text-blue-200">
          Future-Proof Your Career
        </p>
        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-transparent sm:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text">
            Launch Your Career in the AI-Driven Business World.
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-base text-slate-300 sm:text-lg">
          Learn practical business skills, automation systems and execution frameworks that turn you into an industry-ready professional.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#final-cta"
            className="rounded-2xl bg-blue-500 px-7 py-3 text-center font-semibold text-white transition hover:bg-blue-400"
          >
            Enroll Now
          </a>
          <a
            href="#modules"
            className="rounded-2xl border border-white/20 bg-white/5 px-7 py-3 text-center font-semibold text-slate-100 transition hover:bg-white/10"
          >
            View Curriculum
          </a>
        </div>
      </div>
    </FadeInSection>
  )
}
