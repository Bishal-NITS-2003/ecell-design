
import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section className="py-32 bg-gray-950/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-5xl font-extrabold text-white mb-6 uppercase tracking-tight">Contact <span className="text-blue-500">Us</span></h2>
            <p className="text-gray-400 text-lg mb-12">
              Have a query? Thinking of collaborating? Feel free to drop a message and our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-blue-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Location</h4>
                  <p className="text-gray-500 text-sm">Startup Centre, NIT Silchar, Assam</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-blue-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Email</h4>
                  <p className="text-gray-500 text-sm">ecell@nits.ac.in</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-blue-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Phone</h4>
                  <p className="text-gray-500 text-sm">+91 6388689290</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <form className="space-y-6 bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 glass">
              <div>
                <label className="block text-gray-400 text-sm font-bold mb-2 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-bold mb-2 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-bold mb-2 ml-1">Your Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your idea..." 
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <button className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all hover:shadow-[0_10px_40px_rgba(37,99,235,0.3)] flex items-center justify-center gap-3">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
