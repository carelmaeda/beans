import Image from 'next/image';
import { User, Lightbulb, Star } from 'lucide-react';

export default function CoachMami() {
  return (
    <section id="coach" className="relative py-16 md:py-20 bg-white px-6 overflow-hidden">
      {/* Background Vertical Watermark: "Volleyball" in Japanese */}
      <div className="absolute right-4 top-1/4 hidden lg:block select-none opacity-[0.03] pointer-events-none">
        <p className="text-[12rem] font-black writing-vertical-rl tracking-widest text-bean-dark">
          バレーボール
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="mb-10 flex items-end gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-bean-dark tracking-tighter mb-2 uppercase">
              About <span className="text-bean-blue">Me</span>
            </h2>
            <p className="text-gray-400 font-bold text-xl tracking-tighter leading-none uppercase">宮下マミ</p>
          </div>
        
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-stretch relative z-10">
          {/* Visual Card - Large Image Card with Japanese Framing */}
          <div className="lg:col-span-5 relative group">
            <div className="relative h-full min-h-[420px] rounded-2xl overflow-hidden border-2 border-gray-100 shadow-sm">
              <Image src="/images/mami.jpg" alt="Coach Mami" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-bean-dark/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-2xl font-black tracking-tighter uppercase leading-none">MAMI MIYASHITA</p>
                <div className="flex items-center gap-3 mt-2">
                   <p className="text-bean-accent text-xs font-black tracking-widest uppercase">Professional Coach</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 gap-4">
            <div className="p-6 rounded-2xl border-2 border-gray-100 bg-gray-50/50 relative overflow-hidden">
               {/* Subtle Japanese Pattern Background Overlay */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              
              <div className="relative">
                <div className="p-2.5 w-fit bg-white rounded-lg shadow-sm text-bean-blue mb-3"><User size={20} /></div>
                <h3 className="text-lg font-black text-bean-dark mb-1.5 uppercase tracking-tight flex items-center gap-2">
                  My Path <span className="text-gray-300 text-xs font-normal">経歴</span>
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium text-sm">
                  15+ years in the V-League and Europe. I fuse Japanese discipline with Western power.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border-2 border-gray-100 bg-gray-50/50">
              <div className="p-2.5 w-fit bg-white rounded-lg shadow-sm text-bean-blue mb-3"><Lightbulb size={20} /></div>
              <h3 className="text-lg font-black text-bean-dark mb-1.5 uppercase tracking-tight flex items-center gap-2">
                My Philosophy <span className="text-gray-300 text-xs font-normal">哲学</span>
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium text-sm">
                Every athlete is a seed. I build roots, shape habits, harvest champions.
              </p>
            </div>

            <div className="p-6 rounded-2xl border-2 border-bean-accent/20 bg-bean-accent/5 relative overflow-hidden">
              <div className="relative z-10">
                <div className="p-2.5 w-fit bg-white rounded-lg shadow-sm text-bean-blue mb-3"><Star size={20} /></div>
                <h3 className="text-lg font-black text-bean-dark mb-3 uppercase tracking-tight">What I Bring</h3>
                <ul className="grid grid-cols-2 gap-2 text-sm font-black text-bean-dark uppercase tracking-tight">
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