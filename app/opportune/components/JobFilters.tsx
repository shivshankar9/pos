// components/JobFilters.tsx

"use client"; // <-- Marking the component as a Client Component

import React, { useState } from "react";

const JobFilters = () => {
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("Remote");

  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-md mb-12">
      <h2 className="text-2xl font-semibold mb-4">Filter Opportunities</h2>
      <div className="flex space-x-6">
        <div className="flex flex-col w-1/2">
          <label className="text-gray-700">Job Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded-md"
          >
            <option>All</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Product</option>
            <option>Design</option>
          </select>
        </div>
        <div className="flex flex-col w-1/2">
          <label className="text-gray-700">Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded-md"
          >
            <option>Remote</option>
            <option>San Francisco</option>
            <option>New York</option>
            <option>Los Angeles</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default JobFilters;
