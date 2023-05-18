const express = require("express")
const app = express()
const farmerRoutes = require("./farmerRoutes")

app.use("/farmers", farmerRoutes)

module.exports = app
