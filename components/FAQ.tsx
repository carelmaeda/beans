"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Reveal from "@/components/Reveal"

const faqs = [
  {
    question: "Is this coaching for me?",
    answer:
      "If you're serious and willing to put in the work, yes. I care about attitude, not current level. Not sure? Book a call — I'll be straight with you.",
  },
  {
    question: "What ages do you work with?",
    answer:
      "Typically 12+, through college and professional level. Still serious outside that range? Reach out.",
  },
  {
    question: "How does online coaching work?",
    answer:
      "You send video, I analyze it, we hop on a call, and I give you a clear plan. Simple, structured, effective.",
  },
  {
    question: "What if I'm not good enough yet?",
    answer:
      "That's exactly when you need coaching. Don't wait until you think you're ready. Get ready now.",
  },
  {
    question: "How soon will I see results?",
    answer:
      "Most athletes feel a real difference in 4–8 weeks with consistent training. Book a call and I'll give you a realistic timeline.",
  },
  {
    question: "Can you help me get recruited or go pro?",
    answer:
      "That's what I do. I help you build the skills, game film, and habits that get you noticed by scouts and programs.",
  },
]

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-brand-blue-light relative px-4 py-12 md:px-6 md:py-16"
    >
      <div className="section-container">
        <Reveal>
          <header className="mb-9 text-center">
            <h2 className="uppercase">
              Questions I Get <span className="text-brand-blue">Asked a Lot</span>
            </h2>
            <p className="text-brand-blue-dark/70">
              If yours isn&apos;t here, just book a call. I&apos;ll answer anything.
            </p>
          </header>
        </Reveal>

        <Reveal>
          <Accordion
            type="single"
            collapsible
            className="mx-auto flex max-w-[720px] flex-col gap-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border-brand-blue/15 hover:border-brand-blue/30 data-[state=open]:border-brand-blue/30 relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 data-[state=open]:shadow-[0_12px_40px_rgba(10,29,77,0.12)]"
              >
                <div
                  className="bg-brand-accent absolute top-0 left-0 h-full w-1 rounded-l-2xl opacity-0 transition-opacity duration-300 [[data-state=open]>&]:opacity-100"
                  aria-hidden="true"
                />
                <AccordionTrigger className="[&>svg]:text-brand-blue px-5 py-4 text-left hover:no-underline">
                  <span className="flex items-center gap-3 pr-4">
                    <span className="text-brand-blue/25 font-mono text-sm font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <strong className="text-brand-black">
                      {faq.question}
                    </strong>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pt-0 pb-5">
                  <p className="text-brand-blue-dark">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
