
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';

const mottoData = [
  {
    title: "Inspire",
    text: "Inspiring Ideas, Igniting Innovation. We encourage students to brainstorm innovative ideas and nurture their creativity.",
    img: "https://res.cloudinary.com/dp92qug2f/image/upload/v1680524127/Ecell%20website/moto/moto-1_uoycz4.webp",
    color: "from-blue-500/20"
  },
  {
    title: "Guide",
    text: "Guiding You Towards Success. We provide guidance in form of mentorship programs, workshops, and networking events.",
    img: "https://res.cloudinary.com/dp92qug2f/image/upload/v1680524127/Ecell%20website/moto/moto-2_hvs2rq.webp",
    color: "from-purple-500/20"
  },
  {
    title: "Transform",
    text: "Transforming Ideas into Reality. We provide incubation facilities and funding support to promising startups.",
    img: "https://res.cloudinary.com/dp92qug2f/image/upload/v1680524128/Ecell%20website/moto/moto-3_thwnrc.webp",
    color: "from-emerald-500/20"
  },
  {
    title: "Connect",
    text: "Connecting Ideas, Building Networks. We organize events to showcase ideas and connect with investors.",
    img: "https://res.cloudinary.com/dp92qug2f/image/upload/v1680524127/Ecell%20website/moto/moto-4_krbq3h.webp",
    color: "from-amber-500/20"
  },
  {
    title: "Community",
    text: "Creating a Community of Entrepreneurs. We aim to celebrate success stories and inspire students.",
    img: "https://res.cloudinary.com/dp92qug2f/image/upload/v1680524130/Ecell%20website/moto/moto-5_jzewcc.webp",
    color: "from-rose-500/20"
  }
];

const MottoCard: React.FC<{ item: typeof mottoData[0]; index: number }> = ({ item, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // For the spotlight effect
  const spotlightX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const spotlightY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[420px] w-full rounded-[2.5rem] glass border border-white/5 p-10 flex flex-col items-center text-center group cursor-pointer overflow-hidden"
    >
      {/* Dynamic Background Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Spotlight Effect Overlay */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([sx, sy]) => `radial-gradient(circle at ${sx} ${sy}, rgba(255,255,255,0.08) 0%, transparent 80%)`
          )
        }}
      />

      <motion.div 
        style={{ transform: "translateZ(80px)" }}
        className="mb-8 relative"
      >
        <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700" />
        <motion.img 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          src={item.img} 
          alt={item.title} 
          className="h-24 w-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative z-10" 
        />
      </motion.div>

      <h3 
        style={{ transform: "translateZ(60px)" }}
        className="text-3xl font-black text-white mb-5 tracking-tight group-hover:text-blue-400 transition-colors"
      >
        {item.title}
      </h3>
      
      <p 
        style={{ transform: "translateZ(40px)" }}
        className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors"
      >
        {item.text}
      </p>

      {/* Decorative Corner Element */}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-20 transition-opacity">
         <div className="w-8 h-8 border-t-2 border-r-2 border-white rounded-tr-xl" />
      </div>
    </motion.div>
  );
};

const Motto: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-40 relative overflow-hidden bg-[#020617]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <h2 className="text-6xl font-black text-white mb-6 uppercase tracking-tighter italic">
              Our <span className="text-blue-500">Motto</span>
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
              className="h-1.5 bg-gradient-to-r from-blue-600 to-transparent rounded-full" 
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-gray-500 mt-8 max-w-xl mx-auto text-lg font-light"
          >
            The five core values that drive our mission to cultivate the next wave of disruptive entrepreneurs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {mottoData.map((item, i) => (
            <MottoCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Motto;
