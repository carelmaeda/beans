import Link from 'next/link';
import { Instagram, Youtube, Facebook } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#coach' },
  { label: 'Services', href: '#services' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Values', href: '#values' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0C10] border-t border-white/5 px-6">
      <div className="max-w-5xl mx-auto py-12">
        <div className="grid md:grid-cols-12 gap-8 md:gap-6">

          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="#" className="flex items-center gap-2 mb-4">
              <div className="h-8 aspect-square flex items-center justify-center">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <defs>
                    <linearGradient id="beanGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--bean-yellow-bright)" />
                      <stop offset="100%" stopColor="var(--bean-yellow-primary)" />
                    </linearGradient>
                  </defs>
                  <ellipse cx="50" cy="50" rx="30" ry="40" fill="url(#beanGradientFooter)" transform="rotate(20 50 50)" />
                  <ellipse cx="48" cy="45" rx="8" ry="12" fill="white" opacity="0.3" transform="rotate(20 48 45)" />
                </svg>
              </div>
              <span className="font-bold text-white text-xl">BEANS</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Elite volleyball coaching. From seed to pro.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 bg-white/5 hover:bg-bean-accent rounded-lg flex items-center justify-center text-white/60 hover:text-bean-dark transition-all"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-bean-accent mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-bean-accent mb-4">
              Get in Touch
            </h4>
            <a
              href="mailto:info@beansvolleyball.com"
              className="text-white font-bold hover:text-bean-accent transition-colors block mb-4"
            >
              info@beansvolleyball.com
            </a>
            <p className="text-white/40 text-sm">
              Based in Canada. Training athletes worldwide.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Beans Volleyball. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Designed with discipline. Built for champions.
          </p>
        </div>
      </div>
    </footer>
  );
}
