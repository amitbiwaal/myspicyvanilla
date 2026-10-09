import { revalidatePath } from 'next/cache';

/**
 * Public pages are prerendered and cached. After a post is created, edited or deleted,
 * regenerate everything that can show it. The site is small, so the whole page tree is
 * refreshed (blog index, posts, categories, "keep reading" lists), plus the generated feed
 * and llms.txt. (The sitemap is never cached, see app/sitemap.xml/route.ts.)
 */
export function revalidateSite(): void {
  revalidatePath('/', 'layout');
  revalidatePath('/feed.xml');
  revalidatePath('/llms.txt');
}
