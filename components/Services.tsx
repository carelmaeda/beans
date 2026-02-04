import Link from "next/link"
import { Monitor, Video, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const services = [
  {
    title: "Online Coaching",
    icon: <Monitor aria-hidden="true" className="h-6 w-6" />,
    outcome: "Build pro-level game IQ and mental toughness from anywhere.",
    detail:
      "Weekly video calls, custom roadmap, career planning, and direct feedback on your development.",
    price: 120,
    priceNote: "Final plan depends on your goals",
  },
  {
    title: "Video Analysis",
    icon: <Video aria-hidden="true" className="h-6 w-6" />,
    outcome: "Fix the technical flaws you can't see yourself.",
    detail:
      "I break down your footage frame-by-frame and give you specific drills to improve.",
    price: 85,
    priceNote: "Per session",
  },
  {
    title: "In-Person Training",
    icon: <MapPin aria-hidden="true" className="h-6 w-6" />,
    outcome: "Experience what pro training intensity feels like.",
    detail:
      "Hands-on technical drills, real-time corrections, and physical conditioning.",
    price: 150,
    priceNote: "Availability varies by location",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="bg-bean-blue-light/60 relative overflow-hidden px-6 py-12 md:py-16"
    >
      {/* Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(22,62,170,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,62,170,0.18)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <header className="mb-9">
          <h2 className="text-bean-black">
            How I <span className="text-bean-blue">Coach</span>
          </h2>
          <p className="text-bean-blue-dark/70 max-w-[60ch]">
            Three ways to train with me, based on your needs.
          </p>
        </header>

        <ul
          className="mb-10 grid grid-cols-1 gap-3 md:grid-cols-3"
          aria-label="Coaching services"
        >
          {services.map((s) => (
            <li key={s.title} className="h-full">
              <Card className="group border-bean-blue/10 ring-bean-blue/10 relative h-full gap-3 rounded-xl bg-white shadow-[0_10px_40px_rgba(10,29,77,0.08)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_16px_60px_rgba(10,29,77,0.14)]">
                <div
                  className="from-bean-blue-primary via-bean-blue-primary to-bean-yellow-primary absolute inset-x-0 top-0 h-[3px] rounded-t-3xl bg-gradient-to-r opacity-70"
                  aria-hidden="true"
                />

                <CardHeader className="pb-0">
                  <div className="flex items-center justify-start gap-3">
                    <div className="border-bean-blue/15 bg-bean-blue/10 text-bean-blue group-hover:bg-bean-blue/12 grid h-12 w-12 place-items-center rounded-md border shadow-sm transition-all duration-300">
                      {s.icon}
                    </div>
                    <CardTitle className="text-bean-black">
                      <h3 className="h4 uppercase">{s.title}</h3>
                    </CardTitle>
                  </div>

                  <CardDescription className="text-bean-blue-dark hidden">
                    {s.outcome}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-bean-blue-dark/70 small">{s.detail}</p>
                </CardContent>

                <CardFooter className="mt-auto flex-col items-stretch gap-0">
                  <Separator className="bg-bean-blue/10 mb-5" />
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <small className="text-bean-blue-dark/45 tracking-[0.18em] uppercase">
                        Starting at
                      </small>
                      <p className="text-bean-black">
                        <span
                          aria-label={`Starting at ${s.price} Canadian dollars`}
                        >
                          ${s.price}
                        </span>{" "}
                        <small className="text-bean-blue-dark/45 uppercase">
                          CAD
                        </small>
                      </p>
                    </div>

                    <p className="text-bean-blue-dark/55 max-w-[18ch] text-right">
                      {s.priceNote}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <Button asChild variant="default">
            <Link href="#contact" className="inline-flex items-center gap-2">
              Book a Call <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
