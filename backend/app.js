const express = require('express');
const cors = require('cors');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Connect routes
// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/accounts', require('./routes/accountRoutes'));
// app.use('/api/categories', require('./routes/categoryRoutes'));
// app.use('/api/transactions', require('./routes/transactionRoutes'));

// root route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is working' });
});


module.exports = app;