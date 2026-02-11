const express = require('express');
const router = express.Router();
const Attendance = require('../models/Attendance');
const Student = require('../models/Student');

// Mark attendance
router.post('/mark', async (req, res) => {
  try {
    const { studentId, subjectId, date, status } = req.body;

    const attendance = new Attendance({
      student: studentId,
      subject: subjectId,
      date,
      status,
      markedBy: req.user?.id,
    });

    await attendance.save();
    res.status(201).json({ message: 'Attendance marked successfully', attendance });
  } catch (error) {
    res.status(500).json({ error: 'Failed to mark attendance' });
  }
});

// Get attendance for student
router.get('/student/:studentId', async (req, res) => {
  try {
    const attendance = await Attendance.find({ student: req.params.studentId })
      .populate('subject', 'name code')
      .populate('markedBy', 'firstName lastName');

    res.json(attendance);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch attendance' });
  }
});

// Get attendance for subject
router.get('/subject/:subjectId', async (req, res) => {
  try {
    const attendance = await Attendance.find({ subject: req.params.subjectId })
      .populate('student', 'firstName lastName')
      .populate('markedBy', 'firstName lastName');

    res.json(attendance);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch attendance' });
  }
});

// Get attendance percentage for student in subject
router.get('/percentage/:studentId/:subjectId', async (req, res) => {
  try {
    const attendance = await Attendance.find({
      student: req.params.studentId,
      subject: req.params.subjectId,
    });

    const totalClasses = attendance.length;
    const presentClasses = attendance.filter(a => a.status === 'present').length;
    const percentage = totalClasses > 0 ? (presentClasses / totalClasses) * 100 : 0;

    res.json({
      totalClasses,
      presentClasses,
      absentClasses: totalClasses - presentClasses,
      percentage: percentage.toFixed(2),
      shortage: percentage < 75,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to calculate attendance percentage' });
  }
});

// Bulk mark attendance
router.post('/bulk-mark', async (req, res) => {
  try {
    const { attendanceData } = req.body;

    const result = await Attendance.insertMany(attendanceData);
    res.status(201).json({ message: 'Attendance marked successfully', count: result.length });
  } catch (error) {
    res.status(500).json({ error: 'Failed to mark attendance' });
  }
});

module.exports = router;
