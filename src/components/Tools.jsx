import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data based on your provided image structure
const COURSE_DATA = {
  "Term 1": {
    title: "Foundations of AI & No-Code Product Building",
    tools: [
      { name: "Airtable", logo: "https://cdn.worldvectorlogo.com/logos/airtable.svg" },
      { name: "Typedream", logo: "https://pbs.twimg.com/profile_images/1384545806093533187/6tU6O_v8_400x400.jpg" },
      { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg" },
      { name: "Make", logo: "https://cdn.worldvectorlogo.com/logos/make-1.svg" },
      { name: "Canva", logo: "https://cdn.worldvectorlogo.com/logos/canva-1.svg" },
      { name: "OpenAI", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" }
    ],
    techniques: [
      { name: "Prompt Engineering 101", icon: "🪄" },
      { name: "Reading API Docs", icon: "📖" },
      { name: "Voice transcription & synthesis", icon: "🎙️" },
      { name: "No-code app deployment", icon: "⚙️" }
    ]
  },
  "Term 2": {
    title: "Voice, Multimodal, and Agentic AI Products",
    tools: [
      { name: "Descript", logo: "https://cdn.worldvectorlogo.com/logos/descript.svg" },
      { name: "ElevenLabs", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_L_lX7Zq_" }
    ],
    techniques: [
      { name: "Voice Cloning", icon: "🗣️" },
      { name: "Multimodal RAG", icon: "🧠" }
    ]
  },
  // Add other terms as needed...
};

export default function AIToolsSection() {
  const [activeTerm, setActiveTerm] = useState("Term 1");

  return (
    <section className="bg-[#253b8d] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          AI tools <span className="text-cyan-300">offered to Founding Cohort</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 bg-black/20 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm">
          
          {/* LEFT SECTION: Term Selection */}
          <div className="w-full lg:w-1/3 bg-[#fffce8]/10 border-r border-white/10">
            {Object.keys(COURSE_DATA).map((term) => (
              <button
                key={term}
                onClick={() => setActiveTerm(term)}
                className={`w-full text-left p-6 transition-all border-b border-white/5 last:border-0 flex items-center justify-between group ${
                  activeTerm === term ? "bg-[#fffce8] text-[#253b8d]" : "text-white/70 hover:bg-white/5"
                }`}
              >
                <div className="flex flex-col">
                  <span className={`text-xs uppercase tracking-widest font-bold mb-1 ${
                    activeTerm === term ? "text-[#253b8d]/60" : "text-cyan-400"
                  }`}>
                    {term}
                  </span>
                  <span className="text-sm md:text-base font-bold leading-tight">
                    {COURSE_DATA[term].title}
                  </span>
                </div>
                {activeTerm === term && (
                  <motion.div layoutId="arrow" className="text-[#253b8d] font-bold">→</motion.div>
                )}
              </button>
            ))}
          </div>

          {/* RIGHT SECTION: Dynamic Content */}
          <div className="w-full lg:w-2/3 p-8 md:p-12 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTerm}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Tools Grid */}
                <div className="mb-12">
                  <h4 className="text-cyan-400 text-xs uppercase tracking-[0.2em] font-black mb-6">Tools</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {COURSE_DATA[activeTerm].tools.map((tool) => (
                      <div 
                        key={tool.name} 
                        className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors"
                      >
                        <img src={tool.logo} alt={tool.name} className="w-6 h-6 object-contain grayscale brightness-200" />
                        <span className="text-white text-sm font-semibold">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Techniques Grid */}
                <div>
                  <h4 className="text-cyan-400 text-xs uppercase tracking-[0.2em] font-black mb-6">Techniques</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {COURSE_DATA[activeTerm].techniques.map((tech) => (
                      <div key={tech.name} className="flex items-start gap-4 group">
                        <span className="text-2xl group-hover:scale-125 transition-transform">{tech.icon}</span>
                        <div>
                          <p className="text-white font-bold text-base leading-tight">{tech.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}