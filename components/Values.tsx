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
    <section id="values" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <span className="inline-block px-4 py-1.5 bg-bean-accent/20 text-bean-blue rounded-full text-[10px] font-black tracking-widest uppercase mb-4">
            The Foundation
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-bean-dark tracking-tighter mb-4 uppercase">
            WHAT I <span className="text-bean-blue">STAND FOR</span>
          </h2>
          <div className="w-20 h-2 bg-bean-accent rounded-full" />
        </div>

        {/* 12-Column Grid Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-fr">
          {values.map((v, i) => (
            <div
              key={i}
              className={`rounded-[3rem] p-8 md:p-10 transition-all duration-300 hover:shadow-xl flex flex-col justify-center ${v.className} ${v.horizontal ? 'lg:flex-row lg:items-center lg:gap-12' : ''}`}
            >
              <div className={`flex-shrink-0 w-14 h-14 ${v.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-sm ${v.horizontal ? 'lg:mb-0' : ''}`}>
                <v.icon className={`w-7 h-7 ${v.iconColor}`} />
              </div>
              
              <div>
                <h3 className={`text-2xl font-black mb-3 tracking-tight uppercase ${v.featured || v.className.includes('gray-900') ? 'text-white' : 'text-bean-dark'}`}>
                  {v.title}
                </h3>
                <p className={`font-medium leading-relaxed ${v.featured || v.className.includes('gray-900') ? 'text-white/80' : 'text-gray-600'} ${v.featured ? 'text-lg' : 'text-sm'}`}>
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