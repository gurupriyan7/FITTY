const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// rerquire-userModel
const User = require("../models/userModel");

// require -generateToken-function
const { generateToken } = require("../generateToken/generateToken");

// find-user
const getUser = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

// update-user
const userUpdate = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("User not Found");
  }
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedUser);
});

// register-user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, phoneNumber, password } = req.body;
  if (!name || !email || !password || !phoneNumber) {
    res.status(400);
    throw new Error("please enter the details");
  }

  // check-userExist
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User Alredy Exists");
  }

  // bcrypt-password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  // create-user
  const user = await User.create({
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    password: hashPassword,
  });
  // check-the-creation-is-success
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// Login-user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log("userssssss", req.body);

  // check-user-email
  const user = await User.findOne({ email });
  if (user) {
    if (await bcrypt.compare(password, user.password)) {
      console.log("successfully login");
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        token: generateToken(user._id),
      });
    } else {
      console.log("login failed");
      res.status(400);
      throw new Error("Invalid Password");
    }
  } else {
    res.status(400);
    throw new Error("invalid Email");
  }
});

// delete-user
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("user not found");
  }
  await user.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getUser,
  userUpdate,
  loginUser,
  registerUser,
  deleteUser,
};
