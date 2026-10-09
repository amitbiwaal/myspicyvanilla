import type { Metadata, Viewport } from 'next';
import SiteNav from '../components/SiteNav';
import FooterSiteLinks from '../components/FooterSiteLinks';
import FooterYear from '../components/FooterYear';
import RevealOnScroll from '../components/RevealOnScroll';
import StatCounters from '../components/StatCounters';
import './pegging.css';

export const metadata: Metadata = {
  title: 'AI Pegging Story Generator | My Spicy Vanilla',
  description:
    'Create private, beginner-friendly AI pegging stories for couples. Consent-first, tasteful fiction where you set the pace and heat. Free to start, 18+.',
  keywords:
    'AI pegging story generator, pegging stories, pegging fiction AI, beginner pegging stories, strap-on romance fiction, couples pegging stories, pegging story writer',
  authors: [{ name: 'My Spicy Vanilla' }],
  alternates: { canonical: 'https://myspicyvanilla.net/ai-pegging-story-generator/' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  icons: {
    icon: [
      { url: '/images/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/images/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    title: 'AI Pegging Story Generator | My Spicy Vanilla',
    description:
      'A warm, beginner-friendly AI writer for consensual pegging fiction. Set the pace, keep it private, and let communication and comfort lead. Free to start, 18+.',
    url: 'https://myspicyvanilla.net/ai-pegging-story-generator/',
    siteName: 'My Spicy Vanilla',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://myspicyvanilla.net/images/og-share.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Pegging Story Generator | My Spicy Vanilla',
    description:
      'Gentle, consent-first AI pegging stories for couples. You control the intensity, it stays private, and every character is a fictional adult 18+.',
    images: ['https://myspicyvanilla.net/images/og-share.jpg'],
  },
  other: {
    rating: 'adult',
    'msapplication-TileColor': '#B23A6B',
  },
};

export const viewport: Viewport = { themeColor: '#F4F1EC' };

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'My Spicy Vanilla',
    url: 'https://myspicyvanilla.net/',
    logo: 'https://myspicyvanilla.net/images/logo.png',
    description:
      'My Spicy Vanilla is an adults-only AI story generator for tasteful, consent-first romantic fiction. All characters are fictional and 18+.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AI Pegging Story Generator | My Spicy Vanilla',
    applicationCategory: 'EntertainmentApplication',
    operatingSystem: 'Web',
    url: 'https://myspicyvanilla.net/ai-pegging-story-generator/',
    description:
      'A beginner-friendly AI generator for consensual, tasteful pegging fiction. Couples and solo readers set the pace, comfort, and heat, and every story stays private. Adults only, 18+.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '1840' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://myspicyvanilla.net/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'AI Pegging Story Generator',
        item: 'https://myspicyvanilla.net/ai-pegging-story-generator/',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an AI pegging story generator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is a tool that turns your prompt into a complete, tasteful pegging story. You describe the characters, the mood, and how much heat you want, and the AI writes a private scene for you. My Spicy Vanilla is built for adults 18+, keeps every character fictional, and puts you in control of the pace.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need any experience to use it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not at all. The generator is designed for first-timers as much as experienced readers. You can start with a gentle, communication-led story where the characters talk everything through, then adjust the intensity whenever you feel ready. There is no right or wrong way to begin.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can my partner and I use it together?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Many couples use it as a low-pressure way to explore a fantasy and start a conversation. You can shape the characters and dynamic together, read the story side by side, and use it as a gentle prompt to talk about what does and does not appeal to you.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I control how explicit the story gets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You set a heat level before you generate and can change it at any time. Keep it sweet and suggestive with the focus on emotion and communication, or turn it up. You are always in charge, and you can regenerate or edit any scene until it feels right.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it private?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Your stories are private by default and visible only to you unless you choose to share them. Nothing is posted to a public feed. Discretion is part of the design, so you can explore comfortably.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are the characters real people?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Every character is fictional, original, and a consenting adult over 18. My Spicy Vanilla does not write about real individuals or public figures. The stories are imaginative fiction built around the dynamic and mood you choose.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is consent part of the stories?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Always. Enthusiastic, fictional consent runs through every story. The generator leans into communication, checking in, and characters who clearly choose each other. The appeal comes from trust and chemistry, never from pressure.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is My Spicy Vanilla free to try?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. You can start for free with no payment required. Optional upgrades add longer stories and extra features when you want them, but you can read your first story before deciding anything.',
        },
      },
    ],
  },
];

export default function PeggingPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
      />

      {jsonLd.map((o, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(o) }}
        />
      ))}

      {/* Icon sprite */}
      <svg
        className="hidden-sprite"
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
      >
        <symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </symbol>
        <symbol id="i-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </symbol>
        <symbol id="i-heart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.8 5.6a5.4 5.4 0 0 0-7.7 0L12 6.7l-1.1-1.1a5.4 5.4 0 1 0-7.7 7.6l1.1 1.1L12 21l7.7-7.7 1.1-1.1a5.4 5.4 0 0 0 0-7.6z" />
        </symbol>
        <symbol id="i-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="10" width="16" height="10" rx="2.4" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </symbol>
        <symbol id="i-chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 4H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h4v4l5-4h7a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
        </symbol>
        <symbol id="i-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2 4 5v6c0 5 3.5 8.6 8 11 4.5-2.4 8-6 8-11V5l-8-3z" />
          <polyline points="9 12 11 14 15 10" />
        </symbol>
        <symbol id="i-spark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" />
        </symbol>
        <symbol id="i-slider" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="4" y1="16" x2="20" y2="16" />
          <circle cx="9" cy="8" r="2.6" />
          <circle cx="15" cy="16" r="2.6" />
        </symbol>
        <symbol id="i-users" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="8" r="3.1" />
          <path d="M3.5 20c0-3.2 2.5-5.6 5.5-5.6s5.5 2.4 5.5 5.6" />
          <path d="M16 5.2a3.1 3.1 0 0 1 0 5.9" />
          <path d="M17.3 14.7c2.2.7 3.7 2.8 3.7 5.3" />
        </symbol>
        <symbol id="i-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 7 12 12 16 14" />
        </symbol>
        <symbol id="i-edit" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20h4L18.5 9.5l-4-4L4 16v4z" />
          <path d="M13.5 6.5l4 4" />
        </symbol>
        <symbol id="i-leaf" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20c0-8 6-14 16-14 0 10-6 16-16 14z" />
          <path d="M4 20c4-6 8-8.5 12-9.5" />
        </symbol>
        <symbol id="i-book" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v14H6.5A2.5 2.5 0 0 0 4 19.5z" />
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H19v4H6.5A2.5 2.5 0 0 1 4 19.5z" />
        </symbol>
        <symbol id="i-heart-hands" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21s-6.5-4-9-8" />
          <path d="M3 13a3.4 3.4 0 0 1 5.2-4.3L12 12l3.8-3.3A3.4 3.4 0 0 1 21 13" />
          <path d="M21 13c-2.5 4-9 8-9 8" />
        </symbol>
      </svg>

      <SiteNav current="pegging" />

      <main id="top">
        {/* ============ 1 · HERO ============ */}
        <section className="sect hero" aria-labelledby="hero-title">
          <span className="blob blob-a" aria-hidden="true" />
          <div className="wrap hero-grid">
            <div className="reveal">
              <span className="eyebrow">
                <svg aria-hidden="true"><use href="#i-leaf" /></svg>
                My Spicy Vanilla · Gentle by design
              </span>
              <h1 id="hero-title">
                The friendly <em>AI pegging story generator</em> for couples and the curious
              </h1>
              <p className="lede">
                Explore a consensual pegging fantasy at your own pace. Describe the mood, set the heat,
                and read a private, tasteful story where communication and comfort always come first.
              </p>
              <div className="hero-actions">
                <button type="button" className="btn btn-primary btn-lg">
                  Start My Story Free
                </button>
                <a className="btn btn-ghost" href="#how">See how it works</a>
              </div>
              <div className="trust">
                <span><svg aria-hidden="true"><use href="#i-users" /></svg> Loved by 522K+ readers</span>
                <span><svg aria-hidden="true"><use href="#i-lock" /></svg> Private by default</span>
                <span><svg aria-hidden="true"><use href="#i-heart-hands" /></svg> Consent-first, 18+</span>
              </div>
            </div>

            <div className="reveal">
              <article className="preview" aria-label="Example of a generated story">
                <div className="preview-bar">
                  <span className="preview-dots"><i /><i /><i /></span>
                  <span className="preview-app">My Spicy Vanilla · new story</span>
                </div>
                <div className="preview-chips">
                  <span className="mini-chip">Heat · Gentle</span>
                  <span className="mini-chip">Pace · Slow</span>
                  <span className="mini-chip">Tone · Loving</span>
                  <span className="mini-chip">First time</span>
                </div>
                <h2 className="preview-title">The Night We Finally Talked About It</h2>
                <p className="preview-body">
                  Mara set two mugs on the counter and finally said the thing she had been circling all
                  week. <b>“I want to try leading tonight,”</b> she said softly. <b>“Slowly, and only if
                  you are into it.”</b> Devin exhaled, smiled, and reached for her hand.
                </p>
                <p className="preview-body">
                  They talked it through first, the way they always did, deciding on a word to pause and a
                  promise to check in. The rest of the evening moved at exactly the speed they both wanted.
                </p>
                <div className="preview-heat">
                  <span>Heat level — you decide, scene by scene</span>
                  <div className="heat-bar" aria-hidden="true" />
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ============ 2 · FIRST-TIME callout ============ */}
        <section className="sect sect-tight first-time" aria-labelledby="ft-title">
          <div className="wrap">
            <div className="ft-panel reveal">
              <div className="ft-badge" aria-hidden="true">
                <svg><use href="#i-leaf" /></svg>
              </div>
              <div>
                <h3 id="ft-title">New to this? You are in exactly the right place.</h3>
                <p>
                  There is no experience required and nothing to prove. Start with a soft, talk-it-through
                  story, keep the heat low, and turn things up only if and when you feel ready. Every step
                  is optional, private, and entirely at your pace.
                </p>
              </div>
              <button type="button" className="btn btn-primary">
                Begin gently
              </button>
            </div>
          </div>
        </section>

        {/* ============ 3 · STEPPER (how it works) ============ */}
        <section className="sect" id="how" aria-labelledby="how-title">
          <div className="wrap">
            <div className="sect-head">
              <span className="eyebrow"><svg aria-hidden="true"><use href="#i-spark" /></svg> How it works</span>
              <h2 id="how-title">Four gentle steps to your story</h2>
              <p>No blank page and no pressure. You bring the mood, the generator does the writing, and you
                stay in control from the first line to the last.</p>
            </div>
            <ol className="stepper g-stagger">
              <li className="step reveal">
                <span className="step-num" aria-hidden="true">1</span>
                <h3>Set the scene</h3>
                <p>Choose an everyday setting and the vibe you want, from cozy and reassuring to playful
                  and confident. A quiet evening at home is a lovely place to start.</p>
              </li>
              <li className="step reveal">
                <span className="step-num" aria-hidden="true">2</span>
                <h3>Shape the couple</h3>
                <p>Sketch two fictional adults and the dynamic between them. Decide who leads, who follows,
                  and how much tenderness or teasing you want in the mix.</p>
              </li>
              <li className="step reveal">
                <span className="step-num" aria-hidden="true">3</span>
                <h3>Choose your heat</h3>
                <p>Pick a comfort level on the slider. Keep it sweet and suggestive, or dial it up. You can
                  change your mind at any moment, mid-story included.</p>
              </li>
              <li className="step reveal">
                <span className="step-num" aria-hidden="true">4</span>
                <h3>Read and refine</h3>
                <p>Your private story arrives in seconds. Love a moment and keep it, or ask for a softer,
                  slower, or spicier take until it feels just right.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* ============ 4 · FEATURES ============ */}
        <section className="sect" id="features" aria-labelledby="feat-title">
          <div className="wrap">
            <div className="sect-head">
              <span className="eyebrow"><svg aria-hidden="true"><use href="#i-heart" /></svg> What&apos;s inside</span>
              <h2 id="feat-title">Everything a comfortable first story needs</h2>
              <p>Thoughtful features that keep the experience warm, reassuring, and completely yours.</p>
            </div>
            <div className="cards g-stagger">
              <article className="card reveal">
                <span className="ic" aria-hidden="true"><svg><use href="#i-slider" /></svg></span>
                <h3>Heat you control</h3>
                <p>A simple slider sets the intensity, from tender and suggestive to bolder. Move it any
                  time, scene by scene, so the story always matches your mood.</p>
              </article>
              <article className="card reveal">
                <span className="ic" aria-hidden="true"><svg><use href="#i-chat" /></svg></span>
                <h3>Communication built in</h3>
                <p>Stories model the good stuff, checking in, asking first, and pausing when someone wants
                  to. Consent is woven into the fantasy, not an afterthought.</p>
              </article>
              <article className="card reveal">
                <span className="ic" aria-hidden="true"><svg><use href="#i-leaf" /></svg></span>
                <h3>Beginner-friendly pacing</h3>
                <p>Choose a slow, reassuring build that lingers on trust and anticipation. Perfect for a
                  first read, and just as lovely once you have found your footing.</p>
              </article>
              <article className="card reveal">
                <span className="ic" aria-hidden="true"><svg><use href="#i-users" /></svg></span>
                <h3>Made for couples</h3>
                <p>Build the characters together and read side by side. It is a low-pressure way to open a
                  conversation about a shared curiosity.</p>
              </article>
              <article className="card reveal">
                <span className="ic" aria-hidden="true"><svg><use href="#i-lock" /></svg></span>
                <h3>Private by default</h3>
                <p>Your stories are yours alone. Nothing is public unless you choose to share it, so you
                  can explore freely and discreetly.</p>
              </article>
              <article className="card reveal">
                <span className="ic" aria-hidden="true"><svg><use href="#i-edit" /></svg></span>
                <h3>Edit any moment</h3>
                <p>Soften a line, slow a scene, or ask for a fresh take. Rewrite and regenerate until the
                  story reads exactly the way you hoped.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ============ 5 · INTENSITY / PACE control ============ */}
        <section className="sect" id="pace" aria-labelledby="pace-title">
          <div className="wrap pace-wrap">
            <div className="pace-panel reveal">
              <span className="preview-app" style={{ display: 'block', marginBottom: '6px' }}>Comfort slider</span>
              <div className="pace-scale">
                <span className="pace-knob" aria-hidden="true" />
              </div>
              <div className="pace-stops">
                <span className="pace-stop"><b>Sweet</b><small>tender &amp; suggestive</small></span>
                <span className="pace-stop"><b>Warm</b><small>confident &amp; playful</small></span>
                <span className="pace-stop"><b>Spicy</b><small>bolder, still tasteful</small></span>
              </div>
              <p className="pace-note">
                <svg aria-hidden="true"><use href="#i-shield" /></svg>
                You can slide the heat up or down at any point. Nothing escalates unless you choose it.
              </p>
            </div>
            <div className="pace-copy reveal">
              <span className="eyebrow"><svg aria-hidden="true"><use href="#i-slider" /></svg> You set the pace</span>
              <h2 id="pace-title">Your comfort is the only speed limit</h2>
              <p>
                Some evenings you want a slow, affectionate build that spends most of its time on trust and
                anticipation. Other times you want something more confident. The comfort slider makes both
                easy, and it is always yours to move.
              </p>
              <p>
                Because the story reacts to your settings, there are no surprises. You decide how far things
                go, how explicit the language gets, and when to pause, cool things down, or start again.
                Going slow is not a lesser option here, it is a first-class one.
              </p>
            </div>
          </div>
        </section>

        {/* ============ 6 · COMFORT CHECKLIST ============ */}
        <section className="sect" id="comfort" aria-labelledby="comfort-title">
          <div className="wrap">
            <div className="sect-head">
              <span className="eyebrow"><svg aria-hidden="true"><use href="#i-check" /></svg> Comfort &amp; communication</span>
              <h2 id="comfort-title">A gentle checklist for exploring together</h2>
              <p>Great fiction and great real-life communication share the same roots. These are the ideas
                our stories lean into, and small reminders worth carrying with you.</p>
            </div>
            <div className="checklist g-stagger">
              <div className="check-item reveal">
                <span className="tick" aria-hidden="true"><svg><use href="#i-check" /></svg></span>
                <div><h3>Talk first, then explore</h3><p>A short, honest chat about curiosity and limits makes everything that follows feel safer and more fun.</p></div>
              </div>
              <div className="check-item reveal">
                <span className="tick" aria-hidden="true"><svg><use href="#i-check" /></svg></span>
                <div><h3>Agree on a pause word</h3><p>A simple word to slow down or stop keeps both people relaxed and in control the whole way through.</p></div>
              </div>
              <div className="check-item reveal">
                <span className="tick" aria-hidden="true"><svg><use href="#i-check" /></svg></span>
                <div><h3>Start slow, no rush</h3><p>Anticipation is half the pleasure. There is no timeline, and going gently is always a valid choice.</p></div>
              </div>
              <div className="check-item reveal">
                <span className="tick" aria-hidden="true"><svg><use href="#i-check" /></svg></span>
                <div><h3>Check in often</h3><p>A quick “still good?” keeps everyone connected. The best stories model exactly this kind of care.</p></div>
              </div>
              <div className="check-item reveal">
                <span className="tick" aria-hidden="true"><svg><use href="#i-check" /></svg></span>
                <div><h3>Comfort and aftercare</h3><p>Winding down together, with warmth and reassurance, matters just as much as anything else.</p></div>
              </div>
              <div className="check-item reveal">
                <span className="tick" aria-hidden="true"><svg><use href="#i-check" /></svg></span>
                <div><h3>Enthusiasm, both ways</h3><p>A yes from both people is what makes it click. Every story is built on characters who clearly want to be there.</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 7 · MYTH vs REALITY ============ */}
        <section className="sect" id="myths" aria-labelledby="myth-title">
          <div className="wrap">
            <div className="sect-head">
              <span className="eyebrow"><svg aria-hidden="true"><use href="#i-heart" /></svg> Myth vs reality</span>
              <h2 id="myth-title">Clearing up a few common ideas</h2>
              <p>Pegging is simply one more way couples play, explore, and connect. A little clarity makes
                it far less intimidating and a lot more inviting.</p>
            </div>
            <div className="mvr g-stagger">
              <div className="mvr-card myth reveal">
                <span className="tag"><svg aria-hidden="true"><use href="#i-x" /></svg> Myth</span>
                <p>It is only about one thing and there is a &ldquo;right&rdquo; way to do it.</p>
              </div>
              <div className="mvr-card real reveal">
                <span className="tag"><svg aria-hidden="true"><use href="#i-check" /></svg> Reality</span>
                <p>It is about connection, trust, and play. The only right way is the one you and your partner both enjoy.</p>
              </div>

              <div className="mvr-card myth reveal">
                <span className="tag"><svg aria-hidden="true"><use href="#i-x" /></svg> Myth</span>
                <p>You need to be experienced before you can even think about it.</p>
              </div>
              <div className="mvr-card real reveal">
                <span className="tag"><svg aria-hidden="true"><use href="#i-check" /></svg> Reality</span>
                <p>Everyone starts somewhere. Curiosity is enough, and a gentle, talk-it-through first story is a perfect on-ramp.</p>
              </div>

              <div className="mvr-card myth reveal">
                <span className="tag"><svg aria-hidden="true"><use href="#i-x" /></svg> Myth</span>
                <p>Exploring this says something fixed about who you are.</p>
              </div>
              <div className="mvr-card real reveal">
                <span className="tag"><svg aria-hidden="true"><use href="#i-check" /></svg> Reality</span>
                <p>A fantasy is just a fantasy. Enjoying a story is about pleasure and imagination, nothing more.</p>
              </div>

              <div className="mvr-card myth reveal">
                <span className="tag"><svg aria-hidden="true"><use href="#i-x" /></svg> Myth</span>
                <p>It has to be intense to be worthwhile.</p>
              </div>
              <div className="mvr-card real reveal">
                <span className="tag"><svg aria-hidden="true"><use href="#i-check" /></svg> Reality</span>
                <p>Sweet and suggestive is every bit as satisfying as bold. You choose the intensity that feels good.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 8 · SCENARIOS chips ============ */}
        <section className="sect" id="scenarios" aria-labelledby="scen-title">
          <div className="wrap">
            <div className="sect-head">
              <span className="eyebrow"><svg aria-hidden="true"><use href="#i-book" /></svg> Story starters</span>
              <h2 id="scen-title">Gentle scenarios to begin with</h2>
              <p>Not sure where to start? Tap into any of these warm, beginner-friendly setups, then make it
                your own. Every scenario stars fictional adults 18+.</p>
            </div>
            <div className="chips g-stagger reveal">
              <span className="chip hot">The first honest conversation</span>
              <span className="chip">A slow, cozy evening in</span>
              <span className="chip">Swapping who leads</span>
              <span className="chip">Long-distance reunion</span>
              <span className="chip">Playful and teasing</span>
              <span className="chip">Anniversary surprise</span>
              <span className="chip hot">Reassuring and tender</span>
              <span className="chip">Confident and in charge</span>
              <span className="chip">Trying something new together</span>
              <span className="chip">Quiet morning after</span>
              <span className="chip">Building trust step by step</span>
              <span className="chip">A weekend away</span>
            </div>
          </div>
        </section>

        {/* ============ 9 · WHO IT'S FOR ============ */}
        <section className="sect" id="who" aria-labelledby="who-title">
          <div className="wrap">
            <div className="sect-head">
              <span className="eyebrow"><svg aria-hidden="true"><use href="#i-users" /></svg> Who it&apos;s for</span>
              <h2 id="who-title">Made for however you like to explore</h2>
              <p>Whether you are reading solo or side by side, the generator meets you where you are.</p>
            </div>
            <div className="cards g-stagger">
              <article className="card reveal">
                <span className="ic" aria-hidden="true"><svg><use href="#i-users" /></svg></span>
                <h3>Couples opening a door</h3>
                <p>Use a shared story as a warm, low-pressure way to raise a curiosity and talk about what
                  appeals to each of you, before anything else.</p>
              </article>
              <article className="card reveal">
                <span className="ic" aria-hidden="true"><svg><use href="#i-leaf" /></svg></span>
                <h3>Curious first-timers</h3>
                <p>Read at your own speed with the heat kept gentle. Learn what draws you in with zero
                  pressure and complete privacy.</p>
              </article>
              <article className="card reveal">
                <span className="ic" aria-hidden="true"><svg><use href="#i-spark" /></svg></span>
                <h3>Experienced readers</h3>
                <p>Already know what you like? Dial the intensity up, direct the dynamic, and get fresh,
                  tasteful stories tuned exactly to your taste.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ============ 10 · STATS band ============ */}
        <section className="sect" id="stats" aria-labelledby="stats-title">
          <div className="wrap">
            <div className="stats-band reveal">
              <h2 id="stats-title">A community that started right where you are</h2>
              <p className="sb-lede">Readers and couples who wanted a warmer, more private way to explore a
                shared curiosity, one gentle story at a time.</p>
              <div className="stats-grid">
                <div className="stat"><span className="n" data-count="522" data-suffix="K+">522K+</span><span className="l">readers and couples</span></div>
                <div className="stat"><span className="n" data-count="10" data-suffix="M+">10M+</span><span className="l">private stories created</span></div>
                <div className="stat"><span className="n" data-count="4.9" data-suffix="/5">4.9/5</span><span className="l">average comfort rating</span></div>
                <div className="stat"><span className="n" data-count="100" data-suffix="%">100%</span><span className="l">consent-first &amp; 18+</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 11 · TESTIMONIALS ============ */}
        <section className="sect" id="voices" aria-labelledby="voices-title">
          <div className="wrap">
            <div className="sect-head">
              <span className="eyebrow"><svg aria-hidden="true"><use href="#i-heart" /></svg> In their words</span>
              <h2 id="voices-title">Gentle beginnings, happy readers</h2>
              <p>Real notes from people who wanted a kinder, more private way to explore a fantasy.</p>
            </div>
            <div className="quotes g-stagger">
              <article className="quote reveal">
                <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                <p>We had been curious but never knew how to bring it up. Building a story together gave us
                  the words. It felt playful instead of awkward, and we actually talked afterward.</p>
                <div className="who"><span className="av" aria-hidden="true">M</span><div><b>Verified user</b><small>Couple, exploring together</small></div></div>
              </article>
              <article className="quote reveal">
                <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                <p>As a total beginner I loved that the heat starts low. I read a soft, reassuring story
                  first and moved the slider up only when I felt ready. No pressure at all.</p>
                <div className="who"><span className="av" aria-hidden="true">J</span><div><b>Verified user</b><small>First-time reader</small></div></div>
              </article>
              <article className="quote reveal">
                <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                <p>The stories keep the communication front and center, which is exactly what I wanted. It
                  feels warm and respectful, and it stays completely private.</p>
                <div className="who"><span className="av" aria-hidden="true">R</span><div><b>Verified user</b><small>Experienced reader</small></div></div>
              </article>
            </div>
          </div>
        </section>

        {/* ============ 12 · COMPARISON table ============ */}
        <section className="sect" id="compare" aria-labelledby="compare-title">
          <div className="wrap">
            <div className="sect-head">
              <span className="eyebrow"><svg aria-hidden="true"><use href="#i-check" /></svg> Why a purpose-built tool</span>
              <h2 id="compare-title">My Spicy Vanilla vs a general chatbot</h2>
              <p>A general assistant often refuses or flattens this kind of story. Here is how a dedicated,
                adults-only writer compares.</p>
            </div>
            <div className="cmp-wrap reveal">
              <table className="cmp">
                <thead>
                  <tr>
                    <th scope="col">What matters</th>
                    <th scope="col">My Spicy Vanilla</th>
                    <th scope="col">General chatbot</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Writes tasteful adult romance without refusing</td>
                    <td className="yes"><span className="ci"><svg aria-hidden="true"><use href="#i-check" /></svg> Yes, adults 18+</span></td>
                    <td className="no">Often blocked</td>
                  </tr>
                  <tr>
                    <td>Beginner-friendly, comfort-led pacing</td>
                    <td className="yes"><span className="ci"><svg aria-hidden="true"><use href="#i-check" /></svg> Built in</span></td>
                    <td className="no">Not designed for it</td>
                  </tr>
                  <tr>
                    <td>Adjustable heat slider</td>
                    <td className="yes"><span className="ci"><svg aria-hidden="true"><use href="#i-check" /></svg> Scene by scene</span></td>
                    <td className="no">No real control</td>
                  </tr>
                  <tr>
                    <td>Consent-first framing throughout</td>
                    <td className="yes"><span className="ci"><svg aria-hidden="true"><use href="#i-check" /></svg> Always</span></td>
                    <td className="no">Generic</td>
                  </tr>
                  <tr>
                    <td>Private by default</td>
                    <td className="yes"><span className="ci"><svg aria-hidden="true"><use href="#i-check" /></svg> Only you see it</span></td>
                    <td className="no">Varies</td>
                  </tr>
                  <tr>
                    <td>Remembers the couple you built</td>
                    <td className="yes"><span className="ci"><svg aria-hidden="true"><use href="#i-check" /></svg> Stays consistent</span></td>
                    <td className="no">Forgets often</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ============ 13 · PRIVACY / SAFETY panel ============ */}
        <section className="sect" id="privacy" aria-labelledby="privacy-title">
          <div className="wrap">
            <div className="safe reveal">
              <div className="safe-lead">
                <span className="eyebrow"><svg aria-hidden="true"><use href="#i-shield" /></svg> Privacy &amp; principles</span>
                <h2 id="privacy-title">Explore with total peace of mind</h2>
                <p>Clear rules are what make it easy to relax and enjoy. Here is exactly where we stand on
                  privacy, consent, and the characters in your stories.</p>
              </div>
              <ul className="safe-list">
                <li><span className="sib" aria-hidden="true"><svg><use href="#i-lock" /></svg></span><span><b>Private by default.</b> Stories are visible only to you unless you choose to share them. Nothing publishes on its own.</span></li>
                <li><span className="sib" aria-hidden="true"><svg><use href="#i-users" /></svg></span><span><b>Fictional adults only.</b> Every character is invented and over 18. We never write about real people or public figures.</span></li>
                <li><span className="sib" aria-hidden="true"><svg><use href="#i-heart-hands" /></svg></span><span><b>Consent-first, always.</b> Enthusiastic, fictional consent runs through every scene. The heat comes from trust, never pressure.</span></li>
                <li><span className="sib" aria-hidden="true"><svg><use href="#i-slider" /></svg></span><span><b>You control the intensity.</b> The heat level is yours to set and change at any moment, in either direction.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ 14 · GLOSSARY ============ */}
        <section className="sect" id="glossary" aria-labelledby="glossary-title">
          <div className="wrap">
            <div className="sect-head">
              <span className="eyebrow"><svg aria-hidden="true"><use href="#i-book" /></svg> Good to know</span>
              <h2 id="glossary-title">A friendly, jargon-free glossary</h2>
              <p>A few gentle definitions so nothing feels confusing. No pressure to know any of it in
                advance, this is just here if it helps.</p>
            </div>
            <dl className="glossary g-stagger">
              <div className="reveal"><dt>Pegging (in fiction)</dt><dd>A playful role dynamic between two consenting adults where one partner takes the lead. In our stories it is always tasteful, imaginative, and centered on connection.</dd></div>
              <div className="reveal"><dt>Heat level</dt><dd>How explicit the story gets. You set it with a simple slider, from sweet and suggestive to bolder, and you can change it any time.</dd></div>
              <div className="reveal"><dt>Consent-first</dt><dd>Stories that show characters asking, agreeing, and checking in. It keeps the fantasy warm, trusting, and grounded.</dd></div>
              <div className="reveal"><dt>Aftercare</dt><dd>The gentle wind-down, reassurance, and closeness that follows. Our stories treat it as part of the experience, not an add-on.</dd></div>
              <div className="reveal"><dt>Pause word</dt><dd>A simple agreed word that means slow down or stop. A small idea that keeps everyone relaxed and in control.</dd></div>
              <div className="reveal"><dt>Switching</dt><dd>Enjoying leading sometimes and following other times. You can explore either role in your stories, whenever you like.</dd></div>
            </dl>
          </div>
        </section>

        {/* ============ 15 · FAQ ============ */}
        <section className="sect" id="faq" aria-labelledby="faq-title">
          <div className="wrap">
            <div className="sect-head">
              <span className="eyebrow"><svg aria-hidden="true"><use href="#i-chat" /></svg> Questions, answered</span>
              <h2 id="faq-title">Frequently asked</h2>
              <p>Warm, honest answers to the things people wonder about before their first story.</p>
            </div>
            <div className="faq">
              <details open>
                <summary>What is an AI pegging story generator?</summary>
                <p>It is a tool that turns your prompt into a complete, tasteful pegging story. You describe the characters, the mood, and how much heat you want, and the AI writes a private scene for you. My Spicy Vanilla is built for adults 18+, keeps every character fictional, and puts you in control of the pace.</p>
              </details>
              <details>
                <summary>Do I need any experience to use it?</summary>
                <p>Not at all. The generator is designed for first-timers as much as experienced readers. You can start with a gentle, communication-led story where the characters talk everything through, then adjust the intensity whenever you feel ready. There is no right or wrong way to begin.</p>
              </details>
              <details>
                <summary>Can my partner and I use it together?</summary>
                <p>Yes. Many couples use it as a low-pressure way to explore a fantasy and start a conversation. You can shape the characters and dynamic together, read the story side by side, and use it as a gentle prompt to talk about what does and does not appeal to you.</p>
              </details>
              <details>
                <summary>How do I control how explicit the story gets?</summary>
                <p>You set a heat level before you generate and can change it at any time. Keep it sweet and suggestive with the focus on emotion and communication, or turn it up. You are always in charge, and you can regenerate or edit any scene until it feels right.</p>
              </details>
              <details>
                <summary>Is it private?</summary>
                <p>Yes. Your stories are private by default and visible only to you unless you choose to share them. Nothing is posted to a public feed. Discretion is part of the design, so you can explore comfortably.</p>
              </details>
              <details>
                <summary>Are the characters real people?</summary>
                <p>No. Every character is fictional, original, and a consenting adult over 18. My Spicy Vanilla does not write about real individuals or public figures. The stories are imaginative fiction built around the dynamic and mood you choose.</p>
              </details>
              <details>
                <summary>Is consent part of the stories?</summary>
                <p>Always. Enthusiastic, fictional consent runs through every story. The generator leans into communication, checking in, and characters who clearly choose each other. The appeal comes from trust and chemistry, never from pressure.</p>
              </details>
              <details>
                <summary>Is My Spicy Vanilla free to try?</summary>
                <p>Yes. You can start for free with no payment required. Optional upgrades add longer stories and extra features when you want them, but you can read your first story before deciding anything.</p>
              </details>
            </div>
          </div>
        </section>

        {/* ============ 16 · FINAL CTA ============ */}
        <section className="sect" id="start" aria-labelledby="final-title">
          <div className="wrap">
            <div className="final-panel reveal">
              <span className="blob blob-b" aria-hidden="true" />
              <h2 id="final-title">Your first gentle story is a click away</h2>
              <p>Set the scene, keep the heat wherever feels right, and read something warm, tasteful, and
                completely private. Join 522K+ readers exploring at their own pace, with consent and
                comfort leading the way.</p>
              <div className="hero-actions" style={{ justifyContent: 'center' }}>
                <button type="button" className="btn btn-ghost btn-lg">
                  Start My Story Free
                </button>
              </div>
              <p className="final-fine">Free to start · No payment required · Private by design · Adults 18+</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <nav className="foot-nav" aria-label="Footer navigation">
            <a href="/">Home</a>
            <a href="/ai-fanfiction-generator/">AI Fanfiction Generator</a>
            <a href="/ai-erotic-story-generator/">AI Erotic Story Generator</a>
            <a href="/ai-femdom-story-generator/">AI Femdom Story Generator</a>
            <a href="/ai-pegging-story-generator/">AI Pegging Story Generator</a>
            <a href="/ai-cuckold-story-generator/">AI Cuckold Story Generator</a>
            <FooterSiteLinks />
          </nav>
          <p className="foot-copy">
            © <FooterYear /> My Spicy Vanilla. All rights reserved. All characters are fictional and 18+.
            <span className="age-badge">18+ Adults Only</span>
          </p>
          <p className="foot-fine">
            Affiliate disclosure: This page contains affiliate links. If you sign up through them, we may
            earn a commission at no extra cost to you.
          </p>
        </div>
      </footer>

      <div className="sticky-cta">
        <button type="button" className="btn btn-primary">
          Start My Story — Free
        </button>
      </div>

      <RevealOnScroll />
      <StatCounters duration={1500} />
    </>
  );
}
