import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { FloatingWhatsAppButton } from '../components/WhatsAppButton'
import { config } from '../config'
import designsData from '../data/designs.json'

function Home() {
  const previewCategories = designsData.categories.slice(0, 6)

  const handleScheduleVisit = () => {
    const message = "Hi, I'd like to schedule a visit. My name is ______."
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${config.whatsappPhone}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      {/* Hero Section - Minimalistic */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
          <meta name="google-site-verification" content="9MbvLmmb9s3tqcd4lfWbVNh-l7ESDh7FAGzDINTm0Cw" />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-black mb-6 text-balance">
              {config.boutiqueName}
            </h1>
            <div className="w-24 h-px bg-olive-700 mb-8 animate-slide-in"></div>
            <p className="text-lg md:text-xl text-black/70 font-light mb-12 max-w-2xl leading-relaxed">
              Discover our exquisite collection of designer wear, crafted with precision and elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/categories"
                className="group inline-flex items-center justify-center px-8 py-3 bg-black text-white font-light tracking-wide hover:bg-olive-700 transition-all duration-300 hover:scale-[1.02]"
              >
                Browse Catalogue
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              <button
                onClick={handleScheduleVisit}
                className="inline-flex items-center justify-center px-8 py-3 border border-black text-black font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Preview Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-12 text-center tracking-tight">
            Our Collections
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
            {previewCategories.map((category, index) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="group relative overflow-hidden bg-white border border-black/10 hover:border-olive-700 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden bg-gray-50">
                  {category.image ? (
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                  ) : null}
                  <div
                    className="w-full h-full bg-gray-100 flex items-center justify-center text-4xl"
                    style={{ display: category.image ? 'none' : 'flex' }}
                  >
                    👗
                  </div>
                </div>
                <div className="p-4 md:p-6 bg-white">
                  <h3 className="font-light text-base md:text-lg text-black group-hover:text-olive-700 transition-colors duration-300">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/categories"
              className="inline-flex items-center text-black font-light tracking-wide hover:text-olive-700 transition-colors duration-300 group"
            >
              View All Categories
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}

export default Home