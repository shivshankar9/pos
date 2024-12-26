"use client"; // Add this directive to mark the file as a Client Component

import React, { useEffect, useState } from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { IoRocketOutline } from "react-icons/io5";
import { useUser, SignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const jobListings = [
  {
    company: "Google",
    role: "Software Engineer",
    location: "Mountain View, CA",
    link: "https://careers.google.com",
  },
  {
    company: "Amazon",
    role: "Front-End Developer",
    location: "Seattle, WA",
    link: "https://www.amazon.jobs",
  },
  {
    company: "Microsoft",
    role: "Data Scientist",
    location: "Redmond, WA",
    link: "https://careers.microsoft.com",
  },
  {
    company: "Tesla",
    role: "Electrical Engineer",
    location: "Palo Alto, CA",
    link: "https://www.tesla.com/careers",
  },
];

const bannerImages = [
  { src: "banner1.png", alt: "Ad 1: Join Tech Job Fair", link: "#" },
  {
    src: "banner2.png",
    alt: "Ad 2: Upgrade Your Skills with AI Courses",
    link: "#",
  },
  { src: "banner3.png", alt: "Ad 3: Find Your Dream Job Now", link: "#" },
];

const events = [
  {
    name: "Tech Job Fair 2024",
    date: "2024-12-15",
    location: "San Francisco, CA",
    description:
      "A premier event connecting tech talent with industry leaders.",
    link: "#",
  },
  {
    name: "Walk-In Interviews at Infosys",
    date: "2024-12-20",
    location: "Bangalore, India",
    description: "Open walk-in interviews for software roles.",
    link: "https://www.infosys.com/careers",
  },
];

const OpportunePage: React.FC = () => {
  const { isSignedIn } = useUser();
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobListings);
  const [geolocation, setGeolocation] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [jobRequest, setJobRequest] = useState({
    title: "",
    description: "",
    location: "",
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSignInModal, setShowSignInModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setFilteredJobs(
      jobListings.filter((job) =>
        `${job.company} ${job.role} ${job.location}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  useEffect(() => {
    const checkSignInStatus = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait for 3 seconds
      if (!isSignedIn) {
        setShowSignInModal(true); // Show sign-in modal if not signed in
      }
    };

    checkSignInStatus();
  }, [isSignedIn]);

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
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      } p-6 ${showSignInModal ? "backdrop-blur" : ""}`}
    >
      {showSignInModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75 z-50">
          <SignIn
            routing="hash"
            signUpUrl="/sign-up"
            appearance={{
              layout: "modal",
            }}
          />
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
      </header>

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
              <img
                src={banner.src}
                alt={banner.alt}
                className="w-full h-full object-cover"
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
              <p className="text-gray-500 dark:text-gray-300">{job.role}</p>
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
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
              } transform hover:scale-105 hover:shadow-xl transition-all duration-300`}
            >
              <h3 className="text-xl font-bold">{event.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
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
          Use our AI-powered tool to create a professional resume in minutes.
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
          Can&apos;t find the perfect job? Submit a request for a custom job!
        </p>
        <button
          onClick={() => setShowRequestModal(true)}
          className="mt-4 py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-600 text-grey rounded-lg shadow-lg transform hover:scale-110"
        >
          <IoRocketOutline className="inline-block mr-2 text-2xl" /> Request a
          Job
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
                setJobRequest({ ...jobRequest, description: e.target.value })
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

      <footer className="mt-12 text-center">
        <p>
          &copy; {new Date().getFullYear()} Opportune. Designed for students,
          businesses, and job seekers.
        </p>
      </footer>
    </div>
  );
};

export default OpportunePage;
