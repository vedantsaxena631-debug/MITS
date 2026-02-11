const express = require('express');
const router = express.Router();
const Assignment = require('../models/Assignment');
const AssignmentSubmission = require('../models/AssignmentSubmission');

// Create assignment
router.post('/', async (req, res) => {
  try {
    const { subject, faculty, title, description, instructions, dueDate, totalMarks } = req.body;

    const assignment = new Assignment({
      subject,
      faculty,
      title,
      description,
      instructions,
      dueDate,
      totalMarks,
    });

    await assignment.save();
    res.status(201).json({ message: 'Assignment created successfully', assignment });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create assignment' });
  }
});

// Get assignments for subject
router.get('/subject/:subjectId', async (req, res) => {
  try {
    const assignments = await Assignment.find({ subject: req.params.subjectId })
      .populate('faculty', 'firstName lastName')
      .sort({ dueDate: 1 });

    res.json(assignments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch assignments' });
  }
});

// Get assignment details
router.get('/:id', async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id)
      .populate('faculty', 'firstName lastName email')
      .populate('subject', 'name code');

    if (!assignment) {
      return res.status(404).json({ error: 'Assignment not found' });
    }

    res.json(assignment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch assignment' });
  }
});

// Submit assignment
router.post('/:assignmentId/submit', async (req, res) => {
  try {
    const { studentId, submissionFile } = req.body;

    const submission = new AssignmentSubmission({
      assignment: req.params.assignmentId,
      student: studentId,
      submissionFile,
      submittedAt: new Date(),
    });

    await submission.save();
    res.status(201).json({ message: 'Assignment submitted successfully', submission });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit assignment' });
  }
});

// Get submissions for assignment
router.get('/:assignmentId/submissions', async (req, res) => {
  try {
    const submissions = await AssignmentSubmission.find({ assignment: req.params.assignmentId })
      .populate('student', 'firstName lastName')
      .populate('gradedBy', 'firstName lastName');

    res.json(submissions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch submissions' });
  }
});

// Grade submission
router.put('/submission/:submissionId/grade', async (req, res) => {
  try {
    const { marks, feedback, gradedBy } = req.body;

    const submission = await AssignmentSubmission.findByIdAndUpdate(
      req.params.submissionId,
      {
        marks,
        feedback,
        gradedBy,
        gradedAt: new Date(),
      },
      { new: true }
    );

    res.json({ message: 'Submission graded successfully', submission });
  } catch (error) {
    res.status(500).json({ error: 'Failed to grade submission' });
  }
});

module.exports = router;
