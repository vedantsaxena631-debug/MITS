const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  employeeId: {
    type: String,
    required: true,
    unique: true,
  },
  department: {
    type: String,
    enum: ['CSE', 'ECE', 'ME', 'CE', 'EE', 'IT'],
    required: true,
  },
  designation: {
    type: String,
    enum: ['Professor', 'Associate Professor', 'Assistant Professor', 'Lecturer'],
    required: true,
  },
  qualification: [String],
  specialization: String,
  experience: Number,
  officeLocation: String,
  officePhone: String,
  consultationHours: [{
    day: String,
    startTime: String,
    endTime: String,
  }],
  subjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
  }],
  bio: String,
  researchInterests: [String],
  publications: [{
    title: String,
    journal: String,
    year: Number,
    url: String,
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

module.exports = mongoose.model('Faculty', facultySchema);
