const express = require('express')
const getOrders = require('../controllers/ordersController')
const router = express.Router()

// router.get("/", (req,res) => {
//     res.send("Handling product routes, e.g. search for products")
// })
router.get("/",getOrders)
module.exports = router
