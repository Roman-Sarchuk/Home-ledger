const User = require("../models/User");
const APIError = require("../utils/APIError");

const deleteMe = async (id) => {
  const user = await User.findByIdAndDelete(id);

  return 204; // No content
};

const updateMe = async (id, name) => {
  // Validate user input
  if (!name || name.trim() === "") {
    throw new APIError(
      400,
      "Validation failed",
      "Name is required and cannot be empty",
    );
  }

  const user = await User.findByIdAndUpdate(
    id,
    { $set: { name } },
    { returnDocument: "after" },
  );

  return {
    user: user.toPublicJSON(),
  };
};

module.exports = {
  deleteMe,
  updateMe,
};
