const User = require('../models/User');
const hashPassword = require('../utils/hashPassword');
const generateToken = require('../utils/generateToken');
const APIError = require('../utils/APIError');

const register = async (name, email, password) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new APIError('User already exists', 409);
  }

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
  if (!user) {
    throw new APIError('Invalid credentials', 401);
  }

  const isMatch = await user.checkPassword(password);
  if (!isMatch) {
    throw new APIError('Invalid credentials', 401);
  }

  return {
    user: user.toPublicJSON(),
    token: generateToken(user.getId()),
  };
};

const getMe = async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new APIError('Invalid user ID', 400);
    }

    const user = await User.findById(id);
    if (!user) {
        throw new APIError('User not found', 404);
    }

    return {
        user: user.toPublicJSON()
    };
};

const updateMe = async (id, name) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new APIError('Invalid user ID', 400);
    }

    const user = await User.findByIdAndUpdate(
        id,
        { $set: { name } },
        { new: true }
    );
    if (!user) {
        throw new APIError('User not found', 404);
    }

    return {
        user: user.toPublicJSON()
    };
};

const deleteMe = async (id, email, password) => {
    await login(email, password); // will throw if credentials are invalid

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new APIError('Invalid user ID', 400);
    }

    const user = await User.findByIdAndDelete(id);
    if (!user) {
        throw new APIError('User not found', 404);
    }

    return 204; // No content
};

module.exports = {
  register,
  login,
  getMe,
  updateMe,
  deleteMe
};