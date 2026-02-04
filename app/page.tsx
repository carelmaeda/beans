import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Outcomes from "@/components/Outcomes";
import Services from "@/components/Services";
import CoachMami from "@/components/CoachMami";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Outcomes />
        <Services />
        <CoachMami />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
