const links = [
  { name: 'Curriculum', href: '#modules' },
  { name: 'Faculty', href: '#faculty' },
  { name: 'FAQ', href: '#faq' },
]

export default function NavBar() {
  return (
    <div className="fixed top-6 left-1/2 z-50 w-[92%] max-w`-5xl -translate-x-1/2">
      <nav className="mx-auto flex items-center justify-between rounded-3xl border border-primary/10 bg-base/60 px-4 py-2 backdrop-blur-lg shadow-lg">
        {/* Logo - left */}
        <a href="#hero" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accentBlue p-1 shadow-md">
            <span className="text-sm font-extrabold text-base">AI</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold text-primary">AI Career Launch</div>
            <div className="text-xs text-muted">AI-driven business careers</div>
          </div>
        </a>

        {/* Center nav links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-primary/80 hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#final-cta"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-base shadow-md hover:shadow-lg transition-all"
          >
            Join Now
          </a>
        </div>
      </nav>
    </div>
  )
}
