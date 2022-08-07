const express = require("express")
const router = express.Router()
const { protect } =require("../../middleware/authMiddleware")
const {createConversation,getUserConversation}=require("../../controllers/chatController")

// new-conv
router.post('/',createConversation)

// Get-conv-of-a-user
router.get("/:id",protect,getUserConversation)

module.exports=router;