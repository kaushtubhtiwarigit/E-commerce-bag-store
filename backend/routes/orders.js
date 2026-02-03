const express = require('express');
const {
  createOrder,
  getUserOrders,
  getOrder,
  getAllOrders
} = require('../controllers/orderController');
const { protect, admin } = require('../middleware/auth');

const router = express.Router();

router.route('/')
  .get(protect, getUserOrders)
  .post(protect, createOrder);

router.get('/admin/all', protect, admin, getAllOrders);
router.get('/:id', protect, getOrder);

module.exports = router;