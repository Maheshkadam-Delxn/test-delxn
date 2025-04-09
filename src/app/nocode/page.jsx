'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Blocks, 
  Puzzle, 
  Layers, 
  Terminal,
  Wand2,
  MousePointerClick,
  Grid,
  Zap,
  Settings,
  BarChart,
  Link,
  Target
} from 'lucide-react';

const page = () => {
  const platformTypes = [
    {
      icon: <Blocks className="w-12 h-12 text-blue-400" />,
      title: 'No-Code Platforms',
      description: 'Visual development environments that enable non-technical users to create powerful applications without writing a single line of code.'
    },
    {
      icon: <Puzzle className="w-12 h-12 text-green-400" />,
      title: 'Low-Code Solutions',
      description: 'Flexible development platforms that combine visual design with minimal custom coding, accelerating application delivery and innovation.'
    },
    {
      icon: <Layers className="w-12 h-12 text-purple-400" />,
      title: 'Hybrid Development Platforms',
      description: 'Comprehensive solutions that seamlessly blend no-code and low-code capabilities for maximum flexibility and scalability.'
    }
  ];

  const platformServices = [
    {
      icon: <Wand2 className="w-10 h-10 text-blue-400" />,
      title: 'Application Development',
      description: 'Rapid creation of custom business applications with intuitive drag-and-drop interfaces and pre-built components.'
    },
    {
      icon: <Terminal className="w-10 h-10 text-green-400" />,
      title: 'Enterprise Integration',
      description: 'Seamless connection of existing systems and data sources through powerful no-code integration tools.'
    },
    {
      icon: <MousePointerClick className="w-10 h-10 text-purple-400" />,
      title: 'Process Automation',
      description: 'Intelligent workflow automation that empowers teams to streamline complex business processes without extensive technical expertise.'
    },
    {
      icon: <Link className="w-10 h-10 text-red-400" />,
      title: 'API & Connector Development',
      description: 'Create and manage custom APIs and connectors with minimal coding, enabling rapid digital transformation.'
    }
  ];

  const platformTransformationProcess = [
    {
      step: 'Discovery',
      description: 'Comprehensive assessment of existing workflows and digital transformation potential.',
      icon: <BarChart className="w-10 h-10 text-blue-400" />
    },
    {
      step: 'Strategy',
      description: 'Develop a tailored no-code/low-code implementation roadmap aligned with business objectives.',
      icon: <Target className="w-10 h-10 text-green-400" />
    },
    {
      step: 'Implementation',
      description: 'Guided platform selection and initial application development with expert support.',
      icon: <Grid className="w-10 h-10 text-purple-400" />
    },
    {
      step: 'Integration',
      description: 'Seamless connection with existing enterprise systems and data sources.',
      icon: <Zap className="w-10 h-10 text-red-400" />
    },
    {
      step: 'Optimization',
      description: 'Continuous performance monitoring and platform capability enhancement.',
      icon: <Settings className="w-10 h-10 text-blue-400" />
    },
    {
      step: 'Empowerment',
      description: 'Training and enablement to build internal no-code/low-code capabilities.',
      icon: <MousePointerClick className="w-10 h-10 text-green-400" />
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
            No-Code/Low-Code Platforms
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Democratizing Software Development with Powerful, User-Friendly Platform Solutions
          </p>
        </motion.div>

        {/* Platform Types */}
        <section className="mb-16 bg-[#002C5B] rounded-xl p-12 phone:bg-transparent phone:p-2">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            Platform Development Models
          </h2>
          <p className="text-center text-blue-200 max-w-2xl mx-auto mb-12">
            Innovative platforms that empower businesses to build sophisticated digital solutions without traditional coding barriers.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {platformTypes.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#003C6B] shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {platform.title}
                </h3>
                <p className="text-blue-200">
                  {platform.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Platform Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            Our No-Code/Low-Code Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {platformServices.map((solution, index) => (
              <div 
                key={index} 
                className="flex phone:flex-col phone:items-center phone:gap-4 items-start space-x-4 bg-[#002C5B] p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                <div>{solution.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white phone:text-center">
                    {solution.title}
                  </h3>
                  <p className="text-blue-200 phone:text-center">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Platform Transformation Process */}
        <section className="mb-16 bg-[#002C5B] rounded-xl p-12 phone:bg-transparent phone:p-2">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            No-Code/Low-Code Transformation Journey
          </h2>
          <p className="text-center text-blue-200 max-w-2xl mx-auto mb-12">
            A strategic approach to democratizing software development and accelerating digital innovation across your organization.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {platformTransformationProcess.map((process, index) => (
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
            Transform Your Digital Capabilities
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Unlock the power of no-code and low-code platforms to accelerate innovation, reduce development costs, and empower your entire organization.
          </p>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            Explore No-Code Solutions
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default page;