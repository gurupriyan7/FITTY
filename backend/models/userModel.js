const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter the name"],
    },
    email: {
      type: String,
      required: [true, "please enter the email"],
    },
    phoneNumber: {
      type: Number,
      required: [true, "please enter PhoneNumber"],
    },
    password: {
      type: String,
      required: [true, "please enter the Password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
