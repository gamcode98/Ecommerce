const validationError = require("../helpers/validationError");
const ProductModel = require("../models/products.model");
const CategoryModel = require("../models/category.model");

class Product {
  async getAll() {
    const products = await ProductModel.find().populate("category", {
      name: 1,
    });
    return products;
  }

  async create(data) {
    try {
      const product = await ProductModel.create(data);
      const category = await CategoryModel.findById(data.category);
      category.products = category.products.concat(product._id);
      await category.save();
      return {
        created: true,
        product,
      };
    } catch (error) {
      return {
        created: false,
        errors: validationError(error.errors),
      };
    }
  }

  async update(id, data) {
    try {
      const product = await ProductModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      return {
        updated: true,
        product,
      };
    } catch (error) {
      return {
        updated: false,
        kind: error.kind,
        value: error.value,
        path: error.path,
        message: "It's not a id valid",
      };
    }
  }

  async delete(id) {
    try {
      const product = await ProductModel.findByIdAndDelete(id);
      return {
        deleted: true,
        product,
      };
    } catch (error) {
      return {
        deleted: false,
        kind: error.kind,
        value: error.value,
        path: error.path,
        message: "It's not a id valid",
      };
    }
  }
}

module.exports = Product;
