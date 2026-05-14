import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import React, { useRef } from 'react';

import shopEaseImg from '../assets/shopease_preview.png';
import analyticsImg from '../assets/analytics_preview.png';

const projects = [
  {
    title: 'ShopEase E-Commerce',
    description: 'A full-stack MERN e-commerce platform with AI chat, Razorpay integration, and an admin dashboard.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux'],
    github: 'https://github.com/Dhruv-Siddhpuriya/ShopEase',
    demo: 'https://shop-ease-pink.vercel.app/',
    color: 'from-blue-500/20 to-purple-500/20',
    image: shopEaseImg,
  },
  {
    title: 'Device And User Analytics Dashboard',
    description: 'A web application that provides insights into device and user analytics through interactive visualizations and reports.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/Dhruv-Siddhpuriya/Analytics-Dashboard',
    demo: 'https://dhruv-siddhpuriya.vercel.app',
    color: 'from-emerald-500/20 to-teal-500/20',
    image: analyticsImg,
  },
];

// Simple Tilt Card component
const TiltCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ease-out flex flex-col h-full bg-gradient-to-br ${project.color}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Project Image */}
      <div className="relative h-52 w-full overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay gradient on bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
        {/* Live badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-white/10">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] text-gray-300 font-medium">Live</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 flex-grow text-sm leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-neon-blue">
              {t}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
          >
            <Github size={18} /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-neon-purple hover:text-white transition-colors"
          >
            Live Demo <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-neon-blue">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" style={{ perspective: '2000px' }}>
          {projects.map((project, index) => (
            <TiltCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
