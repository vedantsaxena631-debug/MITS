import React from 'react';
import { FiUsers, FiBook, FiFileText, FiBarChart2 } from 'react-icons/fi';

function FacultyDashboard() {
  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Faculty Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Students</p>
              <p className="text-3xl font-bold text-gray-800 dark:text-white">120</p>
            </div>
            <FiUsers className="text-4xl text-blue-500" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Subjects</p>
              <p className="text-3xl font-bold text-gray-800 dark:text-white">4</p>
            </div>
            <FiBook className="text-4xl text-green-500" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Assignments</p>
              <p className="text-3xl font-bold text-gray-800 dark:text-white">8</p>
            </div>
            <FiFileText className="text-4xl text-purple-500" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Avg Attendance</p>
              <p className="text-3xl font-bold text-gray-800 dark:text-white">82%</p>
            </div>
            <FiBarChart2 className="text-4xl text-orange-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Recent Submissions</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <div>
                <p className="font-medium text-gray-800 dark:text-white">Assignment 1</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">15 submissions</p>
              </div>
              <span className="text-green-600 font-medium">100%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <div>
                <p className="font-medium text-gray-800 dark:text-white">Assignment 2</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">12 submissions</p>
              </div>
              <span className="text-yellow-600 font-medium">80%</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Mark Attendance
            </button>
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
              Create Assignment
            </button>
            <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
              Upload Results
            </button>
            <button className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition">
              View Timetable
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyDashboard;
