const mongoose = require("mongoose");
const Category = require("../models/Category");
const Transaction = require("../models/Transaction");
const APIError = require("../utils/APIError");

const ALLOWED_TYPES = Category().getAllowedTypes();

const validateCategoryType = (type) => {
  if (!ALLOWED_TYPES.includes(type)) {
    throw new APIError(400, "Incorrect parameters", "Invalid category type");
  }
};

const getCategories = async (userId, pagePagination = {}) => {
  const { page = 1, limit = 10 } = pagePagination;
  const skip = (page - 1) * limit;

  const categories = await Category.find({ userId })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  return {
    categories: categories.map((category) => category.toPublicJSON()),
  };
};

const getCategoryById = async (userId, categoryId) => {
  if (categoryId === undefined) {
    throw new APIError(400, "Incorrect parameters", "Category ID is required");
  }

  const category = await Category.findOne({ _id: categoryId, userId });

  if (!category) {
    throw new APIError(404, "Category not found");
  }

  return {
    category: category.toPublicJSON(),
  };
};

const createCategory = async (userId, name, type) => {
  if (!name || name.trim() === "" || !type) {
    throw new APIError(
      400,
      "Incorrect parameters",
      "Missing category name or invalid type",
    );
  }

  validateCategoryType(type);

  const existingCategory = await Category.findOne({ userId, name });
  if (existingCategory) {
    throw new APIError(409, "Category with this name already exists for user");
  }

  const category = await Category.create({
    userId,
    name,
    type,
  });

  return {
    category: category.toPublicJSON(),
  };
};

const updateCategory = async (userId, categoryId, name, type) => {
  if (categoryId === undefined) {
    throw new APIError(400, "Incorrect parameters", "Category ID is required");
  }

  const category = await Category.findOne({ _id: categoryId, userId });

  if (!category) {
    throw new APIError(404, "Category not found");
  }

  if (name !== undefined && name !== category.name) {
    if (name.trim() === "") {
      throw new APIError(400, "Incorrect parameters", "Category name cannot be empty");
    }

    const duplicate = await Category.findOne({
      userId,
      name,
      _id: { $ne: categoryId },
    });

    if (duplicate) {
      throw new APIError(409, "Category with this name already exists for user");
    }

    category.name = name;
  }

  if (type !== undefined && type !== category.type) {
    validateCategoryType(type);
    category.type = type;
  }

  const updatedCategory = await category.save();

  return {
    category: updatedCategory.toPublicJSON(),
  };
};

const deleteCategory = async (userId, categoryId) => {
  if (categoryId === undefined) {
    throw new APIError(400, "Incorrect parameters", "Category ID is required");
  }

  const session = await mongoose.startSession();

  try {
    await session.withTransaction(async () => {
      const category = await Category.findOneAndDelete(
        { _id: categoryId, userId },
        { session },
      );

      if (!category) {
        throw new APIError(404, "Category not found");
      }

      await Transaction.deleteMany({ userId, categoryId }, { session });
    });
  } finally {
    await session.endSession();
  }

  return 204;
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
