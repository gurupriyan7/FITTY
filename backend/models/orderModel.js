const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const orderSchema = mongoose.Schema(
  {
    isPaid: Boolean,
    amount: Number,
    user:{
      type:ObjectId,
      ref:"User"
    },
    trainer:{
      type:ObjectId,
      ref:"Trainer"
    },
    date:String,
    expry:String,
    plan:{
      type:ObjectId,
      ref:"Plans"
    },
    razorpay: {
      orderId: String,
      paymentId: String,
      signature: String,
    },
    planeName:{
      type:String
    },
    trainerPaymentStatus:{
      type:String,
      default:""
    }
  },
  {
    timestamp: true,
  },
)
module.exports = mongoose.model('order', orderSchema)
