const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

// const postSchema = mongoose.Schema(
//   {
//     description: {
//       type: String,
//     },
//     image: {
//       type: String,
//     },
//     like: {
//       type: Number,
//       default: 0,
//     },
//     comment: {
//       type: Array,
//       default: '',
//     },
//     userId: {
//       type: ObjectId,
//       default: null,
//     },
//     trainerId: {
//       type: ObjectId,
//       default: null,
//     },
//   },
//   {
//     timestamps: true,
//   },
// )
// module.exports = mongoose.model('Post', postSchema)

const userPostSchema = mongoose.Schema(
  {
        description: {
          type: String,
        },
        image: {
          type: String,
        },
        like: {
          type: Number,
          default: 0,
        },
        comment: {
          type: Array,
          default: '',
        },
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
        like: {
          type: Number,
          default: 0,
        },
        comment: {
          type: Array,
          default: '',
        },
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
