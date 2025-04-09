"use client";
import React from 'react'
import Image from "next/image"
import rightSideImage from "../../../public/bg/right-side-img.png"
import { useEffect, useState } from 'react';
import Link from "next/link";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[#001C3B] min-h-screen flex items-center phone:h-[120vh] ">
      {/* Animated network lines background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="#001C3B" />
          <path d="M0 50 Q 150 150, 300 50 T 600 50 T 900 50 T 1200 50" stroke="url(#grad1)" strokeWidth="2" fill="none" />
          <path d="M0 100 Q 150 200, 300 100 T 600 100 T 900 100 T 1200 100" stroke="url(#grad1)" strokeWidth="2" fill="none" />
          <path d="M0 150 Q 150 250, 300 150 T 600 150 T 900 150 T 1200 150" stroke="url(#grad1)" strokeWidth="2" fill="none" />
          <path d="M0 200 Q 150 300, 300 200 T 600 200 T 900 200 T 1200 200" stroke="url(#grad1)" strokeWidth="2" fill="none" />
        </svg>
      </div>
      
      {/* Glowing orbs representing data nodes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full blur-xl"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: Math.random() > 0.5 ? 'rgba(56, 189, 248, 0.5)' : 'rgba(14, 165, 233, 0.5)',
              animation: `float ${Math.random() * 10 + 15}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      {/* Main content wrapper */}
      <div className="container mx-auto px-6 relative z-10 phone:w-full phone:px-0  ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className={`w-full lg:w-1/2  text-white transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <div className="relative mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
              <h2 className="mt-3 text-cyan-300 font-medium">NEXT-GEN IT SOLUTIONS</h2>
            </div>
            
            <h1 className="text-5xl md:text-5xl lg:text-5xl xl:text-5xl font-bold leading-tight mb-6 phone:text-4xl">
              <span className="block">Your Trusted Partner in</span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                Innovative IT Solutions
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">
              Our IT solutions empower businesses through cutting-edge technology, seamless integration, and expert support, driving digital transformation, enhancing efficiency, and fostering innovation to stay ahead in the ever-evolving tech landscape.
            </p>
            
            <div className="flex md:flex-wrap gap-5 ">
            <Link href="/contact">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl font-medium overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 h-full w-full scale-0 rounded-xl bg-white/10 transition-all duration-300 group-hover:scale-100"></div>
              </button>
              </Link>


              <a href="/about" className="group relative flex items-center px-7 py-4 text-cyan-300 overflow-hidden border border-cyan-500/30 rounded-xl transition-all duration-300 hover:border-cyan-500/60">
                <span className="relative z-10">Learn More</span>
                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <div className="absolute inset-0 h-full w-full scale-0 rounded-xl bg-cyan-950/30 transition-all duration-300 group-hover:scale-100"></div>
              </a>
            </div>
            
            {/* Client trust indicators */}
          
          </div>
          
          {/* Right Image - Robot with Neural Network */}
          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div className="relative">
              {/* Neural network animated glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-cyan-400/20 to-blue-600/20 rounded-3xl blur-3xl opacity-70 animate-pulse"></div>
              
              {/* Neural network node points */}
              <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      boxShadow: '0 0 15px 2px rgba(8, 145, 178, 0.7)',
                      animation: `pulse ${Math.random() * 3 + 2}s infinite ease-in-out alternate`
                    }}
                  />
                ))}
              </div>
              
              {/* Neural network connection lines */}
              <div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                  <line x1="100" y1="100" x2="400" y2="100" stroke="rgba(8, 145, 178, 0.4)" strokeWidth="1" />
                  <line x1="100" y1="100" x2="250" y2="250" stroke="rgba(8, 145, 178, 0.4)" strokeWidth="1" />
                  <line x1="400" y1="100" x2="250" y2="250" stroke="rgba(8, 145, 178, 0.4)" strokeWidth="1" />
                  <line x1="100" y1="400" x2="250" y2="250" stroke="rgba(8, 145, 178, 0.4)" strokeWidth="1" />
                  <line x1="400" y1="400" x2="250" y2="250" stroke="rgba(8, 145, 178, 0.4)" strokeWidth="1" />
                  <line x1="100" y1="400" x2="400" y2="400" stroke="rgba(8, 145, 178, 0.4)" strokeWidth="1" />
                </svg>
              </div>
              
              {/* Main image */}
              <div className="relative  bg-gradient-to-b from-blue-900/30 to-blue-950/40 backdrop-blur-sm rounded-3xl border border-blue-500/20">
                <Image
                  src={rightSideImage}
                  alt="AI Robot with Neural Network"
                  width={1920}
                  height={1080}
                  className="object-contain z-10 relative "
                  priority
                />
                
                {/* Stats cards overlapping with image */}
                <div className="absolute -left-10 top-40 bg-blue-900/60 backdrop-blur-md p-4 rounded-xl border border-blue-500/30 shadow-lg phone:hidden">
                  <div className="text-sm text-gray-300">Excellence</div>
                </div>
                
                
                <div className="absolute -left-4 top-14   bg-blue-900/70 backdrop-blur-md  p-4 rounded-xl border-blue-500/30 shadow-lg  phone:hidden">
                {/* <div className="text-3xl font-bold text-cyan-300"></div> */}
                  <div className="text-md text-gray-300">Delivery</div>
                </div>
              </div>
              
              {/* Technologies displayed around image */}
              <div className="absolute -left-4 bottom-16  bg-blue-900/70 backdrop-blur-md p-4 rounded-xl border-blue-500/30 shadow-lg phone:hidden ">
                <span className="text-md text-gray-300">Innovation</span>
              </div>
              
              <div className="absolute -right-4 top-10   bg-blue-900/70 backdrop-blur-md  p-4 rounded-xl border-blue-500/30 shadow-lg phone:hidden">
                {/* <div className="w-2 h-2 bg-teal-300 rounded-full animate-pulse"></div> */}
                <span className="text-md text-gray-300">Trust</span>
              </div>
              <div className="absolute -right-1 bottom-1/4 bg-blue-900/60 backdrop-blur-md p-4 rounded-xl border border-blue-500/30 shadow-lg phone:hidden">
              <div className="text-sm text-gray-300">Quality</div>
                </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-20 lg:h-24">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,155.63,69.08,262.26,57.5,334.65,50.19,280.14,63.9,321.39,56.44Z" 
            className="fill-blue-900/20"
          ></path>
        </svg>
      </div>
      
      {/* Add some global animations */}
      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.7; }
          100% { transform: scale(1.05); opacity: 1; }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  )
}

export default HeroSection
