import Link from "next/link";
import { Instagram, Youtube, Facebook, Mail } from "lucide-react";

const navLinks = [
  { label: "About Me", href: "#coach" },
  { label: "How I Coach", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Me", href: "#contact" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bean-blue-dark px-6">
      <div className="mx-auto max-w-5xl py-10">
        <div className="grid gap-10 md:grid-cols-12 md:gap-6">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="#top" className="inline-flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-sm">
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="beanGradientFooter"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="var(--bean-yellow-bright)" />
                      <stop
                        offset="100%"
                        stopColor="var(--bean-yellow-primary)"
                      />
                    </linearGradient>
                  </defs>
                  <ellipse
                    cx="50"
                    cy="50"
                    rx="30"
                    ry="40"
                    fill="url(#beanGradientFooter)"
                    transform="rotate(20 50 50)"
                  />
                  <ellipse
                    cx="48"
                    cy="45"
                    rx="8"
                    ry="12"
                    fill="white"
                    opacity="0.3"
                    transform="rotate(20 48 45)"
                  />
                </svg>
              </span>

              <span className="text-white">BEANS</span>
            </Link>

            <p className="mt-4 max-w-sm text-white/70">
              I coach athletes with high standards—so you build discipline,
              volleyball IQ, and confidence under pressure.
            </p>

            <div className="mt-5 flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80 transition-all hover:border-bean-accent hover:bg-bean-accent hover:text-bean-dark"
                >
                  <social.icon aria-hidden="true" size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <nav className="md:col-span-3" aria-label="Footer navigation">
            <h4 className="uppercase text-white/60">Navigation</h4>
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
            <h4 className="uppercase text-white/60">Talk to Me</h4>

            <a
              href="mailto:info@beansvolleyball.com"
              className="mt-4 inline-flex items-center gap-2 text-white transition-colors hover:text-bean-accent"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              info@beansvolleyball.com
            </a>

            <p className="mt-3 text-white/70">
              Based in Canada, and I coach athletes worldwide.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-white/55">
            &copy; {new Date().getFullYear()} Beans Volleyball. All rights
            reserved.
          </p>
          <p className="text-white/45">I build athletes for the next level.</p>
        </div>
      </div>
    </footer>
  );
}
