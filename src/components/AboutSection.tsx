import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Code2, Brain, Server, Database, GitBranch, Cpu, Mail, DownloadCloud } from 'lucide-react';

const skillCategories = [
  { title: 'Languages', icon: Code2, skills: ['Python', 'SQL', 'TypeScript', 'JavaScript'], color: 'from-cyan-500 to-blue-500' },
  { title: 'Frontend', icon: Cpu, skills: ['React.js', 'TypeScript', 'UX Design', 'Tailwind CSS'], color: 'from-violet-500 to-purple-500' },
  { title: 'Backend', icon: Server, skills: ['Node.js', 'Express.js', 'Django', 'REST APIs'], color: 'from-emerald-500 to-teal-500' },
  { title: 'AI & ML', icon: Brain, skills: ['TensorFlow', 'Neural Networks', 'LLMs', 'RAG', 'Fine-Tuning', 'Hugging Face'], color: 'from-pink-500 to-rose-500' },
  { title: 'Data & Tools', icon: Database, skills: ['MongoDB', 'Supabase', 'ETL', 'Matplotlib', 'FAISS', 'Chroma'], color: 'from-amber-500 to-orange-500' },
  { title: 'Version Control', icon: GitBranch, skills: ['Git', 'GitHub', 'CI/CD'], color: 'from-blue-500 to-indigo-500' },
];

const easeOutCubic: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const item: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.55, ease: easeOutCubic } },
};

const AboutSection: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section id="about" ref={ref} className="relative py-16 lg:py-28 overflow-hidden">
      {/* Decorative blurred gradients (light on mobile) */}
      <div className="pointer-events-none absolute -left-12 -top-12 w-[320px] h-[320px] rounded-full blur-3xl opacity-20 hidden sm:block bg-gradient-to-tr from-indigo-400 to-pink-400 transform -rotate-12" />
      <div className="pointer-events-none absolute -right-12 -bottom-12 w-[260px] h-[260px] rounded-full blur-3xl opacity-15 hidden sm:block bg-gradient-to-br from-emerald-300 to-cyan-400" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={container} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          <motion.header variants={item} className="text-center mb-8 sm:mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-white/6 text-xs font-mono text-primary mb-3">About Me</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 leading-tight">
              Building <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400">Intelligent</span> Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              I combine deep learning, scalable backend engineering and thoughtful UX to build products that move metrics.
            </p>
          </motion.header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-8">
            {/* Bio Card */}
            <motion.article variants={item} className="relative">
              <motion.div whileHover={{ y: -4 }} className="glass rounded-2xl p-6 sm:p-8 shadow-md overflow-hidden border border-white/6">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-lg bg-gradient-to-tr from-white/6 to-white/4 flex items-center justify-center text-foreground font-bold text-lg sm:text-2xl">
                    AD
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold">Aditya Rai — Computer Science and Engineering</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">B.Tech in Computer Science & Artificial Intelligence</p>
                    <p className="mt-3 text-muted-foreground leading-relaxed text-sm sm:text-base">
                      I build retrieval-augmented systems, fine-tune models and ship full-stack AI features — from production-ready APIs to intuitive developer tooling.
                    </p>

                    <div className="flex gap-2 sm:gap-3 mt-4">
                      <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-primary to-secondary text-white text-sm sm:text-base shadow-sm"
                        aria-label="Download resume"
                      >
                        <DownloadCloud size={16} />
                        <span className="hidden sm:inline">Resume</span>
                      </a>

                      <a
                        href="mailto:raiaditya915@gmail.com?subject=Hello Aditya"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/6 text-primary text-sm sm:text-base"
                        aria-label="Contact via email"
                      >
                        <Mail size={14} />
                        <span className="hidden sm:inline">Contact</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* mini stats with animated feel */}
                <div className="grid grid-cols-3 gap-2 mt-6 text-center">
                  {[
                    { value: '20+', label: 'Projects' },
                    { value: 'B.Tech', label: 'Degree' },
                    { value: 'RAG', label: 'Specialist' },
                  ].map((s, i) => (
                    <div key={i} className="p-2 rounded-lg bg-white/4">
                      <div className="text-sm sm:text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">{s.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.article>

            {/* Skill Bars & Progress */}
            <motion.div variants={item} className="relative">
              <div className="glass rounded-2xl p-6 sm:p-8 shadow-md border border-white/6">
                <h4 className="text-lg sm:text-xl font-bold mb-4">Core Focus Areas</h4>
                <div className="space-y-4">
                  {[
                    { label: 'AI & Machine Learning', level: 90 },
                    { label: 'Backend Engineering', level: 85 },
                    { label: 'Full-Stack Development', level: 85 },
                    { label: 'RAG Systems', level: 90 },
                    { label: 'Data Engineering', level: 75 },
                  ].map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-sm">{skill.label}</span>
                        <span className="text-primary font-mono text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 0.9, delay: idx * 0.06, ease: easeOutCubic }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary/70" />
                    <div>Focused on RAG pipelines, fine-tuning and deployment.</div>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <a href="#projects" className="px-3 py-2 rounded-md bg-gradient-to-r from-primary to-secondary text-white text-sm">See Projects</a>
                  <a href="#contact" className="px-3 py-2 rounded-md bg-white/6 text-primary text-sm">Let's talk</a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technical Skills */}
          <motion.div variants={item} className="mt-6">
            <h3 className="text-lg sm:text-2xl font-bold text-center mb-4">Technical Skills</h3>

            {/* responsive category cards: 1 col mobile, 2 md, 3 lg */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.04 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass rounded-lg p-4 sm:p-6 border border-white/6"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg ${category.color} bg-opacity-20 flex items-center justify-center`}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="font-semibold text-sm sm:text-base">{category.title}</div>
                        <div className="text-xs text-muted-foreground">{category.skills.length} items</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 rounded-full bg-white/6 text-xs sm:text-sm text-muted-foreground">{skill}</span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
