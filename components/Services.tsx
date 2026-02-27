import Link from "next/link"
import { Monitor, Video, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import CountUp from "@/components/CountUp"
import Reveal from "@/components/Reveal"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const services = [
  {
    title: "Video Analysis",
    icon: <Video aria-hidden="true" className="h-6 w-6" />,
    outcome: "I find the flaws you can't see and show you how to fix them.",
    detail:
      "Send me your film. I break it down frame by frame with specific drills for your position.",
    price: 85,
    priceNote: "Per session",
  },
  {
    title: "Online Coaching",
    icon: <Monitor aria-hidden="true" className="h-6 w-6" />,
    outcome: "Same intensity, same standards — from anywhere.",
    detail:
      "Weekly video calls, custom roadmap, career planning, and direct feedback on technique and mindset.",
    price: 120,
    priceNote: "Final plan depends on your goals",
  },
  {
    title: "In-Person Training",
    icon: <MapPin aria-hidden="true" className="h-6 w-6" />,
    outcome: "Real pro-level training intensity, in person.",
    detail:
      "Hands-on technical work, real-time corrections, and physical conditioning.",
    price: 150,
    priceNote: "Per session",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="texture-light relative overflow-hidden px-4 py-12 md:px-6 md:py-16"
    >
      <div className="section-container">
        <Reveal>
          <header className="mb-9">
            <h2 className="text-brand-black uppercase">
              Pick How You Want to{" "}
              <span className="text-brand-blue">Train</span>
            </h2>
            <p className="text-brand-blue-dark/70 max-w-[60ch]">
              Every option gets you direct access to me. No assistants, no
              generic programs. Just real coaching.
            </p>
          </header>
        </Reveal>

        <Reveal stagger>
          <ul
            className="mb-10 grid gap-4 md:grid-cols-3"
            aria-label="Coaching services"
          >
            {services.map((s) => (
              <li key={s.title} className="h-full">
                <Card className="group border-brand-blue/10 ring-brand-blue/10 relative h-full justify-between">
                  <CardHeader>
                    <div className="border-brand-blue/15 bg-brand-blue/10 text-brand-blue grid h-12 w-12 place-items-center rounded-md border">
                      {s.icon}
                    </div>
                    <CardTitle className="h4 text-brand-black uppercase">
                      {s.title}
                    </CardTitle>
                    <p className="text-brand-blue-dark">{s.outcome}</p>
                    <CardDescription className="text-brand-blue-dark/55">
                      {s.detail}
                    </CardDescription>
                  </CardHeader>

                  <CardFooter className="flex-col items-stretch">
                    <Separator className="bg-brand-blue/10 mb-4" />
                    <small className="text-brand-blue-dark/45 uppercase">
                      Starting at
                    </small>
                    <p className="text-brand-black">
                      <span
                        className="text-2xl font-bold"
                        aria-label={`Starting at ${s.price} Canadian dollars`}
                      >
                        $<CountUp target={s.price} />
                      </span>{" "}
                      <small className="text-brand-blue-dark/45 uppercase">
                        CAD
                      </small>
                    </p>
                    <p className="text-brand-blue-dark/55">{s.priceNote}</p>
                  </CardFooter>
                </Card>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <div className="text-center">
            <Button asChild variant="default">
              <Link href="#contact" className="inline-flex items-center gap-2">
                Book a Free Call First{" "}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
