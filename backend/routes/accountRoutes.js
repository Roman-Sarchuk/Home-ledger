const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const accountController = require('../controllers/accountController');

router.use(auth); // Захищаємо всі маршрути

router.get('/', accountController.getAccounts);
router.post('/', accountController.createAccount);
router.put('/:id', accountController.updateAccount);
router.delete('/:id', accountController.deleteAccount);

module.exports = router;