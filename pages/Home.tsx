import React from "react";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import About from "../components/About";
import Motto from "../components/Motto";
import Pillars from "../components/Pillars";
import Events from "../components/Events";
import Timeline from "../components/Timeline";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Partners />
      <About />
      <Events />
      <Timeline />
      <Testimonials />
      <ContactForm />
    </>
  );
};

export default Home;
