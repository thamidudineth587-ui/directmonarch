import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WhyChooseUs from '@/components/WhyChooseUs'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}