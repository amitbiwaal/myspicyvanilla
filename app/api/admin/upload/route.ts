import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { put } from '@vercel/blob';
import sharp from 'sharp';
import { guard } from '@/lib/auth';
import { slugify } from '@/lib/post-types';

const MAX_BYTES = 4 * 1024 * 1024; // Vercel functions accept request bodies up to about 4.5 MB
const ALLOWED = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif'];
const ONE_YEAR = 60 * 60 * 24 * 365;

/**
 * Store an image and return its public URL.
 * On Vercel it goes to the Blob store (BLOB_READ_WRITE_TOKEN is set by the Blob integration);
 * without that token (local development) it is written to public/uploads instead.
 */
async function store(name: string, data: Buffer, contentType: string): Promise<string> {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const blob = await put(`blog/${name}`, data, {
      access: 'public',
      contentType,
      // File names carry a content hash, so re-uploading the same image is a harmless overwrite.
      addRandomSuffix: false,
      allowOverwrite: true,
      cacheControlMaxAge: ONE_YEAR,
    });
    return blob.url;
  }
  if (process.env.VERCEL) {
    throw new Error('BLOB_READ_WRITE_TOKEN is not set. Connect a Blob store to this Vercel project.');
  }
  const dir = path.join(process.cwd(), 'public', 'uploads');
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, name), data);
  return `/uploads/${name}`;
}

/**
 * Image upload for the editor. Every image is auto-rotated, capped at 1600px wide and
 * converted to WebP so articles stay fast. Cover uploads also get a 1200x630 JPG for
 * social sharing (JPG is the format every platform accepts).
 */
export async function POST(request: Request) {
  const denied = await guard(request);
  if (denied) return denied;

  const form = await request.formData().catch(() => null);
  const file = form?.get('file');
  if (!(file instanceof File)) {
    return Response.json({ error: 'Choose an image to upload.' }, { status: 400 });
  }
  if (!ALLOWED.includes(file.type)) {
    return Response.json({ error: 'Please upload a JPG, PNG, WebP, GIF or AVIF image.' }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return Response.json({ error: 'That image is larger than 4 MB. Please use a smaller one.' }, { status: 413 });
  }

  let image: { data: Buffer; width: number; height: number };
  let social: Buffer | null = null;
  const input = Buffer.from(await file.arrayBuffer());
  try {
    const { data, info } = await sharp(input)
      .rotate()
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toBuffer({ resolveWithObject: true });
    image = { data, width: info.width, height: info.height };
    if (form?.get('kind') === 'cover') {
      social = await sharp(input)
        .rotate()
        .resize(1200, 630, { fit: 'cover', position: 'attention' })
        .jpeg({ quality: 84, mozjpeg: true })
        .toBuffer();
    }
  } catch {
    return Response.json({ error: 'That file could not be read as an image.' }, { status: 400 });
  }

  try {
    const base = slugify(file.name.replace(/\.[^.]+$/, '')) || 'image';
    const hash = crypto.createHash('sha1').update(input).digest('hex').slice(0, 8);
    const url = await store(`${base}-${hash}.webp`, image.data, 'image/webp');
    const ogImage = social ? await store(`${base}-${hash}-og.jpg`, social, 'image/jpeg') : '';
    return Response.json({ url, width: image.width, height: image.height, ogImage });
  } catch (err) {
    console.error('[admin] upload failed', err);
    return Response.json({ error: 'The image could not be saved. Please try again.' }, { status: 500 });
  }
}
