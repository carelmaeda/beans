/**
 * Site-wide constants for Coach Mami
 */

export const SITE_NAME = "Coach Mami";
export const SITE_TAGLINE = "Seed to Pro";

export const CONTACT_EMAIL = "info@coachmami.com";

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/coachmami",
  youtube: "https://youtube.com/@coachmami",
  facebook: "https://facebook.com/coachmami",
} as const;

// Single-page anchor navigation
export const ROUTES = {
  HOME: "#",
  COACH: "#coach",
  SERVICES: "#services",
  FAQ: "#faq",
  CONTACT: "#contact",
} as const;
