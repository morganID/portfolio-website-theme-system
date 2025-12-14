import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16" style={{ background: 'var(--gradient-hero)' }}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="inline-block px-6 py-2 rounded-full mb-8"
          style={{
            backgroundColor: 'var(--color-gray-100)',
            border: '1px solid var(--color-gray-200)'
          }}
        >
          <span style={{ color: 'var(--color-gray-600)', fontWeight: '500' }}>Full Stack Web Developer</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="text-5xl md:text-7xl mb-6"
          style={{ color: 'var(--color-gray-900)', fontWeight: '600' }}
        >
          Hi, I'm <span style={{ color: 'var(--color-accent-500)' }}>Malix Abdul Azis</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          I build exceptional digital experiences with modern web technologies. 
          Specialized in React, Node.js, and everything in between.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="flex justify-center gap-6 mb-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl transition-all hover:scale-105"
            style={{
              backgroundColor: 'var(--color-white)',
              border: '1px solid var(--color-gray-200)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <Github className="w-6 h-6" style={{ color: 'var(--color-gray-700)' }} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl transition-all hover:scale-105"
            style={{
              backgroundColor: 'var(--color-white)',
              border: '1px solid var(--color-gray-200)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <Linkedin className="w-6 h-6" style={{ color: 'var(--color-accent-500)' }} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-4 rounded-2xl transition-all hover:scale-105"
            style={{
              backgroundColor: 'var(--color-white)',
              border: '1px solid var(--color-gray-200)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <Mail className="w-6 h-6" style={{ color: 'var(--color-gray-700)' }} />
          </a>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
          onClick={() => scrollToSection('projects')}
          className="px-8 py-4 text-white rounded-2xl hover:shadow-lg transition-all"
          style={{ background: 'var(--gradient-button)' }}
        >
          View My Work
        </motion.button>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="mt-16"
        >
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
