const Account = require('../models/Account');

exports.getAccounts = async (req, res) => {
    try {
        const accounts = await Account.find({ userId: req.user.id });
        res.json(accounts);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.createAccount = async (req, res) => {
    try {
        const newAccount = new Account({ ...req.body, userId: req.user.id });
        const account = await newAccount.save();
        res.json(account);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.updateAccount = async (req, res) => {
    try {
        const account = await Account.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.id },
            { $set: req.body },
            { new: true }
        );
        if (!account) return res.status(404).json({ msg: 'Рахунок не знайдено' });
        res.json(account);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.deleteAccount = async (req, res) => {
    try {
        const account = await Account.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
        if (!account) return res.status(404).json({ msg: 'Рахунок не знайдено' });
        res.json({ msg: 'Рахунок видалено' });
    } catch (err) {
        res.status(500).send('Server error');
    }
};