import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b" style={{
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(12px)',
      borderBottomColor: 'rgba(0, 0, 0, 0.1)'
    }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <button onClick={() => scrollToSection('hero')}>
            <span className="text-xl text-gray-900">&lt;MalixAzis /&gt;</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-500 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-500 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-blue-500 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-blue-500 transition-colors">
              Education
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-500 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-500 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/50">
            <div className="flex flex-col gap-3">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-500 transition-colors text-left py-2 px-3 hover:bg-gray-100 rounded-xl">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-500 transition-colors text-left py-2 px-3 hover:bg-gray-100 rounded-xl">
                Skills
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-blue-500 transition-colors text-left py-2 px-3 hover:bg-gray-100 rounded-xl">
                Experience
              </button>
              <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-blue-500 transition-colors text-left py-2 px-3 hover:bg-gray-100 rounded-xl">
                Education
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-500 transition-colors text-left py-2 px-3 hover:bg-gray-100 rounded-xl">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-500 transition-colors text-left py-2 px-3 hover:bg-gray-100 rounded-xl">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
