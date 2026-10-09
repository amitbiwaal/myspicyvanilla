import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | My Spicy Vanilla',
  description: 'The page you were looking for does not exist or has moved.',
  robots: { index: false, follow: true },
};

/**
 * Site-wide 404 (exported as 404.html and served by the host's ErrorDocument rule).
 * Self-contained styles on purpose: every landing page ships its own global stylesheet,
 * so this page must not import one.
 */
const CSS = `
  .nf{min-height:100vh;margin:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;padding:40px 22px;text-align:center;background:radial-gradient(900px 420px at 80% -10%,#FCE7ED,transparent 60%),#F4F1EC;color:#2B2230;font-family:Poppins,system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;line-height:1.6;box-sizing:border-box}
  .nf *{box-sizing:border-box;margin:0}
  .nf img{height:52px;width:auto;max-width:100%}
  .nf .code{display:inline-block;background:#FCE7ED;color:#B23A6B;font-weight:600;font-size:.8rem;letter-spacing:.08em;text-transform:uppercase;padding:6px 15px;border-radius:999px;margin-top:10px}
  .nf h1{font-size:clamp(1.7rem,5vw,2.6rem);line-height:1.2;max-width:18ch}
  .nf p{color:#5A4F60;max-width:46ch}
  .nf .actions{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:6px}
  .nf .actions a{display:inline-flex;align-items:center;justify-content:center;font-weight:600;font-size:1rem;padding:14px 28px;border-radius:999px;text-decoration:none}
  .nf .primary{background:linear-gradient(135deg,#B23A6B,#C9527F 55%,#D4A437);color:#fff}
  .nf .ghost{background:#fff;color:#B23A6B;border:1.5px solid #F8C8D4}
  .nf nav{display:flex;flex-wrap:wrap;gap:8px 20px;justify-content:center;margin-top:14px;font-size:.92rem}
  .nf nav a{color:#B23A6B;text-decoration:none}
  .nf nav a:hover,.nf .ghost:hover{text-decoration:underline}
  .nf a:focus-visible{outline:3px solid #D4A437;outline-offset:3px}
  body:has(.nf){margin:0}
`;

export default function NotFound() {
  return (
    <main className="nf">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <a href="/" aria-label="My Spicy Vanilla home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.png" alt="My Spicy Vanilla" width={154} height={42} />
      </a>
      <span className="code">Error 404</span>
      <h1>This page has slipped away</h1>
      <p>The page you were looking for does not exist or has moved. Let&apos;s get you back to the story.</p>
      <div className="actions">
        <a className="primary" href="/">
          Back to Home
        </a>
        <a className="ghost" href="/blog/">
          Read the Blog
        </a>
      </div>
      <nav aria-label="Popular pages">
        <a href="/ai-fanfiction-generator/">AI Fanfiction Generator</a>
        <a href="/ai-erotic-story-generator/">AI Erotic Story Generator</a>
        <a href="/about/">About</a>
        <a href="/contact/">Contact</a>
      </nav>
    </main>
  );
}
