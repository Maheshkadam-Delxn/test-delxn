"use client";
// import React from 'react';
// import { motion } from "framer-motion";
// import { 
//   Code, 
//   CloudCog, 
//   Database, 
//   Layers, 
//   Rocket, 
//   Workflow,
//   Search,
//   ShieldCheck,
//   Settings,
//   CheckCircle
// } from "lucide-react";

// const page = () => {
//   const coreServices = [
//     {
//       icon: <Code size={36} />,
//       title: "Custom Web & Mobile Apps",
//       description: "Tailored applications that transform your digital strategy."
//     },
//     {
//       icon: <CloudCog size={36} />,
//       title: "Enterprise Software",
//       description: "Robust solutions designed for complex business ecosystems."
//     },
//     {
//       icon: <Workflow size={36} />,
//       title: "API Development & Integration",
//       description: "Seamless connectivity and data exchange across platforms."
//     }
//   ];

//   const developmentExpertise = [
//     {
//       icon: <Layers size={36} />,
//       title: "Full-Stack Development",
//       description: "Comprehensive solutions spanning front-end to back-end technologies."
//     },
//     {
//       icon: <CloudCog size={36} />,
//       title: "Microservices Architecture",
//       description: "Scalable, flexible system design for modern enterprise needs."
//     },
//     {
//       icon: <Database size={36} />,
//       title: "Database Design & Optimization",
//       description: "High-performance data management and architectural solutions."
//     },
//     {
//       icon: <Rocket size={36} />,
//       title: "Cloud-Native Apps",
//       description: "Cutting-edge applications leveraging cloud technologies."
//     },
//     {
//       icon: <Settings size={36} />,
//       title: "Third-Party Integrations",
//       description: "Seamless connections with existing tools and ecosystems."
//     },
//     {
//       icon: <CheckCircle size={36} />,
//       title: "Continuous Delivery & DevOps",
//       description: "Streamlined development and deployment processes."
//     }
//   ];

//   const developmentProcess = [
//     {
//       icon: <Search size={36} />,
//       title: "Discover",
//       description: "Deep dive into client needs, challenges, and strategic goals.",
//       color: "text-blue-400"
//     },
//     {
//       icon: <Workflow size={36} />,
//       title: "Plan",
//       description: "Craft precise, tailored solutions with clear, actionable roadmaps.",
//       color: "text-green-400"
//     },
//     {
//       icon: <Code size={36} />,
//       title: "Develop",
//       description: "Build scalable, secure, and highly efficient systems.",
//       color: "text-purple-400"
//     },
//     {
//       icon: <ShieldCheck size={36} />,
//       title: "Test & Refine",
//       description: "Rigorous quality assurance through comprehensive testing and feedback.",
//       color: "text-yellow-400"
//     },
//     {
//       icon: <Rocket size={36} />,
//       title: "Launch",
//       description: "Confident deployment with performance tracking and optimization.",
//       color: "text-red-400"
//     },
//     {
//       icon: <CheckCircle size={36} />,
//       title: "Support",
//       description: "Continuous improvement and dedicated, proactive support.",
//       color: "text-indigo-400"
//     }
//   ];

//   return (
//     <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
//       {/* Hero Section */}
//       <section className="relative py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-4xl mx-auto"
//         >
//           <h1 className="text-5xl font-bold text-blue-300 mb-6">
//             Bespoke Development
//           </h1>
//           <p className="text-xl text-gray-200 leading-relaxed">
//             Crafting custom software solutions designed to fit your unique business needs — built with scalability, performance, and innovation in mind.
//           </p>
//         </motion.div>
//       </section>

//       {/* Core Services */}
//       <section className="py-16 px-6 md:px-12 lg:px-24 bg-navy-900/50">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-bold text-blue-300 mb-4">
//             Core Services
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Off-the-shelf software rarely fits perfectly. Our bespoke solutions are crafted to align with your workflows, ensuring maximum efficiency, scalability, and competitive advantage.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {coreServices.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               whileHover={{ 
//                 scale: 1.05, 
//                 boxShadow: "0 10px 25px rgba(0, 105, 255, 0.2)" 
//               }}
//               transition={{ 
//                 duration: 0.4, 
//                 delay: index * 0.1 
//               }}
//               className="bg-navy-800 rounded-2xl p-8 border border-blue-900/30 transform transition-all duration-300 hover:bg-navy-700"
//             >
//               <div className="mb-6 text-blue-400 flex justify-center">
//                 {service.icon}
//               </div>
//               <h3 className="text-2xl font-semibold text-blue-200 text-center mb-4">
//                 {service.title}
//               </h3>
//               <p className="text-gray-400 text-center">
//                 {service.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Development Expertise */}
//       <section className="py-16 px-6 md:px-12 lg:px-24">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-bold text-blue-300 mb-4">
//             Our Development Expertise
//           </h2>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {developmentExpertise.map((expertise, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               whileHover={{ 
//                 scale: 1.05, 
//                 boxShadow: "0 10px 25px rgba(0, 105, 255, 0.2)" 
//               }}
//               transition={{ 
//                 duration: 0.4, 
//                 delay: index * 0.1 
//               }}
//               className="bg-navy-800 rounded-2xl p-8 border border-blue-900/30 transform transition-all duration-300 hover:bg-navy-700"
//             >
//               <div className="mb-6 text-blue-400 flex justify-center">
//                 {expertise.icon}
//               </div>
//               <h3 className="text-2xl font-semibold text-blue-200 text-center mb-4">
//                 {expertise.title}
//               </h3>
//               <p className="text-gray-400 text-center">
//                 {expertise.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Development Process */}
//       <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-16 px-6 md:px-12 lg:px-24">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-bold text-blue-300 mb-4">
//             Process - From Idea to Execution
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Our comprehensive approach transforms your vision into a robust, high-performance solution.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {developmentProcess.map((stage, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               whileHover={{ 
//                 scale: 1.05, 
//                 boxShadow: "0 10px 25px rgba(0, 105, 255, 0.2)" 
//               }}
//               transition={{ 
//                 duration: 0.4, 
//                 delay: index * 0.1 
//               }}
//               className="bg-navy-800 rounded-2xl p-6 border border-blue-900/30 transform transition-all duration-300 hover:bg-navy-700"
//             >
//               <div className={`mb-4 ${stage.color} flex justify-center`}>
//                 {stage.icon}
//               </div>
//               <h3 className="text-2xl font-semibold text-blue-200 text-center mb-3">
//                 {stage.title}
//               </h3>
//               <p className="text-gray-400 text-center">
//                 {stage.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default page;
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  ServerCog, 
  Layers, 
  CloudLightning, 
  Link2,
  Workflow,
  Rocket,
  Shield,
  Database,
  Settings
} from 'lucide-react';

const page = () => {
  const coreServices = [
    {
      icon: <Code className="w-12 h-12 text-blue-400" />,
      title: 'Custom Web & Mobile Apps',
      description: 'Tailored applications that transform your digital strategy, designed to meet your exact business requirements.'
    },
    {
      icon: <ServerCog className="w-12 h-12 text-green-400" />,
      title: 'Enterprise Software',
      description: 'Robust, scalable solutions crafted for complex business ecosystems, ensuring seamless operational efficiency.'
    },
    {
      icon: <Link2 className="w-12 h-12 text-purple-400" />,
      title: 'API Development & Integration',
      description: 'Enabling seamless connectivity and data exchange across diverse platforms and systems.'
    }
  ];

  const developmentExpertise = [
    {
      icon: <Layers className="w-10 h-10 text-blue-400" />,
      title: 'Full-Stack Development',
      description: 'End-to-end solutions spanning front-end to back-end technologies, ensuring comprehensive software development.'
    },
    {
      icon: <Workflow className="w-10 h-10 text-green-400" />,
      title: 'Microservices Architecture',
      description: 'Designing scalable, flexible system architectures that adapt to evolving business needs.'
    },
    {
      icon: <Database className="w-10 h-10 text-purple-400" />,
      title: 'Database Design & Optimization',
      description: 'Creating high-performance data management solutions with advanced architectural approaches.'
    },
    {
      icon: <CloudLightning className="w-10 h-10 text-blue-400" />,
      title: 'Cloud-Native Apps',
      description: 'Leveraging cutting-edge cloud technologies to build modern, scalable applications.'
    }
  ];

  const developmentProcess = [
    {
      step: 'Discover',
      description: 'Deep dive into client needs, challenges, and strategic goals.',
      icon: <Rocket className="w-10 h-10 text-blue-400" />
    },
    {
      step: 'Plan',
      description: 'Craft precise, tailored solutions with clear, actionable roadmaps.',
      icon: <Settings className="w-10 h-10 text-green-400" />
    },
    {
      step: 'Develop',
      description: 'Build scalable, secure, and highly efficient systems.',
      icon: <Code className="w-10 h-10 text-purple-400" />
    },
    {
      step: 'Test & Refine',
      description: 'Rigorous quality assurance through comprehensive testing and feedback.',
      icon: <Shield className="w-10 h-10 text-red-400" />
    },
    {
      step: 'Launch',
      description: 'Confident deployment with performance tracking and optimization.',
      icon: <Rocket className="w-10 h-10 text-blue-400" />
    },
    {
      step: 'Support',
      description: 'Continuous improvement and dedicated, proactive support.',
      icon: <ServerCog className="w-10 h-10 text-green-400" />
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
            Bespoke Development
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto ">
            Crafting custom software solutions designed to fit your unique business needs built with scalability, performance, and innovation in mind.
          </p>
        </motion.div>

        {/* Core Services */}
        <section className="mb-16 bg-[#002C5B] rounded-xl p-12 phone:p-2 phone:border-none phone:bg-transparent">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            Core Services
          </h2>
          <p className="text-center text-blue-200 max-w-2xl mx-auto mb-12">
            Off-the-shelf software rarely fits perfectly. Our bespoke solutions are crafted to align with your workflows, ensuring maximum efficiency, scalability, and competitive advantage.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
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

        {/* Development Expertise */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            Our Development Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {developmentExpertise.map((expertise, index) => (
              <div 
                key={index} 
                className="flex phone:flex-col phone:items-center phone:gap-4 items-start space-x-4 bg-[#002C5B] p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                <div>{expertise.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white phone:text-center">
                    {expertise.title}
                  </h3>
                  <p className="text-blue-200 phone:text-center">
                    {expertise.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Development Process */}
        <section className="mb-16 bg-[#002C5B] rounded-xl p-12 phone:bg-transparent phone:p-2">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            Process - From Idea to Execution
          </h2>
          <p className="text-center text-blue-200 max-w-2xl mx-auto mb-12">
            Our comprehensive approach transforms your vision into a robust, high-performance solution.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {developmentProcess.map((process, index) => (
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
            Ready to Transform Your Vision?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create a custom software solution that propels your business forward.
          </p>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            Start Your Custom Development Journey
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default page;