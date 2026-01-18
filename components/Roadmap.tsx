import { Sprout, Globe2, BarChart3, Dumbbell, Brain } from 'lucide-react';

const roadmapItems = [
  {
    icon: Sprout,
    title: 'Little Seeds',
    subtitle: 'Kindergarten Program',
    description:
      'Introducing volleyball fundamentals to young athletes through play-based learning. Building coordination, teamwork, and a love for the sport.',
    status: 'Coming Soon',
  },
  {
    icon: Globe2,
    title: 'Global Clinics',
    subtitle: 'International Training Camps',
    description:
      'Intensive training experiences in Japan and around the world. Connect with elite coaches and players from the JVA network.',
    status: 'Coming Soon',
  },
  {
    icon: BarChart3,
    title: 'Technical Analytics',
    subtitle: 'Performance Data Systems',
    description:
      'Advanced video analysis and performance tracking. Data-driven insights to optimize technique and accelerate improvement.',
    status: 'In Development',
  },
  {
    icon: Dumbbell,
    title: 'Physical Training',
    subtitle: 'Strength & Conditioning',
    description:
      'Volleyball-specific athletic development programs. Building the physical foundation for peak performance.',
    status: 'In Development',
  },
  {
    icon: Brain,
    title: 'Mental Coaching',
    subtitle: 'Sports Psychology',
    description:
      'Developing the mental game through focus training, pressure management, and confidence building techniques.',
    status: 'Coming Soon',
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 md:py-32 bg-[var(--bean-gray-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[var(--bean-blue-primary)]/10 text-[var(--bean-blue-primary)] rounded-full text-sm font-semibold mb-4">
            The Greenhouse
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--bean-black)] mb-6">
            Growing Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Exciting programs on the horizon to support every stage of your volleyball journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[var(--bean-blue-primary)]" />

          {/* Timeline items */}
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--bean-yellow-bright)] rounded-full border-4 border-white shadow-lg z-10" />

                <div
                  className={`md:grid md:grid-cols-2 md:gap-8 items-center ${
                    index % 2 === 0 ? '' : 'md:direction-rtl'
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8 md:col-start-2'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[var(--bean-yellow-bright)] rounded-2xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-[var(--bean-black)]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-[var(--bean-black)]">{item.title}</h3>
                          <span className="px-2 py-1 bg-[var(--bean-blue-primary)]/10 text-[var(--bean-blue-primary)] text-xs font-semibold rounded-full">
                            {item.status}
                          </span>
                        </div>
                        <p className="text-[var(--bean-blue-primary)] font-medium text-sm mb-2">{item.subtitle}</p>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  {index % 2 === 0 ? <div className="hidden md:block" /> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
