const express = require('express')
const getFarmers = require('../controllers/farmerController')
const router = express.Router()

// router.get("/", (req,res) => {
//     res.send("Handling product routes, e.g. search for products")
// })
router.get("/",getFarmers)
module.exports = router
