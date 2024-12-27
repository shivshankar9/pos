"use client"; // This tells Next.js to treat this as a Client Component
import Head from "next/head"; // Importing the Head component from Next.js

import { useState, useEffect } from "react";

const PaymentPage = () => {
  const [isPaid, setIsPaid] = useState(false);
  const originalPrice = 1999; // Original subscription price
  const discountedPrice = 999; // Discounted price

  // Dynamically load Razorpay script in the client-side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadRazorpay = () => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
      };

      loadRazorpay();
    }
  }, []);

  const handlePayment = () => {
    if (typeof window !== "undefined" && (window as any).Razorpay) {
      const options = {
        key: "rzp_live_hfbBkmLnUZrWdp", //rzp_test_6GkVsJKB0s9HHx rzp_live_hfbBkmLnUZrWdpYour Razorpay API key

        amount: discountedPrice * 100, // Convert amount to paise
        currency: "INR",
        name: "Finverge.Tech",
        description: "Subscription Payment",
        image: "/finvergelogo.png", // Your logo
        handler: function (response: any) {
          setIsPaid(true); // Set the payment status to true
          alert("Payment Successful: " + response.razorpay_payment_id);
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "1234567890",
        },
        notes: {
          address: "Customer Address",
        },
        theme: {
          color: "#4CAF50", // Green color for trust and urgency
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } else {
      alert("Payment gateway is not loaded. Please try again later.");
    }
  };

  if (isPaid) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-500 text-white">
        <h1 className="text-4xl font-extrabold mb-4">Congratulations! 🎉</h1>
        <p className="text-lg mb-6">
          Thank you for subscribing to Finverge.Tech. You’ll receive an email
          shortly with your login credentials.
        </p>
        <img src="/1success.svg" alt="Success" className="w-48 h-48 mb-8" />
        <button
          onClick={() => (window.location.href = "/app")}
          className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
      
      <h1 className="text-4xl font-bold mb-4">Exclusive Subscription Offer</h1>
      <p className="text-lg mb-6">
        Unlock premium features at an unbeatable price!
      </p>
      
      <div className="bg-white text-gray-800 p-6 rounded-md shadow-lg w-96 text-center">
        <div className="mb-4">
          <span className="inline-block bg-red-500 text-white text-sm px-3 py-1 rounded-full">
            50% OFF 🔥
          </span>
        </div>
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Just ₹{discountedPrice}
        </h2>
        <p className="text-sm text-gray-500 line-through mb-4">
          Worth ₹{originalPrice}
        </p>
        <p className="text-lg font-medium text-green-600 mb-4">
          Save ₹{originalPrice - discountedPrice} today!
        </p>
        <p className="mb-6">
          Subscribe now and enjoy exclusive access to premium features.
        </p>
        <button
          onClick={handlePayment}
          className="relative group overflow-hidden bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-10 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          <span className="relative z-10 text-lg font-semibold">
            Pay ₹{discountedPrice}
          </span>
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
