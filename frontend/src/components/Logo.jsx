import { motion } from 'framer-motion';

const Logo = ({ className = "" }) => {
  return (
    <a href="#home" className={`flex items-center gap-3 group select-none ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Glowing Background Pulse */}
        <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue to-neon-purple rounded-xl filter blur-[6px] opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
        
        {/* Outer Hexagon / Shield Container */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full relative z-10 filter drop-shadow-[0_0_8px_rgba(96,165,250,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(167,139,250,0.8)] transition-all duration-300"
        >
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Hexagonal path */}
          <motion.polygon
            points="50,5 90,25 90,75 50,95 10,75 10,25"
            fill="rgba(5, 5, 17, 0.85)"
            stroke="url(#logoGrad)"
            strokeWidth="5"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "300", strokeDashoffset: "300" }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Code symbol / Stylized D hybrid */}
          <motion.path
            d="M35 30 L60 30 C72 30, 72 70, 60 70 L35 70 Z"
            fill="none"
            stroke="url(#logoGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
          />

          <motion.path
            d="M35 40 L48 50 L35 60"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
          />

          <motion.line
            x1="50" y1="65" x2="65" y2="65"
            stroke="#a78bfa"
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Text brand name */}
      <div className="flex flex-col justify-center">
        <span className="text-xl font-black tracking-tight text-white leading-none flex items-center">
          DHRUV
          <motion.span 
            className="text-neon-blue ml-0.5"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "steps(2)" }}
          >
            _
          </motion.span>
        </span>
        <span className="text-[10px] font-mono tracking-[0.25em] text-neon-purple uppercase mt-0.5">
          DEVELOPER
        </span>
      </div>
    </a>
  );
};

export default Logo;
