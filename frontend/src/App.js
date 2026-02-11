import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import api from './utils/api';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './pages/StudentDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Academics from './pages/Academics';
import Attendance from './pages/Attendance';
import Results from './pages/Results';
import Assignments from './pages/Assignments';
import Events from './pages/Events';
import Notices from './pages/Notices';
import Library from './pages/Library';
import Chat from './pages/Chat';
import Grievance from './pages/Grievance';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      verifyToken();
    } else {
      setLoading(false);
    }
  }, []);

  const verifyToken = async () => {
    try {
      const response = await api.get('/auth/verify');
      setUser(response.data.user);
    } catch (error) {
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Provider store={store}>
      <Router>
        <div className={darkMode ? 'dark' : ''}>
          {user ? (
            <div className="flex h-screen bg-bg-primary text-text-primary transition-colors duration-300">
              <Sidebar user={user} />
              <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar user={user} onLogout={handleLogout} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <main className="flex-1 overflow-auto">
                  <Routes>
                    <Route path="/dashboard" element={
                      user.role === 'student' ? <StudentDashboard /> :
                        user.role === 'faculty' ? <FacultyDashboard /> :
                          <AdminDashboard />
                    } />
                    <Route path="/academics" element={<Academics />} />
                    <Route path="/attendance" element={<Attendance />} />
                    <Route path="/results" element={<Results />} />
                    <Route path="/assignments" element={<Assignments />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/notices" element={<Notices />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/grievance" element={<Grievance />} />
                    <Route path="/profile" element={<Profile user={user} />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </div>
            </div>
          ) : (
            <Routes>
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          )}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
