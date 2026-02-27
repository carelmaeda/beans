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
import BrushDivider from "@/components/BrushDivider"

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Outcomes />
        <BrushDivider variant="on-dark" className="bg-brand-blue-dark" />
        <Services />
        <BrushDivider variant="on-light" />
        <Statement />
        <BrushDivider variant="on-dark" className="bg-brand-blue-dark" />
        <About />
        <Testimonials />
        <FAQ />
        <BrushDivider variant="on-light" className="bg-brand-blue-light" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
