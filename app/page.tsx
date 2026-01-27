import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CoachMami from '@/components/CoachMami';
import Services from '@/components/Services';
import Roadmap from '@/components/Roadmap';
import Values from '@/components/Values';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CoachMami />
        <Services />
        <Roadmap />
        <Values />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
