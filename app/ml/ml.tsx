"use client";

import React, { useEffect, useState } from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { IoRocketOutline } from "react-icons/io5";
import { useUser, SignIn, SignOutButton, ClerkProvider } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Head from "next/head";

// Define the type for geolocation state
interface Geolocation {
  lat: number;
  lon: number;
}

// Dummy email subscription data
const subscribedEmails = ["shivshankarkumar281@gmail.com"];
const nonSubscribedEmails = ["shivshankar4287@gmail.com"];

// Function to check subscription
const checkSubscription = (email: string) => {
  return subscribedEmails.includes(email);
};

const OpportunePage = () => {
  const { isSignedIn, user } = useUser();
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [geolocation, setGeolocation] = useState<Geolocation | null>(null);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [jobRequest, setJobRequest] = useState({
    title: "",
    description: "",
    location: "",
  });
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Set the current slide for banners if applicable
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setFilteredJobs([]);
  }, [searchTerm]);

  useEffect(() => {
    const checkSignInStatusAndSubscription = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait for 3 seconds
      if (isSignedIn && user && user.primaryEmailAddress?.emailAddress) {
        const email = user.primaryEmailAddress.emailAddress;
        const subscribed = checkSubscription(email);
        setIsSubscribed(subscribed);
        setShowSignInModal(false);
      } else if (!isSignedIn) {
        setShowSignInModal(true); // Show sign-in modal if not signed in
      }
    };

    checkSignInStatusAndSubscription();
  }, [isSignedIn, user, router]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const fetchGeolocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setGeolocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error fetching geolocation:", error);
        alert("Unable to fetch your location.");
      }
    );
  };

  const handleRequestSubmit = () => {
    console.log("Job Request Submitted:", jobRequest);
    alert("Your job request has been submitted!");
    setShowRequestModal(false);
    setJobRequest({ title: "", description: "", location: "" });
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ClerkProvider>
      <Head>
        <title>Opportune - Find Jobs, Events, and Build Your Resume</title>
        <meta
          name="description"
          content="Opportune is your go-to platform for finding job listings, attending tech events, and building your resume with AI tools."
        />
        <meta
          name="keywords"
          content="jobs, hiring, resume builder, tech events, job fairs, walk-in interviews, finvergetech"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://finverge.tech/opportune" />
      </Head>
      <div
        className={`min-h-screen ${
          darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
        } p-6 ${showSignInModal ? "backdrop-blur" : ""}`}
      >
        {showSignInModal && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75 z-50">
            <SignIn routing="hash" signUpUrl="/sign-up" appearance={{}} />
          </div>
        )}

        <header
          className={`flex flex-col md:flex-row justify-between items-center px-4 py-2 rounded-b-lg shadow-md ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="flex items-center space-x-4">
            <h1
              className={`text-3xl font-bold ${
                darkMode ? "text-white" : "text-black"
              } transform transition-all duration-300 hover:scale-105`}
            >
              Opportune
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
            <button
              onClick={() => scrollToSection("job-listings")}
              className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 mb-2 md:mb-0 transition-all duration-300"
            >
              Jobs
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 mb-2 md:mb-0 transition-all duration-300"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("ai-resume-builder")}
              className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 mb-2 md:mb-0 transition-all duration-300"
            >
              AI Resume Builder
            </button>
            <button
              onClick={() => scrollToSection("request-job")}
              className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 mb-2 md:mb-0 transition-all duration-300"
            >
              Request a Job
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-xl text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transform transition-all duration-300 ease-in-out mt-4 md:mt-0"
              title="Toggle Dark Mode"
            >
              {darkMode ? (
                <HiOutlineSun className="text-yellow-500" />
              ) : (
                <HiOutlineMoon className="text-blue-500" />
              )}
            </button>
            {isSignedIn && (
              <div className="mt-4 md:mt-0 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300">
                <SignOutButton>Sign Out</SignOutButton>
              </div>
            )}
          </div>
        </header>

        {!isSignedIn || !isSubscribed ? (
          <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white py-12 px-6 rounded-lg shadow-lg text-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Unlock the Future of Your Career
              </h2>
              <p className="text-lg mb-6">
                Join thousands of professionals who have elevated their career
                by accessing premium job listings, AI resume building, and
                exclusive events.
              </p>
              <button
                onClick={() => router.push("/payment")}
                className="px-8 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transform transition-all duration-300"
              >
                Subscribe Now
              </button>
              <div className="mt-6 text-gray-300 text-sm">
                <p>Get access to:</p>
                <ul className="list-inside list-disc">
                  <li>Exclusive Job Opportunities</li>
                  <li>AI-Powered Resume Builder</li>
                  <li>Networking at Premium Events</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center mt-12">
            <h2 className="text-2xl font-semibold">Welcome to Opportune!</h2>
            <p className="text-gray-500 mt-4">
              You're now subscribed. Explore available job listings, events, and
              more.
            </p>
          </div>
        )}

        <footer className="mt-12 text-center">
          <p>
            &copy; {new Date().getFullYear()} Opportune - All Rights Reserved
          </p>
        </footer>
      </div>
    </ClerkProvider>
  );
};

export default OpportunePage;
