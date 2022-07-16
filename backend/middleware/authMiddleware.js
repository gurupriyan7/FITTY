const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const User = require("../models/userModel")

const protect = asyncHandler(async (req,res,next)=>{
          console.log("headdeers",req.headers);
          

 let token

 if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
          
          try {
                    
// Get-Token-from-header
token = await req.headers.authorization.split(" ")[1]
console.log("token",token)




// verify-Token
const decoded = await jwt.verify(token,process.env.JWT_SECRET)

console.log("decoded",decoded);

// Get-user-form-the-Token
req.user=await User.findById(decoded.id).select('-password')

         console.log("req.user",req.user);
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