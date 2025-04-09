"use client";
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Calendar, Users, Award, Briefcase } from "lucide-react";

const Stats = () => {
  const stats = [
    { icon: <Calendar className="w-10 h-10 textindigo-500" />, value: 12, suffix: "+", label: "Years of Experience" },
    { icon: <Users className="w-10 h-10 textindigo-500" />, value: 150, suffix: "+", label: "Team Members" },
    { icon: <Award className="w-10 h-10 textindigo-500" />, value: 25, suffix: "+", label: "Industry Awards" },
    { icon: <Briefcase className="w-10 h-10 textindigo-500" />, value: 500, suffix: "+", label: "Projects Completed" },
  ];

  return (
    <div className="w-full bg-[#000f23] py-12 px-6 flex flex-col items-center justify-center gap-10">
      <h1 className="text-white text-3xl font-bold phone:text-lg xs:text-lg sm:text-lg">Our Achievements</h1>
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-4">
        {stats.map((stat, index) => {
          const [ref, inView] = useInView({ triggerOnce: true });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
              transition={{ duration: 1 }}
              className="w-full sm:w-1/4 flex items-center justify-center p-6 rounded-lg shadow-lg"
            >
              <div className="flex flex-col items-center gap-3 text-white">
                {stat.icon}
                <h1 className="text-4xl font-extrabold phone:text-2xl xs:text-2xl sm:text-2xl">
                  {inView && <CountUp start={0} end={stat.value} duration={2.5} suffix={stat.suffix} />}
                </h1>
                <h1 className="font-bold phone:text-sm xs:text-sm sm:text-sm text-center">{stat.label}</h1>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
