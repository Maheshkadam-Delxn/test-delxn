// pages/legacy-modernization.js
import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LegacyModernization() {
  useEffect(() => {
    // Add any additional initialization for animations if needed
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-navy-900 text-white">
      <Head>
        <title>Legacy Modernization</title>
        <meta name="description" content="Legacy Application Modernization and Migration Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-blue-400 mb-16">Legacy Modernization</h1>
          
          <p className="text-lg max-w-4xl mx-auto">
            Our Domain Expert effectively addresses the challenges of legacy application modernization and migration 
            necessitates meticulous planning, a well-structured strategy, and the right tools and expertise.
          </p>
        </motion.div>

        {/* Services Icons Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="flex flex-col items-center text-center"
            variants={fadeIn}
          >
            <div className="border-2 border-white rounded-full p-6 mb-6 w-24 h-24 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Enhance Existing Legacy Application</h3>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center text-center"
            variants={fadeIn}
          >
            <div className="border-2 border-white rounded-full p-6 mb-6 w-24 h-24 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Transform Into New System</h3>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center text-center"
            variants={fadeIn}
          >
            <div className="border-2 border-white rounded-full p-6 mb-6 w-24 h-24 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Improve User Experience</h3>
          </motion.div>
        </motion.div>

        {/* Main Content Section with Image and Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500 opacity-10 z-0"></div>
            <img 
              src="/images/legacy-modernization.svg" 
              alt="Legacy Modernization Illustration" 
              className="relative z-10"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/500x400?text=Legacy+Modernization";
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6">We enable businesses to accelerate their outcomes.</h2>
            
            <p className="mb-4">
              A comprehensive discovery and assessment process identifies functional and technical debt, supporting rationalization prior to modernization. This process also assesses cloud readiness and identifies potential blockers for the portfolio being reviewed.
            </p>
            
            <p>
              We employ a factory model to set up assembly lines for our modernization efforts.
            </p>
          </motion.div>
        </div>

        {/* Services List Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-blue-400 mb-8">Our Services</h2>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {[
              "Application, data, and infrastructure assessment",
              "Cloud readiness assessment",
              "Micro services architecture readiness assessment",
              "Rehosting, refactoring, rearchitecting, replacing, or rebuilding",
              "Reverse engineering and functional decomposition",
              "Web-enablement",
              "Database and data migration",
              "Optimization",
              "Transition and support"
            ].map((service, index) => (
              <motion.li 
                key={index} 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="min-w-5 mt-1">
                  <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                </div>
                <span>{service}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* From Vision to Reality Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">From Vision to Reality</h2>
          <p className="text-lg mb-12">
            We craft and deliver Excellent and innovative products from initial concept to final implementation.
          </p>
        </motion.div>

        {/* Vision Process Icons */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {[
            {
              title: "Define",
              description: "Collect all you thoughts.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              )
            },
            {
              title: "Brainstorm",
              description: "Brainstorm it and list down the ideas.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              )
            },
            {
              title: "Prototype",
              description: "Transform your ideas into real, tangible representations.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              )
            },
            {
              title: "Quality",
              description: "Ask for feedback.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            {
              title: "Implement",
              description: "Turn the vision into reality",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              )
            },
            {
              title: "Research",
              description: "Carry out research to gain insight into your users",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              )
            }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center text-center"
              variants={fadeIn}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="border-2 border-white rounded-full p-4 mb-4 w-20 h-20 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}