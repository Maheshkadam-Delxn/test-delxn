"use client"
import React from 'react';
import { notFound } from 'next/navigation';
import { FaCode, FaMobile, FaServer, FaDatabase, FaBrain, FaPaintBrush, FaArrowRight, FaCheck, FaLightbulb, FaUserFriends } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

// Full service data with additional details for each page
const serviceData = {
    'app-development': {
      id: 1,
      icon: <FaMobile />,
      iconColor: 'bg-indigo-600',
      title: 'App Development',
      subtitle: 'DelXN',
      location: 'Pune, India',
      patternColor: 'from-indigo-600 to-violet-800',
      heroImage: '/images/services/app-development-hero.jpg',
      description: 'We create innovative, user-friendly applications that work seamlessly across all platforms. Our development team combines technical expertise with creative problem-solving to deliver applications that exceed expectations.',
      whatweOfferColor : "bg-indigo-500",
      features: [
        {
          title: 'Native App Development',
          description: 'Custom iOS and Android applications built for optimal performance and user experience.',
          icon: <FaMobile className="text-indigo-500 text-2xl" />
        },
        {
          title: 'Cross-Platform Solutions',
          description: 'Build once, deploy everywhere with React Native and Flutter frameworks.',
          icon: <FaCode className="text-indigo-500 text-2xl" />
        },
        {
          title: 'Progressive Web Apps',
          description: 'Web applications that offer native-like experiences with offline capabilities.',
          icon: <FaServer className="text-indigo-500 text-2xl" />
        }
      ],
      stats: [
        { value: '200+', label: 'Apps Delivered' },
        { value: '99%', label: 'Client Satisfaction' },
        { value: '15+', label: 'Industry Experts' }
      ],
      process: [
        { step: 1, title: 'Discovery', description: 'Understanding your business goals and user needs' },
        { step: 2, title: 'Design', description: 'Creating intuitive and engaging user interfaces' },
        { step: 3, title: 'Development', description: 'Building robust application architecture and features' },
        { step: 4, title: 'Testing', description: 'Rigorous quality assurance across all platforms' },
        { step: 5, title: 'Deployment', description: 'Launching your application to the world' },
        { step: 6, title: 'Maintenance', description: 'Ongoing support and feature enhancements' }
      ],
      benefits: [
        'Increased customer engagement through intuitive mobile experiences',
        'Streamlined operations with custom business process applications',
        'Enhanced brand presence across multiple platforms',
        'Improved customer satisfaction with responsive, feature-rich apps',
        'Competitive advantage through innovative mobile solutions'
      ],
      industries: [
        'Healthcare',
        'Retail',
        'Finance',
        'Education',
        'Entertainment',
        'Logistics'
      ],
      caseStudies: [
        {
          title: 'Healthcare Provider App',
          description: 'Built a telemedicine platform that increased patient engagement by 45%',
          image: '/images/case-studies/healthcare-app.jpg'
        },
        {
          title: 'Retail E-commerce App',
          description: 'Developed a cross-platform shopping app that boosted mobile sales by 60%',
          image: '/images/case-studies/retail-app.jpg'
        }
      ],
      faq: [
        {
          question: 'How long does it take to develop a mobile app?',
          answer: 'Development timelines vary based on complexity, but typically range from 3-6 months for a full-featured application. We follow an agile methodology that allows for incremental releases and continuous improvement.'
        },
        {
          question: 'Do you offer app maintenance services?',
          answer: 'Yes, we provide ongoing maintenance and support services to ensure your application remains up-to-date with the latest OS versions, security patches, and feature enhancements.'
        },
        {
          question: 'Which platforms do you develop for?',
          answer: 'We develop native applications for iOS and Android, as well as cross-platform solutions using frameworks like React Native and Flutter that work seamlessly across multiple devices.'
        }
      ]
    },
    'web-development': {
      id: 2,
      icon: <FaCode />,
      iconColor: 'bg-pink-600',
      title: 'Web Development',
      subtitle: 'DelXN',
      location: 'Pune, India',
      patternColor: 'from-pink-600 to-purple-800',
      heroImage: '/images/services/web-development-hero.jpg',
      description: 'Our web development team creates fast, responsive, and secure websites and web applications. We leverage the latest technologies to build digital experiences that engage users and drive results.',
      whatweOfferColor : "bg-pink-500",
      features: [
        {
          title: 'Responsive Design',
          description: 'Websites that look and function perfectly on any device or screen size.',
          icon: <FaCode className="text-pink-500 text-2xl" />
        },
        {
          title: 'E-commerce Solutions',
          description: 'Custom online stores with secure payments and inventory management.',
          icon: <FaServer className="text-pink-500 text-2xl" />
        },
        {
          title: 'CMS Integration',
          description: 'Easy content management with systems like WordPress, Drupal, or custom CMS.',
          icon: <FaDatabase className="text-pink-500 text-2xl" />
        }
      ],
      stats: [
        { value: '500+', label: 'Websites Launched' },
        { value: '97%', label: 'Performance Score' },
        { value: '24/7', label: 'Support Available' }
      ],
      process: [
        { step: 1, title: 'Planning', description: 'Defining project scope, goals, and technical requirements' },
        { step: 2, title: 'Wireframing', description: 'Creating the structural blueprint of your website' },
        { step: 3, title: 'Design', description: 'Developing visual elements and user interface' },
        { step: 4, title: 'Development', description: 'Coding and bringing the design to life' },
        { step: 5, title: 'Testing', description: 'Ensuring functionality, performance, and compatibility' },
        { step: 6, title: 'Launch', description: 'Deploying your website and monitoring performance' }
      ],
      benefits: [
        'Enhanced user experience leading to higher conversion rates',
        'Improved search engine visibility and rankings',
        'Reduced bounce rates with fast-loading, responsive pages',
        'Increased customer trust through professional web presence',
        'Simplified content management for your team'
      ],
      industries: [
        'E-commerce',
        'Healthcare',
        'Finance',
        'Education',
        'Real Estate',
        'Manufacturing'
      ],
      caseStudies: [
        {
          title: 'E-commerce Platform Redesign',
          description: 'Rebuilt an online store that increased conversions by 35% and decreased cart abandonment',
          image: '/images/case-studies/ecommerce-web.jpg'
        },
        {
          title: 'Corporate Website Overhaul',
          description: 'Modernized a financial services website that improved lead generation by 50%',
          image: '/images/case-studies/corporate-web.jpg'
        }
      ],
      faq: [
        {
          question: 'What technologies do you use for web development?',
          answer: 'We use modern frameworks like React, Angular, and Vue.js for front-end development, along with Node.js, PHP, and Ruby on Rails for back-end solutions. Our technology stack is always selected based on your specific project requirements.'
        },
        {
          question: 'How do you ensure website security?',
          answer: 'We implement industry best practices including secure authentication, data encryption, regular security audits, protection against common vulnerabilities like XSS and CSRF, and compliance with relevant standards.'
        },
        {
          question: 'Do you provide hosting services?',
          answer: 'Yes, we offer scalable hosting solutions optimized for performance and security. We can also work with your existing hosting provider if preferred.'
        }
      ]
    },
    'cloud-services': {
      id: 3,
      icon: <FaServer />,
      iconColor: 'bg-blue-600',
      title: 'Cloud Services',
      subtitle: 'DelXN',
      location: 'Pune, India',
      patternColor: 'from-blue-600 to-cyan-800',
      heroImage: '/images/services/cloud-services-hero.jpg',
      description: 'Our cloud services provide reliable, scalable, and secure infrastructure solutions for businesses of all sizes. We help you migrate to the cloud, optimize your infrastructure, and leverage cloud-native technologies to drive innovation.',
      whatweOfferColor : "bg-blue-500",
      features: [
        {
          title: 'Cloud Migration',
          description: 'Seamless migration of existing applications and data to cloud platforms.',
          icon: <FaServer className="text-blue-500 text-2xl" />
        },
        {
          title: 'Infrastructure as Code',
          description: 'Automated deployment and management of cloud resources for consistency and reliability.',
          icon: <FaCode className="text-blue-500 text-2xl" />
        },
        {
          title: 'Serverless Architecture',
          description: 'Event-driven solutions that scale automatically and reduce operational overhead.',
          icon: <FaDatabase className="text-blue-500 text-2xl" />
        }
      ],
      stats: [
        { value: '300+', label: 'Deployments' },
        { value: '40%', label: 'Cost Reduction' },
        { value: '99.9%', label: 'Uptime' }
      ],
      process: [
        { step: 1, title: 'Assessment', description: 'Evaluating current infrastructure and identifying migration candidates' },
        { step: 2, title: 'Planning', description: 'Creating a detailed cloud migration and optimization strategy' },
        { step: 3, title: 'Migration', description: 'Moving applications and data to the cloud with minimal disruption' },
        { step: 4, title: 'Optimization', description: 'Improving performance, security, and cost-efficiency' },
        { step: 5, title: 'Automation', description: 'Implementing CI/CD pipelines and infrastructure as code' },
        { step: 6, title: 'Monitoring', description: 'Continuous performance monitoring and optimization' }
      ],
      benefits: [
        'Reduced infrastructure costs through pay-as-you-go pricing models',
        'Improved scalability to handle varying workloads and traffic spikes',
        'Enhanced reliability with distributed architecture and automatic failover',
        'Increased security with built-in cloud provider safeguards',
        'Faster time-to-market with automated deployment pipelines'
      ],
      industries: [
        'Finance',
        'Healthcare',
        'Ecommerce',
        'Media',
        'Manufacturing',
        'SaaS'
      ],
      caseStudies: [
        {
          title: 'Enterprise Cloud Migration',
          description: 'Migrated a legacy financial system to AWS, reducing infrastructure costs by 37%',
          image: '/images/case-studies/cloud-migration.jpg'
        },
        {
          title: 'Serverless E-commerce Platform',
          description: 'Built a scalable serverless architecture that handled 10x traffic during peak sales events',
          image: '/images/case-studies/serverless-platform.jpg'
        }
      ],
      faq: [
        {
          question: 'How secure is cloud computing?',
          answer: 'Cloud providers offer robust security measures, often exceeding what most companies can implement on-premises. We employ additional security best practices including encryption, IAM policies, network security, and regular audits to ensure your data remains protected.'
        },
        {
          question: 'What cloud platforms do you work with?',
          answer: 'We have expertise across all major cloud providers including AWS, Microsoft Azure, and Google Cloud Platform. We can help you select the right provider based on your specific requirements or work with your existing cloud infrastructure.'
        },
        {
          question: 'How do you optimize cloud costs?',
          answer: 'We implement cost optimization strategies including right-sizing resources, leveraging reserved instances, implementing auto-scaling, using spot instances where appropriate, and continuously monitoring usage to identify savings opportunities.'
        }
      ]
    },
    'data-management': {
      id: 4,
      icon: <FaDatabase />,
      iconColor: 'bg-green-600',
      title: 'Data Management',
      subtitle: 'DelXN',
      location: 'Pune, India',
      patternColor: 'from-green-600 to-teal-800',
      heroImage: '/images/services/data-management-hero.jpg',
      description: 'Our data management solutions help you collect, store, process, and analyze your data effectively. We enable you to make data-driven decisions and unlock the full potential of your business information.',
      whatweOfferColor : "bg-green-500",
      features: [
        {
          title: 'Data Architecture',
          description: 'Designing scalable data systems that grow with your business needs.',
          icon: <FaDatabase className="text-green-500 text-2xl" />
        },
        {
          title: 'Data Integration',
          description: 'Connecting disparate systems to create a unified view of your data.',
          icon: <FaServer className="text-green-500 text-2xl" />
        },
        {
          title: 'Business Intelligence',
          description: 'Transforming raw data into actionable insights through powerful visualizations.',
          icon: <FaBrain className="text-green-500 text-2xl" />
        }
      ],
      stats: [
        { value: '5PB+', label: 'Data Managed' },
        { value: '85%', label: 'Process Efficiency' },
        { value: '12+', label: 'Data Experts' }
      ],
      process: [
        { step: 1, title: 'Assessment', description: 'Evaluating current data infrastructure and identifying opportunities' },
        { step: 2, title: 'Design', description: 'Creating a data architecture that meets current and future needs' },
        { step: 3, title: 'Integration', description: 'Connecting data sources and implementing ETL processes' },
        { step: 4, title: 'Analysis', description: 'Setting up analytics tools and creating meaningful visualizations' },
        { step: 5, title: 'Automation', description: 'Implementing automated data pipelines and reporting' },
        { step: 6, title: 'Governance', description: 'Establishing data quality, security, and compliance measures' }
      ],
      benefits: [
        'Improved decision-making through timely access to relevant data',
        'Enhanced operational efficiency with streamlined data processes',
        'Reduced data silos and improved information sharing',
        'Better customer insights leading to improved products and services',
        'Regulatory compliance with proper data governance'
      ],
      industries: [
        'Healthcare',
        'Finance',
        'Retail',
        'Manufacturing',
        'Logistics',
        'Insurance'
      ],
      caseStudies: [
        {
          title: 'Healthcare Data Platform',
          description: 'Built a unified patient data platform that reduced reporting time by 75%',
          image: '/images/case-studies/healthcare-data.jpg'
        },
        {
          title: 'Retail Analytics Solution',
          description: 'Implemented a real-time analytics system that improved inventory forecasting by 40%',
          image: '/images/case-studies/retail-analytics.jpg'
        }
      ],
      faq: [
        {
          question: 'How do you ensure data security and compliance?',
          answer: 'We implement comprehensive data security measures including encryption, access controls, anonymization techniques, and regular security audits. We also ensure compliance with relevant regulations such as GDPR, HIPAA, and CCPA based on your industry requirements.'
        },
        {
          question: 'What databases and data platforms do you work with?',
          answer: 'We have expertise across relational databases (SQL Server, MySQL, PostgreSQL), NoSQL databases (MongoDB, Cassandra), data warehouses (Snowflake, Redshift), and big data technologies (Hadoop, Spark) to select the right solution for your specific needs.'
        },
        {
          question: 'How do you approach data migration projects?',
          answer: 'Our data migration approach includes thorough source system analysis, data mapping and transformation planning, rigorous testing, parallel running phases, and validation processes to ensure accurate and complete data transfer with minimal business disruption.'
        }
      ]
    },
    'aiml-tech': {
      id: 5,
      icon: <FaBrain />,
      iconColor: 'bg-purple-600',
      title: 'AI & ML Solutions',
      subtitle: 'DelXN',
      location: 'Pune, India',
      patternColor: 'from-purple-600 to-indigo-800',
      heroImage: '/images/services/aiml-tech-hero.jpg',
      description: 'Our AI and machine learning solutions help businesses automate processes, gain deeper insights, and create intelligent applications. We develop custom AI models tailored to your specific business challenges and opportunities.',
      whatweOfferColor : "bg-purple-500",
      features: [
        {
          title: 'Predictive Analytics',
          description: 'Forecasting future trends and behaviors based on historical data patterns.',
          icon: <FaBrain className="text-purple-500 text-2xl" />
        },
        {
          title: 'Computer Vision',
          description: 'Image and video analysis for object detection, recognition, and classification.',
          icon: <FaMobile className="text-purple-500 text-2xl" />
        },
        {
          title: 'Natural Language Processing',
          description: 'Text analysis, sentiment analysis, and conversational AI solutions.',
          icon: <FaUserFriends className="text-purple-500 text-2xl" />
        }
      ],
      stats: [
        { value: '90%', label: 'Prediction Accuracy' },
        { value: '75+', label: 'AI Models Deployed' },
        { value: '8+', label: 'PhD Researchers' }
      ],
      process: [
        { step: 1, title: 'Problem Definition', description: 'Identifying business challenges suitable for AI solutions' },
        { step: 2, title: 'Data Collection', description: 'Gathering and preparing high-quality training data' },
        { step: 3, title: 'Model Development', description: 'Building and training custom machine learning models' },
        { step: 4, title: 'Testing & Validation', description: 'Evaluating model performance against business objectives' },
        { step: 5, title: 'Deployment', description: 'Integrating AI solutions into existing workflows and systems' },
        { step: 6, title: 'Monitoring', description: 'Continuous improvement and retraining of models' }
      ],
      benefits: [
        'Automated routine tasks freeing up human resources for strategic work',
        'Enhanced decision-making with predictive insights and recommendations',
        'Improved customer experience through personalization and intelligent assistants',
        'Early detection of potential issues before they impact operations',
        'Uncovering hidden patterns and opportunities in complex data'
      ],
      industries: [
        'Healthcare',
        'Finance',
        'Retail',
        'Manufacturing',
        'Agriculture',
        'Energy'
      ],
      caseStudies: [
        {
          title: 'Predictive Maintenance System',
          description: 'Developed an ML model that predicted equipment failures with 94% accuracy, reducing downtime by 30%',
          image: '/images/case-studies/predictive-maintenance.jpg'
        },
        {
          title: 'Customer Churn Prevention',
          description: 'Created a predictive model that identified at-risk customers, improving retention by 25%',
          image: '/images/case-studies/churn-prevention.jpg'
        }
      ],
      faq: [
        {
          question: 'How much data is needed to build effective AI models?',
          answer: 'The data requirements vary based on the complexity of the problem and the type of model. Generally, more complex problems require more data. We can work with your existing data to determine if its sufficient or help you implement data collection strategies to build robust datasets.'
        },
        {
          question: 'How long does it take to develop and deploy an AI solution?',
          answer: 'Timelines vary based on project complexity, data availability, and integration requirements. Simple models may be deployed in a few weeks, while complex enterprise solutions may take 3-6 months. We follow an iterative approach to deliver value incrementally.'
        },
        {
          question: 'How do you ensure ethical AI development?',
          answer: 'We adhere to ethical AI principles including fairness, transparency, privacy, and human oversight. We implement bias detection and mitigation techniques, ensure explainability of model decisions, and include humans in the loop for critical applications.'
        }
      ]
    },
    'uiux-design': {
      id: 6,
      icon: <FaPaintBrush />,
      iconColor: 'bg-cyan-600',
      title: 'UI/UX Design',
      subtitle: 'DelXN',
      location: 'Pune, India',
      patternColor: 'from-cyan-600 to-cyan-800',
      heroImage: '/images/services/uiux-design-hero.jpg',
      description: 'Our UI/UX design services create intuitive, engaging, and accessible digital experiences. We focus on understanding user needs and behaviors to design interfaces that are both beautiful and functional.',
      whatweOfferColor : "bg-cyan-500",
      features: [
        {
          title: 'User Research',
          description: 'Understanding user behaviors, needs, and motivations through research methods.',
          icon: <FaUserFriends className="text-cyan-500  text-2xl" />
        },
        {
          title: 'Interface Design',
          description: 'Creating visually appealing and intuitive digital interfaces.',
          icon: <FaPaintBrush className="text-cyan-500 text-2xl" />
        },
        {
          title: 'Usability Testing',
          description: 'Evaluating designs with real users to improve usability and satisfaction.',
          icon: <FaCheck className="text-cyan-500 text-2xl" />
        }
      ],
      stats: [
        { value: '120+', label: 'Design Projects' },
        { value: '28%', label: 'Conversion Increase' },
        { value: '10+', label: 'Design Awards' }
      ],
      process: [
        { step: 1, title: 'Discovery', description: 'Understanding user needs and business requirements' },
        { step: 2, title: 'Research', description: 'Conducting user research and competitive analysis' },
        { step: 3, title: 'Wireframing', description: 'Creating low-fidelity representations of the interface' },
        { step: 4, title: 'Prototyping', description: 'Developing interactive prototypes for testing' },
        { step: 5, title: 'Visual Design', description: 'Creating the final UI with attention to brand identity' },
        { step: 6, title: 'Handoff', description: 'Preparing assets and specifications for development' }
      ],
      benefits: [
        'Improved user satisfaction and engagement metrics',
        'Reduced user errors and support requests',
        'Higher conversion rates and customer retention',
        'Consistent brand experience across all digital touchpoints',
        'Reduced development costs by resolving usability issues early'
      ],
      industries: [
        'E-commerce',
        'Finance',
        'Healthcare',
        'Education',
        'Travel',
        'SaaS'
      ],
      caseStudies: [
        {
          title: 'Banking App Redesign',
          description: 'Redesigned a mobile banking application increasing user satisfaction by 40% and task completion rates by 65%',
          image: '/images/case-studies/banking-app.jpg'
        },
        {
          title: 'E-commerce UX Optimization',
          description: 'Improved the checkout flow reducing cart abandonment by 30% and increasing conversions by 22%',
          image: '/images/case-studies/ecommerce-ux.jpg'
        }
      ],
      faq: [
        {
          question: 'How do you measure the success of UX design?',
          answer: 'We establish key metrics at the beginning of each project, which may include conversion rates, task completion rates, time-on-task, user satisfaction scores, and error rates. We track these metrics before and after implementation to measure the impact of our design changes.'
        },
        {
          question: 'How do you incorporate accessibility in your designs?',
          answer: 'We follow WCAG guidelines to ensure our designs are accessible to users with disabilities. This includes providing sufficient color contrast, ensuring keyboard navigability, adding alternative text for images, and creating designs that work well with screen readers and other assistive technologies.'
        },
        {
          question: 'What deliverables can we expect from a UI/UX project?',
          answer: 'Typical deliverables include user research findings, user personas, journey maps, wireframes, interactive prototypes, UI style guides, design systems, and detailed specifications for developers. The specific deliverables for your project will be tailored to your needs and goals.'
        }
      ]
    },
 
    // Additional services would likely follow this same pattern
  };
  

// Get icon component function
const getIconComponent = (serviceName) => {
  switch(serviceName) {
    case 'app-development': return <FaMobile />;
    case 'web-development': return <FaCode />;
    case 'cloud-services': return <FaServer />;
    case 'data-management': return <FaDatabase />;
    case 'aiml-tech': return <FaBrain />;
    case 'uiux-design': return <FaPaintBrush />;
    default: return <FaCode />;
  }
};

// Get all other services for the related services section
const getRelatedServices = (currentServiceId) => {
  return Object.entries(serviceData)
    .filter(([key, service]) => service.id !== currentServiceId)
    .slice(0, 3)
    .map(([key, service]) => ({ 
      ...service, 
      slug: key 
    }));
};

export default function ServicePage({ params }) {
  // Get the service slug from the URL
  const slug = params.service?.[0];
  
  // If the service doesn't exist, show 404
  if (!slug || !serviceData[slug]) {
    notFound();
  }
  
  // Get the current service data
  const service = serviceData[slug];
  
  // Get related services
  const relatedServices = getRelatedServices(service.id);
  
  return (
    <div className="bg-gray-950 text-gray-100">
      {/* Hero Section with enhanced gradients and glassmorphism */}
      <div className={`relative overflow-hidden`}>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#001E3C] rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#001E3C] rounded-full filter blur-3xl opacity-20"></div>
        <div className={`relative bg-gradient-to-br ${service.patternColor} bg-opacity-90 backdrop-filter backdrop-blur-lg`}>
          <div className="container mx-auto px-4 py-20 md:py-28">
            <div className="max-w-6xl mx-auto phone:pt-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                <div className="md:w-2/3">
                  <div className="inline-block px-4 py-1 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm mb-4">
                    <p className="text-sm font-medium">{service.subtitle} • {service.location}</p>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{service.title}</h1>
                  <p className="text-xl mb-8 leading-relaxed text-gray-200 max-w-2xl">{service.description}</p>
                  <button className="bg-white text-indigo-900 hover:bg-opacity-90 font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Get Free Consultation
                  </button>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className={`${service.iconColor} w-36 h-36 rounded-full flex items-center justify-center text-white text-5xl shadow-lg transform hover:scale-105 transition-transform duration-300`}>
                    {getIconComponent(slug)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overview Section with glassmorphism cards */}
      <div className="py-20 bg-gray-950 relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#001E3C] rounded-full filter blur-3xl opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <span className={`w-12 h-1  mr-4 rounded-full ${service.whatweOfferColor}`}></span>
                  What We Offer
                </h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Our {service.title} services are designed to help businesses of all sizes achieve their digital transformation goals. We combine technical expertise with creative problem-solving to deliver solutions that drive growth and innovation.
                </p>
                <div className="space-y-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start p-4 rounded-xl bg-gray-900 bg-opacity-60 backdrop-filter backdrop-blur-sm border border-gray-800 hover:border-indigo-500 transition-all duration-300">
                      <div className="mr-4 p-3 bg-gray-800 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className="md:w-1/2 bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-xl">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <span className={`w-12 h-1  mr-4 rounded-full ${service.whatweOfferColor}`}></span>
                  Why Choose Us
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  {service.stats.map((stat, index) => (
                    <div key={index} 
                      className="text-center p-6 bg-gray-800 bg-opacity-40 rounded-xl border border-gray-700 hover:border-gray-900 transition-all duration-300 transform hover:-translate-y-1 phone:p-3">
                      <div className="text-3xl md:text-5xl font-bold mb-2 text-white phone:text-2xl">{stat.value}</div>
                      <div className="text-sm text-gray-400 phone:text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
               
              </div> */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Process Section with animated step cards */}
      <div className="py-20 bg-gray-950 relative">
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-800 rounded-full filter blur-3xl opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full bg-gray-800 text-indigo-400 text-sm font-medium mb-4">
                Our Methodology
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">Development Process</h2>
              <div className="w-20 h-1 bg-[#001E3C] mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {service.process.slice(0, 6).map((step, index) => (
                <div key={index} 
                  className="bg-gray-900 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-800 hover:border-indigo-500 relative group transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`${service.iconColor} w-14 h-14 rounded-full flex items-center justify-center text-white font-bold absolute -top-7 left-1/2 transform -translate-x-1/2 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white text-center mt-8">{step.title}</h3>
                  <p className="text-gray-400 text-center">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Benefits Section with gradient background */}
      <div className={`bg-gradient-to-br ${service.patternColor} text-white py-20 relative`}>
        <div className="absolute inset-0 bg-gray-950 opacity-50"></div>
        <div className="absolute -top-10 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="text-gray-950 w-full h-20">
            <path fill="currentColor" fillOpacity="1" d="M0,96L80,85.3C160,75,320,53,480,58.7C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="inline-block px-4 py-1 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm mb-4">
                  <p className="text-sm font-medium">Value Proposition</p>
                </div>
                <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
                <p className="text-lg mb-8">
                  Our {service.title} solutions deliver tangible results for your business.
                </p>
                <ul className="space-y-4">
                  {service.benefits && service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-white bg-opacity-20 p-2 rounded-lg text-white mt-1 mr-4">
                        <FaLightbulb />
                      </div>
                      <span className="text-gray-100">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="inline-block px-4 py-1 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm mb-4">
                  <p className="text-sm font-medium">Our Expertise</p>
                </div>
                <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>
                <div className="grid grid-cols-2 gap-4">
                  {service.industries && service.industries.map((industry, index) => (
                    <div key={index} 
                      className="flex phone:flex-col phone:gap-2 items-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-10 hover:bg-opacity-20 transition-all duration-300">
                      <div className="bg-white bg-opacity-20 p-2 rounded-lg mr-3 phone:mr-0">
                        <FaUserFriends />
                      </div>
                      <span className='text-center'>{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-10 w-full transform rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="text-gray-950 w-full h-20">
            <path fill="currentColor" fillOpacity="1" d="M0,96L80,85.3C160,75,320,53,480,58.7C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
        </div>
      </div>
      
    
      
      {/* FAQ Section with animated accordion */}
      {service.faq && (
        <div className="py-20 bg-gray-950 relative">
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#001E3C] rounded-full filter blur-3xl opacity-5"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-1 rounded-full bg-gray-800 text-indigo-400 text-sm font-medium mb-4">
                  Common Questions
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                <div className="w-20 h-1 bg-[#001E3C] mx-auto rounded-full"></div>
              </div>
              <div className="space-y-6">
                {service.faq.map((item, index) => (
                  <div key={index} 
                    className="bg-gray-900 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-800 hover:border-indigo-500 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-4 text-white">{item.question}</h3>
                    <p className="text-gray-400">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* CTA Section with gradient background */}
      <div className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#001E3C] rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#001E3C] rounded-full filter blur-3xl opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-gray-800 text-indigo-400 text-sm font-medium mb-4">
              Let's Connect
            </div>
            <h2 className="text-4xl font-bold mb-6">Ready to transform your business?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Let's collaborate to build innovative solutions that drive growth.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className={`bg-gradient-to-r ${service.patternColor} hover:opacity-90 font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1`}>
                Schedule a Free Consultation
              </button>
              <button className="bg-transparent border border-indigo-500 text-indigo-400 hover:bg-[#001E3C] hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Services Section with hover effects */}
      <div className="py-20 bg-gray-950 relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-800 rounded-full filter blur-3xl opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full bg-gray-800 text-indigo-400 text-sm font-medium mb-4">
                Explore More
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">Other Services You Might Like</h2>
              <div className="w-20 h-1 bg-[#001E3C] mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => (
                <Link href={`/services/${relatedService.slug}`} key={relatedService.id}>
                  <div className="bg-gray-900 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-800 hover:border-indigo-500 group h-full transition-all duration-300 transform hover:-translate-y-2">
                    <div className={`h-2 bg-gradient-to-r ${relatedService.patternColor}`}></div>
                    <div className="p-8">
                      <div className={`${relatedService.iconColor} w-16 h-16 rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {getIconComponent(relatedService.slug)}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-400 transition-colors">{relatedService.title}</h3>
                      <p className="text-gray-400 mb-6">{relatedService.subtitle}</p>
                      <div className="flex items-center text-indigo-400 mt-auto group-hover:text-indigo-300">
                        <span className="mr-2 group-hover:mr-4 transition-all duration-300">Learn more</span>
                        <FaArrowRight className="text-sm group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}