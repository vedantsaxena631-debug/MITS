import React from 'react';

function Assignments() {
  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Assignments</h1>
      
      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">Assignment 1: Data Structures</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Due: 15 January 2024</p>
            </div>
            <span className="badge badge-warning">Pending</span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">Implement sorting algorithms and analyze their time complexity.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Submit Assignment
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">Assignment 2: Web Development</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Due: 20 January 2024</p>
            </div>
            <span className="badge badge-success">Submitted</span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">Create a responsive website using HTML, CSS, and JavaScript.</p>
          <div className="bg-green-50 dark:bg-green-900 p-3 rounded">
            <p className="text-sm text-green-800 dark:text-green-200">Submitted on: 18 January 2024</p>
            <p className="text-sm text-green-800 dark:text-green-200">Marks: 9/10</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">Assignment 3: Database Systems</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Due: 25 January 2024</p>
            </div>
            <span className="badge badge-danger">Overdue</span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">Design a database schema for an e-commerce system.</p>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
            Submit Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Assignments;
