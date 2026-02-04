/**
 * Core TypeScript type definitions for Beans Volleyball Coaching
 */

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
