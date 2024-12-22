// components/Hero.tsx
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[500px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-5xl font-bold mb-4">Find Your Dream Job Today</h1>
        <p className="text-xl mb-6">
          Explore top tech opportunities and elevate your career.
        </p>
        <button className="bg-blue-600 py-2 px-8 rounded-lg hover:bg-blue-700 transition-all">
          Get Started
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
