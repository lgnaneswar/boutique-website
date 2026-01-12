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
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <main className="flex-grow flex items-center justify-center pt-24">
          <div className="text-center animate-fade-in">
            <h1 className="text-2xl font-light mb-4 text-black">Design not found</h1>
            <Link to="/categories" className="text-olive-700 hover:text-olive-800 font-light transition-colors duration-300">
              ← Back to Categories
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
        image: design.images?.[0] || '',
        category: design.category
      })
      localStorage.setItem('cart', JSON.stringify(cart))
      window.dispatchEvent(new Event('cartUpdated'))
      alert('Added to cart!')
    } else {
      alert('Item already in cart!')
    }
  }

  const handleShareWhatsApp = () => {
    const baseUrl = window.location.origin
    const productUrl = `${baseUrl}/design/${design.id}`
    const message = `I'm interested in this design: ${design.name}.\n\nView it here: ${productUrl}\n\nCan you tell me more?`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${config.whatsappPhone}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const handleSuggestDesign = () => {
    const baseUrl = window.location.origin
    const productUrl = `${baseUrl}/design/${design.id}`
    const message = `Hi, I want a custom design similar to: ${design.name}.\n\nReference: ${productUrl}\n\nAttaching image here.`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${config.whatsappPhone}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const currentImage = design.images?.[currentImageIndex] || null

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-grow pt-24 md:pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Link
            to={category ? `/category/${category.id}` : '/categories'}
            className="inline-flex items-center text-black/60 hover:text-olive-700 mb-8 font-light transition-colors duration-300 group animate-fade-in"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform duration-300">←</span>
            Back to {category?.name || 'Categories'}
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Image Carousel */}
            <div className="animate-fade-in-up">
              <div className="bg-gray-50 rounded-sm overflow-hidden mb-4 flex items-center justify-center min-h-[400px] border border-black/5">
                {currentImage ? (
                  <img
                    src={currentImage}
                    alt={design.name}
                    className="w-full h-auto max-h-[80vh] object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                ) : null}
                <div
                  className="w-full h-full bg-gray-100 flex items-center justify-center text-6xl min-h-[400px]"
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
                      className={`flex-shrink-0 w-20 h-20 rounded-sm overflow-hidden border-2 transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'border-olive-700'
                          : 'border-black/10 hover:border-olive-500'
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
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {category && (
                <Link
                  to={`/category/${category.id}`}
                  className="inline-block text-sm text-olive-700 hover:text-olive-800 mb-4 font-light transition-colors duration-300"
                >
                  {category.name}
                </Link>
              )}
              <h1 className="text-3xl md:text-4xl font-light tracking-tight text-black mb-6">
                {design.name}
              </h1>
              
              <div className="w-16 h-px bg-olive-700 mb-6"></div>
              
              <div className="mb-8">
                {design.description && (
                  <p className="text-black/70 mb-6 font-light leading-relaxed">
                    {design.description}
                  </p>
                )}
                
                {design.category !== "designer-blouses" && (
                  <div className="space-y-3 mb-6">
                    {design.fabric && (
                      <div className="flex items-start">
                        <span className="text-black/40 font-light text-sm w-20 flex-shrink-0">Fabric:</span>
                        <span className="text-black/70 font-light">{design.fabric}</span>
                      </div>
                    )}
                    {design.work && (
                      <div className="flex items-start">
                        <span className="text-black/40 font-light text-sm w-20 flex-shrink-0">Work:</span>
                        <span className="text-black/70 font-light">{design.work}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-black text-white font-light tracking-wide py-3 px-6 hover:bg-olive-700 transition-all duration-300 hover:scale-[1.02]"
                >
                  Add to Cart
                </button>
                
                <WhatsAppButton
                  message={(() => {
                    const baseUrl = window.location.origin
                    const productUrl = `${baseUrl}/design/${design.id}`
                    return `I'm interested in this design: ${design.name}.\n\nView it here: ${productUrl}\n\nCan you tell me more?`
                  })()}
                  className="w-full"
                >
                  Share on WhatsApp
                </WhatsAppButton>
                
                <button
                  onClick={handleSuggestDesign}
                  className="w-full border border-black text-black font-light tracking-wide py-3 px-6 hover:bg-black hover:text-white transition-all duration-300"
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