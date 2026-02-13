import FadeInSection from './FadeInSection'

export default function Hero() {
  return (
    <FadeInSection id="hero" className="md:mb-10 relative overflow-hidden px-4 pb-14 pt-20 sm:px-6 lg:px-8 lg:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="mx-auto h-96 w-96 rounded-full bg-accentBlue/20 blur-[130px]" />
      </div>
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 inline-flex rounded-full border border-primary/10 bg-primary/5 px-4 py-1 text-xs font-medium text-primary">
          Future-Proof Your Career
        </p>
        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-transparent sm:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-primary via-accent to-accentBlue bg-clip-text">
            Launch Your Career in the AI-Driven Business World.
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-base text-muted sm:text-lg">
          Learn practical business skills, automation systems and execution frameworks that turn you into an industry-ready professional.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#final-cta"
            className="rounded-2xl bg-primary px-7 py-3 text-center font-semibold text-base shadow-md hover:shadow-lg transform transition duration-200 ease-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/30 active:translate-y-1"
          >
            Enroll Now
          </a>
          <a
            href="#modules"
            className="rounded-2xl border border-primary/10 bg-base/0 px-7 py-3 text-center font-semibold text-primary transition duration-200 ease-out hover:bg-primary/5 hover:border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/20 active:translate-y-1"
          >
            View Curriculum
          </a>
        </div>
      </div>
    </FadeInSection>
  )
}
