const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  eventDate: {
    type: Date,
    required: true,
  },
  startTime: String,
  endTime: String,
  location: String,
  category: {
    type: String,
    enum: ['academic', 'cultural', 'sports', 'technical', 'placement', 'other'],
  },
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  image: String,
  capacity: Number,
  registrations: [{
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    },
    registeredAt: Date,
  }],
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Event', eventSchema);
