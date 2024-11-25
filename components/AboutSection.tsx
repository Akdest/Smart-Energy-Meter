"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const AboutSection = () => (
  <section className="py-20 bg-gray-900 text-white relative">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-green-400">EnergyTrack</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6">
            EnergyTrack is the leading solution for real-time energy monitoring
            and cost optimization. Our innovative tools empower users to track
            and manage their energy consumption while contributing to a
            sustainable future.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-400">
            Our mission is to make renewable energy and energy efficiency
            accessible and beneficial for everyone, from homeowners to large
            enterprises.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-start"
        >
          <Image
            src="/images/about-image.jpg"
            alt="About EnergyTrack"
            width={600}
            height={400}
            className="rounded-lg shadow-xl sm:w-full md:w-[500px] lg:w-[600px]"
          />
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="mt-20 space-y-12">
        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: item * 0.2, duration: 0.5 }}
            className="flex items-start"
          >
            <div className="h-10 w-10 bg-green-500 rounded-full flex-shrink-0"></div>
            <div className="ml-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                Milestone {item}: Innovation and Growth
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-400">
                At this stage, EnergyTrack expanded its offerings to include
                smarter energy analytics and cloud storage solutions.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
