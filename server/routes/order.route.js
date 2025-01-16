const express = require("express")
const { orderPlace, getAllUserOrders } = require("../controllers/order.controller")

const orderRoute = express.Router()

orderRoute.post("/placeorder", orderPlace)
orderRoute.post("/getAllUserOrders", getAllUserOrders)

module.exports = orderRoute