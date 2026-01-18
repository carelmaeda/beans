import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(10, 29, 77, 0.85) 0%, rgba(10, 29, 77, 0.4) 40%, rgba(10, 29, 77, 0.6) 70%, rgba(10, 29, 77, 0.95) 100%),
          url('https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2007&auto=format&fit=crop')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      {/* Accent Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bean-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-bean-blue/30 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center text-white">
        <span className="inline-block px-5 py-2 mb-8 text-xs font-bold tracking-[0.2em] uppercase border border-bean-accent/40 bg-bean-accent/10 backdrop-blur-md rounded-full text-bean-accent">
          Elite Volleyball Mentorship
        </span>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tight">
          WHERE TALENT
          <br />
          <span className="text-bean-accent italic">BLOOMS</span>
        </h1>

        <p className="max-w-2xl mx-auto mb-12 text-lg md:text-xl text-white/80 leading-relaxed">
          High-performance coaching from <span className="font-semibold text-white">seed to professional.</span>
          <br className="hidden sm:block" />
          Unlock your potential with Coach Mami.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contact"
            className="px-10 py-4 bg-bean-accent text-bean-dark font-bold rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all duration-300"
          >
            START YOUR JOURNEY
          </Link>
          <Link
            href="#coach"
            className="px-10 py-4 border-2 border-white/80 text-white font-bold rounded-full hover:bg-white hover:text-bean-dark transition-all duration-300"
          >
            MEET THE COACH
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-white/60 tracking-widest uppercase">Scroll</span>
        <div className="animate-bounce text-bean-accent">
          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  );
}