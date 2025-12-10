import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Zap, Database, Cloud, Smartphone } from 'lucide-react';

const skills = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'UI/UX Design', level: 85 },
  { name: 'Cloud & DevOps', level: 75 },
];

const techStack = [
  { icon: '⚛️', name: 'React' },
  { icon: '📘', name: 'TypeScript' },
  { icon: '🟢', name: 'Node.js' },
  { icon: '🐍', name: 'Python' },
  { icon: '🗄️', name: 'PostgreSQL' },
  { icon: '🔥', name: 'Firebase' },
  { icon: '☁️', name: 'AWS' },
  { icon: '🎨', name: 'Figma' },
];

const services = [
  { icon: Code2, title: 'Web Development', description: 'Building modern, scalable web applications' },
  { icon: Smartphone, title: 'Mobile Apps', description: 'Cross-platform mobile experiences' },
  { icon: Palette, title: 'UI/UX Design', description: 'Intuitive and beautiful interfaces' },
  { icon: Database, title: 'Backend Systems', description: 'Robust APIs and databases' },
  { icon: Cloud, title: 'Cloud Solutions', description: 'Scalable cloud infrastructure' },
  { icon: Zap, title: 'Performance', description: 'Optimized for speed and efficiency' },
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
              Crafting Digital <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Passionate about creating impactful digital solutions that make a difference
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Bio */}
            <motion.div variants={itemVariants}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">My Story</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    With over 5 years of experience in software development, I've had the privilege 
                    of working with startups and enterprises alike, helping them bring their visions to life.
                  </p>
                  <p>
                    I specialize in building full-stack applications that are not just functional, 
                    but delightful to use. My approach combines technical excellence with a deep 
                    understanding of user needs.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to 
                    open-source projects, or sharing knowledge through technical writing and mentoring.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { value: '50+', label: 'Projects' },
                    { value: '5+', label: 'Years Exp.' },
                    { value: '30+', label: 'Clients' },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 rounded-xl bg-muted/50"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
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

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-bold text-center mb-8">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="glass px-6 py-3 rounded-full flex items-center gap-2 hover:border-primary/50 transition-all cursor-default"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className="text-xl">{tech.icon}</span>
                  <span className="font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-center mb-8">What I Do</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="glass rounded-2xl p-6 hover:border-primary/50 transition-all group"
                  whileHover={{ scale: 1.02, y: -4 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                    <service.icon className="text-primary" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
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
