interface BrushDividerProps {
  variant?: "on-dark" | "on-light"
  className?: string
}

export default function BrushDivider({
  variant = "on-light",
  className = "",
}: BrushDividerProps) {
  const isDark = variant === "on-dark"
  const color = isDark ? "#ffd700" : "#0a1d4d"

  return (
    <div className={`h-5 ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 20"
        fill="none"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        {/* Main brush stroke */}
        <path
          d="M0 11 C120 7 280 15 420 10 C560 5 700 14 840 10 C980 6 1140 14 1280 10 C1360 8 1420 11 1440 10"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity={isDark ? 0.15 : 0.1}
        />
        {/* Secondary thin stroke (dry brush) */}
        <path
          d="M20 13 C200 9 380 16 560 12 C740 8 920 15 1100 11 C1220 8 1360 13 1440 12"
          stroke={color}
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity={isDark ? 0.08 : 0.05}
        />
        {/* Ink splatter */}
        <circle cx="350" cy="8" r="1" fill={color} opacity={isDark ? 0.1 : 0.06} />
        <circle cx="780" cy="14" r="1.3" fill={color} opacity={isDark ? 0.08 : 0.04} />
        <circle cx="1150" cy="7" r="0.8" fill={color} opacity={isDark ? 0.1 : 0.06} />
      </svg>
    </div>
  )
}
