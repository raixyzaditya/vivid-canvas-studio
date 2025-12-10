import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const interests = [
  { name: 'AI in Finance', emoji: '📈', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop' },
  { name: 'AI in Healthcare', emoji: '🏥', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop' },
  { name: 'Developer Tools', emoji: '🛠️', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop' },
  { name: 'RAG Systems', emoji: '🔍', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop' },
  { name: 'Agentization', emoji: '🤖', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop' },
  { name: 'IoT & Robotics', emoji: '🦾', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop' },
];

// Duplicate for seamless loop
const duplicatedInterests = [...interests, ...interests];

const InterestsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-mono text-primary mb-4">
            Interests
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Areas I'm <span className="gradient-text">Passionate</span> About
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Exploring the intersection of AI, automation, and real-world applications
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* First Row - Left to Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex animate-marquee-left">
            {duplicatedInterests.map((interest, index) => (
              <motion.div
                key={`row1-${index}`}
                className="flex-shrink-0 mx-3 group"
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-72 h-48 rounded-2xl overflow-hidden glass">
                  <img
                    src={interest.image}
                    alt={interest.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{interest.emoji}</span>
                      <span className="font-semibold text-foreground">{interest.name}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Second Row - Right to Left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex animate-marquee-right">
            {[...duplicatedInterests].reverse().map((interest, index) => (
              <motion.div
                key={`row2-${index}`}
                className="flex-shrink-0 mx-3 group"
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-72 h-48 rounded-2xl overflow-hidden glass">
                  <img
                    src={interest.image}
                    alt={interest.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{interest.emoji}</span>
                      <span className="font-semibold text-foreground">{interest.name}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InterestsSection;
