"use client";

import { motion } from "framer-motion";

export const CTASection = () => (
  <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500 text-white text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-6">
        Ready to Start Your Energy Journey?
      </h2>
      <p className="text-lg mb-10">
        Join thousands of users already benefiting from smarter energy
        management.
      </p>
      <div className="flex justify-center space-x-4">
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
