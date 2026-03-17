const express = require('express');
const cors = require('cors');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// testing route
app.get('/', (req, res) => {
  res.send('API works 🚀');
});

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from backend' });
});

module.exports = app;