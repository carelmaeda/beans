'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What age groups do you coach?',
    answer: 'I work with athletes of all ages, from young beginners in the Little Seeds program to college and professional players. Each program is tailored to the specific developmental stage and goals of the athlete.',
  },
  {
    question: 'How does online coaching work?',
    answer: 'Online coaching includes personalized training programs, video analysis of your gameplay, weekly check-ins, and direct messaging access. I review your videos, provide detailed feedback, and adjust your program based on your progress.',
  },
  {
    question: 'Do you offer in-person training?',
    answer: 'Yes! I offer in-person training sessions and clinics. Contact me to discuss availability and location options for private sessions or group training.',
  },
  {
    question: 'What is the Video Analysis service?',
    answer: 'I analyze your game footage to identify technical improvements, tactical opportunities, and areas for development. You receive a detailed breakdown with actionable steps to elevate your performance.',
  },
  {
    question: 'How long does it take to see results?',
    answer: "Every athlete is different, but with consistent effort and dedication to the program, most athletes see noticeable improvements within 4-8 weeks. Long-term development is a journey—I'm here to guide you every step.",
  },
  {
    question: 'What makes your coaching approach unique?',
    answer: 'I combine professional playing experience with a holistic approach that develops not just your skills, but your mental game, character, and personal brand. I treat every athlete as an individual with unique potential.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-20 bg-gray-50 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="mb-10">
          <span className="inline-block px-3 py-1 bg-bean-accent/20 text-bean-blue rounded-full text-[10px] font-black tracking-widest uppercase mb-3">
            Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-bean-dark tracking-tighter mb-3 uppercase">
            FREQUENTLY <span className="text-bean-blue">ASKED</span>
          </h2>
          <div className="w-16 h-1.5 bg-bean-accent rounded-full" />
        </div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? 'bg-bean-blue border-bean-blue shadow-lg'
                  : 'bg-white border-gray-100 hover:border-bean-accent/30'
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full p-5 flex items-center justify-between text-left"
              >
                <h3 className={`text-base font-black tracking-tight pr-3 ${
                  openIndex === index ? 'text-white' : 'text-bean-dark'
                }`}>
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-white/20 rotate-180'
                    : 'bg-bean-accent/20'
                }`}>
                  <ChevronDown className={`w-4 h-4 ${
                    openIndex === index ? 'text-white' : 'text-bean-blue'
                  }`} />
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <p className={`px-5 pb-5 font-medium leading-relaxed text-sm ${
                  openIndex === index ? 'text-white/80' : 'text-gray-600'
                }`}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
