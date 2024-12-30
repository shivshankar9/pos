"use client";

import React, { useEffect, useState } from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { IoRocketOutline } from "react-icons/io5";
import { useUser, SignIn, SignOutButton, ClerkProvider } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  FaUser,
  FaSearch,
  FaRegPaperPlane,
  FaHandshake,
  FaRegThumbsUp,
} from "react-icons/fa";
import { GiNetworkBars, GiLightBulb } from "react-icons/gi";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { supabase } from "../utils/supabaseClient";

// Define the type for geolocation state
interface Geolocation {
  lat: number;
  lon: number;
}

// Define the type for a job listing
interface JobListing {
  company: string;
  role: string;
  location: string;
  link: string;
}

// Define the type for an event
interface Event {
  name: string;
  date: string;
  location: string;
  description: string;
  link: string;
}

const bannerImages = [
  { src: "/banner1.png", alt: "Ad 1: Join Tech Job Fair", link: "#" },
  {
    src: "/banner2.png",
    alt: "Ad 2: Upgrade Your Skills with AI Courses",
    link: "#",
  },
  { src: "/banner3.png", alt: "Ad 3: Find Your Dream Job Now", link: "#" },
];

const OpportunePage = () => {
  const { isSignedIn, user } = useUser();
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState<JobListing[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [geolocation, setGeolocation] = useState<Geolocation | null>(null);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [jobRequest, setJobRequest] = useState({
    title: "",
    description: "",
    location: "",
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      const { data: jobData, error: jobError } = await supabase
        .from("job_listings")
        .select("*");

      if (jobError) {
        console.error("Error fetching job listings:", jobError);
      } else {
        setFilteredJobs(jobData);
      }
    };

    const fetchEvents = async () => {
      const { data: eventData, error: eventError } = await supabase
        .from("events")
        .select("*");

      if (eventError) {
        console.error("Error fetching events:", eventError);
      } else {
        setEvents(eventData);
      }
    };

    fetchJobs();
    fetchEvents();
  }, []);

  useEffect(() => {
    setFilteredJobs((prevJobs) =>
      prevJobs.filter((job) =>
        `${job.company} ${job.role} ${job.location}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  useEffect(() => {
    const checkSignInStatusAndSubscription = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 5 seconds

      if (isSignedIn && user && user.primaryEmailAddress?.emailAddress) {
        const email = user.primaryEmailAddress.emailAddress;

        // Fetch user from Supabase
        const { data: userData, error: userError } = await supabase
          .from("users")
          .select("id")
          .eq("email", email)
          .single();

        if (userError) {
          console.error("Error fetching user:", userError);
          return;
        }

        // Fetch subscription status
        const { data: subscriptionData, error: subscriptionError } =
          await supabase
            .from("subscriptions")
            .select("is_subscribed")
            .eq("user_id", userData.id)
            .single();

        if (subscriptionError) {
          console.error(
            "Error fetching subscription status:",
            subscriptionError
          );
        } else {
          setIsSubscribed(subscriptionData.is_subscribed);
          setShowSignInModal(false);
        }
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

  const handleSubscribe = async () => {
    const response = await fetch("/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 999 }),
    });

    const order = await response.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "Opportune",
      description: "Subscription",
      order_id: order.id,
      handler: function (response) {
        alert(`Payment successful: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: user?.fullName || "",
        email: user?.primaryEmailAddress?.emailAddress || "",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
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
          content="jobs, hiring, resume builder, tech events, job fairs, walk-in interviews, finvergetech, "
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

        {isSignedIn && isSubscribed ? (
          <>
            <section className="mt-6">
              <div className="relative w-full h-48 overflow-hidden rounded-lg shadow-lg">
                {bannerImages.map((banner, index) => (
                  <a
                    href={banner.link}
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={banner.src}
                      alt={banner.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </a>
                ))}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {bannerImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full ${
                        currentSlide === index ? "bg-white" : "bg-gray-500"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-6">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex items-center w-full md:w-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                  <FiSearch className="mx-3 text-gray-500" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search jobs by company, role, or location"
                    className="w-full py-3 px-2 text-gray-800 dark:text-gray-100 focus:outline-none bg-transparent"
                  />
                </div>
                <button
                  onClick={fetchGeolocation}
                  className="flex items-center px-4 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transform hover:scale-105"
                >
                  <FiMapPin className="mr-2" /> Nearby Events
                </button>
              </div>
              {geolocation && (
                <p className="mt-2 text-sm text-gray-600">
                  Your location: Latitude {geolocation.lat}, Longitude{" "}
                  {geolocation.lon}
                </p>
              )}
            </section>

            <section className="mt-8" id="job-listings">
              <h2 className="text-2xl font-semibold">Available Jobs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {filteredJobs.map((job, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-lg shadow ${
                      darkMode ? "bg-gray-800" : "bg-white"
                    } transform hover:scale-105 transition-transform duration-300`}
                  >
                    <h3 className="text-xl font-bold">{job.company}</h3>
                    <p className="text-gray-500 dark:text-gray-300">
                      {job.role}
                    </p>
                    <p className="text-sm">{job.location}</p>
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block px-5 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 hover:from-green-500 hover:to-green-600 transition-all"
                    >
                      Apply Now
                    </a>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12" id="events">
              <h2 className="text-2xl font-semibold">Upcoming Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-lg shadow-lg ${
                      darkMode
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-800"
                    } transform hover:scale-105 hover:shadow-xl transition-all duration-300`}
                  >
                    <h3 className="text-xl font-bold">{event.name}</h3>
                    <p className="text-sm-bold text-gray-600 dark:text-gray-300 mt-2">
                      {event.description}
                    </p>
                    <p className="text-sm mt-4 text-gray-500 dark:text-gray-400">
                      {event.date} - {event.location}
                    </p>
                    <div className="mt-4">
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-5 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 hover:from-green-500 hover:to-green-600 transition-all"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 text-center" id="ai-resume-builder">
              <h2 className="text-2xl font-semibold">AI Resume Builder</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-300">
                Use our AI-powered tool to create a professional resume in
                minutes.
              </p>
              <button
                className="mt-4 py-3 px-6 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transform hover:scale-110"
                onClick={() => alert("AI Resume Builder Coming Soon!")}
              >
                Build Resume
              </button>
            </section>

            <section className="mt-12 text-center" id="request-job">
              <p className="mt-2 text-gray-500 dark:text-gray-300">
                Can&apos;t find the perfect job? Submit a request for a custom
                job!
              </p>
              <button
                onClick={() => setShowRequestModal(true)}
                className="mt-4 py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-600 text-grey rounded-lg shadow-lg transform hover:scale-110"
              >
                <IoRocketOutline className="inline-block mr-2 text-2xl" />{" "}
                Request a Job
              </button>
            </section>

            {showRequestModal && (
              <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Request a Job</h3>
                  <input
                    type="text"
                    placeholder="Job Title"
                    value={jobRequest.title}
                    onChange={(e) =>
                      setJobRequest({ ...jobRequest, title: e.target.value })
                    }
                    className="w-full p-3 mb-3 border rounded"
                  />
                  <textarea
                    placeholder="Job Description"
                    value={jobRequest.description}
                    onChange={(e) =>
                      setJobRequest({
                        ...jobRequest,
                        description: e.target.value,
                      })
                    }
                    className="w-full p-3 mb-3 border rounded"
                  ></textarea>
                  <input
                    type="text"
                    placeholder="Preferred Location"
                    value={jobRequest.location}
                    onChange={(e) =>
                      setJobRequest({ ...jobRequest, location: e.target.value })
                    }
                    className="w-full p-3 mb-3 border rounded"
                  />
                  <div className="flex justify-end gap-4">
                    <button
                      onClick={() => setShowRequestModal(false)}
                      className="px-4 py-2 bg-gray-400 text-white rounded"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleRequestSubmit}
                      className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-100 min-h-screen p-2 md:p-8">
            <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Hero Section */}
              <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 md:p-12 text-center">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  Unlock Your Full Potential
                </h1>
                <p className="mt-4 md:mt-6 text-md md:text-lg">
                  Seamlessly connect to opportunities and accelerate your career
                  with our exclusive tools and resources.
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 md:mt-6 px-6 md:px-10 py-2 md:py-4 bg-yellow-400 text-blue-900 font-semibold text-md md:text-lg rounded-full shadow-lg hover:shadow-xl transition duration-300"
                >
                  Subscribe Now
                </motion.button>
                {/* <img
                  src="/images/ui-hero-image.svg"
                  alt="Hero Visual"
                  className="absolute right-4 md:right-10 top-4 md:top-10 w-24 md:w-48 opacity-80"
                /> */}
                {/* <img
                  src="/tools.svg"
                  alt="Tools Visual"
                  className="absolute left-4 md:left-10 bottom-4 md:bottom-10 w-24 md:w-48 opacity-80"
                /> */}
              </div>

              {/* How It Works Section */}
              {/* How It Works Section */}
              <div className="p-6 md:p-12 bg-gradient-to-r from-gray-50 to-white">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-10 text-gray-900">
                  How It Works
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {[
                    {
                      title: "Sign Up",
                      description:
                        "Create your account and fill in your profile details.",
                      icon: (
                        <FaUser className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-4 md:mb-6" />
                      ),
                    },
                    {
                      title: "Explore",
                      description:
                        "Browse through a variety of job opportunities and resources.",
                      icon: (
                        <FaSearch className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-4 md:mb-6" />
                      ),
                    },
                    {
                      title: "Apply",
                      description:
                        "Apply to positions that best match your skills and interests.",
                      icon: (
                        <FaRegPaperPlane className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-4 md:mb-6" />
                      ),
                    },
                  ].map((step, index) => (
                    <div
                      key={index}
                      className="p-6 md:p-8 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition group"
                    >
                      {step.icon}
                      <h3 className="text-lg md:text-xl font-semibold group-hover:text-indigo-600 text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mt-2 md:mt-4">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features Section */}
              <div className="p-6 md:p-12 bg-gradient-to-r from-gray-50 to-white">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-10 text-gray-900">
                  Empowering Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {[
                    {
                      title: "Smart Connections",
                      description:
                        "Get personalized job recommendations and network insights.",
                      icon: (
                        <GiNetworkBars className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-4 md:mb-6" />
                      ),
                    },
                    {
                      title: "Instant Resume Analysis",
                      description:
                        "Optimize your CV for top-tier jobs using our AI tools.",
                      icon: (
                        <GiLightBulb className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-4 md:mb-6" />
                      ),
                    },
                    {
                      title: "Verified Opportunities",
                      description:
                        "Access exclusive roles, guaranteed to be authentic.",
                      icon: (
                        <HiOutlineBadgeCheck className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-4 md:mb-6" />
                      ),
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="p-6 md:p-8 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition group"
                    >
                      {feature.icon}
                      <h3 className="text-lg md:text-xl font-semibold group-hover:text-indigo-600 text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mt-2 md:mt-4">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Subscription Callouts */}
              <div className="bg-gradient-to-r from-indigo-100 via-white to-gray-100 p-6 md:p-12">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-12 text-gray-900">
                  Choose Your Plan
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  <div className="p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition bg-gradient-to-r from-purple-200 via-pink-200 to-red-200">
                    {/* Title Section */}
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-900">
                      Exclusive Offer
                    </h3>

                    {/* Discount Badge */}
                    <div className="mb-4 flex justify-center">
                      <span className="text-xl md:text-2xl font-bold mb-4 text-center bg-red-500 text-white px-4 py-2 rounded-full">
                        50% OFF 🔥
                      </span>
                    </div>

                    {/* Price Section */}
                    <div className="text-center text-red-600 text-lg font-semibold mb-4">
                      <span className="line-through text-gray-500">{`₹1999`}</span>
                      <span className="ml-2 text-2xl md:text-3xl font-bold text-gray-900">{`₹999`}</span>
                    </div>

                    {/* Features List */}
                    <ul className="mt-4 md:mt-6 space-y-2 text-gray-600 text-center">
                      <li className="flex justify-center items-center">
                        <span className="mr-2 text-green-500">✔</span>
                        All Features Included
                      </li>
                      <li className="flex justify-center items-center">
                        <span className="mr-2 text-green-500">✔</span>
                        Unlimited Access
                      </li>
                      <li className="flex justify-center items-center">
                        <span className="mr-2 text-green-500">✔</span>
                        Premium Support
                      </li>
                    </ul>

                    {/* Subscribe Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 md:mt-8 w-full px-4 md:px-6 py-2 md:py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
                    >
                      Subscribe Now
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Why Trust Us Section */}
              <div className="p-6 md:p-12 bg-gradient-to-r from-gray-50 via-white to-gray-100">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-12 text-gray-900">
                  Why Trust Us?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                  {[
                    {
                      image: (
                        <FaHandshake className="w-16 h-16 text-indigo-600 mx-auto" />
                      ),
                      title: "Authentic Opportunities",
                      description:
                        "Every opportunity we share is verified for authenticity, ensuring you only get the best.",
                    },
                    {
                      image: (
                        <FaRegThumbsUp className="w-16 h-16 text-indigo-600 mx-auto" />
                      ),
                      title: "Exceptional User Experience",
                      description:
                        "Our platform is designed with user satisfaction in mind, making navigation seamless and intuitive.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row gap-4 md:gap-8 items-center"
                    >
                      {item.image}
                      <div className="text-center md:text-left">
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mt-2">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials Section */}
              <div className="bg-gradient-to-r from-gray-50 via-white to-gray-100 p-6 md:p-12">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-12 text-gray-900">
                  What Our Users Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                  {[
                    {
                      name: "Ravi Sharma",
                      text: "This platform transformed my career! The tools are intuitive and helped me land my dream job.",
                      avatar: "/SAVE_20241229_154512.jpg",
                    },
                    {
                      name: "Priya Jain",
                      text: "I’ve tried other platforms, but nothing matches the authenticity and support I’ve received here.",
                      avatar: "priya1.jpeg",
                    },
                    {
                      name: "Anil Kumar",
                      text: "The personalized job recommendations saved me so much time! I'm now in a role I love.",
                      avatar: "/IMG-20241229-WA0011.jpg",
                    },
                    {
                      name: "Neha Gupta",
                      text: "The platform's resume analysis tool helped me refine my CV, leading to more interview opportunities.",
                      avatar: "/images/avatar-neha.svg",
                    },
                    {
                      name: "Suresh Reddy",
                      text: "I was skeptical at first, but the platform truly offers verified job opportunities. It's been a game-changer!",
                      avatar: "/images/avatar-suresh.svg",
                    },
                  ].map((testimonial, index) => (
                    <div
                      key={index}
                      className="flex gap-4 md:gap-8 items-center bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition"
                    >
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 md:w-16 h-12 md:h-16 rounded-full"
                      />
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-indigo-600">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 mt-2">{testimonial.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* #1 Choice Section */}
              <div className="p-6 md:p-12 bg-gradient-to-r from-indigo-200 via-white to-gray-100">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8 text-gray-900">
                  The #1 Choice of Students & Working Professionals
                </h2>
                <p className="text-md md:text-xl text-center text-gray-600">
                  Find the perfect job with our advanced tools and resources.
                  Thousands of students and working professionals trust us for
                  their career advancement.
                </p>
              </div>
            </div>
          </div>
        )}

        <footer className="mt-12 text-center">
          <p>
            &copy; {new Date().getFullYear()} Opportune. Designed for students,
            businesses, and job seekers.
          </p>
        </footer>
      </div>
    </ClerkProvider>
  );
};

export default OpportunePage;
