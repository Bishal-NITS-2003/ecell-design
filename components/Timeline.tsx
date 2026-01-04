
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Rocket, Target, Lightbulb, TrendingUp, Users } from 'lucide-react';

const timelineData = [
  { 
    id: 1, 
    title: 'Orientation', 
    icon: Users, 
    desc: 'Welcoming the new batches and introducing the entrepreneurial world of NIT Silchar.',
    color: 'from-blue-500 to-cyan-400'
  },
  { 
    id: 2, 
    title: 'EIC Challenge', 
    icon: Target, 
    desc: 'The annual Entrepreneurship & Innovation Challenge that tests grit and creativity.',
    color: 'from-purple-500 to-indigo-400'
  },
  { 
    id: 3, 
    title: 'Srijan Summit', 
    icon: Lightbulb, 
    desc: 'Our flagship summit featuring speakers, workshops, and networking with industry titans.',
    color: 'from-amber-500 to-orange-400'
  },
  { 
    id: 4, 
    title: 'Empressario', 
    icon: Rocket, 
    desc: 'The module where startups pitch, compete, and gain visibility within the regional ecosystem.',
    color: 'from-emerald-500 to-teal-400'
  },
  { 
    id: 5, 
    title: 'Incubation', 
    icon: TrendingUp, 
    desc: 'Full support for pre-selected startups through IIC to scale their business models.',
    color: 'from-rose-500 to-pink-400'
  },
];

const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-40 relative overflow-hidden bg-gray-950/20">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
          <h2 className="text-5xl font-black text-white mb-6 tracking-tighter uppercase italic">The Roadmap</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
            A step-by-step journey from ideation to incubation, nurturing the entrepreneurs of the future.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line background */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2" />
          
          {/* Animated progress line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />

          <div className="flex flex-col gap-24 relative z-20">
            {timelineData.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex items-center gap-10 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content Side */}
                <div className="flex-1 md:text-right md:pr-20 group">
                  <div className={`glass p-8 rounded-3xl border border-white/5 transition-all duration-500 group-hover:border-blue-500/20 group-hover:bg-white/5 ${i % 2 !== 0 ? 'md:text-left md:pl-20 md:pr-8' : ''}`}>
                    <h4 className="text-white font-black text-2xl mb-3">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                {/* Icon Circle */}
                <div className="relative flex-shrink-0 w-20 h-20 rounded-full glass border-2 border-white/10 flex items-center justify-center z-30 bg-gray-900 group-hover:scale-110 transition-transform shadow-2xl">
                  <div className={`absolute inset-1 rounded-full bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <item.icon className="text-gray-300 group-hover:text-white transition-colors" size={30} />
                  <div className="absolute -right-2 -top-2 w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold">0{i+1}</div>
                </div>

                {/* Empty Side for Desktop alignment */}
                <div className="hidden md:flex flex-1 pl-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
