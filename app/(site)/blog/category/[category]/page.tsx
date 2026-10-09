import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import PostCard from '../../../../components/PostCard';
import { getCategories, getPostsByCategory } from '@/lib/posts';
import { pageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ category: string }> };

// Prerendered and cached; saving a post in the admin refreshes it at once (lib/revalidate.ts).
export const revalidate = 3600;

export async function generateStaticParams() {
  return (await getCategories()).map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = (await getCategories()).find((c) => c.slug === slug);
  if (!category) return { title: 'Category not found', robots: { index: false, follow: true } };
  return pageMetadata({
    title: `${category.name} Articles`,
    description: `Every ${category.name.toLowerCase()} article on the My Spicy Vanilla blog: practical, judgment-free reads for couples.`,
    path: `/blog/category/${category.slug}/`,
  });
}

export default async function BlogCategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const categories = await getCategories();
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();
  const posts = await getPostsByCategory(category.slug);

  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: 'Home', path: '/' },
              { name: 'Blog', path: '/blog/' },
              { name: category.name, path: `/blog/category/${category.slug}/` },
            ]}
          />
          <span className="eyebrow">Category</span>
          <h1>{category.name}</h1>
          <p className="lede">
            {posts.length} {posts.length === 1 ? 'article' : 'articles'} filed under {category.name}.
          </p>
        </div>
      </header>

      <section aria-label={`${category.name} articles`}>
        <div className="wrap">
          <nav className="chips" aria-label="Blog categories">
            <a className="chip" href="/blog/">
              All articles
            </a>
            {categories.map((c) => (
              <a
                className="chip"
                key={c.slug}
                href={`/blog/category/${c.slug}/`}
                aria-current={c.slug === category.slug ? 'page' : undefined}
              >
                {c.name} <span className="count">{c.count}</span>
              </a>
            ))}
          </nav>
          <div className="post-grid">
            {posts.map((post, i) => (
              <PostCard key={post.id} post={post} eager={i < 3} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
