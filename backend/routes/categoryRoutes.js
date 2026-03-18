const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const catController = require('../controllers/categoryController');

router.use(auth);
router.get('/', catController.getCategories);
router.post('/', catController.createCategory);
router.put('/:id', catController.updateCategory);
router.delete('/:id', catController.deleteCategory);

module.exports = router;