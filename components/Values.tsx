import { Heart, Globe, Sparkles, Users, Shield, Star } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Anti-Racism',
    description: 'My court is safe. Every athlete is valued, respected, and welcome—no exceptions.',
    className: 'lg:col-span-4 lg:row-span-2 bg-bean-blue text-white',
    iconBg: 'bg-white/20',
    iconColor: 'text-white',
    featured: true,
  },
  {
    icon: Globe,
    title: 'Multiculturalism',
    description: 'Global perspectives make stronger players.',
    className: 'lg:col-span-4 bg-bean-accent/20 border-2 border-bean-accent/10',
    iconBg: 'bg-bean-accent',
    iconColor: 'text-bean-dark',
  },
  {
    icon: Sparkles,
    title: 'Your Brand',
    description: 'I help you build your professional identity.',
    className: 'lg:col-span-4 bg-gray-50 border-2 border-gray-100',
    iconBg: 'bg-bean-blue',
    iconColor: 'text-white',
  },
  {
    icon: Heart,
    title: 'Whole Athlete',
    description: 'Character grows with your game.',
    className: 'lg:col-span-4 bg-blue-50 border-2 border-bean-blue/10',
    iconBg: 'bg-bean-blue',
    iconColor: 'text-white',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We grow together through the sport.',
    className: 'lg:col-span-4 bg-bean-accent/10 border-2 border-bean-accent/20',
    iconBg: 'bg-bean-accent',
    iconColor: 'text-bean-dark',
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'I demand the highest standards. Every drill, every session—precision matters. Your path to pro is built on quality.',
    className: 'lg:col-span-12 bg-gray-900 text-white',
    iconBg: 'bg-bean-accent',
    iconColor: 'text-bean-dark',
    horizontal: true
  },
];

export default function Values() {
  return (
    <section id="values" className="py-16 md:py-20 bg-white px-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-10">
          <span className="inline-block px-3 py-1 bg-bean-accent/20 text-bean-blue rounded-full text-[10px] font-black tracking-widest uppercase mb-3">
            The Foundation
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-bean-dark tracking-tighter mb-3 uppercase">
            WHAT I <span className="text-bean-blue">STAND FOR</span>
          </h2>
          <div className="w-16 h-1.5 bg-bean-accent rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 auto-rows-fr">
          {values.map((v, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 transition-all duration-300 hover:shadow-lg flex flex-col justify-center ${v.className} ${v.horizontal ? 'lg:flex-row lg:items-center lg:gap-8' : ''}`}
            >
              <div className={`flex-shrink-0 w-11 h-11 ${v.iconBg} rounded-xl flex items-center justify-center mb-4 shadow-sm ${v.horizontal ? 'lg:mb-0' : ''}`}>
                <v.icon className={`w-5 h-5 ${v.iconColor}`} />
              </div>

              <div>
                <h3 className={`text-lg font-black mb-1.5 tracking-tight uppercase ${v.featured || v.className.includes('gray-900') ? 'text-white' : 'text-bean-dark'}`}>
                  {v.title}
                </h3>
                <p className={`font-medium leading-relaxed text-sm ${v.featured || v.className.includes('gray-900') ? 'text-white/80' : 'text-gray-600'} ${v.featured ? 'text-base' : ''}`}>
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}