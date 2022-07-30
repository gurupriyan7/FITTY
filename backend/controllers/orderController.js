const asyncHandler = require('express-async-handler')
const Razorpay = require('razorpay')
const moment = require('moment');

// require-order-Model
const Order = require('../models/orderModel');
const PlansModel = require('../models/PlansModel');

// razorpay
const getRazorpayKey = asyncHandler(async (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_KEY_ID })
})

// create-order
const createOrder = asyncHandler(async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    })
    const options = {
      amount: req.body.amount,
      currency: 'INR',
    }
    const order = await instance.orders.create(options)
    if (!order) return res.status(500).json('Some error occured')
    res.json(order)
  } catch (error) {
    res.status(500)
    throw new Error(error)
  }
})
// pay-order
const payorder = asyncHandler(async (req, res) => {
  try {
    const {
      amount,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
      trainer,
      plan,
      user
    } = req.body
    const date = moment(new Date()).format('YYYY/MM/DD')
    const expry = moment(date).add(30,'days').format('YYYY/MM/DD')
    const newOrder = Order({
      isPaid: true,
      amount: amount,
      trainer:trainer,
      user:user,
      plan:plan,
      date:date,
      expry:expry,
      razorpay: {
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
        signature: razorpaySignature,
      },
    })
    await newOrder.save()
    res.status(200).json({ msg: 'Payment was successfull' })
  } catch (error) {
    console.log('error', error)
    res.status(500).json(error)
  }
})

// get-orders
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find()
  res.status(200).json(orders)
})
module.exports = {
  getRazorpayKey,
  createOrder,
  payorder,
  getOrders,
}
