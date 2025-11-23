import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { FloatingWhatsAppButton } from '../components/WhatsAppButton'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { config } from '../config'

function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a
                    href={`tel:${config.phone}`}
                    className="text-pink-600 hover:text-pink-700"
                  >
                    {config.phone}
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-gray-700">{config.address}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(config.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-700 mt-2 inline-block"
                  >
                    View on Google Maps →
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Follow Us</h3>
                  <a
                    href={config.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-700"
                  >
                    Instagram →
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Opening Hours</h2>
              
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">Weekdays</p>
                  <p className="text-gray-700">{config.openingHours.weekdays}</p>
                </div>
                
                <div>
                  <p className="font-semibold">Weekends</p>
                  <p className="text-gray-700">{config.openingHours.weekends}</p>
                </div>
                
                <div>
                  <p className="text-gray-600 italic">{config.openingHours.closed}</p>
                </div>
              </div>

              <div className="mt-6">
                <WhatsAppButton
                  message="Hi, I'd like to know more about your boutique."
                  className="w-full"
                >
                  Chat on WhatsApp
                </WhatsAppButton>
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

export default Contact

