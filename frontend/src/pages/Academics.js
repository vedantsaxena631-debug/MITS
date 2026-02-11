import React from 'react';

function Academics() {
  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Academics</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Subjects</h2>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 dark:bg-blue-900 rounded">
              <p className="font-medium text-gray-800 dark:text-white">Data Structures</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">4 Credits</p>
            </div>
            <div className="p-3 bg-green-50 dark:bg-green-900 rounded">
              <p className="font-medium text-gray-800 dark:text-white">Web Development</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">3 Credits</p>
            </div>
            <div className="p-3 bg-purple-50 dark:bg-purple-900 rounded">
              <p className="font-medium text-gray-800 dark:text-white">Database Systems</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">4 Credits</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Timetable</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Monday</span>
              <span className="text-gray-800 dark:text-white">9:00 - 10:00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Tuesday</span>
              <span className="text-gray-800 dark:text-white">10:00 - 11:00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Wednesday</span>
              <span className="text-gray-800 dark:text-white">11:00 - 12:00</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Study Materials</h2>
          <div className="space-y-2">
            <button className="w-full text-left p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              📄 Lecture Notes
            </button>
            <button className="w-full text-left p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              📊 Presentations
            </button>
            <button className="w-full text-left p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              📚 Previous Papers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Academics;
