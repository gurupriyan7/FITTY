const express = require('express')
const router = express.Router()
const {trainerProtect}= require("../../middleware/authMiddleware")
const {
  registerTrainer,
  loginTrainer,
  UpdateTrainer,
  deleteTrainer,
  getAllTrainers,
  ChangeStatusTrainer,
  addpost,
  trainerPosts,
  deletePost,
  Allposts
} = require('../../controllers/trainerController')

// Register-Traineer
router.post('/register', registerTrainer)

// Login-Trainer
router.post('/login', loginTrainer)

// Update-Trainer
router.put('/update',trainerProtect,UpdateTrainer)

// Delete-Trainer
router.delete('/delete/:id', deleteTrainer)

// Get-all-Trainers
router.get('/alltrainers', getAllTrainers)

// change-trainer-status
router.put('/status/:id', ChangeStatusTrainer)

// Trainer-addPost
router.post("/addpost",trainerProtect,addpost)

// Trainer-posts
router.get("/posts",trainerProtect,trainerPosts)

// Trainer-post-delete
router.delete("/post/delete/:id",trainerProtect,deletePost)

// All-posts
router.get("/allposts",trainerProtect,Allposts)
module.exports = router
