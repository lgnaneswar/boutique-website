import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { FloatingWhatsAppButton } from '../components/WhatsAppButton'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { config } from '../config'
import designsData from '../data/designs.json'

function DesignDetail() {
  const { designId } = useParams()
  const design = designsData.designs.find((d) => d.id === designId)
  const category = designsData.categories.find(
    (cat) => cat.id === design?.category
  )
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!design) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Design not found</h1>
            <Link to="/categories" className="text-pink-600 hover:underline">
              Back to Categories
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingItem = cart.find((item) => item.id === design.id)
    
    if (!existingItem) {
      cart.push({
        id: design.id,
        name: design.name,
        price: design.price,
        priceRange: design.priceRange,
        image: design.images?.[0] || '',
        category: design.category
      })
      localStorage.setItem('cart', JSON.stringify(cart))
      // Dispatch custom event to update cart count in Navigation
      window.dispatchEvent(new Event('cartUpdated'))
      alert('Added to cart!')
    } else {
      alert('Item already in cart!')
    }
  }

  const handleShareWhatsApp = () => {
    const message = `I'm interested in this design: ${design.name}. Can you tell me more?`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${config.whatsappPhone}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const handleSuggestDesign = () => {
    const message = `Hi, I want a custom design similar to: ${design.name}. Attaching image here.`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${config.whatsappPhone}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const currentImage = design.images?.[currentImageIndex] || null

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            to={category ? `/category/${category.id}` : '/categories'}
            className="text-pink-600 hover:text-pink-700 mb-4 inline-block"
          >
            ← Back to {category?.name || 'Categories'}
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Carousel */}
            <div>
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                {currentImage ? (
                  <img
                    src={currentImage}
                    alt={design.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                ) : null}
                <div
                  className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center text-6xl"
                  style={{ display: currentImage ? 'none' : 'flex' }}
                >
                  👗
                </div>
              </div>
              
              {/* Thumbnail Navigation */}
              {design.images && design.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {design.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 ${
                        index === currentImageIndex
                          ? 'border-pink-600'
                          : 'border-gray-300'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${design.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.parentElement.style.display = 'none'
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Design Details */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{design.name}</h1>
              {category && (
                <Link
                  to={`/category/${category.id}`}
                  className="text-pink-600 hover:text-pink-700 mb-4 inline-block"
                >
                  {category.name}
                </Link>
              )}
              
              <div className="mb-6">
                <p className="text-3xl font-bold text-pink-600 mb-4">
                  {design.priceRange || `Starting from ₹${design.price}`}
                </p>
                
                {design.description && (
                  <p className="text-gray-700 mb-4">{design.description}</p>
                )}
                
                <div className="space-y-2 mb-4">
                  {design.fabric && (
                    <p>
                      <span className="font-semibold">Fabric:</span> {design.fabric}
                    </p>
                  )}
                  {design.work && (
                    <p>
                      <span className="font-semibold">Work:</span> {design.work}
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Add to Cart
                </button>
                
                <WhatsAppButton
                  message={`I'm interested in this design: ${design.name}. Can you tell me more?`}
                  className="w-full"
                >
                  Share on WhatsApp
                </WhatsAppButton>
                
                <button
                  onClick={handleSuggestDesign}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Suggest Your Design
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}

export default DesignDetail

