import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = [
  { id: 'about', label: 'ABOUT', index: '01' },
  { id: 'skills', label: 'SKILLS', index: '02' },
  { id: 'projects', label: 'PROJECTS', index: '03' },
  { id: 'achievements', label: 'TIMELINE', index: '04' },
  { id: 'contact', label: 'CONTACT', index: '05' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  // Theme state
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const local = localStorage.getItem('theme');
      if (local) return local;
      return 'dark'; // Default is dark
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      setMobileOpen(false);
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-brand-lightBg/95 dark:bg-[#050505]/95 border-b border-brand-lightBorder dark:border-brand-border backdrop-blur-md py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo / Brand */}
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex flex-col"
          >
            <span className="font-heading font-bold text-sm tracking-[0.25em] text-neutral-900 dark:text-white group-hover:text-brand-accent transition-colors duration-300">
              DHEEKSHA V
            </span>
            <span className="text-[9px] font-mono tracking-widest text-brand-lightTextDim dark:text-brand-textDim group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors duration-300">
              [ BACKEND & FULL-STACK ]
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className={`group flex items-baseline space-x-1.5 font-heading text-[10px] tracking-[0.2em] transition-colors duration-300 ${
                  activeSection === link.id 
                    ? 'text-brand-accent' 
                    : 'text-brand-lightTextMuted hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white'
                }`}
              >
                <span className="text-[9px] font-mono text-brand-lightTextDim dark:text-brand-textDim group-hover:text-brand-accentLight transition-colors">
                  {link.index}
                </span>
                <span className="hover-underline-anim">{link.label}</span>
              </a>
            ))}

            {/* Editorial Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-1.5 font-mono text-[9px] tracking-[0.15em] text-brand-lightTextDim hover:text-brand-accent dark:text-brand-textDim dark:hover:text-brand-accent border border-brand-lightBorder hover:border-brand-accent/30 dark:border-brand-border dark:hover:border-brand-accent/30 px-2.5 py-1 transition-all duration-300"
              title="Toggle color theme"
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={10} />
                  <span>LIGHT</span>
                </>
              ) : (
                <>
                  <Moon size={10} />
                  <span>DARK</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Nav Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-brand-lightTextDim hover:text-brand-accent dark:text-brand-textDim dark:hover:text-brand-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-brand-lightTextMuted hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-brand-lightBg dark:bg-[#050505] z-30 flex flex-col justify-center px-8"
          >
            <div className="absolute inset-0 editorial-grid opacity-10 dark:opacity-10 pointer-events-none" />
            
            <div className="space-y-8 max-w-md mx-auto w-full relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  key={link.id}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleClick(e, link.id)}
                    className="group flex items-baseline space-x-4 py-2 border-b border-brand-lightBorder dark:border-brand-border/40"
                  >
                    <span className="text-xs font-mono text-brand-accent">
                      {link.index}
                    </span>
                    <span className="font-heading text-3xl font-light tracking-wide text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-950 dark:group-hover:text-white group-hover:pl-2 transition-all duration-300">
                      {link.label}
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
