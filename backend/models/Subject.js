const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    enum: ['CSE', 'ECE', 'ME', 'CE', 'EE', 'IT'],
    required: true,
  },
  semester: {
    type: Number,
    min: 1,
    max: 8,
    required: true,
  },
  credits: {
    type: Number,
    required: true,
  },
  faculty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty',
  },
  description: String,
  syllabus: {
    url: String,
    uploadedAt: Date,
  },
  studyMaterials: [{
    title: String,
    type: String, // notes, ppt, pdf, lab_manual, previous_papers
    url: String,
    uploadedAt: Date,
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Faculty',
    },
  }],
  practicalHours: Number,
  theoryHours: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Subject', subjectSchema);
