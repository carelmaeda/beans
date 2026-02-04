import Link from "next/link"
import {
  ArrowRight,
  Zap,
  Users,
  Brain,
  Target,
  Dumbbell,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const outcomes = [
  {
    icon: <Zap aria-hidden="true" className="h-5 w-5" />,
    text: "Pro-level discipline and daily standards",
    description:
      "I push you to train, recover, and prepare like a real professional.",
  },
  {
    icon: <Users aria-hidden="true" className="h-5 w-5" />,
    text: "Leadership that shows when it matters",
    description:
      "You learn to lead by actions, not words—on and off the court.",
  },
  {
    icon: <Brain aria-hidden="true" className="h-5 w-5" />,
    text: "Fast, calm decisions under pressure",
    description:
      "I train you to think clearly and choose right when the game speeds up.",
  },
  {
    icon: <Target aria-hidden="true" className="h-5 w-5" />,
    text: "High volleyball IQ and technical precision",
    description: "You understand the game deeper and execute with intention.",
  },
  {
    icon: <Dumbbell aria-hidden="true" className="h-5 w-5" />,
    text: "Conditioning built for high performance",
    description: "Your body keeps up with your ambition and competitive goals.",
  },
  {
    icon: <Shield aria-hidden="true" className="h-5 w-5" />,
    text: "Mental toughness for tight matches",
    description:
      "You stay composed, confident, and aggressive in close moments.",
  },
]

export default function Outcomes() {
  return (
    <section className="bg-bean-blue-dark/95 relative overflow-hidden px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <header className="mb-9 text-center">
          <h2 className="text-white">
            What we will{" "}
            <span className="text-bean-accent">Develop Together</span>
          </h2>
          <p className="text-white/70">
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
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 md:p-5"
            >
              <div className="border-bean-accent/25 bg-bean-accent/15 text-bean-accent group-hover:border-bean-accent/35 group-hover:bg-bean-accent/20 grid h-11 w-11 place-items-center rounded-lg border shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300">
                {item.icon}
              </div>

              <div className="space-y-1">
                <p className="text-white">{item.text}</p>
                <small className="hidden text-white/50 md:block">
                  {item.description}
                </small>
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
  )
}
