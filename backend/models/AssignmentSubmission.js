const mongoose = require('mongoose');

const assignmentSubmissionSchema = new mongoose.Schema({
  assignment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Assignment',
    required: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  submissionFile: {
    name: String,
    url: String,
    uploadedAt: Date,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  isLate: Boolean,
  marks: Number,
  feedback: String,
  gradedAt: Date,
  gradedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('AssignmentSubmission', assignmentSubmissionSchema);
