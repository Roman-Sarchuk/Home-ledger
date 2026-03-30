const mongoose = require('mongoose');

const ALLOWED_TYPES = ["income", "expense"];

const CategorySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    type: { type: String, enum: ALLOWED_TYPES, required: true },
    createdAt: { type: Date, default: Date.now }
});

CategorySchema.index({ userId: 1, name: 1, type: 1 }, { unique: true });

CategorySchema.methods.toPublicJSON = function() {
    return {
        id: this._id.toString(),
        name: this.name,
        type: this.type,
    };
};

CategorySchema.methods.getAllowedTypes = function() {
    return ALLOWED_TYPES;
};

module.exports = mongoose.model('Category', CategorySchema);