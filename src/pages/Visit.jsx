import { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { FloatingWhatsAppButton } from '../components/WhatsAppButton'
import { config } from '../config'

function Visit() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const message = `Hi, I would like to schedule a visit on ${formData.date || '[date]'} at ${formData.time || '[time]'}. My name is ${formData.name || '______'}.${formData.phone ? ` My phone number is ${formData.phone}.` : ''}`
    
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${config.whatsappPhone}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-grow pt-24 md:pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-black mb-4 text-center">
              Schedule a Visit
            </h1>
            <div className="w-24 h-px bg-olive-700 mx-auto"></div>
          </div>

          <div className="bg-white border border-black/10 p-6 md:p-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-black/60 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-black/10 focus:border-olive-700 focus:outline-none transition-colors duration-300 bg-white font-light"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-light text-black/60 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-black/10 focus:border-olive-700 focus:outline-none transition-colors duration-300 bg-white font-light"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-light text-black/60 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-black/10 focus:border-olive-700 focus:outline-none transition-colors duration-300 bg-white font-light"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-light text-black/60 mb-2">
                  Preferred Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-black/10 focus:border-olive-700 focus:outline-none transition-colors duration-300 bg-white font-light"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-light tracking-wide py-3 px-6 hover:bg-olive-700 transition-all duration-300 hover:scale-[1.02]"
              >
                Confirm via WhatsApp
              </button>
            </form>

            <p className="mt-6 text-sm text-black/50 text-center font-light">
              * Clicking the button will open WhatsApp with a pre-filled message. You can edit it before sending.
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}

export default Visit