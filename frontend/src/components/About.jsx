import { motion } from 'framer-motion';

const techStack = [
  { name: 'MongoDB', color: '#47A248', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'Express', color: '#ffffff', icon: 'https://cdn.simpleicons.org/express/ffffff' },
  { name: 'React', color: '#61DAFB', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Node.js', color: '#339933', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'JavaScript', color: '#F7DF1E', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'TypeScript', color: '#3178C6', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'Tailwind', color: '#06B6D4', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Git', color: '#F05032', icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'GitHub', color: '#ffffff', icon: 'https://cdn.simpleicons.org/github/ffffff' },
];

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-neon-purple">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* My Journey Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-10 rounded-2xl relative overflow-hidden group h-full"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-neon-blue transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
            {/* Decorative code icon */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-neon-blue/20 border border-neon-blue/40 flex items-center justify-center text-neon-blue text-lg font-mono font-bold">
                &lt;/&gt;
              </div>
              <h3 className="text-2xl font-bold text-white">My Journey</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              I am a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). With a keen eye for modern design and scalable architecture, I love transforming complex problems into elegant, user-friendly solutions.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Recently, I completed an intensive internship where I developed high-performance web applications, mastered agile workflows, and contributed to production-ready codebases. I thrive in environments that challenge me to learn and innovate.
            </p>
            {/* Mini stat pills */}
            <div className="flex flex-wrap gap-3 mt-2">
              {['Problem Solver', 'Team Player', 'Fast Learner', 'Open to Work'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-semibold border border-neon-purple/40 bg-neon-purple/10 text-neon-purple"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-blue/10 rounded-full filter blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-neon-purple/10 rounded-full filter blur-2xl pointer-events-none"></div>

            <h3 className="text-xl font-bold text-white mb-2 text-center">Tech Stack</h3>
            <p className="text-gray-400 text-sm text-center mb-8">Tools &amp; technologies I work with</p>

            <div className="grid grid-cols-3 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.12, y: -4 }}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl border border-white/5 bg-white/5 hover:border-neon-blue/40 hover:bg-neon-blue/10 transition-all cursor-default group"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-9 h-9 object-contain drop-shadow-lg"
                    style={{ filter: `drop-shadow(0 0 6px ${tech.color}55)` }}
                  />
                  <span className="text-[11px] text-gray-400 group-hover:text-white transition-colors font-medium">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
