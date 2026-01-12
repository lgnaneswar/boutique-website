import { useParams, Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { FloatingWhatsAppButton } from '../components/WhatsAppButton'
import designsData from '../data/designs.json'

function CategoryDetail() {
  const { categoryId } = useParams()
  const category = designsData.categories.find((cat) => cat.id === categoryId)
  const designs = designsData.designs.filter(
    (design) => design.category === categoryId
  )

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <main className="flex-grow flex items-center justify-center pt-24">
          <div className="text-center animate-fade-in">
            <h1 className="text-2xl font-light mb-4 text-black">Category not found</h1>
            <Link to="/categories" className="text-olive-700 hover:text-olive-800 font-light transition-colors duration-300">
              ← Back to Categories
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-grow pt-24 md:pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 animate-fade-in-up">
            <Link
              to="/categories"
              className="inline-flex items-center text-black/60 hover:text-olive-700 mb-6 font-light transition-colors duration-300 group"
            >
              <span className="mr-2 group-hover:-translate-x-1 transition-transform duration-300">←</span>
              Back to Categories
            </Link>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-black mb-4">
              {category.name}
            </h1>
            <div className="w-24 h-px bg-olive-700 mb-4"></div>
            {category.description && (
              <p className="text-black/60 font-light max-w-2xl leading-relaxed">
                {category.description}
              </p>
            )}
          </div>

          {designs.length === 0 ? (
            <div className="text-center py-20 animate-fade-in">
              <p className="text-black/50 text-lg font-light">No designs available in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {designs.map((design, index) => (
                <Link
                  key={design.id}
                  to={`/design/${design.id}`}
                  className="group relative overflow-hidden bg-white border border-black/10 hover:border-olive-700 transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="aspect-square bg-gray-50 overflow-hidden">
                    {design.images && design.images[0] ? (
                      <img
                        src={design.images[0]}
                        alt={design.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                    ) : null}
                    <div
                      className="w-full h-full bg-gray-100 flex items-center justify-center text-4xl"
                      style={{ display: design.images && design.images[0] ? 'none' : 'flex' }}
                    >
                      👗
                    </div>
                  </div>
                  <div className="p-4 md:p-5 bg-white">
                    <h3 className="font-light text-base text-black group-hover:text-olive-700 transition-colors duration-300 line-clamp-2">
                      {design.name}
                    </h3>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-1.5 h-1.5 bg-olive-700 rounded-full"></div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}

export default CategoryDetail