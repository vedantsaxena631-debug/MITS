import React from 'react';
import { Link } from 'react-router-dom';
import { FiBell, FiSearch, FiMoon, FiSun, FiLogOut, FiUser } from 'react-icons/fi';

function Navbar({ user, onLogout, darkMode, toggleDarkMode }) {
  return (
    <nav className="bg-bg-secondary border-b border-primary-500/10 shadow-lg p-4 flex items-center justify-between z-sticky transition-colors duration-300">
      <div className="flex items-center gap-4 flex-1">
        <div className="hidden md:flex items-center bg-bg-tertiary rounded-lg px-4 py-3 flex-1 max-w-md border border-primary-500/10 focus-within:border-primary-500 transition-all group">
          <FiSearch className="text-text-muted group-focus-within:text-primary-500 transition-colors" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent ml-3 outline-none flex-1 text-text-primary placeholder-text-muted"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-3 hover:bg-bg-tertiary rounded-lg transition-all text-text-secondary hover:text-primary-500"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FiSun className="text-amber-400" /> : <FiMoon className="text-primary-600" />}
        </button>

        {/* Notifications */}
        <button className="p-3 hover:bg-bg-tertiary rounded-lg transition-all relative group text-text-secondary hover:text-primary-500">
          <FiBell className="transition-colors" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary-500 rounded-full animate-glow"></span>
        </button>

        {/* User Profile Section */}
        <div className="flex items-center gap-3 pl-4 ml-2 border-l border-primary-500/20">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-text-primary text-body">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-xs text-primary-500 capitalize font-medium">
              {user?.role}
            </p>
          </div>

          {/* Profile Button */}
          <Link
            to="/profile"
            className="p-3 hover:bg-bg-tertiary rounded-lg transition-all text-text-secondary hover:text-primary-500 group"
            title="Profile"
          >
            <FiUser className="group-hover:scale-110 transition-transform" text-xl />
          </Link>

          {/* Logout Button */}
          <button
            onClick={onLogout}
            className="p-3 hover:bg-red-500/10 rounded-lg transition-all text-text-muted hover:text-red-500 border border-transparent hover:border-red-500/30 group"
            title="Logout"
          >
            <FiLogOut className="group-hover:translate-x-0.5 transition-transform text-xl" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
