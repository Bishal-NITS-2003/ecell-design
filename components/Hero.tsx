import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  // Multiple spring levels for different depths
  const slowSpringConfig = { stiffness: 20, damping: 40 };
  const midSpringConfig = { stiffness: 40, damping: 30 };
  const fastSpringConfig = { stiffness: 60, damping: 20 };

  const springSlowX = useSpring(mouseX, slowSpringConfig);
  const springSlowY = useSpring(mouseY, slowSpringConfig);
  const springMidX = useSpring(mouseX, midSpringConfig);
  const springMidY = useSpring(mouseY, midSpringConfig);
  const springFastX = useSpring(mouseX, fastSpringConfig);
  const springFastY = useSpring(mouseY, fastSpringConfig);

  // Parallax transforms based on depth
  // Distant stars (move very little)
  const distantX = useTransform(springSlowX, [-800, 800], [15, -15]);
  const distantY = useTransform(springSlowY, [-800, 800], [15, -15]);

  // Nebula clouds (move slightly more)
  const nebulaX = useTransform(springMidX, [-800, 800], [40, -40]);
  const nebulaY = useTransform(springMidY, [-800, 800], [40, -40]);

  // Grid and mid-particles
  const midX = useTransform(springMidX, [-800, 800], [70, -70]);
  const midY = useTransform(springMidY, [-800, 800], [70, -70]);

  // Main text and floating motes (move most)
  const textX = useTransform(springFastX, [-800, 800], [-50, 50]);
  const textY = useTransform(springFastY, [-800, 800], [-50, 50]);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.85]);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#020617] cursor-default"
    >
      {/* BACKGROUND PARALLAX LAYERS */}
      
      {/* 1. DISTANT LAYER: Background Stars */}
      <motion.div 
        style={{ x: distantX, y: distantY }}
        className="absolute inset-[-5%] z-0 pointer-events-none"
      >
        <StarField count={100} size={1} opacity={0.3} />
      </motion.div>

      {/* 2. DEEP LAYER: Nebula Glows */}
      <motion.div 
        style={{ x: nebulaX, y: nebulaY }}
        className="absolute inset-[-10%] z-0 pointer-events-none"
      >
        <div className="absolute top-[10%] left-[10%] w-[70vw] h-[70vw] bg-blue-600/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-[5%] right-[5%] w-[60vw] h-[60vw] bg-purple-600/5 rounded-full blur-[180px]" />
      </motion.div>

      {/* 3. INTERACTIVE LAYER: Mouse Follower Spotlight */}
      <motion.div 
        style={{
          left: useTransform(springFastX, (v) => v + window.innerWidth / 2),
          top: useTransform(springFastY, (v) => v + window.innerHeight / 2),
        }}
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-500/10 rounded-full blur-[140px] z-0"
      />

      {/* 4. GRID LAYER: Structural Grid */}
      <motion.div 
        style={{ 
          x: useTransform(springMidX, (v) => v * 0.05), 
          y: useTransform(springMidY, (v) => v * 0.05),
          backgroundImage: `radial-gradient(circle, #3b82f6 0.5px, transparent 0.5px)`, 
          backgroundSize: '60px 60px' 
        }}
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
      />

      {/* 5. MID LAYER: Interactive Stardust */}
      <motion.div style={{ x: midX, y: midY }} className="absolute inset-[-5%] z-0 pointer-events-none">
        <StardustField count={50} />
      </motion.div>

      {/* 6. FRONT LAYER: Floating Motes (Close to camera) */}
      <motion.div style={{ x: textX, y: textY }} className="absolute inset-[-15%] z-10 pointer-events-none">
        <StarField count={15} size={3} opacity={0.6} blur={1} />
      </motion.div>

      {/* FOREGROUND CONTENT */}
      <motion.div 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="container mx-auto px-6 relative z-20 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 mb-8 px-6 py-2.5 rounded-full glass border border-blue-400/20 text-blue-400 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase shadow-2xl shadow-blue-500/10"
        >
          <Sparkles size={14} className="animate-pulse text-blue-300" />
          The Future of Innovation Starts Here
        </motion.div>

        <motion.div 
          style={{ x: textX, y: textY }}
          className="relative perspective-2000"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(5rem,22vw,16rem)] font-black tracking-tighter leading-none mb-2 text-white drop-shadow-[0_0_80px_rgba(37,99,235,0.2)] selection:bg-blue-500/30"
          >
            E-CELL
          </motion.h1>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.5, delay: 0.5, ease: "circOut" }}
            className="h-[2px] w-full max-w-4xl mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-60"
          />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-4xl font-light tracking-[0.5em] text-gray-400/80 mt-16 mb-12 uppercase"
        >
          Entrepreneurship Cell <span className="text-blue-500 font-extrabold tracking-tight">NIT SILCHAR</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="max-w-4xl mx-auto min-h-[5rem] text-xl md:text-2xl text-gray-300/60 font-light leading-relaxed px-4"
        >
          <TypingAnimation />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative px-14 py-6 bg-blue-600 rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_25px_60px_rgba(37,99,235,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 text-white font-black tracking-wide text-lg flex items-center gap-3">
              Explore Our Vision <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </span>
          </button>
          
          <button className="group px-14 py-6 glass border border-white/10 text-white font-bold rounded-2xl transition-all hover:bg-white/5 hover:border-white/20 hover:scale-105 active:scale-95">
            Join the Community
          </button>
        </motion.div>
      </motion.div>

      {/* BOTTOM SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer group"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[9px] uppercase tracking-[0.6em] font-semibold text-gray-500 group-hover:text-blue-400 transition-colors">Discover</span>
        <div className="relative w-7 h-11 border-2 border-white/10 rounded-full p-1.5 group-hover:border-blue-500/30 transition-colors">
          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          />
        </div>
      </motion.div>
    </section>
  );
};

interface StarFieldProps {
  count: number;
  size: number;
  opacity: number;
  blur?: number;
}

const StarField: React.FC<StarFieldProps> = ({ count, size, opacity, blur = 0 }) => {
  const stars = useRef([...Array(count)].map(() => ({
    top: Math.random() * 100 + "%",
    left: Math.random() * 100 + "%",
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
  })));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.current.map((star, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, opacity, 0] }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
          style={{
            position: 'absolute',
            top: star.top,
            left: star.left,
            width: size + 'px',
            height: size + 'px',
            backgroundColor: 'white',
            borderRadius: '50%',
            filter: blur ? `blur(${blur}px)` : 'none',
            boxShadow: `0 0 ${size * 2}px white`,
          }}
        />
      ))}
    </div>
  );
};

const StardustField: React.FC<{ count: number }> = ({ count }) => {
  const particles = useRef([...Array(count)].map(() => ({
    left: Math.random() * 100 + "%",
    top: Math.random() * 100 + "%",
    size: Math.random() * 2 + 1,
    duration: 15 + Math.random() * 25,
    delay: Math.random() * -20,
  })));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.current.map((p, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ 
            y: ["-20%", "120%"],
            opacity: [0, 0.6, 0]
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            left: p.left,
            top: p.top,
            width: p.size + 'px',
            height: p.size + 'px',
            backgroundColor: '#60a5fa',
            borderRadius: '50%',
            boxShadow: `0 0 12px #3b82f6`,
          }}
        />
      ))}
    </div>
  );
};

const TypingAnimation: React.FC = () => {
  const sentences = [
    "The path to a successful business career is now easier and less messy.",
    "Cultivating a culture of innovation and problem-solving.",
    "Empowering the visionaries of tomorrow, today.",
    "NIT Silchar's premier entrepreneurship hub."
  ];
  
  const [text, setText] = useState('');
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSentence = sentences[sentenceIndex];
    const typingSpeed = isDeleting ? 25 : 55;
    const pauseDuration = isDeleting ? 100 : 3500;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentSentence.length) {
        setText(currentSentence.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentSentence.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentSentence.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else {
        setIsDeleting(false);
        setSentenceIndex((sentenceIndex + 1) % sentences.length);
        setCharIndex(0);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, sentenceIndex, sentences]);

  return (
    <span className="text-gray-400/80 tracking-wide italic font-medium">
      {text}
      <motion.span 
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.9 }}
        className="inline-block w-[3px] h-[1.1em] bg-blue-500 ml-1 align-middle"
      />
    </span>
  );
};

export default Hero;