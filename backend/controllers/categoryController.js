const Category = require('../models/Category');

exports.getCategories = async (req, res) => {
    const categories = await Category.find({ userId: req.user.id });
    res.json(categories);
};

exports.createCategory = async (req, res) => {
    const category = new Category({ ...req.body, userId: req.user.id });
    await category.save();
    res.json(category);
};

exports.updateCategory = async (req, res) => {
    const category = await Category.findOneAndUpdate(
        { _id: req.params.id, userId: req.user.id },
        { $set: req.body },
        { new: true }
    );
    res.json(category);
};

exports.deleteCategory = async (req, res) => {
    await Category.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    res.json({ msg: 'Категорію видалено' });
};