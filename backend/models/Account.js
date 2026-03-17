const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true }, // наприклад, "Готівка", "Монобанк"
    type: { type: String, enum: ['cash', 'bank', 'card', 'electronic'], required: true },
    balance: { type: Number, default: 0, min: 0 },
    currency: { type: String, default: 'UAH' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Account', AccountSchema);