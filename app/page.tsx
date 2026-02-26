import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Outcomes from "@/components/Outcomes"
import Services from "@/components/Services"
import About from "@/components/About"
import Testimonials from "@/components/Testimonials"
import Statement from "@/components/Statement"
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Outcomes />
        <Statement />

        <Services />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
