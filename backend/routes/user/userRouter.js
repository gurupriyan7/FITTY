const express =require("express")
const router= express.Router()
const {protect} = require('../../middleware/authMiddleware')
const { getUser,
          userUpdate,
          registerUser,
          deleteUser,
          loginUser
      } = require("../../controllers/usercontroller")



router.get('/',getUser)

// Register-user
router.post('/register',registerUser)


// Login-user
router.post("/login",loginUser)


// Update-user
router.put('/update/:id',userUpdate)


// Delete-user
router.delete("/delete/:id",deleteUser)


// Find-user
router.get('/find',getUser)

module.exports = router;  