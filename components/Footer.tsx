import Link from "next/link"
import { Instagram, Youtube, Facebook, Mail, ArrowUp } from "lucide-react"

const navLinks = [
  { label: "About Me", href: "#coach" },
  { label: "Training", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Me", href: "#contact" },
]

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
]

export default function Footer() {
  return (
    <footer className="noise-grain bg-brand-blue-dark relative overflow-hidden border-t border-white/10 px-4 md:px-6">
      {/* Subtle glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(22,62,170,0.15),transparent_70%)]"
        aria-hidden="true"
      />

      {/* Brand watermark */}
      <div
        className="section-container relative pt-10 pb-4 text-center"
        aria-hidden="true"
      >
        <p
          className="text-5xl font-extrabold tracking-tight text-white/[0.06] uppercase md:text-7xl"
          style={{
            fontFamily: "var(--font-barlow), sans-serif",
            letterSpacing: "0.08em",
          }}
        >
          Seed to Pro
        </p>
      </div>

      <div className="section-container pb-10">
        <div className="grid gap-10 md:grid-cols-12 md:gap-6">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="#top" className="inline-flex items-center gap-2">
              <span
                className="text-lg font-bold tracking-tight text-white uppercase"
                style={{ fontFamily: "var(--font-barlow), sans-serif" }}
              >
                Coach <span className="text-brand-accent">Mami</span>
              </span>
              {/* Hanko stamp — Japanese signature seal */}
              <svg
                viewBox="0 0 28 28"
                fill="none"
                className="ml-1 h-5 w-5"
                aria-hidden="true"
              >
                <circle
                  cx="14"
                  cy="14"
                  r="12"
                  stroke="#c53030"
                  strokeWidth="1.5"
                  opacity="0.75"
                />
                <circle
                  cx="14"
                  cy="14"
                  r="9"
                  stroke="#c53030"
                  strokeWidth="0.5"
                  opacity="0.4"
                />
                <text
                  x="14"
                  y="18.5"
                  textAnchor="middle"
                  fill="#c53030"
                  fontSize="12"
                  fontWeight="700"
                  opacity="0.8"
                  style={{
                    fontFamily:
                      '"Yu Mincho", "Hiragino Mincho Pro", "MS PMincho", serif',
                  }}
                >
                  真
                </text>
              </svg>
            </Link>

            <p className="mt-4 max-w-sm text-white/70">
              JVA-certified volleyball coach. 15+ years developing serious
              athletes from amateur to pro level.
            </p>

            <div className="mt-5 flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="social-icon-btn"
                >
                  <social.icon aria-hidden="true" size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <nav className="md:col-span-3" aria-label="Footer navigation">
            <h4 className="text-white/60 uppercase">Navigation</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-white/60 uppercase">Talk to Me</h4>

            <a
              href="mailto:info@coachmami.com"
              className="hover:text-brand-accent mt-4 inline-flex items-center gap-2 text-white transition-colors"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              info@coachmami.com
            </a>

            <p className="mt-3 text-white/70">
              Based in Canada. Coaching athletes worldwide.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10" />

        <div className="flex flex-col items-center justify-between gap-3 pt-4 sm:flex-row">
          <p className="text-white/55">
            &copy; {new Date().getFullYear()} Coach Mami. All rights reserved.
          </p>
          <Link
            href="#top"
            className="social-icon-btn inline-flex !w-auto items-center gap-2 !rounded-full px-4"
            aria-label="Back to top"
          >
            <ArrowUp aria-hidden="true" size={14} />
            <span className="text-sm">Top</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
