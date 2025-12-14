import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-white)' }}>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8" style={{ backgroundColor: 'var(--color-gray-900)', color: 'var(--color-white)' }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p style={{ color: 'var(--color-gray-400)' }}>&copy; 2025 Malix Abdul Azis. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
