"use client";

import React, { useState } from "react";
import Link from "next/link";

// Mock email sending function (you should replace it with an actual implementation)
const sendEmail = async (formData: any) => {
  try {
    console.log("Sending email with data:", formData);
    alert("Form submitted successfully! We will get back to you soon.");
  } catch (error) {
    console.error("Error sending email:", error);
    alert("There was an error submitting the form.");
  }
};

const CareersPage: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const jobs = [
    { title: "Software Engineer", location: "Remote", id: 1 },
    { title: "UI/UX Designer", location: "Bangalore, India", id: 2 },
    { title: "Product Manager", location: "Bangalore, India", id: 3 },
  ];

  const handleViewDetails = (job: any) => {
    setSelectedJob(job);
    setShowForm(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmail(formData);
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } transition-all duration-500`}
    >
      {/* Header */}
      <header className="py-10 text-center">
        <h1
          className={`text-4xl font-extrabold tracking-tight animate-fade-in ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Careers at Finverge Tech
        </h1>
        <p
          className={`mt-4 text-lg opacity-80 ${
            theme === "dark" ? "text-gray-400" : "text-gray-700"
          }`}
        >
          Explore your potential with cutting-edge opportunities.
        </p>
        <button
          onClick={toggleTheme}
          className={`mt-6 px-6 py-2 rounded-lg font-semibold ${
            theme === "dark"
              ? "bg-yellow-500 text-black hover:bg-yellow-600"
              : "bg-gray-800 text-white hover:bg-gray-900"
          } transition`}
        >
          Switch to {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Open Positions */}
        <section>
          <h2
            className={`text-3xl font-semibold mb-6 underline decoration-pink-400 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Open Positions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <div
                key={job.id}
                className={`block p-6 rounded-lg shadow-lg ${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-white hover:bg-gray-200"
                } transition-all duration-300`}
              >
                <h3
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  {job.title}
                </h3>
                <p
                  className={`mt-2 text-sm opacity-90 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {job.location}
                </p>
                <button
                  onClick={() => handleViewDetails(job)}
                  className={`mt-4 inline-block px-4 py-2 rounded-lg font-medium ${
                    theme === "dark"
                      ? "bg-yellow-400 text-black hover:bg-yellow-500"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  } transition`}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Job Application Form */}
        {showForm && selectedJob && (
          <section className="mt-12 bg-gray-200 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Apply for {selectedJob.title}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    theme === "dark"
                      ? "bg-gray-700 text-white border-gray-600 focus:ring-blue-500"
                      : "bg-white text-gray-900 border-gray-300 focus:ring-blue-500"
                  } transition-all`}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    theme === "dark"
                      ? "bg-gray-700 text-white border-gray-600 focus:ring-blue-500"
                      : "bg-white text-gray-900 border-gray-300 focus:ring-blue-500"
                  } transition-all`}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    theme === "dark"
                      ? "bg-gray-700 text-white border-gray-600 focus:ring-blue-500"
                      : "bg-white text-gray-900 border-gray-300 focus:ring-blue-500"
                  } transition-all`}
                />
              </div>

              <button
                type="submit"
                className={`px-6 py-2 rounded-lg font-semibold ${
                  theme === "dark"
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                } transition-all`}
              >
                Submit Application
              </button>
            </form>
          </section>
        )}

        {/* Why Work With Us */}
        <section className="mt-12">
          <h2
            className={`text-3xl font-semibold mb-6 underline decoration-blue-400 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Why Join Us?
          </h2>
          <p
            className={`text-lg opacity-90 leading-relaxed ${
              theme === "dark" ? "text-gray-400" : "text-gray-700"
            }`}
          >
            At Finverge Tech, innovation meets opportunity. Enjoy a dynamic work
            environment, flexible schedules, and opportunities to collaborate
            with the brightest minds in the industry. Your growth is our
            priority.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p
          className={`text-sm ${
            theme === "dark" ? "text-gray-500" : "text-gray-700"
          }`}
        >
          © {new Date().getFullYear()} Finverge Tech. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default CareersPage;
