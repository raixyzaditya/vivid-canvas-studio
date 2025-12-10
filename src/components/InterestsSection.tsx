import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import healthImage from '@/assets/healthcare.jpg';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useCallback } from 'react';
import { useEffect } from 'react';

const interests = [
  { 
    name: 'AI in Finance', 
    emoji: '📈', 
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    description: 'Creating AI-powered development tools that enhance productivity, automate code optimization, and streamline workflows'
  },
  { 
    name: 'RAG Systems', 
    emoji: '🔍', 
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    description: 'Implementing Retrieval-Augmented Generation pipelines to build intelligent knowledge bases and context-aware AI applications'
  },
  { 
    name: 'Agentization', 
    emoji: '🤖', 
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    description: 'Designing autonomous AI agents that can reason, plan, and execute complex tasks with minimal human intervention'
  },
  { 
    name: 'IoT & Robotics', 
    emoji: '🦾', 
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    description: 'Exploring the convergence of AI, IoT sensors, and robotics to create smart, adaptive systems for real-world automation'
  },
];

// Duplicate for seamless loop
const duplicatedInterests = [...interests, ...interests];

const InterestsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Floating blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm font-mono text-primary mb-6 border border-primary/20"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Interests & Passions
          </motion.span>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Areas I'm <span className="gradient-text">Passionate</span> About
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the intersection of AI, automation, and real-world applications
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-[480px] rounded-3xl overflow-hidden cursor-pointer">
                {/* Image with zoom effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.img
                    src={interest.image}
                    alt={interest.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
                  }}
                />

                {/* Border glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/50 transition-all duration-500"
                  whileHover={{
                    boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)',
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  {/* Animated emoji badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      delay: index * 0.1 + 0.3 
                    }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-20 h-20 rounded-2xl glass border-2 border-white/30 flex items-center justify-center mb-6 group-hover:border-primary/50 transition-all duration-300"
                  >
                    <span className="text-5xl">{interest.emoji}</span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-4xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300"
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {interest.name}
                  </motion.h3>

                  {/* Description with fade */}
                  <motion.p
                    className="text-white/80 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                  >
                    {interest.description}
                  </motion.p>

                  {/* Animated underline */}
                  <motion.div
                    className="h-1 bg-gradient-to-r from-primary to-cyan-400 mt-4 w-0 group-hover:w-full transition-all duration-500"
                  />
                </div>

                {/* Floating particles on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full"
                      initial={{
                        x: '50%',
                        y: '50%',
                        opacity: 0,
                      }}
                      whileInView={{
                        x: `${Math.random() * 100}%`,
                        y: `${Math.random() * 100}%`,
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-lg">
            Hover over each card to explore more details
          </p>
        </motion.div>
      </div>
    </section>
  );
};



export default InterestsSection;
