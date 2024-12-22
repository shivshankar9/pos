// components/Header.tsx

"use client"; // <-- Mark as a Client Component

import { motion } from "framer-motion";
import React from "react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">HireTech</h1>
        <ul className="flex space-x-8">
          <li>
            <a href="#jobs" className="text-gray-800 hover:text-blue-600">
              Jobs
            </a>
          </li>
          <li>
            <a href="#events" className="text-gray-800 hover:text-blue-600">
              Events
            </a>
          </li>
          <li>
            <a href="#ai-resume" className="text-gray-800 hover:text-blue-600">
              AI Resume
            </a>
          </li>
          <li>
            <a href="#companies" className="text-gray-800 hover:text-blue-600">
              Companies
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
