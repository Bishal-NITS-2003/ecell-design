
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Calendar, Camera, ChevronDown, Check } from 'lucide-react';

const galleryImages = [
  { url: "https://res.cloudinary.com/dbtifxo6g/image/upload/v1728816666/_DSC0030_cuqhmk.webp", year: "2024-2025", event: "Orientation", aspect: "aspect-[3/4]" },
  { url: "https://res.cloudinary.com/dbtifxo6g/image/upload/v1728816238/DSC_0071_knpcn4.webp", year: "2024-2025", event: "Empressario", aspect: "aspect-[1/1]" },
  { url: "https://res.cloudinary.com/dbtifxo6g/image/upload/v1728816050/IMG_5208_ehvq22.webp", year: "2024-2025", event: "EIC", aspect: "aspect-[4/3]" },
  { url: "https://res.cloudinary.com/dbtifxo6g/image/upload/v1728816030/DSC_0009_qfbrku.webp", year: "2023-2024", event: "Srijan", aspect: "aspect-[3/5]" },
  { url: "https://res.cloudinary.com/dbtifxo6g/image/upload/v1728816003/DSC_0034_bvw8xq.webp", year: "2023-2024", event: "Orientation", aspect: "aspect-[4/5]" },
  { url: "https://res.cloudinary.com/dbtifxo6g/image/upload/v1728815991/IMG_5400_dql7kq.webp", year: "2024-2025", event: "Speaker Sessions", aspect: "aspect-[1/1]" },
  { url: "https://res.cloudinary.com/dbtifxo6g/image/upload/v1728469717/ecell%20cloudinary/k8zcrcdn3rlo3c2grmze.webp", year: "2022-2023", event: "Empressario", aspect: "aspect-[3/2]" },
  { url: "https://res.cloudinary.com/dbtifxo6g/image/upload/v1728469709/ecell%20cloudinary/srnwxbwwdhtcy7c4a9om.webp", year: "2022-2023", event: "Srijan", aspect: "aspect-[4/5]" },
  { url: "https://res.cloudinary.com/dtt4ftdrw/image/upload/v1749193841/Copy_of__DSC0113-1_aubufm.jpg", year: "2023-2024", event: "EIC", aspect: "aspect-[1/1]" },
  { url: "https://res.cloudinary.com/dtt4ftdrw/image/upload/v1749193881/Copy_of__DSC0068-1_s0pwm9.jpg", year: "2024-2025", event: "EIC", aspect: "aspect-[3/4]" },
  { url: "https://res.cloudinary.com/dtt4ftdrw/image/upload/v1749193825/Copy_of__DSC0061_qbxoza.jpg", year: "2023-2024", event: "Diwali", aspect: "aspect-[4/3]" },
  { url: "https://res.cloudinary.com/dtt4ftdrw/image/upload/v1749193715/Copy_of__DSC0262_hx2ohi.jpg", year: "2022-2023", event: "Eminence", aspect: "aspect-[3/5]" },
  { url: "https://res.cloudinary.com/dtt4ftdrw/image/upload/v1749193706/Copy_of__DSC0301_wb9wtl.jpg", year: "2022-2023", event: "Eminence", aspect: "aspect-[1/1]" },
  { url: "https://res.cloudinary.com/dtt4ftdrw/image/upload/v1749193940/Copy_of__DSC0078_ovmtcl.jpg", year: "2023-2024", event: "EIC", aspect: "aspect-[4/5]" },
  { url: "https://res.cloudinary.com/dtt4ftdrw/image/upload/v1749194282/Copy_of__DSC0058-1_oheraa.jpg", year: "2024-2025", event: "Empressario", aspect: "aspect-[3/4]" },
  { url: "https://res.cloudinary.com/dtt4ftdrw/image/upload/v1749194141/Copy_of__DSC0070_dym8xw.jpg", year: "2024-2025", event: "Speaker Sessions", aspect: "aspect-[4/3]" },
  { url: "https://res.cloudinary.com/dtt4ftdrw/image/upload/v1749195205/Copy_of__DSC0289_mz6uug.jpg", year: "2022-2023", event: "Srijan", aspect: "aspect-[1/1]" },
  { url: "https://res.cloudinary.com/dtt4ftdrw/image/upload/v1749196305/WhatsApp_Image_2025-06-03_at_7.19.14_PM_2_1_gssigj.jpg", year: "2024-2025", event: "Orientation", aspect: "aspect-[3/5]" }
];

const years = ["All", "2024-2025", "2023-2024", "2022-2023", "2020-2021"];
const events = ["All", "Orientation", "Empressario", "Eminence", "Speaker Sessions", "Diwali", "EIC", "Srijan"];

interface DropdownProps {
  label: string;
  icon: React.ReactNode;
  options: string[];
  selected: string;
  onSelect: (val: string) => void;
}

const CustomDropdown: React.FC<DropdownProps> = ({ label, icon, options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full md:w-64" ref={dropdownRef}>
      <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-3 ml-1 flex items-center gap-2">
        {icon} {label}
      </span>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl glass border transition-all duration-300 group ${
          isOpen ? 'border-blue-500/50 bg-blue-500/5' : 'border-white/10 hover:border-white/20'
        }`}
      >
        <span className={`text-xs font-bold tracking-widest uppercase ${selected === 'All' ? 'text-gray-400' : 'text-blue-400'}`}>
          {selected === 'All' ? `Select ${label.split(' ')[2]}` : selected}
        </span>
        <ChevronDown 
          size={16} 
          className={`text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : 'group-hover:text-white'}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 left-0 right-0 mt-3 p-2 rounded-2xl glass border border-white/10 shadow-2xl backdrop-blur-2xl"
          >
            <div className="max-h-60 overflow-y-auto custom-scrollbar flex flex-col gap-1">
              {options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    onSelect(opt);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-5 py-3 rounded-xl text-[10px] font-bold tracking-widest uppercase transition-all flex items-center justify-between group ${
                    selected === opt 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {opt}
                  {selected === opt && <Check size={14} className="text-white" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState("All");

  const filteredImages = galleryImages.filter(img => {
    const yearMatch = selectedYear === "All" || img.year === selectedYear;
    const eventMatch = selectedEvent === "All" || img.event === selectedEvent;
    return yearMatch && eventMatch;
  });

  return (
    <section className="py-24 relative min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Simple Dropdown Filters Section (No Sticky) */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-6 mb-24 py-6">
          <CustomDropdown 
            label="Sort By Year" 
            icon={<Calendar size={12} className="text-blue-500" />} 
            options={years} 
            selected={selectedYear} 
            onSelect={setSelectedYear} 
          />
          
          <div className="hidden md:block w-px h-12 bg-white/10 mx-4 self-center mt-6" />
          
          <CustomDropdown 
            label="Sort By Events" 
            icon={<Filter size={12} className="text-blue-500" />} 
            options={events} 
            selected={selectedEvent} 
            onSelect={setSelectedEvent} 
          />

          {(selectedYear !== "All" || selectedEvent !== "All") && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => { setSelectedYear("All"); setSelectedEvent("All"); }}
              className="px-6 py-4 rounded-2xl border border-rose-500/20 text-rose-500 text-[10px] font-black tracking-widest uppercase hover:bg-rose-500/10 transition-all mb-0.5"
            >
              Clear All
            </motion.button>
          )}
        </div>

        {/* Masonry-style Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.url}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                className={`relative break-inside-avoid rounded-[2.5rem] overflow-hidden glass border border-white/5 cursor-pointer shadow-2xl group transition-all duration-700 hover:border-blue-500/30 hover:-translate-y-2`}
              >
                <div className={`${img.aspect} relative overflow-hidden`}>
                  <img 
                    src={img.url} 
                    alt={img.event}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-700" />
                  
                  {/* Image Details Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-10 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[0.16, 1, 0.3, 1] delay-75">
                    <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.4em] mb-3 block">{img.year}</span>
                    <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter leading-none">{img.event}</h3>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: 40 }}
                      className="h-1 bg-blue-600 mt-6 rounded-full" 
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredImages.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-64 text-center"
          >
            <div className="w-24 h-24 rounded-full glass border border-white/5 flex items-center justify-center mx-auto mb-8">
              <Camera size={40} className="text-gray-700" />
            </div>
            <h3 className="text-gray-500 text-2xl font-light italic tracking-wide">No visual records matching your criteria...</h3>
            <button 
              onClick={() => { setSelectedYear("All"); setSelectedEvent("All"); }}
              className="mt-8 text-blue-500 font-black text-xs uppercase tracking-[0.3em] hover:text-blue-400 hover:underline transition-colors"
            >
              Reset All Filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
