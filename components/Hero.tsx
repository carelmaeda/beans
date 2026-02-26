import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-bean-dark relative">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(10, 29, 77, 0.96) 16%, rgba(10, 29, 77, 0.80) 46%, rgba(10, 29, 77, 0.40) 100%),
            linear-gradient(to bottom, rgba(10, 12, 16, 0.10) 0%, rgba(10, 12, 16, 0.70) 72%, rgba(10, 12, 16, 0.96) 100%),
            url('/images/hero-bg.jpg')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />

      {/* Texture */}
      <div className="texture-grid z-[1] opacity-[0.08]" aria-hidden="true">
        <div className="bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:52px_52px]" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 px-6 pt-16">
        <div className="grid items-end gap-6 md:grid-cols-12 lg:gap-8">
          {/* Left image – desktop */}
          <div className="hidden md:col-span-3 md:block">
            <div className="relative mx-auto h-[400px]">
              <Image
                src="/images/mami-hero4-crop.png"
                alt="Mami coaching"
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Center text */}
          <div className="mb-8 text-center md:col-span-6">
            <small className="bg-bean-blue/50 mb-5 inline-flex items-center rounded-md px-3 py-1.5 text-white uppercase">
              Elite Volleyball Mentorship
            </small>

            <h1 className="hero-text mb-6 text-white uppercase">
              Reach the
              <br />
              <span className="text-bean-accent"> Next Level</span>
            </h1>

            {/* Image – mobile (below title) */}
            <div className="mb-6 md:hidden">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px]">
                <Image
                  src="/images/mami-hero2.png"
                  alt="Mami"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            <p className="mx-auto mb-7 max-w-[46ch] text-white/80">
              I coach serious young athletes who want to be pushed. <br />{" "}
              Building discipline, volleyball IQ, and confidence under
              pressure.{" "}
            </p>

            <div className="flex flex-col items-center gap-2">
              <Button asChild variant="default" size="lg">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2"
                >
                  Book a Call
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>

              <small className="text-white/60">
                Free · 20 minutes · No obligation
              </small>
            </div>
          </div>

          {/* Right image – desktop */}
          <div className="hidden md:col-span-3 md:block">
            <div className="relative mx-auto h-[380px] w-full">
              <Image
                src="/images/mami-hero2-crop.png"
                alt="Mami in action"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
