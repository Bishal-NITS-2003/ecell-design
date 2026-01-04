
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target, Lightbulb, Zap } from 'lucide-react';

const events = [
  {
    id: 1,
    category: "animated",
    title: "GLOWING\nCARD",
    subtitle: "E&I CHALLENGE",
    desc: "A process of turning dreams into million-dollar reality by researching, surveying, and studying the market from scratch.",
    icon: Sparkles,
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
    tagGradient: "from-pink-500 to-rose-600"
  },
  {
    id: 2,
    category: "accelerated",
    title: "EMPRE\nSARIO",
    subtitle: "PITCH YOUR WAY",
    desc: "Entrepreneurship module in Techfest featuring Bech ke Dikhao, Pitch Your Way, and Stock Market Simulation.",
    icon: Zap,
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    tagGradient: "from-blue-400 to-cyan-500"
  },
  {
    id: 3,
    category: "visionary",
    title: "SRIJAN\nSUMMIT",
    subtitle: "FLAGSHIP EVENT",
    desc: "Flagship event initiative to motivate people through varied learning experiences and community-based learning.",
    icon: Lightbulb,
    img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
    tagGradient: "from-indigo-400 to-purple-500"
  },
  {
    id: 4,
    category: "incubated",
    title: "TECH\nVENTURE",
    subtitle: "STARTUP LAB",
    desc: "Institutional Innovation Cell powering the E-Cell to foster innovation, networking, and conferencing for startups.",
    icon: Target,
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    tagGradient: "from-emerald-400 to-teal-500"
  }
];

const Events: React.FC = () => {
  return (
    <section id="events" className="py-40 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-black text-white uppercase tracking-tighter leading-none">
              Events &<br/><span className="text-blue-500">Challenges</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-sm mb-2 text-sm leading-relaxed"
          >
            Participate in our high-stakes challenges designed to push your entrepreneurial limits and launch your vision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glowing-border group"
            >
              <div className="relative h-[620px] rounded-[2.5rem] overflow-hidden bg-[#020617] p-10 flex flex-col shadow-2xl">
                
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0 opacity-25 group-hover:opacity-10 transition-all duration-700">
                  <img src={event.img} alt="" className="w-full h-full object-cover grayscale brightness-[0.4]" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
                </div>

                {/* Content Container (z-10) */}
                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Top: Icon in Circle Container (Design Ref match) */}
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-14 shadow-2xl backdrop-blur-xl group-hover:scale-110 transition-transform duration-500">
                    <event.icon size={26} className="text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  {/* Category Tag (Design Ref match - Pink/Rose) */}
                  <span className={`text-sm font-black tracking-[0.25em] uppercase bg-gradient-to-r ${event.tagGradient} bg-clip-text text-transparent mb-4 block`}>
                    {event.category}
                  </span>
                  
                  {/* Title: Big Bold White (Design Ref match) */}
                  <h3 className="text-5xl font-black text-white mb-2 leading-[0.85] tracking-tighter whitespace-pre-line group-hover:translate-x-1 transition-transform duration-500">
                    {event.title}
                  </h3>
                  
                  {/* Optional Sub-text to fill space if title is short */}
                  <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-auto">
                    {event.subtitle}
                  </p>

                  {/* Description at bottom (Design Ref match) */}
                  <div className="mt-6">
                    <p className="text-white/80 text-lg leading-snug font-normal mb-10 group-hover:text-white transition-colors">
                      {event.desc}
                    </p>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <button className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-500 group-hover:text-white transition-colors">
                        Details
                      </button>
                      <motion.div 
                        whileHover={{ scale: 1.1, x: 5 }}
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 cursor-pointer"
                      >
                        →
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Subtle Interactive Interior Glow */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Decorative Mesh */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[600px] bg-blue-500/5 blur-[120px] -z-10 rounded-full opacity-30" />
    </section>
  );
};

export default Events;
