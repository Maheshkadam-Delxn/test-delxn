'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function AwardGrid() {
    const awards = [
        {
            id: 1,
            icon: 'mobile',
            iconColor: 'bg-purple-500',
            title: 'App Development',
            year: 'Cross-platform ',
            location: 'San Francisco, USA',
            patternColor: 'from-purple-500 to-blue-400',
            href : "/services/app-development"
        },
        {

            id: 2,
            icon: 'code',
            iconColor: 'bg-pink-600',
            title: 'Web  Development ',
            year: 'Cross-browser ',
            location: 'Berlin, Germany',
            patternColor: 'from-pink-600 to-purple-800',
            href : "/services/web-development"
        },
        {
            id: 3,
            icon: 'server',
            iconColor: 'bg-blue-600 ',
            title: 'Cloud Services',
            year: 'Multi-cloud',
            location: 'London, UK',
            patternColor: 'from-blue-600 to-cyan-800',
            href : "/services/cloud-services"
        },
        {
            id: 4,
            icon: 'database',
            iconColor: 'bg-green-500',
            type: 'Runner Up',
            title: 'Data Management',
            year: 'Scalable',
            location: 'Singapore',
            patternColor: 'from-green-400 to-green-500',
            href : "/services/data-management"
        },
        {
            id: 5,
            icon: 'brain',
            iconColor: 'bg-purple-800',
            type: 'Silver Winner',
            title: 'AI/ML Tech',
            year: 'Generalizable',
            location: 'Bangalore, India',
            patternColor: 'from-purple-800 to-indigo-900',
            href : "/services/aiml-tech"
        },
        {
            id: 6,
            icon: 'paint-brush',
            iconColor: 'bg-cyan-500',
            type: 'Winner',
            title: 'UI/UX Design Innovation',
            year: 'Adaptive',
            location: 'Dubai, UAE',
            patternColor: 'from-cyan-400 to-cyan-500',
            href : "/services/uiux-design"
        },
    ];

    return (
        <div id='' className="min-h-screen bg-[#001730] flex flex-col items-center justify-center p-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 pt-5 text-white">
                    Elevate Your Business with Our IT Solutions
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    Harness innovation, expertise, and scalable technology to drive success.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                {awards.map((award) => (
                    <Link href={award.href}><AwardCard key={award.id} award={award} /></Link>
                ))}
            </div>
        </div>
    );
}

function AwardCard({ award }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative overflow-hidden w-full bg-[#011226] rounded-lg aspect-square flex flex-col p-6 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex justify-between items-start">
                <div className={`${award.iconColor} w-12 h-12 rounded-lg flex items-center justify-center text-white`}>
                    <IconComponent name={award.icon} />
                </div>
            </div>

            <div className="mt-auto">
                <h3 className="text-white text-xl font-bold">{award.title}</h3>
                <p className="text-white text-lg font-medium mb-4">{award.year}</p>
            </div>

            <motion.div
                className={`absolute -bottom-20 -right-10 w-64 h-64 bg-gradient-to-br ${award.patternColor} opacity-20 rounded-full blur-sm`}
                animate={{
                    scale: isHovered ? 1.2 : 1,
                    opacity: isHovered ? 0.3 : 0.2
                }}
                transition={{ duration: 0.5 }}
            />

            <PatternBackground type={award.id} isHovered={isHovered} color={award.patternColor} />
        </motion.div>
    );
}

function PatternBackground({ type, isHovered, color }) {
    switch (type) {
        case 1: // Wavy lines
            return (
                <motion.div
                    className="absolute bottom-0 right-0 w-44 h-44 opacity-50 pointer-events-none"
                    animate={{
                        x: isHovered ? -5 : 0,
                        opacity: isHovered ? 0.7 : 0.5
                    }}
                >
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={`absolute w-full h-0.5 bg-gradient-to-r ${color} rounded-full`}
                            style={{
                                bottom: `${i * 6}px`,
                                right: `${i * 1.5}px`,
                                transform: `rotate(${i}deg)`
                            }}
                            animate={{
                                scaleX: isHovered ? 1.1 : 1,
                                transition: { delay: i * 0.02 }
                            }}
                        />
                    ))}
                </motion.div>
            );

        case 2: // Dots pattern
            return (
                <motion.div
                    className="absolute bottom-0 right-0 w-44 h-44 opacity-50 pointer-events-none"
                    animate={{ opacity: isHovered ? 0.7 : 0.5 }}
                >
                    {[...Array(100)].map((_, i) => {
                        const x = Math.floor(Math.random() * 200);
                        const y = Math.floor(Math.random() * 200);
                        return (
                            <motion.div
                                key={i}
                                className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${color}`}
                                style={{
                                    left: `${x}px`,
                                    top: `${y}px`,
                                }}
                                animate={{
                                    scale: isHovered ? [1, 1.5, 1] : 1,
                                    transition: {
                                        repeat: isHovered ? Infinity : 0,
                                        duration: 2,
                                        delay: i * 0.01 % 1
                                    }
                                }}
                            />
                        );
                    })}
                </motion.div>
            );

        case 3: // Diagonal lines
            return (
                <motion.div
                    className="absolute bottom-0 right-0 w-44 h-44 opacity-50 pointer-events-none"
                    animate={{ opacity: isHovered ? 0.7 : 0.5 }}
                >
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={`absolute h-32 w-8 bg-gradient-to-b ${color} rounded-full`}
                            style={{
                                bottom: `${10 + i * 10}px`,
                                right: `${-30 + i * 10}px`,
                                transform: 'rotate(45deg)',
                                opacity: 0.3 + (i * 0.1)
                            }}
                            animate={{
                                x: isHovered ? -5 : 0,
                                width: isHovered ? '36px' : '32px',
                                transition: { delay: i * 0.05 }
                            }}
                        />
                    ))}
                </motion.div>
            );

        case 4: // Circles pattern
            return (
                <motion.div
                    className="absolute bottom-0 right-0 w-44 h-44 opacity-50 pointer-events-none"
                    animate={{ opacity: isHovered ? 0.7 : 0.5 }}
                >
                    {[...Array(20)].map((_, i) => {
                        const size = 6 + Math.floor(Math.random() * 14);
                        const x = Math.floor(Math.random() * 160);
                        const y = Math.floor(Math.random() * 160);
                        return (
                            <motion.div
                                key={i}
                                className={`absolute rounded-full bg-gradient-to-r ${color}`}
                                style={{
                                    width: `${size}px`,
                                    height: `${size}px`,
                                    left: `${x}px`,
                                    top: `${y}px`,
                                }}
                                animate={{
                                    scale: isHovered ? [1, 1.2, 1] : 1,
                                    transition: {
                                        repeat: isHovered ? Infinity : 0,
                                        duration: 2 + Math.random(),
                                        delay: i * 0.1 % 1
                                    }
                                }}
                            />
                        );
                    })}
                </motion.div>
            );

        case 5: // Diagonal stripes
            return (
                <motion.div
                    className="absolute bottom-0 right-0 w-44 h-44 opacity-50 pointer-events-none"
                    animate={{ opacity: isHovered ? 0.7 : 0.5 }}
                >
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={`absolute w-36 h-4 bg-gradient-to-r ${color} rounded-full`}
                            style={{
                                bottom: `${i * 12}px`,
                                right: `${-50 + i * 5}px`,
                                transform: 'rotate(45deg)'
                            }}
                            animate={{
                                x: isHovered ? -5 : 0,
                                width: isHovered ? '150px' : '144px',
                                transition: { delay: i * 0.03 }
                            }}
                        />
                    ))}
                </motion.div>
            );

        case 6: // Random lines
            return (
                <motion.div
                    className="absolute bottom-0 right-0 w-44 h-44 opacity-50 pointer-events-none"
                    animate={{ opacity: isHovered ? 0.7 : 0.5 }}
                >
                    {[...Array(30)].map((_, i) => {
                        const size = 3 + Math.floor(Math.random() * 10);
                        const x = Math.floor(Math.random() * 150);
                        const y = Math.floor(Math.random() * 150);
                        const rotation = Math.floor(Math.random() * 180);
                        return (
                            <motion.div
                                key={i}
                                className={`absolute bg-gradient-to-r ${color} rounded-full`}
                                style={{
                                    width: `${size}px`,
                                    height: '2px',
                                    left: `${x}px`,
                                    top: `${y}px`,
                                    transform: `rotate(${rotation}deg)`
                                }}
                                animate={{
                                    rotate: isHovered ? `${rotation + 20}deg` : `${rotation}deg`,
                                    transition: {
                                        duration: 1 + Math.random(),
                                        delay: i * 0.02 % 0.5
                                    }
                                }}
                            />
                        );
                    })}
                </motion.div>
            );

        default:
            return null;
    }
}

function IconComponent({ name }) {
    switch (name) {
        case 'code':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                </svg>
            );
        case 'mobile':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H7zm5 18c-.83 0-1.5-.67-1.5-1.5S11.17 17 12 17s1.5.67 1.5 1.5S12.83 20 12 20zm5-4H7V5h10v11z" />
                </svg>
            );
        case 'server':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 4v6h18V4H3zm16 4H5V6h14v2zM3 14v6h18v-6H3zm16 4H5v-2h14v2z" />
                </svg>
            );
        case 'database':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C7.58 2 4 3.79 4 6v12c0 2.21 3.58 4 8 4s8-1.79 8-4V6c0-2.21-3.58-4-8-4zm0 2c3.86 0 6 1.28 6 2s-2.14 2-6 2-6-1.28-6-2 2.14-2 6-2zm0 14c-3.86 0-6-1.28-6-2v-2c1.18.85 3.48 1.5 6 1.5s4.82-.65 6-1.5v2c0 .72-2.14 2-6 2zm0-6c-3.86 0-6-1.28-6-2V8c1.18.85 3.48 1.5 6 1.5s4.82-.65 6-1.5v2c0 .72-2.14 2-6 2z" />
                </svg>
            );
        case 'brain':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 2c-.55 0-1 .45-1 1v2H7c-1.66 0-3 1.34-3 3v4c0 1.66 1.34 3 3 3v5c0 .55.45 1 1 1h2V2H9zm6 0c-.55 0-1 .45-1 1v18h2c.55 0 1-.45 1-1v-5c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3h-1V3c0-.55-.45-1-1-1h-2z" />
                </svg>
            );
        case 'paint-brush':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.71 4.63l-1.34-1.34c-.78-.78-2.05-.78-2.83 0l-9.19 9.19c-.36.36-.58.86-.58 1.41V18h3.11c.55 0 1.05-.22 1.41-.58l9.19-9.19c.78-.78.78-2.05 0-2.83zM12 16H6v-3.11L16.17 2.72l3.11 3.11L12 16zM5 20h14v2H5z" />
                </svg>
            );
        default:
            return null;
    }
}
