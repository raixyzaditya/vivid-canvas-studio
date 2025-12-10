import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import healthImage from '@/assets/healthcare.jpg';

const interests = [
  { 
    name: 'AI in Finance', 
    emoji: '📈', 
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
    description: 'Building intelligent systems for portfolio optimization, risk analysis, and automated trading strategies using machine learning'
  },
  { 
    name: 'AI in Healthcare', 
    emoji: '🏥', 
    image: healthImage,
    description: 'Developing deep learning models for medical imaging, disease detection, and diagnostic support systems to improve patient care'
  },
  { 
    name: 'Developer Tools', 
    emoji: '🛠️', 
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
    description: 'Creating AI-powered development tools that enhance productivity, automate code optimization, and streamline workflows'
  },
  { 
    name: 'RAG Systems', 
    emoji: '🔍', 
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    description: 'Implementing Retrieval-Augmented Generation pipelines to build intelligent knowledge bases and context-aware AI applications'
  },
  { 
    name: 'Agentization', 
    emoji: '🤖', 
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
    description: 'Designing autonomous AI agents that can reason, plan, and execute complex tasks with minimal human intervention'
  },
  { 
    name: 'IoT & Robotics', 
    emoji: '🦾', 
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    description: 'Exploring the convergence of AI, IoT sensors, and robotics to create smart, adaptive systems for real-world automation'
  },
];

const InterestsSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // small accessibility: reduce motion if user prefers reduced motion
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    // you can use media.matches in logic if you want to disable animations
    return () => {};
  }, []);

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden" ref={ref}>
      {/* subtle animated background (hidden on xs) */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/4 to-background pointer-events-none" />
      <div className="absolute top-12 left-6 w-72 h-72 bg-primary/8 rounded-full blur-3xl hidden md:block" />
      <div className="absolute bottom-12 right-6 w-64 h-64 bg-cyan-400/8 rounded-full blur-3xl hidden md:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-primary mb-4 border border-primary/20"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Interests & Passions
          </motion.span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Areas I'm <span className="gradient-text">Passionate</span> About
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of AI, automation, and real-world applications
          </p>
        </motion.div>

        {/* Grid Layout: 1 / 2 / 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="relative h-72 sm:h-80 md:h-88 rounded-2xl overflow-hidden cursor-pointer shadow-md">
                {/* Image */}
                <motion.img
                  src={interest.image as any}
                  alt={interest.name}
                  className="w-full h-full object-cover object-center"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/40 transition-all duration-300" />

                {/* Content area */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
                  {/* Emoji badge (smaller) */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ type: "spring", stiffness: 160, damping: 14, delay: index * 0.06 + 0.15 }}
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl glass border border-white/20 flex items-center justify-center mb-4"
                  >
                    <span className="text-2xl sm:text-3xl">{interest.emoji}</span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-250"
                    initial={{ x: -12, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: index * 0.05 + 0.12 }}
                  >
                    {interest.name}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-sm sm:text-sm text-white/85 leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 max-w-full"
                  >
                    {interest.description}
                  </motion.p>

                  {/* underline */}
                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-primary to-cyan-400 mt-3 w-0 group-hover:w-24 transition-all duration-300"
                  />
                </div>

                {/* small particle accents (minimal) */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <motion.span
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full bg-primary"
                      initial={{ x: '50%', y: '50%', opacity: 0 }}
                      animate={{
                        x: `${20 + i * 20}%`,
                        y: `${10 + i * 25}%`,
                        opacity: [0, 0.9, 0],
                      }}
                      transition={{
                        duration: 1.8 + i * 0.2,
                        repeat: Infinity,
                        repeatDelay: 0.8,
                        delay: i * 0.15,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground text-sm sm:text-base">Hover or tap a card to view a short description.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default InterestsSection;
