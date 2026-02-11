const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
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
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['present', 'absent', 'leave'],
    required: true,
  },
  markedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty',
  },
  remarks: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Index for faster queries
attendanceSchema.index({ student: 1, subject: 1, date: 1 });

module.exports = mongoose.model('Attendance', attendanceSchema);
