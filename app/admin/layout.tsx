import type { Metadata } from 'next';
import './admin.css';

export const metadata: Metadata = {
  title: { default: 'Admin', template: '%s · My Spicy Vanilla Admin' },
  robots: { index: false, follow: false },
};

/** Root of the CMS. Sign-in is enforced by the (panel) layout and by every /api/admin route. */
export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
