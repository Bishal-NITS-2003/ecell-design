
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Camera, ChevronDown, Sparkles, Image as ImageIcon } from 'lucide-react';

const GalleryHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  };

  const springConfig = { stiffness: 100, damping: 30 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.9]);
  const y = useTransform(scrollY, [0, 600], [0, 100]);

  // Image cards in background
  const cardTranslateX = useTransform(smoothMouseX, [-0.5, 0.5], [30, -30]);
  const cardTranslateY = useTransform(smoothMouseY, [-0.5, 0.5], [30, -30]);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BACKGROUND CINEMATIC CARDS */}
      <motion.div 
        style={{ x: cardTranslateX, y: cardTranslateY, opacity: 0.2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <FloatingCard 
          url="https://res.cloudinary.com/dbtifxo6g/image/upload/v1728816666/_DSC0030_cuqhmk.webp" 
          top="15%" left="10%" rotation={-15} scale={1.2} delay={0} 
        />
        <FloatingCard 
          url="https://res.cloudinary.com/dbtifxo6g/image/upload/v1728816050/IMG_5208_ehvq22.webp" 
          top="60%" left="15%" rotation={10} scale={0.8} delay={0.2} 
        />
        <FloatingCard 
          url="https://res.cloudinary.com/dtt4ftdrw/image/upload/v1749193715/Copy_of__DSC0262_hx2ohi.jpg" 
          top="10%" right="12%" rotation={12} scale={1.1} delay={0.4} 
        />
        <FloatingCard 
          url="https://res.cloudinary.com/dbtifxo6g/image/upload/v1728816238/DSC_0071_knpcn4.webp" 
          bottom="15%" right="10%" rotation={-8} scale={0.9} delay={0.6} 
        />
      </motion.div>

      {/* CONTENT */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex items-center gap-3 px-6 py-2 rounded-full glass border border-blue-400/20 text-blue-400 text-[10px] font-black tracking-[0.4em] uppercase"
        >
          <Camera size={14} className="animate-pulse" />
          The Digital Chronicles
        </motion.div>

        <div className="relative mb-12">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(4rem,20vw,14rem)] font-black text-white leading-none tracking-[-0.05em] uppercase italic selection:bg-blue-500/50 drop-shadow-[0_0_80px_rgba(37,99,235,0.2)]"
          >
            GALLERY
          </motion.h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 1.5 }}
            className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"
          />
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-2xl text-lg md:text-2xl text-gray-400 font-light leading-relaxed tracking-wide"
        >
          A cinematic journey through a decade of <span className="text-white font-bold italic">innovation</span>, <span className="text-blue-500">leadership</span>, and entrepreneurial <span className="text-white">excellence</span>.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16"
        >
          <button 
            onClick={() => document.getElementById('visual-records')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex flex-col items-center gap-4 text-gray-500 hover:text-blue-400 transition-colors"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em]">Explore Gallery</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-8 h-12 rounded-full border border-white/10 flex items-start justify-center p-2 group-hover:border-blue-500/30"
            >
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            </motion.div>
          </button>
        </motion.div>
      </motion.div>

      {/* AMBIENT OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/0 via-[#020617]/50 to-[#020617] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />
    </section>
  );
};

const FloatingCard: React.FC<{ url: string; top?: string; left?: string; right?: string; bottom?: string; rotation: number; scale: number; delay: number }> = ({ url, top, left, right, bottom, rotation, scale, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.5, rotate: rotation - 20 }}
    animate={{ opacity: 1, scale: scale, rotate: rotation }}
    transition={{ duration: 1.5, delay, ease: [0.16, 1, 0.3, 1] }}
    className="absolute glass p-3 rounded-[2rem] border border-white/5 shadow-2xl overflow-hidden"
    style={{ top, left, right, bottom }}
  >
    <div className="aspect-square w-48 overflow-hidden rounded-[1.5rem]">
      <img src={url} alt="" className="w-full h-full object-cover grayscale opacity-60" />
    </div>
  </motion.div>
);

export default GalleryHero;
