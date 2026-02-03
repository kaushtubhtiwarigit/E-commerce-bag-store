const Product = require('../models/Product');

// @desc    Add item to cart
// @route   POST /api/cart/add
// @access  Private
const addToCart = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;

    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Check stock
    if (product.stock < quantity) {
      return res.status(400).json({ message: 'Not enough stock available' });
    }

    // In a real app, you'd store cart in database
    // For simplicity, we'll just return the cart item
    const cartItem = {
      product: {
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image
      },
      quantity,
      total: product.price * quantity
    };

    res.json({ message: 'Item added to cart', cartItem });
  } catch (error) {
    console.error('Add to cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get cart items
// @route   GET /api/cart
// @access  Private
const getCart = async (req, res) => {
  try {
    // In a real app, you'd fetch from database
    // For now, return empty cart
    res.json({ items: [], total: 0 });
  } catch (error) {
    console.error('Get cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Remove item from cart
// @route   DELETE /api/cart/:productId
// @access  Private
const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    
    // In a real app, you'd remove from database
    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    console.error('Remove from cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart
};