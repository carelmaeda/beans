"use client";

import { Quote } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    name: "Marcus Chen",
    role: "D1 College Player",
    quote:
      "Coach Mami changed my game completely. Her focus on mental toughness helped me go from riding the bench to starting setter in one season. She sees things in your game that nobody else does.",
  },
  {
    name: "Sarah Williams",
    role: "Parent of Youth Athlete",
    quote:
      "My daughter's confidence on the court has skyrocketed. Coach Mami doesn't just teach volleyball—she builds leaders. Worth every penny.",
  },
  {
    name: "Lucas Oliveira",
    role: "Pro Overseas Player",
    quote:
      "I've worked with coaches my whole career, but nobody breaks down the game like Coach Mami. Her video analysis alone leveled up my decision-making. She's the real deal.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-bean-blue-light px-6 py-12 md:py-16"
    >
      {/* texture */}
      <div
        className="texture-grid opacity-[0.06]"
        aria-hidden="true"
      >
        <div className="bg-[linear-gradient(to_right,rgba(22,62,170,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,62,170,0.18)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="section-container relative">
        <header className="mb-9 text-center">
          <h2>
            What My Athletes <span className="text-bean-blue">Say</span>
          </h2>
          <p>Results speak louder than promises.</p>
        </header>

        <ul
          className="grid gap-5 md:grid-cols-3"
          aria-label="Athlete testimonials"
        >
          {testimonials.map((t, index) => (
            <li key={index} className="h-full">
              <Card className="card-hover-lift group relative h-full rounded-3xl border-bean-blue/15 ring-bean-blue/15">
                {/* top accent */}
                <div className="card-accent-bar" aria-hidden="true" />

                {/* quote icon */}
                <Quote
                  aria-hidden="true"
                  className="absolute right-6 top-6 h-10 w-10 text-bean-blue/10"
                />

                <CardHeader>
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block h-2 w-2 rounded-full bg-bean-accent"
                      aria-hidden="true"
                    />
                    <span className="uppercase text-bean-blue-dark/50">
                      Testimonial
                    </span>
                  </div>
                  <CardTitle className="uppercase text-bean-black">
                    {t.name}
                  </CardTitle>
                  <CardDescription>
                    <Badge
                      variant="outline"
                      className="h-auto rounded-full border-bean-blue/15 bg-bean-blue-light px-3 py-1 text-bean-blue"
                    >
                      {t.role}
                    </Badge>
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <blockquote className="text-bean-blue-dark">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </CardContent>

                <CardFooter>
                  <Separator className="bg-bean-blue/10" />
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
