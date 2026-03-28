const accountService = require("../services/accountService");

exports.getAccounts = async (req, res) => {
  const userId = req.user.id;
  const { page, limit } = req.query;

  // Step 2: add controller-level validation for pagination params.
  const result = await accountService.getAccounts(userId, { page, limit });

  res.status(200).json(result);
};

exports.getAccountById = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;

  // Step 2: add controller-level validation for account id.
  const result = await accountService.getAccountById(userId, id);

  res.status(200).json(result);
};

exports.createAccount = async (req, res) => {
  const userId = req.user.id;
  const { name, currency } = req.body;

  // Step 2: add controller-level payload validation.
  const result = await accountService.createAccount(userId, { name, currency });

  res.status(201).json(result);
};

exports.updateAccount = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;
  const { name, currency } = req.body;

  // Step 2: add controller-level payload validation.
  const result = await accountService.updateAccount(userId, id, {
    name,
    currency,
  });

  res.status(200).json(result);
};

exports.deleteAccount = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;

  const resultCode = await accountService.deleteAccount(userId, id);

  res.status(resultCode).send();
};