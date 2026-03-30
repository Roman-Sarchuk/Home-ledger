const mongoose = require('mongoose');

const ALLOWED_TYPES = ["income", "expense"];

const DEFAULT_SYSTEM_CATEGORIES = [
  { name: "Income", type: "income" },
  { name: "Expense", type: "expense" },
];

const CategorySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    type: { type: String, enum: ALLOWED_TYPES, required: true },
    isSystem: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

CategorySchema.index({ userId: 1, name: 1, type: 1 }, { unique: true });

CategorySchema.methods.toPublicJSON = function() {
    return {
        id: this._id.toString(),
        name: this.name,
        type: this.type,
        isSystem: this.isSystem,
    };
};

CategorySchema.methods.getAllowedTypes = function() {
    return ALLOWED_TYPES;
};

const Category = mongoose.model('Category', CategorySchema);

module.exports = {
    Category,
    ALLOWED_TYPES,
    DEFAULT_SYSTEM_CATEGORIES,
}