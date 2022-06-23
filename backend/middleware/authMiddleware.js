const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const User = require("../models/userModel")

const protect = asyncHandler(async (req,res,next)=>{

 let token

 if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
          try {
                    
// Get-Token-from-header
token = req.headers.authorization.split(" ")[1]


// verify-Token
const decoded = jwt.verify(token,process.env.SECRET)


// Get-user-form-the-Token
req.user=await User.findById(decoded.id).select('-password')
         
next()
} catch (error) {
          console.log(error);  
          res.status(401)     
          throw new Error("Not authorized")
}
 }
 if(!token){
          res.status(401)
          throw new Error("Not authorized ,no token")
 }
})

module.exports={protect}