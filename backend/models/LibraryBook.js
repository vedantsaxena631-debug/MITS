const mongoose = require('mongoose');

const librarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: String,
  isbn: {
    type: String,
    unique: true,
  },
  publisher: String,
  publicationYear: Number,
  category: String,
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
  },
  totalCopies: {
    type: Number,
    required: true,
  },
  availableCopies: {
    type: Number,
    required: true,
  },
  location: String,
  shelfNumber: String,
  description: String,
  coverImage: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('LibraryBook', librarySchema);
