import { SiteConfig } from "@/lib/types"
import { SITE_NAME, CONTACT_EMAIL, SOCIAL_LINKS, ROUTES } from "@/lib/constants"

export const siteConfig: SiteConfig = {
  name: SITE_NAME,
  description: `Coach Mami — Ceretified Coach volleyball coach with 15+ years experience developing athletes from amateur to pro. Online coaching, video analysis, and in-person training.`,
  url: "https://coachmami.com",
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
      { label: "Training", href: ROUTES.SERVICES },
      { label: "FAQ", href: ROUTES.FAQ },
      { label: "Contact", href: ROUTES.CONTACT },
    ],
    footer: [
      { label: "About Me", href: ROUTES.COACH },
      { label: "Training", href: ROUTES.SERVICES },
      { label: "FAQ", href: ROUTES.FAQ },
    ],
  },
}

export default siteConfig
