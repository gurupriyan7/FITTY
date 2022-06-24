const mongoose = require("mongoose")

const trainerSchema =  mongoose.Schema({
          name:{
                    type:String,
                    required:[true,"please enter the name"]
          },
          email:{
                    type:String,
                    required:[true,"please enter the email"]
          },
          phoneNumber:{
                    type:Number,
                    required:[true,"please enter PhoneNumber"]
          },
          password:{
                    type:String,
                    required:[true,"please enter the Password"]
          
          },
          category:{
                    type:String,
                    required:[true,"please select your category"]
          }
          },{
                    timestamps:true
          })
          module.exports = mongoose.model("Trainer",trainerSchema)