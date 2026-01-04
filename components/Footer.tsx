
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <img 
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1678341670/Ecell%20website/E-Cell-Logo-White_qhkb0q.webp" 
              alt="E-Cell Logo" 
              className="h-16 w-auto mb-8"
            />
            <p className="text-gray-500 leading-relaxed text-sm mb-8">
              Empowering the next generation of innovators at NIT Silchar. We build, nurture, and grow the entrepreneurial ecosystem of North East India.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-500/30 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 tracking-widest uppercase text-xs">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Events', 'Our Team', 'Resources', 'Gallery'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 tracking-widest uppercase text-xs">Organisation</h4>
            <ul className="space-y-4">
              {['Startup Center', 'NIT Silchar', 'Assam, India', 'IIC Cell', 'Srijan Summit'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 tracking-widest uppercase text-xs">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Keep yourself updated. Subscribe to our monthly newsletter.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white text-sm focus:outline-none focus:border-blue-500 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-6">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} E-Cell, NIT Silchar. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-600 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-white text-xs transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 glass border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all z-40"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
