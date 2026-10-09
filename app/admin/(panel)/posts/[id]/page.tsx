import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PostEditor from '../../../_components/PostEditor';
import { getPostById, readAllPosts } from '@/lib/posts';
import { SITE } from '@/lib/site';

export const metadata: Metadata = { title: 'Edit post' };
export const dynamic = 'force-dynamic';

export default async function EditPostPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ saved?: string }>;
}) {
  const { id } = await params;
  const { saved } = await searchParams;
  const post = /^[a-z0-9]+$/.test(id) ? await getPostById(id) : undefined;
  if (!post) notFound();

  const categories = Array.from(new Set((await readAllPosts()).map((p) => p.category))).sort();
  // `key` remounts the editor when moving between posts so no state leaks across them.
  return (
    <PostEditor
      key={post.id}
      post={post}
      categories={categories}
      defaultAuthor={SITE.defaultAuthor}
      flash={saved}
    />
  );
}
