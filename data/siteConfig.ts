import { SiteConfig } from '@/lib/types';
import { SITE_NAME, SITE_TAGLINE, CONTACT_EMAIL, SOCIAL_LINKS, ROUTES } from '@/lib/constants';

export const siteConfig: SiteConfig = {
  name: SITE_NAME,
  description: `${SITE_TAGLINE} - Professional volleyball mentorship with personalized online training, video analysis, and in-person sessions. Expert coaching from former professional player Coach Mami Miyashita.`,
  url: 'https://beansvolleyball.com', // TODO: Replace with actual domain
  ogImage: '/images/og-image.jpg',
  links: {
    email: CONTACT_EMAIL,
    instagram: SOCIAL_LINKS.instagram,
    youtube: SOCIAL_LINKS.youtube,
    facebook: SOCIAL_LINKS.facebook,
  },
  navigation: {
    main: [
      { label: 'Home', href: ROUTES.HOME },
      { label: 'Coach', href: ROUTES.COACH },
      { label: 'Services', href: ROUTES.SERVICES },
      { label: 'Roadmap', href: ROUTES.ROADMAP },
      { label: 'Values', href: ROUTES.VALUES },
      { label: 'Contact', href: ROUTES.CONTACT },
    ],
    footer: [
      { label: 'Coach', href: ROUTES.COACH },
      { label: 'Services', href: ROUTES.SERVICES },
      { label: 'Values', href: ROUTES.VALUES },
    ],
  },
};

export default siteConfig;
