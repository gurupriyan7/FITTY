const express = require('express')
const router = express.Router()
const { protect } = require('../../middleware/authMiddleware')
  
  const {getRazorpayKey,createOrder,payorder,getOrders} = require("../../controllers/orderController")
const {
  getUser,
  userUpdate,
  registerUser,
  deleteUser,
  loginUser,
  changeUserStatus,
  userPosts,
  addpost,
  deletePost,
  allPosts,
  singletrainer,
  getAllPlans,
  getSinglePlan,
  getSingleTrainerPlans,
  getUserOwnPlans,
  googlelogin,
  likePost,
  unLike,
  singleUser

} = require('../../controllers/usercontroller')

router.get('/',getUser)

// Register-user
router.post('/register',registerUser)

// Login-user
router.post('/login', loginUser)

// google-login
router.post('/googlelogin',googlelogin)

// Update-user
router.put('/update',protect,userUpdate)

// Delete-user
router.delete('/delete/:id',deleteUser)

// Find-user
router.get('/find',getUser)

// get-singleUser-details
router.get("/singleuser/:id",singleUser)

// change-status-(block/unblock)
router.put('/status/:id', changeUserStatus)

// Add-post
router.post('/addpost',protect,addpost)

// single-user-posts
router.get("/posts",protect,userPosts)

// delete-post
router.delete('/posts/delete/:id',protect,deletePost)

// all-posts
router.get('/allposts',protect,allPosts)

// single-Trainer
router.get("/singletrainer/:id",singletrainer)

// Get-all-plans
router.get("/allplans",protect,getAllPlans)

// Get-single-plan
router.get("/singleplan/:id",protect,getSinglePlan)

// Get-single-trainer-plans
router.get("/trainerplans/:id",protect,getSingleTrainerPlans)

// Get-razorpay-key-id
router.get("/get-razorpay-key",getRazorpayKey)

// create-order
router.post("/create-order",createOrder)

// pay-order
router.post("/pay-order",payorder)

//Get-all-orders
router.get("/list-orders",getOrders)

// Get-user-own-plans
router.get("/userownplan",protect,getUserOwnPlans)

// Like-post
router.put("/likepost/:id",protect,likePost)

// unLike-post
router.put("/unlikepost/:id",protect,unLike)

module.exports = router
