const express = require('express');
const router = express.Router();
const Notice = require('../models/Notice');

// Get all notices
router.get('/', async (req, res) => {
  try {
    const notices = await Notice.find({ isActive: true })
      .populate('postedBy', 'firstName lastName')
      .sort({ createdAt: -1 });

    res.json(notices);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notices' });
  }
});

// Get notice details
router.get('/:id', async (req, res) => {
  try {
    const notice = await Notice.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    ).populate('postedBy', 'firstName lastName email');

    if (!notice) {
      return res.status(404).json({ error: 'Notice not found' });
    }

    res.json(notice);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notice' });
  }
});

// Create notice
router.post('/', async (req, res) => {
  try {
    const { title, content, category, priority, postedBy, targetAudience, expiryDate } = req.body;

    const notice = new Notice({
      title,
      content,
      category,
      priority,
      postedBy,
      targetAudience,
      expiryDate,
    });

    await notice.save();
    res.status(201).json({ message: 'Notice posted successfully', notice });
  } catch (error) {
    res.status(500).json({ error: 'Failed to post notice' });
  }
});

// Get notices by category
router.get('/category/:category', async (req, res) => {
  try {
    const notices = await Notice.find({ category: req.params.category, isActive: true })
      .populate('postedBy', 'firstName lastName')
      .sort({ createdAt: -1 });

    res.json(notices);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notices' });
  }
});

// Get urgent notices
router.get('/priority/urgent', async (req, res) => {
  try {
    const notices = await Notice.find({ priority: 'urgent', isActive: true })
      .populate('postedBy', 'firstName lastName')
      .sort({ createdAt: -1 });

    res.json(notices);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notices' });
  }
});

module.exports = router;
