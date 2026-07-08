import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="py-24 border-t border-brand-lightBorder dark:border-brand-border/40 bg-brand-lightCard/30 dark:bg-brand-card/30 relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Large Editorial Heading */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[10px] font-mono tracking-[0.25em] text-brand-accent uppercase"
          >
            05 // COLLABORATION
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading tracking-tighter leading-none uppercase mt-4 text-neutral-900 dark:text-white transition-colors duration-500"
          >
            LET'S DESIGN THE <br className="hidden sm:inline" />
            <span className="text-brand-accent">BACKEND FUTURE.</span>
          </motion.h2>
        </div>

        {/* Contact Information & Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-16 border-b border-brand-lightBorder dark:border-brand-border/40 transition-colors duration-500">
          
          {/* Email Card */}
          <motion.a
            href="mailto:dheeksha178811@gmail.com"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group p-6 border border-brand-lightBorder dark:border-brand-border hover:border-brand-accent/50 bg-brand-lightCard dark:bg-[#050505] transition-all duration-300 flex flex-col justify-between h-40"
          >
            <div className="text-brand-lightTextDim dark:text-brand-textDim group-hover:text-brand-accent transition-colors duration-300">
              <Mail size={20} />
            </div>
            <div className="space-y-1">
              <div className="text-[9px] font-mono text-brand-lightTextDim dark:text-brand-textDim tracking-widest uppercase transition-colors duration-500">EMAIL</div>
              <div className="text-neutral-900 dark:text-white text-xs sm:text-sm font-mono truncate transition-colors duration-500">
                dheeksha178811@gmail.com
              </div>
            </div>
          </motion.a>

          {/* Phone Card */}
          <motion.a
            href="tel:+916385244290"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group p-6 border border-brand-lightBorder dark:border-brand-border hover:border-brand-accent/50 bg-brand-lightCard dark:bg-[#050505] transition-all duration-300 flex flex-col justify-between h-40"
          >
            <div className="text-brand-lightTextDim dark:text-brand-textDim group-hover:text-brand-accent transition-colors duration-300">
              <Phone size={20} />
            </div>
            <div className="space-y-1">
              <div className="text-[9px] font-mono text-brand-lightTextDim dark:text-brand-textDim tracking-widest uppercase transition-colors duration-500">TELEPHONE</div>
              <div className="text-neutral-900 dark:text-white text-xs sm:text-sm font-mono transition-colors duration-500">
                +91 6385244290
              </div>
            </div>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            href="https://linkedin.com/in/dheekshav"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group p-6 border border-brand-lightBorder dark:border-brand-border hover:border-brand-accent/50 bg-brand-lightCard dark:bg-[#050505] transition-all duration-300 flex flex-col justify-between h-40"
          >
            <div className="text-brand-lightTextDim dark:text-brand-textDim group-hover:text-brand-accent transition-colors duration-300">
              <LinkedinIcon size={20} />
            </div>
            <div className="space-y-1">
              <div className="text-[9px] font-mono text-brand-lightTextDim dark:text-brand-textDim tracking-widest uppercase transition-colors duration-500">LINKEDIN</div>
              <div className="text-neutral-900 dark:text-white text-xs sm:text-sm font-mono truncate transition-colors duration-500">
                in/dheekshav
              </div>
            </div>
          </motion.a>

          {/* GitHub Card */}
          <motion.a
            href="https://github.com/dheeksha178811"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group p-6 border border-brand-lightBorder dark:border-brand-border hover:border-brand-accent/50 bg-brand-lightCard dark:bg-[#050505] transition-all duration-300 flex flex-col justify-between h-40"
          >
            <div className="text-brand-lightTextDim dark:text-brand-textDim group-hover:text-brand-accent transition-colors duration-300">
              <GithubIcon size={20} />
            </div>
            <div className="space-y-1">
              <div className="text-[9px] font-mono text-brand-lightTextDim dark:text-brand-textDim tracking-widest uppercase transition-colors duration-500">GITHUB</div>
              <div className="text-neutral-900 dark:text-white text-xs sm:text-sm font-mono truncate transition-colors duration-500">
                github.com/dheeksha178811
              </div>
            </div>
          </motion.a>

        </div>

        {/* Footer Bottom metadata */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-brand-lightTextDim dark:text-brand-textDim transition-colors duration-500">
          <div>
            © {currentYear} DHEEKSHA V. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-6">
            <span className="text-[10px]">DESIGNED FOR SYSTEM SPEED</span>
            <span className="text-brand-lightBorder dark:text-neutral-800">|</span>
            <span className="text-[10px]">BUILT WITH VITE & REACT</span>
          </div>
        </div>

      </div>
    </section>
  );
}
