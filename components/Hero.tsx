import Link from 'next/link';
import {  ArrowRight, ShieldCheck, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[95vh] flex flex-col bg-bean-dark overflow-hidden">
      
      {/* 1. Background Layer */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0A0C10 10%, rgba(10, 12, 16, 0.7) 50%, rgba(10, 12, 16, 0.3) 100%),
            linear-gradient(to bottom, transparent 70%, #0A0C10 100%),
            url('https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2007&auto=format&fit=crop')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* 2. Main Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-5xl mx-auto px-6 w-full pt-20 pb-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="px-3 py-1 bg-bean-blue text-[10px] font-black tracking-[0.3em] uppercase text-white rounded-sm">
            Elite Mentorship
          </span>
          <div className="h-[2px] w-12 bg-bean-accent" />
        </div>

        <h1 className="text-[14vw] md:text-[7rem] font-black text-white leading-[0.8] tracking-tighter uppercase mb-8">
          SEED <br />
          TO <br />
          <span className="text-bean-accent italic drop-shadow-[0_0_20px_rgba(242,201,76,0.2)]">PRO</span>
        </h1>

        <div className="max-w-xl border-l-4 border-bean-blue pl-6 mb-10">
          <p className="text-lg md:text-xl text-white/60 font-medium leading-relaxed">
         Hi!   I&apos;m Mami. <span className="text-white">Let&apos;s grow your game.</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <Button
            asChild
            className="h-auto px-10 py-5 bg-bean-accent text-bean-dark font-black rounded-xl hover:bg-white transition-all text-lg uppercase shadow-2xl shadow-bean-accent/10"
          >
            <Link href="#contact" className="flex items-center gap-3">
              Start Now <ArrowRight size={22} strokeWidth={3} />
            </Link>
          </Button>
          
          <Link 
            href="#coach" 
            className="group flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white/40 hover:text-bean-accent transition-colors"
          >
            <span className="w-10 h-[2px] bg-white/10 group-hover:w-16 group-hover:bg-bean-accent transition-all" />
            About Me
          </Link>
        </div>
      </div>

      {/* 3. Refined Bottom Bento Bar */}
      <div className="relative z-20 w-full bg-[#0D0F14]/80 backdrop-blur-xl border-t border-white/5 py-5">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6">

          {/* Stats Group */}
          <div className="flex items-center gap-8 md:gap-12">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-bean-blue/10 rounded-lg">
                <ShieldCheck className="text-bean-blue" size={20} />
              </div>
              <div>
                <p className="text-white font-black text-lg leading-none uppercase">JVA</p>
                <p className="text-white/30 uppercase font-black tracking-[0.1em] mt-1">Certified Coach</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2 bg-bean-accent/10 rounded-lg">
                <Trophy className="text-bean-accent" size={20} />
              </div>
              <div>
                <p className="text-white font-black text-lg leading-none uppercase">15+ Yrs</p>
                <p className=" text-white/30 uppercase font-black tracking-[0.1em] mt-1">Global Experience</p>
              </div>
            </div>

          </div>


        </div>
      </div>

      {/* Decorative Vertical Text - Moved deeper into the background */}
      <div className="absolute right-[-4rem] top-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none hidden 2xl:block">
        <p className="text-[20rem] font-black writing-vertical-rl text-white uppercase tracking-tighter">
          BEANS
        </p>
      </div>

    </section>
  );
}