const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    type: { type: String, enum: ['income', 'expense'], required: true },
    createdAt: { type: Date, default: Date.now }
});

CategorySchema.methods.toPublicJSON = function() {
    return {
        id: this._id.toString(),
        name: this.name,
        type: this.type,
    };
};

module.exports = mongoose.model('Category', CategorySchema);