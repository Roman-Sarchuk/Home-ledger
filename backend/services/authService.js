const mongoose = require("mongoose");
const User = require("../models/User");
const { Category, DEFAULT_SYSTEM_CATEGORIES } = require("../models/Category");
const hashPassword = require("../utils/hashPassword");
const generateToken = require("../utils/generateToken");
const APIError = require("../utils/APIError");
const sendEmail = require('../utils/sendEmail');

const register = async (name, email, password) => {
  // Validate user input
  if (!name || name.trim() === "") {
    throw new APIError(400, "Incorrect parameters", "Name are required");
  } else if (!email || email.trim() === "") {
    throw new APIError(400, "Incorrect parameters", "Email are required");
  } else if (!password || password.trim() === "") {
    throw new APIError(400, "Incorrect parameters", "Password are required");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new APIError(409, "User already exists");

  const hashed = await hashPassword(password);

  const session = await mongoose.startSession();
  let user;

  try {
    await session.withTransaction(async () => {
      user = new User({
        name,
        email,
        passwordHash: hashed,
      });

      await user.save({ session });

      const defaultCategories = DEFAULT_SYSTEM_CATEGORIES.map((category) => ({
        ...category,
        userId: user._id,
        isSystem: true,
      }));

      await Category.insertMany(defaultCategories, { session });
    });
  } finally {
    await session.endSession();
  }

  return {
    user: user.toPublicJSON(),
    token: generateToken(user.getId()),
  };
};

const login = async (email, password) => {
  // Validate user input
  if (!email || email.trim() === "") {
    throw new APIError(400, "Incorrect parameters", "Email are required");
  } else if (!password || password.trim() === "") {
    throw new APIError(400, "Incorrect parameters", "Password are required");
  }

  const user = await User.findOne({ email });
  if (!user) throw new APIError(401, "Invalid credentials");

  const isMatch = await user.checkPassword(password);
  if (!isMatch) throw new APIError(401, "Invalid credentials");

  return {
    user: user.toPublicJSON(),
    token: generateToken(user.getId()),
  };
};

const forgotPassword = async (email) => {
  // Validate user input
  if (!email || email.trim() === "") {
    throw new APIError(400, "Incorrect parameters", "Email are required");
  }

  const user = await User.findOne({ email });
  if (!user) throw new APIError(404, "User not found");

  // Generate reset token and expiration
  const resetToken = generateToken(user.getId());
  const resetPasswordExpire = new Date();
  resetPasswordExpire.setMinutes(resetPasswordExpire.getMinutes() + 10); // Token expires in 10 minutes

  // Save token and expiration to user document
  user.resetPasswordToken = resetToken;
  user.resetPasswordExpire = resetPasswordExpire;
  await user.save();

  // Send reset email
  const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

  const message = `
  Hello!
  We received a request to reset the password for your account. If this was you, click the link below (or copy and paste it into your browser) to set a new password:

  ${resetUrl}і

  This link is valid for only 10 minutes. If you did not request a password reset, simply ignore this email. Your password will remain unchanged.
  `;


  await sendEmail({
    to: user.email,
    subject: "[Home Ledger] Password Reset Request",
    message,
  });

  return { message: "Password reset link sent to your email" };
};

module.exports = {
  register,
  login,
  forgotPassword
};
