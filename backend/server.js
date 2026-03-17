require('dotenv').config();

const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 3000;

// connect to DB
connectDB();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});