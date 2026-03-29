const APIError = require("./APIError");

const SUPPORTED_CURRENCIES = ["UAH", "USD", "EUR"];
const DEFAULT_CURRENCY = "UAH";

const validateCurrency = (currency) => {
  if (!SUPPORTED_CURRENCIES.includes(currency)) {
    throw new APIError(
      400,
      "Incorrect parameters",
      "Incorrect currency. It should be ISO 4217: UAH, USD, EUR",
    );
  }
};

module.exports = {
  SUPPORTED_CURRENCIES,
  DEFAULT_CURRENCY,
  validateCurrency
};