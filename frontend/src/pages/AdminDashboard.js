import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import { FiUsers, FiBook, FiDollarSign, FiBarChart2 } from 'react-icons/fi';

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalFaculty: 0,
    totalPayments: 0,
    completedPayments: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const response = await api.get('/admin/dashboard');
      setStats(response.data);
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Total Students</p>
              <p className="text-3xl font-bold text-gray-800 dark:text-white">{stats.totalStudents}</p>
            </div>
            <FiUsers className="text-4xl text-blue-500" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Total Faculty</p>
              <p className="text-3xl font-bold text-gray-800 dark:text-white">{stats.totalFaculty}</p>
            </div>
            <FiBook className="text-4xl text-green-500" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Total Payments</p>
              <p className="text-3xl font-bold text-gray-800 dark:text-white">₹{stats.totalPayments}</p>
            </div>
            <FiDollarSign className="text-4xl text-purple-500" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Completed</p>
              <p className="text-3xl font-bold text-gray-800 dark:text-white">{stats.completedPayments}</p>
            </div>
            <FiBarChart2 className="text-4xl text-orange-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Admin Actions</h2>
          <div className="space-y-2">
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Manage Users
            </button>
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
              Manage Academics
            </button>
            <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
              View Analytics
            </button>
            <button className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition">
              Generate Reports
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">System Status</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Database</span>
              <span className="text-green-600 font-medium">Connected</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">API Server</span>
              <span className="text-green-600 font-medium">Running</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Email Service</span>
              <span className="text-green-600 font-medium">Active</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Storage</span>
              <span className="text-yellow-600 font-medium">85% Used</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
