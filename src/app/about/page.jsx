'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Code,
    RefreshCw,
    Cloud,
    Zap,
    Palette,
    Brain,
    Award,
    Lightbulb,
    Shield,
    Users,
    Workflow,
    Users2
} from 'lucide-react';
import Image from 'next/image';
import developers from "../../../public/images/tiga.png"
import  ValuesSection from "../components/CoreValues.jsx"
const AboutPage = () => {
    return (
        <div id='about' className="bg-gray-900 text-white overflow-hidden">
            {/* Hero Section */}
            <HeroSection />

            {/* About Section */}
            <AboutSection />

            {/* Expertise Section */}
            <ExpertiseSection />

            {/* Values Section */}
            <ValuesSection />

           

            {/* Contact CTA Section */}
            <ContactCTA />
        </div>
    );
};

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center">
            {/* Background Animation */}
            <motion.div
                className="absolute inset-0 z-0 opacity-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 2 }}
            >
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                            style={{
                                width: `${Math.random() * 300 + 50}px`,
                                height: `${Math.random() * 300 + 50}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                filter: 'blur(70px)',
                            }}
                            animate={{
                                x: [0, Math.random() * 100 - 50],
                                y: [0, Math.random() * 100 - 50],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 20,
                                repeat: Infinity,
                                repeatType: 'reverse',
                                ease: 'easeInOut',
                            }}
                        />
                    ))}
                </div>
            </motion.div>

            <div className="container mx-auto px-6 z-10 pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl"
                >
                    <motion.div
                        className="inline-block mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-bold"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <h2 className="text-xl md:text-2xl">ABOUT US</h2>
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        Empowering Innovators,
                        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"> Transforming Tomorrow</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl text-justify"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                    >
                        DelXN Technologies is a forward-thinking IT services company committed to delivering excellence through innovation. We believe that knowledge is power and that innovative solutions can transform the future.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.3 }}
                    >
                        <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:from-purple-700 hover:to-blue-600 transition duration-300 mr-4 mb-4">
                            Our Services
                        </button>
                        <button className="bg-transparent border border-white text-white font-medium py-3 px-8 rounded-full hover:bg-white hover:text-gray-900 transition duration-300 mb-4">
                            Contact Us
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    <div className="text-white text-sm mb-2">Scroll to explore</div>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="h-6 w-6"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

const AboutSection = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <section className="py-20 bg-gradient-to-r from [#002c5bde] via[#003f7adf] to[#0055a4e2]   bg[#002c5b] bg-gray-900 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-900 to-transparent"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>

            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="grid md:grid-cols-12 gap-12 items-center"
                >
                    <div className="md:col-span-5">
                        <motion.div className="relative">
                            {/* Main image */}
                            <motion.div
                                variants={itemVariants}
                                className="rounded-xl overflow-hidden  relative z-10"
                            >
                                <Image
                                    src={developers}
                                    alt="Team collaboration"
                                    className="w-full h-auto"
                                />
                            </motion.div>

                            {/* Floating card 1 */}
                            <motion.div
                                variants={itemVariants}
                                className="absolute -top-10 phone:-top-20 phone:-right-16 -right-10 bg-gray-900 rounded-xl p-5 shadow-xl z-20 max-w-xs"
                            >
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                                        <Users className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold ">25+</h3>
                                        <p className="text-gray-400 text-sm">Professionals</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating card 2 */}
                            <motion.div
                                variants={itemVariants}
                                className="absolute -bottom-10 -left-10 bg-gray-900 rounded-xl p-5 shadow-xl z-20 max-w-xs"
                            >
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center mr-4">
                                        <Award className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">98%</h3>
                                        <p className="text-gray-400 text-sm">Client satisfaction</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="md:col-span-7">
                        <motion.div variants={itemVariants}>
                            <h2 className="text-sm text-blue-400 font-semibold uppercase tracking-wider mb-4">Our Story</h2>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">Driving Digital Excellence Through Innovative Solutions</h3>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="prose prose-lg text-gray-300 max-w-none "
                        >
                            <p>Founded with a vision to revolutionize the digital landscape, DelXN Technologies has evolved into a leading name in IT services. Our journey began with a simple yet powerful idea: to combine technical expertise with innovative thinking to create solutions that truly matter.</p>

                            <p>Today, we are proud to serve clients across industries, helping them navigate the complex world of technology and emerge stronger, more efficient, and future-ready. Our team of skilled professionals brings together diverse perspectives and specialized knowledge to tackle the most challenging problems.</p>

                            <p>At DelXN, we don't just deliver services – we build relationships based on trust, transparency, and shared success. We are committed to understanding your unique needs and crafting solutions that align perfectly with your business objectives.</p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="mt-8 grid grid-cols-2 gap-6 phone:grid-cols-1"
                        >
                            <div className="flex items-center ">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center mr-4">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">10+ Years</h4>
                                    <p className="text-gray-400">Industry Experience</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mr-4">
                                    <Workflow className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">20+</h4>
                                    <p className="text-gray-400">Successful Projects</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ExpertiseSection = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const expertiseData = [
        {
            icon: <Code className="w-6 h-6" />,
            title: "Application Engineering",
            description: "Guiding clients from conceptualization to implementation and maintenance, ensuring robust and scalable applications.",
            color: "from-blue-600 to-blue-400"
        },
        {
            icon: <RefreshCw className="w-6 h-6" />,
            title: "Legacy Modernization",
            description: "Upgrading outdated systems into efficient, contemporary solutions to enhance performance and agility.",
            color: "from-blue-700 to-blue-500"
        },
        {
            icon: <Cloud className="w-6 h-6" />,
            title: "Cloud Transformation",
            description: "Accelerating digital transformation by leveraging cloud technologies to boost business performance.",
            color: "from-blue-800 to-blue-600"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Digital Transformation",
            description: "Implementing digital technologies to redefine products, services, and operations, translating business processes into digital formats.",
            color: "from-blue-900 to-blue-700"
        },
        {
            icon: <Palette className="w-6 h-6" />,
            title: "UI/UX Design",
            description: "Crafting seamless and meaningful user experiences through a deep understanding of user needs.",
            color: "from-blue-800 to-blue-600"
        },
        {
            icon: <Brain className="w-6 h-6" />,
            title: "Artificial Intelligence Engineering",
            description: "Developing exceptional software solutions powered by artificial intelligence.",
            color: "from-blue-700 to-blue-500"
        },
    ];

    return (
<section className="py-20 relative overflow-hidden inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#042558] to-[#0a3069] z-0">
{/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-900/10 to-transparent"></div>
            
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23002C5B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-sm text-white font-semibold uppercase tracking-wider mb-4">What We Do Best</h2>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Expertise</h3>
                    <p className="text-white">We specialize in a wide range of technical domains, delivering solutions that meet the highest standards of quality and innovation.</p>
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {expertiseData.map((item, index) => (
                        <ExpertiseCard key={index} item={item} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
const ExpertiseCard = ({ item, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimation();
    const [ref, inView] = useInView({ 
        threshold: 0.3,
        triggerOnce: true  // Only trigger once
    });
    
    // Effect to start animation when card comes into view
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    
    // Card reveal animation variants (flip effect)
    const cardVariants = {
        hidden: { 
            opacity: 0,
            rotateY: 90,
            y: 20
        },
        visible: {
            opacity: 1,
            rotateY: 0,
            y: 0,
            transition: { 
                type: "spring", 
                stiffness: 100,
                damping: 12,
                delay: index * 0.4,
                duration: 0.6
            }
        }
    };

    // Icon animation on hover
    const iconVariants = {
        normal: { scale: 1, rotate: 0 },
        hover: { scale: 1.1, rotate: 5, transition: { duration: 0.3 } }
    };

    return (
        <motion.div
            ref={ref}
            className="relative rounded-xl overflow-hidden group h-full perspective-1000"
            variants={cardVariants}
            initial="hidden"
            animate={controls}  // Use controls instead of "visible"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Card with gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-800 to-blue-900 rounded-xl"></div>
            
            {/* Card content with inner shadow */}
            <div className="relative m-[2px] bg-white dark:bg-gray-900 rounded-lg p-6 h-full flex flex-col">
                {/* Animated gradient background */}
                <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 rounded-lg`}
                    animate={{ 
                        opacity: isHovered ? 0.05 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                ></motion.div>
                
                {/* Icon with animated gradient background */}
                <motion.div
                    className={`relative flex items-center justify-center w-16 h-16 rounded-full mb-6 text-white overflow-hidden`}
                    variants={iconVariants}
                    animate={isHovered ? "hover" : "normal"}
                >
                    {/* Animated gradient background for icon */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`}></div>
                    
                    {/* Glass effect overlay */}
                    <div className="absolute inset-0 bg-white opacity-20"></div>
                    
                    {/* Icon */}
                    <div className="relative z-10">
                        {item.icon}
                    </div>
                </motion.div>

                {/* Title with animated underline */}
                <div className="mb-4 relative">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                    <motion.div
                        className="h-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 mt-2"
                        initial={{ width: "30%" }}
                        animate={{ width: isHovered ? "100%" : "30%" }}
                        transition={{ duration: 0.3 }}
                    />
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{item.description}</p>

               
            </div>
        </motion.div>
    );
};





const ContactCTA = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-violet-900 opacity-90"></div>
            <div className="absolute inset-0">
                <svg className="absolute right-0 top-0 h-full w-1/3 opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0 }} />
                            <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0.5 }} />
                        </linearGradient>
                    </defs>
                    <path d="M0 0 L100 0 L100 100 L50 100 Z" fill="url(#grad1)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="max-w-3xl mx-auto text-center"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-4xl font-bold text-white mb-6"
                    >
                        Ready to transform your business with innovative technology?
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-white opacity-90 mb-10"
                    >
                        Let's work together to create solutions that drive your success. Our team is ready to help you navigate the complex technology landscape and build the future you envision.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                    >
                        <button className="bg-white text-blue-600 font-medium py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300">
                            Get in Touch
                        </button>
                        <button className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-10 transition duration-300">
                            Our Services
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutPage;