const express = require('express')
const router = express.Router()
const { protect } = require('../../middleware/authMiddleware')
const {
  getUser,
  userUpdate,
  registerUser,
  deleteUser,
  loginUser,
  changeUserStatus,
} = require('../../controllers/usercontroller')
const {addpost} = require ("../../controllers/userPostcontroller")

router.get('/', getUser)

// Register-user
router.post('/register', registerUser)

// Login-user
router.post('/login', loginUser)

// Update-user
router.put('/update',protect,userUpdate)

// Delete-user
router.delete('/delete/:id',deleteUser)

// Find-user
router.get('/find',getUser)

// change-status-(block/unblock)
router.put('/status/:id', changeUserStatus)

// Add-post
router.post('/addpost',protect,addpost)

module.exports = router
