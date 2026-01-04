
import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { Sparkles, ArrowRight, Activity } from 'lucide-react';

const StatCounter: React.FC<{ value: number; label: string; suffix?: string }> = ({ value, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="group cursor-default">
      <motion.div 
        className="text-4xl md:text-5xl font-black text-white mb-2 flex items-baseline gap-1"
        whileHover={{ scale: 1.05, x: 5 }}
      >
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">{count}</span>
        <span className="text-blue-500 text-2xl">{suffix}</span>
      </motion.div>
      <p className="text-gray-500 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase group-hover:text-gray-400 transition-colors">{label}</p>
    </div>
  );
};

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse interaction
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Image Card Tilt Logic
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const cardRotateX = useTransform(useSpring(cardY), [0, 600], [10, -10]);
  const cardRotateY = useTransform(useSpring(cardX), [0, 800], [-10, 10]);

  const handleCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    cardX.set(e.clientX - rect.left);
    cardY.set(e.clientY - rect.top);
  };

  return (
    <section 
      id="about" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-24 md:py-32 relative overflow-hidden bg-[#020617]"
    >
      {/* Interactive Background Glow */}
      <motion.div 
        style={{
          left: springX,
          top: springY,
        }}
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] z-0 hidden lg:block"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-24">
          
          {/* TEXT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full glass border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-[0.3em] uppercase">
              <Activity size={14} />
              Our Ecosystem
            </div>
            
            <h2 className="text-4xl md:text-7xl font-black mb-8 text-white leading-[1.1] tracking-tighter">
              Pioneering <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-400 via-blue-200 to-white bg-clip-text text-transparent">Entrepreneurship</span>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute -bottom-2 left-0 h-2 bg-blue-600/20 -z-10 rounded-full" 
                />
              </span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 font-light max-w-xl mx-auto lg:mx-0">
              E-Cell, NIT Silchar is a non-profit powerhouse. We don't just teach business; we <span className="text-white font-medium">architect ambition</span>. By providing pre-incubation, mentorship, and a high-octane community.
            </p>

            <div className="grid grid-cols-2 gap-8 md:gap-12 mb-12 max-w-sm mx-auto lg:mx-0">
              <StatCounter value={50} label="Active Startups" suffix="+" />
              <StatCounter value={20} label="Global Partners" suffix="+" />
            </div>

            <motion.button 
              whileHover={{ x: 10 }}
              className="flex items-center justify-center lg:justify-start gap-3 text-blue-500 font-bold tracking-widest text-sm uppercase group"
            >
              Explore our mission 
              <span className="w-8 h-[2px] bg-blue-500/30 group-hover:w-12 transition-all duration-300 relative">
                <ArrowRight size={16} className="absolute -right-2 -top-2" />
              </span>
            </motion.button>
          </motion.div>

          {/* INTERACTIVE IMAGE CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 perspective-2000 mt-12 lg:mt-0"
          >
            <motion.div
              onMouseMove={handleCardMove}
              onMouseLeave={() => { cardX.set(400); cardY.set(300); }}
              style={{
                rotateX: cardRotateX,
                rotateY: cardRotateY,
                transformStyle: "preserve-3d"
              }}
              className="relative aspect-[4/5] md:aspect-square w-full max-w-md mx-auto"
            >
              {/* Main Image Glass Container */}
              <div className="absolute inset-0 glass rounded-[2.5rem] md:rounded-[3rem] p-3 md:p-4 border border-white/10 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/0 transition-colors z-10 pointer-events-none" />
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                  alt="Innovation Lab" 
                  className="w-full h-full object-cover rounded-[1.8rem] md:rounded-[2.2rem] grayscale-[0.8] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>

              {/* Floating Element 1: Badge (EST 2012) */}
              <motion.div 
                style={{ translateZ: "100px" }}
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 glass px-4 py-4 md:px-6 md:py-6 rounded-2xl md:rounded-3xl border border-white/20 shadow-2xl z-20"
              >
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center mb-1">
                    <Sparkles className="text-white" size={16} />
                  </div>
                  <span className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase tracking-tighter">Est.</span>
                  <span className="text-lg md:text-xl font-black text-white leading-none">2012</span>
                </div>
              </motion.div>

              {/* Floating Element 2: Decorative Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ translateZ: "-30px" }}
                className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 w-48 h-48 md:w-64 md:h-64 border-2 border-dashed border-blue-500/15 rounded-full pointer-events-none"
              />

              {/* Floating Element 3: Text Tag */}
              <motion.div 
                style={{ translateZ: "150px" }}
                className="absolute bottom-8 -right-4 md:bottom-10 md:-right-10 glass px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl border border-white/10 shadow-2xl z-20"
              >
                <p className="text-[10px] md:text-xs font-bold text-blue-400 tracking-widest uppercase whitespace-nowrap">Incubating Ideas</p>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
