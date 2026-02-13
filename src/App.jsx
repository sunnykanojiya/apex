import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Opportunity from './components/Opportunity'
import Modules from './components/Modules'
import Tools from './components/Tools'
import Faculty from './components/Faculty'
import SocialProof from './components/SocialProof'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'

export default function App() {
  return (
    <div className="min-h-screen bg-base text-primary">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.13),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(139,92,246,0.12),transparent_40%)]" />
      <div className="fixed inset-0 -z-10 grid-pattern opacity-20" />

      <NavBar />
      <main>
        <Hero />
        <Opportunity />
        <Modules />
        <Tools />
        <Faculty />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </main>
    </div>
  )
}
