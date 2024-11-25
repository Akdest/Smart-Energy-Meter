"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What is EnergyTrack?",
    answer:
      "EnergyTrack is a comprehensive energy monitoring and optimization platform for homes and businesses.",
  },
  {
    question: "How does EnergyTrack help reduce costs?",
    answer:
      "Our real-time analytics provide insights into your energy usage, helping you identify waste and save money.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes! EnergyTrack uses industry-standard encryption to ensure your data remains safe and private.",
  },
];

export const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10">
          FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-700 rounded-lg">
              <button
                className="w-full p-4 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-base sm:text-lg lg:text-xl">{faq.question}</span>
                <span className="text-xl sm:text-2xl">{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="p-4 bg-gray-800"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
