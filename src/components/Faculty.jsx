import { Linkedin } from 'lucide-react'
import FadeInSection from './FadeInSection'
import shashi from '../../public/image.png'

const faculty = [
  {
    name: 'Shashikant Burnwal',
    credential: 'IIT/ISB, ex-Tata/Ola',
    image:shashi
      ,
    link: 'https://www.linkedin.com/in/shashikantburnwal/',
  },
  {
    name: 'Ian Jason Creado',
    credential: '10+ yrs Sales, Upwork 5-figure earner',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    link: '#',
  },
  {
    name: 'Anurag Bhatnagar',
    credential: '30+ yrs, Citibank/HDFC',
    image:
      'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=600&q=80',
    link: '#',
  },
]

const featuredIn = ['YourStory', 'DigitalFirst', 'IvyCamp', 'Retail4Growth']

export default function Faculty() {
  return (
    <FadeInSection id="faculty" className="px-4 font-[poppins] py-14 sm:px-6 lg:px-8" delay={0.25}>
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Learn From Industry Veterans</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {faculty.map((person) => (
            <article key={person.name} className="glass rounded-2xl overflow-hidden">
              <img src={person.image} alt={person.name} className="h-52 w-full object-contain" loading="lazy" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{person.name}</h3>
                <p className="mt-2 text-sm text-slate-300">{person.credential}</p>
                <a href={person.link} className="mt-4 inline-flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Featured In</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {featuredIn.map((name) => (
              <span key={name} className="rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-200">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </FadeInSection>
  )
}
