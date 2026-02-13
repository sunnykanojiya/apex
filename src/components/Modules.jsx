import {
  Users,
  Search,
  Mail,
  Linkedin,
  Phone,
  Network,
  Cpu,
  BriefcaseBusiness,
  Rocket,
} from 'lucide-react'
import FadeInSection from './FadeInSection'

const modules = [
  { title: 'Customer Research (ICP)', icon: Users },
  { title: 'Lead Prospecting', icon: Search },
  { title: 'Email Outreach (Infrastructure)', icon: Mail },
  { title: 'LinkedIn Systems', icon: Linkedin },
  { title: 'Cold Calling Mastery', icon: Phone },
  { title: 'Multi-Channel Engine', icon: Network },
  { title: 'AI & Automation', icon: Cpu },
  { title: 'Business Execution', icon: BriefcaseBusiness },
  { title: 'Career Launch', icon: Rocket },
]

export default function Modules() {
  return (
    <FadeInSection id="modules" className="px-4 py-14 sm:px-6 lg:px-8" delay={0.15}>
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Course Modules</h2>
        <p className="mt-3 text-slate-400">A complete execution playbook delivered in 9 high-impact modules.</p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon
            return (
              <article key={module.title} className="glass rounded-2xl p-5 transition hover:border-blue-400/35 hover:bg-white/10">
                <div className="mb-4 inline-flex rounded-xl border border-blue-400/30 bg-blue-500/10 p-2">
                  <Icon className="h-5 w-5 text-blue-300" />
                </div>
                <h3 className="text-base font-semibold text-slate-100">{module.title}</h3>
              </article>
            )
          })}
        </div>
      </div>
    </FadeInSection>
  )
}
