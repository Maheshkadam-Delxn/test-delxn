"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Lightbulb, Shield, Users, Zap, Users2 } from "lucide-react";

const CoreValues = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const valuesData = [
    {
      icon: <Award className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300" />,
      title: "Excellence",
      description: "Surpassing basic requirements and expectations in all endeavors.",
      className: "border-yellow-400/30 bg-yellow-400/10 hover:border-yellow-500 hover:border-1 transition-all ease-in-out duration-300",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />,
      title: "Innovation",
      description: "Executing new ideas effectively to add value for customers and stakeholders.",
      className: "border-blue-400/30 bg-blue-400/10 hover:border-blue-500 hover:border-1 transition-all ease-in-out duration-300",
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400 group-hover:text-green-300" />,
      title: "Integrity",
      description: "Upholding the highest ethical standards and committing to doing the right thing consistently.",
      className: "border-green-400/30 bg-green-400/10 hover:border-green-500 hover:border-1 transition-all ease-in-out duration-300",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />,
      title: "Customer-Centricity",
      description: "Prioritizing customer needs and striving to exceed their expectations.",
      className: "border-purple-400/30 bg-purple-400/10 hover:border-purple-500 hover:border-1 transition-all ease-in-out duration-300",
    },
    {
      icon: <Zap className="w-6 h-6 text-red-400 group-hover:text-red-300" />,
      title: "Agility",
      description: "Adapting swiftly to changes and responding promptly to market needs and challenges.",
      className: "border-red-400/30 bg-red-400/10 hover:border-red-500 hover:border-1 transition-all ease-in-out duration-300",
    },
    {
      icon: <Users2 className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />,
      title: "Teamwork",
      description: "Fostering individual growth while achieving collective success.",
      className: "border-cyan-400/30 bg-cyan-400/10 hover:border-cyan-500 hover:border-1 transition-all ease-in-out duration-300",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-900 pb-20">
      {/* Decorative elements */}
      <div className="absolute w-full h-full">
        <svg className="absolute top-0 right-0 opacity-10" width="404" height="404" fill="none" viewBox="0 0 404 404">
          <defs>
            <pattern id="pattern1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-blue-500" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#pattern1)" />
        </svg>
        <svg className="absolute bottom-0 left-0 opacity-10" width="404" height="404" fill="none" viewBox="0 0 404 404">
          <defs>
            <pattern id="pattern2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-purple-500" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#pattern2)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm text-purple-400 font-semibold uppercase tracking-wider mb-4">What Drives Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-200">Our Core Values</h3>
          <p className="text-gray-300">Our values form the foundation of everything we do and guide our decisions at every step.</p>
        </motion.div>

        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valuesData.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group border ${value.className} rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-1 hover:bg-opacity-20 `}
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 transform transition-transform duration-300 group-hover:scale-110">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-200 group-hover:text-white">{value.title}</h4>
              </div>
              <p className="text-gray-300 group-hover:text-gray-200">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;