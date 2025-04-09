'use client';

import { useState } from 'react';
import Head from 'next/head';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };
  // For tab switching
const [activeTab, setActiveTab] = useState('business');

// For form data
const [businessData, setBusinessData] = useState({
  name: '',
  email: '',
  company: '',
  service: '',
  message: ''
});

const [careerData, setCareerData] = useState({
  name: '',
  email: '',
  position: '',
  experience: '',
  message: ''
});

// For file upload
const [resumeFile, setResumeFile] = useState(null);

// Handler functions
const handleBusinessChange = (e) => {
  setBusinessData({...businessData, [e.target.name]: e.target.value});
};

const handleCareerChange = (e) => {
  setCareerData({...careerData, [e.target.name]: e.target.value});
};

const handleFileChange = (e) => {
  if (e.target.files[0]) {
    setResumeFile(e.target.files[0]);
  }
};

const handleBusinessSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  // Add your business form submission logic here
  // When complete:
  // setIsSubmitting(false);
  // setSubmitStatus('success');
};

const handleCareersSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  // Add your career form submission logic here
  // When complete:
  // setIsSubmitting(false);
  // setSubmitStatus('success');
};

  return (
    <>
      {/* <Head>
        <title>Contact Us | Your Company Name</title>
        <meta name="description" content="Get in touch with our team. We're here to help with any questions or inquiries." />
      </Head> */}

      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
       {/* Hero Section - Improved */}
<div className="relative  bg-gradient-to-r from-[#001E3C] to-[#003A75] py-32 mt-16 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-r from-[#001E3C] to-[#003A75]"></div>
    <div className="absolute inset-0 bg-[url('/images/mesh-pattern.svg')] opacity-10"></div>
    <div className="absolute inset-0 bg-grid-white/5"></div>
  </div>
  <div className="absolute right-0 top-0 -mt-16 opacity-20">
    <svg width="404" height="384" fill="none" viewBox="0 0 404 384">
      <defs>
        <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" className="text-white" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
    </svg>
  </div>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
      <span className="inline-block text-white pb-2">
        Contact Us
      </span>
    </h1>
    <div className="mt-2">
      <div className="h-1 w-24 bg-blue-800 mx-auto rounded-full"></div>
    </div>
    <p className="mt-6 max-w-2xl mx-auto text-xl text-indigo-100">
      We'd love to hear from you. Reach out and let's start a conversation.
    </p>
    <div className="mt-10 flex justify-center gap-4">
      <a href="#contactForm" className="rounded-full px-8 py-3 bg-white text-indigo-900 font-medium hover:bg-indigo-50 transition-all shadow-lg hover:shadow-white/20">
        Send Message
      </a>
      <a href="#findUs" className="rounded-full px-8 py-3 bg-transparent border border-white text-white font-medium hover:bg-white/10 transition-all">
        Find Our Office
      </a>
    </div>
  </div>
</div>

{/* Contact Grid - Improved */}
<section className="relative py-20 sm:py-28 bg-gray-900">
  <div className="absolute left-0 top-0 opacity-10">
    <svg width="404" height="784" fill="none" viewBox="0 0 404 784">
      <defs>
        <pattern id="56409614-db72-4ea8-9ab3-9a195bcf5703" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" className="text-indigo-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="404" height="784" fill="url(#56409614-db72-4ea8-9ab3-9a195bcf5703)" />
    </svg>
  </div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Contact Information */}
      <div className="lg:col-span-1 space-y-8">
        <div className=" bg-gradient-to-br from-[#00264D] to-[#003366] rounded-3xl shadow-xl p-8 transform transition-all hover:shadow-2xl border border-gray-700 backdrop-filter backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-[#001E3C]  p-3 rounded-full shadow-lg shadow-indigo-900/30">
                <FiMail className="h-6 w-6 text-white" />
              </div>
              <div className="ml-5">
                <h3 className="text-lg font-medium text-white">Email Us</h3>
                <p className="mt-2 text-gray-300 hover:text-indigo-300 transition-colors">info@delxntech.com</p>
                <p className="mt-1 text-gray-300 hover:text-indigo-300 transition-colors">carrers@delxntech.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-[#001E3C] p-3 rounded-full shadow-lg shadow-indigo-900/30">
                <FiPhone className="h-6 w-6 text-white" />
              </div>
              <div className="ml-5">
                <h3 className="text-lg font-medium text-white">Call Us</h3>
                <p className="mt-2 text-gray-300 hover:text-indigo-300 transition-colors">+91 84 82 947 050</p>
                <p className="mt-1 text-gray-300 hover:text-indigo-300 transition-colors">+91 84 21 539 304</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-[#001E3C] p-3 rounded-full shadow-lg shadow-indigo-900/30">
                <FiMapPin className="h-6 w-6 text-white" />
              </div>
              <div className="ml-5">
                <h3 className="text-lg font-medium text-white">Visit Us</h3>
                <p className="mt-2 text-gray-300">
                Sr. No 36/1/3 2nd Floor,<br />
                Audumbar Nivya, Near<br />
                Canara Bank, Narhe gaon,<br/>
                Pune - 411041
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-[#001E3C] p-3 rounded-full shadow-lg shadow-indigo-900/30">
                <FiClock className="h-6 w-6 text-white" />
              </div>
              <div className="ml-5">
                <h3 className="text-lg font-medium text-white">Business Hours</h3>
                <p className="mt-2 text-gray-300">Monday - Friday: 10AM - 7PM</p>
                <p className="mt-1 text-gray-300">Saturday: 10AM - 2PM</p>
                <p className="mt-1 text-gray-300">Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t border-gray-700">
            <h3 className="text-lg font-medium text-white mb-4">Follow Us</h3>
            <div className="flex space-x-5">
              {/* <a href="#" className="bg-gradient-to-r from-[#001E3C] to-[#003A75] p-3 rounded-full hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-indigo-900/30 transform hover:-translate-y-1">
                <FaFacebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-gradient-to-r from-[#001E3C] to-[#003A75] p-3 rounded-full hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-indigo-900/30 transform hover:-translate-y-1">
                <FaTwitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-gradient-to-r from-[#001E3C] to-[#003A75] p-3 rounded-full hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-indigo-900/30 transform hover:-translate-y-1">
                <FaInstagram className="h-5 w-5 text-white" />
              </a> */}
              <a href="https://www.linkedin.com/company/delxn-technologies-pvt-ltd/" className="bg-gradient-to-r from-[#001E3C] to-[#003A75] p-3 rounded-full hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-indigo-900/30 transform hover:-translate-y-1">
                <FaLinkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Form */}
      <div className="lg:col-span-2" id="contactForm">
  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-xl p-8 border border-gray-700 backdrop-filter backdrop-blur-sm">
    <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
    
    {/* Tab Navigation */}
    <div className="flex border-b border-gray-700 mb-6">
      <button 
        onClick={() => setActiveTab('business')} 
        className={`px-6 py-3 font-medium text-sm transition-colors ${
          activeTab === 'business' 
            ? 'text-indigo-400 border-b-2 border-indigo-500' 
            : 'text-gray-400 hover:text-gray-300'
        }`}
      >
        Business Inquiries
      </button>
      <button 
        onClick={() => setActiveTab('careers')} 
        className={`px-6 py-3 font-medium text-sm transition-colors ${
          activeTab === 'careers' 
            ? 'text-indigo-400 border-b-2 border-indigo-500' 
            : 'text-gray-400 hover:text-gray-300'
        }`}
      >
        Career Opportunities
      </button>
    </div>
    
    {submitStatus === 'success' ? (
      <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 border border-green-600 rounded-2xl p-8 text-center shadow-lg">
        <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 mx-auto rounded-full flex items-center justify-center shadow-lg shadow-green-900/30">
          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-6 text-xl font-semibold text-green-300">Message Sent Successfully!</h3>
        <p className="mt-3 text-green-200">Thank you for reaching out. We'll get back to you as soon as possible.</p>
        <button 
          onClick={() => setSubmitStatus(null)} 
          className="mt-6 px-6 py-2 bg-green-700 hover:bg-green-600 rounded-full text-white font-medium transition-colors"
        >
          Send Another Message
        </button>
      </div>
    ) : (
      <>
        {/* Business Inquiries Form */}
        {activeTab === 'business' && (
          <form onSubmit={handleBusinessSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="business-name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="business-name"
                    value={businessData.name}
                    onChange={handleBusinessChange}
                    required
                    className="pl-10 block w-full bg-gray-700/70 border-gray-600 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white py-3"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="business-email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="business-email"
                    value={businessData.email}
                    onChange={handleBusinessChange}
                    required
                    className="pl-10 block w-full bg-gray-700/70 border-gray-600 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white py-3"
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="business-company" className="block text-sm font-medium text-gray-300 mb-2">
                Company Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="company"
                  id="business-company"
                  value={businessData.company}
                  onChange={handleBusinessChange}
                  required
                  className="pl-10 block w-full bg-gray-700/70 border-gray-600 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white py-3"
                  placeholder="Acme Inc."
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="business-service" className="block text-sm font-medium text-gray-300 mb-2">
                Service Interested In
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <select
                  name="service"
                  id="business-service"
                  value={businessData.service}
                  onChange={handleBusinessChange}
                  required
                  className="pl-10 block w-full bg-gray-700/70 border-gray-600 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white py-3"
                >
                  <option value="">Select a service</option>
                  <option value="consulting">Consulting</option>
                  <option value="development">Development</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="business-message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <textarea
                  rows={6}
                  name="message"
                  id="business-message"
                  value={businessData.message}
                  onChange={handleBusinessChange}
                  required
                  className="pl-10 block w-full bg-gray-700/70 border-gray-600 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white"
                  placeholder="Tell us about your project or business needs..."
                />
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                id="business-privacy-policy"
                name="privacy-policy"
                type="checkbox"
                required
                className="h-5 w-5 text-[#001E3C]  focus:ring-indigo-500 border-gray-500 rounded bg-gray-700"
              />
              <label htmlFor="business-privacy-policy" className="ml-3 block text-sm text-gray-300">
                I agree to the{' '}
                <a href="#" className="text-[#3a8ee2] hover:text-indigo-300 underline">
                  Privacy Policy
                </a>
              </label>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-6 border border-transparent rounded-xl shadow-md text-base font-medium text-white bg-[#001E3C]  hover:bg-[#003A75] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:-translate-y-0.5"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Submit Business Inquiry
                  </span>
                )}
              </button>
            </div>
          </form>
        )}
        
        {/* Careers Form */}
        {activeTab === 'careers' && (
          <form onSubmit={handleCareersSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="career-name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="career-name"
                    value={careerData.name}
                    onChange={handleCareerChange}
                    required
                    className="pl-10 block w-full bg-gray-700/70 border-gray-600 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white py-3"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="career-email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="career-email"
                    value={careerData.email}
                    onChange={handleCareerChange}
                    required
                    className="pl-10 block w-full bg-gray-700/70 border-gray-600 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white py-3"
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="career-position" className="block text-sm font-medium text-gray-300 mb-2">
                Position Interested In
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <select
                  name="position"
                  id="career-position"
                  value={careerData.position}
                  onChange={handleCareerChange}
                  required
                  className="pl-10 block w-full bg-gray-700/70 border-gray-600 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white py-3"
                >
                  <option value="">Select a position</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="marketing">Marketing Specialist</option>
                  <option value="project-manager">Project Manager</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="career-experience" className="block text-sm font-medium text-gray-300 mb-2">
                Years of Experience
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <select
                  name="experience"
                  id="career-experience"
                  value={careerData.experience}
                  onChange={handleCareerChange}
                  required
                  className="pl-10 block w-full bg-gray-700/70 border-gray-600 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white py-3"
                >
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="career-resume" className="block text-sm font-medium text-gray-300 mb-2">
                Resume / CV
              </label>
              <div className="relative border-2 border-dashed border-gray-600 rounded-xl p-6 text-center">
                <input
                  type="file"
                  name="resume"
                  id="career-resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="sr-only"
                />
                <label htmlFor="career-resume" className="cursor-pointer flex flex-col items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span className="text-sm text-gray-300">
                    {resumeFile ? resumeFile.name : 'Upload your resume (PDF, DOC, DOCX)'}
                  </span>
                  <span className="mt-2 text-xs text-gray-400">Click to browse files</span>
                </label>
              </div>
            </div>
            
            <div>
              <label htmlFor="career-message" className="block text-sm font-medium text-gray-300 mb-2">
                Cover Letter / Additional Information
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <textarea
                  rows={6}
                  name="message"
                  id="career-message"
                  value={careerData.message}
                  onChange={handleCareerChange}
                  className="pl-10 block w-full bg-gray-700/70 border-gray-600 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white"
                  placeholder="Tell us about yourself and why you're interested in this position..."
                />
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                id="career-privacy-policy"
                name="privacy-policy"
                type="checkbox"
                required
                className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-500 rounded bg-gray-700"
              />
              <label htmlFor="career-privacy-policy" className="ml-3 block text-sm text-gray-300">
                I agree to the{' '}
                <a href="#" className="text-[#3a8ee2] hover:text-indigo-300 underline">
                  Privacy Policy
                </a>
              </label>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-6 border border-transparent rounded-xl shadow-md text-base font-medium text-white bg-[#001E3C]  hover:bg-[#003A75] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:-translate-y-0.5"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    Submit Application
                  </span>
                )}
              </button>
            </div>
          </form>
        )}
      </>
    )}
  </div>
</div>
    </div>
  </div>
</section>

{/* Map Section - Improved */}
<section className="bg-gradient-to-b from-gray-800 to-gray-900 py-20" id="findUs">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-white mb-3">Find Us</h2>
      <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full mb-6"></div>
      <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
        Located in the heart of Pune, our office is easily accessible by public transportation.
      </p>
    </div>
    
    <div className="overflow-hidden rounded-3xl shadow-xl bg-gray-700 border border-gray-600">
      <div className="aspect-w-20 aspect-h-8">
        <iframe
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.066895785805!2d-122.41941809086828!3d37.77492851191369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858093edc7a0d3%3A0x3cbe61b77f639046!2sSoMa%2C%20San%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1674669264621!5m2!1sen!2s"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.847387640482!2d73.82044547491624!3d18.445237071471638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295004697c6ff%3A0xe9ea1fced14e13bb!2sDelXN%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1742298537310!5m2!1sen!2sin" 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location Map"
          className="filter grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </div>
    </div>
    
  </div>
</section>

        {/* FAQ Section */}
        <section className="bg-gray-900 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                Find answers to commonly asked questions about contacting our team.
              </p>
            </div>
            
            <div className="mt-12 max-w-4xl mx-auto divide-y divide-gray-700">
              {[
                {
                  question: "What is the typical response time for inquiries?",
                  answer: "We strive to respond to all inquiries within 24-48 business hours. For urgent matters, please indicate in the subject line of your message."
                },
                {
                  question: "Can I schedule a virtual meeting with your team?",
                  answer: "Absolutely! You can request a virtual meeting through our contact form. Please provide some details about what you'd like to discuss, and we'll set up a convenient time."
                },
                {
                  question: "Do you offer in-person consultations?",
                  answer: "Yes, we welcome in-person consultations at our San Francisco office. Please contact us at least 48 hours in advance to schedule an appointment."
                },
                {
                  question: "How can I apply for a job at your company?",
                  answer: "Please visit our Careers page for current openings and application instructions. You can also send your resume and cover letter to careers@yourcompany.com."
                },
                {
                  question: "Can I request a product demo?",
                  answer: "Yes! Please fill out our contact form and select 'Product Demo' as the subject. A member of our sales team will reach out to schedule a personalized demonstration."
                }
              ].map((item, index) => (
                <div key={index} className="py-6">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="text-lg font-semibold text-white">{item.question}</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-gray-300 mt-3 group-open:animate-fadeIn">
                      {item.answer}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#001E3C] to-[#003A75] py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-bold text-white">Ready to Get Started?</h2>
    <p className="mt-4 text-xl text-indigo-100 max-w-2xl mx-auto">
      Join thousands of satisfied customers who have transformed their business with our solutions.
    </p>
    <div className="mt-8 flex justify-center space-x-4">
      <a
        href="/portfollio"
        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-900 bg-white hover:bg-indigo-50 transition-colors"
      >
        Explore Our Solutions
      </a>
      <a
        href="/#services"
        className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-indigo-800/30 transition-colors"
      >
        Discover More
      </a>
    </div>
  </div>
</section>

      </div>
    </>
  );
}

export default page;
