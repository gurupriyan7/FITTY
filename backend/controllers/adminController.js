const asyncHandler= require("express-async-handler")
const jwt = require("jsonwebtoken")
const bcrypt= require("bcryptjs")


// require-token-generate-function
const {generateToken} =require("../generateToken/generateToken")

// require-AdminController
const Admin= require("../models/adminModel")


// Admin-Registration
const registerAdmin= asyncHandler(async(req,res)=>{
          const {Name,email,password,phoneNumber} = req.body;
          if(!Name || !email || !phoneNumber || !password ){
                    res.status(400)
                    throw new Error("please enter the details")
          }

          // bcrypt-Password
const salt = await bcrypt.genSalt(10)
const hashPassword = await bcrypt.hash(password,salt)


// Create-Admin
const admin=await Admin.create({
          name:Name,
          email:email,
          phoneNumber:phoneNumber,
          password:hashPassword

})

// check-the-creation-is-success

if(admin){
          res.status(200).json({
                    _id:admin._id,
                    name:admin.name,
                    email:admin.email,
                    phoneNumber:admin.phoneNumber,
                    token:generateToken(admin._id)
          })
}else{
          res.status(400)
          throw new Error("Invalid Admin Data")
}
})




// Admin-Login
const loginAdmin = asyncHandler(async(req,res)=>{
          const {email,password} =req.body;


// Check-email
const admin= await Admin.findOne({email})
if(admin){
          if(await bcrypt.compare(password,admin.password)){
                    res.status(200)
                    .json({
                              _id:admin._id,
                              name:admin.name,
                              email:admin.email,
                              phoneNumber:admin.phoneNumber,
                              token:generateToken(admin._id)
                    })
          }else{
                    res.status(400)
                    throw new Error("Invalid Password")
          }
}else{
          res.status(400)
          throw new Error("Invalid Email")
}
})

module.exports={
          registerAdmin,
          loginAdmin
}
