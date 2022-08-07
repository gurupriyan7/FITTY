const express = require("express")
const router = express.Router()

const {addMessage,getMessages}=require("../../controllers/chatController")

//Add-message
router.post("/",addMessage)

// Get-message
router.get("/:conversationId",getMessages)

module.exports=router;