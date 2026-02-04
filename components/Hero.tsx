import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-bean-dark">
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
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.08]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:52px_52px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-12">
          {/* Image – desktop */}
          <div className="hidden md:block md:col-span-5">
            <div className="relative mx-auto w-full max-w-[360px] aspect-[4/5]">
              <Image
                src="/images/mami2.png"
                alt="Mami"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-7 text-center md:text-left">
            <small className="mb-5 inline-flex w-fit items-center rounded-md  bg-bean-blue/50 px-3 py-1.5 uppercase text-white">
              Elite Volleyball Mentorship
            </small>

            <h1 className="text-center md:text-justify mb-6 uppercase text-white font-black text-4xl md:text-5xl">
             Train for the 
              <br />
              <span className="text-bean-accent">the Next Level</span>
            </h1>

            {/* Image – mobile (below title) */}
            <div className="mb-6 md:hidden">
              <div className="relative mx-auto w-full max-w-[280px] aspect-[4/5]">
                <Image
                  src="/images/mami-hero.png"
                  alt="Mami"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            <p className="mb-7 max-w-[46ch] text-white/80">
  I coach serious young athletes who want to be pushed — building discipline, volleyball IQ, and confidence under pressure.            </p>

            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
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
        </div>
      </div>

    </section>
  );
}
