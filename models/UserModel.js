const mongoose = require("mongoose");

// Mongoose schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Mongoose model
const User = mongoose.model("User", userSchema);
module.exports = User;
