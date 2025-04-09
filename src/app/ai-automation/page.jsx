'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Cpu, 
  Zap, 
  Workflow,
  TrendingUp,
  Settings,
  BarChart,
  Target,
  Network,
  Activity,
  Bolt,
  PieChart
} from 'lucide-react';

const page = () => {
  const automationTypes = [
    {
      icon: <Bot className="w-12 h-12 text-blue-400" />,
      title: 'Intelligent Process Automation',
      description: 'Advanced AI-powered automation that dynamically adapts and learns from complex business processes, continuously optimizing workflow efficiency.'
    },
    {
      icon: <Workflow className="w-12 h-12 text-green-400" />,
      title: 'Cognitive Workflow Management',
      description: 'AI-driven systems that intelligently analyze, predict, and streamline organizational workflows, reducing bottlenecks and enhancing productivity.'
    },
    {
      icon: <Network className="w-12 h-12 text-purple-400" />,
      title: 'Autonomous Decision Systems',
      description: 'Machine learning algorithms that make real-time, data-driven decisions, reducing human intervention and minimizing potential errors.'
    }
  ];

  const automationServices = [
    {
      icon: <Zap className="w-10 h-10 text-blue-400" />,
      title: 'Intelligent Process Optimization',
      description: 'AI-powered analysis and redesign of business processes to maximize efficiency, reduce costs, and eliminate redundant tasks.'
    },
    {
      icon: <Activity className="w-10 h-10 text-green-400" />,
      title: 'Predictive Maintenance',
      description: 'Machine learning algorithms that predict equipment failures, schedule maintenance, and minimize unexpected downtime.'
    },
    {
      icon: <PieChart className="w-10 h-10 text-purple-400" />,
      title: 'Intelligent Analytics',
      description: 'Advanced data analysis and visualization tools that provide actionable insights and support strategic decision-making.'
    },
    {
      icon: <Bolt className="w-10 h-10 text-red-400" />,
      title: 'Robotic Process Automation',
      description: 'Automated software robots that handle repetitive, rule-based tasks across multiple business applications with high precision.'
    }
  ];

  const automationTransformationProcess = [
    {
      step: 'Assessment',
      description: 'Comprehensive evaluation of current processes and automation potential across organizational systems.',
      icon: <BarChart className="w-10 h-10 text-blue-400" />
    },
    {
      step: 'Strategy Design',
      description: 'Develop a tailored AI and ML-driven automation roadmap aligned with strategic business objectives.',
      icon: <Target className="w-10 h-10 text-green-400" />
    },
    {
      step: 'Implementation',
      description: 'Precise deployment of intelligent automation technologies with minimal operational disruption.',
      icon: <Settings className="w-10 h-10 text-purple-400" />
    },
    {
      step: 'Integration',
      description: 'Seamless connection of AI automation systems with existing enterprise infrastructure and data sources.',
      icon: <Cpu className="w-10 h-10 text-red-400" />
    },
    {
      step: 'Optimization',
      description: 'Continuous performance monitoring, machine learning model refinement, and automation capability enhancement.',
      icon: <TrendingUp className="w-10 h-10 text-blue-400" />
    },
    {
      step: 'Innovation',
      description: 'Ongoing exploration of emerging AI technologies to drive continuous improvement and competitive advantage.',
      icon: <Bot className="w-10 h-10 text-green-400" />
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
            AI & ML-Driven Automation
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Transformative Intelligent Automation Solutions Powered by Cutting-Edge Artificial Intelligence
          </p>
        </motion.div>

        {/* Automation Types */}
        <section className="mb-16 bg-[#002C5B] rounded-xl p-12 phone:bg-transparent phone:p-2">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            Automation Technology Models
          </h2>
          <p className="text-center text-blue-200 max-w-2xl mx-auto mb-12">
            Revolutionary AI and machine learning technologies that redefine operational efficiency and strategic decision-making.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {automationTypes.map((automation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#003C6B] shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  {automation.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {automation.title}
                </h3>
                <p className="text-blue-200">
                  {automation.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Automation Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            Our Intelligent Automation Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {automationServices.map((solution, index) => (
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

        {/* Automation Transformation Process */}
        <section className="mb-16 bg-[#002C5B] rounded-xl p-12 phone:bg-transparent phone:p-2">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            Intelligent Automation Journey
          </h2>
          <p className="text-center text-blue-200 max-w-2xl mx-auto mb-12">
            A strategic approach to integrating AI and machine learning technologies that drive operational excellence and innovation.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {automationTransformationProcess.map((process, index) => (
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
            Revolutionize Your Business with Intelligent Automation
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Leverage the power of AI and machine learning to transform your operational efficiency, reduce costs, and unlock unprecedented strategic insights.
          </p>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            Explore Automation Solutions
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default page;