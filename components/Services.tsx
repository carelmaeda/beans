"use client";
import { useState } from 'react';
import { Monitor, Video, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DetailsModal from './modal/DetailsModal';

const services = [
  {
    title: "Online Coaching",
    icon: <Monitor className="w-8 h-8" />,
    desc: "Train with me from anywhere in the world.",
    detail: "Weekly video calls where I break down your game and build your path forward.",
    price: "$120",
    features: ["Weekly 1-on-1 Calls", "Custom Roadmap", "Career Planning", "Mental Edge"],
    outcome: "Build the mindset and IQ to dominate at the next level."
  },
  {
    title: "Video Lab",
    icon: <Video className="w-8 h-8" />,
    desc: "I dissect your technique frame-by-frame.",
    detail: "Send me your footage. I find the flaws killing your power and show you how to fix them.",
    price: "$85",
    features: ["Frame Analysis", "Pro Comparison", "Voice Report", "Drill Prescriptions"],
    outcome: "Unlock hidden power by fixing technical blind spots."
  },
  {
    title: "In-Person Training",
    icon: <MapPin className="w-8 h-8" />,
    desc: "Hands-on sessions. Real courts. Real intensity.",
    detail: "I work with you directly—technical drills, conditioning, game pressure.",
    price: "$150",
    features: ["Technical Drills", "Position Work", "Live Feedback", "Facility Access"],
    outcome: "Feel what pro training demands. Grow faster with instant corrections."
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-bean-dark tracking-tighter mb-4 uppercase">
            HOW I <span className="text-bean-blue">COACH</span>
          </h2>
          <div className="w-20 h-2 bg-bean-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="p-8 rounded-3xl border-2 border-gray-100 bg-gray-50/50 hover:bg-white hover:border-bean-accent transition-all duration-300">
              <div className="p-4 bg-white rounded-2xl shadow-sm text-bean-blue mb-6 w-fit">{s.icon}</div>
              <h3 className="text-2xl font-black text-bean-dark mb-3 uppercase">{s.title}</h3>
              <p className="text-gray-600 font-medium mb-8 leading-relaxed">{s.desc}</p>
              <Button
                variant="ghost"
                onClick={() => setActiveService(s)}
                className="flex items-center gap-2 font-black text-bean-blue p-0 h-auto hover:bg-transparent hover:text-bean-blue/80 group/btn"
              >
                LEARN MORE <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
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
