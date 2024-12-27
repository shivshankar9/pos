"use client"; // Ensures this is a Client Component
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const FullPageDesign = () => {
  const [isDiscountActive, setIsDiscountActive] = useState(true);
  const [timer, setTimer] = useState(600); // 10 minutes in seconds
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Countdown timer for discount
  useEffect(() => {
    if (isDiscountActive && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (timer <= 0) {
      setIsDiscountActive(false); // Disable discount after time runs out
    }
  }, [timer, isDiscountActive]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleSubscription = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 5000); // Hide after 5 seconds
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header with Navigation */}
      <header className="w-full py-6 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Exclusive Features</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#hero" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-gray-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-gray-300">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-gray-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#subscribe" className="hover:text-gray-300">
                  Subscribe
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white min-h-screen py-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            Unlock Your Potential with Premium Tools
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have elevated their careers
            using our exclusive job listings, AI-powered resume builder, and
            career coaching.
          </p>
          <motion.button
            className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            onClick={handleSubscription}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </section>

      {/* Countdown Offer Section */}
      {isDiscountActive && (
        <section className="py-10 bg-yellow-100 text-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-red-600 text-white p-6 rounded-lg mb-4">
              <p className="font-bold text-2xl">🔥 Limited Time Offer: ₹999</p>
              <p className="line-through text-gray-200 text-lg">
                Original Price: ₹1999
              </p>
              <p className="mt-2 text-xl">
                Hurry, offer ends in{" "}
                <span className="font-bold text-3xl text-red-600">
                  {formatTime(timer)}
                </span>{" "}
                minutes!
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section id="features" className="py-20 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3
            className="text-4xl font-bold text-center mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Exclusive Features to Boost Your Career
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="text-xl font-bold mb-2">Premium Job Listings</h4>
              <p>
                Access exclusive job listings only available to premium members.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="text-xl font-bold mb-2">AI Resume Builder</h4>
              <p>
                Create a professional, job-winning resume with our AI-powered
                tool.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="text-xl font-bold mb-2">Career Coaching</h4>
              <p>
                Get personalized coaching to take your career to the next level.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <FaStar className="text-yellow-500 text-4xl mx-auto" />
            <h3 className="text-3xl font-bold mt-4">
              What Our Users Are Saying
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-80"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-gray-800">
                "The resume builder was incredibly easy to use, and it helped me
                land my dream job in just weeks!" – <strong>Ravi K.</strong>
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-80"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-gray-800">
                "I was able to access premium job listings that weren’t
                available anywhere else. Highly recommend!" –{" "}
                <strong>Anita S.</strong>
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-80"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-gray-800">
                "The career coaching was invaluable. The insights I received
                have changed my approach to interviews." –{" "}
                <strong>Rajesh P.</strong>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3
            className="text-4xl font-bold mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Choose Your Plan
          </motion.h3>
          <div className="flex justify-center gap-12">
            <motion.div
              className="bg-gray-100 p-8 rounded-lg shadow-lg w-96"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="text-2xl font-bold mb-2">Basic Plan</h4>
              <p className="text-xl font-semibold">₹999</p>
              <ul className="text-left mt-4">
                <li>Access to Premium Job Listings</li>
                <li>AI Resume Builder</li>
                <li>Basic Career Coaching</li>
              </ul>
              <motion.button
                className="mt-6 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-600"
                onClick={handleSubscription}
              >
                Subscribe Now
              </motion.button>
            </motion.div>
            <motion.div
              className="bg-gray-100 p-8 rounded-lg shadow-lg w-96"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="text-2xl font-bold mb-2">Pro Plan</h4>
              <p className="text-xl font-semibold">₹1999</p>
              <ul className="text-left mt-4">
                <li>Everything in Basic Plan</li>
                <li>Exclusive Job Listings</li>
                <li>Premium Career Coaching</li>
              </ul>
              <motion.button
                className="mt-6 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-600"
                onClick={handleSubscription}
              >
                Subscribe Now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subscription Confirmation */}
      {showSuccessMessage && (
        <div className="fixed bottom-0 left-0 right-0 bg-green-500 text-white py-4 text-center">
          <p className="font-bold">Congratulations! You are now subscribed!</p>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full py-4 bg-blue-900 text-center text-white">
        <p>&copy; 2024 Exclusive Features. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FullPageDesign;
