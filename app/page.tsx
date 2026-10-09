import type { Metadata, Viewport } from 'next';
import HomeHeader from './components/HomeHeader';
import RevealOnScroll from './components/RevealOnScroll';
import StatCounters from './components/StatCounters';
import FooterYear from './components/FooterYear';
import FooterSiteLinks from './components/FooterSiteLinks';
import jsonLd from './home.jsonld.json';
import './home.css';

export const metadata: Metadata = {
  title: 'My Spicy Vanilla | AI Smut Generator for Couples',
  description:
    'My Spicy Vanilla is an AI smut writer that turns your fantasies into personalized, illustrated erotic stories for couples. Free to start, private by design.',
  keywords:
    'My Spicy Vanilla, AI smut generator, AI smut writer, smut stories, erotic story generator, personalized erotica for couples, illustrated smut, AI erotica, sensual stories for couples',
  authors: [{ name: 'My Spicy Vanilla' }],
  alternates: { canonical: 'https://myspicyvanilla.net/' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  verification: { google: 'cfGH4zBLpttRQxXO_99ESB11BVgOiqk3D3XNeF0UK3E' },
  icons: {
    icon: [
      { url: '/images/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/images/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    title: 'My Spicy Vanilla | AI Smut Generator for Couples',
    description:
      'Turn your fantasies into personalized, illustrated erotic stories. An AI smut writer built for couples. Free to start, private by design.',
    url: 'https://myspicyvanilla.net/',
    siteName: 'My Spicy Vanilla',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://myspicyvanilla.net/images/og-share.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Spicy Vanilla | AI Smut Generator for Couples',
    description:
      "Personalized, illustrated erotic stories & audio for couples — an AI smut writer that's free to start and private by design.",
    images: ['https://myspicyvanilla.net/images/og-share.jpg'],
  },
  other: {
    rating: 'adult',
    'msapplication-TileColor': '#B23A6B',
  },
};

export const viewport: Viewport = {
  themeColor: '#F4F1EC',
};

export default function HomePage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
      />
      {(jsonLd as Array<Record<string, unknown>>).map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}

      {/* SVG ICON SPRITE (inline icons, replaces all emoji) */}
      <svg
        width="0"
        height="0"
        style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <symbol id="i-star" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </symbol>
          <symbol id="i-users" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </symbol>
          <symbol id="i-image" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </symbol>
          <symbol id="i-headphones" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 18v-5a9 9 0 0 1 18 0v5" />
            <path d="M21 19a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3z" />
            <path d="M3 19a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H3z" />
          </symbol>
          <symbol id="i-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </symbol>
          <symbol id="i-edit" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </symbol>
          <symbol id="i-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </symbol>
          <symbol id="i-send" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </symbol>
          <symbol id="i-gift" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 12 20 22 4 22 4 12" />
            <rect x="2" y="7" width="20" height="5" />
            <line x1="12" y1="22" x2="12" y2="7" />
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
          </symbol>
          <symbol id="i-flame" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
          </symbol>
          <symbol id="i-mic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </symbol>
          <symbol id="i-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </symbol>
          <symbol id="i-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </symbol>
          <symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </symbol>
          <symbol id="i-play" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <polygon points="6 4 20 12 6 20 6 4" />
          </symbol>
        </defs>
      </svg>

      <HomeHeader />

      <main id="top">
        {/* HERO */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap">
            <span className="eyebrow reveal">AI Smut Generator</span>
            <h1 id="hero-title" className="reveal">
              My Spicy Vanilla, the AI Smut Generator That Turns Your Fantasies Into Personalized Stories
            </h1>
            <p className="sub reveal">
              My Spicy Vanilla is an AI smut writer that turns a few prompts into illustrated, made-to-order erotic stories in seconds. No judgment, no templates, no limits on imagination.
            </p>
            <div className="cta-row reveal">
              <button type="button" className="btn btn-primary btn-lg">
                Generate My Story Free
              </button>
              <a className="btn btn-ghost btn-lg" href="#how-it-works" aria-label="See how My Spicy Vanilla works">
                See How It Works
              </a>
            </div>
            <p className="trust-micro reveal">
              <span aria-hidden="true"><svg><use href="#i-users" /></svg></span> Loved by 522K+ couples
              <span aria-hidden="true">•</span> <span aria-hidden="true"><svg><use href="#i-lock" /></svg></span> Private by design
              <span aria-hidden="true">•</span> No payment to start
            </p>
            <div className="hero-card reveal">
              <span style={{ display: 'block', fontSize: '.7rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--rose)', marginBottom: '10px' }}>
                Your Story · Tonight
              </span>
              <h3 style={{ fontStyle: 'italic', marginBottom: '8px', color: 'var(--rose-dark)' }}>
                The Rain Sounded Different From the Top Floor
              </h3>
              <p style={{ margin: 0 }}>
                She traced the rim of her glass and watched him cross the room, the city blurring gold behind the glass…
              </p>
              <p style={{ margin: '14px 0 0', fontWeight: 600, color: 'var(--rose)', fontSize: '.85rem' }}>
                Written for Maya &amp; Daniel
              </p>
              <p style={{ margin: '16px 0 0', display: 'flex', gap: '10px', flexWrap: 'wrap', fontSize: '.8rem', color: 'var(--ink-soft)' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--blush-soft)', color: 'var(--rose)', fontWeight: 600, padding: '5px 12px', borderRadius: '999px' }}>♥ Made for the two of you</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--blush-soft)', color: 'var(--rose)', fontWeight: 600, padding: '5px 12px', borderRadius: '999px' }}>✦ Illustrated in seconds</span>
              </p>
            </div>
          </div>
        </section>

        {/* IMAGE-ONLY SHOWCASE #1 (banner strip) */}
        <section className="img-band" aria-label="Illustrated erotic story scenes from My Spicy Vanilla">
          <div className="wrap">
            <div className="reveal" style={{ position: 'relative' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="ph"
                src="/images/hero-collage.webp"
                width={1180}
                height={520}
                loading="lazy"
                alt="Illustrated erotic story scenes created with the My Spicy Vanilla AI smut generator for couples"
              />
              <div className="img-overlay">
                <h2>Illustrated worlds, written for the two of you</h2>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS MY SPICY VANILLA */}
        <section id="about" aria-labelledby="what-title">
          <div className="wrap split">
            <div className="reveal">
              <span className="kicker" style={{ color: 'var(--rose)', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', fontSize: '.8rem' }}>
                What Is My Spicy Vanilla
              </span>
              <h2 id="what-title" style={{ margin: '12px 0 16px' }}>
                An AI Smut Generator Built to Reconnect Couples
              </h2>
              <p style={{ marginBottom: '16px' }}>
                My Spicy Vanilla is an AI smut writer that creates personalized erotic stories from your own ideas. You describe the characters, the setting, and the mood, and our story engine writes a full sensual narrative around them, complete with original illustrations. Every story is private, made on demand, and shaped entirely by what you ask for.
              </p>
              <p>
                Most erotica online is written for a faceless audience. My Spicy Vanilla flips that. The two of you become the leads, and the AI smut generator builds the scene, the tension, and the payoff around your fantasy. Casual readers, curious first-timers, and long-term couples all use it the same way, to turn a private idea into a story worth reading together.
              </p>
            </div>
            <div className="reveal" style={{ background: 'var(--grad-rose)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)', padding: '46px 40px', display: 'flex', alignItems: 'center', minHeight: '240px' }}>
              <p style={{ color: '#fff', fontFamily: "'Poppins',sans-serif", fontSize: '1.45rem', fontWeight: 600, lineHeight: 1.45, fontStyle: 'italic', margin: 0 }}>
                “It uses our names, our story. Nothing else ever felt like that.”
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS (3 steps) */}
        <section id="how-it-works" aria-labelledby="how-title">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">How It Works</span>
              <h2 id="how-title">Your Story in Three Simple Steps</h2>
              <p>From blank page to finished smut story in under a minute.</p>
            </div>
            <div className="steps">
              <article className="step reveal">
                <div className="num" aria-hidden="true">1</div>
                <h3>Describe Your Fantasy</h3>
                <p>Tell us the scenario, the characters, and the heat level. A sentence is enough. The more you share, the more personal the story.</p>
              </article>
              <article className="step reveal">
                <div className="num" aria-hidden="true">2</div>
                <h3>Customize Your Characters</h3>
                <p>Set names, looks, dynamic, and tone. Choose the genre and how explicit you want it, from slow-burn romance to full erotic smut.</p>
              </article>
              <article className="step reveal">
                <div className="num" aria-hidden="true">3</div>
                <h3>Generate &amp; Enjoy</h3>
                <p>Our AI smut writer delivers an illustrated, ready-to-read story in seconds. Save it, edit it, or generate a new version instantly.</p>
              </article>
            </div>
          </div>
        </section>

        {/* KEY FEATURES GRID (6 cards) + CTA after */}
        <section id="features" aria-labelledby="features-title">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">Features</span>
              <h2 id="features-title">Everything You Need for Sensual Stories for Couples</h2>
            </div>
            <div className="features">
              <article className="feature reveal">
                <div className="ico" aria-hidden="true"><svg><use href="#i-flame" /></svg></div>
                <h3>By the Heat of Your Romance</h3>
                <p>Stories written for your relationship, your dynamic, and your shared fantasy, not a generic audience.</p>
              </article>
              <article className="feature reveal">
                <div className="ico" aria-hidden="true"><svg><use href="#i-users" /></svg></div>
                <h3>Custom Characters</h3>
                <p>Name them, design them, and decide how they meet. You control every detail of the cast.</p>
              </article>
              <article className="feature reveal">
                <div className="ico" aria-hidden="true"><svg><use href="#i-image" /></svg></div>
                <h3>Immersive Illustrated Worlds</h3>
                <p>Each story arrives with original artwork that brings the scene to life.</p>
              </article>
              <article className="feature reveal">
                <div className="ico" aria-hidden="true"><svg><use href="#i-headphones" /></svg></div>
                <h3>AI Audiobooks &amp; ASMR Voices</h3>
                <p>Listen to your smut story read aloud in warm, expressive narration for hands-free enjoyment.</p>
              </article>
              <article className="feature reveal">
                <div className="ico" aria-hidden="true"><svg><use href="#i-lock" /></svg></div>
                <h3>Private &amp; Discreet</h3>
                <p>Your fantasies stay yours. Stories are generated privately and never shared.</p>
              </article>
              <article className="feature reveal">
                <div className="ico" aria-hidden="true"><svg><use href="#i-edit" /></svg></div>
                <h3>Built-in Editing</h3>
                <p>Rewrite a line, raise the heat, or change the ending. Refine any story until it feels right.</p>
              </article>
            </div>
            <div style={{ textAlign: 'center', marginTop: '42px' }} className="reveal">
              <button type="button" className="btn btn-primary btn-lg">
                Try My Spicy Vanilla Free
              </button>
            </div>
          </div>
        </section>

        {/* WHY IT WORKS + STAT BAND */}
        <section className="stats" aria-labelledby="why-works-title">
          <div className="wrap">
            <span className="kicker" style={{ color: '#fff', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', fontSize: '.8rem', display: 'block', marginBottom: '12px' }}>
              Why It Works
            </span>
            <h2 id="why-works-title">Sensual AI Storytelling for Couples, Reimagined</h2>
            <p style={{ maxWidth: '70ch', margin: '16px auto 0' }}>
              Reading the same erotica everyone else reads creates distance. A story built around your names, your fantasy, and your dynamic creates closeness. That is the difference My Spicy Vanilla is built on.
            </p>
            <p style={{ maxWidth: '70ch', margin: '14px auto 0' }}>
              Our AI smut generator does the writing so you can focus on the experience. There is no blank page, no awkward searching, and no settling for a story that almost fits. You get sensual fiction made for the two of you, on demand, as explicit or as tender as you want it.
            </p>
            <div className="stat-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '560px' }}>
              <div className="stat">
                <span className="n" data-count="522" data-suffix="K+">522K+</span>
                <span className="l">couples use My Spicy Vanilla to turn private ideas into shared stories.</span>
              </div>
            </div>
            <p className="trust-line">One story for two people, not one story for a million readers.</p>
          </div>
        </section>

        {/* AUDIO STORIES SPOTLIGHT + CTA */}
        <section id="audiobook" aria-labelledby="audio-title">
          <div className="wrap split">
            <div className="reveal">
              <span className="kicker" style={{ color: 'var(--rose)', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', fontSize: '.8rem' }}>
                Audio Stories
              </span>
              <h2 id="audio-title">Hear Your My Spicy Vanilla Story Come Alive</h2>
              <p>Some stories are better heard than read. Every My Spicy Vanilla smut story can be narrated in natural, expressive AI voices, so you can lie back and listen together.</p>
              <p>Choose a voice, pick a pace, and let the audiobook take over. It is hands-free, immersive, and made for the moments when reading is not the point.</p>
              <ul className="audio-list">
                <li><svg><use href="#i-mic" /></svg>Multiple expressive voice options</li>
                <li><svg><use href="#i-clock" /></svg>Adjustable pace and tone</li>
                <li><svg><use href="#i-globe" /></svg>ASMR-style narration for full immersion</li>
              </ul>
              <button type="button" className="btn btn-primary">
                Listen &amp; Create Free
              </button>
            </div>
            <div className="reveal">
              <div className="audio-card">
                <div className="audio-row">
                  <span className="play" aria-hidden="true"><svg><use href="#i-play" /></svg></span>
                  <div className="bars" aria-hidden="true">
                    <i style={{ animationDelay: '0s' }} />
                    <i style={{ animationDelay: '.1s' }} />
                    <i style={{ animationDelay: '.2s' }} />
                    <i style={{ animationDelay: '.3s' }} />
                    <i style={{ animationDelay: '.15s' }} />
                    <i style={{ animationDelay: '.25s' }} />
                    <i style={{ animationDelay: '.05s' }} />
                    <i style={{ animationDelay: '.35s' }} />
                  </div>
                  <span style={{ fontSize: '.85rem', color: 'var(--ink-soft)' }}>Velvet · 1:24</span>
                </div>
                <div className="audio-row">
                  <span className="play" aria-hidden="true"><svg><use href="#i-play" /></svg></span>
                  <div className="bars" aria-hidden="true">
                    <i style={{ animationDelay: '.2s' }} />
                    <i style={{ animationDelay: '0s' }} />
                    <i style={{ animationDelay: '.3s' }} />
                    <i style={{ animationDelay: '.1s' }} />
                    <i style={{ animationDelay: '.25s' }} />
                    <i style={{ animationDelay: '.05s' }} />
                    <i style={{ animationDelay: '.35s' }} />
                    <i style={{ animationDelay: '.15s' }} />
                  </div>
                  <span style={{ fontSize: '.85rem', color: 'var(--ink-soft)' }}>Aria · 2:08</span>
                </div>
                <div className="audio-row">
                  <span className="play" aria-hidden="true"><svg><use href="#i-play" /></svg></span>
                  <div className="bars" aria-hidden="true">
                    <i style={{ animationDelay: '.1s' }} />
                    <i style={{ animationDelay: '.3s' }} />
                    <i style={{ animationDelay: '0s' }} />
                    <i style={{ animationDelay: '.2s' }} />
                    <i style={{ animationDelay: '.35s' }} />
                    <i style={{ animationDelay: '.15s' }} />
                    <i style={{ animationDelay: '.25s' }} />
                    <i style={{ animationDelay: '.05s' }} />
                  </div>
                  <span style={{ fontSize: '.85rem', color: 'var(--ink-soft)' }}>Sterling · 1:52</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHARACTER & STORY SHOWCASE (image + content) */}
        <section id="showcase" aria-labelledby="showcase-title">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">Character Builder</span>
              <h2 id="showcase-title">Design Your Characters With My Spicy Vanilla</h2>
              <p>The cast is yours. Build each character from the ground up and watch the AI smut writer fold them into the story.</p>
            </div>
            <div className="showcase">
              <article className="scard reveal">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/character-customizer.webp" width={380} height={300} loading="lazy" alt="Character customization screen for creating a personalized romance lead in My Spicy Vanilla" />
                <div className="body">
                  <h3>Customize Your Romance Lead</h3>
                  <p>Set the look, personality, and role of your main character so the story centers on exactly who you imagine.</p>
                </div>
              </article>
              <article className="scard reveal">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/couple-styling.webp" width={380} height={300} loading="lazy" alt="Custom character styling options for couples in the My Spicy Vanilla AI smut generator" />
                <div className="body">
                  <h3>Cast You &amp; Your Partner</h3>
                  <p>Write the two of you into the scene, or invent someone new. Either way, the story bends to your choices.</p>
                </div>
              </article>
              <article className="scard reveal">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/story-scene-preview.webp" width={380} height={300} loading="lazy" alt="Illustrated erotic story scene preview generated by My Spicy Vanilla" />
                <div className="body">
                  <h3>Immersive Illustrated Scenes</h3>
                  <p>Original artwork matches your characters and setting, turning text into a world you can picture.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* TRUST / CONSENT-FIRST */}
        <section id="ethics" aria-labelledby="ethics-title">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">Built on Trust</span>
              <h2 id="ethics-title">Built Consent-First, Designed for Trust</h2>
              <p>My Spicy Vanilla is adults-only and built around clear boundaries. Every story you generate stays private to your account.</p>
            </div>
            <div className="pillars">
              <article className="pillar reveal"><h3>Consent-First</h3><p>Every scenario is built on enthusiastic, adult, fictional consent. That principle is baked into the generator.</p></article>
              <article className="pillar reveal"><h3>Privacy by Default</h3><p>Your prompts and stories are private. We do not publish, sell, or share what you create.</p></article>
              <article className="pillar reveal"><h3>100% Fictional</h3><p>Stories feature original fictional characters. My Spicy Vanilla is a creative writing tool, not real-world content.</p></article>
              <article className="pillar reveal"><h3>Adults Only</h3><p>The platform is restricted to users 18 and older, with safeguards in place.</p></article>
              <article className="pillar reveal"><h3>Full Transparency</h3><p>Clear terms, clear privacy policy, and clear control over your own data and stories.</p></article>
              <article className="pillar reveal"><h3>Made for Couples</h3><p>Designed first for partners exploring fantasy together in a safe, judgment-free space.</p></article>
            </div>
          </div>
        </section>

        {/* HOW TO WRITE YOUR BEST SMUT STORY [SEO] */}
        <section id="tips" aria-labelledby="tips-title">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">Getting Started</span>
              <h2 id="tips-title">How to Write Your Best Smut Story With My Spicy Vanilla</h2>
              <p>You do not need to be a writer. The AI smut generator handles the craft. Here is how to get the best result.</p>
            </div>
            <div className="benefits">
              <article className="benefit reveal"><span className="tick" aria-hidden="true">1</span><div><h3>Set the Scene</h3><p>Give a time, a place, and a mood. &quot;A rainy night in a city apartment&quot; gives the AI more to work with than &quot;bedroom.&quot;</p></div></article>
              <article className="benefit reveal"><span className="tick" aria-hidden="true">2</span><div><h3>Add Real Detail</h3><p>Names, history, and tension make a story feel personal. Tell us how the characters know each other.</p></div></article>
              <article className="benefit reveal"><span className="tick" aria-hidden="true">3</span><div><h3>Pick Your Heat Level</h3><p>From slow-burn flirtation to explicit erotic smut, you decide how far the story goes before it begins.</p></div></article>
              <article className="benefit reveal"><span className="tick" aria-hidden="true">4</span><div><h3>Generate &amp; Refine</h3><p>Read it, then adjust. Raise the intensity, soften a moment, or rewrite the ending until it lands.</p></div></article>
            </div>
          </div>
        </section>

        {/* WHY STORYTELLING BRINGS COUPLES CLOSER [SEO] + CTA */}
        <section className="flat" aria-labelledby="closer-title">
          <div className="wrap article-body">
            <h2 id="closer-title">Why Storytelling Brings Couples Closer</h2>
            <p>Sharing a fantasy out loud is hard. Reading one together is easy. A personalized smut story gives couples a low-pressure way to explore desire, name what they like, and discover something new without the awkward first step.</p>
            <p>That is why so many couples use My Spicy Vanilla as a starting point, a conversation that begins on the page and continues long after the story ends.</p>
            <p style={{ textAlign: 'left', marginTop: '26px' }}>
              <button type="button" className="btn btn-primary btn-lg">
                Start Writing Together
              </button>
            </p>
          </div>
        </section>

        {/* BRAND STORY (About) + CTA */}
        <section className="about" id="about-us" aria-labelledby="about-title">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">Our Story</span>
              <h2 id="about-title">The Story Behind My Spicy Vanilla</h2>
            </div>
            <p>My Spicy Vanilla started with a simple observation. Couples wanted to explore fantasy together, but the erotica available online was generic, impersonal, and written for everyone except them.</p>
            <p>So we built an AI smut generator that does the opposite. Instead of one story for a million readers, it writes one story for two people. That focus on personal, consent-first, illustrated storytelling is what makes My Spicy Vanilla different, and it is what keeps 522K+ couples coming back.</p>
            <button type="button" className="btn btn-primary btn-lg" style={{ marginTop: '26px' }}>
              Begin Your Own Story
            </button>
          </div>
        </section>

        {/* WHY MY SPICY VANILLA IS THE BEST [SEO] */}
        <section id="why" aria-labelledby="why-title">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">The Difference</span>
              <h2 id="why-title">Why My Spicy Vanilla Is the Best AI Smut Generator for Couples</h2>
            </div>
            <div className="features">
              <article className="feature reveal">
                <div className="ico" aria-hidden="true"><svg><use href="#i-star" /></svg></div>
                <h3>Truly Personalized</h3>
                <p>Stories built around your names, your fantasy, and your dynamic, not a generic template.</p>
              </article>
              <article className="feature reveal">
                <div className="ico" aria-hidden="true"><svg><use href="#i-image" /></svg></div>
                <h3>Illustrated Worlds</h3>
                <p>Original artwork on every story turns text into a scene you can picture.</p>
              </article>
              <article className="feature reveal">
                <div className="ico" aria-hidden="true"><svg><use href="#i-flame" /></svg></div>
                <h3>Uncensored, Within Limits</h3>
                <p>Explicit when you want it, always inside an adults-only, consent-first scope.</p>
              </article>
              <article className="feature reveal">
                <div className="ico" aria-hidden="true"><svg><use href="#i-lock" /></svg></div>
                <h3>Private and Secure</h3>
                <p>Your stories stay yours. Nothing is published or sold.</p>
              </article>
              <article className="feature reveal">
                <div className="ico" aria-hidden="true"><svg><use href="#i-headphones" /></svg></div>
                <h3>Audio Narration</h3>
                <p>Listen to any story in warm, expressive AI voices, hands-free.</p>
              </article>
              <article className="feature reveal">
                <div className="ico" aria-hidden="true"><svg><use href="#i-check" /></svg></div>
                <h3>Free to Start</h3>
                <p>Generate your first stories with no payment and no commitment.</p>
              </article>
            </div>
          </div>
        </section>

        {/* SENSUAL STORIES FOR EVERY MOMENT (use cases) [SEO] */}
        <section id="use-cases" className="flat" aria-labelledby="cases-title">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">Made for Real Life</span>
              <h2 id="cases-title">Sensual Stories for Couples, for Every Moment</h2>
              <p>Whether you have five minutes or a whole evening, My Spicy Vanilla fits the moment.</p>
            </div>
            <div className="cases">
              <article className="case reveal"><span className="emoji" aria-hidden="true"><svg><use href="#i-flame" /></svg></span><h3>Quick Stories</h3><p>Short, hot reads for when you want a spark fast.</p></article>
              <article className="case reveal"><span className="emoji" aria-hidden="true"><svg><use href="#i-clock" /></svg></span><h3>Long Sensual Reads</h3><p>Slow-burn narratives that build tension over a full evening.</p></article>
              <article className="case reveal"><span className="emoji" aria-hidden="true"><svg><use href="#i-headphones" /></svg></span><h3>Audio Sessions</h3><p>Hands-free narrated stories for shared listening.</p></article>
              <article className="case reveal"><span className="emoji" aria-hidden="true"><svg><use href="#i-users" /></svg></span><h3>Solo or Together</h3><p>Read alone or with a partner. The story adapts to either.</p></article>
            </div>
          </div>
        </section>

        {/* EXPLORE EVERY GENRE [SEO] */}
        <section id="genres" aria-labelledby="genres-title">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">Explore Genres</span>
              <h2 id="genres-title">Explore Every Genre on My Spicy Vanilla</h2>
              <p>From tender to intense, the AI smut generator writes across the full range.</p>
            </div>
            <div className="genres">
              <div className="genre reveal"><h3>Romance</h3></div>
              <div className="genre reveal"><h3>Fantasy</h3></div>
              <div className="genre reveal"><h3>Forbidden Love</h3></div>
              <div className="genre reveal"><h3>Office Romance</h3></div>
              <div className="genre reveal"><h3>Enemies to Lovers</h3></div>
              <div className="genre reveal"><h3>Roleplay</h3></div>
              <div className="genre reveal"><h3>BDSM</h3></div>
              <div className="genre reveal"><h3>Slow Burn</h3></div>
              <div className="genre reveal"><h3>Second Chance</h3></div>
              <div className="genre reveal"><h3>Paranormal</h3></div>
              <div className="genre reveal"><h3>Historical</h3></div>
              <div className="genre reveal"><h3>Sci-Fi Romance</h3></div>
            </div>
          </div>
        </section>

        {/* COMPARISON: MY SPICY VANILLA VS ORDINARY AI WRITERS [SEO] */}
        <section id="compare" className="flat flat-alt" aria-labelledby="compare-title">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">Compared</span>
              <h2 id="compare-title">My Spicy Vanilla vs Ordinary AI Writers</h2>
            </div>
            <div className="compare-wrap reveal">
              <table className="compare">
                <thead>
                  <tr><th scope="col">Feature</th><th scope="col">My Spicy Vanilla</th><th scope="col">Ordinary AI Writers</th></tr>
                </thead>
                <tbody>
                  <tr><td>Writes explicit smut</td><td>Yes</td><td>Usually blocked</td></tr>
                  <tr><td>Personalized to a couple</td><td>Yes</td><td>No</td></tr>
                  <tr><td>Original illustrations</td><td>Yes</td><td>No</td></tr>
                  <tr><td>Audio narration</td><td>Yes</td><td>No</td></tr>
                  <tr><td>Consent-first, adults-only</td><td>Yes</td><td>Not designed for it</td></tr>
                  <tr><td>Private by default</td><td>Yes</td><td>Varies</td></tr>
                  <tr><td>Built for sensual fiction</td><td>Yes</td><td>General purpose</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL CARDS (social proof) [SEO] */}
        <section id="testimonials" aria-labelledby="tcards-title">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">Loved by Couples</span>
              <h2 id="tcards-title">Loved by 522K+ Couples on My Spicy Vanilla</h2>
            </div>
            <div className="tcards">
              <article className="tcard reveal"><div className="stars" aria-label="5 out of 5 stars">★★★★★</div><p>“We never knew how to talk about this stuff. Now we read a story together and it just opens up.”</p><b>— Verified couple</b></article>
              <article className="tcard reveal"><div className="stars" aria-label="5 out of 5 stars">★★★★★</div><p>“The fact that it uses our names and our story makes it feel real in a way other sites never did.”</p><b>— Verified user</b></article>
              <article className="tcard reveal"><div className="stars" aria-label="5 out of 5 stars">★★★★★</div><p>“Started free, upgraded the same night. The audio narration is the part we did not expect to love.”</p><b>— Verified user</b></article>
            </div>
          </div>
        </section>

        {/* LONG-FORM SEO GUIDE (content depth) [SEO] */}
        <section className="flat" aria-labelledby="article-title">
          <div className="wrap article-body">
            <h2 id="article-title">The Complete Guide to Sensual AI Storytelling</h2>

            <h3>What makes a great personalized romance story?</h3>
            <p>A great personalized story starts with specificity. The names, the setting, and the dynamic between characters matter more than the explicit scenes themselves. My Spicy Vanilla&apos;s AI smut writer uses your details to build tension first, so the payoff feels earned rather than generic.</p>

            <h3>Reading vs writing the old-fashioned way</h3>
            <p>Traditional erotica asks you to find a story that almost matches what you want. An AI smut generator removes that compromise. You describe the fantasy once and get a story built to fit, with the freedom to rewrite anything that does not land.</p>

            <h3>Privacy, consent, and trust</h3>
            <p>Everything on My Spicy Vanilla is fictional, adults-only, and built on enthusiastic consent between characters. Your prompts and finished stories stay private to your account. We treat your creative space as exactly that, yours.</p>

            <h3>Getting the most from the generator</h3>
            <p>Start with a clear scene, add personal detail, set your heat level, and refine the result. Generate more than one version when you want options. The more you shape the input, the more personal the story becomes.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="flat flat-alt" id="faq" aria-labelledby="faq-title">
          <div className="wrap qa">
            <div className="sec-head">
              <span className="kicker">FAQ</span>
              <h2 id="faq-title">Your Questions About My Spicy Vanilla</h2>
            </div>

            <div className="item">
              <h3>What is My Spicy Vanilla?</h3>
              <p>My Spicy Vanilla is an AI smut generator that writes personalized erotic stories for couples. You describe the characters, setting, and heat level, and the AI smut writer produces an illustrated, ready-to-read sensual story in seconds. Every story is private and made on demand.</p>
            </div>
            <div className="item">
              <h3>What is smut?</h3>
              <p>Smut is fiction that focuses on explicit sexual content, most often used to describe romance and erotica with detailed intimate scenes. In the book community, &quot;smut&quot; refers to novels or stories where the sexual relationship is central to the plot rather than implied. My Spicy Vanilla lets you generate your own smut stories tailored to your preferences.</p>
            </div>
            <div className="item">
              <h3>What does smut mean in books?</h3>
              <p>In books, smut means scenes that describe sex explicitly rather than fading to black. Readers use the term to flag romance and erotica with high heat levels. A &quot;smut book&quot; is one where these explicit scenes are a core part of the story.</p>
            </div>
            <div className="item">
              <h3>Is My Spicy Vanilla private and discreet?</h3>
              <p>Yes. Every story you generate is tied to your account and stays private. We do not publish, sell, or share your prompts or your stories. Privacy is the default, not an upgrade.</p>
            </div>
            <div className="item">
              <h3>Can I customize the characters?</h3>
              <p>Yes. You set names, appearance, personality, relationship dynamic, and how explicit the story gets. You can write yourself and your partner into the story or invent original characters from scratch.</p>
            </div>
            <div className="item">
              <h3>Can AI write smut better than ChatGPT?</h3>
              <p>General assistants like ChatGPT restrict explicit content and refuse most smut requests. My Spicy Vanilla is a purpose-built AI smut writer designed for sensual fiction, so it produces complete, uncensored erotic stories within an adults-only, consent-first framework.</p>
            </div>
            <div className="item">
              <h3>Is My Spicy Vanilla free?</h3>
              <p>You can start generating stories for free with no payment required. Optional upgrades unlock longer stories, more illustrations, audio narration, and additional customization.</p>
            </div>
            <div className="item">
              <h3>How explicit can the stories get?</h3>
              <p>You control the heat level on every story, from slow-burn romance to fully explicit erotic smut. The generator stays within an adults-only, fictional, consent-first scope.</p>
            </div>
            <div className="item">
              <h3>Who is My Spicy Vanilla for?</h3>
              <p>It is for adults 18 and older, especially couples who want to explore fantasy together in a private, judgment-free way. First-time readers and longtime erotica fans use it the same way.</p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final" aria-labelledby="final-title">
          <div className="wrap">
            <h2 id="final-title" className="reveal">Ready to Write Your First Story?</h2>
            <p className="reveal">Join 522K+ couples turning private fantasies into personalized smut stories. Free to start, private by design, written for the two of you.</p>
            <button type="button" className="btn btn-primary btn-lg reveal">
              Generate My Story Free
            </button>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-bottom" style={{ marginTop: 0, borderTop: 0, paddingTop: 0, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '10px' }}>
          <nav aria-label="Generators" style={{ display: 'flex', gap: '10px 22px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '4px' }}>
            <a href="/ai-fanfiction-generator/">AI Fanfiction Generator</a>
            <a href="/ai-erotic-story-generator/">AI Erotic Story Generator</a>
            <a href="/ai-femdom-story-generator/">AI Femdom Story Generator</a>
            <a href="/ai-pegging-story-generator/">AI Pegging Story Generator</a>
            <a href="/ai-cuckold-story-generator/">AI Cuckold Story Generator</a>
          </nav>
          <nav aria-label="Site" style={{ display: 'flex', gap: '10px 22px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '4px' }}>
            <FooterSiteLinks />
          </nav>
          <p className="copyright">
            &copy; <FooterYear /> My Spicy Vanilla. All rights reserved. All characters are fictional and 18+. <span className="age-badge">18+ Adults Only</span>
          </p>
          <p className="disclosure-mini">
            <strong>Affiliate disclosure:</strong> This page contains affiliate links. If you sign up through them, we may earn a commission at no extra cost to you.
          </p>
        </div>
      </footer>

      {/* STICKY MOBILE CTA BAR */}
      <div className="sticky-cta" aria-hidden="false">
        <button type="button" className="btn btn-primary">
          Generate My Story – Free
        </button>
      </div>

      <RevealOnScroll />
      <StatCounters />
    </>
  );
}
