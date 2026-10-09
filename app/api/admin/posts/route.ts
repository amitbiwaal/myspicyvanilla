import { guard } from '@/lib/auth';
import { PostError, getAllPostsForAdmin, savePost } from '@/lib/posts';
import { revalidateSite } from '@/lib/revalidate';
import { sanitizeContent } from '@/lib/sanitize';

export async function GET(request: Request) {
  const denied = await guard(request);
  if (denied) return denied;
  return Response.json({ posts: await getAllPostsForAdmin() });
}

export async function POST(request: Request) {
  const denied = await guard(request);
  if (denied) return denied;

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== 'object') {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  try {
    const post = await savePost({ ...body, content: sanitizeContent(String(body.content ?? '')) });
    if (post.status === 'published') revalidateSite();
    return Response.json({ post }, { status: 201 });
  } catch (err) {
    if (err instanceof PostError) return Response.json({ error: err.message }, { status: err.status });
    console.error('[admin] create post failed', err);
    return Response.json({ error: 'Could not save the post.' }, { status: 500 });
  }
}
