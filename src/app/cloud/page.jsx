'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Shield, 
  Globe, 
  Lock, 
  BarChart, 
  CloudCog,
  Upload,
  Database,
  Layers,
  Target,
  Zap,
  TrendingUp
} from 'lucide-react';

const page = () => {
  const cloudServiceTypes = [
    {
      icon: <Server className="w-12 h-12 text-blue-400" />,
      title: 'Infrastructure as a Service (IaaS)',
      description: 'Scalable cloud infrastructure that provides virtualized computing resources over the internet, eliminating the need for physical hardware management.'
    },
    {
      icon: <Layers className="w-12 h-12 text-green-400" />,
      title: 'Platform as a Service (PaaS)',
      description: 'Comprehensive development and deployment environment that enables businesses to create, run, and manage applications without complex infrastructure maintenance.'
    },
    {
      icon: <CloudCog className="w-12 h-12 text-purple-400" />,
      title: 'Software as a Service (SaaS)',
      description: 'Ready-to-use software applications delivered over the cloud, providing flexibility, accessibility, and seamless updates.'
    }
  ];

  const cloudSolutionServices = [
    {
      icon: <Upload className="w-10 h-10 text-blue-400" />,
      title: 'Cloud Migration',
      description: 'Seamless transition of existing systems and applications to cloud environments, ensuring minimal disruption and maximum efficiency.'
    },
    {
      icon: <Shield className="w-10 h-10 text-green-400" />,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure, data, and applications from potential threats and vulnerabilities.'
    },
    {
      icon: <Database className="w-10 h-10 text-purple-400" />,
      title: 'Cloud Data Management',
      description: 'Advanced data storage, backup, and recovery solutions that ensure your critical business information remains secure and accessible.'
    },
    {
      icon: <Globe className="w-10 h-10 text-red-400" />,
      title: 'Multi-Cloud Strategy',
      description: 'Optimize performance and minimize risk by leveraging multiple cloud providers and creating a flexible, resilient cloud ecosystem.'
    }
  ];

  const cloudTransformationProcess = [
    {
      step: 'Assessment',
      description: 'Comprehensive evaluation of existing IT infrastructure and business requirements.',
      icon: <BarChart className="w-10 h-10 text-blue-400" />
    },
    {
      step: 'Strategy Design',
      description: 'Develop a tailored cloud migration and optimization roadmap.',
      icon: <Target className="w-10 h-10 text-green-400" />
    },
    {
      step: 'Migration',
      description: 'Carefully execute cloud migration with minimal business disruption.',
      icon: <CloudCog className="w-10 h-10 text-purple-400" />
    },
    {
      step: 'Optimization',
      description: 'Continuous performance tuning and cost optimization of cloud resources.',
      icon: <Zap className="w-10 h-10 text-red-400" />
    },
    {
      step: 'Security',
      description: 'Implement robust security measures and compliance protocols.',
      icon: <Lock className="w-10 h-10 text-blue-400" />
    },
    {
      step: 'Innovation',
      description: 'Leverage cloud capabilities for ongoing digital transformation.',
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
          <h1 className="text-5xl font-bold text-white mb-6">
            Cloud Solutions
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Scalable, Secure, and Innovative Cloud Infrastructure for Modern Businesses
          </p>
        </motion.div>

        {/* Cloud Service Types */}
        <section className="mb-16 bg-[#002C5B] rounded-xl p-12 phone:bg-transparent phone:p-2">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            Cloud Service Models
          </h2>
          <p className="text-center text-blue-200 max-w-2xl mx-auto mb-12">
            We offer comprehensive cloud solutions tailored to your unique business needs, providing flexibility, scalability, and performance.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {cloudServiceTypes.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#003C6B] shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-blue-200">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Cloud Solution Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            Our Cloud Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {cloudSolutionServices.map((solution, index) => (
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

        {/* Cloud Transformation Process */}
        <section className="mb-16 bg-[#002C5B] rounded-xl p-12 phone:bg-transparent phone:p-2">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            Cloud Transformation Journey
          </h2>
          <p className="text-center text-blue-200 max-w-2xl mx-auto mb-12">
            Our structured approach ensures a smooth, secure, and efficient cloud transformation that aligns with your business objectives.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {cloudTransformationProcess.map((process, index) => (
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
            Transform Your Business with Cloud Solutions
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Unlock the potential of cloud computing. Scalable, secure, and innovative solutions that drive business growth and operational excellence.
          </p>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            Start Your Cloud Journey
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default page;