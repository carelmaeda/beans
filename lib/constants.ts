/**
 * Site-wide constants for BEANS Volleyball
 */

export const SITE_NAME = "BEANS Volleyball";
export const SITE_TAGLINE = "Seed to Pro";

export const CONTACT_EMAIL = "info@beansvolleyball.com";

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/beansvolleyball",
  youtube: "https://youtube.com/@beansvolleyball",
  facebook: "https://facebook.com/beansvolleyball",
} as const;

// Single-page anchor navigation
export const ROUTES = {
  HOME: "#",
  COACH: "#coach",
  SERVICES: "#services",
  FAQ: "#faq",
  CONTACT: "#contact",
} as const;
