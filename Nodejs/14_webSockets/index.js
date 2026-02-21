const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const path = require('path');

// Models
const User = require('./models/User');
const Message = require('./models/Message');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const JWT_SECRET = 'ilsSrinagar123';

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/chat-app')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Configuration
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Auth Middleware
const isAuthenticated = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.redirect('/login');
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Store decoded user info (userId, username) in req.user
    next();
  } catch (err) {
    res.clearCookie('token');
    res.redirect('/login');
  }
};

// Routes
app.get('/', isAuthenticated, (req, res) => {
  res.redirect('/dashboard');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.render('register', { error: 'Username already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.redirect('/login');
  } catch (err) {
    res.render('register', { error: 'Something went wrong' });
  }
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
      // Create JWT
      const token = jwt.sign(
        { userId: user._id, username: user.username },
        JWT_SECRET,
        { expiresIn: '24h' }
      );
      
      // Set JWT in an HTTP-only cookie
      res.cookie('token', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
      });
      
      res.redirect('/dashboard');
    } else {
      res.render('login', { error: 'Invalid username or password' });
    }
  } catch (err) {
    res.render('login', { error: 'Something went wrong' });
  }
});

app.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/login');
});

app.get('/dashboard', isAuthenticated, async (req, res) => {
  try {
    const users = await User.find({ _id: { $ne: req.user.userId } });
    const currentUser = { _id: req.user.userId, username: req.user.username };
    res.render('dashboard', { user: currentUser, users });
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
});

// Fetch chat history
app.get('/chat-history/:receiverId', isAuthenticated, async (req, res) => {
  try {
    const senderId = req.user.userId;
    const receiverId = req.params.receiverId;
    
    const messages = await Message.find({
      $or: [
        { sender: senderId, receiver: receiverId },
        { sender: receiverId, receiver: senderId }
      ]
    }).sort({ timestamp: 1 });

    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch history' });
  }
});

// Socket.io logic
const userSockets = new Map(); // Store userId -> socketId mapping

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('register', (userId) => {
    userSockets.set(userId, socket.id);
    console.log(`User ${userId} registered with socket ${socket.id}`);
  });

  socket.on('private_message', async (data) => {
    const { senderId, receiverId, message } = data;
    
    try {
      // Save message to DB
      const newMessage = new Message({
        sender: senderId,
        receiver: receiverId,
        message: message
      });
      await newMessage.save();

      // Send message to receiver if they are online
      const receiverSocketId = userSockets.get(receiverId);
      if (receiverSocketId) {
        io.to(receiverSocketId).emit('receive_message', {
          sender: senderId,
          message: message
        });
      }
    } catch (err) {
      console.error('Error saving message:', err);
    }
  });

  socket.on('disconnect', () => {
    // Remove user from mapping on disconnect
    for (const [userId, socketId] of userSockets.entries()) {
      if (socketId === socket.id) {
        userSockets.delete(userId);
        break;
      }
    }
    console.log('User disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
