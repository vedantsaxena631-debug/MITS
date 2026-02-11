const express = require('express');
const router = express.Router();
const Subject = require('../models/Subject');
const Timetable = require('../models/Timetable');

// Get all subjects
router.get('/subjects', async (req, res) => {
  try {
    const subjects = await Subject.find()
      .populate('faculty', 'firstName lastName email')
      .populate('studyMaterials.uploadedBy', 'firstName lastName');

    res.json(subjects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch subjects' });
  }
});

// Get subjects by branch and semester
router.get('/subjects/:branch/:semester', async (req, res) => {
  try {
    const subjects = await Subject.find({
      branch: req.params.branch,
      semester: req.params.semester,
    })
      .populate('faculty', 'firstName lastName email')
      .populate('studyMaterials.uploadedBy', 'firstName lastName');

    res.json(subjects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch subjects' });
  }
});

// Get subject details
router.get('/subjects/:id', async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id)
      .populate('faculty', 'firstName lastName email phone')
      .populate('studyMaterials.uploadedBy', 'firstName lastName');

    if (!subject) {
      return res.status(404).json({ error: 'Subject not found' });
    }

    res.json(subject);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch subject' });
  }
});

// Create subject (Admin only)
router.post('/subjects', async (req, res) => {
  try {
    const { code, name, branch, semester, credits, faculty, description } = req.body;

    const subject = new Subject({
      code,
      name,
      branch,
      semester,
      credits,
      faculty,
      description,
    });

    await subject.save();
    res.status(201).json({ message: 'Subject created successfully', subject });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create subject' });
  }
});

// Get timetable
router.get('/timetable/:branch/:semester/:section', async (req, res) => {
  try {
    const timetable = await Timetable.findOne({
      branch: req.params.branch,
      semester: req.params.semester,
      section: req.params.section,
    })
      .populate('schedule.subject', 'name code')
      .populate('schedule.faculty', 'firstName lastName');

    if (!timetable) {
      return res.status(404).json({ error: 'Timetable not found' });
    }

    res.json(timetable);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch timetable' });
  }
});

// Create timetable (Admin only)
router.post('/timetable', async (req, res) => {
  try {
    const { branch, semester, section, schedule, academicYear } = req.body;

    const timetable = new Timetable({
      branch,
      semester,
      section,
      schedule,
      academicYear,
    });

    await timetable.save();
    res.status(201).json({ message: 'Timetable created successfully', timetable });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create timetable' });
  }
});

// Upload study material
router.post('/subjects/:id/study-material', async (req, res) => {
  try {
    const { title, type, url } = req.body;

    const subject = await Subject.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          studyMaterials: {
            title,
            type,
            url,
            uploadedAt: new Date(),
          },
        },
      },
      { new: true }
    );

    res.json({ message: 'Study material uploaded successfully', subject });
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload study material' });
  }
});

module.exports = router;
