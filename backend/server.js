const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const socketIo = require('socket.io');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disable CSP for React app
  crossOriginEmbedderPolicy: false,
}));
app.use(compression());
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mits_college', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/academics', require('./routes/academics'));
app.use('/api/attendance', require('./routes/attendance'));
app.use('/api/assignments', require('./routes/assignments'));
app.use('/api/results', require('./routes/results'));
app.use('/api/events', require('./routes/events'));
app.use('/api/notices', require('./routes/notices'));
app.use('/api/library', require('./routes/library'));
app.use('/api/chat', require('./routes/chat'));
app.use('/api/grievance', require('./routes/grievance'));
app.use('/api/payments', require('./routes/payments'));
app.use('/api/admin', require('./routes/admin'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Serve React frontend in production
if (process.env.NODE_ENV === 'production') {
  // Serve static files from React build
  app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

  // For any route that doesn't match an API route, serve React's index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
  });
}

// Socket.io for real-time chat
io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);

  socket.on('join_room', (data) => {
    socket.join(data.room);
    socket.emit('message', `User joined room: ${data.room}`);
  });

  socket.on('send_message', (data) => {
    io.to(data.room).emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { app, io };
