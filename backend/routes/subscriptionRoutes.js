const express = require('express');
const router = express.Router();

const subscriptionController = require('../controllers/subscriptionController');

// Create a new subscription-based order
router.post('/orders', subscriptionController.createSubscriptionOrder);

// Get all orders for a customer
router.get('/customers/:customerId/orders', subscriptionController.getCustomerOrders);

// Get all orders for a restaurant
router.get('/restaurants/:restaurantId/orders', subscriptionController.getRestaurantOrders);

module.exports = router;
