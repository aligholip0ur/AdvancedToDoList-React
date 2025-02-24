import React from "react";

export default function Filters({ showCompleted, setShowCompleted }) {
  return (
    <div>
      <button
        onClick={() => setShowCompleted(false)}
        className={`mx-3 ${
          !showCompleted ? "text-blue-600 font-bold" : "text-gray-600"
        }`}
      >
        Incomplete Tasks
      </button>
      <button
        onClick={() => setShowCompleted(true)}
        className={`${
          showCompleted ? "text-blue-600 font-bold" : "text-gray-600"
        }`}
      >
        Completed Tasks
      </button>
    </div>
  );
}
