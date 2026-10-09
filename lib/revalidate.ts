import { revalidatePath } from 'next/cache';

/**
 * Public pages are prerendered and cached. After a post is created, edited or deleted,
 * regenerate everything that can show it. The site is small, so the whole page tree is
 * refreshed (blog index, posts, categories, "keep reading" lists), plus the three generated
 * files that list posts.
 */
export function revalidateSite(): void {
  revalidatePath('/', 'layout');
  revalidatePath('/sitemap.xml');
  revalidatePath('/feed.xml');
  revalidatePath('/llms.txt');
}
