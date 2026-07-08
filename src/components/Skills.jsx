import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Languages',
    skills: ['C', 'Java']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST API Design', 'JWT Authentication']
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'MySQL']
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'HTML5', 'CSS3', 'Responsive Design']
  },
  {
    category: 'DevOps & Development',
    skills: ['Git', 'Postman']
  },
  {
    category: 'UI/UX & Design',
    skills: ['Wireframing', 'User Flow Design', 'Canva', 'Figma']
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-brand-lightBorder dark:border-brand-border/40 relative transition-colors duration-500">
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
                02 // CAPABILITIES
              </div>
              <h2 className="text-3xl font-bold font-heading uppercase tracking-tight text-neutral-900 dark:text-white">
                TECHNICAL SKILLS
              </h2>
              <div className="w-12 h-[1px] bg-brand-accent" />
            </motion.div>
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-9">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
            >
              {skillsData.map((group, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="space-y-4 border-b border-brand-lightBorder/50 dark:border-brand-border/20 pb-6 last:border-0 transition-colors duration-500"
                >
                  {/* Category Title */}
                  <h3 className="font-heading font-medium text-xs tracking-[0.2em] text-neutral-950 dark:text-white flex items-center space-x-2 transition-colors duration-500">
                    <span className="text-brand-accent">{'//'}</span>
                    <span>{group.category.toUpperCase()}</span>
                  </h3>
                  
                  {/* Skills Tag Cloud */}
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="group relative text-xs font-mono font-light tracking-wide text-brand-lightTextMuted dark:text-neutral-400 bg-brand-lightCard dark:bg-brand-card hover:bg-brand-lightBg dark:hover:bg-neutral-900 border border-brand-lightBorder dark:border-brand-border/60 hover:border-brand-accent/50 dark:hover:border-brand-accent/50 px-3.5 py-2.5 transition-all duration-300 overflow-hidden cursor-default"
                      >
                        {/* Interactive amber bottom hover trace */}
                        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-accent group-hover:w-full transition-all duration-300" />
                        <span className="relative z-10 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">
                          {skill}
                        </span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
