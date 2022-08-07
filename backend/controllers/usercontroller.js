const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const mongoose=require("mongoose")
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

// rerquire-userModel
const User = require('../models/userModel')

// require-postsModel
const { userpost } = require('../models/postModel')

// require-trainerMOdel
const Trainer = require('../models/trainerModel')

// require-trainerPost-model
const { trainerpsot } = require('../models/postModel')

// require-plans-model
const Plans = require('../models/PlansModel')

// require-order-model
const Order = require("../models/orderModel")

// require -generateToken-function
const { generateToken } = require('../generateToken/generateToken')

// find-user
const getUser = asyncHandler(async (req, res) => {
  const users = await User.find()
  res.status(200).json(users)
})

// update-user
const userUpdate = asyncHandler(async (req, res) => {
  console.log('hello', req.body)
  const userid = req.user._id
  const user = await User.findById(userid)
  if (!user) {
    res.status(400)
    throw new Error('User not Found')
  }
  const userData = {
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    coverimage: req.body.coverimage,
    profileimage: req.body.profileimage,
  }
  const updatedUser = await User.findByIdAndUpdate(userid, userData, {
    new: true,
  })
  const newUser = {
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
    phoneNumber: updatedUser.phoneNumber,
    coverimage: updatedUser.coverimage,
    profileimage: updatedUser.profileimage,
    status: updatedUser.status,
    token: generateToken(updatedUser._id),
  }
  console.log('newuser', newUser)
  res.status(200).json(newUser)
})

// register-user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, phoneNumber, password } = req.body
  if (!name || !email || !password || !phoneNumber) {
    res.status(400)
    throw new Error('please enter the details')
  }

  // check-userExist
  const userExist = await User.findOne({ email })
  if (userExist) {
    res.status(400)
    throw new Error('User Alredy Exists')
  }

  // bcrypt-password
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password, salt)

  // create-user
  const user = await User.create({
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    password: hashPassword,
    status: true,
  })
  // check-the-creation-is-success
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      status: user.status,
      coverimage: user.coverimage,
      profileimage: user.profileimage,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// Login-user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  console.log('userssssss', req.body)

  // check-user-email
  const user = await User.findOne({ email })
  if (user) {
    if (user.status) {
      if (await bcrypt.compare(password, user.password)) {
        res.status(200).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          phoneNumber: user.phoneNumber,
          status: user.status,
          coverimage: user.coverimage,
          profileimage: user.profileimage,
          postCount: user.postCount,
          token: generateToken(user._id),
        })
      } else {
        console.log('login failed')
        res.status(400)
        throw new Error('Invalid Password')
      }
    } else {
      res.status(400)
      throw new Error('You have blocked by admin')
    }
  } else {
    res.status(400)
    throw new Error('invalid Email')
  }
})

// google-login
const googlelogin = asyncHandler(async(req,res)=>{
  const {email}=req.body
  console.log("datasss",email);
  const user = await User.findOne({ email:email })

  if(user){
 if(user.status){

   res.status(200).json({
     _id: user._id,
     name: user.name,
     email: user.email,
     phoneNumber: user.phoneNumber,
     status: user.status,
     coverimage: user.coverimage,
     profileimage: user.profileimage,
     postCount: user.postCount,
     token: generateToken(user._id),
   })
 }else{
  res.status(400)
  throw new Error("You have blocked by admin")
 }
  }else{
    res.status(400)
    throw new Error('There is no user in this email')
  }
})

// delete-user
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (!user) {
    res.status(400)
    throw new Error('user not found')
  }
  await user.remove()
  res.status(200).json({ id: req.params.id })
})

// change-status(block/unblock)
const changeUserStatus = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    let changedUser = await User.updateOne(
      { _id: req.params.id },
      { $set: { status: !user.status } },
    )
    res.status(200).json(changedUser)
  } else {
    res.status(400)
    throw new Error('user not found')
  }
})

// add-user-posts
const addpost = asyncHandler(async (req, res) => {
  const { description, image } = req.body
  if (req.user) {
    let id = req.user._id
    const userPost = await userpost.create({
      description: description,
      image: image,
      Comment: [],
      postedBy: id,
    })
    if (userPost) {
      res.status(200).json('post added successfully')
    } else {
      res.status(401)
      throw new Error('somthing wrong post not added')
    }
  }
})
// single-user-posts
const userPosts = asyncHandler(async (req, res) => {
  const userPosts = await userpost
    .find({ postedBy: req.user._id })
    .populate({ path: 'postedBy', select: ['name', 'profileimage'] })
  if (userPosts) {
    res.status(200).json(userPosts)
  } else {
    res.status(401)
    throw new Error('No posts found')
  }
})

// user-post-delete
const deletePost = asyncHandler(async (req, res) => {
  const userPost = await userpost.findById(req.params.id)
  if (userPost) {
    await userPost.remove()
    res.status(200).json({ id: req.params.id })
  } else {
    res.status(400)
    throw new Error('post not found')
  }
})

// All-posts
const allPosts = asyncHandler(async (req, res) => {
  const userPost = await userpost
    .find()
    .populate({ path: 'postedBy', select: ['name', 'profileimage'] })
  const trainerPost = await trainerpsot
    .find()
    .populate({ path: 'postedBy', select: ['name', 'profileimage'] })
  if (userPost || trainerPost) {
    const allpost = [...userPost, ...trainerPost]
    res.status(200).json(allpost)
  } else {
    res.status(400)
    throw new Error('No posts found')
  }
})

// singletrainer
const singletrainer = asyncHandler(async (req, res) => {
  const trainer = await Trainer.findById(req.params.id)
  if (trainer) {
    res.status(200).json(trainer)
  } else {
    res.status(400)
    throw new Error('someThing worong Trainer not found')
  }
})

// get-all-plans
const getAllPlans = asyncHandler(async (req, res) => {
  const plans = await Plans.find().populate({
    path: 'postedBy',
    select: ['name'],
  })
  if (plans) {
    res.status(200).json(plans)
  } else {
    res.status(400)
    throw new Error('No plans found')
  }
})

// Get-single-plan
const getSinglePlan = asyncHandler(async (req, res) => {
  const singlePlan = await Plans.find({ _id: req.params.id }).populate({
    path: 'postedBy',
    select: ['name','slots'],
  })
  if (singlePlan) {
    res.status(200).json(singlePlan[0])
  } else {
    res.status(400)
    throw new Error('plan not found')
  }
})

// Get-single-traine-plans
const getSingleTrainerPlans = asyncHandler(async (req, res) => {
  const tplans = await Plans.find({ postedBy: req.params.id }).populate({
    path: 'postedBy',
    select: ['name','slots'],
  })

  if (tplans) {
    res.status(200).json(tplans)
  } else {
    res.status(400)
    throw new Error('currently no plans')
  }
})
// Get-user-own-plans
const getUserOwnPlans = asyncHandler(async(req,res)=>{
  const newData = await Order.aggregate([{$match:{user:req.user._id}},
  {
    $lookup:{
      from:"plans",
      localField:"plan",
      foreignField:"_id",
      as:"result"
    }
  },
  {
    $unwind:"$result"
  }, 
])
const data = []
  newData.map(async(plan)=>{
  data.push(plan.result)
})
res.status(200).json(data)

})
// Like-post
const likePost = asyncHandler(async(req,res)=>{
      const postId = req.params.id
      const userId = req.user._id
      console.log("like",postId,userId);
})

// Get-singleUser
const singleUser = asyncHandler(async(req,res)=>{
  try {
    console.log("idddd",req.params._id);
    var userId = mongoose.Types.ObjectId(req.params.id);
  
    const user =await User.findById(userId)
    const trainer = await Trainer.findById(userId)
    console.log("user",user,trainer);
   if(user){
     res.status(200).json(user)
   }else if(trainer){
    res.status(200).json(trainer)
   }
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})

module.exports = {
  getUser,
  userUpdate,
  loginUser,
  registerUser,
  deleteUser,
  changeUserStatus,
  userPosts,
  addpost,
  deletePost,
  allPosts,
  singletrainer,
  getAllPlans,
  getSinglePlan,
  getSingleTrainerPlans,
  getUserOwnPlans,
  googlelogin,
  likePost,
  singleUser
}
