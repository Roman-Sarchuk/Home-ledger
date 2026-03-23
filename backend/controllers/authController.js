const authService = require("../services/authService");
const APIError = require("../utils/APIError");


exports.register = async (req, res) => {
  // Get user input
  const { name, email, password } = req.body;

  // Validate user input
  if (!name || name.trim() === "") {
    throw new APIError(400, "Incorrect parameters", "Name are required");
  } else if (!email || email.trim() === "") {
    throw new APIError(400, "Incorrect parameters", "Email are required");
  } else if (!password || password.trim() === "") {
    throw new APIError(400, "Incorrect parameters", "Password are required");
  }

  // Perform logic
  const result = await authService.register(name, email, password);

  // Send response
  res.status(201).json(result);
};

exports.login = async (req, res) => {
  // Get user input
  const { email, password } = req.body;

  // Validate user input
  if (!email || email.trim() === "") {
    throw new APIError(400, "Incorrect parameters", "Email are required");
  } else if (!password || password.trim() === "") {
    throw new APIError(400, "Incorrect parameters", "Password are required");
  }

  // Perform logic
  const result = await authService.login(email, password);

  // Send response
  res.status(200).json(result);
};
