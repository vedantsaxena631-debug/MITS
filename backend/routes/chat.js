const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Send message
router.post('/send', async (req, res) => {
  try {
    const { senderId, receiverId, content, attachments } = req.body;

    const message = new Message({
      sender: senderId,
      receiver: receiverId,
      content,
      attachments,
    });

    await message.save();
    res.status(201).json({ message: 'Message sent successfully', data: message });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Get conversation
router.get('/conversation/:userId1/:userId2', async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [
        { sender: req.params.userId1, receiver: req.params.userId2 },
        { sender: req.params.userId2, receiver: req.params.userId1 },
      ],
    })
      .populate('sender', 'firstName lastName profilePhoto')
      .populate('receiver', 'firstName lastName profilePhoto')
      .sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch conversation' });
  }
});

// Get inbox
router.get('/inbox/:userId', async (req, res) => {
  try {
    const messages = await Message.find({ receiver: req.params.userId })
      .populate('sender', 'firstName lastName profilePhoto')
      .sort({ createdAt: -1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch inbox' });
  }
});

// Mark message as read
router.put('/:messageId/read', async (req, res) => {
  try {
    const message = await Message.findByIdAndUpdate(
      req.params.messageId,
      {
        isRead: true,
        readAt: new Date(),
      },
      { new: true }
    );

    res.json({ message: 'Message marked as read', data: message });
  } catch (error) {
    res.status(500).json({ error: 'Failed to mark message as read' });
  }
});

// Get unread count
router.get('/unread/:userId', async (req, res) => {
  try {
    const unreadCount = await Message.countDocuments({
      receiver: req.params.userId,
      isRead: false,
    });

    res.json({ unreadCount });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch unread count' });
  }
});

module.exports = router;
