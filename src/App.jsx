import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-lightBg dark:bg-brand-bg selection:bg-brand-accent/20 selection:text-brand-accentLight transition-colors duration-500">
      {/* Editorial High-End Grain Overlay */}
      <div className="noise-bg" />

      {/* Navigation */}
      <Navbar />

      {/* Main Structural Grid Container */}
      <main className="max-w-7xl mx-auto border-x border-brand-lightBorder dark:border-brand-border/30 min-h-screen transition-colors duration-500">
        
        {/* Sections */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        
      </main>
    </div>
  );
}
