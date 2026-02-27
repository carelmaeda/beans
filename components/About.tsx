"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ShieldCheck,
  Globe,
  BadgeCheck,
  HeartHandshake,
  Users,
  Flame,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import BrushDivider from "@/components/BrushDivider"
import Reveal from "@/components/Reveal"

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
]

const values = [
  {
    title: "Anti-Racism",
    body: "Zero tolerance. Every athlete is respected.",
    icon: <ShieldCheck aria-hidden="true" className="h-5 w-5" />,
  },
  {
    title: "Multiculturalism",
    body: "Different perspectives make smarter players.",
    icon: <Globe aria-hidden="true" className="h-5 w-5" />,
  },
  {
    title: "Your Brand",
    body: "Build an identity scouts and coaches notice.",
    icon: <BadgeCheck aria-hidden="true" className="h-5 w-5" />,
  },
  {
    title: "Whole Athlete",
    body: "Your character and your game grow together.",
    icon: <HeartHandshake aria-hidden="true" className="h-5 w-5" />,
  },
  {
    title: "Community",
    body: "We compete hard and lift each other up.",
    icon: <Users aria-hidden="true" className="h-5 w-5" />,
  },
  {
    title: "Passion",
    body: "20+ years and that energy is in every session.",
    icon: <Flame aria-hidden="true" className="h-5 w-5" />,
  },
]

export default function About() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slideCount, setSlideCount] = useState(0)

  useEffect(() => {
    if (!carouselApi) return
    setSlideCount(carouselApi.scrollSnapList().length)
    setCurrentSlide(carouselApi.selectedScrollSnap())

    carouselApi.on("select", () => {
      setCurrentSlide(carouselApi.selectedScrollSnap())
    })
  }, [carouselApi])

  return (
    <section
      id="coach"
      className="bg-brand-blue-light relative overflow-hidden px-4 py-12 md:px-6 md:py-16"
    >
      {/* Texture */}
      <div
        className="texture-grid opacity-[0.06]"
        aria-hidden="true"
      >
        <div className="bg-[linear-gradient(to_right,rgba(22,62,170,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,62,170,0.18)_1px,transparent_1px)] bg-[size:52px_52px]" />
      </div>

      <div className="section-container relative">
        <Reveal>
          <header className="mb-9">
            <h2 className="text-brand-black uppercase">
              About <span className="text-brand-blue">Me</span>
            </h2>
            <p className="text-brand-blue-dark/70 max-w-[52ch]">
              JVA-certified. Japanese-trained. 15+ years turning raw potential into professional careers.
            </p>
          </header>
        </Reveal>

          <div className="grid items-start gap-8 lg:grid-cols-12">
          {/* Photo Carousel — bleeds left of content grid on desktop */}
          <Reveal variant="left" className="lg:col-span-5">
            <figure className="relative mx-auto w-full max-w-[400px] lg:mx-0 lg:-ml-12 lg:max-w-none lg:w-[calc(100%+3rem)]">
              <Carousel
                setApi={setCarouselApi}
                opts={{
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {coachImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />

                        <div
                          className="from-brand-blue-dark/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent"
                          aria-hidden="true"
                        />

                        <figcaption className="absolute right-4 bottom-4 left-4">
                          <div className="inline-flex flex-col rounded-2xl bg-black/40 px-4 py-3 backdrop-blur-md">
                            <p className="text-white uppercase">
                              Mami Miyashita
                            </p>
                            <small className="text-brand-accent tracking-[0.18em] uppercase">
                              宮下マミ
                            </small>
                          </div>
                        </figcaption>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious size="icon" className="left-3 border-0 bg-white/90 shadow-md hover:bg-white" />
                <CarouselNext size="icon" className="right-3 border-0 bg-white/90 shadow-md hover:bg-white" />
              </Carousel>

              {/* Dot indicators */}
              {slideCount > 1 && (
                <div className="mt-4 flex justify-center gap-2">
                  {Array.from({ length: slideCount }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => carouselApi?.scrollTo(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === currentSlide
                          ? "w-6 bg-brand-blue"
                          : "w-2 bg-brand-blue/30"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </figure>
          </Reveal>

          {/* Content */}
          <Reveal className="lg:col-span-7">
            <div className="space-y-4">
              <p className="text-brand-blue-dark max-w-[62ch] text-lg font-medium leading-relaxed">
                15+ years coaching serious athletes — from youth to
                professional level. JVA-certified, trained in the Japanese
                volleyball system, and focused on one thing: getting you to the
                next stage.
              </p>

              <p className="text-brand-blue-dark/70 max-w-[62ch]">
                I don&apos;t do generic programs. Every athlete I work with gets
                a real plan built around their game, their goals, and what they
                actually need to improve.
              </p>
            </div>

            <div className="pt-5">
              <BrushDivider variant="on-light" className="mb-4" />
              <h3 className="text-brand-blue-dark uppercase">
                What I Stand For
              </h3>

              <ul
                className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3"
                aria-label="Core values"
              >
                {values.map((v) => (
                  <li
                    key={v.title}
                    className="flex items-start gap-2.5 rounded-lg border border-brand-blue/10 bg-white px-3 py-2.5"
                  >
                    <div className="text-brand-blue mt-0.5 shrink-0">
                      {v.icon}
                    </div>
                    <div>
                      <p className="text-brand-black text-sm font-medium">
                        {v.title}
                      </p>
                      <p className="text-brand-blue-dark/60 text-xs">
                        {v.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7">
              <Button asChild variant="default">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2"
                >
                  Start Training With Me{" "}
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
          </div>
      </div>
    </section>
  )
}
