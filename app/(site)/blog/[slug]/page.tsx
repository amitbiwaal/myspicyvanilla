import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleView from '../../../components/ArticleView';
import {
  getPostBySlug,
  getPublishedPosts,
  getRelatedPosts,
  getSeoDescription,
  getSeoTitle,
} from '@/lib/posts';
import { pageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

// Prerendered and cached. Saving a post in the admin refreshes it at once (lib/revalidate.ts);
// the hourly refresh is only a safety net.
export const revalidate = 3600;

export async function generateStaticParams() {
  return (await getPublishedPosts()).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Article not found', robots: { index: false, follow: true } };

  const image = post.ogImage
    ? { url: post.ogImage, width: 1200, height: 630 }
    : post.coverImage
      ? { url: post.coverImage, width: post.coverWidth, height: post.coverHeight }
      : undefined;

  return pageMetadata({
    title: getSeoTitle(post),
    absoluteTitle: Boolean(post.seoTitle),
    description: getSeoDescription(post),
    path: `/blog/${post.slug}/`,
    image,
    type: 'article',
    publishedTime: post.publishedAt ?? undefined,
    modifiedTime: post.updatedAt,
    authors: [post.author],
    tags: post.tags,
    noindex: post.noindex,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return <ArticleView post={post} related={await getRelatedPosts(post, 3)} />;
}
