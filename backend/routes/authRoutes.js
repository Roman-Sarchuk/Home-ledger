const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { registerUser, loginUser, deleteMe, patchMe } = require('../controllers/authController');

// Префікс /api/v1/auth додасться в server.js
router.post('/register', registerUser);
router.post('/login', loginUser);

// Маршрути для поточного юзера
router.delete('/me', auth, deleteMe);
router.patch('/me', auth, patchMe);

module.exports = router;