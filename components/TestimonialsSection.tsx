"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    position: "Homeowner",
    feedback:
      "EnergyTrack has completely transformed how I manage my energy bills. Highly recommended!",
    image: "/images/testimonial1.jpg",
  },
  {
    name: "Jane Smith",
    position: "Business Owner",
    feedback:
      "I saved 30% on energy costs in the first month thanks to their real-time insights!",
    image: "/images/testimonial2.jpg",
  },
  {
    name: "Michael Brown",
    position: "Engineer",
    feedback:
      "The analytics tools are incredibly powerful. I can track everything in one place.",
    image: "/images/testimonial3.jpg",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () =>
    setCurrentIndex((currentIndex + 1) % testimonials.length);

  const prevTestimonial = () =>
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10">What Our Users Say</h2>
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-gray-900 rounded-lg shadow-2xl max-w-xl mx-auto"
          >
            <div className="flex items-center space-x-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="h-16 w-16 rounded-full shadow-md"
              />
              <div>
                <h3 className="text-lg font-bold">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-sm text-gray-400">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>
            <p className="mt-6 text-gray-300">
              "{testimonials[currentIndex].feedback}"
            </p>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              className="p-2 bg-green-500 rounded-full shadow-md"
              onClick={prevTestimonial}
            >
              &larr;
            </button>
            <button
              className="p-2 bg-green-500 rounded-full shadow-md"
              onClick={nextTestimonial}
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
