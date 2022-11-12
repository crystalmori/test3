const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Please add a password"],
    },

    isAdmin: {
      type: Boolean,
      requred: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
