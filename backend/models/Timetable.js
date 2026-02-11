const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
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
  schedule: [{
    day: {
      type: String,
      enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    },
    period: Number,
    startTime: String,
    endTime: String,
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject',
    },
    faculty: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Faculty',
    },
    classroom: String,
    type: {
      type: String,
      enum: ['lecture', 'practical', 'lab'],
    },
  }],
  academicYear: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Timetable', timetableSchema);
