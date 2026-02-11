const express = require('express');
const router = express.Router();
const Result = require('../models/Result');
const Student = require('../models/Student');

// Get results for student
router.get('/student/:studentId', async (req, res) => {
  try {
    const results = await Result.find({ student: req.params.studentId })
      .populate('subject', 'name code credits')
      .sort({ semester: 1 });

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch results' });
  }
});

// Get results for subject
router.get('/subject/:subjectId', async (req, res) => {
  try {
    const results = await Result.find({ subject: req.params.subjectId })
      .populate('student', 'firstName lastName')
      .sort({ totalMarks: -1 });

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch results' });
  }
});

// Publish results
router.post('/publish', async (req, res) => {
  try {
    const { subjectId, semester } = req.body;

    const results = await Result.updateMany(
      { subject: subjectId, semester },
      { publishedAt: new Date() }
    );

    res.json({ message: 'Results published successfully', modifiedCount: results.modifiedCount });
  } catch (error) {
    res.status(500).json({ error: 'Failed to publish results' });
  }
});

// Calculate SGPA
router.get('/sgpa/:studentId/:semester', async (req, res) => {
  try {
    const results = await Result.find({
      student: req.params.studentId,
      semester: req.params.semester,
    });

    let totalGradePoints = 0;
    let totalCredits = 0;

    results.forEach(result => {
      totalGradePoints += result.gradePoint * result.credits;
      totalCredits += result.credits;
    });

    const sgpa = totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0;

    // Update student SGPA
    await Student.findByIdAndUpdate(
      req.params.studentId,
      { sgpa }
    );

    res.json({ sgpa, totalCredits });
  } catch (error) {
    res.status(500).json({ error: 'Failed to calculate SGPA' });
  }
});

// Calculate CGPA
router.get('/cgpa/:studentId', async (req, res) => {
  try {
    const results = await Result.find({ student: req.params.studentId });

    let totalGradePoints = 0;
    let totalCredits = 0;

    results.forEach(result => {
      totalGradePoints += result.gradePoint * result.credits;
      totalCredits += result.credits;
    });

    const cgpa = totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0;

    // Update student CGPA
    await Student.findByIdAndUpdate(
      req.params.studentId,
      { cgpa }
    );

    res.json({ cgpa, totalCredits });
  } catch (error) {
    res.status(500).json({ error: 'Failed to calculate CGPA' });
  }
});

// Add result
router.post('/', async (req, res) => {
  try {
    const { student, subject, semester, internalMarks, externalMarks, credits } = req.body;

    const totalMarks = internalMarks + externalMarks;
    let grade, gradePoint;

    if (totalMarks >= 90) {
      grade = 'A+';
      gradePoint = 4.0;
    } else if (totalMarks >= 80) {
      grade = 'A';
      gradePoint = 3.7;
    } else if (totalMarks >= 70) {
      grade = 'B+';
      gradePoint = 3.3;
    } else if (totalMarks >= 60) {
      grade = 'B';
      gradePoint = 3.0;
    } else if (totalMarks >= 50) {
      grade = 'C+';
      gradePoint = 2.3;
    } else if (totalMarks >= 40) {
      grade = 'C';
      gradePoint = 2.0;
    } else if (totalMarks >= 30) {
      grade = 'D';
      gradePoint = 1.0;
    } else {
      grade = 'F';
      gradePoint = 0.0;
    }

    const creditEarned = gradePoint > 0 ? credits : 0;

    const result = new Result({
      student,
      subject,
      semester,
      internalMarks,
      externalMarks,
      totalMarks,
      grade,
      gradePoint,
      credits,
      creditEarned,
    });

    await result.save();
    res.status(201).json({ message: 'Result added successfully', result });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add result' });
  }
});

module.exports = router;
