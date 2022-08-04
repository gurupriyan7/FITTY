const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Traineer = require('../models/trainerModel')

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get-Token-from-header
      token = await req.headers.authorization.split(' ')[1]

      // verify-Token
      const decoded = await jwt.verify(token, process.env.JWT_SECRET)

      // Get-user-form-the-Token
      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      res.status(401)
      throw new Error('Not authorized')
    }
  }
  if (!token) {
    res.status(401)
    throw new Error('Not authorized ,no token')
  }
})

// trainer-protect-route
const trainerProtect = asyncHandler(async (req, res, next) => {
  let token
  console.log("got it",req.headers);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    console.log('got itttt');
    try {
      // Get-Token-from-header
      token = await req.headers.authorization.split(' ')[1]

      // Verify-Token
      const decoded = await jwt.verify(token, process.env.JWT_SECRET)

      // Get-Trainer-from-the-Token
      req.trainer = await Traineer.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      res.status(401)
      throw new Error('Not authorized ')
    }
  }
  if (!token) {
    res.status(401)
    throw new Error('NOt authorized, no token')
  }
})

module.exports = { protect, trainerProtect }
