/**
 * Core TypeScript type definitions for Beans Volleyball Coaching
 */

// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  priceLabel?: string;
  features: string[];
  icon: string;
  image?: string;
  detailedDescription?: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
  avatar?: string;
}

// FAQ Types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Pricing Types
export interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: 'session' | 'month' | 'video';
  features: string[];
  highlighted?: boolean;
  ctaText: string;
  ctaLink: string;
  description?: string;
}

// Process Step Types
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  details?: string[];
}

// Navigation Types
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

// Site Config Types
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    email: string;
    phone?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  navigation: {
    main: NavLink[];
    footer: NavLink[];
  };
}

// Info Card Types
export interface InfoCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Coaching Philosophy Types
export interface PhilosophyPillar {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Credential Types
export interface Credential {
  id: string;
  category: 'playing' | 'coaching';
  items: string[];
}
