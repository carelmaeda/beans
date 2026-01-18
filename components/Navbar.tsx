'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Coach', href: '#coach' },
  { label: 'Services', href: '#services' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Values', href: '#values' },
];

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      {/* Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-1 bg-[var(--bean-yellow-bright)] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="h-10 aspect-square flex items-center justify-center">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <linearGradient id="beanGradientNav" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--bean-yellow-bright)" />
                    <stop offset="100%" stopColor="var(--bean-yellow-primary)" />
                  </linearGradient>
                </defs>
                <ellipse cx="50" cy="50" rx="30" ry="40" fill="url(#beanGradientNav)" transform="rotate(20 50 50)" />
                <ellipse cx="48" cy="45" rx="8" ry="12" fill="white" opacity="0.3" transform="rotate(20 48 45)" />
              </svg>
            </div>
            <span className="font-bold text-[var(--bean-blue-primary)] text-2xl">BEANS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[var(--bean-blue-primary)] font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-[var(--bean-blue-primary)] text-white px-6 py-2 rounded-full font-semibold hover:bg-[var(--bean-blue-dark)] transition-all hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-[var(--bean-blue-primary)] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-[var(--bean-blue-primary)] font-medium transition-colors py-2"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="bg-[var(--bean-blue-primary)] text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-[var(--bean-blue-dark)] transition-all mt-2"
                onClick={handleLinkClick}
              >
                Book a Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
