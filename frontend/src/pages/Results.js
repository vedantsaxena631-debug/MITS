import React from 'react';

function Results() {
  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Results</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">CGPA</p>
          <p className="text-4xl font-bold text-blue-600">8.5</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">SGPA (Current)</p>
          <p className="text-4xl font-bold text-green-600">8.7</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Credits Earned</p>
          <p className="text-4xl font-bold text-purple-600">48</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Semester Results</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300">Subject</th>
                <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300">Internal</th>
                <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300">External</th>
                <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300">Total</th>
                <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300">Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 dark:border-gray-700">
                <td className="py-3 px-4 text-gray-800 dark:text-gray-200">Data Structures</td>
                <td className="py-3 px-4 text-gray-800 dark:text-gray-200">28</td>
                <td className="py-3 px-4 text-gray-800 dark:text-gray-200">65</td>
                <td className="py-3 px-4 text-gray-800 dark:text-gray-200">93</td>
                <td className="py-3 px-4"><span className="badge badge-success">A+</span></td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-700">
                <td className="py-3 px-4 text-gray-800 dark:text-gray-200">Web Development</td>
                <td className="py-3 px-4 text-gray-800 dark:text-gray-200">26</td>
                <td className="py-3 px-4 text-gray-800 dark:text-gray-200">62</td>
                <td className="py-3 px-4 text-gray-800 dark:text-gray-200">88</td>
                <td className="py-3 px-4"><span className="badge badge-success">A</span></td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-800 dark:text-gray-200">Database Systems</td>
                <td className="py-3 px-4 text-gray-800 dark:text-gray-200">27</td>
                <td className="py-3 px-4 text-gray-800 dark:text-gray-200">64</td>
                <td className="py-3 px-4 text-gray-800 dark:text-gray-200">91</td>
                <td className="py-3 px-4"><span className="badge badge-success">A+</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Results;
