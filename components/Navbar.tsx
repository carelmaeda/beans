'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const navLinks = [
  { label: 'Coach', href: '#coach' },
  { label: 'Services', href: '#services' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Values', href: '#values' },
];

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <Button
              asChild
              className="bg-[var(--bean-blue-primary)] text-white px-6 py-2 rounded-full font-semibold hover:bg-[var(--bean-blue-dark)] transition-all hover:scale-105"
            >
              <Link href="#contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-gray-700 hover:text-[var(--bean-blue-primary)]"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <SheetHeader>
                <SheetTitle className="text-left text-[var(--bean-blue-primary)]">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-[var(--bean-blue-primary)] font-medium transition-colors py-2 text-lg"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button
                    asChild
                    className="bg-[var(--bean-blue-primary)] text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-[var(--bean-blue-dark)] transition-all mt-4"
                  >
                    <Link href="#contact">Book a Call</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
