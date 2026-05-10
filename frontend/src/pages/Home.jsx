import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const [products, setProducts] = useState([])
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { value: 'all', label: 'All Bags' },
    { value: 'handbags', label: 'Handbags' },
    { value: 'backpacks', label: 'Backpacks' },
    { value: 'tote-bags', label: 'Tote Bags' },
    { value: 'crossbody', label: 'Crossbody' },
    { value: 'clutches', label: 'Clutches' }
  ]

  useEffect(() => {
    fetchProducts()
    fetchFeaturedProducts()
  }, [selectedCategory, searchTerm])

  const fetchProducts = async () => {
    try {
      const params = {}
      if (selectedCategory !== 'all') params.category = selectedCategory
      if (searchTerm) params.search = searchTerm
      
      const response = await axios.get('/api/products', { params })
      setProducts(response.data)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchFeaturedProducts = async () => {
    try {
      const response = await axios.get('/api/products', { params: { featured: true } })
      setFeaturedProducts(response.data)
    } catch (error) {
      console.error('Error fetching featured products:', error)
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
        <div className="relative">
          <div className="animate-spin rounded-full h-20 w-20 border-4 border-gray-200"></div>
          <div className="animate-spin rounded-full h-20 w-20 border-4 border-primary-600 border-t-transparent absolute top-0 left-0"></div>
        </div>
        <p className="mt-4 text-gray-600 font-medium">Loading amazing bags...</p>
      </div>
    )
  }

  return (
    <div className="container py-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 rounded-2xl text-white p-8 md:p-12 mb-12 overflow-hidden shadow-xl">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
        
        <div className="relative max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Premium Bag Collection
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-primary-100">
            Discover our curated selection of handbags, backpacks, and accessories. Quality craftsmanship meets modern style.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
            className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-primary-50 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for bags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-4 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm transition-all duration-200"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      {!searchTerm && featuredProducts.length > 0 && (
        <section className="mb-12 animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <span className="text-sm text-primary-600 font-medium">Handpicked for you</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map(category => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-200 ${
              selectedCategory === category.value
                ? 'bg-primary-600 text-white shadow-md scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200 hover:border-primary-300'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* All Products */}
      <section className="animate-fade-in">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {selectedCategory === 'all' ? 'All Bags' : categories.find(c => c.value === selectedCategory)?.label}
          {searchTerm && (
            <span className="text-xl text-gray-600 ml-2">
              - Results for "{searchTerm}"
            </span>
          )}
        </h2>
        
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-500 text-lg font-medium">
              {searchTerm ? `No bags found for "${searchTerm}"` : 'No bags found in this category'}
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Try adjusting your search or browse other categories
            </p>
          </div>
        )}
      </section>
    </div>
  )
}

export default Home