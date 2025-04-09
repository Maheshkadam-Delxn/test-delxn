'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Palette, 
  Users, 
  Target, 
  Layers, 
  Zap,
  Layout,
  Smile,
  MousePointer,
  BookOpen,
  Globe
} from 'lucide-react';

const page = () => {
  const uxDesignPrinciples = [
    {
      icon: <Users className="w-12 h-12 text-blue-400" />,
      title: 'User-Centered Design',
      description: 'Putting users at the core of every design decision, ensuring intuitive and meaningful interactions.'
    },
    {
      icon: <Palette className="w-12 h-12 text-green-400" />,
      title: 'Aesthetic Functionality',
      description: 'Combining visual appeal with practical usability to create engaging and effective interfaces.'
    },
    {
      icon: <Target className="w-12 h-12 text-purple-400" />,
      title: 'Purposeful Design',
      description: 'Creating solutions that not only look great but solve real user problems and business challenges.'
    }
  ];

  const uxServices = [
    {
      icon: <Monitor className="w-10 h-10 text-blue-400 " />,
      title: 'UX Research & Strategy',
      description: 'In-depth user research, persona development, and strategic UX planning to guide design decisions.'
    },
    {
      icon: <Layout className="w-10 h-10 text-green-400" />,
      title: 'Interface Design',
      description: 'Crafting intuitive, visually appealing interfaces that enhance user engagement and satisfaction.'
    },
    {
      icon: <Layers className="w-10 h-10 text-purple-400" />,
      title: 'Interaction Design',
      description: 'Designing meaningful interactions that create seamless and delightful user journeys.'
    },
    {
      icon: <Zap className="w-10 h-10 text-red-400" />,
      title: 'Usability Testing',
      description: 'Comprehensive user testing and feedback collection to continuously improve design effectiveness.'
    }
  ];

  const uxProcess = [
    {
      step: 'Discover',
      description: 'Deep dive into user needs, behaviors, and pain points through research and analysis.',
      icon: <BookOpen className="w-10 h-10 text-blue-400" />
    },
    {
      step: 'Define',
      description: 'Synthesize research insights to create clear user personas and problem statements.',
      icon: <Target className="w-10 h-10 text-green-400" />
    },
    {
      step: 'Design',
      description: 'Create wireframes, prototypes, and iterative design solutions.',
      icon: <Palette className="w-10 h-10 text-purple-400" />
    },
    {
      step: 'Test',
      description: 'Conduct usability testing and gather comprehensive user feedback.',
      icon: <MousePointer className="w-10 h-10 text-red-400" />
    },
    {
      step: 'Iterate',
      description: 'Refine and optimize designs based on user insights and testing results.',
      icon: <Zap className="w-10 h-10 text-blue-400" />
    },
    {
      step: 'Implement',
      description: 'Seamless design implementation with close collaboration with development teams.',
      icon: <Globe className="w-10 h-10 text-green-400" />
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
          <h1 className="text-5xl font-bold text-white mb-6">
            User Experience Design
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Crafting Intuitive Digital Experiences That Delight Users and Drive Business Success
          </p>
        </motion.div>

        {/* UX Design Principles */}
        <section className="mb-16 bg-[#002C5B] rounded-xl p-12 phone:bg-transparent phone:p-2">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            Our UX Design Principles
          </h2>
          <p className="text-center text-blue-200 max-w-2xl mx-auto mb-12">
            We believe great user experience goes beyond aesthetics. It's about creating meaningful, intuitive interactions that solve real user problems.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {uxDesignPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#003C6B] shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {principle.title}
                </h3>
                <p className="text-blue-200">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* UX Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            Our UX Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {uxServices.map((service, index) => (
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

        {/* UX Process */}
        <section className="mb-16 bg-[#002C5B] rounded-xl p-12 phone:bg-transparent phone:p-2">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            Our UX Design Process
          </h2>
          <p className="text-center text-blue-200 max-w-2xl mx-auto mb-12">
            A systematic, user-centered approach to designing exceptional digital experiences that solve complex problems.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {uxProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#003C6B] shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  {process.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {process.step}
                </h3>
                <p className="text-blue-200">
                  {process.description}
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
            Ready to Elevate Your User Experience?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Let's transform your digital product into an intuitive, engaging experience that delights users and drives business success.
          </p>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            Start Your UX Journey
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default page;