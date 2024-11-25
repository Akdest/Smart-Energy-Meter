"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const HeroSection = () => (
  <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white overflow-hidden">
    {/* Parallax Background */}
    <div className="absolute inset-0">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero-bg.jpg')] bg-cover bg-fixed bg-center opacity-40"
      />
    </div>

    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 pt-32">
      {/* Left Content */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left max-w-lg"
      >
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          Empowering Smarter Living with{" "}
          <span className="bg-gradient-to-r from-green-400 to-yellow-500 text-transparent bg-clip-text">
            Renewable Energy
          </span>
        </h1>
        <p className="text-lg mb-8 text-gray-400">
          Discover innovative solutions for energy management and sustainability. Join us in transforming the way we power our world.
        </p>
        <button className="bg-green-500 hover:bg-green-600 transition text-white py-3 px-6 rounded-lg font-medium shadow-lg">
          Get Started
        </button>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-10 md:mt-0"
      >
        <Image
          src="/images/hero-image.png"
          alt="Hero"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  </div>
);
