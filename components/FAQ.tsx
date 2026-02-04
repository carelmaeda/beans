"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who is this coaching for?",
    answer:
      "I work with serious athletes who want the next level and are ready for high standards. If you're unsure, book a call with me and I'll tell you honestly.",
  },
  {
    question: "What ages do you work with?",
    answer:
      "Usually 12+ through college and pro. Book a call with me and I'll confirm if it's the right fit.",
  },
  {
    question: "How does online coaching work?",
    answer:
      "You send video, I analyze it, we meet on a call, and I give you a clear plan to follow. Book a call with me and I'll walk you through it.",
  },
  {
    question: "How does video analysis work?",
    answer:
      "I break your film down frame-by-frame and give you specific fixes and drills. Book a call with me and I'll explain what I look for.",
  },
  {
    question: "How soon will I see results?",
    answer:
      "If you train consistently, you'll usually feel changes in 4–8 weeks. Book a call with me and I'll map out a realistic timeline.",
  },
  {
    question: "Is this too intense for me?",
    answer:
      "I push you, but I also support you. I adapt the intensity to your level while keeping the standards high. Book a call with me and we'll decide together.",
  },
  {
    question: "How much does it cost?",
    answer:
      "It depends on what you need (analysis, online coaching, or in-person). Book a call with me and I'll recommend the best option for your goals and budget.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative bg-bean-blue-light px-6 py-12 md:py-16"
    >
      <div className="mx-auto max-w-3xl">
        <header className="mb-9 text-center">
          <h2 className="uppercase">
            Common <span className="text-bean-blue">Questions</span>
          </h2>
          <p className="text-bean-blue-dark/70">
            If you don't see your question here, book a call with me.
          </p>
        </header>

        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-4 rounded-none border-0 bg-transparent"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="relative overflow-hidden rounded-2xl border border-bean-blue/15 bg-white shadow-sm transition-all duration-300 hover:border-bean-blue/30 data-[state=open]:border-bean-blue/30 data-[state=open]:shadow-[0_12px_40px_rgba(10,29,77,0.12)]"
            >
              <div
                className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-bean-accent opacity-0 transition-opacity duration-300 [[data-state=open]>&]:opacity-100"
                aria-hidden="true"
              />
              <AccordionTrigger className="px-5 py-4 text-left hover:no-underline [&>svg]:text-bean-blue">
                <h3 className="pr-4 text-bean-black">{faq.question}</h3>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5 pt-0">
                <p className="text-bean-blue-dark">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
