const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Student = require('../models/Student');
const Faculty = require('../models/Faculty');

// Get user profile
router.get('/profile/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    let profile = {};
    if (user.role === 'student') {
      profile = await Student.findOne({ userId: user._id });
    } else if (user.role === 'faculty') {
      profile = await Faculty.findOne({ userId: user._id });
    }

    res.json({ user, profile });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

// Update user profile
router.put('/profile/:id', async (req, res) => {
  try {
    const { firstName, lastName, phone, dateOfBirth, gender, address } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        firstName,
        lastName,
        phone,
        dateOfBirth,
        gender,
        address,
        updatedAt: new Date(),
      },
      { new: true }
    ).select('-password');

    res.json({ message: 'Profile updated successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

// Upload profile photo
router.post('/upload-photo/:id', async (req, res) => {
  try {
    // TODO: Implement file upload with Cloudinary
    const photoUrl = req.body.photoUrl;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { profilePhoto: photoUrl },
      { new: true }
    ).select('-password');

    res.json({ message: 'Photo uploaded successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload photo' });
  }
});

// Get all faculty
router.get('/faculty', async (req, res) => {
  try {
    const faculty = await Faculty.find()
      .populate('userId', 'firstName lastName email phone profilePhoto')
      .populate('subjects');

    res.json(faculty);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch faculty' });
  }
});

// Get faculty by department
router.get('/faculty/department/:department', async (req, res) => {
  try {
    const faculty = await Faculty.find({ department: req.params.department })
      .populate('userId', 'firstName lastName email phone profilePhoto')
      .populate('subjects');

    res.json(faculty);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch faculty' });
  }
});

// Get all students
router.get('/students', async (req, res) => {
  try {
    const students = await Student.find()
      .populate('userId', 'firstName lastName email phone profilePhoto');

    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});

// Get students by branch and semester
router.get('/students/:branch/:semester', async (req, res) => {
  try {
    const students = await Student.find({
      branch: req.params.branch,
      semester: req.params.semester,
    }).populate('userId', 'firstName lastName email phone profilePhoto');

    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});

module.exports = router;
