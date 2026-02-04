"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Globe,
  BadgeCheck,
  HeartHandshake,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const coachImages = [
  {
    src: "/images/mami1.jpg",
    alt: "Mami Miyashita - Professional Volleyball Coach",
  },
  {
    src: "/images/mami2.jpg",
    alt: "Mami Miyashita coaching on the court",
  },
  {
    src: "/images/mami3.jpg",
    alt: "Mami Miyashita during training session",
  },
    {
    src: "/images/mami5.jpg",
    alt: "Mami Miyashita during training session",
  },
    {
    src: "/images/mami6.jpg",
    alt: "Mami Miyashita during training session",
  },
    {
    src: "/images/mami7.jpg",
    alt: "Mami Miyashita during training session",
  },
];

const values = [
  {
    title: "Anti-Racism",
    body: "My court is safe. Every athlete is respected and welcome.",
    icon: <ShieldCheck aria-hidden="true" className="h-5 w-5" />,
  },
  {
    title: "Multiculturalism",
    body: "Global perspectives build stronger players.",
    icon: <Globe aria-hidden="true" className="h-5 w-5" />,
  },
  {
    title: "Your Brand",
    body: "I help you build your professional identity.",
    icon: <BadgeCheck aria-hidden="true" className="h-5 w-5" />,
  },
  {
    title: "Whole Athlete",
    body: "Character grows with your game.",
    icon: <HeartHandshake aria-hidden="true" className="h-5 w-5" />,
  },
];

export default function CoachMami() {
  return (
    <section
      id="coach"
      className="relative overflow-hidden bg-bean-blue-light px-6 py-12 md:py-16"
    >
      {/* Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(22,62,170,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,62,170,0.18)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <header className="mb-9">
          <h2 className="uppercase text-bean-black">
            About <span className="text-bean-blue">Me</span>
          </h2>
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-12">
          {/* Photo Carousel */}
          <div className="lg:col-span-4">
            <figure className="relative mx-auto w-full max-w-[320px] lg:mx-0">
              <Carousel
                opts={{
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {coachImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />

                        <div
                          className="absolute inset-0 bg-gradient-to-t from-bean-blue-dark/80 via-transparent to-transparent"
                          aria-hidden="true"
                        />

                        <figcaption className="absolute bottom-4 left-4 right-4">
                          <div className="inline-flex flex-col rounded-2xl bg-black/40 px-4 py-3 backdrop-blur-md">
                            <p className="text-white uppercase">Mami Miyashita</p>
                            <small className=" text-bean-accent uppercase tracking-[0.18em]">
                              宮下マミ
                            </small>
                          </div>
                        </figcaption>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 border-0 bg-white/80 hover:bg-white" />
                <CarouselNext className="right-2 border-0 bg-white/80 hover:bg-white" />
              </Carousel>

            </figure>
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <div className="space-y-5">
              <p className="max-w-[62ch]">
                I played professionally for 15+ years across the V-League and
                European circuits. Now I coach athletes who are serious about
                reaching the highest level.
              </p>

              <p className="max-w-[68ch]">
                My approach combines Japanese training discipline with
                international methodologies. I develop technical skills, game
                IQ, mental toughness, and the professional habits that separate
                good players from great ones.
              </p>
            </div>

            <div className="mt-7 pt-5">
              <Separator className="mb-5 bg-bean-blue/20" />
              <h3 className="uppercase text-bean-blue-dark">
                What I Stand For
              </h3>

              <ul
                className="mt-4 grid gap-4 sm:grid-cols-2"
                aria-label="Core values"
              >
                {values.map((v) => (
                  <li key={v.title}>
                    <Card className="h-full rounded-2xl border-bean-blue/15 bg-white ring-bean-blue/15 shadow-[0_10px_30px_rgba(10,29,77,0.08)]">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-bean-blue/20 bg-bean-blue-light text-bean-blue">
                            {v.icon}
                          </div>
                          <div>
                            <p className="uppercase text-bean-black">{v.title}</p>
                            <p className="mt-1 text-bean-blue-dark">{v.body}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </li>
                ))}

                <li className="sm:col-span-2">
                  <Card className="h-full rounded-2xl border-bean-blue/15 bg-white ring-bean-blue/15 shadow-[0_10px_30px_rgba(10,29,77,0.08)]">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-bean-blue/20 bg-bean-blue-light text-bean-blue">
                          <Users aria-hidden="true" className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="uppercase text-bean-black">Community</p>
                          <p className="mt-1 text-bean-blue-dark">
                            We grow together through the sport.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </li>
              </ul>
            </div>

            <div className="mt-7">
              <Button asChild variant="default">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2"
                >
                  Book a Call{" "}
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
