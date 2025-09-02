import { Mail, Phone, MapPin, Clock, Globe2 } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-800 rounded-full mb-4">
            <Globe2 className="w-4 h-4 text-primary-300 mr-2" />
            <span className="text-sm font-medium text-primary-200">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto">
            Ready to optimize your procurement and customs processes? Reach out to our expert team today.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-700 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-primary-200 mb-1">Email Us</p>
                  <a href="mailto:directmonarch@gmail.com" className="text-white text-lg hover:text-primary-200 transition">
                    directmonarch@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-700 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-primary-200 mb-1">Call Us</p>
                  <a href="tel:+94703355511" className="text-white text-lg hover:text-primary-200 transition">
                    +94 70 335 5511
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-700 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-primary-200 mb-1">Visit Us</p>
                  <p className="text-white text-lg">
                    No 96/2/4, Consistory Building<br />
                    Colombo 11, Sri Lanka
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-700 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-primary-200 mb-1">Business Hours</p>
                  <p className="text-white">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 text-center">
            <h4 className="text-2xl font-bold text-gray-900 mb-3">
              Quick Response Guarantee
            </h4>
            <p className="text-gray-800 mb-4">
              We respond to all inquiries within 24 hours. For urgent matters, please call us directly.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <span className="inline-flex items-center px-4 py-2 bg-white/90 rounded-full text-sm font-semibold text-gray-900">
                <Clock className="w-4 h-4 mr-1" />
                24hr Response Time
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}