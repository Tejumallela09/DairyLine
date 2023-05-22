const Order = require("../models/OrderModel");
const ObjectId = require("mongodb").ObjectId;
const Farmer = require("../models/FarmerModel");
const getUserOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: new ObjectId(req.user._id) });
    res.send(orders);
  } catch (er) {
    next(er);
  }
};
const getOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user", " -password -isAdmin -_id -__v -createdAt -updatedAt")
      .orFail();
    res.send(order);
  } catch (er) {
    next(er);
  }
};
const createOrder = async (req, res, next) => {
  try {
    const { cartItems, frequency } = req.body; // Assuming these fields are provided in the request body
    if (!cartItems || !frequency) {
      return res.status(400).send("All inputs are required!");
    }

    const farmer = await Farmer.findById(req.params.id);

    let days;
    if (frequency === "daily") {
      days = "everyday";
    } else {
      // Assuming you have a 'days' variable defined or available in the scope
      days = days;
    }

    // Create a new order instance
    const order = new Order({
      user: new ObjectId(req.user._id),
      farmer: farmer,
      cartItems: cartItems,
      frequency: frequency,
      days: days,
    });

    // Save the order to the database
    const createdOrder = await order.save();

    console.log(createdOrder); // Check the value of createdOrder in the console

    res.status(201).json(createdOrder); // Return the created order as the response
  } catch (error) {
    next(error);
  }
};
const getFarmerOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ farmer: req.params.id })
      .populate("user", " -password -isAdmin -_id -__v -createdAt -updatedAt")
      .orFail();
    return res.send(orders);
  } catch (er) {
    next(er);
  }
};
const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({}).populate("user", "-password").sort({});
    res.send(orders);
  } catch (er) {
    next(er);
  }
};

module.exports = {
  getUserOrders,
  getOrder,
  createOrder,
  getOrders,
  getFarmerOrders,
};
