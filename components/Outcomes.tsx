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
import { Card, CardContent } from "@/components/ui/card"
import Reveal from "@/components/Reveal"

const outcomes = [
  {
    icon: <Zap aria-hidden="true" className="h-5 w-5" />,
    text: "Pro-Level Daily Standards",
    description:
      "No more winging it. I give you the structure real professionals follow.",
  },
  {
    icon: <Users aria-hidden="true" className="h-5 w-5" />,
    text: "On-Court Leadership",
    description:
      "You learn to lead through preparation, communication, and compete.",
  },
  {
    icon: <Brain aria-hidden="true" className="h-5 w-5" />,
    text: "Game IQ That Sets You Apart",
    description:
      "Stop reacting, start anticipating. That's where the advantage lives.",
  },
  {
    icon: <Target aria-hidden="true" className="h-5 w-5" />,
    text: "Decisions Under Pressure",
    description:
      "I train you to think clearly when it's loud, fast, and everything matters.",
  },
  {
    icon: <Dumbbell aria-hidden="true" className="h-5 w-5" />,
    text: "Performance Conditioning",
    description:
      "Your body keeps up with your ambition. No gassing out in the fifth set.",
  },
  {
    icon: <Shield aria-hidden="true" className="h-5 w-5" />,
    text: "Mental Toughness",
    description: "Most players shrink in tight games. You won't.",
  },
]

export default function Outcomes() {
  return (
    <section className="noise-grain bg-brand-blue-dark relative overflow-hidden border-t border-white/10 px-4 py-12 md:px-6">
      <div className="section-container">
        <Reveal>
          <header className="mb-9 text-center">
            <h2 className="text-white uppercase">
              What I <span className="text-brand-accent">Build Into You</span>
            </h2>
            <p className="text-white/70">
              I don&apos;t just teach volleyball. I develop complete athletes.
            </p>
          </header>
        </Reveal>

        <Reveal stagger>
          <ul
            className="mb-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3"
            aria-label="Outcomes you will develop"
          >
            {outcomes.map((item, index) => (
              <li key={index}>
                <Card
                  size="sm"
                  className="h-full bg-white/5 text-white ring-white/10 backdrop-blur-sm"
                >
                  <CardContent className="flex h-full items-start justify-between gap-3">
                    <div className="grid aspect-square h-12 place-items-center rounded-xl bg-white/10">
                      {item.icon}
                    </div>
                    <div className="grid">
                      <strong>{item.text}</strong>
                      <p className="text-white/60">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <div className="text-center">
            <Button asChild variant="default">
              <Link href="#contact" className="inline-flex items-center gap-2">
                Let&apos;s Talk About Your Game{" "}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </Button>

            <p className="mt-3 text-white/55">
              Book a free call and I&apos;ll tell you exactly where to start.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
