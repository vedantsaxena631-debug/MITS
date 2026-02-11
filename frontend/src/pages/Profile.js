import React, { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiMapPin, FiEdit2 } from 'react-icons/fi';

function Profile({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'Raj',
    lastName: 'Kumar',
    email: user?.email || 'raj@mits.ac.in',
    phone: '+91 9876543210',
    address: 'Gwalior, Madhya Pradesh',
    rollNumber: 'CSE2021001',
    branch: 'Computer Science',
    semester: 4,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // TODO: Save to backend
  };

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">My Profile</h1>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              <FiEdit2 /> {isEditing ? 'Cancel' : 'Edit'}
            </button>
          </div>

          <div className="mb-8 text-center">
            <div className="w-24 h-24 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
              <FiUser className="text-4xl text-gray-600 dark:text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {profileData.firstName} {profileData.lastName}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">{profileData.rollNumber}</p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">First Name</label>
                <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <FiUser className="text-gray-400" />
                  {isEditing ? (
                    <input
                      type="text"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleChange}
                      className="flex-1 bg-transparent outline-none dark:text-white"
                    />
                  ) : (
                    <span className="text-gray-800 dark:text-white">{profileData.firstName}</span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Last Name</label>
                <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <FiUser className="text-gray-400" />
                  {isEditing ? (
                    <input
                      type="text"
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleChange}
                      className="flex-1 bg-transparent outline-none dark:text-white"
                    />
                  ) : (
                    <span className="text-gray-800 dark:text-white">{profileData.lastName}</span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email</label>
                <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <FiMail className="text-gray-400" />
                  <span className="text-gray-800 dark:text-white">{profileData.email}</span>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Phone</label>
                <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <FiPhone className="text-gray-400" />
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleChange}
                      className="flex-1 bg-transparent outline-none dark:text-white"
                    />
                  ) : (
                    <span className="text-gray-800 dark:text-white">{profileData.phone}</span>
                  )}
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Address</label>
                <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <FiMapPin className="text-gray-400" />
                  {isEditing ? (
                    <input
                      type="text"
                      name="address"
                      value={profileData.address}
                      onChange={handleChange}
                      className="flex-1 bg-transparent outline-none dark:text-white"
                    />
                  ) : (
                    <span className="text-gray-800 dark:text-white">{profileData.address}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Academic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Branch</p>
                  <p className="text-lg font-bold text-gray-800 dark:text-white">{profileData.branch}</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900 rounded">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Semester</p>
                  <p className="text-lg font-bold text-gray-800 dark:text-white">{profileData.semester}</p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900 rounded">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Roll Number</p>
                  <p className="text-lg font-bold text-gray-800 dark:text-white">{profileData.rollNumber}</p>
                </div>
              </div>
            </div>

            {isEditing && (
              <button
                onClick={handleSave}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-medium"
              >
                Save Changes
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
