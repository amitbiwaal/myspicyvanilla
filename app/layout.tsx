import type { Metadata, Viewport } from 'next';

/** Defaults inherited by every page; individual pages override title, description, canonical and social tags. */
export const metadata: Metadata = {
  metadataBase: new URL('https://myspicyvanilla.net'),
  applicationName: 'My Spicy Vanilla',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/images/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  other: { rating: 'adult' },
};

export const viewport: Viewport = {
  themeColor: '#F4F1EC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
