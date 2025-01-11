"use client";

import { useState } from "react";
import jsPDF from "jspdf";

const predefinedTemplates = [
  `Template 1: 
  Name: {{name}}
  Email: {{email}}
  About: {{about}}
  Skills: {{skills}}
  Job Descriptions: {{jobDescriptions}}`,
  `Template 2: 
  Name: {{name}}
  Email: {{email}}
  Professional Summary: {{about}}
  Core Skills: {{skills}}
  Work Experience: {{jobDescriptions}}`,
];

const generateResume = (template, userDetails, jobs) => {
  let resume = template;
  resume = resume.replace("{{name}}", userDetails.fullName || "N/A");
  resume = resume.replace("{{email}}", userDetails.email || "N/A");
  resume = resume.replace("{{about}}", userDetails.about || "N/A");

  const skills = userDetails.skills
    ? userDetails.skills.split(",").join(", ")
    : "N/A";
  resume = resume.replace("{{skills}}", skills);

  const jobDescriptions =
    jobs.length > 0
      ? jobs
          .map((job) => `${job.role} at ${job.company}\n${job.location}`)
          .join("\n\n")
      : "N/A";
  resume = resume.replace("{{jobDescriptions}}", jobDescriptions);

  return resume;
};

const BuildResumePage = () => {
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    about: "",
    skills: "",
    jobDescriptions: "",
  });
  const [resume, setResume] = useState("");

  const handleGenerateResume = () => {
    const template = predefinedTemplates[0]; // Select a template
    const resumeContent = generateResume(template, userDetails, []);
    setResume(resumeContent);
  };

  const handleDownloadResume = () => {
    if (resume) {
      const doc = new jsPDF();
      const lines = doc.splitTextToSize(resume, 180);
      doc.text(lines, 10, 10);
      doc.save("resume.pdf");
    } else {
      alert("No resume content available to download.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-indigo-600 text-center">
        Build Your Resume with AI
      </h1>
      <div className="max-w-4xl w-full">
        <form className="bg-white p-8 rounded-lg shadow-xl space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            value={userDetails.fullName}
            onChange={(e) =>
              setUserDetails({ ...userDetails, fullName: e.target.value })
            }
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <textarea
            placeholder="About Yourself"
            value={userDetails.about}
            onChange={(e) =>
              setUserDetails({ ...userDetails, about: e.target.value })
            }
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          ></textarea>
          <textarea
            placeholder="Your Skills (comma-separated)"
            value={userDetails.skills}
            onChange={(e) =>
              setUserDetails({ ...userDetails, skills: e.target.value })
            }
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          ></textarea>
          <textarea
            placeholder="Job Descriptions"
            value={userDetails.jobDescriptions}
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                jobDescriptions: e.target.value,
              })
            }
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          ></textarea>
          <button
            type="button"
            onClick={handleGenerateResume}
            className="w-full py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-600 transition duration-300"
          >
            Generate Resume
          </button>
        </form>
        {resume && (
          <div className="mt-8 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Generated Resume
            </h3>
            <pre className="whitespace-pre-wrap p-4 bg-gray-50 border rounded-lg text-gray-800">
              {resume}
            </pre>
            <button
              className="mt-4 py-3 px-6 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
              onClick={handleDownloadResume}
            >
              Download Resume
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuildResumePage;
