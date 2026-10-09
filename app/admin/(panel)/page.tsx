import type { Metadata } from 'next';
import Link from 'next/link';
import PostsTable from '../_components/PostsTable';
import { getAllPostsForAdmin } from '@/lib/posts';

export const metadata: Metadata = { title: 'Posts' };
export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  const posts = await getAllPostsForAdmin();
  const published = posts.filter((p) => p.status === 'published').length;

  return (
    <>
      <div className="adm-head">
        <div>
          <h1>Blog posts</h1>
          <p className="adm-sub">Write, edit and publish articles for the blog.</p>
        </div>
        <Link className="adm-btn primary" href="/admin/posts/new/">
          + New post
        </Link>
      </div>

      <div className="adm-stats">
        <div className="adm-stat">
          <b>{posts.length}</b>
          <span>Total posts</span>
        </div>
        <div className="adm-stat">
          <b>{published}</b>
          <span>Published</span>
        </div>
        <div className="adm-stat">
          <b>{posts.length - published}</b>
          <span>Drafts</span>
        </div>
      </div>

      {posts.length ? (
        <PostsTable posts={posts} />
      ) : (
        <div className="adm-empty">
          <h2>No posts yet</h2>
          <p>Write your first article to start the blog.</p>
          <Link className="adm-btn primary" href="/admin/posts/new/">
            Write the first post
          </Link>
        </div>
      )}

      <div className="adm-card" style={{ marginTop: 18 }}>
        <h2>How publishing works</h2>
        <ol className="adm-steps">
          <li>
            <strong>Save draft</strong> keeps a post private. Use <strong>Preview</strong> to see how it will look.
          </li>
          <li>
            <strong>Publish</strong> puts it on the live blog straight away, and adds it to the sitemap and RSS feed.
          </li>
          <li>
            Edit a published post and press <strong>Update</strong> to change it on the live site.
          </li>
        </ol>
      </div>
    </>
  );
}
