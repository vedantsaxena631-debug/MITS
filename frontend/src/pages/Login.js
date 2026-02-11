import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { FiMail, FiLock, FiBookOpen } from 'react-icons/fi';

function Login({ setUser }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { email, password } = formData; // Destructure email and password from formData
      const response = await api.post('/auth/login', { email, password }); // Use api utility
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-pattern-diagonal bg-gradient-dark-academia flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-paper-texture pointer-events-none"></div>

      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-amber-500/20 to-transparent blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-gradient-to-tl from-amber-600/20 to-transparent blur-3xl"></div>

      <div className="card max-w-md w-full animate-fade-in relative z-10 bg-[#2d2420] border-2 border-amber-500/20">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FiBookOpen className="text-5xl text-amber-500 text-glow" />
          </div>
          <h1 className="text-5xl font-bold text-heading text-amber-500 mb-2 text-glow">
            MITS
          </h1>
          <p className="text-amber-200/80 text-lg font-medium">
            Madhav Institute of Technology and Science
          </p>
          <p className="text-stone-400 text-sm mt-1">
            College Management System
          </p>
        </div>

        {/* Decorative Line */}
        <div className="h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mb-8"></div>

        {error && (
          <div className="bg-red-900/30 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg mb-6 animate-fade-in backdrop-blur-sm">
            <p className="text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-amber-200/90 mb-2 text-body">
              Email Address
            </label>
            <div className="flex items-center input-field focus-within:border-amber-500 group">
              <FiMail className="text-stone-400 mr-3 group-focus-within:text-amber-500 transition-colors" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="flex-1 outline-none bg-transparent text-stone-100"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-amber-200/90 mb-2 text-body">
              Password
            </label>
            <div className="flex items-center input-field focus-within:border-amber-500 group">
              <FiLock className="text-stone-400 mr-3 group-focus-within:text-amber-500 transition-colors" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="flex-1 outline-none bg-transparent text-stone-100"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                className="rounded border-amber-500/30 bg-stone-700 text-amber-500 focus:ring-amber-500 focus:ring-offset-0 transition-colors"
              />
              <span className="ml-2 text-sm text-stone-300 group-hover:text-amber-200 transition-colors">
                Remember me
              </span>
            </label>
            <a
              href="#"
              className="text-sm text-amber-500 hover:text-amber-400 transition-colors font-medium"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full py-3 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in...
              </span>
            ) : (
              'Login'
            )}
          </button>
        </form>

        {/* Decorative Line */}
        <div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent my-8"></div>

        <div className="text-center">
          <p className="text-stone-300">
            Don't have an account?{' '}
            <a
              href="/register"
              className="text-amber-500 font-semibold hover:text-amber-400 transition-colors hover:underline"
            >
              Register here
            </a>
          </p>
        </div>

        {/* Demo Credentials */}
        <div className="mt-8 p-5 bg-amber-500/10 rounded-lg border border-amber-500/20 backdrop-blur-sm">
          <p className="font-bold mb-3 text-amber-200 text-sm uppercase tracking-wide">
            Demo Credentials
          </p>
          <div className="space-y-2 text-sm text-stone-300 font-mono">
            <p>
              <span className="text-amber-400 font-semibold">Student:</span> student@mits.ac.in / password123
            </p>
            <p>
              <span className="text-amber-400 font-semibold">Faculty:</span> faculty@mits.ac.in / password123
            </p>
            <p>
              <span className="text-amber-400 font-semibold">Admin:</span> admin@mits.ac.in / password123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
