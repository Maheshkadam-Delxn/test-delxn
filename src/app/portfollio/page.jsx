"use client"
import React, { useState, useRef,useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'; // Import Next.js Image component
import { 
    FaIndustry, FaArrowRight, 
    FaTimes, FaCheckCircle, FaPaperPlane
} from 'react-icons/fa';

import ecom from "../../../public/portfollio/ecom.png"
import education from "../../../public/portfollio/education.png"
import health from "../../../public/portfollio/health.png"
import industry from "../../../public/portfollio/industry.png"
import insurance from "../../../public/portfollio/insurance.png" // Note: this is using the same image as industry
import it from "../../../public/portfollio/it.png"
import travel from "../../../public/portfollio/travel.png"
import logistic from "../../../public/portfollio/logistic.png"

//
const domainData = [
    {
        id: 1,
        domain: 'Insurance Solutions',
        image: insurance, // ✅ Correct usage
        description: 'Innovative solutions for insurance providers to enhance lead generation and customer engagement.',
        problem: 'Traditional static landing pages had low engagement and poor conversion rates, limiting effective lead generation.',
        solution: 'Interactive and dynamic engagement systems that enhance user interaction and optimize conversion paths.',
        impact: 'Higher user engagement and significantly improved lead conversion rates.',
        keyFeatures: [
            'Interactive lead generation systems',
            'Real-time customer analytics',
            'Responsive engagement platforms',
            'Optimized conversion funnels'
        ]
    },
    {
        id: 2,
        domain: 'Enterprise IT Services',
        image: it, // ✅ Corrected
        description: 'Comprehensive IT solutions addressing complex enterprise challenges with scalable and efficient systems.',
        problem: 'Complex business requirements demanding flexible, scalable solutions across diverse operational contexts.',
        solution: 'Modular and adaptable systems designed to seamlessly integrate with existing enterprise workflows.',
        impact: 'Delivered scalable and high-performance systems that significantly enhanced operational efficiency.',
        keyFeatures: [
            'Enterprise-grade solution architecture',
            'AI-powered workflow automation',
            'Seamless integration capabilities',
            'Scalable system infrastructure'
        ]
    },
    {
        id: 3,
        domain: 'Logistics Management',
        image: logistic, // ✅ Corrected
        description: 'Digital transformation solutions for logistics operations, replacing manual processes with automated systems.',
        problem: 'Manual record-keeping causing critical errors, inefficiencies, and limited visibility across operations.',
        solution: 'Cloud-based tracking and management systems providing real-time operational insights and automated workflows.',
        impact: 'Dramatically improved operational accuracy, efficiency, and data-driven decision making.',
        keyFeatures: [
            'Automated tracking and management',
            'Real-time inventory visibility',
            'Interactive analytics dashboards',
            'Mobile operational access'
        ]
    },
    {
        id: 4,
        domain: 'E-commerce & Instant Delivery',
        image: ecom, // ✅ Corrected
        description: 'Advanced e-commerce platforms and instant delivery solutions for seamless online shopping experiences.',
        problem: 'Slow and inefficient order fulfillment processes leading to customer dissatisfaction.',
        solution: 'Real-time order management with optimized logistics and automated tracking mechanisms.',
        impact: 'Faster order fulfillment, improved customer retention, and enhanced operational efficiency.',
        keyFeatures: [
            'Instant order placement',
            'Live tracking & delivery optimization',
            'Push notifications for updates',
            'Secure and seamless payments'
        ]
    },
    {
        id: 5,
        domain: 'Industrial Automation',
        image: industry, // ✅ Corrected
        description: 'Technology-driven automation solutions for industrial and engineering sectors.',
        problem: 'Lack of digital infrastructure limiting process efficiency and industrial growth.',
        solution: 'Implementation of smart automation systems with AI-driven monitoring and predictive maintenance.',
        impact: 'Increased production efficiency, reduced downtime, and improved system monitoring.',
        keyFeatures: [
            'Smart automation workflows',
            'AI-powered system monitoring',
            'Predictive maintenance analytics',
            'Seamless industrial integration'
        ]
    },
    {
        id: 6,
        domain: 'Healthcare Solutions',
        image: health, // ✅ Corrected
        description: 'Digital solutions enhancing patient management, medical record keeping, and clinic operations.',
        problem: 'Manual appointment scheduling and record-keeping causing inefficiencies in healthcare operations.',
        solution: 'Secure, cloud-based patient management systems with automated appointment tracking and digital prescriptions.',
        impact: 'Improved operational efficiency, reduced paperwork, and better patient care management.',
        keyFeatures: [
            'Automated appointment scheduling',
            'Digital prescriptions and records',
            'Secure patient data encryption',
            'Inventory tracking for medical supplies'
        ]
    },
    {
        id: 7,
        domain: 'IT Education & Training',
        image: education, // ✅ Corrected
        description: 'Providing career-focused IT training with hands-on projects and job placement support.',
        problem: 'Lack of industry-relevant IT education leading to skill gaps in the job market.',
        solution: 'Hands-on training programs, real-world projects, and direct industry placement assistance.',
        impact: 'Higher employment rates for graduates and successful IT career advancements.',
        keyFeatures: [
            'Industry-aligned IT courses',
            'Placement assistance and career support',
            'Flexible online and classroom learning',
            'Recognized certifications'
        ]
    },
    {
        id: 8,
        domain: 'Ride-Sharing & Transportation',
        image: travel, // ✅ Corrected
        description: 'Cost-effective and eco-friendly ride-sharing solutions connecting travelers with verified drivers.',
        problem: 'Limited accessibility to affordable long-distance travel options.',
        solution: 'Real-time driver verification, intelligent ride-matching, and GPS-based tracking solutions.',
        impact: 'Increased accessibility to budget-friendly and convenient travel options.',
        keyFeatures: [
            'Verified ride-sharing platform',
            'Live route optimization & tracking',
            'In-app messaging & driver ratings',
            'Secure payment integration'
        ]
    }
];


const DomainModal = ({ domain, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectIdea: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
           <motion.div 
    className="bg-white/10 backdrop-blur-xl rounded-2xl max-w-5xl w-full 
               flex flex-col-reverse md:grid md:grid-cols-2 
               overflow-y-auto max-h-[90vh] border border-white/20 shadow-2xl"
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.9, opacity: 0 }}
>

                {/* Inquiry Form */}
                <div className="p-8 bg-white/5 text-white flex flex-col h-full ">


                    <h3 className="text-2xl font-bold mb-6 text-white">Interested in our {domain.domain} solutions?</h3>
                    
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col h-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-300 mb-2">Your Name*</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-gray-300 mb-2">Email*</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-300 mb-2">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-gray-300 mb-2">Company</label>
                                    <input 
                                        type="text" 
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-gray-300 mb-2">Project Idea/Requirements</label>
                                <textarea 
                                    name="projectIdea"
                                    value={formData.projectIdea}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                                    placeholder="Briefly describe your project idea or requirements..."
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-colors"
                            >
                                {isSubmitting ? (
                                    <span className="animate-pulse">Sending...</span>
                                ) : (
                                    <>Submit <FaPaperPlane className="ml-2" /></>
                                )}
                            </button>
                        </form>
                    ) : (
                        <div className="flex flex-col items-center justify-center flex-grow text-center">
                            <div className="bg-green-500 rounded-full p-4 mb-6">
                                <FaCheckCircle size={40} />
                            </div>
                            <h4 className="text-2xl font-bold mb-3">Thank You!</h4>
                            <p className="text-gray-300 mb-6">We've received your inquiry and will get back to you shortly about our {domain.domain} solutions.</p>
                            <button 
                                onClick={onClose}
                                className="bg-white/20 hover:bg-white/30 text-white py-2 px-6 rounded-lg transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    )}
                </div>

                {/* Domain Details */}
                <div className="relative text-white flex flex-col items-end h-full">
    {/* Sticky Close Button */}
    <button 
        onClick={onClose} 
        className=" top-2  sticky text-white hover:text-gray-300 z-10  p-2 rounded-full"
    >
        <FaTimes size={24} />
    </button>

    {/* Scrollable Content */}
    <div className="p-8 overflow-y-auto">
        <h3 className="text-3xl font-bold mb-6 text-white">{domain.domain}</h3>
        
        <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
            <Image 
                src={domain.image} 
                alt={domain.domain} 
                fill
                className="object-cover"
            />
        </div>
        
        <p className="text-gray-300 mb-6">{domain.description}</p>

        {/* Problem & Solution */}
        <div className="space-y-6 mb-8">
            <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <h4 className="font-semibold mb-2 text-white">The Challenge</h4>
                <p className="text-gray-300">{domain.problem}</p>
            </div>
            
            <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <h4 className="font-semibold mb-2 text-white">Our Approach</h4>
                <p className="text-gray-300">{domain.solution}</p>
            </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
            <h4 className="font-semibold mb-3 flex items-center text-white">
                <FaCheckCircle className="mr-2 text-green-400" /> Key Capabilities
            </h4>
            <ul className="space-y-2">
                {domain.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-200">
                        <span className="mr-2 text-green-400">●</span>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>

        {/* Impact section */}
        <div className="bg-white/10 p-4 rounded-lg border border-white/20 mb-6">
            <div className="flex items-center">
                <span className="text-2xl mr-3">🚀</span>
                <p className="text-gray-200 font-medium">{domain.impact}</p>
            </div>
        </div>
    </div>
</div>

            </motion.div>
        </motion.div>
    );
};

const DomainCard = ({ domain, onDetailsClick }) => {
    return (
        <motion.div 
            className="relative group overflow-hidden"
            whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                    type: "spring",
                    stiffness: 80,
                    damping: 15
                }
            }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
            <div className="bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 group-hover:border-white/15 transition-all duration-300 shadow-lg hover:shadow-xl h-full flex flex-col">
                <div className="relative overflow-hidden h-48">
                    <div className="absolute inset-0 bg-blue-500 opacity-20 group-hover:opacity-30 transition-opacity z-0"></div>
                    <div className="relative w-full h-full">
                        <Image 
                            src={domain.image} 
                            alt={domain.domain} 
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 z-10"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/90 z-20"></div>
                    <div className="absolute top-4 left-4 bg-blue-600/90 text-white text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                        <FaIndustry className="inline mr-1" size={10} /> {domain.domain.split(' ')[0]}
                    </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{domain.domain}</h3>
                    <p className="text-gray-300 mb-6 line-clamp-3 flex-grow">{domain.description}</p>
                    <button 
                        onClick={() => onDetailsClick(domain)}
                        className="self-end text-white flex items-center bg-blue-600/20 hover:bg-blue-600/30 px-4 py-2 rounded-xl transition-all group-hover:bg-blue-600/40 border border-blue-500/30"
                        aria-label={`Learn more about ${domain.domain}`}
                    >
                        <span className="mr-2">Learn More</span>
                        <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

const PortfolioSection = () => {
    const [selectedDomain, setSelectedDomain] = useState(null);

    const handleDomainDetailsClick = (domain) => {
        setSelectedDomain(domain);
    };

    const handleCloseModal = () => {
        setSelectedDomain(null);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                handleCloseModal();
            }
        };
    
        document.addEventListener("keydown", handleKeyDown);
    
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    return (
        <section className="bg-[#002C5B] text-white p-12 mt-20">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold text-center mb-16 text-white">
                    Our Industry Solutions
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {domainData.map((domain) => (
                        <DomainCard 
                            key={domain.id} 
                            domain={domain} 
                            onDetailsClick={handleDomainDetailsClick}
                        />
                    ))}
                </div>

                <AnimatePresence>
                    {selectedDomain && (
                        <DomainModal 
                            domain={selectedDomain} 
                            onClose={handleCloseModal} 
                        />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default PortfolioSection;