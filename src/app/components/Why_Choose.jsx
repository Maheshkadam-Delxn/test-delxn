'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useInView, AnimatePresence } from 'framer-motion';

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

  // Services data array
  const services = [
    {
        title: "Innovation Lab",
        description: "Transform Ideas to Software!",
        fullDescription: "Our Innovation Lab turns innovative ideas into real-world software solutions. Through rapid prototyping, testing, and iteration, we help businesses develop market-ready applications. We collaborate closely with clients to refine concepts, ensuring that the final product is both functional and impactful, accelerating digital transformation and business growth.",
        image: "/serviceimages/1.png",
        fullCover: true,
        path: "/innovation"
    },
    {
        title: "Bespoke Development",
        description: "Tailored Software Solutions",
        fullDescription: "We craft customized software solutions designed specifically for your business needs. Our approach ensures precision, efficiency, and scalability, eliminating unnecessary complexity. From enterprise applications to automation tools, we build high-performance software that seamlessly integrates into your operations, enhancing productivity.",
        image: "/serviceimages/2.png",
        fullCover: true,
        path: "/bespoke"
    },
    {
        title: "User Experience",
        description: "Experience-Driven Design",
        fullDescription: "User experience is the foundation of great software. We design intuitive, engaging interfaces that enhance usability and customer satisfaction. Through in-depth research, wireframing, and testing, we create seamless digital experiences that captivate users. Our UX strategies ensure that your application is visually appealing and highly functional.",
        image: "/serviceimages/3.png",
        fullCover: true,
        path: "/userexperience"
    },
    {
        title: "Digital Transformation",
        description: "Process Automation",
        fullDescription: "Modernize your business with digital transformation. We help organizations automate processes, optimize workflows, and adopt emerging technologies for efficiency and growth. Our solutions include cloud adoption, AI integration, and process automation, enabling businesses to stay competitive while reducing costs.",
        image: "/serviceimages/4.jpg",
        fullCover: true,
        path: "/digital-transformation"
    },
    {
        title: "Cloud Solutions",
        description: "Scalable & Secure Cloud Services",
        fullDescription: "Unlock the full potential of cloud computing with scalable, secure solutions. We design and implement cloud architectures that enhance performance, reliability, and security. Whether you're migrating to the cloud or optimizing existing infrastructure, our expertise ensures seamless integration and cost-effectiveness.",
        image: "/serviceimages/5.jpg",
        fullCover: true,
        path: "/cloud"
    },
    {
        title: "Intelligent Systems",
        description: "AI-Powered Intelligence",
        fullDescription: "Leverage AI to drive intelligent decision-making. Our solutions integrate machine learning, predictive analytics, and automation to transform data into actionable insights. From AI-driven automation to advanced data modeling, we build intelligent systems that enhance efficiency and streamline operations.",
        image: "/serviceimages/6.jpg",
        fullCover: true,
        hasExpand: true,
        path: "/intelligent-systems"
    },
    {
        title: "No-Code & Low-Code Platforms",
        description: "Launch Websites & Apps Effortlessly",
        fullDescription: "Build websites and applications without coding using powerful no-code and low-code platforms. We help businesses leverage tools like Shopify, Wix, and Bubble to create professional-grade solutions quickly. Whether you need an eCommerce store or a custom business app, our expertise ensures seamless setup and optimization.",
        image: "/serviceimages/7.jpg",
        fullCover: true,
        path: "/nocode"
    },
    {
        title: "AI & ML-Driven Automation",
        description: "Smart Automation with AI & ML",
        fullDescription: "Automate tasks, optimize processes, and enhance decision-making using AI and machine learning. We develop intelligent solutions that improve efficiency, predict trends, and personalize user experiences. From chatbots to advanced data models, our AI-driven automation transforms businesses by reducing manual efforts and increasing productivity.",
        image: "/serviceimages/8.jpg",
        fullCover: true,
        path: "/ai-automation"
    }
  ];

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

  // Card animation with improved physics
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
      y: -10,
      scale: 1.03,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
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

  // Hover content animation
  const hoverContentVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      height: 0
    },
    visible: { 
      opacity: 1, 
      y: 0,
      height: "auto",
      transition: { 
        duration: 0.4,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  // Button animation
  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="relative overflow-hidden rounded-xl shadow-xl h-96 sm:h-80"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(service.path)}
            >
              {/* Card border glow effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={hoveredCard === index ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute -inset-0.5 rounded-xl bg-gradient-to-r"
                style={{ 
                  backgroundImage: `linear-gradient(to right, ${service.color}, ${service.color}CC)`,
                  filter: "blur(2px)" 
                }}
              />
              
              <div className="relative h-full w-full bg-[#0a0a0a] rounded-xl cursor-pointer">
                {/* Background Image with parallax effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  animate={hoveredCard === index ? {
                    scale: 1.1,
                    filter: "blur(3px)"
                  } : {
                    scale: 1,
                    filter: "blur(0px)"
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.6, 0.05, 0.01, 0.9]
                  }}
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 rounded-xl" />
                </motion.div>

                {/* Card Content with animations */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <motion.div
                    variants={contentVariants}
                    className="space-y-2"
                  >
                    <div className="flex items-center">
                      <div className="w-1 h-6 bg-gradient-to-b rounded-full mr-3" style={{ backgroundColor: service.color }} />
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-sm text-gray-300">{service.description}</p>
                  </motion.div>

                  {/* Animated hover content */}
                  <AnimatePresence>
                    {hoveredCard === index && (
                      <motion.div
                        variants={hoverContentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="mt-4"
                      >
                        <p className="text-sm mb-4 line-clamp-3 text-gray-200">{service.fullDescription}</p>
                        <motion.button
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          className="px-5 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2"
                          style={{ backgroundColor: service.color }}
                        >
                          Learn More
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesGrid;