import Link from 'next/link';
import { redirect } from 'next/navigation';
import LogoutButton from '../_components/LogoutButton';
import { isAuthed } from '@/lib/auth';

export const dynamic = 'force-dynamic';

/** Everything inside the panel requires a signed-in session. */
export default async function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  if (!(await isAuthed())) redirect('/admin/login/');

  return (
    <>
      <header className="adm-top">
        <div className="in">
          <Link className="adm-brand" href="/admin/">
            My Spicy Vanilla <small>Admin</small>
          </Link>
          <nav aria-label="Admin">
            <Link href="/admin/">Posts</Link>
            <Link href="/admin/posts/new/">New post</Link>
            <a href="/blog/" target="_blank" rel="noopener">
              View blog
            </a>
            <LogoutButton />
          </nav>
        </div>
      </header>
      <main className="adm-main">{children}</main>
    </>
  );
}
