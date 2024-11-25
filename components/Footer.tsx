"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Blog", "Press"],
    },
    {
      title: "Support",
      links: ["Help Center", "Contact Us", "FAQs", "Terms of Service"],
    },
    {
      title: "Resources",
      links: ["Energy Insights", "Case Studies", "Developers", "API Documentation"],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Social Links */}
          <div className="w-full md:w-1/3 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">EnergyTrack</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-4">
              Empowering smarter energy choices for a sustainable future.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-green-500">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-500">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-pink-500">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-700">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-600">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <motion.div
          className="my-6 h-0.5 bg-gray-800"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-center items-center text-gray-400 text-sm sm:text-base space-y-2 md:space-y-0">
          <p>&copy; 2024 EnergyTrack. All rights reserved.</p>
          <p>
            Designed by <a href="#" className="text-green-400 hover:underline">YourTeam</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
