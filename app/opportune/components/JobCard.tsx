// components/JobCard.tsx
import React from "react";

interface Job {
  title: string;
  company: string;
  location: string;
  salaryRange: string;
  qualifications: string;
}

const JobCard = ({ job }: { job: Job }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300">
      <div className="p-6">
        <h3 className="text-xl font-semibold">{job.title}</h3>
        <p className="text-gray-600">
          {job.company} | {job.location}
        </p>
        <p className="text-gray-500">{job.salaryRange}</p>
        <p className="mt-2 text-gray-700">
          <strong>Qualifications:</strong> {job.qualifications}
        </p>
        <button className="mt-4 py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
