"use client";

import Reveal from "@/components/Reveal";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Marcus C.",
    role: "D1 College Player",
    quote:
      "Went from bench to starting setter in one season. She caught things in my film nobody else ever did. No sugarcoating — exactly what I needed.",
  },
  {
    name: "Sarah W.",
    role: "Parent of Youth Athlete",
    quote:
      "My daughter had talent but zero match confidence. Now she's calling plays and leading her team. That's not just coaching — that's something bigger.",
  },
  {
    name: "Lucas O.",
    role: "Pro Player, Europe",
    quote:
      "First coach who showed me specifically what I was doing wrong and gave me drills that actually fixed it. If you're serious, she's the real deal.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="texture-light relative overflow-hidden px-4 py-12 md:px-6 md:py-16"
    >
      <div className="section-container">
        <Reveal>
          <header className="mb-9 text-center">
            <h2 className="uppercase">
              Don&apos;t Take My{" "}
              <span className="text-brand-blue">Word for It</span>
            </h2>
            <p>Here&apos;s what my athletes say after training with me.</p>
          </header>
        </Reveal>

        <Reveal stagger>
          <ul
            className="grid gap-5 md:grid-cols-3"
            aria-label="Athlete testimonials"
          >
            {testimonials.map((t, index) => {
              const isCenter = index === 1;
              return (
                <li
                  key={index}
                  className={`h-full ${isCenter ? "md:scale-[1.05] md:z-10" : ""}`}
                >
                  <Card
                    className={`group relative h-full overflow-hidden rounded-3xl ${
                      isCenter
                        ? "border-white/10 bg-brand-blue-dark text-white ring-white/10 transition-all duration-300 hover:-translate-y-1"
                        : "card-hover-lift border-brand-blue/15 ring-brand-blue/15"
                    }`}
                    style={
                      isCenter
                        ? { boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }
                        : undefined
                    }
                  >
                    {/* Top accent — side cards only */}
                    {!isCenter && (
                      <div className="card-accent-bar" aria-hidden="true" />
                    )}

                    {/* Decorative oversized quote mark */}
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute top-1 left-5 select-none font-serif text-[7rem] leading-none ${
                        isCenter
                          ? "text-brand-accent/15"
                          : "text-brand-blue/8"
                      }`}
                    >
                      &ldquo;
                    </span>

                    <CardHeader className="relative pt-16">
                      <CardTitle
                        className={`uppercase ${isCenter ? "text-white" : "text-brand-black"}`}
                      >
                        {t.name}
                      </CardTitle>
                      <CardDescription>
                        <Badge
                          variant="outline"
                          className={`h-auto rounded-full px-3 py-1 ${
                            isCenter
                              ? "border-brand-accent/30 bg-brand-accent/10 text-brand-accent"
                              : "border-brand-blue/15 bg-brand-blue-light text-brand-blue"
                          }`}
                        >
                          {t.role}
                        </Badge>
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="relative flex-1">
                      <blockquote
                        className={`text-lg leading-relaxed ${
                          isCenter
                            ? "text-white/85"
                            : "text-brand-blue-dark"
                        }`}
                      >
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>
                    </CardContent>
                  </Card>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
