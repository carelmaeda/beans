"use client";
import { useState } from 'react';
import { Monitor, Video, MapPin, ArrowRight } from 'lucide-react';
import DetailsModal from './modal/DetailsModal';

const services = [
  {
    title: "Online Coaching",
    icon: <Monitor className="w-8 h-8" />,
    desc: "Train with me from anywhere in the world.",
    detail: "Weekly video calls where I break down your game and build your path forward.",
    price: "120",
    features: ["Weekly 1-on-1 Calls", "Custom Roadmap", "Career Planning", "Mental Edge"],
    outcome: "Build the mindset and IQ to dominate at the next level."
  },
  {
    title: "Video Lab",
    icon: <Video className="w-8 h-8" />,
    desc: "I dissect your technique frame-by-frame.",
    detail: "Send me your footage. I find the flaws killing your power and show you how to fix them.",
    price: "85",
    features: ["Frame Analysis", "Pro Comparison", "Voice Report", "Drill Prescriptions"],
    outcome: "Unlock hidden power by fixing technical blind spots."
  },
  {
    title: "In-Person Training",
    icon: <MapPin className="w-8 h-8" />,
    desc: "Hands-on sessions. Real courts. Real intensity.",
    detail: "I work with you directly—technical drills, conditioning, game pressure.",
    price: "150",
    features: ["Technical Drills", "Position Work", "Live Feedback", "Facility Access"],
    outcome: "Feel what pro training demands. Grow faster with instant corrections."
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-16 md:py-20 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-bean-dark tracking-tighter mb-3 uppercase">
            HOW I <span className="text-bean-blue">COACH</span>
          </h2>
          <div className="w-20 h-2 bg-bean-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s) => (
            <button
              key={s.title}
              onClick={() => setActiveService(s)}
              className="p-6 rounded-2xl border-2 border-gray-100 bg-gray-50/50 hover:bg-white hover:border-bean-accent transition-all duration-300 text-left group cursor-pointer"
            >
              <div className="p-3 bg-white rounded-xl shadow-sm text-bean-blue mb-4 w-fit">{s.icon}</div>
              <h3 className="text-xl font-black text-bean-dark mb-2 uppercase">{s.title}</h3>
              <p className="text-gray-600 font-medium mb-4 leading-relaxed text-sm">{s.desc}</p>
              <span className="flex items-center gap-2 font-bold text-sm text-bean-blue">
                LEARN MORE <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          ))}
        </div>
      </div>

      <DetailsModal
        isOpen={!!activeService}
        onClose={() => setActiveService(null)}
        title={activeService?.title || ""}
        content={activeService?.detail || ""}
        price={activeService?.price}
        features={activeService?.features}
        outcome={activeService?.outcome}
      />
    </section>
  );
}
