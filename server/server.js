const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, 'build')));

// Handle other routes by serving the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// server.js

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Recipe = require('./models/recipe'); // Adjust the path based on your project structure

// Connect to MongoDB
mongoose.connect('mongodb+srv://rey:123@cluster0.aebipfg.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });