import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, index, hoveredCard, setHoveredCard, handleCardClick }) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.6,
        delay: index * 0.15,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.3,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.4,
      },
    },
  };

  const arrowVariants = {
    hover: {
      x: 4,
      transition: { type: "tween", ease: "easeOut", duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      onClick={() => handleCardClick(service.path)}
      className="bg-gray-900 border border-blue-900/30 rounded-xl overflow-hidden h-full flex flex-col shadow-md cursor-pointer transition-transform"
    >
      <motion.div className="h-48 overflow-hidden" variants={imageVariants}>
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-300"
        />
      </motion.div>

      <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-gray-900 to-blue-950">
        <h3 className="font-bold text-xl mb-3 text-blue-100">{service.title}</h3>
        <p className="text-blue-300 text-sm mb-4 flex-grow">{service.description}</p>
        <p className="text-blue-300 text-sm mb-4 flex-grow">{service.fullDescription}</p>


        <motion.div
          className="mt-auto text-blue-400 flex items-center text-sm font-medium"
          whileHover={{ color: "#93c5fd" }}
        >
          Learn More
          <motion.div variants={arrowVariants}>
            <ArrowRight className="h-4 w-4 ml-1" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
