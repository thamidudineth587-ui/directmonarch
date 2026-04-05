'use client'

import { ArrowRight, Globe, Shield, TrendingUp, ChevronDown } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  
  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary-50 via-accent-50 to-white"
        style={{ y: backgroundY }}
      />
      
      <motion.div 
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-primary-300 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent-200 rounded-full blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a6a82' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <motion.div 
        className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center"
        style={{ y: textY }}
      >
        <motion.div 
          className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Shield className="w-4 h-4 text-primary-600 mr-2" />
          <span className="text-sm font-medium text-primary-700">Trusted by 500+ Global Businesses</span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary-900 via-primary-700 to-accent-600 bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Direct Monarch
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-3xl text-gray-700 font-light mb-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Your Gateway to Seamless Global Trade & Procurement Excellence
        </motion.p>
        
        <motion.p 
          className="text-lg text-gray-600 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Streamline your international trade operations with our comprehensive procurement, 
          customs clearance, and logistics solutions. From tender sourcing to port auctions, 
          we handle complexity so you can focus on growth.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a 
            href="#contact" 
            className="group bg-accent-400 text-primary-900 px-8 py-4 rounded-lg hover:bg-accent-500 transition-all flex items-center text-lg font-semibold shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Free Consultation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a 
            href="#services" 
            className="group bg-white text-primary-700 px-8 py-4 rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-all flex items-center text-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Services
            <Globe className="ml-2 w-5 h-5" />
          </motion.a>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { icon: TrendingUp, stat: "15+ Years", label: "Industry Experience" },
            { icon: Globe, stat: "50+ Countries", label: "Global Reach" },
            { icon: Shield, stat: "100% Compliant", label: "Certified Operations" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="flex items-center justify-center space-x-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="bg-primary-100 p-3 rounded-lg"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className="w-6 h-6 text-primary-600" />
              </motion.div>
              <div className="text-left">
                <p className="text-2xl font-bold text-gray-900">{item.stat}</p>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-primary-400" />
      </motion.div>
    </section>
  )
}