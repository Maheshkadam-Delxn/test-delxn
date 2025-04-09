'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useInView } from 'framer-motion';
import ServiceCard from './Card';
import { servicesData } from './services-data.js';

const ServicesGrid = () => {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [loadingComplete, setLoadingComplete] = useState(false);

  // Smoother loading transition
  useEffect(() => {
    if (isInView) {
      // Shorter delay for smoother appearance
      setTimeout(() => {
        setLoadingComplete(true);
      }, 100);
    }
  }, [isInView]);

  const handleCardClick = (path) => {
    router.push(path);
  };

  // Smoother section animation
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Smoother title animation
  const titleVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        delay: 0.1
      }
    }
  };

  // Smoother grid animation with proper staggering
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.08,
        delayChildren: 0.2,
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-24 px-6 md:px-12 lg:px-24 relative bg-gradient-to-b from-blue-950 to-gray-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative">
        {/* Section Title with smoother animation */}
        <motion.div 
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-100 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Services Grid with smoother staggered animation */}
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          animate={loadingComplete ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
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