'use client';
//
import { useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { FaShieldAlt, FaShoppingCart, FaTruck, FaIndustry, FaBus, FaHeartbeat, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const domains = [
  { 
    name: "Insurance", 
    icon: <FaShieldAlt />,
    bgImage: "/portfollio/insurance.png",
    iconBg: "bg-gradient-to-br from-blue-600 to-cyan-500"
  },
  { 
    name: "Ecommerce", 
    icon: <FaShoppingCart />, 
    bgImage: "/portfollio/ecom.png",
    iconBg: "bg-gradient-to-br from-purple-600 to-pink-500"
  },
  { 
    name: "Logistic", 
    icon: <FaTruck />, 
    bgImage: "/portfollio/logistic.png",
    iconBg: "bg-gradient-to-br from-amber-600 to-orange-500"
  },
  { 
    name: "Manufacturer", 
    icon: <FaIndustry />, 
    bgImage: "/portfollio/industry.png",
    iconBg: "bg-gradient-to-br from-emerald-600 to-teal-500"
  },
  { 
    name: "Transport", 
    icon: <FaBus />, 
    bgImage: "/portfollio/travel.png",
    iconBg: "bg-gradient-to-br from-green-400 to-green-600"
  },
  { 
    name: "Healthcare", 
    icon: <FaHeartbeat />, 
    bgImage: "/portfollio/health.png",
    iconBg: "bg-gradient-to-br from-rose-600 to-red-500"
  },
  { 
    name: "IT", 
    icon: <FaLaptopCode />, 
    bgImage: "/portfollio/it.png",
    iconBg: "bg-gradient-to-br from-indigo-600 to-violet-500"
  },
  { 
    name: "Education", 
    icon: <FaGraduationCap />, 
    bgImage: "/portfollio/education.png",
    iconBg: "bg-gradient-to-br from-green-600 to-lime-500"
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ReviewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Edward",
      // position: "CTO, Fintech Solutions",
      image: "/profile/man.png",
      rating: 5,
      text: "The web application developed by this team transformed our customer onboarding process. The attention to detail and understanding of our industry-specific needs was exceptional. We've seen a 40% increase in user engagement since launch.",
      industry: "Finance"
    },
    {
      id: 2,
      name: "Rajesh ",
      // position: "Operations Director, HealthPlus",
      image: "/profile/man.png",
      rating: 5,
      text: "Their mobile application for our healthcare services has revolutionized how we interact with patients. The intuitive interface and robust backend have significantly improved our operational efficiency and patient satisfaction scores.",
      industry: "Healthcare"
    },
    {
      id: 3,
      name: "Sarah ",
      // position: "Marketing VP, RetailNow",
      image: "/profile/woman.png",
      rating: 4,
      text: "The e-commerce platform they built for us handles thousands of daily transactions flawlessly. Their team's responsiveness and technical expertise made the complex integration with our legacy systems surprisingly smooth.",
      industry: "Retail"
    },
    {
      id: 4,
      name: "Ajinkya",
      // position: "CEO, EduTech Innovations",
      image: "/profile/man.png",
      rating: 5,
      text: "As an educational technology company, we needed a platform that could scale with our rapid growth. The solution delivered not only met our current needs but provided a flexible architecture that continues to evolve with our business.",
      industry: "Education"
    },
    {
      id: 5,
      name: "Soham",
      // position: "Product Manager, LogisticsPro",
      image: "/profile/woman.png",
      rating: 5,
      text: "The logistics management system developed for us has reduced operational costs by 30% and improved delivery times significantly. Their team's understanding of complex supply chain challenges was impressive.",
      industry: "Logistics"
    }
  ];


  const industries = ["All", ...new Set(reviews.map(review => review.industry))];
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const filteredReviews = selectedIndustry === "All"
    ? reviews
    : reviews.filter(review => review.industry === selectedIndustry);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === filteredReviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? filteredReviews.length - 1 : prev - 1));
  };

  return (
    <section className=" bg-gray-900 pt-12 w-full">
      <div className="container mx-auto px-4 phone:px-0 w-full">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block rounded-full bg-indigo-900 px-4 py-2 mb-4">
            <span className="text-indigo-400 font-semibold">Client Success</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">What Our Clients Say</h2>
          <p className="text-lg text-gray-300">
            Don't just take our word for it. Hear from organizations that have transformed their businesses with our IT solutions.
          </p>
        </div>

        {/* Industry Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => {
                setSelectedIndustry(industry);
                setCurrentSlide(0);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedIndustry === industry
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-md'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Reviews Slider */}
        <div className="relative max-w-5xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-gradient-to-r  from-indigo-900/30 to-blue-900/30 rounded-2xl p-1 shadow-xl">
            <div className="bg-gray-800 rounded-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Client Image and Info - Mobile */}
                <div className="md:hidden flex flex-col items-center text-center mb-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-indigo-500">
                    <Image
                      src={filteredReviews[currentSlide].image}
                      alt={filteredReviews[currentSlide].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-xl text-white">
                    {filteredReviews[currentSlide].name}
                  </h3>
                  {/* <p className="text-indigo-400">{filteredReviews[currentSlide].position}</p> */}
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        fill={i < filteredReviews[currentSlide].rating ? "#4F46E5" : "none"}
                        className={`w-4 h-4 ${i < filteredReviews[currentSlide].rating
                            ? "text-indigo-400"
                            : "text-gray-600"
                          }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="flex-1 relative">
                  <Quote className="absolute top-0 left-0 w-12 h-12 text-indigo-900 -mt-6 -ml-2" />
                  <p className="text-gray-200 text-lg leading-relaxed italic pt-6">
                    {filteredReviews[currentSlide].text}
                  </p>
                </div>

                {/* Client Image and Info - Desktop */}
                <div className="hidden md:block">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-indigo-500">
                      <Image
                        src={filteredReviews[currentSlide].image}
                        alt={filteredReviews[currentSlide].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-xl text-white">
                      {filteredReviews[currentSlide].name}
                    </h3>
                    <p className="text-indigo-400">{filteredReviews[currentSlide].position}</p>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          fill={i < filteredReviews[currentSlide].rating ? "#4F46E5" : "none"}
                          className={`w-5 h-5 ${i < filteredReviews[currentSlide].rating
                              ? "text-indigo-400"
                              : "text-gray-600"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-indigo-900 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {filteredReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${currentSlide === index
                      ? 'bg-indigo-400'
                      : 'bg-gray-600'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-indigo-900 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>


   <div className="py-20 bg-gradient-to-b from-indigo-900/10 to-blue-900/10 rounded-lg px-6 md:px-12 overflow-hidden relative ">
  {/* Subtle background accent */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/50 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900/50 rounded-full blur-3xl"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 w-full">
    <h2 className="text-center text-2xl md:text-4xl font-semibold text-white mb-4">
      Trusted by Industry Leaders
    </h2>
    <p className="text-center text-slate-300 mb-16 max-w-2xl mx-auto text-sm md:text-base">
      Delivering exceptional solutions across diverse industries with innovation and expertise
    </p>

    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center max-w-6xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {domains.map(({ name, icon, bgImage, iconBg }) => (
        <motion.div
          key={name}
          variants={itemVariants}
          className="relative w-full h-36 md:h-48 flex flex-col items-center justify-center rounded-lg border border-slate-700 text-white transition-all duration-300 group p-5 overflow-hidden"
        >
          {/* Background image with overlay - visible on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-800/60 to-blue-900/70 z-10"></div>
            <img
              src={bgImage}
              alt={name}
              className="absolute inset-0 w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-100"
            />
          </div>
          
          {/* Default state background */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900 group-hover:opacity-0 transition-opacity duration-100"></div>
          
          {/* Subtle glass effect */}
          <div className="absolute inset-0 bg-white/5 rounded-lg transition-all duration-200"></div>
          
          {/* Icon & Name */}
          <div className="relative z-10 flex flex-col items-center transition-transform duration-300">
            <div className={`w-16 h-16 mb-3 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 text-white text-xl shadow-lg ${iconBg}`}>
              {icon}
            </div>
            <span className="font-medium text-base md:text-lg text-center text-white group-hover:text-white transition-colors duration-300">
              {name}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</div>


      </div>
    </section>
  );
};

export default ReviewsSection;