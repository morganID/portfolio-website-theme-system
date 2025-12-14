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
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative" style={{
      background: 'var(--gradient-hero)',
      backgroundColor: 'var(--color-black)'
    }}>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="inline-block px-6 py-2 rounded mb-8"
          style={{
            backgroundColor: 'var(--color-terminal)',
            border: '1px solid var(--color-primary-500)',
            boxShadow: '0 0 10px var(--color-primary-500)'
          }}
        >
          <span style={{ color: 'var(--color-primary-500)', fontWeight: '500', textShadow: '0 0 5px var(--color-primary-500)' }}>
            {'>'} Full Stack Web Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="text-5xl md:text-7xl mb-6"
          style={{
            color: 'var(--color-primary-50)',
            fontWeight: '600',
            textShadow: '0 0 10px var(--color-primary-500), 0 0 20px var(--color-primary-500)'
          }}
        >
          {'>'} Hi, I'm <span style={{
            color: 'var(--color-accent-500)',
            textShadow: '0 0 10px var(--color-accent-500)'
          }}>Malix Abdul Azis</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{
            color: 'var(--color-primary-100)',
            textShadow: '0 0 5px var(--color-primary-500)'
          }}
        >
          $ I build exceptional digital experiences with modern web technologies.
          <br />
          $ Specialized in React, Node.js, and everything in between.
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
            className="p-4 rounded-2xl transition-all hover:scale-105 hover:brightness-125"
            style={{
              backgroundColor: 'var(--color-gray-100)',
              border: '1px solid var(--color-primary-500)',
              boxShadow: '0 0 10px var(--color-primary-500)'
            }}
          >
            <Github className="w-6 h-6" style={{ color: 'var(--color-primary-50)' }} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl transition-all hover:scale-105 hover:brightness-125"
            style={{
              backgroundColor: 'var(--color-gray-100)',
              border: '1px solid var(--color-accent-500)',
              boxShadow: '0 0 10px var(--color-accent-500)'
            }}
          >
            <Linkedin className="w-6 h-6" style={{ color: 'var(--color-accent-500)' }} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-4 rounded-2xl transition-all hover:scale-105 hover:brightness-125"
            style={{
              backgroundColor: 'var(--color-gray-100)',
              border: '1px solid var(--color-primary-500)',
              boxShadow: '0 0 10px var(--color-primary-500)'
            }}
          >
            <Mail className="w-6 h-6" style={{ color: 'var(--color-primary-50)' }} />
          </a>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
          onClick={() => scrollToSection('projects')}
          className="px-8 py-4 rounded-2xl hover:shadow-lg transition-all"
          style={{
            background: 'var(--gradient-button)',
            color: 'var(--color-black)',
            fontWeight: '600'
          }}
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
            className="animate-bounce transition-colors"
          >
            <ChevronDown className="w-8 h-8" style={{ color: 'var(--color-primary-100)' }} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
