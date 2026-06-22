import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { Providers } from '@/components/Providers';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const SITE_URL = 'https://gulfmarks.com';
const OG_IMAGE = `${SITE_URL}/og_(2).png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'GulfMarks | Professional Websites for Gulf Businesses',
    template: '%s | GulfMarks',
  },
  description:
    'Professional websites, Google Business setup, local SEO, and WhatsApp integration for businesses across Saudi Arabia and the Gulf. One-time payment. No monthly fees.',
  keywords: [
    'web design Saudi Arabia',
    'website development Gulf',
    'local SEO Riyadh',
    'Google Business Profile setup',
    'digital agency UAE',
    'تصميم مواقع السعودية',
    'تطوير مواقع الخليج',
    'website design Jeddah',
    'website design Dubai',
    'affordable website Gulf',
    'WhatsApp website integration',
    'mobile website Saudi Arabia',
  ],
  alternates: {
    canonical: SITE_URL,
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
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other: [
      { rel: 'manifest', url: '/web-app-manifest-192x192.png' },
    ],
  },
  openGraph: {
    title: 'GulfMarks | Professional Websites for Gulf Businesses',
    description:
      'Professional websites, Google Business setup, local SEO, and WhatsApp integration for Gulf businesses. One-time payment. No monthly fees.',
    url: SITE_URL,
    type: 'website',
    locale: 'en_US',
    siteName: 'GulfMarks',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'GulfMarks – Professional Websites for Gulf Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GulfMarks | Professional Websites for Gulf Businesses',
    description:
      'Professional websites, Google Business setup, local SEO, and WhatsApp integration for Gulf businesses. One-time payment. No monthly fees.',
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'GulfMarks',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/400x100 copy.png`,
      },
      description:
        'Professional website design and digital growth solutions for businesses across Saudi Arabia and the Gulf region.',
      areaServed: ['Saudi Arabia', 'UAE', 'Qatar', 'Kuwait', 'Bahrain', 'Oman'],
      sameAs: [],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#localbusiness`,
      name: 'GulfMarks',
      url: SITE_URL,
      image: OG_IMAGE,
      description:
        'Affordable, mobile-friendly websites for Gulf businesses. One-time payment, no monthly fees. WhatsApp integration and Google Business setup included.',
      priceRange: '299 SAR – 799 SAR',
      areaServed: ['Saudi Arabia', 'UAE', 'Qatar', 'Kuwait', 'Bahrain', 'Oman'],
      serviceType: [
        'Website Design',
        'Local SEO',
        'Google Business Profile Setup',
        'WhatsApp Integration',
        'Mobile Website Development',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'GulfMarks',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-inter bg-white text-slate-900 antialiased">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <StickyMobileCTA />
        </Providers>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
