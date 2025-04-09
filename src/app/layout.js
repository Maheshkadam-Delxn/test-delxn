"use client"
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CoreValues from "./components/CoreValues";
import Stats from "./components/Stats";
import { useState, useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
 
export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased bg-[#001730]`}
      >
        {loading ? (
          <div className="flex flex-col items-center justify-center h-screen relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[#001730]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>
            
            {/* Animated floating particles */}
            <div className="absolute inset-0 opacity-50">
              {[...Array(10)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-float"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${5 + Math.random() * 10}s`
                  }}
                ></div>
              ))}
            </div>
            
            {/* Centered content with enhanced effects */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Logo container with subtle animation */}
              <div className="relative mb-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              
              {/* Main title with enhanced animation */}
              <h1 className="text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 animate-gradient-x tracking-tight">
                DelXN Technologies
              </h1>
              
              {/* Subtitle with elegant fade-in */}
              <p className="mt-3 text-xl text-blue-100/80 animate-fadeIn tracking-wider">
                Deliver Excellence with Innovation
              </p>
              
              {/* Loading indicator */}
              <div className="mt-8 flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-3 h-3 rounded-full bg-blue-400"
                    style={{
                      animation: 'bounce 1.4s infinite ease-in-out',
                      animationDelay: `${i * 0.16}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            <NavBar />
            {children}
            {/* <Stats /> */}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}