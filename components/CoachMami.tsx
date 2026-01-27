import Image from 'next/image';
import { User, Lightbulb, Star } from 'lucide-react';

export default function CoachMami() {
  return (
    <section id="coach" className="relative py-24 bg-white px-6 overflow-hidden">
      {/* Background Vertical Watermark: "Volleyball" in Japanese */}
      <div className="absolute right-4 top-1/4 hidden lg:block select-none opacity-[0.03] pointer-events-none">
        <p className="text-[12rem] font-black writing-vertical-rl tracking-widest text-bean-dark">
          バレーボール
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex items-end gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-bean-dark tracking-tighter mb-4 uppercase">
              About <span className="text-bean-blue">Me</span>
            </h2>
              {/* Japanese Name */}
          <p className="px-2 py-1 text-gray-400 font-bold text-2xl tracking-tighter leading-none uppercase">宮下マミ 
          </p>
          </div>
        
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch relative z-10">
          {/* Visual Card - Large Image Card with Japanese Framing */}
          <div className="lg:col-span-5 relative group">
            <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden border-2 border-gray-100 shadow-sm">
              <Image src="/images/mami.jpg" alt="Coach Mami" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-bean-dark/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-3xl font-black tracking-tighter uppercase leading-none">MAMI MIYASHITA</p>
                <div className="flex items-center gap-3 mt-2">
                   <p className="text-bean-accent text-xs font-black tracking-widest uppercase">Professional Coach</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 gap-6">
            <div className="p-8 rounded-3xl border-2 border-gray-100 bg-gray-50/50 relative overflow-hidden">
               {/* Subtle Japanese Pattern Background Overlay */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              
              <div className="relative">
                <div className="p-3 w-fit bg-white rounded-xl shadow-sm text-bean-blue mb-4"><User size={24} /></div>
                <h3 className="text-xl font-black text-bean-dark mb-2 uppercase tracking-tight flex items-center gap-3">
                  My Path <span className="text-gray-300 text-xs font-normal">経歴</span>
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  15+ years in the V-League and Europe. I fuse Japanese discipline with Western power.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl border-2 border-gray-100 bg-gray-50/50">
              <div className="p-3 w-fit bg-white rounded-xl shadow-sm text-bean-blue mb-4"><Lightbulb size={24} /></div>
              <h3 className="text-xl font-black text-bean-dark mb-2 uppercase tracking-tight flex items-center gap-3">
                My Philosophy <span className="text-gray-300 text-xs font-normal">哲学</span>
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Every athlete is a seed. I build roots, shape habits, harvest champions.
              </p>
            </div>

            {/* Technical Pillars Card with Rising Sun Accent */}
            <div className="p-8 rounded-3xl border-2 border-bean-accent/20 bg-bean-accent/5 relative overflow-hidden">
              <div className="relative z-10">
                <div className="p-3 w-fit bg-white rounded-xl shadow-sm text-bean-blue mb-4"><Star size={24} /></div>
                <h3 className="text-xl font-black text-bean-dark mb-4 uppercase tracking-tight">What I Bring</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-black text-bean-dark uppercase tracking-tight">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full" /> JVA Standards
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full" /> Video Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full" /> Global Network
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full" /> 1-on-1 Focus
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}