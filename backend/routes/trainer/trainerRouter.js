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
  Allposts,
  AddPlans,
  getTrainerPlan,
  getsinglePlan,
  deletePlan,
  getTrainerClients,
  googleLogin,
  TrainerOrders,
  paymentRequest
  
} = require('../../controllers/trainerController')

// Register-Traineer 
router.post('/register', registerTrainer)

// Login-Trainer
router.post('/login', loginTrainer)

// login-with-google
router.post('/googlelogin',googleLogin)

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

// Add-plans
router.post("/addplan",trainerProtect,AddPlans)

// Get-trainer-plans
router.get("/gettrainerplan",trainerProtect,getTrainerPlan)

// Get-single-plan
router.get("/singleplan/:id",trainerProtect,getsinglePlan)

// Delete-plan
router.delete("/deleteplan/:id",trainerProtect,deletePlan)

// get-trainer-clients
router.get("/getclients",trainerProtect,getTrainerClients)

// get-trainer-orders
router.get("/trainerorder",trainerProtect,TrainerOrders)

// payment-request
router.put("/paymentrequest/:orderId",paymentRequest)


module.exports = router
