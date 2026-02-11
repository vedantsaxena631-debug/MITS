import React from 'react';

function Library() {
  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Library</h1>
      
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search books..."
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="mb-4 h-32 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
            <span className="text-gray-500">📚</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Data Structures</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Author: Mark Allen Weiss</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Available: 3 copies</p>
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Issue Book
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="mb-4 h-32 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
            <span className="text-gray-500">📚</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Web Development</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Author: Jon Duckett</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Available: 2 copies</p>
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Issue Book
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="mb-4 h-32 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
            <span className="text-gray-500">📚</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Database Systems</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Author: Ramakrishnan & Gehrke</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Available: 1 copy</p>
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Issue Book
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">My Issued Books</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300">Book Title</th>
                <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300">Issue Date</th>
                <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300">Due Date</th>
                <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 dark:border-gray-700">
                <td className="py-3 px-4 text-gray-800 dark:text-gray-200">Data Structures</td>
                <td className="py-3 px-4 text-gray-800 dark:text-gray-200">5 Jan 2024</td>
                <td className="py-3 px-4 text-gray-800 dark:text-gray-200">19 Jan 2024</td>
                <td className="py-3 px-4"><span className="badge badge-success">Active</span></td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-800 dark:text-gray-200">Web Development</td>
                <td className="py-3 px-4 text-gray-800 dark:text-gray-200">1 Jan 2024</td>
                <td className="py-3 px-4 text-gray-800 dark:text-gray-200">15 Jan 2024</td>
                <td className="py-3 px-4"><span className="badge badge-danger">Overdue</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Library;
