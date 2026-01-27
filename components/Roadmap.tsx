import { Sprout, Globe2, BarChart3, Dumbbell, Brain } from 'lucide-react';

const roadmapItems = [
  {
    icon: Sprout,
    title: 'Little Seeds',
    subtitle: 'Kids Program',
    description: 'Fun fundamentals for young athletes.',
    status: 'Planting',
  },
  {
    icon: Globe2,
    title: 'Global Clinics',
    subtitle: 'Train Abroad',
    description: 'Intensive camps in Japan and beyond.',
    status: 'Rooting',
  },
  {
    icon: BarChart3,
    title: 'Analytics Hub',
    subtitle: 'Data-Driven',
    description: 'Numbers that sharpen your edge.',
    status: 'Budding',
  },
  {
    icon: Dumbbell,
    title: 'Strength Lab',
    subtitle: 'Physical Power',
    description: 'Volleyball-specific conditioning.',
    status: 'Growing',
  },
  {
    icon: Brain,
    title: 'Mental Game',
    subtitle: 'Psychology',
    description: 'Dominate pressure. Stay focused.',
    status: 'Blooming',
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-16 md:py-20 bg-[#0A0C10] px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="mb-10 md:mb-12 md:text-center">
          <span className="inline-block px-3 py-1 bg-bean-accent/20 text-bean-accent rounded-full text-[10px] font-black tracking-widest uppercase mb-3">
            The Greenhouse
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-3 uppercase">
            WHAT I&apos;M <span className="text-bean-blue">BUILDING</span>
          </h2>
          <div className="w-16 h-1.5 bg-bean-accent rounded-full md:mx-auto" />
        </div>

        {/* Tight Vertical Timeline */}
        <div className="relative">
          {/* The Rail */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-bean-blue via-bean-accent to-transparent opacity-20" />

          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <div key={index} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                  <div className="w-3 h-3 rounded-full bg-bean-dark border-2 border-bean-accent shadow-[0_0_10px_rgba(242,201,76,0.4)]" />
                </div>

                {/* Content Card */}
                <div className={`ml-10 md:ml-0 md:w-[45%] group transition-all duration-300 hover:translate-y-[-2px]`}>
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm group-hover:bg-white/[0.08] transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-bean-blue/20 rounded-lg text-bean-blue group-hover:bg-bean-accent group-hover:text-bean-dark transition-colors">
                        <item.icon size={18} strokeWidth={2.5} />
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-bean-accent/70">
                        {item.status}
                      </span>
                    </div>

                    <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-0.5">
                      {item.subtitle}
                    </p>
                    <h3 className="text-lg font-black text-white uppercase tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Order Marker */}
                <div className="hidden md:block w-[45%] text-white/[0.03] font-black text-5xl select-none">
                  0{index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
