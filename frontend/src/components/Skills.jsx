import { motion } from 'framer-motion';

const skills = [
  { name: 'MongoDB', color: 'text-green-500', shadow: 'hover:shadow-green-500/50' },
  { name: 'Express.js', color: 'text-gray-300', shadow: 'hover:shadow-gray-500/50' },
  { name: 'React', color: 'text-blue-400', shadow: 'hover:shadow-blue-500/50' },
  { name: 'Node.js', color: 'text-green-600', shadow: 'hover:shadow-green-600/50' },
  { name: 'Tailwind CSS', color: 'text-cyan-400', shadow: 'hover:shadow-cyan-400/50' },
  { name: 'JavaScript', color: 'text-yellow-400', shadow: 'hover:shadow-yellow-400/50' },
  { name: 'Git/GitHub', color: 'text-orange-500', shadow: 'hover:shadow-orange-500/50' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-neon-blue">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`glass-card p-6 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${skill.shadow}`}
            >
              {/* Fake 3D box effect */}
              <div className={`w-16 h-16 rounded-xl mb-4 flex items-center justify-center bg-gray-800/50 border border-gray-700 relative overflow-hidden group`}>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className={`font-bold text-2xl ${skill.color}`}>
                  {skill.name[0]}
                </span>
              </div>
              <h3 className="text-white font-medium text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
