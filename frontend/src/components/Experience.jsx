import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Tech Innovators Inc.',
    date: '2025 - Present',
    description: 'Developed scalable MERN stack web applications. Improved database query performance by 40%. Implemented responsive user interfaces and RESTful APIs.',
    icon: <Briefcase size={20} />,
    type: 'work'
  },
  {
    title: 'Advanced Web Development Course',
    company: 'Udemy / Coursera',
    date: '2024 - 2025',
    description: 'Mastered React, Node.js, Express, and MongoDB. Built multiple full-stack projects including e-commerce platforms and real-time chat applications.',
    icon: <GraduationCap size={20} />,
    type: 'education'
  },
  {
    title: 'B.Tech in Computer Science',
    company: 'University XYZ',
    date: '2021 - 2025',
    description: 'Studied Data Structures, Algorithms, Database Management Systems, and Software Engineering principles.',
    icon: <GraduationCap size={20} />,
    type: 'education'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-neon-purple">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-800"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gray-900 border-4 border-neon-blue flex items-center justify-center z-10 text-white shadow-[0_0_15px_rgba(96,165,250,0.5)]">
                  {exp.icon}
                </div>

                {/* Content Area */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'
                }`}>
                  <div className="glass-card p-6 rounded-2xl hover:neon-border transition-all duration-300">
                    <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-semibold text-neon-purple mb-3">
                      {exp.date}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <h4 className="text-gray-400 font-medium mb-4">{exp.company}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
