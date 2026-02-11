import React from 'react';

function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-4">404</h1>
        <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8">Page Not Found</p>
        <a href="/dashboard" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Go to Dashboard
        </a>
      </div>
    </div>
  );
}

export default NotFound;
