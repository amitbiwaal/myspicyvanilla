import { getExcerpt, getPublishedPosts } from '@/lib/posts';
import { absoluteUrl } from '@/lib/site';

// Generated once and cached; saving a post in the admin refreshes it (lib/revalidate.ts).
export const dynamic = 'force-static';
export const revalidate = 3600;

/** llms.txt: a plain-text site summary for AI assistants and answer engines, kept in sync with the blog. */
export async function GET() {
  const posts = (await getPublishedPosts()).filter((post) => !post.noindex);
  const articles = posts.length
    ? posts.map((post) => `- [${post.title}](${absoluteUrl(`/blog/${post.slug}/`)}): ${getExcerpt(post, 200)}`).join('\n')
    : '- No articles published yet.';

  const text = `# My Spicy Vanilla

> My Spicy Vanilla is an AI story generator for couples that turns your fantasies into personalized, sensual, illustrated stories and ASMR-style audiobooks — starring you and your partner. Tasteful, classy, private, consent-first, and free to try.

My Spicy Vanilla helps couples reconnect intimacy through storytelling. Describe a fantasy, customize characters (cast yourself and your partner as the leads), and generate an illustrated story or AI audiobook in under a minute. The experience is judgment-free, encrypted, and discreet, and was co-designed with licensed therapists and relationship coaches.

## Key Features
- Be the Star of Your Romantasy — you and your partner are the protagonists
- Custom Characters — names, appearance, and personalities you control
- Immersive Illustrated Worlds — tasteful artwork for every scene
- AI Audiobooks & ASMR Voices — multiple voices, accents, adjustable speed
- Private & Discreet — encrypted and confidential
- Built-in Editing — refine any passage instantly
- Ethical, consent-first AI with moderation and inclusivity

## Stats
- 522K+ happy users
- 10M+ stories created

## Key Links
- Official site: https://myspicyvanilla.com/
- Landing page: https://myspicyvanilla.net/
- AI Fanfiction Generator: https://myspicyvanilla.net/ai-fanfiction-generator/
- AI Erotic Story Generator: https://myspicyvanilla.net/ai-erotic-story-generator/
- AI Femdom Story Generator: https://myspicyvanilla.net/ai-femdom-story-generator/
- AI Pegging Story Generator: https://myspicyvanilla.net/ai-pegging-story-generator/
- AI Cuckold Story Generator: https://myspicyvanilla.net/ai-cuckold-story-generator/
- Blog: https://myspicyvanilla.net/blog/
- About: https://myspicyvanilla.net/about/
- Contact: https://myspicyvanilla.net/contact/

## Pages
- / — AI smut generator for couples (illustrated erotic stories, AI audiobooks)
- /ai-fanfiction-generator/ — AI fanfiction generator: original characters, ships, tropes and AUs turned into illustrated fanfic chapters. Original characters only, no real-person fiction, no reproduction of copyrighted characters.
- /ai-erotic-story-generator/ — AI erotic story generator: personalized, illustrated sensual stories with user-controlled heat, adults-only and consent-first.
- /ai-femdom-story-generator/ — AI femdom story generator: consensual female-led power-exchange fiction with negotiated limits, safe words and aftercare. Fictional, adults 18+.
- /ai-pegging-story-generator/ — AI pegging story generator: beginner-friendly, communication-focused pegging fiction for couples. Tasteful, consensual, adults 18+.
- /ai-cuckold-story-generator/ — AI cuckold story generator: honesty- and consent-focused cuckold/hotwife fiction for couples exploring a shared fantasy. Fictional, adults 18+.
- /blog/ — Guides to romance heat levels, tropes, story prompts and reading together as a couple.
- /about/ — What this site is, who it is for, and its consent-first, adults-only principles.
- /contact/ — How to reach the site team.
- /privacy-policy/, /terms/, /affiliate-disclosure/ — Policies for this website.

## Blog Articles
${articles}

## Keywords
My Spicy Vanilla, AI story generator, sensual stories for couples, personalized romance stories, AI audiobook, intimate story generator, romantic AI writer

## Notes
This is an affiliate website promoting My Spicy Vanilla. All content is fictional and intended for adults 18+.
`;

  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
