const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    name: { type: String, required: true },
    balance: { type: Number, default: 0 },
    currency: { type: String, default: 'UAH' },
    createdAt: { type: Date, default: Date.now }
});

AccountSchema.methods.toPublicJSON = function() {
    return {
        id: this._id.toString(),
        name: this.name,
        balance: this.balance,
        currency: this.currency,
    };
};

module.exports = mongoose.model('Account', AccountSchema);