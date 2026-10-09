import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import ArticleView from '../../../components/ArticleView';
import { isAuthed } from '@/lib/auth';
import { getPostById } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Preview',
  robots: { index: false, follow: false },
};

// Never cached: it depends on who is signed in and always shows the latest saved version.
export const dynamic = 'force-dynamic';

/** Signed-in preview of any post, including drafts, exactly as it will look on the blog. */
export default async function PreviewPage({ params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthed())) redirect('/admin/login/');

  const { id } = await params;
  const post = /^[a-z0-9]+$/.test(id) ? await getPostById(id) : undefined;
  if (!post) notFound();

  return <ArticleView post={post} related={[]} preview />;
}
