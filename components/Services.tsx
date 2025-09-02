'use client'

import { FileText, Search, Ship, Trash2, ArrowRight, CheckCircle, Globe, Package } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: "Procurement & Tender Sourcing",
      shortDesc: "Strategic procurement through competitive bidding",
      description: "We manage end-to-end procurement projects through public tenders, inviting multiple bids to secure optimal pricing and quality for our clients.",
      features: [
        "Tender preparation and submission",
        "Vendor evaluation and selection",
        "Contract negotiation",
        "Quality assurance"
      ],
      highlight: "Average 30% cost savings"
    },
    {
      icon: Search,
      title: "Client Sourcing Assistance",
      shortDesc: "Expert guidance in product acquisition",
      description: "We help clients identify and acquire specific products via formal tender processes, providing expert guidance at every step.",
      features: [
        "Market research and analysis",
        "Supplier identification",
        "RFQ/RFP management",
        "Procurement strategy development"
      ],
      highlight: "98% sourcing success rate"
    },
    {
      icon: Ship,
      title: "Customs Clearance & Port Auctions",
      shortDesc: "Seamless import procedures and auction opportunities",
      description: "Complete customs clearance services for swift import processing, plus exclusive access to port auction sales of valuable cargo.",
      features: [
        "Import/export documentation",
        "Tariff classification",
        "Duty optimization",
        "Port auction bidding"
      ],
      highlight: "24-hour clearance guarantee"
    },
    {
      icon: Trash2,
      title: "Disposal & Destruction Services",
      shortDesc: "Compliant handling of surplus and seized goods",
      description: "Government-contracted disposal and destruction services for surplus, expired, or seized items with full compliance and environmental responsibility.",
      features: [
        "Secure destruction protocols",
        "Environmental compliance",
        "Certificate of destruction",
        "Recycling coordination"
      ],
      highlight: "100% regulatory compliance"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
          >
            <Package className="w-4 h-4 text-primary-600 mr-2" />
            <span className="text-sm font-medium text-primary-700">Comprehensive Solutions</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From procurement to delivery, we offer complete supply chain solutions tailored to your business needs.
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300"
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <motion.div 
                    className="bg-primary-600 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {service.highlight}
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Need a custom solution? We offer tailored services to meet your unique requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
          >
            <Globe className="mr-2 w-5 h-5" />
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  )
}