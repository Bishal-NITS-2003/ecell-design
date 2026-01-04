
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Rocket, Compass, Layers, Globe } from 'lucide-react';

const initiativesData = [
  {
    title: "Orientation",
    desc: "A comprehensive welcome into the entrepreneurial ecosystem. We introduce fresh minds to the core values of innovation, providing them with the roadmap to navigate their journey from students to visionary founders.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000",
    icon: Compass,
    color: "from-blue-500/20"
  },
  {
    title: "EIC",
    desc: "The Entrepreneurship & Innovation Challenge is our premier platform for raw ideas. Participants undergo rigorous market research, feasibility studies, and business model refinement to turn simple thoughts into viable business models.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
    icon: Sparkles,
    color: "from-purple-500/20"
  },
  {
    title: "Srijan",
    desc: "Our flagship summit that bridges the gap between industry titans and budding entrepreneurs. Featuring varied learning experiences, community-based workshops, and networking sessions that ignite the spark of creation.",
    img: "https://images.unsplash.com/photo-1475721027785-f74dea327912?auto=format&fit=crop&q=80&w=1000",
    icon: Layers,
    color: "from-cyan-500/20"
  },
  {
    title: "Empressario",
    desc: "The high-stakes entrepreneurship module featuring 'Bech ke Dikhao', live pitching, and stock market simulations. It's a true test of grit, salesmanship, and strategic thinking under pressure.",
    img: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1000",
    icon: Globe,
    color: "from-emerald-500/20"
  },
  {
    title: "Pre Incubation",
    desc: "Turning prototypes into companies. We provide the structural support, legal guidance, and mentorship needed to move from a validated idea to an officially registered startup ready for the market.",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1000",
    icon: Rocket,
    color: "from-rose-500/20"
  }
];

const Initiatives: React.FC = () => {
  return (
    <section id="initiatives" className="py-32 relative overflow-hidden bg-transparent">
      {/* Decorative Atmosphere */}
      <div className="absolute top-[10%] left-[-5%] w-[60vw] h-[60vw] bg-blue-600/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-[10%] right-[-5%] w-[60vw] h-[60vw] bg-purple-600/5 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-40"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="inline-block px-8 py-2 mb-8 glass border border-blue-500/20 rounded-full"
          >
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-blue-400">Our Strategic Impact</span>
          </motion.div>
          <h1 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-6">
            Our <span className="text-blue-500">Initiatives</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl mx-auto tracking-wide">
            Empowering students to transform conceptual sparks into market-leading startups through structured mentorship and resources.
          </p>
        </motion.div>

        <div className="space-y-64">
          {initiativesData.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-32`}
            >
              {/* Image Side with Hover Interactions */}
              <div className="w-full lg:w-1/2 group">
                <div className="relative">
                  {/* Glow underlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`} />
                  
                  {/* Main Container */}
                  <div className="relative aspect-[16/10] lg:aspect-square rounded-[3rem] overflow-hidden glass border border-white/10 shadow-2xl transition-all duration-700 group-hover:border-blue-500/30">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Floating Info Tag on Image */}
                    <div className="absolute bottom-10 left-10 glass px-6 py-3 rounded-2xl border border-white/5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      <p className="text-[10px] font-black tracking-widest text-white uppercase">E-Cell NIT Silchar</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 1 }}
                >
                  <div className="mb-10">
                    <div className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center text-blue-500 shadow-xl group-hover:scale-110 transition-transform">
                      <item.icon size={28} />
                    </div>
                  </div>

                  <h3 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 font-light max-w-xl">
                    {item.desc}
                  </p>

                  <button className="group relative px-12 py-5 rounded-full border border-blue-500/40 bg-transparent overflow-hidden transition-all hover:border-blue-500">
                    <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 text-white font-bold tracking-widest text-xs uppercase flex items-center gap-4">
                      Explore Modules <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
