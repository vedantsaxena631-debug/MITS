const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');

// Create payment
router.post('/', async (req, res) => {
  try {
    const { studentId, amount, paymentType, description, semester, academicYear, dueDate } = req.body;

    const payment = new Payment({
      student: studentId,
      amount,
      paymentType,
      description,
      semester,
      academicYear,
      dueDate,
      status: 'pending',
    });

    await payment.save();
    res.status(201).json({ message: 'Payment created successfully', payment });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create payment' });
  }
});

// Get payments for student
router.get('/student/:studentId', async (req, res) => {
  try {
    const payments = await Payment.find({ student: req.params.studentId })
      .sort({ createdAt: -1 });

    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch payments' });
  }
});

// Get all payments (Admin)
router.get('/', async (req, res) => {
  try {
    const payments = await Payment.find()
      .populate('student', 'firstName lastName')
      .sort({ createdAt: -1 });

    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch payments' });
  }
});

// Process payment
router.post('/:paymentId/process', async (req, res) => {
  try {
    const { transactionId, paymentMethod, receipt } = req.body;

    const payment = await Payment.findByIdAndUpdate(
      req.params.paymentId,
      {
        status: 'completed',
        transactionId,
        paymentMethod,
        receipt,
        paidDate: new Date(),
      },
      { new: true }
    );

    res.json({ message: 'Payment processed successfully', payment });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process payment' });
  }
});

// Get pending payments
router.get('/status/pending', async (req, res) => {
  try {
    const payments = await Payment.find({ status: 'pending' })
      .populate('student', 'firstName lastName')
      .sort({ dueDate: 1 });

    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pending payments' });
  }
});

module.exports = router;
