"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Instagram,
  Youtube,
  Facebook,
  ArrowRight,
  Loader2,
  CheckCircle,
  Mail,
  Clock,
} from "lucide-react";
import { sendContactEmail } from "@/lib/emailjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Reveal from "@/components/Reveal";

const contactSchema = z.object({
  from_name: z.string().min(2, "Name is required").max(50),
  from_email: z.string().email("Please enter a valid email"),
  goals: z.string().max(500).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
];

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const statusMessage = useMemo(() => {
    if (submitStatus === "success")
      return "Request sent. I'll reply within 24 hours with available times.";
    if (submitStatus === "error")
      return "Something went wrong. Please try again.";
    return "I'll reply within 24 hours with available times.";
  }, [submitStatus]);

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");
    try {
      await sendContactEmail({
        from_name: data.from_name,
        from_email: data.from_email,
        service: "Video Call Request",
        message: data.goals || "No additional details provided.",
      });
      setSubmitStatus("success");
      reset();
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="noise-grain relative overflow-hidden bg-brand-blue-dark px-4 py-12 md:px-6 md:py-16"
    >
      {/* background accents */}
      <div
        className="texture-grid opacity-[0.12]"
        aria-hidden="true"
      >
        <div className="bg-[radial-gradient(circle_at_25%_20%,rgba(244,195,58,0.35),transparent_55%),radial-gradient(circle_at_75%_30%,rgba(22,62,170,0.45),transparent_60%)]" />
        <div className="bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:52px_52px]" />
      </div>

      <div className="section-container relative">
        <Reveal>
          <header className="mb-10 text-center">
            <h2 className="uppercase text-white">
              Let&apos;s Get You <span className="text-brand-accent">Started</span>
            </h2>
            <p className="mx-auto max-w-[60ch] text-white/75">
              Free 20-minute call. No sales pitch — just an honest conversation
              about your game.
            </p>
          </header>
        </Reveal>

        <Reveal>
          <div className="grid items-stretch gap-6 lg:grid-cols-12">
          {/* Left */}
          <div className="glass-panel lg:col-span-5">
            <h3 className="uppercase text-white">Here&apos;s How It Works</h3>

            <ol className="mt-4 space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <span className="step-badge">
                  1
                </span>
                <span>You tell me about your game and your goals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="step-badge">
                  2
                </span>
                <span>I break down how I&apos;d approach your development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="step-badge">
                  3
                </span>
                <span>You decide if it&apos;s the right fit — zero pressure</span>
              </li>
            </ol>

            <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
              <p className="flex items-center gap-2 text-white/75">
                <Clock
                  aria-hidden="true"
                  className="h-4 w-4 text-brand-accent"
                />
                Free · 20 minutes · Honest conversation
              </p>

              <div>
                <p className="uppercase text-white/55">Rather email me?</p>
                <a
                  href="mailto:info@coachmami.com"
                  className="mt-2 inline-flex items-center gap-2 text-white transition-colors hover:text-brand-accent"
                >
                  <Mail aria-hidden="true" className="h-4 w-4" />
                  info@coachmami.com
                </a>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  className="social-icon-btn"
                  aria-label={name}
                >
                  <Icon aria-hidden="true" size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="glass-panel lg:col-span-7">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
              noValidate
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label
                    htmlFor="from_name"
                    className="uppercase text-white/70"
                  >
                    Your Name <span aria-hidden="true">*</span>
                  </Label>
                  <Input
                    id="from_name"
                    {...register("from_name")}
                    placeholder="Full Name"
                    aria-invalid={!!errors.from_name}
                    aria-describedby={
                      errors.from_name ? "from_name_error" : undefined
                    }
                    className="input-dark-bg"
                  />
                  {errors.from_name && (
                    <p
                      id="from_name_error"
                      role="alert"
                      className="text-red-300"
                    >
                      {errors.from_name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="from_email"
                    className="uppercase text-white/70"
                  >
                    Email <span aria-hidden="true">*</span>
                  </Label>
                  <Input
                    id="from_email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    {...register("from_email")}
                    placeholder="email@example.com"
                    aria-invalid={!!errors.from_email}
                    aria-describedby={
                      errors.from_email ? "from_email_error" : undefined
                    }
                    className="input-dark-bg"
                  />
                  {errors.from_email && (
                    <p
                      id="from_email_error"
                      role="alert"
                      className="text-red-300"
                    >
                      {errors.from_email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="goals" className="uppercase text-white/70">
                  Tell me about your game{" "}
                  <span className="text-white/45">(optional)</span>
                </Label>
                <Textarea
                  id="goals"
                  {...register("goals")}
                  placeholder="Your position, current level, what you want to improve..."
                  className="input-dark-bg min-h-[96px] resize-none p-3"
                />
              </div>

              <div>
                <Button
                  type="submit"
                  variant="default"
                  disabled={submitStatus === "loading"}
                  className="w-full md:w-auto md:min-w-[200px]"
                >
                  {submitStatus === "loading" ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2
                        aria-hidden="true"
                        className="animate-spin"
                        size={18}
                      />
                      Sending
                    </span>
                  ) : submitStatus === "success" ? (
                    <span className="animate-scale-in inline-flex items-center gap-2">
                      <CheckCircle aria-hidden="true" size={18} />
                      Request Sent
                    </span>
                  ) : submitStatus === "error" ? (
                    <span className="inline-flex items-center gap-2">
                      Try Again <ArrowRight aria-hidden="true" size={18} />
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      Book a Call <ArrowRight aria-hidden="true" size={18} />
                    </span>
                  )}
                </Button>

                <p
                  className="mt-3 text-center text-white/60 md:text-left"
                  aria-live="polite"
                >
                  {statusMessage}
                </p>
              </div>
            </form>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
