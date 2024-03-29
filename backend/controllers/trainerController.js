const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const mongoose =require('mongoose')

// require-Trainer-Model
const Trainer = require('../models/trainerModel')

// require-user-model
const User = require("../models/userModel")

// require-plans-module
const Plans = require("../models/PlansModel")

// require-trainerpost,userPost - model
const { trainerpsot , userpost} = require('../models/postModel')

// require-generateToken-function
const { generateToken } = require('../generateToken/generateToken')
const orderModel = require('../models/orderModel')
const { rawListeners } = require('../models/userModel')

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
      slots: trainer.slots,
      coached: trainer.coached,
      coverimage:trainer.coverimage,
      profileimage:trainer.profileimage,
      wallet:trainer.wallet,
      token: generateToken(trainer._id),
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
          coverimage:trainer.coverimage,
          profileimage:trainer.profileimage,
          wallet:trainer.wallet,
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

//Login-with-google
const googleLogin = asyncHandler(async(req,res)=>{
  const {email}=req.body
  console.log("tra",req.body.email);
  const trainer = await Trainer.findOne({ email:email })
  if(trainer){
if(trainer.status){
  res.status(200).json({
    _id: trainer._id,
    name: trainer.name,
    email: trainer.email,
    phoneNumber: trainer.phoneNumber,
    category: trainer.category,
    status: trainer.status,
    slots: trainer.slots,
    coached: trainer.coached,
    coverimage:trainer.coverimage,
    profileimage:trainer.profileimage,
    wallet:trainer.wallet,
    token: generateToken(trainer._id),
  })
}else{
  res.status(400)
      throw new Error('You Have been Blocked by admin')
}
  }else{
    console.log("sorry");
    res.status(400)
    throw new Error('Invalid Email')
  }
})
// Update-Trainer
const UpdateTrainer = asyncHandler(async (req, res) => {
  const trainerId = req.trainer._id
  console.log('got ittt', req.body)

  const trainer = await Trainer.findById(trainerId)
  if (!trainer) {
     res.status(400)
    throw new Error('Trainer Not Found')
  }
  const updatedTrainer = await Trainer.findByIdAndUpdate(trainerId, req.body, {
    new: true,
  })
  const newTrainer = {
    _id:updatedTrainer._id,
    name: updatedTrainer.name,
    email: updatedTrainer.email,
    phoneNumber: updatedTrainer.phoneNumber,
    status: updatedTrainer.status,
    category: updatedTrainer.category,
    slots: updatedTrainer.slots,
    coached: updatedTrainer.coached,
    profileimage:updatedTrainer.profileimage,
    coverimage:updatedTrainer.coverimage,
    wallet:updatedTrainer.wallet,
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
    .find({postedBy:req.trainer._id})
    .populate({ path: 'postedBy', select: ['name', 'profileimage'] })
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
  .populate({ path: 'postedBy', select: ['name', 'profileimage'] })
  const trainerPost = await trainerpsot
  .find()
  .populate({ path: 'postedBy', select: ['name', 'profileimage'] })

  if(userposts||trainerPost){
    const allposts=[...userposts,...trainerPost]
    res.status(200).json(allposts)
  }else{
    res.status(400)
    throw new Error("No post found")
  }
})

// Add-Plan
const AddPlans = asyncHandler(async(req,res)=>{
    const trId = req.trainer._id
    const {description,image,planName,days,planAmount}= req.body

        const newPlan = await Plans.create({
          description:description,
          image:image,
          planName:planName,
          days:days,
          planAmount:planAmount,
          postedBy:trId,
        })
        if(newPlan){
          res.status(200).json("plan Adde successfully")
        }else{
          res.status(400)
          throw new Error("something wrong Plan not added")
        }
}) 

// get-trainer-plans
const getTrainerPlan = asyncHandler(async(req,res)=>{
  const trId = req.trainer.id
  console.log("helloo",trId);

  const trainerPlans = await Plans.find({postedBy:trId})
  .populate({path:"postedBy",select:["name"]})
 
  if(trainerPlans){
    console.log("plan",trainerPlans)
    res.status(200).json(trainerPlans)
  }else{
    res.status(400)
    throw new Error("No plans")
  }
})

// Get-single-plan
const getsinglePlan= asyncHandler(async(req,res)=>{
  const planId = req.params.id
  console.log("id",planId)
  const singlePlan=await Plans.find({_id:planId})
  .populate({path:"postedBy",select:["name"]})
  if(singlePlan){
    res.status(200).json(singlePlan[0])
  }else{
    res.status(400)
    throw new Error("No Plans found")
  }
})

// Delete-plan
const deletePlan = asyncHandler(async(req,res)=>{
  const plan = await Plans.findById(req.params.id)
  if(plan){
    await plan.remove()
    res.status(200).json({id:req.params.id})
  }else{
     res.status(400)
     throw new Error("plan not found")
  }
})
// get-trainer-own-clients
const getTrainerClients = asyncHandler(async(req,res)=>{
  console.log("id",req.trainer._id);

const newData = await orderModel.find({trainer:req.trainer._id})
.populate("user")
console.log("data",newData);
const data = []
newData.map(async(user)=>{
 
  user.user.expry =user.expry
  data.push(user.user)
})
res.status(200).json(data)
})

// Trainer-orders
const TrainerOrders = asyncHandler(async(req,res)=>{
  const trId = req.trainer._id
  console.log('id',trId);
  const orders =await orderModel.find({trainer:trId})
  .populate({path:"user",select:["name"]})
  if(orders){
  res.status(200).json(orders)
  }else{
    res.status(400)
    throw new Error("No orders")
  }
})
// Payment-request
 const paymentRequest= asyncHandler(async(req,res)=>{
  const orderId = req.params.orderId
  const order = await orderModel.updateOne({_id:orderId},{$set:{
    trainerPaymentStatus:"requested"
  }})

  console.log("dataa",order);
  if(!order){
    res.status(400)
    throw new Error("order not found")
  }
  res.status(200)
  .json(order)

 })

//  Like-post
const likePost = asyncHandler(async(req,res)=>{
  const postId = mongoose.Types.ObjectId(req.params.id)
  const trainerId = req.trainer._id
  console.log("myrrr",trainerId,postId);
  const uPost =await userpost.findById(postId)
  const tPost =await trainerpsot.findById(postId)
  console.log("ddd",uPost,tPost);
  let post
  let model
  if(uPost){
    post=uPost
    model=userpost
  }else if(tPost){
    post=tPost
    model=trainerpsot
  }
  if(post.like.includes(trainerId)){
   res.status(403)
   console.log("error");
    throw new Error("user Alredy liked")
  }
  console.log("got ot");
  const liked = await model.findByIdAndUpdate(postId,{
    $push:{like:trainerId}
  })
res.status(200).json({liked})

})

// unLikeUserPost
const unLike = asyncHandler(async(req,res)=>{
  const postId = mongoose.Types.ObjectId(req.params.id)
      const trainerId = req.trainer._id
      console.log(trainerId,postId);
      const uPost =await userpost.findById(postId)
      const tPost =await trainerpsot.findById(postId)
      console.log("ddd",uPost,tPost);
      let post
      let model
      if(uPost){
        post=uPost
        model=userpost
      }else if(tPost){
        post=tPost
        model=trainerpsot
      }
      if(post.like.includes(trainerId)){
        
        const unLiked = await model.findByIdAndUpdate(postId,{
          $pull:{like:trainerId}
        })
  res.status(200).json({unLiked})

       }else{
        res.status(403)
        console.log("error");
         throw new Error("user not like this post")
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
  Allposts,
  AddPlans,
  getTrainerPlan,
  getsinglePlan,
  deletePlan,
  getTrainerClients,
  googleLogin,
  TrainerOrders,
  paymentRequest,
  likePost,
  unLike
 
}
