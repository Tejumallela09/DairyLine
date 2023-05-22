const Subscription = require('../models/subscription');
const Order = require('../models/order');

// Create a new subscription-based order
exports.createSubscriptionOrder = async (req, res) => {
  try {
    const { customerId, restaurantId, products, quantity, deliveryAddress } = req.body;

    // Check if a valid subscription exists for the customer and restaurant
    const subscription = await Subscription.findOne({
      customer: customerId,
      restaurant: restaurantId,
      active: true,
    });

    if (!subscription) {
      return res.status(404).json({ success: false, error: 'Subscription not found' });
    }

    // Create a new order object
    const order = new Order({
      customer: customerId,
      restaurant: restaurantId,
      products,
      quantity,
      deliveryAddress,
    });

    // Save the order to the database
    await order.save();

    res.status(201).json({ success: true, data: order });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all orders for a customer
exports.getCustomerOrders = async (req, res) => {
  try {
    const { customerId } = req.params;

    // Find all orders for the customer
    const orders = await Order.find({ customer: customerId });

    res.json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all orders for a restaurant
exports.getRestaurantOrders = async (req, res) => {
  try {
    const { restaurantId } = req.params;

    // Find all orders for the restaurant
    const orders = await Order.find({ restaurant: restaurantId });

    res.json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
