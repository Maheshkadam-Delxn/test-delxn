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

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setLoadingComplete(true), 100);
    }
  }, [isInView]);

  const handleCardClick = (path) => {
    router.push(path);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        delay: 0.2
      }
    }
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.5
      }
    }
  };

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="py-24 px-6 md:px-12 lg:px-24 relative bg-gradient-to-b from-blue-950 to-gray-900"
    >
      {/* Background Pattern with subtle animation */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}
        />
      </motion.div>

      <div className="relative z-10">
        {/* Section Title */}
        <motion.div variants={titleVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-100 mb-4">Our Services</h2>
          <motion.div
            className="w-24 h-1 bg-blue-500 mx-auto rounded-full origin-left"
            variants={underlineVariants}
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate={loadingComplete ? 'visible' : 'hidden'}
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
