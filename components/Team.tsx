
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Linkedin, Github, ChevronDown, Sparkles } from 'lucide-react';

const seniorDevs = [
  { name: "Ayush Singh", role: "Senior UI/UX Developer", img: "https://res.cloudinary.com/dw3n9vflw/image/upload/v1756898039/ayush_bh_ogxptn.jpg", socials: true },
  { name: "Bishal Das", role: "Senior Web Developer", img: "https://res.cloudinary.com/dddcd0hco/image/upload/v1724540788/1703525292449_-_ME_054_Bishal_Das_qgth4a.webp", socials: true },
  { name: "Gulista Khatun", role: "Senior Web Associate", img: "https://res.cloudinary.com/dw3n9vflw/image/upload/v1756833166/IMG_20240817_191401_-_Gulista_Khatun_dp2nu0.jpg", socials: true },
  { name: "Muskan Bharti", role: "Senior Web Developer", img: "https://res.cloudinary.com/dddcd0hco/image/upload/v1724541726/20240815_145722_-_MUSKAN_BHARTI_wro0mk.webp", socials: true },
  { name: "Premansh Chakraborty", role: "Senior Flutter Developer", img: "https://res.cloudinary.com/dddcd0hco/image/upload/v1724541172/Screenshot_2024_0814_002329_-_Preeti_Chakraborty_axjy7c.webp", socials: true }
];

const juniorDevs = [
  { name: "Anusna Pradhan", role: "Junior UI/UX Developer", img: "https://res.cloudinary.com/dw3n9vflw/image/upload/v1756827501/20240710_210335_-_ANUSNA_PRADHAN_zda2vh.jpg", socials: true },
  { name: "Ayushman Swain", role: "Junior Web Developer", img: "https://res.cloudinary.com/dw3n9vflw/image/upload/v1756824571/20241002_165333_-_Ayushman_Swain_dlwkfw.jpg", socials: true },
  { name: "Debangshu Mounas", role: "Junior Flutter Developer", img: "https://res.cloudinary.com/dw3n9vflw/image/upload/v1756827078/IMG-20241103-WA0103_2_-_Debangshu_Mounas_bkldr8.jpg", socials: true },
  { name: "Dhruba Agarwalla", role: "Junior Web Developer", img: "https://res.cloudinary.com/dw3n9vflw/image/upload/v1756822796/dhruba_igzhj2.jpg", socials: true },
  { name: "Harshit Agarwal", role: "Junior Web Developer", img: "https://res.cloudinary.com/dw3n9vflw/image/upload/v1756918762/hars_az1761.jpg", socials: true },
  { name: "Madhurjya Kaushik", role: "Junior Web Developer", img: "https://res.cloudinary.com/dw3n9vflw/image/upload/v1756826090/sas_-_MADHURJYA_KAUSHIK_b9snbk.jpg", socials: true },
  { name: "Md.Iqbal", role: "Junior Web Developer", img: "https://res.cloudinary.com/dw3n9vflw/image/upload/v1756825794/WhatsApp_Image_2025-08-26_at_20.22.07_-_Iqbal_gxcvbq.jpg", socials: true },
  { name: "Muskan Agarwala", role: "Junior Web Developer", img: "https://res.cloudinary.com/dw3n9vflw/image/upload/v1756821225/IMG20241012213516_2_yi7h1r.jpg", socials: true },
  { name: "shovit sharma", role: "Junior UI/UX Developer", img: "https://res.cloudinary.com/dw3n9vflw/image/upload/v1756824950/shovit_2025_-_Shovit__Sharma_13_tegrz6.jpg", socials: true },
  { name: "Swarup Das", role: "Junior Web Developer", img: "https://res.cloudinary.com/dw3n9vflw/image/upload/v1756825528/WhatsApp_Image_2024-12-11_at_22.00.26_-_Swarup_Das_jdiiqe.jpg", socials: true },
  { name: "Swastika Paul", role: "Junior Web Developer", img: "https://res.cloudinary.com/dw3n9vflw/image/upload/v1756825291/IMG_20250212_153350_090_-_Swastika_Paul_dai8it.webp", socials: true },
  { name: "Nabonit Paul", role: "Junior Web Developer", img: "https://res.cloudinary.com/dw3n9vflw/image/upload/v1756826881/IMG20250827132137_3_-_Nabonit_Paul_bkfes8.jpg", socials: true }
];

const categories = ['FACULTIES', 'ALUMNI', 'CORE TEAM 2025-2026', 'DEVELOPERS'];

interface MemberCardProps {
  name: string;
  role: string;
  img: string;
  socials?: boolean;
  index: number;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, role, img, socials, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    className="glowing-border group cursor-default"
  >
    <div className="bg-[#0c1324] rounded-[2.5rem] overflow-hidden p-5 md:p-6 shadow-2xl transition-all duration-500 border border-white/5">
      <div className="aspect-[4/5] overflow-hidden rounded-[2rem] relative">
        <img 
          src={img} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-out" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1324] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
      </div>
      
      <div className="pt-8 pb-4 text-center">
        <h3 className="text-2xl md:text-3xl font-black text-white italic mb-2 uppercase tracking-tight group-hover:text-blue-400 transition-colors">
          {name}
        </h3>
        <p className="text-[10px] md:text-[11px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-6">
          {role}
        </p>
        
        {socials && (
          <div className="flex justify-center gap-6 mt-2 opacity-50 group-hover:opacity-100 transition-all duration-300">
            <Facebook size={18} className="hover:text-blue-500 cursor-pointer transition-colors" />
            <Linkedin size={18} className="hover:text-blue-400 cursor-pointer transition-colors" />
            <Github size={18} className="hover:text-white cursor-pointer transition-colors" />
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const Team: React.FC = () => {
  const [activeTab, setActiveTab] = useState('DEVELOPERS');

  return (
    <div className="bg-transparent">
      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-[500px] border-b border-white/5 overflow-hidden">
        <div className="w-full lg:w-1/2 px-12 lg:px-24 z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-6 uppercase italic">
              Meet our <br />
              <span className="text-blue-500">Excellent</span> <br />
              Team Members
            </h1>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 h-[400px] lg:h-[700px] relative">
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200" 
              alt="Team members collaborating" 
              className="w-full h-full object-cover brightness-50 contrast-110"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-transparent lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent lg:hidden block" />
        </div>
      </section>

      {/* 2. TAB NAVIGATION */}
      <section className="sticky top-20 z-40 bg-[#020617]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-16 py-8 px-6">
          {categories.map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`text-[12px] md:text-[14px] font-black transition-all uppercase tracking-widest relative py-2 group ${
                activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab === 'CORE TEAM 2025-2026' ? (
                <span className="flex items-center gap-2">CORE TEAM 2025-2026 <ChevronDown size={14} /></span>
              ) : tab}
              
              <AnimatePresence>
                {activeTab === tab && (
                  <motion.div 
                    layoutId="tabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>
      </section>

      {/* 3. SENIOR DEVELOPERS GRID */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center mb-24"
          >
            <div className="flex items-center gap-3 mb-4 text-blue-500">
              <Sparkles size={20} className="animate-pulse" />
              <span className="text-xs font-black tracking-[0.4em] uppercase">The Core Architects</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-center text-white uppercase tracking-tighter leading-none italic">Senior Developers</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {seniorDevs.map((dev, i) => (
              <MemberCard 
                key={dev.name} 
                {...dev} 
                index={i} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. JUNIOR DEVELOPERS GRID */}
      <section className="py-32 bg-white/0 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-black text-center text-white uppercase tracking-tighter leading-none italic">Junior Developers</h2>
            <div className="h-1 w-24 bg-blue-600 mt-6 rounded-full opacity-50 shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {juniorDevs.map((dev, i) => (
              <MemberCard 
                key={dev.name} 
                {...dev} 
                index={i} 
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
