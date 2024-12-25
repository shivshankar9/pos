"use client"; // Ensures this is a Client Component
import { useState, useEffect } from "react";

const OpportunePage = () => {
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [isDiscountActive, setIsDiscountActive] = useState(true);
  const [timer, setTimer] = useState(600); // 10 minutes in seconds

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

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleLogin = () => {
    setShowLoginModal(false);
    setShowSubscriptionModal(true); // Open Subscription Modal after login
  };

  const handleSubscription = () => {
    alert("Subscribed successfully!");
    setShowSubscriptionModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-md">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-6 text-purple-700 text-center">
              Login to Access Opportunities
            </h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 mb-4 border rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 mb-6 border rounded-lg"
            />
            <div className="flex justify-center">
              <button
                onClick={handleLogin}
                className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Login
              </button>
            </div>
            <div className="mt-4">
              <button
                onClick={() => setShowSubscriptionModal(true)} // Opens the subscription modal
                className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
              >
                Get Credentials
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Subscription Modal */}
      {showSubscriptionModal && (
        <div className=" inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-md">
          <div className="bg-white p-8 rounded-lg shadow-lg w-4/5 max-w-2xl">
            <h2 className="text-3xl font-bold mb-4 text-purple-700 text-center">
              Unlock Exclusive Features!
            </h2>
            <p className="mb-4 text-gray-600 text-center">
              Subscribe now to gain access to premium job listings, AI-driven
              resume builder, and more. Join thousands of satisfied users!
            </p>
            <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6">
              <h3 className="text-lg font-semibold mb-2 text-purple-700">
                Why Subscribe?
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Access to premium and hidden job listings.</li>
                <li>AI-powered resume optimization tools.</li>
                <li>Exclusive access to nearby job fairs and events.</li>
                <li>Request job postings according to your preferences.</li>
              </ul>
            </div>

            {/* Testimonials Section */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 text-purple-700">
                What Our Users Say
              </h3>
              <div className="bg-gray-100 p-4 rounded-lg shadow-lg space-y-4">
                <blockquote className="text-gray-600 italic">
                  &quot;This platform helped me land my dream job in just a
                  week! The premium features are worth every penny.&quot;
                  <span className="block text-right font-bold text-gray-800">
                    - Sameer.M
                  </span>
                </blockquote>
                <blockquote className="text-gray-600 italic">
                  &quot;The AI resume builder is a game-changer. My resume never
                  looked better, and I got more callbacks than ever
                  before!&quot;
                  <span className="block text-right font-bold text-gray-800">
                    - Sarah P.
                  </span>
                </blockquote>
                <blockquote className="text-gray-600 italic">
                  &quot;I appreciate the personalized tips and job
                  recommendations. Subscribing was the best decision I&apos;ve
                  made!&quot;
                  <span className="block text-right font-bold text-gray-800">
                    - Ravi K.
                  </span>
                </blockquote>
              </div>
            </div>

            {/* Limited Time Offer */}
            {isDiscountActive && (
              <div className="bg-yellow-100 p-4 rounded-lg text-yellow-800 mb-6 text-center">
                <p className="font-bold text-xl">
                  Limited Time Offer: Subscribe for ₹999!
                </p>
                <p className="line-through text-gray-600">
                  Original Price: ₹1999
                </p>
                <p className="mt-2">
                  Hurry, offer ends in{" "}
                  <span className="font-bold text-red-600 text-2xl">
                    {formatTime(timer)}
                  </span>{" "}
                  minutes!
                </p>
              </div>
            )}

            <div className="flex justify-between">
              <button
                className="w-full align-middle bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg mb-4 hover:bg-green-600"
                onClick={handleSubscription}
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpportunePage;
