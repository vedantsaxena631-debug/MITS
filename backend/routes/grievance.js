const express = require('express');
const router = express.Router();
const Grievance = require('../models/Grievance');

// Create grievance
router.post('/', async (req, res) => {
  try {
    const { studentId, title, description, category, priority, attachments } = req.body;

    const grievance = new Grievance({
      student: studentId,
      title,
      description,
      category,
      priority,
      attachments,
    });

    await grievance.save();
    res.status(201).json({ message: 'Grievance filed successfully', grievance });
  } catch (error) {
    res.status(500).json({ error: 'Failed to file grievance' });
  }
});

// Get grievances for student
router.get('/student/:studentId', async (req, res) => {
  try {
    const grievances = await Grievance.find({ student: req.params.studentId })
      .populate('assignedTo', 'firstName lastName')
      .sort({ createdAt: -1 });

    res.json(grievances);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch grievances' });
  }
});

// Get all grievances (Admin)
router.get('/', async (req, res) => {
  try {
    const grievances = await Grievance.find()
      .populate('student', 'firstName lastName')
      .populate('assignedTo', 'firstName lastName')
      .sort({ createdAt: -1 });

    res.json(grievances);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch grievances' });
  }
});

// Get grievance details
router.get('/:id', async (req, res) => {
  try {
    const grievance = await Grievance.findById(req.params.id)
      .populate('student', 'firstName lastName email')
      .populate('assignedTo', 'firstName lastName email');

    if (!grievance) {
      return res.status(404).json({ error: 'Grievance not found' });
    }

    res.json(grievance);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch grievance' });
  }
});

// Update grievance status
router.put('/:id/status', async (req, res) => {
  try {
    const { status, resolution, assignedTo } = req.body;

    const grievance = await Grievance.findByIdAndUpdate(
      req.params.id,
      {
        status,
        resolution,
        assignedTo,
        resolvedAt: status === 'resolved' ? new Date() : null,
        updatedAt: new Date(),
      },
      { new: true }
    );

    res.json({ message: 'Grievance updated successfully', grievance });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update grievance' });
  }
});

// Add feedback
router.put('/:id/feedback', async (req, res) => {
  try {
    const { feedback } = req.body;

    const grievance = await Grievance.findByIdAndUpdate(
      req.params.id,
      { feedback },
      { new: true }
    );

    res.json({ message: 'Feedback added successfully', grievance });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add feedback' });
  }
});

module.exports = router;
