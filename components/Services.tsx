"use client";
import { useState } from 'react';
import { Monitor, Video, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DetailsModal from './modal/DetailsModal';

const services = [
  {
    title: "Online Coaching",
    icon: <Monitor className="w-8 h-8" />,
    desc: "Global mentorship and tactical growth from anywhere.",
    detail: "Our online program provides high-performance tactical video calls and personalized mentorship. We bridge the gap between your location and international standards.",
    price: "$120",
    features: ["Weekly 1-on-1 Calls", "Personalized Roadmap", "Pathway Planning", "Mental Performance"],
    outcome: "Develop the professional mindset and tactical IQ required to compete in international leagues."
  },
  {
    title: "Video Lab",
    icon: <Video className="w-8 h-8" />,
    desc: "Elite technical assessment using frame-by-frame analysis.",
    detail: "We analyze your footage to identify biomechanical inefficiencies, providing a visual roadmap to professional-grade form.",
    price: "$85",
    features: ["Biomechanical Review", "Pro Comparison", "Voice-over Report", "Correction Drills"],
    outcome: "Identify and fix hidden technical flaws in your swing that are holding back your power."
  },
  {
    title: "In-Person Training",
    icon: <MapPin className="w-8 h-8" />,
    desc: "Hands-on, high-intensity coaching in elite facilities.",
    detail: "Coach Mami provides sessions focused on technical execution, conditioning, and high-pressure game scenarios.",
    price: "$150",
    features: ["Technical Drills", "Position Training", "Real-time Feedback", "Facility Access"],
    outcome: "Experience the physical rigors of pro training with instant technical corrections."
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-bean-dark tracking-tighter mb-4 uppercase">
            CURRENT <span className="text-bean-blue">SERVICES</span>
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
