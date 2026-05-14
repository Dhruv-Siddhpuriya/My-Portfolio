import { motion } from 'framer-motion';

import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/10 text-neon-blue text-sm font-semibold mb-6"
            >
              🚀 Welcome to my digital universe
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              Hi, I'm <span className="text-white neon-text-blue">Dhruv</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">
              Full Stack <span className="text-neon-purple">Developer</span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
              I build scalable web applications with the MERN stack. Passionate about creating dynamic, responsive, and user-centric digital experiences.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects"
                className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-neon-blue/20 border border-neon-blue rounded-full overflow-hidden transition-all hover:scale-105"
              >
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                <span className="relative flex items-center gap-2">
                  View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-gray-300 border border-gray-700 rounded-full hover:bg-gray-800 hover:text-white transition-all hover:border-neon-purple hover:neon-border"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Profile Image Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 flex justify-center items-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-neon-purple/20 rounded-full filter blur-[100px] -z-10 animate-pulse"></div>
            
            <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-[2rem] p-2 border-2 border-neon-blue/50 shadow-[0_0_50px_rgba(96,165,250,0.3)] bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-gray-900">
                <img 
                  src="/src/assets/dhruv.jpg" 
                  alt="Dhruv Profile" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
