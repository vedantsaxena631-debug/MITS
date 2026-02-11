const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true,
  },
  semester: {
    type: Number,
    min: 1,
    max: 8,
    required: true,
  },
  internalMarks: {
    type: Number,
    max: 30,
  },
  externalMarks: {
    type: Number,
    max: 70,
  },
  totalMarks: {
    type: Number,
    max: 100,
  },
  grade: {
    type: String,
    enum: ['A+', 'A', 'B+', 'B', 'C+', 'C', 'D', 'F'],
  },
  gradePoint: Number,
  credits: Number,
  creditEarned: Number,
  resultDate: Date,
  publishedAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Result', resultSchema);
