const validationError = require("../helpers/validationError");
const CategoryModel = require("../models/category.model");

class Category {
  async getAll() {
    const categories = await CategoryModel.find().populate("products", {
      category: 0,
    });
    return categories;
  }

  async create(data) {
    try {
      const category = await CategoryModel.create(data);
      return {
        created: true,
        category,
      };
    } catch (error) {
      return {
        created: false,
        errors: validationError(error.errors),
      };
    }
  }

  async update(id, data) {
    const category = await CategoryModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return {
      updated: true,
      category,
    };
  }

  async delete(id) {
    const category = await CategoryModel.findByIdAndDelete(id);
    return {
      deleted: true,
      category,
    };
  }
}

module.exports = Category;
