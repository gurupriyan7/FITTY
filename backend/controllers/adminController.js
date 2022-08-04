const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// require-token-generate-function
const { generateToken } = require('../generateToken/generateToken')

// require-AdminController
const Admin = require('../models/adminModel')

// Require-OrderModel 
const OrderModel = require("../models/orderModel")

// Required-TrainerModel
const TrainerModel = require("../models/trainerModel")

// Required-PlanModel
const PlanModel = require("../models/PlansModel")

// Require-userModel
const UserModel = require("../models/userModel")

// Admin-Registration
const registerAdmin = asyncHandler(async (req, res) => {
  const { Name, email, password, phoneNumber } = req.body
  if (!Name || !email || !phoneNumber || !password) {
    res.status(400)
    throw new Error('please enter the details')
  }

  // bcrypt-Password
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password, salt)

  // Create-Admin
  const admin = await Admin.create({
    name: Name,
    email: email,
    phoneNumber: phoneNumber,
    password: hashPassword,
  })

  // check-the-creation-is-success

  if (admin) {
    res.status(200).json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      phoneNumber: admin.phoneNumber,
      token: generateToken(admin._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid Admin Data')
  }
})

// Admin-Login
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body
 

  // Check-email
  const admin = await Admin.findOne({ email })
  if (admin) {
    if (await bcrypt.compare(password, admin.password)) {
      res.status(200).json({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        phoneNumber: admin.phoneNumber,
        token: generateToken(admin._id),
      })
    } else {
      res.status(400)
      throw new Error('Invalid Password')
    }
  } else {
    res.status(400)
    throw new Error('Invalid Email')
  }
})

// get-all-orders
const getAllOrders=asyncHandler(async(req,res)=>{
  
  const orders = await OrderModel.find()
  .populate({path:"user",select:["name"]})
  .populate({path:"trainer",select:["name"]})
  if(!orders){
    res.status(400)
    throw new Error("NO order found")
  }
 
  res.status(200).json(orders)
})
// payment-to-trainer
const paymentToTrainer =asyncHandler(async(req,res)=>{
  const orderId=req.params.id
  if(!orderId){
    res.status(403)
    throw new Error("OrderId not found")
  }
  const order = await OrderModel.findById(orderId)
  const trainerCommesion = (order.amount / 100) - (order.amount / 1000)
  console.log("trAmound",trainerCommesion);
  const updatePayment = await OrderModel.updateOne({_id:orderId},{
    $set:{
      trainerPaymentStatus:"success"
    }
  })
  if(!updatePayment){
    res.status(400)
    throw new Error("order not found")
  }
  const addedToTrainerWallet = await TrainerModel.updateOne({_id:order.trainer},
    {
      $inc:{wallet:trainerCommesion}
    })
    if(!addedToTrainerWallet){
      res.status(400)
      throw new Error("Amount not added to wallet")
    }
  res.status(200)
  .json({message:"payment Success"})
})

// const getAllPlans
const getAllPlans=asyncHandler(async(req,res)=>{
  console.log("jaa");
   const fittness =await TrainerModel.find({category:"fittness"}).count()
   const stamina =await TrainerModel.find({category:"stamina"}).count()
   const yoga =await TrainerModel.find({category:"Yoga"}).count()
   const Dietitian =await TrainerModel.find({category:"Dietitian"}).count()
   const Nutrition =await TrainerModel.find({category:"Nutrition"}).count()
  //  const other =await TrainerModel.find({category:{$ne:["fittness","stamina","Yoga","Dietitian","Nutrition"]}}).count()
   const other =await TrainerModel.find({$and:[{category:{$ne:"fittness"}},{category:{$ne:"stamina"}},{category:{$ne:"Yoga"}},{category:{$ne:"Dietitian"}},{category:{$ne:"Nutrition"}}]}).count()
  
  const data={
    fittness:fittness,
    stamina:stamina,
    yoga:yoga,
    Dietitian:Dietitian,
    Nutrition:Nutrition,
    other:other,
  }
  console.log("dataaa",data);
  res.status(200).json(data)
})

// get-all-data
const getAllData = asyncHandler(async(req,res)=>{
  
  const user =await UserModel.find().count()
  const trainer = await TrainerModel.find().count()
  const plan= await PlanModel.find().count()
  const order= await OrderModel.find().count()

  const data ={
    trainer:trainer,
    user:user,
    plan:plan,
    order:order
  }
  ;
  res.status(200).json(data)
})
module.exports = {
  registerAdmin,
  loginAdmin,
  getAllOrders,
  paymentToTrainer,
  getAllPlans,
  getAllData
}
