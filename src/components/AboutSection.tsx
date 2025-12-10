import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Server, Database, GitBranch, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'SQL', 'TypeScript', 'JavaScript'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Frontend',
    icon: Cpu,
    skills: ['React.js', 'TypeScript', 'UX Design', 'Tailwind CSS'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'Django', 'REST APIs'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'AI & ML',
    icon: Brain,
    skills: ['TensorFlow', 'Neural Networks', 'LLMs', 'RAG', 'Fine-Tuning', 'Hugging Face'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Data & Tools',
    icon: Database,
    skills: ['MongoDB', 'Supabase', 'ETL', 'Matplotlib', 'FAISS', 'Chroma'],
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'CI/CD'],
    color: 'from-blue-500 to-indigo-500',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-mono text-primary mb-4">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Building <span className="gradient-text">Intelligent</span> Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Passionate about applying machine intelligence to finance, healthcare, and developer productivity
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Bio */}
            <motion.div variants={itemVariants}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">My Journey</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    B.Tech Computer Science & Artificial Intelligence student specializing in 
                    AI-driven problem solving, backend engineering, and automation. I have hands-on 
                    experience designing and deploying end-to-end systems that combine robust software 
                    architecture with modern AI technologies.
                  </p>
                  <p>
                    Currently focused on building retrieval-augmented generation (RAG) pipelines, 
                    fine-tuning models, and integrating AI into full-stack applications. My expertise 
                    spans LLMs, deep learning, and creating scalable backend systems.
                  </p>
                  <p>
                    Motivated to work on high-impact products that apply machine intelligence to 
                    finance, healthcare, and developer productivity domains.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { value: '3+', label: 'Projects' },
                    { value: 'B.Tech', label: 'CS & AI' },
                    { value: 'RAG', label: 'Specialist' },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 rounded-xl bg-muted/50"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Skills Preview */}
            <motion.div variants={itemVariants}>
              <div className="glass rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Core Focus Areas</h3>
                <div className="space-y-4">
                  {[
                    { label: 'AI & Machine Learning', level: 90 },
                    { label: 'Backend Engineering', level: 85 },
                    { label: 'Full-Stack Development', level: 85 },
                    { label: 'RAG Systems', level: 80 },
                    { label: 'Data Engineering', level: 75 },
                  ].map((skill, index) => (
                    <div key={skill.label}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.label}</span>
                        <span className="text-primary font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-center mb-8">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  className="glass rounded-2xl p-6 hover:border-primary/50 transition-all group"
                  whileHover={{ scale: 1.02, y: -4 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-20 flex items-center justify-center mb-4`}>
                    <category.icon className="text-foreground" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-muted/50 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
