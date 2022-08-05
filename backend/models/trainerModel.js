const mongoose = require("mongoose");

const trainerSchema = mongoose.Schema(
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
    category: {
      type: String,
      required: [true, "please select your category"],
    },
    status:{
      type:Boolean,
      default:true
    },
    slots:{
      type:Number,
    },
    coached:{
      type:Number,
      default:0
    },
    profileimage:{
      type:String
    },
    coverimage:{
      type:String
    },
    wallet:{
      type:Number,
      default:0
    }
    
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Trainer", trainerSchema);
