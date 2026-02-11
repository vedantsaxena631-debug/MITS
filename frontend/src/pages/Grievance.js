import React, { useState } from 'react';

function Grievance() {
  const [grievances, setGrievances] = useState([
    {
      id: 1,
      title: 'Attendance Issue',
      description: 'Attendance not updated correctly',
      status: 'open',
      date: '10 Jan 2024',
    },
    {
      id: 2,
      title: 'Assignment Marks',
      description: 'Marks not updated for assignment 2',
      status: 'in_progress',
      date: '8 Jan 2024',
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'academic',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setGrievances([...grievances, {
      id: grievances.length + 1,
      ...formData,
      status: 'open',
      date: new Date().toLocaleDateString(),
    }]);
    setFormData({ title: '', description: '', category: 'academic' });
    setShowForm(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'open':
        return 'badge-danger';
      case 'in_progress':
        return 'badge-warning';
      case 'resolved':
        return 'badge-success';
      default:
        return 'badge-info';
    }
  };

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Grievance Portal</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {showForm ? 'Cancel' : 'File Grievance'}
        </button>
      </div>

      {showForm && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">File a New Grievance</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
                placeholder="Brief title of grievance"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
              >
                <option value="academic">Academic</option>
                <option value="hostel">Hostel</option>
                <option value="placement">Placement</option>
                <option value="harassment">Harassment</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
                placeholder="Detailed description of your grievance"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Submit Grievance
            </button>
          </form>
        </div>
      )}

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Your Grievances</h2>
        {grievances.map((grievance) => (
          <div key={grievance.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">{grievance.title}</h3>
              <span className={`badge ${getStatusColor(grievance.status)}`}>
                {grievance.status.replace('_', ' ').toUpperCase()}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Filed: {grievance.date}</p>
            <p className="text-gray-700 dark:text-gray-300">{grievance.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grievance;
