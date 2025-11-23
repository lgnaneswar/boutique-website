import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { FloatingWhatsAppButton } from '../components/WhatsAppButton'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { config } from '../config'

function Cart() {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    loadCart()
  }, [])

  const loadCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartItems(cart)
  }

  const removeFromCart = (itemId) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const updatedCart = cart.filter((item) => item.id !== itemId)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    setCartItems(updatedCart)
    // Dispatch custom event to update cart count in Navigation
    window.dispatchEvent(new Event('cartUpdated'))
  }

  const handleSendEnquiry = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!')
      return
    }

    let message = "Hi, I am interested in the following items:\n\n"
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}${item.priceRange ? ` (${item.priceRange})` : ''}\n`
    })
    message += "\nMy name: ______\nPreferred visit time: ______"

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${config.whatsappPhone}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">Your cart is empty!</p>
              <Link
                to="/categories"
                className="text-pink-600 hover:text-pink-700 font-semibold"
              >
                Browse Collections →
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-8">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4"
                  >
                    <div className="w-24 h-24 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'flex'
                          }}
                        />
                      ) : null}
                      <div
                        className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center text-2xl"
                        style={{ display: item.image ? 'none' : 'flex' }}
                      >
                        👗
                      </div>
                    </div>
                    <div className="flex-grow">
                      <Link
                        to={`/design/${item.id}`}
                        className="font-semibold text-lg hover:text-pink-600"
                      >
                        {item.name}
                      </Link>
                      <p className="text-pink-600 font-bold">
                        {item.priceRange || `Starting from ₹${item.price}`}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 font-semibold px-4 py-2"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total Items:</span>
                  <span className="text-lg font-bold">{cartItems.length}</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Prices may vary. Please contact us for exact pricing and availability.
                </p>
                <WhatsAppButton
                  message={(() => {
                    let msg = "Hi, I am interested in the following items:\n\n"
                    cartItems.forEach((item, index) => {
                      msg += `${index + 1}. ${item.name}${item.priceRange ? ` (${item.priceRange})` : ''}\n`
                    })
                    msg += "\nMy name: ______\nPreferred visit time: ______"
                    return msg
                  })()}
                  className="w-full"
                >
                  Send Enquiry on WhatsApp
                </WhatsAppButton>
              </div>

              <div className="text-center">
                <Link
                  to="/categories"
                  className="text-pink-600 hover:text-pink-700 font-semibold"
                >
                  Continue Shopping →
                </Link>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}

export default Cart

