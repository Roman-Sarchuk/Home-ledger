const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { registerUser, loginUser, deleteMe, patchMe } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);

router.delete('/me', auth, deleteMe);
router.patch('/me', auth, patchMe);

module.exports = router;