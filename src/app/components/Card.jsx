import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, index, hoveredCard, setHoveredCard, handleCardClick }) => {
  // Smoother card animation with improved timing
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "tween", 
        ease: "easeOut",
        duration: 0.6,
        delay: index * 0.1
      }
    },
    hover: {
      y: -5,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.2
      }
    }
  };

  // Smoother image animation
  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.4
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="bg-gray-900 border border-blue-900/30 rounded-xl overflow-hidden h-full flex flex-col shadow-md"
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      onClick={() => handleCardClick(service.path)}
    >
      <div className="h-48 overflow-hidden">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          variants={imageVariants}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-gray-900 to-blue-950">
        <h3 className="font-bold text-xl mb-3 text-blue-100">{service.title}</h3>
        <p className="text-blue-300 text-sm mb-4 flex-grow">{service.description}</p>
        <div className="mt-auto">
          <motion.button 
            className="text-blue-400 flex items-center text-sm font-medium"
            whileHover={{ x: 2, color: "#93c5fd" }}
            transition={{ duration: 0.2 }}
          >
            Learn More
            <motion.div
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="h-4 w-4 ml-1" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;