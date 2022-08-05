const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId



const userPostSchema = mongoose.Schema(
  {
        description: {
          type: String,
        },
        image: {
          type: String,
        },
        like:[
        {
          type:ObjectId,
        }],
        postedBy : {
          type:ObjectId,
          ref:"User"
        }
      },
      {
        timestamps: true,
      },
)
const trainerPostSchema = mongoose.Schema(
  {
        description: {
          type: String,
        },
        image: {
          type: String,
        },
        like:[
          {
            type:ObjectId,
          }],
        postedBy : {
          type:ObjectId,
          ref:"Trainer"
        }
      },
      {
        timestamps: true,
      },
)

 const userpost= mongoose.model("UserPost",userPostSchema)
const trainerpsot= mongoose.model("TrainerPost",trainerPostSchema)

module.exports={userpost,trainerpsot}
