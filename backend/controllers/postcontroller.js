const asyncHandler = require('express-async-handler')

// userpost-model
const Post = require('../models/postModel')

const addpost = asyncHandler(async (req, res) => {
  const { description, image } = req.body

  if (req.user) {
    let id = req.user._id
    const post = await Post.create({
      description: description,
      image: image,
      userId: id,
      comment: [],
    })
    if (post) {
      res.send(200).json('post added successfully')
    } else {
      res.send(401)
      throw new Error('somthing wrong post not added')
    }
  } else if (req.trainer) {
    let id = req.trainer._id
    const post = await Post.create({
      description: description,
      image: image,
      trainerId: id,
      comment: [],
    })
    if (post) {
      res.send(200).json('post added successfully')
    } else {
      res.send(401)
      throw new Error('somthing wrong post not added')
    }
  }
})
module.exports = {
  addpost,
}
