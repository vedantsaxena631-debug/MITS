const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  rollNumber: {
    type: String,
    required: true,
    unique: true,
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
  section: {
    type: String,
    required: true,
  },
  admissionYear: {
    type: Number,
    required: true,
  },
  cgpa: {
    type: Number,
    default: 0,
  },
  sgpa: {
    type: Number,
    default: 0,
  },
  creditsEarned: {
    type: Number,
    default: 0,
  },
  creditsPending: {
    type: Number,
    default: 0,
  },
  fatherName: String,
  motherName: String,
  parentPhone: String,
  hostelName: String,
  roomNumber: String,
  emergencyContact: String,
  bloodGroup: String,
  aadharNumber: String,
  digitalIdCard: {
    qrCode: String,
    issuedDate: Date,
    expiryDate: Date,
  },
  documents: [{
    name: String,
    url: String,
    uploadedAt: Date,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Student', studentSchema);
