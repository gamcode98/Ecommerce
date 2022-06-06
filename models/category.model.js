const { mongoose } = require("./../config/db");

const Schema = mongoose.Schema;

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "No less than 3 characters"],
      maxlength: [20, "No more than 20 characters"],
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "product",
      },
    ],
  },
  {
    versionKey: false,
  }
);

const CategoryModel = mongoose.model("category", categorySchema);
module.exports = CategoryModel;
