
import React from 'react';
import { motion } from 'framer-motion';

const WhoAreWe: React.FC = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-white mb-12 tracking-tight uppercase"
        >
          Who are <span className="text-blue-500">we?</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl leading-relaxed font-light"
        >
          Entrepreneurship Cell, NIT Silchar is a non-profit organization that aims to foster the spirit of entrepreneurship among the student community. We provide a platform for budding entrepreneurs to hone their skills, network with like-minded individuals, and gain exposure to the startup world. Our mission is to create a culture of innovation and problem-solving, and to empower the visionaries of tomorrow, today. Through our various initiatives, events, and workshops, we strive to build a solid entrepreneurial ecosystem on campus and beyond.
        </motion.p>
      </div>
    </section>
  );
};

export default WhoAreWe;
