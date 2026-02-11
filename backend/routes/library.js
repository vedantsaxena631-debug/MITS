const express = require('express');
const router = express.Router();
const LibraryBook = require('../models/LibraryBook');
const BookIssue = require('../models/BookIssue');

// Get all books
router.get('/books', async (req, res) => {
  try {
    const books = await LibraryBook.find()
      .populate('subject', 'name code');

    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

// Search books
router.get('/books/search/:query', async (req, res) => {
  try {
    const books = await LibraryBook.find({
      $or: [
        { title: { $regex: req.params.query, $options: 'i' } },
        { author: { $regex: req.params.query, $options: 'i' } },
        { isbn: req.params.query },
      ],
    });

    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search books' });
  }
});

// Get book details
router.get('/books/:id', async (req, res) => {
  try {
    const book = await LibraryBook.findById(req.params.id)
      .populate('subject', 'name code');

    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch book' });
  }
});

// Issue book
router.post('/issue', async (req, res) => {
  try {
    const { studentId, bookId, dueDate } = req.body;

    const book = await LibraryBook.findById(bookId);
    if (!book || book.availableCopies <= 0) {
      return res.status(400).json({ error: 'Book not available' });
    }

    const bookIssue = new BookIssue({
      student: studentId,
      book: bookId,
      dueDate,
    });

    await bookIssue.save();

    // Decrease available copies
    await LibraryBook.findByIdAndUpdate(bookId, {
      $inc: { availableCopies: -1 },
    });

    res.status(201).json({ message: 'Book issued successfully', bookIssue });
  } catch (error) {
    res.status(500).json({ error: 'Failed to issue book' });
  }
});

// Return book
router.post('/return/:issueId', async (req, res) => {
  try {
    const bookIssue = await BookIssue.findById(req.params.issueId);

    if (!bookIssue) {
      return res.status(404).json({ error: 'Issue record not found' });
    }

    const returnDate = new Date();
    const daysOverdue = Math.max(0, Math.floor((returnDate - bookIssue.dueDate) / (1000 * 60 * 60 * 24)));
    const fine = daysOverdue * 10; // 10 per day

    bookIssue.returnDate = returnDate;
    bookIssue.status = 'returned';
    bookIssue.fine = fine;
    await bookIssue.save();

    // Increase available copies
    await LibraryBook.findByIdAndUpdate(bookIssue.book, {
      $inc: { availableCopies: 1 },
    });

    res.json({ message: 'Book returned successfully', bookIssue });
  } catch (error) {
    res.status(500).json({ error: 'Failed to return book' });
  }
});

// Get student's issued books
router.get('/student/:studentId', async (req, res) => {
  try {
    const bookIssues = await BookIssue.find({ student: req.params.studentId })
      .populate('book', 'title author isbn')
      .sort({ issueDate: -1 });

    res.json(bookIssues);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch book issues' });
  }
});

module.exports = router;
