
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-40 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.03] select-none pointer-events-none">
        <span className="text-[20rem] font-black absolute top-0 -left-20">QUOTES</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-[3rem] p-12 md:p-20 border border-white/10 flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500/20 mb-6">
                <img 
                  src="https://res.cloudinary.com/dp92qug2f/image/upload/v1678340666/Ecell%20website/testimonial/mayank_webp_khudax.webp" 
                  alt="Mayank Yadav" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-white">Mayank Yadav</h3>
              <p className="text-blue-400 text-sm text-center mt-1">Senior Director (Products) @ Turing</p>
            </div>

            <div className="md:w-2/3 relative">
              <Quote className="text-blue-500/20 absolute -top-10 -left-6" size={80} />
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light italic mb-10">
                "It was nostalgic to see NIT Silchar students and faculty. I really enjoyed the candid conversation with students and the energy in the room to do something big. Would love to come back soon and work towards building a solid entrepreneurial ecosystem in the campus."
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
