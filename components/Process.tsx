'use client'

import { MessageSquare, FileSearch, Handshake, Package, CheckCircle2, ArrowRight } from 'lucide-react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

function StepCard({ step, index, isEven }: { step: any, index: number, isEven: boolean }) {
  const cardRef = useRef(null)
  const Icon = step.icon
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  })
  
  // Reactive animations based on scroll position
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85])
  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isEven ? [100, 0, -50] : [-100, 0, 50]
  )
  
  // Smooth spring animations
  const smoothX = useSpring(x, { stiffness: 100, damping: 30 })
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 })
  
  return (
    <div 
      ref={cardRef}
      className={`relative flex flex-col lg:flex-row items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
    >
      <motion.div 
        className={`lg:w-1/2 ${isEven ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}
        style={{ opacity, x: smoothX }}
      >
        <motion.div 
          className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow ${isEven ? 'lg:ml-auto' : 'lg:mr-auto'} lg:max-w-md`}
          style={{ scale: smoothScale }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <div className={`flex items-center mb-4 ${isEven ? 'lg:justify-end' : ''}`}>
            <motion.span 
              className="text-5xl font-bold text-primary-100 mr-4"
              style={{ opacity }}
            >
              {step.number}
            </motion.span>
            <motion.div 
              className="bg-primary-600 w-14 h-14 rounded-xl flex items-center justify-center"
              whileInView={{ rotate: 360 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Icon className="w-7 h-7 text-white" />
            </motion.div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {step.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {step.description}
          </p>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center justify-center"
        style={{ scale: smoothScale }}
      >
        <motion.div 
          className="bg-white border-4 border-primary-600 w-12 h-12 rounded-full flex items-center justify-center"
          animate={{ 
            borderColor: ["#1a6a82", "#38a1b8", "#1a6a82"],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="bg-accent-400 w-4 h-4 rounded-full"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
      
      <div className="lg:w-1/2"></div>
    </div>
  )
}

export default function Process() {
  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Initial Consultation",
      description: "We begin with a detailed consultation to understand your specific requirements, budget constraints, and timeline expectations."
    },
    {
      icon: FileSearch,
      number: "02",
      title: "Market Research & Analysis",
      description: "Our team conducts thorough market research, identifies potential suppliers, and analyzes tender opportunities that match your needs."
    },
    {
      icon: Handshake,
      number: "03",
      title: "Tender & Negotiation",
      description: "We manage the entire tender process, negotiate optimal terms, and ensure all documentation meets regulatory requirements."
    },
    {
      icon: Package,
      number: "04",
      title: "Execution & Delivery",
      description: "From customs clearance to final delivery, we handle all logistics, ensuring your goods arrive safely and on schedule."
    },
    {
      icon: CheckCircle2,
      number: "05",
      title: "Post-Service Support",
      description: "Our relationship doesn't end at delivery. We provide ongoing support, handle any issues, and ensure your complete satisfaction."
    }
  ]

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  // Smooth spring animation for the progress line
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <ArrowRight className="w-4 h-4 text-primary-600 mr-2" />
            <span className="text-sm font-medium text-primary-700">How We Work</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined approach that ensures efficiency, transparency, and exceptional results at every step.
          </p>
        </motion.div>

        <div className="relative" ref={containerRef}>
          <div className="absolute hidden lg:block left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />
          <motion.div 
            className="absolute hidden lg:block left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent-300 via-primary-500 to-accent-300 origin-top"
            style={{ scaleY }}
          />
          
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0
              
              return (
                <StepCard 
                  key={index}
                  step={step}
                  index={index}
                  isEven={isEven}
                />
              )
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Experience the Direct Monarch Difference
            </h3>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have streamlined their procurement and customs processes with our expert services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-accent-400 text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-accent-300 transition-colors shadow-lg"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}