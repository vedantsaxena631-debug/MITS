import React from 'react';

function Events() {
  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Events</h1>
      
      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">Tech Fest 2024</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">20-22 January 2024</p>
            </div>
            <span className="badge badge-info">Upcoming</span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">Annual technology festival featuring coding competitions, workshops, and exhibitions.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Register Now
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">Sports Day</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">25 January 2024</p>
            </div>
            <span className="badge badge-info">Upcoming</span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">Inter-college sports competition with various events and prizes.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Register Now
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">Placement Drive</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">30 January 2024</p>
            </div>
            <span className="badge badge-success">Registered</span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">Recruitment drive by leading IT companies.</p>
          <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition" disabled>
            Already Registered
          </button>
        </div>
      </div>
    </div>
  );
}

export default Events;
