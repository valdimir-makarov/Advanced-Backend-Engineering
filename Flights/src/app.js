const express = require('express');
const dotenv = require('dotenv');
const {AboutController}=require("./controllers/index")
// Load environment variables
dotenv.config();
const MainRouter= require('./routes');
const validateRequests = require('./middlewares/airplane-middleware');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(validateRequests);
// Routes

app.use('/api',MainRouter);
// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Express.js Template!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

module.exports = app;