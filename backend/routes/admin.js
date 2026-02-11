const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Student = require('../models/Student');
const Faculty = require('../models/Faculty');
const Result = require('../models/Result');
const Attendance = require('../models/Attendance');
const Payment = require('../models/Payment');

// Dashboard statistics
router.get('/dashboard', async (req, res) => {
  try {
    const totalStudents = await Student.countDocuments();
    const totalFaculty = await Faculty.countDocuments();
    const totalUsers = await User.countDocuments();
    const totalPayments = await Payment.countDocuments();
    const completedPayments = await Payment.countDocuments({ status: 'completed' });
    const pendingPayments = await Payment.countDocuments({ status: 'pending' });

    res.json({
      totalStudents,
      totalFaculty,
      totalUsers,
      totalPayments,
      completedPayments,
      pendingPayments,
      paymentPercentage: totalPayments > 0 ? ((completedPayments / totalPayments) * 100).toFixed(2) : 0,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch dashboard data' });
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Deactivate user
router.put('/users/:userId/deactivate', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { isActive: false },
      { new: true }
    ).select('-password');

    res.json({ message: 'User deactivated successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to deactivate user' });
  }
});

// Activate user
router.put('/users/:userId/activate', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { isActive: true },
      { new: true }
    ).select('-password');

    res.json({ message: 'User activated successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to activate user' });
  }
});

// Get analytics
router.get('/analytics', async (req, res) => {
  try {
    const studentsByBranch = await Student.aggregate([
      { $group: { _id: '$branch', count: { $sum: 1 } } },
    ]);

    const studentsBySemester = await Student.aggregate([
      { $group: { _id: '$semester', count: { $sum: 1 } } },
    ]);

    const attendanceStats = await Attendance.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
        },
      },
    ]);

    const paymentStats = await Payment.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
          totalAmount: { $sum: '$amount' },
        },
      },
    ]);

    res.json({
      studentsByBranch,
      studentsBySemester,
      attendanceStats,
      paymentStats,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch analytics' });
  }
});

// Export data
router.get('/export/students', async (req, res) => {
  try {
    const students = await Student.find()
      .populate('userId', 'firstName lastName email phone');

    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to export data' });
  }
});

module.exports = router;
