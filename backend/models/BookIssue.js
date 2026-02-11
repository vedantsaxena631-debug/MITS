const mongoose = require('mongoose');

const bookIssueSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LibraryBook',
    required: true,
  },
  issueDate: {
    type: Date,
    default: Date.now,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  returnDate: Date,
  status: {
    type: String,
    enum: ['issued', 'returned', 'overdue'],
    default: 'issued',
  },
  fine: {
    type: Number,
    default: 0,
  },
  finePaid: {
    type: Boolean,
    default: false,
  },
  remarks: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('BookIssue', bookIssueSchema);
