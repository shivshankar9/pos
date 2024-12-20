// /app/careers/[id].tsx
"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

// Simulated job data for the example
const jobs = [
  {
    id: "1",
    title: "Software Engineer",
    location: "Remote",
    description: "Developing web applications",
  },
  {
    id: "2",
    title: "UI/UX Designer",
    location: "Bangalore, India",
    description: "Designing user interfaces",
  },
  {
    id: "3",
    title: "Product Manager",
    location: "Bangalore, India",
    description: "Managing product development",
  },
];

const JobDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState<any>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (id) {
      const selectedJob = jobs.find((job) => job.id === id);
      setJob(selectedJob);
    }
  }, [id]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Handle the form submission (simulate sending an email)
    const formData = {
      name,
      email,
      message,
    };

    console.log("Form Data: ", formData);
    // You can integrate an email API here to send this data to info@finverge.tech
    // Example: use EmailJS, Nodemailer, or another service for email sending

    alert("Your application has been submitted!");
  };

  if (!job) {
    return <div>Job not found!</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold">{job.title}</h1>
      <p className="mt-4">{job.description}</p>
      <p className="mt-2">Location: {job.location}</p>

      <h3 className="text-xl font-semibold mt-6">Apply Now</h3>
      <form onSubmit={handleFormSubmit} className="mt-4">
        <div>
          <label htmlFor="name" className="block text-sm">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-2 p-3 border rounded-lg"
            required
          />
        </div>

        <div className="mt-4">
          <label htmlFor="email" className="block text-sm">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-2 p-3 border rounded-lg"
            required
          />
        </div>

        <div className="mt-4">
          <label htmlFor="message" className="block text-sm">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full mt-2 p-3 border rounded-lg"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-6 px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobDetailsPage;
