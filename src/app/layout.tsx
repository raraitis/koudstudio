import type { Metadata, Viewport } from 'next';
import { Jost } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
});

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-EPEVWKVHLH';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#E8D8C4',
};

export const metadata: Metadata = {
  title: 'koud.studio — Web & Mobile Development',
  description:
    'Custom web applications and mobile apps built with modern technologies. Full-stack development with Next.js, React, React Native, and Node.js. Based in Latvia, delivering worldwide.',
  keywords: [
    'web development',
    'mobile app development',
    'React',
    'Next.js',
    'React Native',
    'full-stack',
    'TypeScript',
    'Latvia',
    'custom software',
  ],
  authors: [{ name: 'koud.studio' }],
  creator: 'koud.studio',
  metadataBase: new URL('https://koud.studio'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.svg', type: 'image/svg+xml', sizes: '180x180' },
    ],
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'koud.studio — Web & Mobile Development',
    description:
      'Custom web applications and mobile apps built with modern technologies.',
    url: 'https://koud.studio',
    siteName: 'koud.studio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'koud.studio — Web & Mobile Development',
    description:
      'Custom web applications and mobile apps built with modern technologies.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'koud.studio',
  url: 'https://koud.studio',
  description:
    'Custom web applications and mobile apps built with modern technologies.',
  areaServed: 'Worldwide',
  foundingLocation: {
    '@type': 'Place',
    name: 'Latvia',
  },
  knowsAbout: [
    'Web Development',
    'Mobile App Development',
    'React',
    'Next.js',
    'React Native',
    'TypeScript',
    'Node.js',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jost.variable} grain`}>{children}</body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
