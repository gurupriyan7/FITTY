const asyncHandler = require("express-async-handler")

// user-model
const User = require('../models/userModel')

// userpost-model
const UserPost = require("../models/userPostModel")

const addpost = asyncHandler(async(req,res)=>{
          const user = await User. findById(req.user._id)
          const {description,image}=req.body

    const userpost=await UserPost.create({
      description:description,
                    image:image,
                    userId:user._id,
                    comment:[]
          })
          if(userpost){
                    res.send(200).json("post added successfully")
          }else{
                    res.send(401)
                    throw new Error("somthing wrong post not added")
          }
})
module.exports={
addpost
}