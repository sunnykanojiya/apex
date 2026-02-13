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
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Course Modules</h2>
        <p className="mt-3 text-muted">A complete execution playbook delivered in 9 high-impact modules.</p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon
            return (
              <article key={module.title} className="glass rounded-2xl p-5 transition hover:border-primary/35 hover:bg-primary/5">
                <div className="mb-4 inline-flex rounded-xl border border-primary/30 bg-primary/10 p-2">
                  <Icon className="h-5 w-5 text-primary/400" />
                </div>
                <h3 className="text-base font-semibold text-primary">{module.title}</h3>
              </article>
            )
          })}
        </div>
      </div>
    </FadeInSection>
  )
}
