'use client'

import { CheckCircle, Clock, DollarSign, Shield, Users, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Cost-Effective Solutions",
      description: "Leverage our extensive network and expertise to secure the best prices through competitive bidding and strategic negotiations."
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Expedited processing and clearance with our streamlined procedures, reducing delays and keeping your supply chain moving."
    },
    {
      icon: Shield,
      title: "100% Compliance",
      description: "Full regulatory compliance with international trade laws, customs regulations, and industry standards for peace of mind."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated professionals with decades of combined experience in procurement, customs, and international trade."
    },
    {
      icon: Zap,
      title: "End-to-End Service",
      description: "Complete solutions from sourcing to delivery, including documentation, clearance, and logistics management."
    },
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Successfully handled thousands of procurement projects and customs clearances for businesses worldwide."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Direct Monarch?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with us for unmatched expertise, reliability, and value in international trade and procurement services.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent-400 transition-colors"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-7 h-7 text-primary-600 group-hover:text-primary-900 transition-colors" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="mt-16 bg-primary-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Ready to Optimize Your Supply Chain?
              </h3>
              <p className="text-primary-100 text-lg mb-6">
                Join hundreds of businesses that trust Direct Monarch for their procurement and customs needs.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-accent-400 text-primary-900 px-6 py-3 rounded-lg font-semibold hover:bg-accent-300 transition-colors"
              >
                Start Your Journey
                <CheckCircle className="ml-2 w-5 h-5" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold">500+</p>
                <p className="text-primary-200">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold">10K+</p>
                <p className="text-primary-200">Shipments Cleared</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold">$50M+</p>
                <p className="text-primary-200">Savings Generated</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold">98%</p>
                <p className="text-primary-200">Client Retention</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}