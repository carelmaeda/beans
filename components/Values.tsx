import { Heart, Globe, Sparkles, Users, Shield, Star } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Anti-Racism',
    description:
      'Creating a safe, inclusive environment where every athlete is valued and respected regardless of background.',
    className: 'md:col-span-2 md:row-span-2 bg-[var(--bean-blue-primary)] text-white',
    iconBg: 'bg-white/20',
    iconColor: 'text-white',
    featured: true,
  },
  {
    icon: Globe,
    title: 'Multicultural Education',
    description: 'Embracing diversity and global perspectives in training.',
    className: 'bg-[var(--bean-yellow-bright)]/20',
    iconBg: 'bg-[var(--bean-yellow-bright)]',
    iconColor: 'text-[var(--bean-black)]',
  },
  {
    icon: Sparkles,
    title: 'Branding Support',
    description: 'Helping athletes build their personal brand and presence.',
    className: 'bg-gray-100',
    iconBg: 'bg-[var(--bean-blue-primary)]',
    iconColor: 'text-white',
  },
  {
    icon: Heart,
    title: 'Holistic Growth',
    description: 'Developing character alongside athletic ability.',
    className: 'bg-[var(--bean-blue-light)]',
    iconBg: 'bg-[var(--bean-blue-primary)]',
    iconColor: 'text-white',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building lasting connections through the sport we love.',
    className: 'bg-[var(--bean-yellow-bright)]/10',
    iconBg: 'bg-[var(--bean-yellow-bright)]',
    iconColor: 'text-[var(--bean-black)]',
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'Pursuing the highest standards in everything we do.',
    className: 'md:col-span-2 bg-[var(--bean-gray-light)]',
    iconBg: 'bg-[var(--bean-blue-primary)]',
    iconColor: 'text-white',
  },
];

export default function Values() {
  return (
    <section id="values" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[var(--bean-yellow-bright)]/20 text-[var(--bean-blue-primary)] rounded-full text-sm font-semibold mb-4">
            More Than a Game
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--bean-black)] mb-6">
            Our Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We believe volleyball is a vehicle for positive change. These core values guide everything we do.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`rounded-3xl p-6 md:p-8 ${value.className} transition-all hover:scale-[1.02]`}
            >
              <div
                className={`w-12 h-12 ${value.iconBg} rounded-2xl flex items-center justify-center mb-4`}
              >
                <value.icon className={`w-6 h-6 ${value.iconColor}`} />
              </div>
              <h3
                className={`text-xl font-bold mb-2 ${
                  value.featured ? 'text-white' : 'text-[var(--bean-black)]'
                }`}
              >
                {value.title}
              </h3>
              <p
                className={`${
                  value.featured ? 'text-white/90 text-lg' : 'text-gray-600 text-sm'
                }`}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
