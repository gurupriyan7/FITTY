const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const planSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
    planName: {
      type: String,
    },
    days: {
      type: Number,
    },
    planAmount: {
      type: Number,
    },
    postedBy: {
      type: ObjectId,
      ref:"Trainer"
    },
      description:{
        type:String
      },
      expry:{
        type:String
      },
      purchasedBy:{
        type:Array
      }
    
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('plans', planSchema)
