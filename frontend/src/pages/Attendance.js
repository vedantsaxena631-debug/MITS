import React from 'react';

function Attendance() {
  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Attendance</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Overall Attendance</p>
            <p className="text-4xl font-bold text-blue-600">85%</p>
          </div>
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Classes Attended</p>
            <p className="text-4xl font-bold text-green-600">34</p>
          </div>
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Classes Missed</p>
            <p className="text-4xl font-bold text-red-600">6</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Subject-wise Attendance</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700 dark:text-gray-300">Data Structures</span>
              <span className="text-gray-700 dark:text-gray-300">90%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700 dark:text-gray-300">Web Development</span>
              <span className="text-gray-700 dark:text-gray-300">80%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700 dark:text-gray-300">Database Systems</span>
              <span className="text-gray-700 dark:text-gray-300">85%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attendance;
