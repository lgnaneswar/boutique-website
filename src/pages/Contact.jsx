import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { FloatingWhatsAppButton } from '../components/WhatsAppButton'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { config } from '../config'

function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-grow pt-24 md:pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-black mb-4 text-center">
              Contact Us
            </h1>
            <div className="w-24 h-px bg-olive-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="bg-white border border-black/10 p-6 md:p-8 animate-fade-in-up">
              <h2 className="text-2xl font-light tracking-wide mb-6 text-black">Get in Touch</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-light mb-2 text-black/60 text-sm">Phone</h3>
                  <a
                    href={`tel:${config.phone}`}
                    className="text-black hover:text-olive-700 font-light transition-colors duration-300"
                  >
                    {config.phone}
                  </a>
                </div>

                <div>
                  <h3 className="font-light mb-2 text-black/60 text-sm">Address</h3>
                  <p className="text-black/70 font-light leading-relaxed">{config.address}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(config.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-olive-700 hover:text-olive-800 mt-2 inline-block font-light transition-colors duration-300"
                  >
                    View on Google Maps →
                  </a>
                </div>

                <div>
                  <h3 className="font-light mb-2 text-black/60 text-sm">Follow Us</h3>
                  <a
                    href={config.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-olive-700 font-light transition-colors duration-300"
                  >
                    Instagram →
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white border border-black/10 p-6 md:p-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-2xl font-light tracking-wide mb-6 text-black">Opening Hours</h2>
              
              <div className="space-y-4 mb-8">
                <div>
                  <p className="font-light text-black/60 text-sm mb-1">Weekdays</p>
                  <p className="text-black/70 font-light">{config.openingHours.weekdays}</p>
                </div>
                
                <div>
                  <p className="font-light text-black/60 text-sm mb-1">Weekends</p>
                  <p className="text-black/70 font-light">{config.openingHours.weekends}</p>
                </div>
                
                <div>
                  <p className="text-black/50 text-sm font-light italic">
                    {config.openingHours.closed}
                  </p>
                </div>
              </div>

              <WhatsAppButton
                message="Hi, I'd like to know more about your boutique."
                className="w-full"
              >
                Chat on WhatsApp
              </WhatsAppButton>
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