const express = require('express')
const router = express.Router()

const {
  registerAdmin,
  loginAdmin,
  getAllOrders
} = require('../../controllers/adminController')
const {
  registerTrainer,
  getAllTrainers,
  deleteTrainer,
  ChangeStatusTrainer,
} = require('../../controllers/trainerController')
const {
  registerUser,
  getUser,
  changeUserStatus,
} = require('../../controllers/usercontroller')

// register-Admin
router.post('/register', registerAdmin)

// login-Admin
router.post('/login', loginAdmin)

// Register-user
router.post('/user/adduser', registerUser)

// get-All-Users
router.get('/user/allusers', getUser)

// change-status-(block/unblock)
router.put('/user/changestatus/:id', changeUserStatus)

// Register-Traineer
router.post('/trainer/addtrainer', registerTrainer)

// Get-all-Trainers
router.get('/trainer/alltrainers', getAllTrainers)

// change-trainer-status
router.put('/trainer/changestatus/:id', ChangeStatusTrainer)

// Delete-Trainer
router.delete('/trainer/delete/:id', deleteTrainer)

// Get-all-orders
router.get("/trainer/allorders",getAllOrders)
module.exports = router
