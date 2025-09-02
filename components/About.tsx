'use client'

import { motion } from 'framer-motion'

export default function About() {
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-light text-primary-900 text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>
        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={paragraphVariants}
            transition={{ delay: 0 }}
          >
            Direct Monarch helps businesses and organizations source goods through competitive tendering. 
            We participate in formal procurement tenders to secure the best pricing and quality for our clients.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={paragraphVariants}
            transition={{ delay: 0.2 }}
          >
            We also assist clients in finding specific items via tender processes when needed. 
            Beyond procurement, we handle customs clearance so shipments move smoothly through ports.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={paragraphVariants}
            transition={{ delay: 0.4 }}
          >
            In addition, we bid on port auctions for unclaimed or surplus cargo, giving clients access to items at auction. 
            Finally, we manage disposal and destruction contracts with customs authorities for excess or seized items, 
            ensuring all handling is safe and compliant.
          </motion.p>
        </div>
      </div>
    </section>
  )
}