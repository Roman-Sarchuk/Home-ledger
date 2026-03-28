const APIError = require("../utils/APIError");

const getAccounts = async (userId, pagination = {}) => {
  // Step 2: implement pagination parsing and user-scoped account query.
  throw new APIError(501, "Not implemented", "getAccounts is not implemented yet");
};

const getAccountById = async (userId, accountId) => {
  // Step 2: implement user-scoped account lookup and 404 handling.
  throw new APIError(
    501,
    "Not implemented",
    "getAccountById is not implemented yet",
  );
};

const createAccount = async (userId, payload) => {
  // Step 2: implement account creation, duplicate checks, and currency rules.
  throw new APIError(
    501,
    "Not implemented",
    "createAccount is not implemented yet",
  );
};

const updateAccount = async (userId, accountId, payload) => {
  // Step 2: implement partial updates and duplicate checks.
  throw new APIError(
    501,
    "Not implemented",
    "updateAccount is not implemented yet",
  );
};

const deleteAccount = async (userId, accountId) => {
  // Step 2: implement account deletion with cascade transaction delete.
  throw new APIError(
    501,
    "Not implemented",
    "deleteAccount is not implemented yet",
  );
};

module.exports = {
  getAccounts,
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount,
};
