const { mongoose } = require("./../config/db");
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "No less than 3 characters"],
      maxlength: [20, "No more than 20 characters"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [3, "No less than 3 characters"],
      maxlength: [100, "No more than 100 characters"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [6, "Must be at least 6, got {VALUE}"],
      max: 1000000,
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    stock: {
      type: Number,
      required: [true, "Stock is required"],
      min: [1, "Must be at least 6, got {VALUE}"],
    },
    reviews: {
      type: String,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "category",
    },
  },
  {
    versionKey: false,
  }
);

const ProductModel = mongoose.model("product", productSchema);
module.exports = ProductModel;
