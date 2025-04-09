'use client';
import coder from "../../../public/images/coder.png"
import Image from 'next/image';
import React from 'react';
import Link from "next/link";
import { ArrowUpRight } from 'lucide-react';

const OurStorySection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 phone:px-0">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block rounded-full bg-indigo-900 px-4 py-2 mb-4">
            <span className="text-indigo-400 font-semibold">Why Choose Us?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Empowering Your Business with Cutting-Edge Technology</h2>
          <p className="text-lg text-gray-300">
            We provide end-to-end software solutions tailored to enhance efficiency, drive growth, and unlock new business opportunities.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center p-4">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-white">How We Scale Your Business</h3>
            <p className="text-gray-300 mb-6">
              Our team specializes in building scalable, high-performance digital solutions that streamline operations, improve customer engagement, and boost revenue.
            </p>
            <p className="text-gray-300 mb-6">
              From custom software development to AI-driven automation, cloud solutions, and enterprise-grade applications, we provide innovative technologies that keep you ahead of the competition.
            </p>
            <p className="text-gray-300 mb-6">
              Whether you're a startup looking for a strong digital foundation or an established business aiming for digital transformation, our expertise ensures you get the right solutions tailored to your needs.
            </p>
            <Link href="/contact">
      <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all">
        Get in Touch
        <ArrowUpRight className="ml-2 w-4 h-4" />
      </button>
    </Link>

          </div>
          <div className="order-1 md:order-2 relative h-96 rounded-2xl overflow-hidden">
            <Image
              src={coder}
              alt="Business Growth"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;