const Transaction = require('../models/Transaction');
const Account = require('../models/Account');

exports.getTransactions = async (req, res) => {
    const transactions = await Transaction.find({ userId: req.user.id })
        .populate('accountId', 'name')
        .populate('categoryId', 'name type')
        .sort({ createdAt: -1 });
    res.json(transactions);
};

exports.createTransaction = async (req, res) => {
    const { accountId, amount, categoryId, type } = req.body; // type: income/expense
    
    const transaction = new Transaction({ ...req.body, userId: req.user.id });
    await transaction.save();

    // Оновлення балансу рахунку
    const change = type === 'income' ? amount : -amount;
    await Account.findByIdAndUpdate(accountId, { $inc: { balance: change } });

    res.json(transaction);
};

exports.deleteTransaction = async (req, res) => {
    const transaction = await Transaction.findOne({ _id: req.params.id, userId: req.user.id });
    if (!transaction) return res.status(404).json({ msg: 'Транзакція не знайдена' });

    // Повертаємо баланс назад перед видаленням
    await Account.findByIdAndUpdate(transaction.accountId, { $inc: { balance: -transaction.amount } });
    await Transaction.findByIdAndDelete(req.params.id);

    res.json({ msg: 'Транзакцію видалено' });
};