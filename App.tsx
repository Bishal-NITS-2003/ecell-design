import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackgroundShader from "./components/BackgroundShader";
import Home from "./pages/Home";
import InitiativesPage from "./pages/InitiativesPage";
import AboutPage from "./pages/AboutPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen selection:bg-blue-500/30 relative bg-[#020617]">
        <BackgroundShader />
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/initiatives" element={<InitiativesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
