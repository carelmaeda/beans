import type { Metadata } from "next";
import { DM_Sans, Barlow_Condensed } from "next/font/google";
import "../styles/globals.scss";
import { siteConfig } from "@/data/siteConfig";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-dm-sans",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Coach Mami | Volleyball Coaching - Seed to Pro",
    template: `%s | ${SITE_NAME}`,
  },
  description: siteConfig.description,
  keywords: [
    "volleyball coaching",
    "volleyball mentorship",
    "online volleyball training",
    "video analysis",
    "volleyball skills",
    "personalized coaching",
    "volleyball lessons",
    "Canada volleyball",
    "youth volleyball",
    "professional volleyball coach",
    "Coach Mami",
    "JVA volleyball",
  ],
  authors: [{ name: `${SITE_NAME}` }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteConfig.url,
    siteName: SITE_NAME,
    title: "Coach Mami | Volleyball Coaching - Seed to Pro",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coach Mami | Volleyball Coaching - Seed to Pro",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": siteConfig.url,
    name: SITE_NAME,
    description: siteConfig.description,
    url: siteConfig.url,
    email: CONTACT_EMAIL,
    address: {
      "@type": "PostalAddress",
      addressCountry: "CA",
    },
    sameAs: [
      siteConfig.links.instagram || "",
      siteConfig.links.youtube || "",
      siteConfig.links.facebook || "",
    ].filter(Boolean),
    priceRange: "$100-$500",
    image: siteConfig.ogImage,
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${barlow.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-2xl focus:bg-brand-accent focus:px-4 focus:py-2 focus:text-brand-dark focus:font-semibold"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
