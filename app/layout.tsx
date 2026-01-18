import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { siteConfig } from '@/data/siteConfig';
import { SITE_NAME, CONTACT_EMAIL } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'BEANS Volleyball | Professional Mentorship by Coach Mami',
    template: `%s | ${SITE_NAME}`,
  },
  description: siteConfig.description,
  keywords: [
    'volleyball coaching',
    'volleyball mentorship',
    'online volleyball training',
    'video analysis',
    'volleyball skills',
    'personalized coaching',
    'volleyball lessons',
    'Canada volleyball',
    'youth volleyball',
    'professional volleyball coach',
    'Coach Mami',
    'JVA volleyball',
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
    type: 'website',
    locale: 'en_CA',
    url: siteConfig.url,
    siteName: SITE_NAME,
    title: 'BEANS Volleyball | Professional Mentorship by Coach Mami',
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
    card: 'summary_large_image',
    title: 'BEANS Volleyball | Professional Mentorship by Coach Mami',
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': siteConfig.url,
    name: SITE_NAME,
    description: siteConfig.description,
    url: siteConfig.url,
    email: CONTACT_EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CA',
    },
    sameAs: [
      siteConfig.links.instagram || '',
      siteConfig.links.youtube || '',
      siteConfig.links.facebook || '',
    ].filter(Boolean),
    priceRange: '$100-$500',
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
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
