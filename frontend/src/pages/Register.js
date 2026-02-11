import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../utils/api';
import { FiMail, FiLock, FiUser, FiPhone, FiBookOpen, FiUserCheck } from 'react-icons/fi';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'student',
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

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      const response = await api.post('/auth/register', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        role: formData.role,
      });

      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-pattern-diagonal bg-gradient-dark-academia flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-paper-texture pointer-events-none"></div>

      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-amber-500/20 to-transparent blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-gradient-to-tl from-amber-600/20 to-transparent blur-3xl"></div>

      <div className="card max-w-2xl w-full animate-fade-in relative z-10 bg-[#2d2420] border-2 border-amber-500/20">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FiBookOpen className="text-5xl text-amber-500 text-glow" />
          </div>
          <h1 className="text-5xl font-bold text-heading text-amber-500 mb-2 text-glow">
            MITS
          </h1>
          <p className="text-amber-200/80 text-lg font-medium">
            Create your account
          </p>
        </div>

        {/* Decorative Line */}
        <div className="h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mb-8"></div>

        {error && (
          <div className="bg-red-900/30 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg mb-6 animate-fade-in backdrop-blur-sm">
            <p className="text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-amber-200/90 mb-2 text-body">
                First Name
              </label>
              <div className="flex items-center input-field focus-within:border-amber-500 group">
                <FiUser className="text-stone-400 mr-3 group-focus-within:text-amber-500 transition-colors" />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="flex-1 outline-none bg-transparent text-stone-100"
                  placeholder="First name"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-amber-200/90 mb-2 text-body">
                Last Name
              </label>
              <div className="flex items-center input-field focus-within:border-amber-500 group">
                <FiUser className="text-stone-400 mr-3 group-focus-within:text-amber-500 transition-colors" />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="flex-1 outline-none bg-transparent text-stone-100"
                  placeholder="Last name"
                />
              </div>
            </div>
          </div>

          {/* Email */}
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

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-amber-200/90 mb-2 text-body">
              Phone Number
            </label>
            <div className="flex items-center input-field focus-within:border-amber-500 group">
              <FiPhone className="text-stone-400 mr-3 group-focus-within:text-amber-500 transition-colors" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="flex-1 outline-none bg-transparent text-stone-100"
                placeholder="+91 XXXXXXXXXX"
              />
            </div>
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-semibold text-amber-200/90 mb-3 text-body">
              Select Role
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className={`cursor-pointer p-4 rounded-lg border-2 transition-all
                ${formData.role === 'student'
                  ? 'border-amber-500 bg-amber-500/20'
                  : 'border-amber-500/20 bg-[#3d342f] hover:border-amber-500/40'
                }`}>
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={formData.role === 'student'}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className="flex items-center gap-3">
                  <FiUser className={`text-2xl ${formData.role === 'student' ? 'text-amber-400' : 'text-stone-400'}`} />
                  <div>
                    <p className={`font-semibold ${formData.role === 'student' ? 'text-amber-400' : 'text-stone-300'}`}>
                      Student
                    </p>
                    <p className="text-xs text-stone-400">Academic access</p>
                  </div>
                </div>
              </label>

              <label className={`cursor-pointer p-4 rounded-lg border-2 transition-all
                ${formData.role === 'faculty'
                  ? 'border-amber-500 bg-amber-500/20'
                  : 'border-amber-500/20 bg-[#3d342f] hover:border-amber-500/40'
                }`}>
                <input
                  type="radio"
                  name="role"
                  value="faculty"
                  checked={formData.role === 'faculty'}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className="flex items-center gap-3">
                  <FiUserCheck className={`text-2xl ${formData.role === 'faculty' ? 'text-amber-400' : 'text-stone-400'}`} />
                  <div>
                    <p className={`font-semibold ${formData.role === 'faculty' ? 'text-amber-400' : 'text-stone-300'}`}>
                      Faculty
                    </p>
                    <p className="text-xs text-stone-400">Teaching access</p>
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Password Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
            <div>
              <label className="block text-sm font-semibold text-amber-200/90 mb-2 text-body">
                Confirm Password
              </label>
              <div className="flex items-center input-field focus-within:border-amber-500 group">
                <FiLock className="text-stone-400 mr-3 group-focus-within:text-amber-500 transition-colors" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="flex-1 outline-none bg-transparent text-stone-100"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full py-3 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed mt-6"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating account...
              </span>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        {/* Decorative Line */}
        <div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent my-8"></div>

        <div className="text-center">
          <p className="text-stone-300">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-amber-500 font-semibold hover:text-amber-400 transition-colors hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
