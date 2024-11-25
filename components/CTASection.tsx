"use client";

import { motion } from "framer-motion";

export const CTASection = () => (
  <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500 text-white text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
        Ready to Start Your Energy Journey?
      </h2>
      <p className="text-base sm:text-lg lg:text-xl mb-10">
        Join thousands of users already benefiting from smarter energy
        management.
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 bg-gray-900 text-white font-bold rounded-lg shadow-lg"
        >
          Get Started
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 bg-white text-gray-900 font-bold rounded-lg shadow-lg"
        >
          Learn More
        </motion.button>
      </div>
    </div>
  </section>
);
