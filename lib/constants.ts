/**
 * Site-wide constants for BEANS Volleyball
 */

export const SITE_NAME = 'BEANS Volleyball';
export const SITE_TAGLINE = 'Where Talent Blooms into Greatness';

export const CONTACT_EMAIL = 'info@beansvolleyball.com';
export const CONTACT_PHONE = '+1 (555) 123-4567'; // TODO: Replace with actual

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/beansvolleyball',
  youtube: 'https://youtube.com/@beansvolleyball',
  facebook: 'https://facebook.com/beansvolleyball',
} as const;

// Brand Colors - matches styles/_variables.scss
export const COLORS = {
  // Core Brand
  BEAN_BLUE_PRIMARY: '#163EAA',
  BEAN_YELLOW_PRIMARY: '#F4C33A',
  BEAN_WHITE: '#FFFFFF',
  BEAN_BLACK: '#1A1A1A',
  // Derived Tones
  BEAN_BLUE_DARK: '#0A1D4D',
  BEAN_BLUE_LIGHT: '#E8EEFF',
  BEAN_YELLOW_BRIGHT: '#FFD700',
  BEAN_GRAY_LIGHT: '#F2F2F2',
} as const;

export const PRICING = {
  SINGLE_SESSION: 150,
  VIDEO_ANALYSIS: 100,
  MONTHLY_PACKAGE: 500,
  MONTHLY_SESSIONS: 4,
} as const;

export const SERVICE_IDS = {
  ONLINE_COACHING: 'online-coaching',
  VIDEO_ANALYSIS: 'video-analysis',
  IN_PERSON: 'in-person',
} as const;

// Single-page anchor navigation
export const ROUTES = {
  HOME: '#',
  COACH: '#coach',
  SERVICES: '#services',
  ROADMAP: '#roadmap',
  VALUES: '#values',
  CONTACT: '#contact',
} as const;

export const EXTERNAL_LINKS = {
  CALENDLY: 'https://calendly.com/beansvolleyball', // TODO: Replace with actual Calendly URL
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

export const MAX_CONTAINER_WIDTH = 1200;

export const FREE_CONSULTATION_DURATION = 30; // minutes
