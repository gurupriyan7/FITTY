const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// require-Trainer-Model
const Trainer = require('../models/trainerModel')

// require-generateToken-function
const { generateToken } = require('../generateToken/generateToken')

// Trainer-registration
const registerTrainer = asyncHandler(async (req, res) => {
  const { name, email, phoneNumber, password, category, status } = req.body
  if (!name || !email || !phoneNumber || !password || !category) {
    res.status(400)
    throw new Error('please enter the details')
  }

  // check-TrainerExist
  const trainerExist = await Trainer.findOne({ email })

  if (trainerExist) {
    res.status(400)
    throw new Error('Trainer Alredy Exists')
  }

  // bcrypt-Password
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password, salt)

  // Create-Trainer
  const trainer = await Trainer.create({
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    category: category,
    password: hashPassword,
    status: status,
  })

  // check-the-creation-is- success
  if (trainer) {
    res.status(200).json({
      _id: trainer._id,
      name: trainer.name,
      email: trainer.email,
      phoneNumber: trainer.phoneNumber,
      category: trainer.category,
      status: trainer.status,
    })
  } else {
    res.status(400)
    throw new Error('Invalid Trainer Data')
  }
})

///////////////////////////////
// Login-Trainer
const loginTrainer = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // Check-email
  const trainer = await Trainer.findOne({ email })
  if (trainer) {
    if (trainer.status) {
      if (await bcrypt.compare(password, trainer.password)) {
        res.status(200).json({
          _id: trainer._id,
          name: trainer.name,
          email: trainer.email,
          phoneNumber: trainer.phoneNumber,
          category: trainer.category,
          status: trainer.status,
          token: generateToken(trainer._id),
        })
      } else {
        res.status(400)
        throw new Error('Invalid Password')
      }
    } else {
      res.status(400)
      throw new Error('You Have been Blocked by admin')
    }
  } else {
    res.status(400)
    throw new Error('Invalid Email')
  }
})

// Update-Trainer
const UpdateTrainer = asyncHandler(async (req, res) => {
  console.log('got ittt', req.body)
  const trainer = await Trainer.findById(req.params.id)
  if (!trainer) {
    res.status(400)
    throw new Error('Trainer Not Found')
  }
  const updatedTrainer = await Trainer.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    },
  )
  res.status(200).json(updatedTrainer)
})

// Change-status
const ChangeStatusTrainer = asyncHandler(async (req, res) => {
  console.log('hello', req.params.id)
  const trainer = await Trainer.findById(req.params.id)
  if (!trainer) {
    res.status(400)
    throw new Error('Trainer not found')
  }
  const newTrainer = await Trainer.updateOne(
    { _id: trainer._id },
    { $set: { status: !trainer.status } },
  )
  res.status(200).json(newTrainer)
})

// Delete-Trainer
const deleteTrainer = asyncHandler(async (req, res) => {
  const trainer = await Trainer.findById(req.params.id)
  if (!trainer) {
    res.status(400)
    throw new Error('Trainer not found')
  }
  await trainer.remove()
  res.status(200).json({ id: req.params.id })
})

// Find-all-Trainers
const getAllTrainers = asyncHandler(async (req, res) => {
  const trainers = await Trainer.find()
  res.status(200).json(trainers)
})

module.exports = {
  registerTrainer,
  loginTrainer,
  UpdateTrainer,
  deleteTrainer,
  getAllTrainers,
  ChangeStatusTrainer,
}
