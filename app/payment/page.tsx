"use client"; // This tells Next.js to treat this as a Client Component

import { useEffect } from "react";

const PaymentPage = () => {
  const amount = 999; // Subscription amount

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
        key: "rzp_test_6GkVsJKB0s9HHx", // Your Razorpay API key
        amount: amount * 100, // Convert amount to paise
        currency: "INR",
        name: "Finverge.Tech",
        description: "Subscription Payment",
        image: "/your-logo.png", // Optional: Add your logo
        handler: function (response: any) {
          alert("Payment Successful: " + response.razorpay_payment_id);
          // Handle success response here (e.g., save to DB)
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
          color: "#F37254", // Customize button color
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } else {
      alert("Payment gateway is not loaded. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold my-8">Subscribe for ₹999</h1>
      <p className="text-xl text-gray-700 mb-6">You are about to pay ₹999</p>

      <div className="bg-white p-6 rounded-md shadow-md w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Subscription Details</h2>
        <p className="mb-4">You will be subscribed for ₹999.</p>

        {/* Cool Razorpay Payment Button */}
        <button
          onClick={handlePayment}
          className="relative group overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 px-10 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          <span className="relative z-10 text-lg font-semibold">Pay ₹999</span>
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
