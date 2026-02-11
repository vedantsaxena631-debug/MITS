const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find({ isActive: true })
      .populate('organizer', 'firstName lastName')
      .sort({ eventDate: 1 });

    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

// Get event details
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
      .populate('organizer', 'firstName lastName email')
      .populate('registrations.student', 'firstName lastName');

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch event' });
  }
});

// Create event
router.post('/', async (req, res) => {
  try {
    const { title, description, eventDate, startTime, endTime, location, category, organizer, capacity } = req.body;

    const event = new Event({
      title,
      description,
      eventDate,
      startTime,
      endTime,
      location,
      category,
      organizer,
      capacity,
    });

    await event.save();
    res.status(201).json({ message: 'Event created successfully', event });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create event' });
  }
});

// Register for event
router.post('/:eventId/register', async (req, res) => {
  try {
    const { studentId } = req.body;

    const event = await Event.findByIdAndUpdate(
      req.params.eventId,
      {
        $push: {
          registrations: {
            student: studentId,
            registeredAt: new Date(),
          },
        },
      },
      { new: true }
    );

    res.json({ message: 'Registered for event successfully', event });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register for event' });
  }
});

// Get events by category
router.get('/category/:category', async (req, res) => {
  try {
    const events = await Event.find({ category: req.params.category, isActive: true })
      .populate('organizer', 'firstName lastName')
      .sort({ eventDate: 1 });

    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

module.exports = router;
