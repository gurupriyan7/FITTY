const express = require("express")
const router = express.Router()

const {addMessage}=require("../../controllers/chatController")

//Add-message
router.post("/",addMessage)

module.exports=router;