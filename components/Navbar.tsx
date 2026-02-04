"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "About Me", href: "#coach" },
  { label: "How I Coach", href: "#services" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const totalHeight = doc.scrollHeight - window.innerHeight;
      const progress =
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <nav className="relative border-b border-bean-blue/10 bg-white/90 backdrop-blur-md">
        <div
          className="absolute left-0 top-0 h-1 bg-[var(--bean-yellow-bright)]"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-5xl">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <Link
              href="#top"
              className="inline-flex items-center transition-opacity hover:opacity-90"
              aria-label="Go to top"
            >
              <Image
                src="/logos/beans-logo-black.png"
                alt="Beans Volleyball"
                width={120}
                height={40}
                priority
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-bean-blue-dark transition-colors hover:text-bean-blue"
                >
                  {link.label}
                </Link>
              ))}

              <Button asChild variant="default">
                <Link href="#contact">Book a Call</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-2xl text-bean-blue-dark hover:bg-bean-blue-light hover:text-bean-blue md:hidden"
                  aria-label="Open menu"
                >
                  <Menu aria-hidden="true" className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[300px] border-l border-bean-blue/10 sm:w-[340px]"
              >
                <SheetHeader>
                  <SheetTitle className="text-left uppercase text-bean-blue">
                    Menu
                  </SheetTitle>
                </SheetHeader>

                <nav
                  className="mt-6 flex flex-col gap-2"
                  aria-label="Mobile navigation"
                >
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="rounded-2xl px-4 py-3 text-bean-blue-dark transition-colors hover:bg-bean-blue-light hover:text-bean-blue"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}

                  <div className="mt-4">
                    <SheetClose asChild>
                      <Button asChild variant="default" className="w-full">
                        <Link href="#contact">Book a Call</Link>
                      </Button>
                    </SheetClose>

                    <p className="mt-3 text-center text-bean-blue-dark/70">
                      Free · 20 minutes · No obligation
                    </p>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
