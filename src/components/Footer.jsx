import { config } from '../config'
import { WhatsAppButton } from './WhatsAppButton'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{config.boutiqueName}</h3>
            <p className="text-gray-400">{config.address}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">Phone: {config.phone}</p>
            <WhatsAppButton
              message="Hi, I'd like to know more about your boutique."
              className="mt-2"
            >
              Chat on WhatsApp
            </WhatsAppButton>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <a
              href={config.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400"
            >
              Instagram
            </a>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Opening Hours</h4>
              <p className="text-gray-400 text-sm">
                Weekdays: {config.openingHours.weekdays}
              </p>
              <p className="text-gray-400 text-sm">
                Weekends: {config.openingHours.weekends}
              </p>
              <p className="text-gray-400 text-sm">
                {config.openingHours.closed}
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {config.boutiqueName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

