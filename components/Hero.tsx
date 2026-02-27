import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="top" className="noise-grain">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.96) 6%, rgba(0, 0, 0, 0.80) 26%, rgba(10, 29, 77, 0.40) 100%),
            url('/images/hero-bg2.jpg')
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
      <div className="section-container relative z-10 flex min-h-[85vh] flex-col justify-center px-4 md:min-h-[500px] md:px-6 md:py-16">
        <div className="text-center md:max-w-[55%] md:text-left">
          <small className="hero-enter hero-enter-1 bg-brand-accent/15 text-brand-accent mb-5 inline-flex items-center rounded-md px-3 py-1.5 uppercase">
            JVA-Certified Coach · 15+ Years
          </small>

          <h1 className="hero-enter hero-enter-2 hero-text mb-6 text-white uppercase">
            I&apos;ll Take You
            <br />
            <span className="text-brand-accent"> From Amateur to Pro.</span>
          </h1>

          <p className="hero-enter hero-enter-3 mb-7 max-w-[46ch] text-white/80">
            I build discipline, volleyball IQ, and the confidence you need to
            compete at the highest level.
          </p>

          {/* Image – mobile only */}
          <div className="hero-enter hero-enter-3 mb-7 md:hidden">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px]">
              <Image
                src="/images/mami-hero2.png"
                alt="Mami"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          <div className="hero-enter hero-enter-4 flex flex-col items-center gap-2 md:items-start">
            <Button asChild variant="default" size="lg" className="btn-shine">
              <Link href="#contact" className="inline-flex items-center gap-2">
                Book a Free Call
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>

            <small className="text-white/60">
              Free · 20 minutes · No obligation
            </small>
          </div>
        </div>
      </div>

      {/* Desktop image — bleeds to right viewport edge */}
      <div className="hero-enter hero-enter-4 pointer-events-none absolute inset-y-0 right-0 z-[5] hidden w-[42%] md:flex md:items-end">
        <div className="relative h-[440px] w-full">
          <Image
            src="/images/mami-hero2-crop.png"
            alt="Mami in action"
            fill
            priority
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  )
}
