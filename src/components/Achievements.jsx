import { motion } from 'framer-motion';

const achievementsData = [
  {
    year: '2025',
    title: 'SuperHack – Finalist',
    subtitle: 'AI-Assistant Development',
    description: 'Designed and presented a conversational AI-Assistant tailored for Managed Service Providers (MSPs), optimizing support automation and driving client retention metrics.'
  },
  {
    year: '2025',
    title: 'Smart India Hackathon (SIH) – Internal Round',
    subtitle: 'Institutional Shortlist',
    description: 'Shortlisted among the top technical teams at Bannari Amman Institute of Technology for conceptualizing and prototyping an innovative, AI-based software solution.'
  },
  {
    year: '2024',
    title: 'NPTEL Gold Certification – Java Programming',
    subtitle: 'Elite + Gold Honor',
    description: 'Secured the prestigious Elite + Gold certification for outstanding academic performance in Java Programming and Object-Oriented paradigms, showing strong proficiency.'
  },
  {
    year: '2023',
    title: 'Best Student Award',
    subtitle: 'Academic & General Excellence',
    description: 'Felicitated with the Best Student Award for consecutive years (2022 and 2023) in Higher Secondary Education, honoring top-tier academic stand and leadership.'
  }
];

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="achievements" className="py-24 border-t border-brand-lightBorder dark:border-brand-border/40 relative transition-colors duration-500">
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
                04 // MILESTONES
              </div>
              <h2 className="text-3xl font-bold font-heading uppercase tracking-tight text-neutral-900 dark:text-white transition-colors duration-500">
                ACHIEVEMENTS
              </h2>
              <div className="w-12 h-[1px] bg-brand-accent" />
            </motion.div>
          </div>

          {/* Timeline Column */}
          <div className="lg:col-span-9 relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-24 top-2 bottom-2 w-[1px] bg-brand-lightBorder dark:bg-brand-border/60 transition-colors duration-500" />

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-12"
            >
              {achievementsData.map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="relative pl-8 md:pl-36 group"
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-[-4.5px] md:left-[91.5px] top-1.5 h-2.5 w-2.5 rounded-full border border-brand-accent bg-brand-lightBg dark:bg-[#050505] group-hover:bg-brand-accent transition-all duration-300 shadow-sm" />

                  {/* Year display for large screens */}
                  <div className="hidden md:block absolute left-0 top-0.5 w-16 font-mono text-sm tracking-widest text-brand-accent font-medium">
                    {item.year}
                  </div>

                  {/* Achievement Details */}
                  <div className="space-y-2 pb-6 border-b border-brand-lightBorder/50 dark:border-brand-border/20 last:border-0 last:pb-0 transition-colors duration-500">
                    <span className="inline-block md:hidden font-mono text-xs text-brand-accent tracking-widest font-semibold mb-1">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-heading font-semibold text-neutral-900 dark:text-white group-hover:text-brand-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="text-brand-lightTextMuted dark:text-neutral-400 font-light text-xs tracking-wider font-mono transition-colors duration-500">
                      {item.subtitle.toUpperCase()}
                    </div>
                    <p className="text-brand-lightTextMuted dark:text-neutral-400 text-sm font-light leading-relaxed max-w-2xl pt-1 transition-colors duration-500">
                      {item.description}
                    </p>
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
