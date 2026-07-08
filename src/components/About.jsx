import { motion } from 'framer-motion';

export default function About() {
  const courseWork = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Operating Systems",
    "Database Management Systems",
    "Computer Networks"
  ];

  return (
    <section id="about" className="py-24 border-t border-brand-lightBorder dark:border-brand-border/40 relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Section Indicator Column */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="sticky top-28 space-y-4"
            >
              <div className="text-[10px] font-mono tracking-[0.25em] text-brand-accent">
                01 // BACKGROUND
              </div>
              <h2 className="text-3xl font-bold font-heading uppercase tracking-tight text-neutral-900 dark:text-white">
                ABOUT ME
              </h2>
              <div className="w-12 h-[1px] bg-brand-accent" />
            </motion.div>
          </div>

          {/* Conversational & Technical Column */}
          <div className="lg:col-span-9 space-y-12">
            {/* Objective Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 max-w-3xl"
            >
              <p className="text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed font-light transition-colors duration-500">
                I am a developer driven by solving problems at the core level. Currently pursuing my B.Tech in 
                Information Technology, I focus my work on the systems that sit behind the user interface—developing 
                scalable APIs, managing data architectures, and optimizing system logic.
              </p>
              <p className="text-brand-lightTextMuted dark:text-neutral-400 leading-relaxed font-light transition-colors duration-500">
                My technical philosophy centers on simplicity, type-safety, and robust error management. Through my academic 
                journey and personal builds, I have focused heavily on object-oriented structures, database scaling, and 
                secure authentication workflows. I enjoy translating complex business logic into clean, documentable code.
              </p>
            </motion.div>

            {/* Education & Coursework Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-brand-lightBorder dark:border-brand-border/40 transition-colors duration-500">
              
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <span className="text-[9px] font-mono tracking-widest text-brand-accent uppercase">// INSTITUTION</span>
                <div className="space-y-2">
                  <h3 className="text-lg font-heading font-semibold text-neutral-900 dark:text-white transition-colors duration-500">
                    Bannari Amman Institute of Technology
                  </h3>
                  <div className="text-brand-lightTextMuted dark:text-neutral-400 text-sm font-light transition-colors duration-500">
                    B.Tech. in Information Technology
                  </div>
                  <div className="flex justify-between items-center text-xs font-mono text-brand-lightTextMuted dark:text-brand-textMuted pt-2 transition-colors duration-500">
                    <span>Sept 2023 – Mar 2027</span>
                    <span className="text-brand-accent bg-brand-accent/10 dark:bg-brand-accentMuted/30 px-2 py-0.5 border border-brand-accent/20">
                      CGPA: 8.55
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-brand-lightTextDim dark:text-brand-textDim uppercase transition-colors duration-500">
                    Tamil Nadu, India
                  </div>
                </div>
              </motion.div>

              {/* Coursework */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <span className="text-[9px] font-mono tracking-widest text-brand-accent uppercase">// CORE CURRICULUM</span>
                <div className="flex flex-wrap gap-2">
                  {courseWork.map((course, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-brand-lightTextMuted dark:text-neutral-300 bg-brand-lightCard dark:bg-brand-card border border-brand-lightBorder dark:border-brand-border px-3 py-2 hover:border-brand-accent/50 dark:hover:border-brand-accent/50 transition-all duration-300 font-light"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
