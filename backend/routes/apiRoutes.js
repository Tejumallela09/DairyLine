const express = require("express");
const app = express();
const farmerRoutes = require("./farmerRoutes");
const categoryRoutes = require("./categoryRoutes");
const userRoutes = require("./userRoutes");
const orderRoutes = require("./orderRoutes");
const productRoutes = require("./productRoutes");
const transactionRoutes = require("./transactionRoutes");

app.use("/farmers", farmerRoutes);
app.use("/categories", categoryRoutes);
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);
app.use("/products", productRoutes);
app.use("/transaction", transactionRoutes);
module.exports = app;
