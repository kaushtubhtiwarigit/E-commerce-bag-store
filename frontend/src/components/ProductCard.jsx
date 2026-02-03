import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()
  const { isAuthenticated } = useAuth()

  const handleAddToCart = (e) => {
    e.preventDefault()
    if (isAuthenticated) {
      addToCart(product, 1)
    }
  }

  return (
    <div className="card hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product._id}`}>
        <div className="aspect-w-1 aspect-h-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary-600">
              ${product.price}
            </span>
            {product.stock > 0 ? (
              <span className="text-green-600 text-sm">In Stock</span>
            ) : (
              <span className="text-red-600 text-sm">Out of Stock</span>
            )}
          </div>
        </div>
      </Link>
      
      {isAuthenticated && product.stock > 0 && (
        <div className="p-4 pt-0">
          <button
            onClick={handleAddToCart}
            className="w-full btn-primary"
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  )
}

export default ProductCard