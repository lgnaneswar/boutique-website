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
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Category not found</h1>
            <Link to="/categories" className="text-pink-600 hover:underline">
              Back to Categories
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link
              to="/categories"
              className="text-pink-600 hover:text-pink-700 mb-4 inline-block"
            >
              ← Back to Categories
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{category.name}</h1>
            {category.description && (
              <p className="text-gray-600">{category.description}</p>
            )}
          </div>

          {designs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No designs available in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {designs.map((design) => (
                <Link
                  key={design.id}
                  to={`/design/${design.id}`}
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden"
                >
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    {design.images && design.images[0] ? (
                      <img
                        src={design.images[0]}
                        alt={design.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                    ) : null}
                    <div
                      className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center text-4xl"
                      style={{ display: design.images && design.images[0] ? 'none' : 'flex' }}
                    >
                      👗
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 line-clamp-2">
                      {design.name}
                    </h3>
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

