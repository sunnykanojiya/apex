const links = [
  { name: 'Curriculum', href: '#modules' },
  { name: 'Tools', href: '#tools' },
  { name: 'Faculty', href: '#faculty' },
  { name: 'FAQ', href: '#faq' },
]

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#hero" className="text-lg font-semibold tracking-tight text-white">
          AI Career Launch
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
              {link.name}
            </a>
          ))}
        </div>
        <a
          href="#final-cta"
          className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400"
        >
          Enroll
        </a>
      </nav>
    </header>
  )
}
