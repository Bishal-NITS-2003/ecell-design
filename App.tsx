
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import About from './components/About';
import Motto from './components/Motto';
import Pillars from './components/Pillars';
import Events from './components/Events';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BackgroundShader from './components/BackgroundShader';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30 relative bg-[#020617]">
      <BackgroundShader />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Partners />
        <About />
        <Motto />
        <Pillars />
        <Events />
        <Timeline />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
