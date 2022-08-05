const asyncHandler = require('express-async-handler')

// Require-conversationModel
const Conversation = require('../models/conversation')

// Require-messageModel
const Message = require('../models/message')

// Create-conversation
const createConversation = asyncHandler(async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  })
  try {
    const savedConversation = await newConversation.save()
    res.status(200).json(savedConversation)
  } catch (error) {
    res.status(500).json(error)
  }
})

// Get-user-conversation
const getUserConversation = asyncHandler(async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    })
    res.status(200).json(conversation)
  } catch (error) {
    res.status(500)
    throw new Error(error)
  }
})

// Add-message
const addMessage = asyncHandler(async (req, res) => {
  const newMessage = new Message(req.body)

  try {
    const savedMessage = await newMessage.save()
    res.status(200).json(savedMessage)
  } catch (error) {
    res.status(500)
    throw new Error(error)
  }
})

module.exports = { createConversation, getUserConversation, addMessage }
