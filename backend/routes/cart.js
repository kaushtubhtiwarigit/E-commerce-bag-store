const express = require('express');
const { addToCart, getCart, removeFromCart } = require('../controllers/cartController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.route('/')
  .get(protect, getCart);

router.post('/add', protect, addToCart);
router.delete('/:productId', protect, removeFromCart);

module.exports = router;