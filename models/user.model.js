const { mongoose } = require("../config/db");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "No less than 3 characters"],
      maxlength: [20, "No more than 20 characters"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: [true, "Email already in use"],
      match: [/^[\w\.-]+@[\w]+\.[\.\w]+$/, "Email no valid"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },

    role: {
      type: Number,
      default: 1,
    },

    profilePic: String,

    provider: {
      local: Boolean,
      facebook: Boolean,
      google: Boolean,
    },

    idProvider: {
      facebook: String,
      google: String,
    },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
