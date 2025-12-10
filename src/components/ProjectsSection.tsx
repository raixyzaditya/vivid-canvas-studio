import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, TrendingUp, Brain, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'AssetWise Analytics',
    subtitle: 'AI-Driven Portfolio Analytics & Optimization Platform',
    duration: 'November 2025 – Present',
    description: 'Built a sophisticated stock portfolio analytics platform enabling users to evaluate risk-return trade-offs and optimize asset allocation using Modern Portfolio Theory (MPT).',
    features: [
      'Engineered financial computation pipelines for portfolio value, P/L, returns, asset/sector allocation, volatility, beta, and Sharpe ratio',
      'Implemented MPT-based optimization to construct efficient frontier portfolios with high-return, balanced, and low-risk allocations',
      'Designed visual analytics dashboards with volatility plots, Sharpe ratio curves, and allocation breakdowns',
      'Extending with scenario/stress testing, real-time monitoring, and transaction-aware rebalancing',
    ],
    icon: TrendingUp,
    tech: ['React.js', 'Node.js', 'Express.js', 'Python', 'TypeScript'],
    githubUrl: 'https://github.com/raixyzaditya/FinanceGPT',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 2,
    title: 'NeuroScan',
    subtitle: 'Deep Learning for Brain Tumor Detection from MRI',
    duration: 'June 2025 – July 2025',
    description: 'Developed a CNN-based medical imaging system to detect brain tumors from MRI scans and classify them into Normal, Glioma, Meningioma, and Pituitary categories.',
    features: [
      'Implemented a TensorFlow model with optimized preprocessing and augmentation for robust predictions',
      'Built a web interface for MRI upload, automated scan processing, and instant diagnostic output',
      'Added an AI-powered knowledge module for symptom summaries and treatment recommendations per detected class',
    ],
    icon: Brain,
    tech: ['React.js', 'Node.js', 'Express.js', 'Python', 'TensorFlow'],
    githubUrl: 'https://github.com/raixyzaditya/NeuroScan',
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 3,
    title: 'CodeCatalyst',
    subtitle: 'AI-Assisted Code Optimization & Language Conversion Platform',
    duration: 'November 2025',
    description: 'Built a platform that transforms low-performance Python scripts into highly optimized C++ or Java implementations using AI-assisted refactoring.',
    features: [
      'Developed automated benchmarking engine comparing execution times between original and generated code',
      'Designed a self-serve web interface for code submission, compilation, and performance evaluation',
      'Integrated Anthropic LLM APIs for reliable code generation and multi-language transformations',
    ],
    icon: Code2,
    tech: ['React.js', 'Node.js', 'Express.js', 'Python', 'TypeScript', 'Anthropic APIs'],
    githubUrl: 'https://github.com/raixyzaditya/CodeCatalyst',
    color: 'from-cyan-500 to-blue-500',
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-mono text-primary mb-4">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            End-to-end systems combining robust software architecture with modern AI technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div
                className="glass rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Header */}
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <project.icon className="text-foreground/90" size={64} />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-foreground font-medium">View Details</span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono">
                      {project.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-muted text-xs font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 rounded-md bg-muted text-xs font-mono text-muted-foreground">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative glass rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-muted transition-colors z-10"
              >
                <X size={20} />
              </button>

              {/* Project Header */}
              <div className={`h-48 bg-gradient-to-br ${selectedProject.color} flex items-center justify-center`}>
                <selectedProject.icon className="text-foreground/90" size={80} />
              </div>

              {/* Project Details */}
              <div className="p-8">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono">
                  {selectedProject.duration}
                </span>
                <h3 className="text-3xl font-bold mt-4 mb-2">{selectedProject.title}</h3>
                <p className="text-muted-foreground mb-4">{selectedProject.subtitle}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">KEY FEATURES</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">TECH STACK</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full glass text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button 
                    variant="gradient" 
                    className="flex-1"
                    onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                  >
                    <Github size={18} />
                    View on GitHub
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
