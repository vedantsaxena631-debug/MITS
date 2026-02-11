import React, { useState, useEffect } from 'react';
import { FiBook, FiUsers, FiFileText, FiCalendar, FiTrendingUp, FiAward } from 'react-icons/fi';

function StudentDashboard() {
  const [stats, setStats] = useState({
    attendance: 0,
    assignments: 0,
    results: 0,
    events: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch student-specific data
      setStats({
        attendance: 85,
        assignments: 12,
        results: 8,
        events: 5,
      });
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-8 bg-gradient-dark-academia min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto mb-4"></div>
          <p className="text-stone-300">Loading...</p>
        </div>
      </div>
    );
  }

  const statCards = [
    {
      icon: FiTrendingUp,
      label: 'Attendance',
      value: `${stats.attendance}%`,
      color: 'from-amber-500 to-amber-600',
      bgGlow: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]'
    },
    {
      icon: FiFileText,
      label: 'Assignments',
      value: stats.assignments,
      color: 'from-emerald-500 to-emerald-600',
      bgGlow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]'
    },
    {
      icon: FiAward,
      label: 'Results',
      value: stats.results,
      color: 'from-purple-500 to-purple-600',
      bgGlow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]'
    },
    {
      icon: FiCalendar,
      label: 'Events',
      value: stats.events,
      color: 'from-orange-500 to-orange-600',
      bgGlow: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]'
    },
  ];

  return (
    <div className="p-8 bg-gradient-dark-academia bg-pattern-diagonal min-h-screen">
      {/* Welcome Header */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold text-heading text-primary-500 mb-2 text-glow">
          Welcome to MITS
        </h1>
        <p className="text-text-muted text-lg">
          Your academic dashboard at a glance
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <div
            key={stat.label}
            className={`card animate-fade-in delay-${index + 1}00 ${stat.bgGlow} cursor-pointer group`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-muted text-sm font-medium mb-1">
                  {stat.label}
                </p>
                <p className="text-4xl font-bold text-heading text-text-primary group-hover:text-primary-400 transition-colors">
                  {stat.value}
                </p>
              </div>
              <div className={`p-4 rounded-xl bg-gradient-to-br ${stat.color} group-hover:scale-110 transition-transform`}>
                <stat.icon className="text-3xl text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Notices */}
        <div className="card animate-fade-in delay-500">
          <h2 className="text-2xl font-bold text-heading text-primary-500 mb-6 flex items-center gap-2">
            <FiBook className="text-primary-500" />
            Recent Notices
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-bg-tertiary rounded-lg border-l-4 border-primary-500 hover:bg-bg-elevated transition-all cursor-pointer group">
              <p className="font-semibold text-text-primary mb-1 group-hover:text-primary-400 transition-colors">
                Semester Exam Schedule
              </p>
              <p className="text-sm text-text-muted">
                Exams starting from 15th January
              </p>
              <p className="text-xs text-primary-500 mt-2">2 days ago</p>
            </div>
            <div className="p-4 bg-bg-tertiary rounded-lg border-l-4 border-emerald-500 hover:bg-bg-elevated transition-all cursor-pointer group">
              <p className="font-semibold text-text-primary mb-1 group-hover:text-emerald-400 transition-colors">
                Library Extended Hours
              </p>
              <p className="text-sm text-text-muted">
                Library open till 8 PM during exams
              </p>
              <p className="text-xs text-emerald-500 mt-2">5 days ago</p>
            </div>
            <div className="p-4 bg-bg-tertiary rounded-lg border-l-4 border-purple-500 hover:bg-bg-elevated transition-all cursor-pointer group">
              <p className="font-semibold text-text-primary mb-1 group-hover:text-purple-400 transition-colors">
                Workshop on AI & ML
              </p>
              <p className="text-sm text-text-muted">
                Register before 10th January
              </p>
              <p className="text-xs text-purple-500 mt-2">1 week ago</p>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="card animate-fade-in delay-500">
          <h2 className="text-2xl font-bold text-heading text-primary-500 mb-6 flex items-center gap-2">
            <FiCalendar className="text-primary-500" />
            Upcoming Events
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-purple-900/10 to-transparent rounded-lg border-l-4 border-purple-500 hover:from-purple-900/20 transition-all cursor-pointer group">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-text-primary mb-1 group-hover:text-purple-400 transition-colors">
                    Tech Fest 2024
                  </p>
                  <p className="text-sm text-text-muted">
                    Annual technical festival
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-purple-400 font-semibold">20-22 JAN</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-orange-900/10 to-transparent rounded-lg border-l-4 border-orange-500 hover:from-orange-900/20 transition-all cursor-pointer group">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-text-primary mb-1 group-hover:text-orange-400 transition-colors">
                    Sports Day
                  </p>
                  <p className="text-sm text-text-muted">
                    Inter-department sports competition
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-orange-400 font-semibold">25 JAN</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-blue-900/10 to-transparent rounded-lg border-l-4 border-blue-500 hover:from-blue-900/20 transition-all cursor-pointer group">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-text-primary mb-1 group-hover:text-blue-400 transition-colors">
                    Cultural Night
                  </p>
                  <p className="text-sm text-text-muted">
                    Music, dance, and drama performances
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-blue-400 font-semibold">30 JAN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
