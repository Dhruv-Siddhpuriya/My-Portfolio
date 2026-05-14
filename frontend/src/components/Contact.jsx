import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Loader2 } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Send request to our Node.js backend
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5001';
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="text-neon-blue">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl flex items-center gap-6 group hover:neon-border transition-all">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm font-medium mb-1">Email</h4>
                <a href="mailto:dhruvmodhiya1111@gmail.com" className="text-xl font-bold text-white hover:text-neon-blue transition-colors">
                  dhruvmodhiya1111@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/Dhruv-Siddhpuriya" className="flex-1 glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:neon-border transition-all group">
                <Github size={32} className="text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-white font-medium">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/gecdhd-comp-dhruv-siddhpuriya" className="flex-1 glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:neon-border transition-all group">
                <Linkedin size={32} className="text-gray-400 group-hover:text-neon-blue transition-colors" />
                <span className="text-white font-medium">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all resize-none"
                  placeholder="Hello Dhruv, I would like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-all flex justify-center items-center gap-2"
              >
                {status === 'loading' ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-center text-sm mt-4">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center text-sm mt-4">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
