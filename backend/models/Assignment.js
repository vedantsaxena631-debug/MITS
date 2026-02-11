const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true,
  },
  faculty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  instructions: String,
  attachments: [{
    name: String,
    url: String,
    uploadedAt: Date,
  }],
  dueDate: {
    type: Date,
    required: true,
  },
  totalMarks: {
    type: Number,
    default: 10,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Assignment', assignmentSchema);
