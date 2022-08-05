const express = require("express")
const router = express.Router()

const {createConversation,getUserConversation}=require("../../controllers/chatController")

// new-conv
router.post('/',createConversation)

// Get-conv-of-a-user
router.get("/:userId",getUserConversation)

module.exports=router;