const User = require('../models/User');
const hashPassword = require('../utils/hashPassword');
const generateToken = require('../utils/generateToken');
const APIError = require('../utils/APIError');

const register = async (name, email, password) => {
  const existingUser = await User.findOne({ email });
  if (existingUser)
    throw new APIError(409, "User already exists");

  const hashed = await hashPassword(password);

  const user = await User.create({
    name,
    email,
    passwordHash: hashed,
  });

  return {
    user: user.toPublicJSON(),
    token: generateToken(user.getId()),
  };
};

const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user)
    throw new APIError(401, "Invalid credentials");

  const isMatch = await user.checkPassword(password);
  if (!isMatch)
    throw new APIError(401, "Invalid credentials");

  return {
    user: user.toPublicJSON(),
    token: generateToken(user.getId()),
  };
};

module.exports = {
  register,
  login,
};