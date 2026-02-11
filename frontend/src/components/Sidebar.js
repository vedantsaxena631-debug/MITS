import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiHome, FiBook, FiUsers, FiCalendar, FiMessageSquare,
  FiSettings, FiLogOut, FiMenu, FiX, FiFileText,
  FiBell, FiAlertCircle, FiBookOpen
} from 'react-icons/fi';
import { useState } from 'react';

function Sidebar({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: FiHome, label: 'Dashboard', path: '/dashboard' },
    { icon: FiBook, label: 'Academics', path: '/academics' },
    { icon: FiUsers, label: 'Attendance', path: '/attendance' },
    { icon: FiCalendar, label: 'Results', path: '/results' },
    { icon: FiFileText, label: 'Assignments', path: '/assignments' },
    { icon: FiCalendar, label: 'Events', path: '/events' },
    { icon: FiBell, label: 'Notices', path: '/notices' },
    { icon: FiBookOpen, label: 'Library', path: '/library' },
    { icon: FiMessageSquare, label: 'Chat', path: '/chat' },
    { icon: FiAlertCircle, label: 'Grievance', path: '/grievance' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-fixed p-3 bg-gradient-to-br from-amber-500 to-amber-600 text-stone-900 rounded-lg shadow-lg hover:shadow-glow-amber transition-all"
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-modal-backdrop"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`${isOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 fixed lg:static w-72 h-screen bg-bg-primary border-r border-primary-500/10 text-text-primary transition-transform duration-300 z-modal lg:z-base overflow-y-auto`}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-primary-500/10 bg-gradient-to-b from-bg-secondary to-transparent">
          <div className="flex items-center gap-3 mb-2">
            <FiBookOpen className="text-3xl text-primary-500 text-glow" />
            <h1 className="text-3xl font-bold text-heading text-primary-500 text-glow">
              MITS
            </h1>
          </div>
          <p className="text-sm text-primary-200/70 font-medium ml-11">
            College Management
          </p>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-4 px-4 py-4 rounded-lg
                  transition-all duration-200 group relative
                  ${isActive(item.path)
                    ? 'bg-primary-500/20 text-primary-500 border-l-4 border-primary-500'
                    : 'text-text-secondary hover:bg-bg-tertiary hover:text-primary-400 border-l-4 border-transparent hover:border-primary-500/50'
                  }
                `}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Icon */}
                <item.icon
                  className={`text-xl flex-shrink-0 transition-all ${isActive(item.path)
                    ? 'text-primary-500'
                    : 'text-text-muted group-hover:text-primary-400'
                    }`}
                />

                {/* Label */}
                <span className="font-medium text-body flex-1">
                  {item.label}
                </span>

                {/* Active Indicator */}
                {isActive(item.path) && (
                  <div className="w-2 h-2 rounded-full bg-primary-500 animate-glow" />
                )}
              </Link>
            ))}
          </div>
        </nav>

      </aside>
    </>
  );
}

export default Sidebar;
