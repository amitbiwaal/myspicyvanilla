'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LocalTime from './LocalTime';
import type { Post } from '@/lib/post-types';

export default function PostsTable({ posts }: { posts: Post[] }) {
  const router = useRouter();
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState('');

  async function remove(post: Post) {
    if (!window.confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    setBusy(post.id);
    setError('');
    try {
      const res = await fetch(`/api/admin/posts/${post.id}/`, { method: 'DELETE' });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Could not delete the post.');
      }
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not delete the post.');
    } finally {
      setBusy(null);
    }
  }

  return (
    <>
      {error ? (
        <div className="adm-msg err" role="alert">
          {error}
        </div>
      ) : null}
      <table className="adm-table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Category</th>
            <th scope="col">Last edited</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="t">
                <Link href={`/admin/posts/${post.id}/`}>{post.title}</Link>
                <small>/blog/{post.slug}/</small>
              </td>
              <td>
                <span className={`adm-badge ${post.status}`}>{post.status}</span>
              </td>
              <td>{post.category}</td>
              <td>
                <LocalTime iso={post.updatedAt} dateOnly />
              </td>
              <td>
                <div className="adm-actions">
                  <Link className="adm-btn small" href={`/admin/posts/${post.id}/`}>
                    Edit
                  </Link>
                  <a
                    className="adm-btn small"
                    href={post.status === 'published' ? `/blog/${post.slug}/` : `/preview/${post.id}/`}
                    target="_blank"
                    rel="noopener"
                  >
                    {post.status === 'published' ? 'View' : 'Preview'}
                  </a>
                  <button
                    type="button"
                    className="adm-btn small danger"
                    disabled={busy === post.id}
                    onClick={() => remove(post)}
                  >
                    {busy === post.id ? 'Deleting…' : 'Delete'}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
