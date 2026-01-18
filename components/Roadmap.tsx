import { Sprout, Globe2, BarChart3, Dumbbell, Brain } from 'lucide-react';

const roadmapItems = [
  {
    icon: Sprout,
    title: 'Little Seeds',
    subtitle: 'Kindergarten Program',
    description: 'Play-based fundamentals for the next generation.',
    status: 'Coming Soon',
  },
  {
    icon: Globe2,
    title: 'Global Clinics',
    subtitle: 'International Training',
    description: 'Intensive experiences in Japan and worldwide.',
    status: 'Coming Soon',
  },
  {
    icon: BarChart3,
    title: 'Technical Analytics',
    subtitle: 'Performance Data',
    description: 'Data-driven insights to optimize technique.',
    status: 'In Development',
  },
  {
    icon: Dumbbell,
    title: 'Physical Training',
    subtitle: 'Strength & Conditioning',
    description: 'Volleyball-specific athletic development.',
    status: 'In Development',
  },
  {
    icon: Brain,
    title: 'Mental Coaching',
    subtitle: 'Sports Psychology',
    description: 'Focus training and pressure management.',
    status: 'Coming Soon',
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-[#0A0C10] px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 md:text-center">
          <span className="inline-block px-4 py-1.5 bg-bean-accent/20 text-bean-accent rounded-full text-[10px] font-black tracking-widest uppercase mb-4">
            The Greenhouse
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 uppercase">
            FUTURE <span className="text-bean-blue">ROADMAP</span>
          </h2>
          <div className="w-20 h-2 bg-bean-accent rounded-full md:mx-auto" />
        </div>

        {/* Tight Vertical Timeline */}
        <div className="relative">
          {/* The Rail */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-bean-blue via-bean-accent to-transparent opacity-20" />

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Timeline Node (The Pulse) */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                  <div className="w-4 h-4 rounded-full bg-bean-dark border-2 border-bean-accent shadow-[0_0_15px_rgba(242,201,76,0.5)]" />
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-[45%] group transition-all duration-300 hover:translate-y-[-4px]`}>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-sm group-hover:bg-white/[0.08] transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2.5 bg-bean-blue/20 rounded-xl text-bean-blue group-hover:bg-bean-accent group-hover:text-bean-dark transition-colors">
                        <item.icon size={20} strokeWidth={2.5} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-bean-accent bg-bean-accent/10 px-3 py-1 rounded-full border border-bean-accent/20">
                        {item.status}
                      </span>
                    </div>

                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">
                      {item.subtitle}
                    </p>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Date/Order Marker (Invisible on Mobile, Label on Desktop) */}
                <div className="hidden md:block w-[45%] text-white/5 font-black text-6xl select-none">
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