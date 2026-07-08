import { motion } from 'framer-motion';
import { ArrowDownRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: '100%',
      transition: { duration: 1, ease: 'easeInOut' }
    }
  };

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Editorial grid lines overlay */}
      <div className="absolute inset-0 editorial-grid opacity-20 pointer-events-none" />
      
      {/* Custom decorative background vector/dots (extreme restraint) */}
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full glow-point opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Indicator - Blueprint look */}
        <div className="hidden lg:block lg:col-span-1 pt-4">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="sticky top-28 flex flex-col items-start space-y-6"
          >
            <span className="text-[10px] font-mono tracking-[0.25em] text-brand-accent transform rotate-90 origin-left translate-x-4">
              00 // INTRO
            </span>
            <div className="w-[1px] h-24 bg-brand-lightBorder dark:bg-brand-border transition-colors duration-500" />
          </motion.div>
        </div>

        {/* Main Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-11 flex flex-col justify-center space-y-8"
        >
          {/* Tag / Monospace Status */}
          <motion.div variants={itemVariants} className="flex items-center space-x-3">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-brand-lightTextMuted dark:text-brand-textMuted uppercase transition-colors duration-500">
              Available for Software Trainee Roles
            </span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-4">
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-none"
            >
              DHEEKSHA V
            </motion.h1>
            
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-4 text-brand-accent font-heading font-medium tracking-wide text-lg sm:text-xl md:text-2xl">
              <span>Backend & Full-Stack Developer</span>
              <span className="hidden sm:inline text-neutral-400 dark:text-neutral-600 transition-colors">//</span>
              <span className="text-brand-lightTextMuted dark:text-neutral-400 transition-colors">B.Tech IT Student</span>
            </motion.div>
          </div>

          {/* Thin horizontal editorial divider line */}
          <motion.div variants={lineVariants} className="h-[1px] bg-brand-lightBorder dark:bg-brand-border w-full transition-colors duration-500" />

          {/* Tagline / Career Objective */}
          <motion.div variants={itemVariants} className="max-w-2xl">
            <p className="text-brand-lightTextMuted dark:text-neutral-400 font-light text-base sm:text-lg leading-relaxed transition-colors duration-500">
              Seeking to build secure, scalable digital platforms. Specializing in designing robust REST APIs, 
              distributed architectures, and full-stack solutions, while maintaining a strong academic record 
              and technical foundation in data structures and object-oriented programming.
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => handleScrollToSection('contact')}
              className="group flex items-center space-x-3 bg-brand-accent hover:bg-brand-accentLight text-black font-mono text-xs tracking-widest px-6 py-4 transition-all duration-300 relative overflow-hidden"
            >
              <span>CONNECT WITH ME</span>
              <ArrowDownRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>

            <button
              onClick={() => handleScrollToSection('projects')}
              className="group flex items-center space-x-3 bg-transparent hover:bg-neutral-900/5 dark:hover:bg-white/5 border border-brand-lightBorder dark:border-brand-border hover:border-brand-accent/50 text-neutral-900 dark:text-white font-mono text-xs tracking-widest px-6 py-4 transition-all duration-300"
            >
              <span>VIEW WORK</span>
              <span className="text-brand-accent font-bold group-hover:pl-1 transition-all duration-300">→</span>
            </button>
          </motion.div>

          {/* Social Links Panel */}
          <motion.div variants={itemVariants} className="flex items-center space-x-6 pt-6 border-t border-brand-lightBorder dark:border-brand-border/40 w-full max-w-sm transition-colors duration-500">
            <a 
              href="https://github.com/dheeksha178811" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-lightTextDim dark:text-brand-textDim hover:text-brand-accent transition-colors duration-300 flex items-center space-x-2"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
              <span className="text-[10px] font-mono tracking-widest hidden sm:inline">GITHUB</span>
            </a>
            <span className="text-brand-lightBorder dark:text-neutral-800 text-[10px]">//</span>
            <a 
              href="https://linkedin.com/in/dheekshav" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-lightTextDim dark:text-brand-textDim hover:text-brand-accent transition-colors duration-300 flex items-center space-x-2"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
              <span className="text-[10px] font-mono tracking-widest hidden sm:inline">LINKEDIN</span>
            </a>
            <span className="text-brand-lightBorder dark:text-neutral-800 text-[10px]">//</span>
            <a 
              href="mailto:dheeksha178811@gmail.com" 
              className="text-brand-lightTextDim dark:text-brand-textDim hover:text-brand-accent transition-colors duration-300 flex items-center space-x-2"
              aria-label="Email"
            >
              <Mail size={16} />
              <span className="text-[10px] font-mono tracking-widest hidden sm:inline">EMAIL</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
