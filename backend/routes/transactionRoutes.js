const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const transController = require('../controllers/transactionController');

router.use(auth);
router.get('/', transController.getTransactions);
router.post('/', transController.createTransaction);
router.delete('/:id', transController.deleteTransaction);

module.exports = router;