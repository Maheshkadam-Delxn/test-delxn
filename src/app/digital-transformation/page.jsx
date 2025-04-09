'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CloudCog, 
  Workflow, 
  Globe, 
  Shield, 
  BarChart, 
  Zap,
  Server,
  Database,
  Target,
  Lock,
  TrendingUp,
  Rocket
} from 'lucide-react';

const page = () => {
  const transformationFocusAreas = [
    {
      icon: <CloudCog className="w-12 h-12 text-blue-400" />,
      title: 'Digital Strategy',
      description: 'Customized roadmaps to digitalize your business model, ensuring a comprehensive and strategic approach to digital transformation.'
    },
    {
      icon: <Workflow className="w-12 h-12 text-green-400" />,
      title: 'Technology Integration',
      description: 'Seamless implementation of cutting-edge tools to manage logistics, payments, data, and critical business operations.'
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-400" />,
      title: 'Cultural Shift & Upskilling',
      description: 'Comprehensive training and change management to help teams adapt to and thrive in digital systems.'
    }
  ];

  const digitalTransformationServices = [
    {
      icon: <Server className="w-10 h-10 text-blue-400" />,
      title: 'Cloud Migration & Modernization',
      description: 'Seamless transition from traditional paperwork to scalable, cloud-based software solutions.'
    },
    {
      icon: <Workflow className="w-10 h-10 text-green-400" />,
      title: 'Business Process Reengineering',
      description: 'Comprehensive workflow automation and efficiency optimization across your organization.'
    },
    {
      icon: <Database className="w-10 h-10 text-purple-400" />,
      title: 'Data Analytics & Business Intelligence',
      description: 'Advanced insights generation to drive data-driven strategic decisions.'
    },
    {
      icon: <Target className="w-10 h-10 text-red-400" />,
      title: 'Customer Experience Transformation',
      description: 'Digital reimagining of customer interactions and service delivery channels.'
    }
  ];

  const corePillars = [
    {
      step: 'Cloud Adoption',
      description: 'Transition to scalable online platforms that enhance operational flexibility.',
      icon: <CloudCog className="w-10 h-10 text-blue-400" />
    },
    {
      step: 'Process Automation',
      description: 'Eliminate manual work and optimize logistics through intelligent automation.',
      icon: <Zap className="w-10 h-10 text-green-400" />
    },
    {
      step: 'Omnichannel Presence',
      description: 'Create seamless customer experiences across multiple digital channels.',
      icon: <Globe className="w-10 h-10 text-purple-400" />
    },
    {
      step: 'Cybersecurity',
      description: 'Implement robust security measures to protect sensitive business data.',
      icon: <Lock className="w-10 h-10 text-red-400" />
    },
    {
      step: 'Data-Driven Decisions',
      description: 'Leverage real-time insights to make informed, strategic business choices.',
      icon: <BarChart className="w-10 h-10 text-blue-400" />
    },
    {
      step: 'Continuous Innovation',
      description: 'Stay ahead of the curve with iterative improvements and emerging technologies.',
      icon: <TrendingUp className="w-10 h-10 text-green-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#001C3B] text-white mt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6 phone:text-4xl">
            Digital Transformation
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Transform Your Offline Business into a Scalable Digital Powerhouse
          </p>
        </motion.div>

        {/* Transformation Focus Areas */}
        <section className="mb-16 bg-[#002C5B] rounded-xl p-12 phone:bg-transparent phone:p-2">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            Why Digital Transformation?
          </h2>
          <p className="text-center text-blue-200 max-w-2xl mx-auto mb-12">
            In today's fast-paced world, businesses that remain offline struggle with inefficiencies, limited reach, and operational bottlenecks. Digital transformation enhances customer experiences, unlocks new revenue streams, and builds operational resilience.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {transformationFocusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#003C6B] shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {area.title}
                </h3>
                <p className="text-blue-200">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Digital Transformation Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            Our Digital Transformation Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {digitalTransformationServices.map((service, index) => (
              <div 
                key={index} 
                className="flex phone:flex-col phone:items-center phone:gap-4 items-start space-x-4 bg-[#002C5B] p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                <div>{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white phone:text-center">
                    {service.title}
                  </h3>
                  <p className="text-blue-200 phone:text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Pillars of Transformation */}
        <section className="mb-16 bg-[#002C5B] rounded-xl p-12 phone:bg-transparent phone:p-2">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            Core Pillars of Transformation
          </h2>
          <p className="text-center text-blue-200 max-w-2xl mx-auto mb-12">
            Our approach is built on six core pillars that drive business success and digital innovation.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {corePillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#003C6B] shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {pillar.step}
                </h3>
                <p className="text-blue-200">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            The Future of Business is Digital
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            If you're still operating offline, let us help you transition to a powerful, automated, and scalable digital model that drives growth and innovation.
          </p>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            Begin Your Digital Transformation
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default page;