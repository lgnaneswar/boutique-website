import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { FloatingWhatsAppButton } from '../components/WhatsAppButton'
import designsData from '../data/designs.json'

function Categories() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-grow pt-24 md:pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-black mb-4">
              Browse Our Collections
            </h1>
            <div className="w-24 h-px bg-olive-700"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {designsData.categories.map((category, index) => (
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
                    className="w-full h-full bg-gray-100 flex items-center justify-center text-5xl"
                    style={{ display: category.image ? 'none' : 'flex' }}
                  >
                    👗
                  </div>
                </div>
                <div className="p-4 md:p-6 bg-white">
                  <h3 className="font-light text-base md:text-lg text-black group-hover:text-olive-700 transition-colors duration-300 mb-1">
                    {category.name}
                  </h3>
                  {category.description && (
                    <p className="text-sm text-black/50 font-light line-clamp-2 mt-2">
                      {category.description}
                    </p>
                  )}
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-olive-700 rounded-full"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}

export default Categories