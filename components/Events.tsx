
import React from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    id: 1,
    title: "E&I Challenge",
    desc: "A process of turning dreams into million-dollar reality by researching, surveying, and studying the market from scratch.",
    img: "https://picsum.photos/seed/event1/800/600",
    accent: "shadow-blue-500/20"
  },
  {
    id: 2,
    title: "EMPRESARIO",
    desc: "Entrepreneurship module in Techfest featuring Bech ke Dikhao, Pitch Your Way, and Stock Market Simulation.",
    img: "https://picsum.photos/seed/event2/800/600",
    accent: "shadow-purple-500/20"
  },
  {
    id: 3,
    title: "SRIJAN",
    desc: "Flagship event initiative to motivate people through varied learning experiences and community-based learning.",
    img: "https://picsum.photos/seed/event3/800/600",
    accent: "shadow-amber-500/20"
  },
  {
    id: 4,
    title: "INCUBATION",
    desc: "Institutional Innovation Cell powering the E-Cell to foster innovation, networking, and conferencing for startups.",
    img: "https://picsum.photos/seed/event4/800/600",
    accent: "shadow-emerald-500/20"
  }
];

const Events: React.FC = () => {
  return (
    <section id="events" className="py-32 bg-[#020617]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-6xl font-black text-white uppercase tracking-tighter">Events &<br/><span className="text-blue-500">Challenges</span></h2>
          </div>
          <p className="text-gray-500 max-w-sm mb-2 text-sm leading-relaxed">
            From regional competitions to nationwide summits, we provide the platform you need to launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative h-[550px] rounded-[2.5rem] overflow-hidden group cursor-pointer border border-white/5 transition-all duration-500 hover:border-white/20 hover:shadow-2xl ${event.accent}`}
            >
              <img 
                src={event.img} 
                alt={event.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-50"
              />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="w-12 h-1 bg-blue-500 rounded-full mb-6 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                
                <h3 className="text-3xl font-black text-white mb-4 leading-none transform group-hover:-translate-y-2 transition-transform duration-500">
                  {event.title}
                </h3>
                
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 leading-relaxed font-light">
                  {event.desc}
                </p>

                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                   <button className="text-xs font-bold text-blue-400 tracking-[0.2em] uppercase flex items-center gap-2">
                     Learn More <span>→</span>
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
