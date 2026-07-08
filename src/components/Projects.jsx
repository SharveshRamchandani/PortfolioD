import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { GithubIcon } from './Icons';

const projectsData = [
  {
    id: 'civicconnect',
    title: 'CivicConnect',
    subtitle: 'Digital Complaint Analytics Dashboard',
    date: 'AUG 2025',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Postman', 'Git'],
    description: 'A MERN-based enterprise complaint management platform enabling citizens to file, track, and manage police complaints digitally with role-based access.',
    bullets: [
      'Designed and built secure REST APIs using Node.js & Express, utilizing MongoDB database schemas for structured data storing and status transitions.',
      'Implemented role-based authentication (JWT) for secure, tiered access levels between general citizens and government authorities.',
      'Constructed scalable backend workflows that ensure reliability in complaint ingestion, query resolution, and live status auditing.',
      'Created a comprehensive administrative dashboard for real-time visualization of complaint metrics, response rates, and regional bottlenecks.'
    ],
    github: 'https://github.com/dheeksha178811/CivicConnect',
    demo: '#'
  },
  {
    id: 'metisai',
    title: 'METIS AI',
    subtitle: 'AI-Driven Metal Life Cycle Assessment Platform',
    date: 'NOV 2025',
    tech: ['MERN Stack', 'JWT Authentication', 'REST API Integration', 'Git', 'Postman'],
    description: 'An AI-integrated metal lifecycle dashboard enabling industrial engineers to interact with AI-generated environmental impact and lifecycle metrics.',
    bullets: [
      'Designed and developed dynamic, high-fidelity user interfaces using React.js and vanilla CSS to present complex metal lifecycle metrics.',
      'Integrated REST API layers to display real-time analysis logs, generating clean visual outputs from multi-layered data structures.',
      'Transformed highly technical ML pipeline outputs into intuitive dashboards, reducing engineer assessment review time.',
      'Engineered reusable, modular component structures in React to support scalable UI features and clean maintainability.'
    ],
    github: 'https://github.com/dheeksha178811/METIS-AI',
    demo: '#'
  }
];

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="projects" className="py-24 border-t border-brand-lightBorder dark:border-brand-border/40 relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          <div className="lg:col-span-3">
            <div className="text-[10px] font-mono tracking-[0.25em] text-brand-accent uppercase">
              03 // RECENT WORK
            </div>
            <h2 className="text-3xl font-bold font-heading uppercase tracking-tight mt-4 text-neutral-900 dark:text-white transition-colors duration-500">
              FEATURED PROJECTS
            </h2>
            <div className="w-12 h-[1px] bg-brand-accent mt-4" />
          </div>
          <div className="lg:col-span-9 flex items-end">
            <p className="text-brand-lightTextMuted dark:text-neutral-400 font-light text-sm max-w-xl transition-colors duration-500">
              A curated selection of systems and applications. These projects highlight MERN full-stack 
              architectures, secure REST API design, and intuitive AI-dashboard integrations.
            </p>
          </div>
        </div>

        {/* Project Lists (Editorial Layout) */}
        <div className="space-y-12">
          {projectsData.map((project, idx) => {
            const isExpanded = expandedId === project.id;
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`border border-brand-lightBorder dark:border-brand-border hover:border-brand-accent/40 dark:hover:border-brand-accent/40 bg-brand-lightCard dark:bg-brand-card transition-all duration-500 overflow-hidden ${
                  isExpanded ? 'ring-1 ring-brand-accent/20' : ''
                }`}
              >
                {/* Main Card Header Area */}
                <div 
                  onClick={() => toggleExpand(project.id)}
                  className="p-8 md:p-10 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="space-y-3 flex-1">
                    {/* Upper Meta */}
                    <div className="flex items-center space-x-3 text-[10px] font-mono text-brand-lightTextDim dark:text-brand-textDim transition-colors duration-500">
                      <span>{project.date}</span>
                      <span>•</span>
                      <span className="text-brand-accent">FEATURED</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold font-heading text-neutral-900 dark:text-white transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-brand-lightTextMuted dark:text-neutral-400 text-sm font-light transition-colors duration-500">
                      {project.subtitle}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((t, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[9px] font-mono tracking-wider bg-brand-lightBg dark:bg-brand-bg text-brand-lightTextMuted dark:text-neutral-400 border border-brand-lightBorder dark:border-brand-border px-2 py-0.5 transition-colors duration-500"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Expand Toggle */}
                  <div className="flex items-center space-x-4 self-start md:self-auto">
                    {/* Links */}
                    <div className="flex space-x-3" onClick={(e) => e.stopPropagation()}>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-brand-lightTextDim hover:text-brand-accent dark:text-brand-textDim dark:hover:text-brand-accent border border-brand-lightBorder dark:border-brand-border bg-brand-lightBg dark:bg-brand-bg transition-colors duration-300"
                        title="GitHub Repository"
                      >
                        <GithubIcon size={16} />
                      </a>
                    </div>

                    {/* Expand Indicator */}
                    <button
                      className="p-2 text-brand-lightTextDim hover:text-brand-accent dark:text-brand-textDim dark:hover:text-white border border-brand-lightBorder dark:border-brand-border bg-brand-lightBg dark:bg-brand-bg transition-colors"
                      aria-label="Expand project details"
                    >
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>
                </div>

                {/* Collapsible Details Area */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-8 pb-8 md:px-10 md:pb-10 border-t border-brand-lightBorder dark:border-brand-border/40 pt-6 bg-brand-lightBg/50 dark:bg-brand-bg/50 transition-colors duration-500">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                          {/* Left Description Column */}
                          <div className="lg:col-span-4">
                            <h4 className="text-[10px] font-mono tracking-[0.25em] text-brand-accent uppercase mb-3">
                              // OVERVIEW
                            </h4>
                            <p className="text-brand-lightTextMuted dark:text-neutral-400 text-sm font-light leading-relaxed transition-colors duration-500">
                              {project.description}
                            </p>
                          </div>

                          {/* Right Bullets Column */}
                          <div className="lg:col-span-8">
                            <h4 className="text-[10px] font-mono tracking-[0.25em] text-brand-accent uppercase mb-3">
                              // KEY CONTRIBUTIONS
                            </h4>
                            <ul className="space-y-3">
                              {project.bullets.map((bullet, bIdx) => (
                                <li key={bIdx} className="flex items-start space-x-3 text-sm text-brand-lightTextMuted dark:text-neutral-300 font-light transition-colors duration-500">
                                  <span className="text-brand-accent text-xs font-mono select-none mt-1">↳</span>
                                  <span className="leading-relaxed">{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
