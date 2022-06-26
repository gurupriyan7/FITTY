const express = require("express")
const router= express.Router()

const {registerAdmin,loginAdmin} = require("../../controllers/adminController")


// register-Admin
router.post("/register",registerAdmin)

// login-Admin
router.post("/login",loginAdmin)



module.exports= router;