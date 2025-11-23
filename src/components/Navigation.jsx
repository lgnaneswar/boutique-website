import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { config } from '../config'

function Navigation() {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]')
      setCartCount(cart.length)
    }

    // Update on mount
    updateCartCount()

    // Listen for storage changes (when cart is updated from other tabs/components)
    window.addEventListener('storage', updateCartCount)
    
    // Custom event for same-tab updates
    window.addEventListener('cartUpdated', updateCartCount)

    return () => {
      window.removeEventListener('storage', updateCartCount)
      window.removeEventListener('cartUpdated', updateCartCount)
    }
  }, [])

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <Link to="/" className="text-base sm:text-xl md:text-2xl font-bold text-pink-600 leading-tight">
            {config.boutiqueName}
          </Link>
          <div className="flex space-x-1 sm:space-x-3 md:space-x-4">
            <Link
              to="/categories"
              className="text-gray-700 hover:text-pink-600 px-1 sm:px-2 md:px-3 py-2 rounded-md text-xs sm:text-sm font-medium"
            >
              Catalogue
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-pink-600 px-1 sm:px-2 md:px-3 py-2 rounded-md text-xs sm:text-sm font-medium"
            >
              Contact
            </Link>
            <Link
              to="/cart"
              className="text-gray-700 hover:text-pink-600 px-1 sm:px-2 md:px-3 py-2 rounded-md text-xs sm:text-sm font-medium relative"
            >
              Cart
              {cartCount > 0 && (
                <span className="ml-0.5 sm:ml-1 text-pink-600 font-semibold text-xs sm:text-sm">
                  ({cartCount})
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

