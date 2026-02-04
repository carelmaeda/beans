import { SiteConfig } from "@/lib/types";
import {
  SITE_NAME,
  SITE_TAGLINE,
  CONTACT_EMAIL,
  SOCIAL_LINKS,
  ROUTES,
} from "@/lib/constants";

export const siteConfig: SiteConfig = {
  name: SITE_NAME,
  description: `${SITE_TAGLINE}. I'm Mami—JVA-certified coach with 15+ years experience. Online training, video analysis, in-person sessions.`,
  url: "https://beansvolleyball.com",
  ogImage: "/images/og-image.jpg",
  links: {
    email: CONTACT_EMAIL,
    instagram: SOCIAL_LINKS.instagram,
    youtube: SOCIAL_LINKS.youtube,
    facebook: SOCIAL_LINKS.facebook,
  },
  navigation: {
    main: [
      { label: "Home", href: ROUTES.HOME },
      { label: "About Me", href: ROUTES.COACH },
      { label: "How I Coach", href: ROUTES.SERVICES },
      { label: "FAQ", href: ROUTES.FAQ },
      { label: "Contact", href: ROUTES.CONTACT },
    ],
    footer: [
      { label: "About Me", href: ROUTES.COACH },
      { label: "How I Coach", href: ROUTES.SERVICES },
      { label: "FAQ", href: ROUTES.FAQ },
    ],
  },
};

export default siteConfig;
