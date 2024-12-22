// components/AIResumeTool.tsx

"use client"; // <-- This marks this file as a Client Component

import React, { useState } from "react";

const AIResumeTool = () => {
  const [inputText, setInputText] = useState("");
  const [optimizedResume, setOptimizedResume] = useState("");

  const handleOptimizeResume = () => {
    setOptimizedResume(`Optimized Resume:\n\n${inputText}`);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-md mb-12">
      <h2 className="text-2xl font-semibold mb-4">Optimize Your Resume</h2>
      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg"
        placeholder="Paste your resume text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={handleOptimizeResume}
        className="mt-4 py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
      >
        Optimize Resume
      </button>

      {optimizedResume && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold">Optimized Resume</h3>
          <pre>{optimizedResume}</pre>
        </div>
      )}
    </div>
  );
};

export default AIResumeTool;
