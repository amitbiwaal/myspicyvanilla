import { guard } from '@/lib/auth';
import { PostError, deletePost, getPostById, savePost } from '@/lib/posts';
import { revalidateSite } from '@/lib/revalidate';
import { sanitizeContent } from '@/lib/sanitize';

type Context = { params: Promise<{ id: string }> };

function fail(err: unknown, action: string) {
  if (err instanceof PostError) return Response.json({ error: err.message }, { status: err.status });
  console.error(`[admin] ${action} post failed`, err);
  return Response.json({ error: `Could not ${action} the post.` }, { status: 500 });
}

export async function GET(request: Request, { params }: Context) {
  const denied = await guard(request);
  if (denied) return denied;
  const { id } = await params;
  const post = /^[a-z0-9]+$/.test(id) ? await getPostById(id) : undefined;
  if (!post) return Response.json({ error: 'Post not found' }, { status: 404 });
  return Response.json({ post });
}

export async function PUT(request: Request, { params }: Context) {
  const denied = await guard(request);
  if (denied) return denied;

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== 'object') {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  try {
    const { id } = await params;
    const before = await getPostById(id);
    const post = await savePost({ ...body, content: sanitizeContent(String(body.content ?? '')) }, id);
    // Refresh the public site when the post is live now, or was live before this save (unpublishing).
    if (post.status === 'published' || before?.status === 'published') revalidateSite();
    return Response.json({ post });
  } catch (err) {
    return fail(err, 'save');
  }
}

export async function DELETE(request: Request, { params }: Context) {
  const denied = await guard(request);
  if (denied) return denied;
  try {
    const { id } = await params;
    const removed = await deletePost(id);
    if (removed.status === 'published') revalidateSite();
    return Response.json({ ok: true });
  } catch (err) {
    return fail(err, 'delete');
  }
}
