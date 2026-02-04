import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Users,
  Brain,
  Target,
  Dumbbell,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const outcomes = [
  {
    icon: <Zap aria-hidden="true" className="h-5 w-5" />,
    text: "Discipline and professional preparation habits",
  },
  {
    icon: <Users aria-hidden="true" className="h-5 w-5" />,
    text: "Leadership presence on and off the court",
  },
  {
    icon: <Brain aria-hidden="true" className="h-5 w-5" />,
    text: "Quick, confident decision-making under pressure",
  },
  {
    icon: <Target aria-hidden="true" className="h-5 w-5" />,
    text: "Advanced volleyball IQ and technical precision",
  },
  {
    icon: <Dumbbell aria-hidden="true" className="h-5 w-5" />,
    text: "Physical conditioning that matches your ambition",
  },
  {
    icon: <Shield aria-hidden="true" className="h-5 w-5" />,
    text: "Mental toughness that wins close games",
  },
];

export default function Outcomes() {
  return (
    <section className="relative overflow-hidden bg-bean-blue-dark px-6 py-12 md:py-16">
      {/* Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,195,58,0.30),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(22,62,170,0.35),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <header className="mb-9 text-center">
          <h2 className="text-white uppercase">
            What You&apos;ll <span className="text-bean-accent">Develop</span>{" "}
            With Me
          </h2>
          
          <p className="mx-auto max-w-[52ch] text-white/70">
            I don&apos;t just teach volleyball. I build complete athletes.
          </p>
        </header>

        <ul
          className="mb-10 grid gap-4 sm:grid-cols-2"
          aria-label="Outcomes you will develop"
        >
          {outcomes.map((item, index) => (
            <li
              key={index}
              className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <div className="shrink-0">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-bean-accent/25 bg-bean-accent/15 text-bean-accent shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:border-bean-accent/35 group-hover:bg-bean-accent/20">
                  {item.icon}
                </div>
              </div>

              <div>
                <p className="text-white">{item.text}</p>
                <p className="mt-1 text-white/60">
                  Built through structure, feedback, and consistent standards.
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <Button asChild variant="default">
            <Link href="#contact" className="inline-flex items-center gap-2">
              Book a Call <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </Button>

          <p className="mt-3 text-white/55">
            I&apos;ll recommend the best next step after we talk.
          </p>
        </div>
      </div>
    </section>
  );
}
