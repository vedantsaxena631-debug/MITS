import React from 'react';

function Notices() {
  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Notices</h1>
      
      <div className="space-y-4">
        <div className="bg-red-50 dark:bg-red-900 border-l-4 border-red-500 rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-red-800 dark:text-red-200">URGENT: Semester Exam Schedule</h3>
            <span className="badge badge-danger">Urgent</span>
          </div>
          <p className="text-red-700 dark:text-red-300 text-sm mb-2">Posted: 10 January 2024</p>
          <p className="text-red-700 dark:text-red-300">Semester exams will commence from 15 January 2024. Check the detailed schedule on the portal.</p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500 rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200">Library Extended Hours</h3>
            <span className="badge badge-info">Important</span>
          </div>
          <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">Posted: 8 January 2024</p>
          <p className="text-blue-700 dark:text-blue-300">Library will remain open till 8 PM during examination period for student convenience.</p>
        </div>

        <div className="bg-green-50 dark:bg-green-900 border-l-4 border-green-500 rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-green-800 dark:text-green-200">Scholarship Applications Open</h3>
            <span className="badge badge-success">General</span>
          </div>
          <p className="text-green-700 dark:text-green-300 text-sm mb-2">Posted: 5 January 2024</p>
          <p className="text-green-700 dark:text-green-300">Applications for merit-based scholarships are now open. Last date: 31 January 2024.</p>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-500 rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-200">Hostel Room Allocation</h3>
            <span className="badge badge-warning">General</span>
          </div>
          <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-2">Posted: 3 January 2024</p>
          <p className="text-yellow-700 dark:text-yellow-300">New hostel room allocation list has been published. Check your allotment on the portal.</p>
        </div>
      </div>
    </div>
  );
}

export default Notices;
