'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Instagram, Youtube, Facebook, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { sendContactEmail } from '@/lib/emailjs';

const contactSchema = z.object({
  from_name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  athlete_age: z.string().optional(),
  from_email: z.string().email('Please enter a valid email address'),
  inquiry_type: z.enum(['online-coaching', 'video-analysis', 'in-person', 'little-seeds', 'other'], 'Please select an inquiry type'),
  goals: z
    .string()
    .min(10, 'Please tell us more about your goals (at least 10 characters)')
    .max(1000, 'Message must be less than 1000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');
    try {
      await sendContactEmail({
        from_name: data.from_name,
        from_email: data.from_email,
        service: data.inquiry_type,
        message: `Age: ${data.athlete_age || 'Not specified'}\n\nGoals:\n${data.goals}`,
      });
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="bg-[var(--bean-black)]">
      {/* Contact Form Section */}
      <div className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Side - Info */}
            <div>
              <span className="inline-block px-4 py-2 bg-[var(--bean-yellow-bright)]/20 text-[var(--bean-yellow-bright)] rounded-full text-sm font-semibold mb-4">
                The Harvest
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
                Ready to Grow?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Take the first step toward your volleyball dreams. Fill out the form and Coach Mami will
                personally respond within 24-48 hours.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[var(--bean-blue-primary)] rounded-full flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email us at</p>
                    <a
                      href="mailto:info@beansvolleyball.com"
                      className="text-white font-medium hover:text-[var(--bean-yellow-bright)] transition-colors"
                    >
                      info@beansvolleyball.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/beansvolleyball"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[var(--bean-yellow-bright)] hover:text-[var(--bean-black)] transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/@beansvolleyball"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe on YouTube"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[var(--bean-yellow-bright)] hover:text-[var(--bean-black)] transition-all"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/beansvolleyball"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Like us on Facebook"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[var(--bean-yellow-bright)] hover:text-[var(--bean-black)] transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-gray-400 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    {...register('from_name')}
                    className="w-full bg-transparent border-b border-gray-600 focus:border-[var(--bean-yellow-bright)] outline-none py-3 text-white placeholder-gray-500 transition-colors"
                    placeholder="Your name"
                  />
                  {errors.from_name && (
                    <p className="mt-1 text-sm text-red-400">{errors.from_name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    {...register('from_email')}
                    className="w-full bg-transparent border-b border-gray-600 focus:border-[var(--bean-yellow-bright)] outline-none py-3 text-white placeholder-gray-500 transition-colors"
                    placeholder="your@email.com"
                  />
                  {errors.from_email && (
                    <p className="mt-1 text-sm text-red-400">{errors.from_email.message}</p>
                  )}
                </div>

                {/* Athlete Age */}
                <div>
                  <label htmlFor="athlete_age" className="block text-sm font-medium text-gray-400 mb-2">
                    Athlete Age
                  </label>
                  <input
                    type="text"
                    id="athlete_age"
                    {...register('athlete_age')}
                    className="w-full bg-transparent border-b border-gray-600 focus:border-[var(--bean-yellow-bright)] outline-none py-3 text-white placeholder-gray-500 transition-colors"
                    placeholder="e.g., 14 years old"
                  />
                </div>

                {/* Inquiry Type */}
                <div>
                  <label htmlFor="inquiry_type" className="block text-sm font-medium text-gray-400 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiry_type"
                    {...register('inquiry_type')}
                    className="w-full bg-transparent border-b border-gray-600 focus:border-[var(--bean-yellow-bright)] outline-none py-3 text-white transition-colors cursor-pointer"
                  >
                    <option value="" className="bg-[var(--bean-black)]">
                      Select an option
                    </option>
                    <option value="online-coaching" className="bg-[var(--bean-black)]">
                      Online Coaching
                    </option>
                    <option value="video-analysis" className="bg-[var(--bean-black)]">
                      Video Analysis
                    </option>
                    <option value="in-person" className="bg-[var(--bean-black)]">
                      In-Person Training
                    </option>
                    <option value="little-seeds" className="bg-[var(--bean-black)]">
                      Little Seeds Program
                    </option>
                    <option value="other" className="bg-[var(--bean-black)]">
                      Other
                    </option>
                  </select>
                  {errors.inquiry_type && (
                    <p className="mt-1 text-sm text-red-400">{errors.inquiry_type.message}</p>
                  )}
                </div>

                {/* Goals */}
                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-gray-400 mb-2">
                    Goals & Questions *
                  </label>
                  <textarea
                    id="goals"
                    {...register('goals')}
                    rows={4}
                    className="w-full bg-transparent border-b border-gray-600 focus:border-[var(--bean-yellow-bright)] outline-none py-3 text-white placeholder-gray-500 transition-colors resize-none"
                    placeholder="Tell us about your volleyball goals and any questions you have..."
                  />
                  {errors.goals && <p className="mt-1 text-sm text-red-400">{errors.goals.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="w-full bg-[var(--bean-yellow-bright)] text-[var(--bean-black)] py-4 rounded-full font-bold text-lg hover:bg-[var(--bean-yellow-primary)] transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {submitStatus === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      Try Again
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <p className="text-center text-green-400 text-sm">
                    Thank you! Coach Mami will be in touch soon.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-center text-red-400 text-sm">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <Link href="#" className="flex items-center gap-2">
              <div className="h-8 aspect-square">
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

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} BEANS Volleyball. All rights reserved.
            </p>

            {/* Nav Links */}
            <nav className="flex items-center gap-6">
              <Link href="#coach" className="text-gray-400 hover:text-white text-sm transition-colors">
                Coach
              </Link>
              <Link href="#services" className="text-gray-400 hover:text-white text-sm transition-colors">
                Services
              </Link>
              <Link href="#values" className="text-gray-400 hover:text-white text-sm transition-colors">
                Values
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </section>
  );
}
