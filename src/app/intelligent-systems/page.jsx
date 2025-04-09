'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Rocket, 
  Lightbulb, 
  Network,
  PieChart,
  Activity,
  Glasses,
  Settings,
  BarChart2,
  Workflow,
  Target
} from 'lucide-react';

const page = () => {
  const intelligentSystemTypes = [
    {
      icon: <Brain className="w-12 h-12 text-blue-400" />,
      title: 'Artificial Intelligence Systems',
      description: 'Advanced AI solutions that leverage machine learning and deep learning to drive intelligent decision-making and predictive analytics.'
    },
    {
      icon: <Cpu className="w-12 h-12 text-green-400" />,
      title: 'Machine Learning Platforms',
      description: 'Comprehensive platforms that enable automated model training, deployment, and continuous optimization of machine learning algorithms.'
    },
    {
      icon: <Network className="w-12 h-12 text-purple-400" />,
      title: 'Neural Network Solutions',
      description: 'Cutting-edge neural network architectures that solve complex computational problems with human-like intelligence and precision.'
    }
  ];

  const intelligentSystemServices = [
    {
      icon: <Rocket className="w-10 h-10 text-blue-400" />,
      title: 'AI Strategy Consulting',
      description: 'Comprehensive AI transformation strategy that aligns intelligent technologies with your business objectives and growth vision.'
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-green-400" />,
      title: 'Custom AI Development',
      description: 'Tailored intelligent system solutions designed to address unique business challenges and unlock new operational capabilities.'
    },
    {
      icon: <PieChart className="w-10 h-10 text-purple-400" />,
      title: 'Predictive Analytics',
      description: 'Advanced data analysis and forecasting solutions that transform raw data into actionable strategic insights.'
    },
    {
      icon: <Activity className="w-10 h-10 text-red-400" />,
      title: 'Intelligent Automation',
      description: 'AI-powered automation technologies that streamline processes, reduce manual work, and enhance overall organizational efficiency.'
    }
  ];

  const intelligentSystemTransformationProcess = [
    {
      step: 'Discovery',
      description: 'Comprehensive assessment of current technological landscape and intelligent system potential.',
      icon: <Glasses className="w-10 h-10 text-blue-400" />
    },
    {
      step: 'Design',
      description: 'Develop a customized intelligent systems strategy aligned with business goals.',
      icon: <Target className="w-10 h-10 text-green-400" />
    },
    {
      step: 'Implementation',
      description: 'Precise and careful deployment of intelligent systems with minimal operational disruption.',
      icon: <Settings className="w-10 h-10 text-purple-400" />
    },
    {
      step: 'Integration',
      description: 'Seamless integration of AI technologies with existing business infrastructure.',
      icon: <Workflow className="w-10 h-10 text-red-400" />
    },
    {
      step: 'Optimization',
      description: 'Continuous performance monitoring and intelligent system refinement.',
      icon: <BarChart2 className="w-10 h-10 text-blue-400" />
    },
    {
      step: 'Evolution',
      description: 'Ongoing innovation and adaptation of intelligent technologies.',
      icon: <Cpu className="w-10 h-10 text-green-400" />
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
            Intelligent Systems
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Cutting-Edge AI and Machine Learning Solutions Driving Technological Innovation
          </p>
        </motion.div>

        {/* Intelligent System Types */}
        <section className="mb-16 bg-[#002C5B] rounded-xl p-12 phone:bg-transparent phone:p-2">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            Intelligent System Models
          </h2>
          <p className="text-center text-blue-200 max-w-2xl mx-auto mb-12">
            Transformative intelligent systems designed to empower businesses with advanced computational capabilities and strategic insights.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {intelligentSystemTypes.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#003C6B] shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  {system.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {system.title}
                </h3>
                <p className="text-blue-200">
                  {system.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Intelligent System Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            Our Intelligent Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {intelligentSystemServices.map((solution, index) => (
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

        {/* Intelligent System Transformation Process */}
        <section className="mb-16 bg-[#002C5B] rounded-xl p-12 phone:bg-transparent phone:p-2">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            Intelligent Systems Journey
          </h2>
          <p className="text-center text-blue-200 max-w-2xl mx-auto mb-12">
            A strategic approach to integrating intelligent technologies that drive innovation, efficiency, and competitive advantage.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {intelligentSystemTransformationProcess.map((process, index) => (
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
            Unleash the Power of Intelligent Technologies
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Elevate your business with state-of-the-art intelligent systems that deliver unprecedented insights, efficiency, and competitive advantage.
          </p>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            Explore Intelligent Solutions
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default page;