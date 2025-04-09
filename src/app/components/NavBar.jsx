'use client';

import Image from 'next/image';
import logo from '../../../public/images/logo.png';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FaBars, FaTimes, FaChevronDown, FaCode, FaMobile, FaServer, FaDatabase, FaBrain, FaPaintBrush } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('/');
    const pathname = usePathname();
    const router = useRouter();
    const dropdownRef = useRef(null);

    const services = [
        {
            id: 1,
            icon: <FaCode />,
            iconColor: 'bg-purple-500',
            title: 'App Development',
            year: 'Cross-platform ',
            location: 'San Francisco, USA',
            patternColor: 'from-purple-500 to-blue-400',
            href : "/services/app-development"
        },
        {
            id: 2,
            icon: <FaMobile />,
            iconColor: 'bg-blue-500',
            title: 'Web Development',
            year: 'Cross-browser ',
            location: 'Berlin, Germany',
            patternColor: 'from-blue-400 to-yellow-300',
             href : "/services/web-development"
        },
        {
            id: 3,
            icon: <FaServer />,
            iconColor: 'bg-yellow-500',
            title: 'Cloud Services',
            year: 'Multi-cloud',
            location: 'London, UK',
            patternColor: 'from-yellow-400 to-yellow-500',
             href : "/services/cloud-services"
        },
        {
            id: 4,
            icon: <FaDatabase />,
            iconColor: 'bg-green-500',
            title: 'Data Management',
            year: 'Scalable',
            location: 'Singapore',
            patternColor: 'from-green-400 to-green-500',
             href : "/services/data-management"
        },
        {
            id: 5,
            icon: <FaBrain />,
            iconColor: 'bg-yellow-500',
            title: 'AI/ML Tech',
            year: 'Generalizable',
            location: 'Bangalore, India',
            patternColor: 'from-yellow-400 to-yellow-500',
             href : "/services/aiml-tech"
        },
        {
            id: 6,
            icon: <FaPaintBrush />,
            iconColor: 'bg-red-500',
            title: 'UI/UX Design Innovation',
            year: 'Adaptive',
            location: 'Dubai, UAE',
            patternColor: 'from-red-400 to-red-500',
             href : "/services/uiux-design"
        },
    ];

    useEffect(() => {
        setActiveItem(pathname);
        
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        
        window.addEventListener('scroll', handleScroll);

        // Close dropdown when clicking outside
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsServicesDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [pathname]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (isServicesDropdownOpen) setIsServicesDropdownOpen(false);
    };

    const toggleServicesDropdown = () => {
        setIsServicesDropdownOpen(!isServicesDropdownOpen);
    };

    const handleServicesClick = (service) => {
        if (service && service.href) {
            router.push(service.href);
        } else {
            const sectionId = service ? `services-${service.id}` : 'services';
            
            if (pathname === "/") {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
            } else {
                router.push(`/#${sectionId}`);
            }
        }
        
        setActiveItem("/#services");
        setIsServicesDropdownOpen(false);
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { 
            name: 'Services', 
            path: '/#services', 
            hasDropdown: true, 
            onClick: () => toggleServicesDropdown() 
        },
        { name: 'Portfolio', path: '/portfollio' },
    ];

    return (
        <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full top-0 left-0 z-50 transition-all duration-300  ${
                isScrolled 
                ? 'bg-[#001730]/95 backdrop-blur-sm shadow-lg py-2' 
                : 'bg-[#001730] py-4'
            }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center phone:px-0   phone:w-full ">
                <Link href="/" className="flex items-center group">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <Image 
                            src={logo} 
                            alt="Logo" 
                            width={150} 
                            height={50} 
                            className="object-contain"
                        />
                    </motion.div>
                </Link>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-1">
                    <ul className="flex space-x-1">
                        {navItems.map((item, index) => (
                            <motion.li 
                                key={index}
                                className="relative"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                                ref={item.hasDropdown ? dropdownRef : null}
                            >
                                {item.hasDropdown ? (
                                    <>
                                        <button 
                                            onClick={item.onClick}
                                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                                                activeItem === item.path || isServicesDropdownOpen
                                                ? 'text-white bg-blue-600/20' 
                                                : 'text-gray-300 hover:text-white hover:bg-blue-600/10'
                                            }`}
                                        >
                                            {item.name}
                                            <FaChevronDown className={`ml-2 text-xs transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                        
                                        <AnimatePresence>
                                            {isServicesDropdownOpen && (
                                                <motion.div 
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full mt-2 left-0 w-64 bg-[#001730] rounded-lg shadow-xl border border-blue-900/40 overflow-hidden z-50"
                                                >
                                                    <div className="max-h-[70vh] overflow-y-auto">
                                                        <div className="p-2 grid grid-cols-1 gap-1">
                                                            {services.map((service) => (
                                                               <motion.a
                                                               href={service.href}
                                                               key={service.id}
                                                               onClick={(e) => {
                                                                   e.preventDefault();
                                                                   handleServicesClick(service);
                                                               }}
                                                               whileHover={{ x: 5 }}
                                                               className="flex items-center gap-3 p-3 rounded-md hover:bg-blue-600/10 text-left transition-colors group"
                                                           >
                                                                    <div className={`w-8 h-8 rounded-md flex items-center justify-center ${service.iconColor} bg-opacity-20 text-white group-hover:bg-opacity-30`}>
                                                                        {service.icon}
                                                                    </div>
                                                                    <div>
                                                                        <div className="font-medium text-white">{service.title}</div>
                                                                        <div className="text-xs text-blue-300">{service.year}</div>
                                                                    </div>
                                                                </motion.a>
                                                            ))}
                                                        </div>
                                                        <div className="p-2 border-t border-blue-900/20">
                                                            <button 
                                                                onClick={() => handleServicesClick()}
                                                                className="w-full text-center py-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                                                            >
                                                                View All Services
                                                            </button>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </>
                                ) : (
                                    <Link 
                                        href={item.path}
                                        className={`px-4 py-2 rounded-lg font-medium block transition-all duration-300 ${
                                            activeItem === item.path 
                                            ? 'text-white bg-blue-600/20' 
                                            : 'text-gray-300 hover:text-white hover:bg-blue-600/10'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                                {activeItem === item.path && !item.hasDropdown && (
                                    <motion.span 
                                        layoutId="activeIndicator"
                                        className="absolute bottom-0 left-0 right-0 mx-auto w-1/2 h-0.5 bg-blue-500 rounded-full"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </motion.li>
                        ))}
                    </ul>

                    <div className="ml-6">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link 
                                href="/contact"
                                className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium shadow-md hover:shadow-blue-500/30 transition-all duration-300 border border-blue-400/20"
                            >
                                Get Started
                            </Link>
                        </motion.div>
                    </div>
                </div>
                
        {/* Mobile Menu Toggle */}
        <motion.button 
            onClick={toggleMobileMenu} 
            className="md:hidden text-2xl focus:outline-none transition-colors duration-300 w-10 h-10 flex items-center justify-center bg-blue-600/10 rounded-lg"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
        >
            {isMobileMenuOpen ? (
                <FaTimes className="text-blue-400" />
            ) : (
                <FaBars className="text-blue-400" />
            )}
        </motion.button>
    </div>

    {/* Mobile Menu */}
    <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-[#001730] border-t border-blue-900/30"
            >
                <div className="container mx-auto px-6 py-4">
                    <ul className="flex flex-col space-y-2">
                        {navItems.map((item, index) => (
                            <motion.li 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="w-full"
                            >
                                {item.hasDropdown ? (
                                    <div>
                                        <button 
                                            onClick={toggleServicesDropdown}
                                            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-between ${
                                                activeItem === item.path || isServicesDropdownOpen
                                                ? 'text-white bg-blue-600/20 border-l-4 border-blue-500' 
                                                : 'text-gray-300 hover:text-white hover:bg-blue-600/10'
                                            }`}
                                        >
                                            {item.name}
                                            <FaChevronDown className={`text-xs transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                        
                                        <AnimatePresence>
                                            {isServicesDropdownOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="pl-4 mt-2 space-y-1"
                                                >
                                                    {services.map((service) => (
                                                        <motion.button
                                                            key={service.id}
                                                            onClick={() => handleServicesClick(service)}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: service.id * 0.05 }}
                                                            className="flex items-center gap-3 p-3 rounded-md hover:bg-blue-600/10 text-left transition-colors w-full"
                                                        >
                                                            <div className={`w-8 h-8 rounded-md flex items-center justify-center ${service.iconColor} bg-opacity-20 text-white`}>
                                                                {service.icon}
                                                            </div>
                                                            <div>
                                                                <div className="font-medium text-white">{service.title}</div>
                                                                <div className="text-xs text-blue-300">{service.year}</div>
                                                            </div>
                                                        </motion.button>
                                                    ))}
                                                    <motion.button
                                                        onClick={() => handleServicesClick()}
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 0.4 }}
                                                        className="w-full text-center py-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                                                    >
                                                        View All Services
                                                    </motion.button>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link 
                                        href={item.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`block w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                                            activeItem === item.path 
                                            ? 'text-white bg-blue-600/20 border-l-4 border-blue-500' 
                                            : 'text-gray-300 hover:text-white hover:bg-blue-600/10'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </motion.li>
                        ))}
                    </ul>
                    
                    <motion.div 
                        className="mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link 
                            href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full block text-center px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            Get Started
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
        </motion.nav>
    );
};

export default NavBar;