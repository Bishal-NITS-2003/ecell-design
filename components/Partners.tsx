
import React from 'react';
import { motion } from 'framer-motion';

const Partners: React.FC = () => {
  const partners = [
    { name: 'ED Times', url: 'https://res.cloudinary.com/dp92qug2f/image/upload/v1685354010/Ecell%20website/edtimes_logo_bhl4ec.webp' },
    { name: 'Payzaql', url: 'https://res.cloudinary.com/draptrzrc/image/upload/v1707558984/Payzaql.webp' },
    { name: 'Cubelelo', url: 'https://res.cloudinary.com/dp92qug2f/image/upload/v1676989598/collaboration-ecell/Cubeleloresized_jimc2g.png' },
    { name: 'Black Marble', url: 'https://res.cloudinary.com/dp92qug2f/image/upload/v1676990266/collaboration-ecell/blackmarble00_q3mowc.png' },
    { name: 'GFG', url: 'https://res.cloudinary.com/dp92qug2f/image/upload/v1676990589/collaboration-ecell/gfgre_xzhxha.png' },
    { name: 'Assam StartUp', url: 'https://res.cloudinary.com/dp92qug2f/image/upload/v1676990737/collaboration-ecell/assamStartUpres_n2fbxv.png' },
  ];

  // Double the list for seamless infinite scroll
  const marqueeItems = [...partners, ...partners];

  return (
    <section className="py-24 border-y border-white/5 bg-gray-950/20 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <h3 className="text-center text-xs font-bold tracking-[0.4em] text-gray-500 uppercase">
          Trusted Partners & Collaborators
        </h3>
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div 
          animate={{ x: [0, -100 * partners.length] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-20 items-center whitespace-nowrap px-10"
        >
          {marqueeItems.map((partner, i) => (
            <div
              key={i}
              className="w-40 md:w-56 h-16 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <img 
                src={partner.url} 
                alt={partner.name} 
                className="h-full w-auto object-contain brightness-0 invert"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-24 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-[3rem] max-w-4xl mx-auto border border-white/10 relative group"
        >
          <div className="absolute inset-0 bg-blue-500/5 rounded-[3rem] blur-xl group-hover:bg-blue-500/10 transition-colors" />
          <p className="relative text-gray-400 text-center text-lg leading-relaxed italic">
            "We are incredibly fortunate to have <span className="text-blue-400 font-semibold">ED Times</span> as our sponsor. Their platform's unique take on youth culture and news is unparalleled. We extend our heartfelt gratitude for their unwavering support in making our vision a reality."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
