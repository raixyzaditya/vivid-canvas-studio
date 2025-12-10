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

// If you had a color animation variant, rename it to avoid colliding with framer 'variants'
const colorVariants = {
  active: { backgroundColor: "#f00" },
  inactive: { backgroundColor: "#fff", transition: { duration: 2 } }
};

// Type-friendly cubic bezier that behaves like easeOut
const easeOutCubic: [number, number, number, number] = [0.22, 1, 0.36, 1];

const bubbleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: easeOutCubic } },
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutCubic } },
};

const AboutSection: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section id="about" ref={ref} className="relative py-28 lg:py-36 overflow-hidden">
      {/* Decorative blurred gradients */}
      <div className="pointer-events-none absolute -left-20 -top-20 w-[420px] h-[420px] rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-purple-400 to-pink-400 transform -rotate-12" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 w-[360px] h-[360px] rounded-full blur-3xl opacity-25 bg-gradient-to-br from-emerald-300 to-cyan-400" />

      <div className="container mx-auto px-6">
        <motion.div variants={container} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          {/* NOTE: fixed spelling -> 'variants' */}
          <motion.header variants={item} className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-white/8 text-sm font-mono text-primary mb-4 backdrop-blur">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Building <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400">Intelligent</span> Solutions
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              I combine deep learning, scalable backend engineering and thoughtful UX to build products
              that actually move metrics — with a focus on finance, healthcare and developer productivity.
            </p>
          </motion.header>

          <div className="grid lg:grid-cols-2 gap-10 mb-14">
            {/* Bio Card */}
            <motion.article variants={item} className="relative">
              <motion.div whileHover={{ y: -6, scale: 1.01 }} className="glass rounded-3xl p-8 shadow-2xl overflow-hidden border border-white/6">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-white/6 to-white/4 flex items-center justify-center text-foreground text-2xl font-bold">
                    AD
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">Aditya Rai — Computer Science and Engineering</h3>
                    <p className="text-sm text-muted-foreground mt-1">B.Tech in Computer Science & Artificial Intelligence</p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      I build retrieval-augmented systems, fine-tune models and ship full-stack AI features —
                      from production-ready APIs to intuitive developer tooling. I enjoy turning research
                      into reliable products.
                    </p>

                    <div className="flex gap-3 mt-6">
                      <a href="/Aditya's resume.pdf" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-md hover:translate-y-[-2px] transition-transform" aria-label="Download resume">
                        <DownloadCloud size={16} />
                        Resume
                      </a>

                      <a href="mailto:raiaditya915@gmail.com?subject=Hello Aditya&body=Hi Aditya,%0D%0A%0D%0AI wanted to connect with you regarding..." className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/6 text-primary font-medium hover:translate-y-[-2px] transition-transform" aria-label="Contact via email">
                        <Mail size={14} />
                        Contact
                      </a>
                    </div>
                  </div>
                </div>

                {/* mini stats with animated counter feel */}
                <div className="grid grid-cols-3 gap-3 mt-8">
                  {[
                    { value: '20+', label: 'Projects' },
                    { value: 'B.Tech', label: 'Degree' },
                    { value: 'RAG', label: 'Specialist' },
                  ].map((s, i) => (
                    <motion.div key={i} className="p-3 rounded-xl bg-white/3 text-center" whileHover={{ scale: 1.03 }}>
                      <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">{s.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              
            </motion.article>

            {/* Skill Bars & Progress */}
            <motion.div variants={item} className="relative">
              <div className="glass rounded-3xl p-8 shadow-2xl border border-white/6">
                <h4 className="text-2xl font-bold mb-4">Core Focus Areas</h4>
                <div className="space-y-4">
                  {[
                    { label: 'AI & Machine Learning', level: 90 },
                    { label: 'Backend Engineering', level: 85 },
                    { label: 'Full-Stack Development', level: 85 },
                    { label: 'RAG Systems', level: 90 },
                    { label: 'Data Engineering', level: 75 },
                  ].map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.label}</span>
                        <span className="text-primary font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.1, delay: idx * 0.08, ease: easeOutCubic }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary/70" />
                    <div>Focused on RAG pipelines, fine-tuning and deployment.</div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <a href="#projects" className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium">See Projects</a>
                  <a href="#contact" className="px-4 py-2 rounded-lg bg-white/6 text-primary font-medium">Let's talk</a>
                </div>
              </div>

              
            </motion.div>
          </div>

          {/* Full Skills Grid (larger, responsive) */}
          <motion.div variants={item} className="">
            <h3 className="text-2xl font-bold text-center mb-6">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div key={category.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: index * 0.06 }} whileHover={{ scale: 1.02, y: -4 }} className="glass rounded-2xl p-6 hover:border-primary/50 transition-all group">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-20 flex items-center justify-center mb-4`}>
                      <Icon size={24} />
                    </div>
                    <h4 className="text-lg font-semibold mb-3">{category.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 rounded-full bg-muted/50 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                          {skill}
                        </span>
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
