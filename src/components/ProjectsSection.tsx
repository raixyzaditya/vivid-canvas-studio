import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Web', 'Mobile', 'AI', 'Design'];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.',
    longDescription: 'Built a scalable e-commerce platform handling 10,000+ daily transactions. Features include real-time inventory sync, Stripe payment integration, admin dashboard with analytics, and a mobile-responsive storefront.',
    image: '🛒',
    category: 'Web',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 2,
    title: 'AI Content Generator',
    description: 'Leveraging GPT-4 to create high-quality content for marketing, blogs, and social media.',
    longDescription: 'An AI-powered platform that generates marketing copy, blog posts, and social media content. Includes template library, tone customization, and team collaboration features.',
    image: '🤖',
    category: 'AI',
    tech: ['Python', 'FastAPI', 'OpenAI', 'React'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 3,
    title: 'Fitness Tracking App',
    description: 'Mobile app for tracking workouts, nutrition, and health metrics with social features.',
    longDescription: 'Cross-platform fitness app with workout logging, nutrition tracking, progress photos, and social challenges. Integrates with Apple Health and Google Fit.',
    image: '💪',
    category: 'Mobile',
    tech: ['React Native', 'Firebase', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 4,
    title: 'Design System',
    description: 'Comprehensive component library and design tokens for consistent product development.',
    longDescription: 'A complete design system featuring 50+ components, design tokens, accessibility guidelines, and documentation. Used across 5 products with 100% design consistency.',
    image: '🎨',
    category: 'Design',
    tech: ['Figma', 'Storybook', 'React', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 5,
    title: 'Real-Time Analytics',
    description: 'Dashboard for monitoring business metrics with real-time updates and custom alerts.',
    longDescription: 'Enterprise analytics dashboard processing millions of events daily. Features real-time charts, custom alerts, data export, and team sharing capabilities.',
    image: '📊',
    category: 'Web',
    tech: ['Next.js', 'WebSocket', 'D3.js', 'Redis'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 6,
    title: 'Smart Home Controller',
    description: 'IoT platform for managing smart home devices with voice control and automation.',
    longDescription: 'A unified smart home platform controlling 20+ device types. Features voice control, automation routines, energy monitoring, and security integrations.',
    image: '🏠',
    category: 'AI',
    tech: ['Python', 'MQTT', 'React', 'TensorFlow'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-blue-500 to-indigo-500',
  },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

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
            A selection of projects that showcase my skills and passion for building great products
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-[0_0_20px_hsl(186_100%_50%/0.3)]'
                  : 'glass hover:border-primary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className="glass rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image */}
                  <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-500">
                      {project.image}
                    </span>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-foreground font-medium">View Details</span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
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
          </AnimatePresence>
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

              {/* Project Image */}
              <div className={`h-64 bg-gradient-to-br ${selectedProject.color} flex items-center justify-center`}>
                <span className="text-8xl">{selectedProject.image}</span>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl font-bold mt-4 mb-4">{selectedProject.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

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
                  <Button variant="gradient" className="flex-1">
                    <ExternalLink size={18} />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Github size={18} />
                    View Code
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
