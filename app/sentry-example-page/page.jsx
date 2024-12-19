"use client";

import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="bg-white shadow-md rounded-md max-w-3xl mx-auto px-8 py-10 border border-gray-300">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Terms & Conditions</h1>
          <p className="text-gray-600 text-sm mt-2">
            Last updated: <span className="font-semibold">December 19, 2024</span>
          </p>
        </div>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Welcome to www.finverge.tech
          </h2>
          <p className="text-gray-600">
            By accessing or using our website and services, you agree to be bound by the following terms and conditions. Please read them carefully.
          </p>

          <div className="border-t border-gray-300 mt-8"></div>

          <h2 className="text-xl font-semibold text-gray-700 mt-8">Acceptance of Terms</h2>
          <p className="text-gray-600">
            By using our services, you agree to these terms. If you do not agree to these terms, do not use our services.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mt-8">Service Description</h2>
          <p className="text-gray-600">
            Finverge Tech provides innovative software solutions, including apps like <span className="font-semibold">Opportune</span>, and other services to enhance business and individual productivity. Detailed descriptions of the services provided will be available on the respective service pages on our website.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mt-8">User Responsibilities</h2>
          <p className="text-gray-600">
            You are responsible for your use of the website and services, including ensuring the legality of any content you submit or activities you engage in.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mt-8">Intellectual Property</h2>
          <p className="text-gray-600">
            All content on this website, including text, graphics, logos, and software, is the exclusive property of Finverge Tech or its licensors and is protected by intellectual property laws.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mt-8">Limitation of Liability</h2>
          <p className="text-gray-600">
            Finverge Tech will not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use of our services. In no event shall our liability exceed the amount paid for the service that caused the damage.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mt-8">Governing Law</h2>
          <p className="text-gray-600">
            These terms are governed by the laws of the jurisdiction in which Finverge Tech is established, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mt-8">Refund Policy</h2>
          <div className="pl-4 border-l-4 border-gray-300">
            <h3 className="text-lg font-semibold text-gray-700 mt-4">Eligibility for Refund</h3>
            <p className="text-gray-600">
              Customers who request a refund within 24 hours of the transaction are eligible for a full refund.
            </p>

            <h3 className="text-lg font-semibold text-gray-700 mt-4">Requesting a Refund</h3>
            <p className="text-gray-600">
              To request a refund, please contact our customer service team at{" "}
              <a
                href="mailto:info@finverge.tech"
                className="text-blue-600 underline hover:text-blue-800"
              >
                info@finverge.tech
              </a>{" "}
              with your order number and the reason for the refund.
            </p>

            <h3 className="text-lg font-semibold text-gray-700 mt-4">Processing Refunds</h3>
            <p className="text-gray-600">
              Eligible refunds will be processed within a reasonable timeframe, typically within 5-10 business days.
            </p>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mt-8">Privacy Policy</h2>
          <p className="text-gray-600">
            We collect personal information that you provide to us directly, such as when you register for an account, use our services, or contact customer support.
          </p>

          <div className="border-t border-gray-300 mt-8"></div>

          <p className="text-gray-500 text-sm mt-6 text-center">
            If you have any questions, please contact us at{" "}
            <a
              href="mailto:info@finverge.tech"
              className="text-blue-600 underline hover:text-blue-800"
            >
              info@finverge.tech
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
