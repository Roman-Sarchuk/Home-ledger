const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    accountId: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    amount: { type: Number, required: true },
    description: { type: String, trim: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', TransactionSchema);