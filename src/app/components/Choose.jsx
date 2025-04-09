'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useInView } from 'framer-motion';
import ServiceCard from './Card.jsx';
import { servicesData } from './services-data.js';

const ServicesGrid = () => {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [loadingComplete, setLoadingComplete] = useState(false);

  // Simulate loading completion
  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setLoadingComplete(true);
      }, 300);
    }
  }, [isInView]);

  const handleCardClick = (path) => {
    router.push(path);
  };

  // Main section animation
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  // Title animation
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
        delay: 0.2
      }
    }
  };

  // Staggered grid animation
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3,
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  return (
    <motion.section
      id="services"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-gradient-to-b from-[#060606] to-[#0a0a0a] text-white px-4 py-16  md:px-8 lg:px-16 min-h-screen relative overflow-hidden phone:px-16"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/10 to-transparent opacity-20"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-blue-500/10"
            animate={{
              x: [Math.random() * 100, Math.random() * 100 - 50],
              y: [Math.random() * 100, Math.random() * 100 - 50],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title with reveal animation */}
        <motion.div
          variants={titleVariants}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl font-bold mb-8 md:mb-12 text-center"
          >
            What We Offer
          </motion.h1>
        </motion.div>

        {/* Services grid with staggered animation */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate={loadingComplete ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
              handleCardClick={handleCardClick}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesGrid;