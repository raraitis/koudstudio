import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'koud.studio — Web & Mobile Development',
  description:
    'Custom web applications and mobile apps built with modern technologies. Based in Latvia, delivering worldwide.',
  openGraph: {
    title: 'koud.studio — Web & Mobile Development',
    description:
      'Custom web applications and mobile apps built with modern technologies.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grain">{children}</body>
    </html>
  );
}
