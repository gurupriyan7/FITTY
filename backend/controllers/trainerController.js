const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// require-Trainer-Model
const Trainer = require('../models/trainerModel')

// require-trainerpost,userPost - model
const { trainerpsot , userpost} = require('../models/postModel')

// require-generateToken-function
const { generateToken } = require('../generateToken/generateToken')

// Trainer-registration
const registerTrainer = asyncHandler(async (req, res) => {
  console.log('tregister', req.body)
  const {
    name,
    email,
    phoneNumber,
    password,
    category,
    slots,
    status,
  } = req.body
  if (!name || !email || !phoneNumber || !password || !category || !slots) {
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
    slots: slots,
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
          slots: trainer.slots,
          coached: trainer.coached,
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
  const trainerId = req.trainer._id
  console.log('got ittt', trainerId)

  const trainer = await Trainer.findById(trainerId)
  if (!trainer) {
    res.status(400)
    throw new Error('Trainer Not Found')
  }
  const updatedTrainer = await Trainer.findByIdAndUpdate(trainerId, req.body, {
    new: true,
  })
  const newTrainer = {
    name: updatedTrainer.name,
    email: updatedTrainer.email,
    phoneNumber: updatedTrainer.phoneNumber,
    status: updatedTrainer.status,
    category: updatedTrainer.category,
    slots: updatedTrainer.slots,
    coached: updatedTrainer.coached,
    token: generateToken(updatedTrainer._id),
  }
  res.status(200).json(newTrainer)
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
  console.log('haaa')
  const trainers = await Trainer.find()
  res.status(200).json(trainers)
})

// trainer-add-post
const addpost = asyncHandler(async (req, res) => {
  const { description, image } = req.body
  if (req.trainer) {
    const id = req.trainer._id
    const trainerPost = await trainerpsot.create({
      description: description,
      image: image,
      postedBy: id,
      comment: [],
    })
    if (trainerPost) {
      res.send(200).json('post added successfully')
    } else {
      res.send(401)
      throw new Error('somthing wrong post not added')
    }
  } else {
    res.send(400)
    throw new Error('post not available')
  }
})

// single-trainer-posts
const trainerPosts = asyncHandler(async (req, res) => {
  const trainerPost = await trainerpsot
    .find()
    .populate({ path: 'postedBy', select: ['name', 'email'] })
  if (trainerPost) {
    res.status(200).json(trainerPost)
  } else {
    res.status(401)
    throw new Error('No posts found')
  }
})

// Trainer-post-delete
const deletePost = asyncHandler(async (req, res) => {
  const post = await trainerpsot.findById(req.params.id)
  if (!post) {
    res.status(400)
    throw new Error('post not found')
  }
  await post.remove()
  res.status(200).json({ id: req.params.id })
})

// Trainer-Allposts
const Allposts = asyncHandler(async(req,res)=>{
  const userposts = await userpost
  .find()
  .populate({ path: 'postedBy', select: ['name', 'email'] })
  const trainerPost = await trainerpsot
  .find()
  .populate({ path: 'postedBy', select: ['name', 'email'] })

  if(userposts||trainerPost){
    const allposts=[...userposts,...trainerPost]
    res.status(200).json(allposts)
  }else{
    res.status(400)
    throw new Error("No post found")
  }
})
    

module.exports = {
  registerTrainer,
  loginTrainer,
  UpdateTrainer,
  deleteTrainer,
  getAllTrainers,
  ChangeStatusTrainer,
  addpost,
  trainerPosts,
  deletePost,
  Allposts
}
