"use client";
import { motion } from 'framer-motion';

export const HowItWorksSection = () => {
    const steps = [
      {
        title: "Install Sensors",
        description: "Set up our smart sensors for seamless data tracking.",
      },
      {
        title: "Monitor Usage",
        description: "View real-time energy usage on your dashboard.",
      },
      {
        title: "Save Money",
        description: "Optimize your consumption and reduce costs.",
      },
    ];
  
    return (
      <div className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
};
