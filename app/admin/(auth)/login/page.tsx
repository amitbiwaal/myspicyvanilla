import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import LoginForm from '../../_components/LoginForm';
import { adminConfigured, isAuthed } from '@/lib/auth';

export const metadata: Metadata = { title: 'Sign in' };
export const dynamic = 'force-dynamic';

export default async function AdminLoginPage() {
  if (await isAuthed()) redirect('/admin/');

  return (
    <main className="adm-login">
      <div className="box">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.png" alt="My Spicy Vanilla" width={154} height={42} />
        <h1>Blog admin</h1>
        <p>Sign in to write and publish articles.</p>
        <LoginForm configured={adminConfigured()} />
      </div>
    </main>
  );
}
