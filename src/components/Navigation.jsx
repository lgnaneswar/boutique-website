import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { config } from '../config'

function Navigation() {
  const [cartCount, setCartCount] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]')
      setCartCount(cart.length)
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    updateCartCount()
    window.addEventListener('storage', updateCartCount)
    window.addEventListener('cartUpdated', updateCartCount)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('storage', updateCartCount)
      window.removeEventListener('cartUpdated', updateCartCount)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link 
            to="/" 
            className="text-lg sm:text-xl md:text-2xl font-light tracking-tight text-black hover:text-olive-700 transition-colors duration-300"
          >
            {config.boutiqueName}
          </Link>
          <div className="flex items-center space-x-6 md:space-x-8">
            <Link
              to="/categories"
              className={`text-sm md:text-base font-light tracking-wide transition-colors duration-300 ${
                location.pathname === '/categories' 
                  ? 'text-olive-700 border-b border-olive-700 pb-1' 
                  : 'text-black hover:text-olive-700'
              }`}
            >
              Catalogue
            </Link>
            <Link
              to="/contact"
              className={`text-sm md:text-base font-light tracking-wide transition-colors duration-300 ${
                location.pathname === '/contact' 
                  ? 'text-olive-700 border-b border-olive-700 pb-1' 
                  : 'text-black hover:text-olive-700'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/cart"
              className="relative text-sm md:text-base font-light tracking-wide text-black hover:text-olive-700 transition-colors duration-300"
            >
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-olive-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-scale-in">
                  {cartCount}
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