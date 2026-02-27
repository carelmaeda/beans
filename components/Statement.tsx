"use client"

import { useEffect, useRef, useState } from "react"
import Reveal from "@/components/Reveal"

export default function Statement() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (prefersReduced) return

    const handleScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const center = rect.top + rect.height / 2
      const viewCenter = window.innerHeight / 2
      setOffset((center - viewCenter) * 0.15)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="noise-grain bg-brand-blue-dark relative overflow-hidden px-4 py-16 md:px-8 md:py-20"
    >
      {/* Texture */}
      <div
        className="texture-grid opacity-[0.08]"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
        aria-hidden="true"
      >
        <div className="bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:52px_52px]" />
      </div>

      {/* Animated radial glow with scroll parallax */}
      <div
        className="pointer-events-none absolute inset-0 animate-pulse bg-[radial-gradient(ellipse_at_center,rgba(244,195,58,0.12),transparent_60%)]"
        style={{ transform: `translateY(${offset}px)` }}
        aria-hidden="true"
      />

      <div className="section-container relative">
        {/* 魂 (tamashii — spirit/soul) watermark */}
        <span
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none text-white/[0.04] select-none"
          style={{
            fontFamily:
              '"Yu Mincho", "Hiragino Mincho Pro", "MS PMincho", "Noto Serif CJK JP", serif',
            fontSize: "clamp(16rem, 25vw, 24rem)",
          }}
          aria-hidden="true"
        >
          魂
        </span>

        <Reveal>
          <h2 className="text-center text-4xl leading-tight font-extrabold tracking-tight text-white uppercase md:text-6xl">
            You have the talent.
            <br />
            <span
              className="text-brand-accent tracking-wide"
              style={{
                textShadow:
                  "0 0 60px rgba(255,215,0,0.2), 0 0 120px rgba(255,215,0,0.08)",
              }}
            >
              I&apos;ll build the athlete.
            </span>
          </h2>
        </Reveal>
      </div>
    </section>
  )
}
