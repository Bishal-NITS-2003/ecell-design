
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

const mentors = [
  {
    name: "Prof. Rahul Dev Misra",
    role: "IIC President, NIT Silchar",
    desc: "Professor in the mechanical engineering department and the president of IIC, NIT Silchar. He is the backbone of the innovation ecosystem.",
    img: "https://res.cloudinary.com/ecell/image/upload/v1756627441/IMG_174134284467cac87c778b1_kzqtmj.jpg",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Dr. Wasim Arif",
    role: "Convener IIC, NIT Silchar",
    desc: "Associate professor in the department of ECE and faculty advisor at E-Cell. A guiding support and visionary for the organization.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400", // High quality placeholder
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Dr. A.B. Deoghare",
    role: "Asso Prof, Mechanical Engg",
    desc: "Associate professor in the department of mechanical engineering and supports E-Cell organization as a primary faculty advisor.",
    img: "https://res.cloudinary.com/dfriijrmr/image/upload/v1677474386/GalleryPage/Orientation%202022-2023/IMG_1558_vjql6g.jpg",
    linkedin: "#",
    twitter: "#"
  }
];

const MentorCard: React.FC<{ mentor: typeof mentors[0]; index: number }> = ({ mentor, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full perspective-1000 group"
    >
      <div className="glass rounded-[3rem] p-8 md:p-12 border border-white/10 h-full flex flex-col items-center text-center transition-all duration-500 hover:border-blue-500/30 group-hover:bg-white/[0.04]">
        {/* Profile Image with Ring Interaction */}
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="relative w-44 h-44 mb-10"
        >
          <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 scale-110 group-hover:scale-125 transition-transform duration-700" />
          <div className="absolute inset-0 rounded-full border border-blue-500/10 scale-125 group-hover:scale-150 transition-transform duration-1000 opacity-50" />
          
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/5 relative z-10 shadow-2xl">
            <img 
              src={mentor.img} 
              alt={mentor.name} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
            />
          </div>

          {/* Floating Social Badge */}
          <motion.div 
            style={{ translateZ: "70px" }}
            className="absolute -bottom-2 -right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"
          >
            <a href={mentor.linkedin} className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
              <Linkedin size={18} />
            </a>
            <a href={mentor.twitter} className="w-10 h-10 rounded-full bg-black border border-white/10 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
              <Twitter size={18} />
            </a>
          </motion.div>
        </div>

        {/* Text Content */}
        <div style={{ transform: "translateZ(30px)" }}>
          <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">
            {mentor.name}
          </h3>
          <p className="text-blue-500 text-xs font-black tracking-[0.2em] uppercase mb-6 bg-blue-500/5 py-1 px-4 rounded-full inline-block">
            {mentor.role}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed font-light italic px-4">
            "{mentor.desc}"
          </p>
        </div>

        {/* Interactive Link */}
        <motion.div 
          style={{ transform: "translateZ(20px)" }}
          className="mt-8 pt-8 border-t border-white/5 w-full flex justify-center"
        >
          <button className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 group-hover:text-white transition-colors">
            View Portfolio <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Pillars: React.FC = () => {
  return (
    <section className="py-40 relative overflow-hidden bg-gray-950/20">
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none select-none overflow-hidden">
        <span className="absolute -top-10 -left-20 text-[20rem] font-black text-white/5">GUIDANCE</span>
        <span className="absolute -bottom-20 -right-20 text-[20rem] font-black text-white/5 rotate-12">VISION</span>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter italic">
              The <span className="text-blue-500">Pillars</span>
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 rounded-full mx-auto mb-8" />
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Meet the visionaries and faculty mentors who provide the strategic backbone and unwavering support for E-Cell's exponential growth.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {mentors.map((mentor, i) => (
            <MentorCard key={i} mentor={mentor} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
