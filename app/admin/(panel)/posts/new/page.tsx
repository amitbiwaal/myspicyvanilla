import type { Metadata } from 'next';
import PostEditor from '../../../_components/PostEditor';
import { readAllPosts } from '@/lib/posts';
import { SITE } from '@/lib/site';

export const metadata: Metadata = { title: 'New post' };
export const dynamic = 'force-dynamic';

export default async function NewPostPage() {
  const categories = Array.from(new Set((await readAllPosts()).map((p) => p.category))).sort();
  return <PostEditor categories={categories} defaultAuthor={SITE.defaultAuthor} />;
}
