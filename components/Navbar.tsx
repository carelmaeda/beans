"use client";

import { useEffect, useState } from "react";
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
  { label: "Training", href: "#services" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const totalHeight = doc.scrollHeight - window.innerHeight;
      const progress =
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["coach", "services", "faq"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = `#${entry.target.id}`;
          if (entry.isIntersecting) visible.add(id);
          else visible.delete(id);
        });
        const active =
          sectionIds.map((id) => `#${id}`).find((href) => visible.has(href)) ||
          "";
        setActiveSection(active);
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <nav
        className={`relative border-b border-brand-blue/10 bg-white/90 backdrop-blur-md transition-[box-shadow] duration-300 ${
          scrolled ? "shadow-[0_2px_16px_rgba(10,29,77,0.06)]" : ""
        }`}
      >
        {/* Progress bar — thin, glowing, fades in on scroll */}
        <div
          className={`absolute left-0 top-0 h-[2px] bg-[var(--brand-yellow-bright)] transition-opacity duration-300 ${
            scrollProgress > 0 ? "opacity-100" : "opacity-0"
          }`}
          style={{
            width: `${scrollProgress}%`,
            boxShadow: "0 0 8px rgba(255, 215, 0, 0.4)",
          }}
          aria-hidden="true"
        />

        <div className="section-container px-4 md:px-6">
          <div
            className={`flex items-center justify-between transition-[height] duration-300 ${
              scrolled ? "h-12" : "h-14"
            }`}
          >
            {/* Logo */}
            <Link
              href="#top"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-90"
              aria-label="Go to top"
            >
              <span className="brand-logo" style={{ fontFamily: "var(--font-barlow), sans-serif" }}>
                Coach <span>Mami</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link relative transition-colors ${
                    activeSection === link.href
                      ? "nav-link-active"
                      : "text-brand-blue-dark hover:text-brand-blue"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Button asChild variant="default" className="bg-brand-blue text-white hover:bg-brand-blue/85">
                <Link href="#contact">Free Call</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-2xl text-brand-blue-dark hover:bg-brand-blue-light hover:text-brand-blue md:hidden"
                  aria-label="Open menu"
                >
                  <Menu aria-hidden="true" className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[300px] border-l border-brand-blue/10 sm:w-[340px]"
              >
                <SheetHeader>
                  <SheetTitle>
                    <span className="inline-flex items-center gap-2">
                      <span
                        className="text-lg font-bold tracking-tight uppercase"
                        style={{ fontFamily: "var(--font-barlow), sans-serif" }}
                      >
                        Coach <span className="text-brand-accent">Mami</span>
                      </span>
                    </span>
                  </SheetTitle>
                </SheetHeader>

                <nav
                  className="mt-4 flex flex-col gap-1"
                  aria-label="Mobile navigation"
                >
                  {navLinks.map((link, index) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-3 rounded-2xl px-4 py-3 text-brand-blue-dark transition-colors hover:bg-brand-blue-light hover:text-brand-blue"
                      >
                        <span className="font-mono text-sm font-bold text-brand-blue/25">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}

                  <div className="mt-4">
                    <SheetClose asChild>
                      <Button asChild variant="default" className="w-full bg-brand-blue text-white hover:bg-brand-blue/85">
                        <Link href="#contact">Free Call</Link>
                      </Button>
                    </SheetClose>

                    <p className="mt-3 text-center text-brand-blue-dark/70">
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
