import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#C4B08E',
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
      <body className="grain">{children}</body>
    </html>
  );
}
