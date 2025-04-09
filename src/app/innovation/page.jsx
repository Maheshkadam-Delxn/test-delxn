'use client';

import React from 'react';
//sampe
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Rocket, 
  PenTool, 
  Check, 
  Zap, 
  Target,
  TrendingUp,
  Globe,
  Compass,
  Layout,
  Layers,
  BookOpen 
} from 'lucide-react';

const page = () => {
  const keyFocusAreas = [
    {
      icon: <Rocket className="w-12 h-12 text-blue-400" />,
      title: 'Rapid Prototyping',
      description: 'Quick development of initial concepts to validate and refine innovative ideas.'
    },
    {
      icon: <Globe className="w-12 h-12 text-green-400" />,
      title: 'Emerging Tech Exploration',
      description: 'Proactively investigating cutting-edge technologies to stay ahead of market trends.'
    },
    {
      icon: <Compass className="w-12 h-12 text-purple-400" />,
      title: 'Idea Validation & PoC',
      description: 'Rigorous assessment and proof of concept development to transform ideas into viable solutions.'
    }
  ];

  const innovationServices = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      title: 'Technology Trend Analysis',
      description: 'Deep dive into emerging technologies and their potential business applications.'
    },
    {
      icon: <Layout className="w-8 h-8 text-green-400" />,
      title: 'Ideation Workshops',
      description: 'Collaborative sessions to generate breakthrough ideas and innovative strategies.'
    },
    {
      icon: <Layers className="w-8 h-8 text-purple-400" />,
      title: 'Concept Validation',
      description: 'Systematic evaluation of innovative concepts for market viability and potential impact.'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-red-400" />,
      title: 'Proof of Concept (PoC) Development',
      description: 'Building functional prototypes to demonstrate technological feasibility.'
    }
  ];

  const innovationProcess = [
    {
      step: 'Identify',
      description: 'Understand business challenges and strategic goals.',
      icon: <Lightbulb className="w-10 h-10 text-blue-400" />
    },
    {
      step: 'Ideate',
      description: 'Generate innovative solutions through collaborative brainstorming.',
      icon: <PenTool className="w-10 h-10 text-green-400" />
    },
    {
      step: 'Mockup',
      description: 'Create rapid working prototypes and initial design concepts.',
      icon: <Target className="w-10 h-10 text-purple-400" />
    },
    {
      step: 'Evaluate',
      description: 'Rigorously test feasibility and collect actionable feedback.',
      icon: <Check className="w-10 h-10 text-red-400" />
    },
    {
      step: 'Deploy',
      description: 'Convert validated ideas into scalable, real-world solutions.',
      icon: <Rocket className="w-10 h-10 text-indigo-400" />
    },
    {
      step: 'Explore',
      description: 'Continuously scout and integrate emerging technologies and trends.',
      icon: <Zap className="w-10 h-10 text-yellow-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#001C3B] mt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section with Gradient Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 opacity-30 animate-gradient-x rounded-xl blur-2xl"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-blue-200 mb-6">
              Innovation Lab
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Blending technology, creativity, and business strategy to craft innovative solutions and rapidly validate ideas into real-world impact.
            </p>
          </div>
        </motion.div>

        {/* Key Focus Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12 text-blue-200">
            Key Focus Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {keyFocusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#002951] shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-2 border border-blue-800"
              >
                <div className="flex justify-center mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-200">
                  {area.title}
                </h3>
                <p className="text-gray-300">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Innovation Services */}
        <section className="bg-[#00264A] rounded-xl p-12 mb-16 border border-blue-800 phone:p-2 phone:border-none phone:bg-transparent">
          <h2 className="text-3xl font-semibold text-center mb-12 text-blue-200">
            Our Innovation Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {innovationServices.map((service, index) => (
              <div 
                key={index} 
                className="flex items-start phone:flex-col phone:items-center phone:gap-2 space-x-4 bg-[#002951] p-6 rounded-lg shadow-md hover:shadow-xl transition-all border border-blue-800"
              >
                <div>{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-200 phone:text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-300  phone:text-justify">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Innovation Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12 text-blue-200">
            Process - From Idea to Reality
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {innovationProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#002951] shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-2 border border-blue-800"
              >
                <div className="flex justify-center mb-4">
                  {process.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-blue-200">
                  {process.step}
                </h3>
                <p className="text-gray-300">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action with Gradient */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-blue-800 opacity-30 animate-gradient-x rounded-xl blur-2xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-blue-200 mb-6">
              Ready to Transform Ideas into Reality?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate to unlock your organization's innovative potential and drive breakthrough solutions.
            </p>
            <button className="bg-blue-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl">
              Ignite Your Innovation Journey
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default page;