const express = require('express');
const cors = require('cors');

const app = express();

const errorHandler = require('./middleware/errorHandler');

// middleware
app.use(cors());
app.use(express.json());

// Connect routes
app.use('/api/v1/auth', require('./routes/authRoutes'));
// app.use('/api/accounts', require('./routes/accountRoutes'));
// app.use('/api/categories', require('./routes/categoryRoutes'));
// app.use('/api/transactions', require('./routes/transactionRoutes'));

// root route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is working' });
});


// error handling middleware
app.use(errorHandler);

module.exports = app;