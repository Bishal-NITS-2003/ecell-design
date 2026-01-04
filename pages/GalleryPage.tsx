import React from "react";
import GalleryHero from "../components/GalleryHero";
import Gallery from "../components/Gallery";
import BackgroundShader from "@/components/BackgroundShader";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const GalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30 relative bg-[#020617]">
      <BackgroundShader />
      <Navbar />
      <main className="relative z-10">
        <GalleryHero />
        <div id="visual-records">
          <Gallery />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
