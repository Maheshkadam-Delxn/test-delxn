"use client";
import { CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const StepsSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [reachedLastStep, setReachedLastStep] = useState(false);
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);
  const containerRef = useRef(null);

  const steps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      description:
        "We begin by understanding your business objectives, challenges, and technology requirements through in-depth consultations with key stakeholders.",
      features: [
        "Requirement analysis",
        "Business process evaluation",
        "Technology stack assessment",
        "Budget planning",
      ],
    },
    {
      number: "02",
      title: "Strategic Planning",
      description:
        "Our experts develop a comprehensive roadmap tailored to your specific needs, outlining the implementation approach, timelines, and deliverables.",
      features: [
        "Solution architecture",
        "Resource allocation",
        "Risk assessment",
        "Timeline development",
      ],
    },
    {
      number: "03",
      title: "Development & Implementation",
      description:
        "We build your custom solution using agile methodologies, ensuring regular updates and incorporating feedback throughout the development process.",
      features: [
        "Iterative development",
        "Quality assurance",
        "Progress reporting",
        "Collaborative reviews",
      ],
    },
    {
      number: "04",
      title: "Deployment & Integration",
      description:
        "Your solution is carefully deployed and seamlessly integrated with existing systems, ensuring minimal disruption to your ongoing operations.",
      features: [
        "System migration",
        "User training",
        "Performance testing",
        "Integration validation",
      ],
    },
    {
      number: "05",
      title: "Ongoing Support",
      description:
        "We provide continuous technical support, maintenance, and optimization to ensure your solution evolves with your business needs and technological advances.",
      features: [
        "24/7 technical assistance",
        "Regular updates",
        "Performance monitoring",
        "Continuous improvement",
      ],
    },
  ];

  // Setup intersection observer to detect which step is currently in view
  useEffect(() => {
    if (!sectionRef.current) return;

    // Set the first step as active by default
    setActiveStep(0);

    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -10% 0px",
      threshold: 0.15,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = stepRefs.current.findIndex(
            (ref) => ref === entry.target
          );
          if (index !== -1) {
            setActiveStep(index);

            // If we've reached the last step, update the state
            if (index === steps.length - 1) {
              setReachedLastStep(true);
            } else {
              setReachedLastStep(false);
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Observe all steps except the first one
    // First step is always visible and active by default
    stepRefs.current.forEach((ref, index) => {
      if (ref && index > 0) observer.observe(ref);
    });

    return () => {
      if (stepRefs.current) {
        stepRefs.current.forEach((ref, index) => {
          if (ref && index > 0) observer.unobserve(ref);
        });
      }
    };
  }, [steps.length]);

  // Add an effect to change the scrolling behavior when reaching the last step
  useEffect(() => {
    if (reachedLastStep && containerRef.current) {
      // Remove snap behavior when at the last step
      containerRef.current.classList.remove("snap-mandatory");
      containerRef.current.classList.remove("snap-y");
    } else if (containerRef.current) {
      // Re-add snap behavior when not at the last step
      containerRef.current.classList.add("snap-mandatory");
      containerRef.current.classList.add("snap-y");
    }
  }, [reachedLastStep]);

  // Handle manual navigation
  const navigateToStep = (idx) => {
    setActiveStep(idx);
    if (stepRefs.current[idx]) {
      stepRefs.current[idx].scrollIntoView({
        behavior: "smooth",
        block: "start", // Changed to 'start' to position at top
      });
    }
  };

  // Add a scroll indicator to show users they can continue scrolling past this section
  const ScrollIndicator = () => (
    <div
      className={`
        absolute bottom-8 left-1/2 transform -translate-x-1/2 
        flex flex-col items-center transition-opacity duration-500
        ${reachedLastStep ? "opacity-100" : "opacity-0"}
      `}
    >
      <p className="text-blue-300 mb-2">Continue scrolling</p>
      <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
        <div className="w-1.5 h-3 bg-blue-300 rounded-full animate-bounce mt-1"></div>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#001C3B] to-[#022751] text-white"
      style={{ height: "100vh", position: "relative", overflow: "hidden" }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 h-full flex flex-col phone:px-0">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How We Deliver Excellence
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our structured approach ensures high-quality solutions that
            precisely match your business requirements and exceed your
            expectations.
          </p>
        </div>

        {/* Steps Navigation Dots */}
        <div className="hidden md:flex flex-col items-center absolute left-8 lg:left-12 top-1/2 transform -translate-y-1/2 z-20">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => navigateToStep(idx)}
              className={`
                w-3 h-3 rounded-full my-3 transition-all duration-500
                ${
                  idx === activeStep
                    ? "bg-blue-400 scale-150"
                    : idx < activeStep
                    ? "bg-blue-200"
                    : "bg-gray-600 hover:bg-gray-400"
                }
              `}
              aria-label={`Go to step ${idx + 1}`}
            ></button>
          ))}
          <div className="h-24 w-px bg-gradient-to-b from-blue-400 to-transparent mt-2"></div>
        </div>

        {/* Steps Container - Note the ref for snap behavior control */}
        <div
          ref={containerRef}
          className="flex-1 overflow-y-auto snap-y snap-mandatory hide-scrollbar pt-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* First card positioned correctly */}
          <div
            ref={(el) => (stepRefs.current[0] = el)}
            className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 snap-start mb-24"
          >
            <div className="max-w-4xl w-full transform transition-all duration-700 ease-out scale-100 opacity-100">
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Step Number - UPDATED to circular style */}
                <div className="shrink-0">
                  <div className="w-20 h-20 flex items-center justify-center text-3xl font-bold rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg border-4 border-white/70">
                    {steps[0].number}
                  </div>
                </div>

                {/* Step Content */}
                <div
                  className="flex-1 bg-[#011A35]/80 backdrop-blur-sm p-8 rounded-2xl 
                  transition duration-500
                  border border-indigo-500/30
                  relative overflow-hidden
                  hover:shadow-2xl group"
                  style={{
                    boxShadow: "0 10px 30px rgba(66, 153, 225, 0.2)",
                  }}
                >
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 transform group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl -ml-24 -mb-24 transform group-hover:scale-110 transition-transform duration-700"></div>

                  {/* Glowing Border Effect */}
                  <div className="absolute inset-0 border-t-2 border-l border-r border-b-0 border-indigo-500/30 rounded-2xl pointer-events-none"></div>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                      {steps[0].title}
                    </h3>
                    <p className="text-gray-300 mb-8 text-lg">
                      {steps[0].description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {steps[0].features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-3 group/feature"
                        >
                          <div className="p-2 rounded-full bg-indigo-500/10 group-hover/feature:bg-indigo-500/20 transition-colors duration-300">
                            <CheckCircle className="w-5 h-5 text-indigo-400" />
                          </div>
                          <span className="text-gray-300 group-hover/feature:text-white transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Remaining cards */}
          {steps.slice(1).map((step, index) => (
            <div
              key={index + 1}
              ref={(el) => (stepRefs.current[index + 1] = el)}
              className="min-h-screen flex items-center justify-center px-4 snap-start mb-24"
            >
              <div
                className={`
                  max-w-4xl w-full transform transition-all duration-700 ease-out
                  ${
                    index + 1 === activeStep
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-40"
                  }
                `}
              >
                <div className="flex flex-col md:flex-row items-start gap-8">
                  {/* Step Number - UPDATED to circular style */}
                  <div className="shrink-0">
                    <div className="w-20 h-20 flex items-center justify-center text-3xl font-bold rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg border-4 border-white/70">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div
                    className={`
                      flex-1 bg-[#011A35]/80 backdrop-blur-sm p-8 rounded-2xl 
                      transition duration-500
                      border border-indigo-500/30
                      relative overflow-hidden
                      hover:shadow-2xl group
                    `}
                    style={{
                      boxShadow: "0 10px 30px rgba(66, 153, 225, 0.2)",
                    }}
                  >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 transform group-hover:scale-110 transition-transform duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl -ml-24 -mb-24 transform group-hover:scale-110 transition-transform duration-700"></div>

                    {/* Glowing Border Effect */}
                    <div className="absolute inset-0 border-t-2 border-l border-r border-b-0 border-indigo-500/30 rounded-2xl pointer-events-none"></div>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

                    <div className="relative z-10">
                      <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 mb-8 text-lg">
                        {step.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {step.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-3 group/feature"
                          >
                            <div className="p-2 rounded-full bg-indigo-500/10 group-hover/feature:bg-indigo-500/20 transition-colors duration-300">
                              <CheckCircle className="w-5 h-5 text-indigo-400" />
                            </div>
                            <span className="text-gray-300 group-hover/feature:text-white transition-colors duration-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator that appears when user reaches the last step */}
        <ScrollIndicator />
      </div>

      {/* Element to help with smooth transition to next section */}
      {reachedLastStep && (
        <div
          className="h-24 opacity-0 pointer-events-none"
          id="section-end-marker"
        ></div>
      )}
    </section>
  );
};

export default StepsSection;
