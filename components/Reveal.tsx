"use client"

import { useEffect, useRef } from "react"

interface RevealProps {
  children: React.ReactNode
  className?: string
  stagger?: boolean
  /** Animation variant: "up" (default), "left", or "scale" */
  variant?: "up" | "left" | "scale"
}

export default function Reveal({ children, className = "", stagger, variant = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible")
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const variantMap = {
    up: stagger ? "reveal-stagger" : "reveal",
    left: "reveal-left",
    scale: "reveal-scale",
  }

  return (
    <div ref={ref} className={`${variantMap[variant]} ${className}`}>
      {children}
    </div>
  )
}
