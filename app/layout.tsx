import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
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

export const metadata: Metadata = {
  metadataBase: new URL('https://gulfmarks.com'),
  title: 'GulfMarks | Professional Websites for Gulf Businesses',
  description:
    'Professional websites, Google visibility, local SEO, and digital growth solutions for businesses across Saudi Arabia and the Gulf.',
  keywords: [
    'web design Saudi Arabia',
    'website development Gulf',
    'local SEO Riyadh',
    'Google Business Profile setup',
    'digital agency UAE',
  ],
  openGraph: {
    title: 'GulfMarks | Professional Websites for Gulf Businesses',
    description:
      'Professional websites, Google visibility, local SEO, and digital growth solutions for businesses across Saudi Arabia and the Gulf.',
    type: 'website',
    locale: 'en_US',
    siteName: 'GulfMarks',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GulfMarks | Professional Websites for Gulf Businesses',
    description:
      'Professional websites, Google visibility, local SEO, and digital growth solutions for businesses across Saudi Arabia and the Gulf.',
  },
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
      </body>
    </html>
  );
}
