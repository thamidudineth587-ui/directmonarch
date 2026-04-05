import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Our Process' },
    { href: '#contact', label: 'Contact' }
  ]

  const services = [
    { href: '#services', label: 'Procurement & Tender' },
    { href: '#services', label: 'Sourcing Assistance' },
    { href: '#services', label: 'Customs Clearance' },
    { href: '#services', label: 'Port Auctions' },
    { href: '#services', label: 'Disposal Services' }
  ]

  return (
    <footer className="bg-primary-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/logo.png"
                alt="Direct Monarch"
                width={56}
                height={56}
                className="rounded-full"
              />
              <span className="text-2xl font-bold text-white">Direct Monarch</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted partner in global trade, procurement, and customs services. 
              Streamlining international commerce with expertise and efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary-800 p-2 rounded-lg hover:bg-accent-500 hover:text-primary-900 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-primary-800 p-2 rounded-lg hover:bg-accent-500 hover:text-primary-900 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-primary-800 p-2 rounded-lg hover:bg-accent-500 hover:text-primary-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-primary-800 p-2 rounded-lg hover:bg-accent-500 hover:text-primary-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-accent-400 transition-colors flex items-center group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="hover:text-accent-400 transition-colors flex items-center group"
                  >
                    {service.label}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-800">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-sm">
              <p>&copy; {currentYear} Direct Monarch. All rights reserved.</p>
            </div>
            <div className="text-sm md:text-right">
              <p>
                Registered in Sri Lanka | License No: SL/2024/DM-001
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}