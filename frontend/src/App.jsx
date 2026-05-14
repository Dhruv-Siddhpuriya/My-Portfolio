import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for 3D assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#050511]">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-4 border-t-neon-blue border-r-neon-purple border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-l-neon-blue border-b-neon-purple border-t-transparent border-r-transparent rounded-full animate-spin shadow-[0_0_15px_#60a5fa]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans selection:bg-neon-purple/30">
      <CustomCursor />
      <ParticleBackground />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
