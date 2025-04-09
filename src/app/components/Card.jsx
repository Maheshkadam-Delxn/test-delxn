'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceCard = ({ service, index, hoveredCard, setHoveredCard, handleCardClick }) => {
  // Enhanced card animation with smoother physics
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 0.2,
        duration: 0.6
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        mass: 0.1,
        duration: 0.4
      }
    }
  };

  // Content animation
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Enhanced hover content animation with more elegant reveal
  const hoverContentVariants = {
    hidden: { 
      opacity: 0, 
      y: 15,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1]
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      height: "auto",
      transition: { 
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  // Text element animations for staggered reveal
  const textElementVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  // Enhanced button animation
  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 10
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: 0.1
      }
    },
    hover: {
      scale: 1.03,
      x: 3,
      transition: {
        duration: 0.2,
        ease: [0.3, 0.7, 0.4, 1]
      }
    },
    tap: {
      scale: 0.97
    }
  };

  // Arrow animation
  const arrowVariants = {
    hover: {
      x: 3,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 0.8
      }
    }
  };

  // Enhanced glow effect
  const glowVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95
    },
    visible: { 
      opacity: 0.7,
      scale: 1.02,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="relative overflow-hidden rounded-xl shadow-xl h-96 sm:h-80"
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      onClick={() => handleCardClick(service.path)}
    >
      {/* Enhanced card border glow effect */}
      <motion.div
        variants={glowVariants}
        initial="hidden"
        animate={hoveredCard === index ? "visible" : "hidden"}
        className="absolute -inset-0.5 rounded-xl bg-gradient-to-r"
        style={{ 
          backgroundImage: `linear-gradient(to right, ${service.color}, ${service.color}CC)`,
          filter: "blur(3px)" 
        }}
      />
      
      <div className="relative h-full w-full bg-[#0a0a0a] rounded-xl cursor-pointer overflow-hidden">
        {/* Background Image with enhanced parallax effect */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          animate={hoveredCard === index ? {
            scale: 1.07,
            filter: "blur(2px) brightness(0.85)"
          } : {
            scale: 1,
            filter: "blur(0px) brightness(1)"
          }}
          transition={{
            duration: 0.6,
            ease: [0.2, 0.8, 0.2, 1]
          }}
          style={{
            backgroundImage: `url(${service.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Enhanced overlay gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 rounded-xl" 
            animate={hoveredCard === index ? {
              opacity: 0.9,
              background: "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4))"
            } : {
              opacity: 1
            }}
            transition={{
              duration: 0.5
            }}
          />
        </motion.div>

        {/* Card Content with animations */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
          <motion.div
            variants={contentVariants}
            className="space-y-2"
          >
            <div className="flex items-center">
              <motion.div 
                className="w-1 h-6 bg-gradient-to-b rounded-full mr-3" 
                style={{ backgroundColor: service.color }}
                animate={hoveredCard === index ? {
                  height: "1.75rem",
                  width: "0.35rem"
                } : {
                  height: "1.5rem",
                  width: "0.25rem"
                }}
                transition={{
                  duration: 0.3
                }}
              />
              <motion.h3 
                className="text-xl font-bold"
                animate={hoveredCard === index ? {
                  scale: 1.03,
                  x: 2
                } : {
                  scale: 1,
                  x: 0
                }}
                transition={{
                  duration: 0.3
                }}
              >
                {service.title}
              </motion.h3>
            </div>
            <motion.p 
              className="text-sm text-gray-300"
              animate={hoveredCard === index ? {
                opacity: 0.7
              } : {
                opacity: 1
              }}
              transition={{
                duration: 0.2
              }}
            >
              {service.description}
            </motion.p>
          </motion.div>

          {/* Enhanced animated hover content */}
          <AnimatePresence>
            {hoveredCard === index && (
              <motion.div
                variants={hoverContentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="mt-4"
              >
                <motion.p 
                  variants={textElementVariants}
                  className="text-sm mb-4 line-clamp-3 text-gray-200"
                >
                  {service.fullDescription}
                </motion.p>
                
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="px-5 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2"
                  style={{ backgroundColor: service.color }}
                >
                  Learn More
                  <motion.svg 
                    variants={arrowVariants}
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;