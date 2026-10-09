import type { Metadata, Viewport } from 'next';
import SiteNav from '../components/SiteNav';
import FooterSiteLinks from '../components/FooterSiteLinks';
import FooterYear from '../components/FooterYear';
import RevealOnScroll from '../components/RevealOnScroll';
import StatCounters from '../components/StatCounters';
import './erotic.css';

export const metadata: Metadata = {
  title: 'AI Erotic Story Generator | My Spicy Vanilla',
  description:
    'An AI erotic story generator that turns your ideas into tasteful, illustrated sensual fiction with optional audio. Private by design, and you control the heat.',
  keywords:
    'AI erotic story generator, erotic fiction AI, personalized erotica, AI erotica writer, sensual story generator, adult story generator, custom erotic stories',
  authors: [{ name: 'My Spicy Vanilla' }],
  alternates: { canonical: 'https://myspicyvanilla.net/ai-erotic-story-generator/' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  icons: {
    icon: [
      { url: '/images/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/images/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    title: 'AI Erotic Story Generator | My Spicy Vanilla',
    description:
      'Turn your ideas into tasteful, illustrated erotic fiction with optional audio narration. A sensual story generator for adults, private by design, with the heat set entirely by you.',
    url: 'https://myspicyvanilla.net/ai-erotic-story-generator/',
    siteName: 'My Spicy Vanilla',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://myspicyvanilla.net/images/og-share.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Erotic Story Generator | My Spicy Vanilla',
    description:
      'Personalized, tasteful erotic fiction on demand — illustrated, narrated, and private by design. You set the characters, the mood, and the heat. Free to start.',
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

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'My Spicy Vanilla',
    url: 'https://myspicyvanilla.net/',
    logo: 'https://myspicyvanilla.net/images/logo.png',
    description:
      'My Spicy Vanilla is an adults-only creative-fiction studio offering AI story generators for tasteful, personalized sensual fiction.',
    sameAs: ['https://myspicyvanilla.net/'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AI Erotic Story Generator | My Spicy Vanilla',
    applicationCategory: 'EntertainmentApplication',
    operatingSystem: 'Web',
    url: 'https://myspicyvanilla.net/ai-erotic-story-generator/',
    description:
      'A personalized AI erotic story generator for adults that creates tasteful, illustrated sensual fiction with optional audio narration, private by default and with user-controlled heat levels.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '11840',
      bestRating: '5',
      worstRating: '1',
    },
    contentRating: 'Adults only (18+)',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://myspicyvanilla.net/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'AI Erotic Story Generator',
        item: 'https://myspicyvanilla.net/ai-erotic-story-generator/',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an AI erotic story generator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An AI erotic story generator turns a short prompt into a finished sensual story. You choose the characters, the setting, and the mood, and the AI writes tasteful scenes to match. My Spicy Vanilla is built for adults 18 and over, with original illustrations and optional audio narration on top of the text, and you control the heat level throughout.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I control how explicit the stories are?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. You set the temperature scene by scene, from sweet and suggestive to more intense. The story follows the level you choose and stays character driven rather than clinical. You can dial it up or down at any point and regenerate a scene until it reads the way you want.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are my stories private?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Every story is private by default and visible only to you unless you choose to share it. Nothing is posted to a public feed, so you can read and write for yourself with no audience looking over your shoulder.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are all the characters fictional and adults?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Always. Every character is fully fictional and a consenting adult over 18. My Spicy Vanilla does not create stories about real people, and consent runs through every scene. The heat comes from tension and chemistry, never from coercion.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I add illustrations and audio narration?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Each story can arrive with original illustrations tuned to the scene, and any story can be turned into warm, expressive audio narration with softer ASMR options. You can read, listen, or both, whenever it suits you.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is My Spicy Vanilla free to start?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. My Spicy Vanilla is free to start with no payment required. Optional upgrades add longer stories, more illustrations, and audio narration when you want them.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is the erotic story generator for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is for couples and solo readers 18 and over who want sensual fiction written to their own taste. Whether you want a slow, suggestive romance or something bolder, you shape the characters, the mood, and the heat. Every character is fictional and an adult.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is this different from a general chatbot?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'General chatbots often refuse romance prompts or flatten the mood into something safe. My Spicy Vanilla is purpose-built for adult sensual fiction, so it holds character voice, pacing, and tension across a full story, adds original illustrations and audio narration, and keeps everything private by default within a consent-first, adults-only scope.',
        },
      },
    ],
  },
];

export default function EroticStoryPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Poppins:wght@400;500;600;700&display=swap"
      />
      {jsonLd.map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}

      <SiteNav current="erotic" />

      {/* Hidden icon + gradient sprite (static) */}
      <svg
        width="0"
        height="0"
        style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="e-rose" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#B23A6B" />
            <stop offset="1" stopColor="#C9527F" />
          </linearGradient>
          <linearGradient id="e-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#C9527F" />
            <stop offset="1" stopColor="#D4A437" />
          </linearGradient>
          <linearGradient id="e-blush" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FCE7ED" />
            <stop offset="1" stopColor="#F8C8D4" />
          </linearGradient>
          <linearGradient id="e-dusk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FCE7ED" />
            <stop offset="0.6" stopColor="#F8C8D4" />
            <stop offset="1" stopColor="#D4A437" stopOpacity="0.55" />
          </linearGradient>
          <symbol id="i-feather" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
            <line x1="16" y1="8" x2="2" y2="22" />
            <line x1="17.5" y1="15" x2="9" y2="15" />
          </symbol>
          <symbol id="i-flame" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
          </symbol>
          <symbol id="i-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </symbol>
          <symbol id="i-heart" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M12 21s-8-4.9-8-11a4.6 4.6 0 0 1 8-3 4.6 4.6 0 0 1 8 3c0 6.1-8 11-8 11z" />
          </symbol>
          <symbol id="i-headphones" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 18v-5a9 9 0 0 1 18 0v5" />
            <path d="M21 19a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3z" />
            <path d="M3 19a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H3z" />
          </symbol>
          <symbol id="i-image" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </symbol>
          <symbol id="i-sliders" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="21" x2="4" y2="14" />
            <line x1="4" y1="10" x2="4" y2="3" />
            <line x1="12" y1="21" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="3" />
            <line x1="20" y1="21" x2="20" y2="16" />
            <line x1="20" y1="12" x2="20" y2="3" />
            <line x1="1" y1="14" x2="7" y2="14" />
            <line x1="9" y1="8" x2="15" y2="8" />
            <line x1="17" y1="16" x2="23" y2="16" />
          </symbol>
          <symbol id="i-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <polyline points="9 12 11 14 15 10" />
          </symbol>
          <symbol id="i-sparkle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
            <path d="M12 8l1.6 2.4L16 12l-2.4 1.6L12 16l-1.6-2.4L8 12l2.4-1.6z" />
          </symbol>
          <symbol id="i-edit" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </symbol>
          <symbol id="i-book" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </symbol>
          <symbol id="i-users" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </symbol>
          <symbol id="i-play" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <polygon points="6 4 20 12 6 20 6 4" />
          </symbol>
          <symbol id="i-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </symbol>
          <symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </symbol>
        </defs>
      </svg>

      <main id="top">
        {/* 1 · MASTHEAD */}
        <section className="masthead" aria-labelledby="hero-title">
          <div className="wrap">
            <div className="mast-top">
              <span className="eyebrow">The Desire Edit · Issue No. 07</span>
            </div>
            <h1 id="hero-title" className="mast-title">
              The AI erotic story generator, written <em>to your taste</em>
            </h1>
            <p className="mast-stand">
              Tasteful, personalized sensual fiction on demand — illustrated, narrated, and private by design. You set the characters, the mood, and exactly how far it goes.
            </p>
            <div className="mast-actions">
              <button type="button" className="btn btn-primary btn-lg">
                Start My Story Free
              </button>
              <a className="btn btn-ghost btn-lg" href="#how">Read How It Works</a>
            </div>
            <ul className="mast-trust">
              <li><svg aria-hidden="true"><use href="#i-users" /></svg> Loved by 522K+ readers</li>
              <li><svg aria-hidden="true"><use href="#i-lock" /></svg> Private by design</li>
              <li><svg aria-hidden="true"><use href="#i-sliders" /></svg> You control the heat</li>
              <li><svg aria-hidden="true"><use href="#i-check" /></svg> Free to start</li>
            </ul>
          </div>
        </section>

        {/* 2 · FEATURED STORY SPREAD (signature) */}
        <section aria-labelledby="feat-title">
          <div className="wrap">
            <h2 id="feat-title" className="eyebrow" style={{ marginBottom: '18px' }}>The Featured Story</h2>
            <article className="spread reveal" aria-label="Example of a generated story spread">
              <div className="spread-page">
                <p className="spread-tag">Contemporary · Slow Burn · Heat 3 of 5</p>
                <h2 className="spread-title">The Long Way <em>Home</em></h2>
                <p className="spread-by">A My Spicy Vanilla original · generated in 9 seconds · by you</p>
                <p className="spread-body">
                  Midnight found them in the same kitchen they had shared for years, close enough now that the old familiarity felt brand new. She reached past him for the kettle and did not step back. He noticed the way she lingered, the quiet held between two people who already knew each other and were only now deciding to say so. Nothing was rushed. Everything, at last, was allowed.
                </p>
                <div className="spread-tags">
                  <span className="chip">#reunion</span>
                  <span className="chip">#slow-burn</span>
                  <span className="chip">#tender</span>
                  <span className="chip">#consent-first</span>
                  <span className="chip warn">#18+</span>
                </div>
              </div>
              <div className="spread-page">
                <svg className="spread-art" viewBox="0 0 520 320" role="img" aria-label="Illustration of two figures by a warm window at night">
                  <rect x="0" y="0" width="520" height="320" fill="url(#e-dusk)" />
                  <rect x="40" y="40" width="200" height="180" rx="6" fill="#FFFFFF" opacity="0.28" />
                  <rect x="280" y="40" width="200" height="180" rx="6" fill="#FFFFFF" opacity="0.28" />
                  <line x1="260" y1="30" x2="260" y2="300" stroke="#FFFFFF" strokeWidth="1.4" opacity="0.5" />
                  <circle cx="392" cy="98" r="30" fill="#FFFFFF" opacity="0.7" />
                  <circle cx="380" cy="90" r="30" fill="#F8C8D4" opacity="0.9" />
                  <g fill="#2B2230" opacity="0.9">
                    <circle cx="196" cy="176" r="20" />
                    <path d="M172 300 v-84 a24 24 0 0 1 48 0 v84 z" />
                    <circle cx="286" cy="172" r="20" />
                    <path d="M262 300 v-88 a24 24 0 0 1 48 0 v88 z" />
                  </g>
                  <path d="M222 236 h44" stroke="#B23A6B" strokeWidth="1.8" strokeDasharray="3 6" />
                  <path d="M241 214 c-6-4-10-7-10-11 a5 5 0 0 1 10-3 a5 5 0 0 1 10 3 c0 4-4 7-10 11z" fill="#B23A6B" />
                </svg>
                <p className="spread-cap">
                  Every story can arrive with an original illustration tuned to its mood — never explicit, always in keeping with the scene you chose.
                </p>
                <div className="spread-meta">
                  <span><svg aria-hidden="true"><use href="#i-heart" /></svg> <b>3,204</b> saves</span>
                  <span><svg aria-hidden="true"><use href="#i-book" /></svg> <b>6</b> chapters</span>
                  <span><svg aria-hidden="true"><use href="#i-headphones" /></svg> <b>18:40</b> audio</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* 3 · EDITOR'S LETTER */}
        <section className="section-top" aria-labelledby="letter-title">
          <div className="wrap">
            <div className="letter">
              <p className="eyebrow kick">From the Editor</p>
              <h2 id="letter-title">A private press for the stories you actually want to read</h2>
              <p>
                Most erotic fiction is written for the widest possible audience, which means it is rarely written for you. My Spicy Vanilla was built the other way around. You describe the two people, the setting, and the mood, and a complete sensual story is composed for an audience of one — you, and no one else.
              </p>
              <p>
                It is tasteful by intention. The writing leans on tension, anticipation, and character rather than anything clinical, and the temperature is yours to set from the first line to the last. Every character is fictional and an adult, every scene is consent-first, and every story stays private unless you decide otherwise.
              </p>
              <blockquote className="pull">
                It read like a story someone wrote knowing exactly what I would want next — because, in a way, I did.
                <cite>— Verified user</cite>
              </blockquote>
              <p className="sign">Discreetly yours, the My Spicy Vanilla studio.</p>
            </div>
          </div>
        </section>

        {/* 4 · BAND — PERSONALIZATION (text left / art right) */}
        <section className="section-top" aria-labelledby="pers-title">
          <div className="wrap">
            <div className="band">
              <div className="band-text">
                <p className="eyebrow">Written to your taste</p>
                <h2 id="pers-title">A story shaped around <em>who you are</em></h2>
                <p>
                  Start with two fictional adults and give them whatever you like — names, looks, history, and the exact dynamic that draws you in. Choose the setting, name the mood, and the AI erotica writer composes a scene that fits, then lets you steer every line from there.
                </p>
                <ul className="mini-list">
                  <li>
                    <span className="mi"><svg aria-hidden="true"><use href="#i-users" /></svg></span>
                    <span><b>Your cast, your chemistry</b>Invent the leads and the tension between them, from a slow reunion to a first, nervous yes.</span>
                  </li>
                  <li>
                    <span className="mi"><svg aria-hidden="true"><use href="#i-feather" /></svg></span>
                    <span><b>Tone you choose</b>Tender and romantic or playful and bold — the voice bends to the register you ask for.</span>
                  </li>
                  <li>
                    <span className="mi"><svg aria-hidden="true"><use href="#i-edit" /></svg></span>
                    <span><b>Rewrite any moment</b>Soften a beat, slow the middle, or ask for a fresh take until the scene reads exactly right.</span>
                  </li>
                </ul>
              </div>
              <div className="band-art-wrap">
                <svg className="band-art" viewBox="0 0 520 400" role="img" aria-label="A story brief with fields for the leads, mood and heat level">
                  <rect x="0" y="0" width="520" height="400" fill="#FFFFFF" />
                  <line x1="0" y1="54" x2="520" y2="54" stroke="#E6E0D8" />
                  <circle cx="26" cy="28" r="4.5" fill="#B23A6B" />
                  <circle cx="44" cy="28" r="4.5" fill="#D4A437" />
                  <circle cx="62" cy="28" r="4.5" fill="#E6E0D8" />
                  <text x="86" y="33" fontFamily="Poppins,sans-serif" fontSize="12" fill="#5A4F60" letterSpacing="2">YOUR STORY BRIEF</text>
                  <text x="34" y="100" fontFamily="Poppins,sans-serif" fontSize="11" fill="#5A4F60" letterSpacing="1.6">THE LEADS</text>
                  <rect x="32" y="110" width="456" height="40" rx="5" fill="#FCE7ED" stroke="#E6E0D8" />
                  <text x="50" y="135" fontFamily="Poppins,sans-serif" fontSize="14" fill="#2B2230">Elena, 34 · Marcus, 36 — old friends, new nerve</text>
                  <text x="34" y="184" fontFamily="Poppins,sans-serif" fontSize="11" fill="#5A4F60" letterSpacing="1.6">SETTING</text>
                  <rect x="32" y="194" width="222" height="40" rx="5" fill="#FCE7ED" stroke="#E6E0D8" />
                  <text x="50" y="219" fontFamily="Poppins,sans-serif" fontSize="14" fill="#2B2230">a quiet lake house</text>
                  <text x="278" y="184" fontFamily="Poppins,sans-serif" fontSize="11" fill="#5A4F60" letterSpacing="1.6">MOOD</text>
                  <rect x="276" y="194" width="212" height="40" rx="5" fill="#FCE7ED" stroke="#E6E0D8" />
                  <text x="294" y="219" fontFamily="Poppins,sans-serif" fontSize="14" fill="#2B2230">tender, slow, warm</text>
                  <text x="34" y="268" fontFamily="Poppins,sans-serif" fontSize="11" fill="#5A4F60" letterSpacing="1.6">HEAT LEVEL — YOU DECIDE</text>
                  <line x1="34" y1="290" x2="486" y2="290" stroke="#E6E0D8" strokeWidth="5" strokeLinecap="round" />
                  <line x1="34" y1="290" x2="286" y2="290" stroke="url(#e-gold)" strokeWidth="5" strokeLinecap="round" />
                  <circle cx="286" cy="290" r="10" fill="#B23A6B" />
                  <rect x="34" y="326" width="180" height="44" rx="22" fill="url(#e-rose)" />
                  <text x="124" y="353" fontFamily="Poppins,sans-serif" fontSize="14" fontWeight="600" fill="#FFFFFF" textAnchor="middle">Compose story</text>
                  <text x="238" y="353" fontFamily="Poppins,sans-serif" fontSize="12.5" fill="#8E2C54">private · adults 18+</text>
                </svg>
                <p className="art-cap">The brief: your leads, the setting, the mood, and a heat dial only you move.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5 · BAND — ILLUSTRATED (art left / text right) */}
        <section aria-labelledby="illus-title">
          <div className="wrap">
            <div className="band alt">
              <div className="band-text">
                <p className="eyebrow">Seen, not just read</p>
                <h2 id="illus-title">Illustrated to match <em>the moment</em></h2>
                <p>
                  When a scene deserves an image, the AI draws original artwork tuned to the setting and the mood you chose. It is suggestive rather than explicit — a look held a beat too long, warm light, the space between two people right before it closes.
                </p>
                <ul className="mini-list">
                  <li>
                    <span className="mi"><svg aria-hidden="true"><use href="#i-image" /></svg></span>
                    <span><b>Original artwork</b>Every illustration is generated for your story, framed with the beat it belongs to.</span>
                  </li>
                  <li>
                    <span className="mi"><svg aria-hidden="true"><use href="#i-sparkle" /></svg></span>
                    <span><b>Tasteful by default</b>Atmosphere over explicitness, so the picture matches the register you set.</span>
                  </li>
                </ul>
              </div>
              <div className="band-art-wrap">
                <svg className="band-art" viewBox="0 0 520 400" role="img" aria-label="An illustrated scene of two figures on a balcony at dusk">
                  <rect x="0" y="0" width="520" height="400" fill="url(#e-dusk)" />
                  <rect x="24" y="24" width="472" height="300" rx="8" fill="#FFFFFF" opacity="0.16" />
                  <circle cx="418" cy="96" r="34" fill="#FFFFFF" opacity="0.65" />
                  <circle cx="404" cy="86" r="34" fill="#F8C8D4" opacity="0.92" />
                  <g fill="#FFFFFF" opacity="0.85">
                    <circle cx="70" cy="70" r="2.2" />
                    <circle cx="150" cy="54" r="1.8" />
                    <circle cx="230" cy="88" r="2" />
                    <circle cx="120" cy="150" r="1.7" />
                  </g>
                  <path d="M24 250 C 150 214, 250 258, 360 232 C 430 214, 470 244, 496 232 L496 324 L24 324 Z" fill="#8E2C54" opacity="0.24" />
                  <g fill="#2B2230">
                    <circle cx="214" cy="196" r="20" />
                    <path d="M190 324 v-84 a24 24 0 0 1 48 0 v84 z" />
                    <circle cx="300" cy="192" r="20" />
                    <path d="M276 324 v-88 a24 24 0 0 1 48 0 v88 z" />
                  </g>
                  <path d="M241 236 c-6-4-10-7-10-11 a5 5 0 0 1 10-3 a5 5 0 0 1 10 3 c0 4-4 7-10 11z" fill="#B23A6B" />
                  <rect x="24" y="336" width="472" height="42" rx="6" fill="#FFFFFF" opacity="0.86" />
                  <text x="44" y="363" fontFamily="Cormorant Garamond,Georgia,serif" fontSize="19" fontStyle="italic" fill="#2B2230">the balcony, and neither of them going in</text>
                </svg>
                <p className="art-cap">Chapter art arrives attached to the scene it illustrates, tuned to your setting.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6 · BAND — AUDIO NARRATION (text left / art right) */}
        <section aria-labelledby="audio-title">
          <div className="wrap">
            <div className="band">
              <div className="band-text">
                <p className="eyebrow">Read it, or be read to</p>
                <h2 id="audio-title">Turn any story into <em>audio</em></h2>
                <p>
                  Send any chapter to narration and let a warm, expressive voice carry the scene while your hands stay free. Choose a softer, whisper-close ASMR setting for the quiet moments, or something more cinematic. No microphone, no editing — just press play.
                </p>
                <ul className="mini-list">
                  <li>
                    <span className="mi"><svg aria-hidden="true"><use href="#i-headphones" /></svg></span>
                    <span><b>Expressive voices</b>Several narrators, from steady and cinematic to warm and close, paced to let the tension breathe.</span>
                  </li>
                  <li>
                    <span className="mi"><svg aria-hidden="true"><use href="#i-clock" /></svg></span>
                    <span><b>Your pace, anywhere</b>A single scene or a whole evening, private on any device, ready in seconds.</span>
                  </li>
                </ul>
              </div>
              <div className="band-art-wrap">
                <svg className="band-art" viewBox="0 0 520 400" role="img" aria-label="An audio narration player with a waveform">
                  <rect x="0" y="0" width="520" height="400" fill="#FFFFFF" />
                  <rect x="40" y="52" width="440" height="180" rx="12" fill="url(#e-blush)" />
                  <circle cx="120" cy="142" r="42" fill="url(#e-rose)" />
                  <polygon points="106 120 148 142 106 164" fill="#FFFFFF" />
                  <text x="184" y="128" fontFamily="Poppins,sans-serif" fontSize="13" fill="#8E2C54" letterSpacing="1.6">NOW PLAYING</text>
                  <text x="184" y="156" fontFamily="Cormorant Garamond,Georgia,serif" fontSize="26" fontWeight="600" fill="#2B2230">The Long Way Home</text>
                  <text x="184" y="182" fontFamily="Poppins,sans-serif" fontSize="13" fill="#5A4F60">Ch. 4 · narrator: Vesper · ASMR</text>
                  <g stroke="#B23A6B" strokeWidth="4" strokeLinecap="round">
                    <line x1="60" y1="290" x2="60" y2="310" />
                    <line x1="80" y1="278" x2="80" y2="322" />
                    <line x1="100" y1="266" x2="100" y2="334" />
                    <line x1="120" y1="286" x2="120" y2="314" />
                    <line x1="140" y1="256" x2="140" y2="344" />
                    <line x1="160" y1="284" x2="160" y2="316" />
                    <line x1="180" y1="272" x2="180" y2="328" />
                    <line x1="200" y1="262" x2="200" y2="338" />
                    <line x1="220" y1="288" x2="220" y2="312" />
                    <line x1="240" y1="276" x2="240" y2="324" />
                  </g>
                  <g stroke="#E6E0D8" strokeWidth="4" strokeLinecap="round">
                    <line x1="260" y1="284" x2="260" y2="316" />
                    <line x1="280" y1="270" x2="280" y2="330" />
                    <line x1="300" y1="290" x2="300" y2="310" />
                    <line x1="320" y1="278" x2="320" y2="322" />
                    <line x1="340" y1="264" x2="340" y2="336" />
                    <line x1="360" y1="288" x2="360" y2="312" />
                    <line x1="380" y1="274" x2="380" y2="326" />
                    <line x1="400" y1="284" x2="400" y2="316" />
                    <line x1="420" y1="292" x2="420" y2="308" />
                    <line x1="440" y1="280" x2="440" y2="320" />
                    <line x1="460" y1="286" x2="460" y2="314" />
                  </g>
                  <text x="40" y="372" fontFamily="Poppins,sans-serif" fontSize="12.5" fill="#5A4F60">07:12</text>
                  <text x="480" y="372" fontFamily="Poppins,sans-serif" fontSize="12.5" fill="#5A4F60" textAnchor="end">18:40</text>
                </svg>
                <p className="art-cap">One tap turns a chapter into narration — no booth, no recording, just play.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7 · COLLECTION STRIP */}
        <section className="section-top" aria-labelledby="coll-title">
          <div className="wrap">
            <div className="collection-head">
              <div>
                <p className="eyebrow">The Collection</p>
                <h2 id="coll-title">A few from the shelf</h2>
              </div>
              <button type="button" className="btn btn-ghost">Make your own</button>
            </div>
          </div>
          <div className="collection" role="list" aria-label="Example stories you can create">
            <article className="story-card" role="listitem">
              <svg className="story-cover" viewBox="0 0 300 150" aria-hidden="true"><rect width="300" height="150" fill="url(#e-dusk)" /><circle cx="228" cy="52" r="26" fill="#F8C8D4" opacity="0.9" /><path d="M0 120 C 70 96, 130 122, 200 104 C 250 92, 280 108, 300 100 L300 150 L0 150 Z" fill="#8E2C54" opacity="0.25" /></svg>
              <div className="story-body">
                <p className="story-genre">Contemporary</p>
                <h3>Midnight in the <em>Vineyard</em></h3>
                <p className="story-teaser">Two strangers share the last of a harvest evening, and neither wants the night to end.</p>
                <div className="story-foot">
                  <span className="heat-pips" aria-label="Heat 3 of 5"><span className="pip on" /><span className="pip on" /><span className="pip on" /><span className="pip" /><span className="pip" /></span>
                  <span className="heat-label">Heat 3</span>
                </div>
              </div>
            </article>
            <article className="story-card" role="listitem">
              <svg className="story-cover" viewBox="0 0 300 150" aria-hidden="true"><rect width="300" height="150" fill="url(#e-blush)" /><rect x="120" y="20" width="60" height="110" rx="4" fill="#FFFFFF" opacity="0.5" /><circle cx="150" cy="70" r="20" fill="#B23A6B" opacity="0.6" /></svg>
              <div className="story-body">
                <p className="story-genre">Theatre Romance</p>
                <h3>The <em>Understudy</em></h3>
                <p className="story-teaser">Rehearsals run late, the theatre empties, and a rivalry finally admits what it always was.</p>
                <div className="story-foot">
                  <span className="heat-pips" aria-label="Heat 4 of 5"><span className="pip on" /><span className="pip on" /><span className="pip on" /><span className="pip on" /><span className="pip" /></span>
                  <span className="heat-label">Heat 4</span>
                </div>
              </div>
            </article>
            <article className="story-card" role="listitem">
              <svg className="story-cover" viewBox="0 0 300 150" aria-hidden="true"><rect width="300" height="150" fill="url(#e-dusk)" /><path d="M0 110 Q 150 80 300 112 L300 150 L0 150 Z" fill="#D4A437" opacity="0.35" /><circle cx="70" cy="46" r="18" fill="#FFFFFF" opacity="0.7" /></svg>
              <div className="story-body">
                <p className="story-genre">Coastal Getaway</p>
                <h3>Salt and <em>Firelight</em></h3>
                <p className="story-teaser">A weekend cottage, a storm outside, and a slow, unhurried warmth by the fire.</p>
                <div className="story-foot">
                  <span className="heat-pips" aria-label="Heat 2 of 5"><span className="pip on" /><span className="pip on" /><span className="pip" /><span className="pip" /><span className="pip" /></span>
                  <span className="heat-label">Heat 2</span>
                </div>
              </div>
            </article>
            <article className="story-card" role="listitem">
              <svg className="story-cover" viewBox="0 0 300 150" aria-hidden="true"><rect width="300" height="150" fill="url(#e-blush)" /><rect x="40" y="40" width="220" height="70" rx="6" fill="#FFFFFF" opacity="0.4" /><circle cx="150" cy="75" r="16" fill="#C9527F" opacity="0.7" /></svg>
              <div className="story-body">
                <p className="story-genre">Office Slow Burn</p>
                <h3>After <em>Hours</em></h3>
                <p className="story-teaser">The floor is dark, the deadline is met, and two colleagues run out of reasons to leave.</p>
                <div className="story-foot">
                  <span className="heat-pips" aria-label="Heat 3 of 5"><span className="pip on" /><span className="pip on" /><span className="pip on" /><span className="pip" /><span className="pip" /></span>
                  <span className="heat-label">Heat 3</span>
                </div>
              </div>
            </article>
            <article className="story-card" role="listitem">
              <svg className="story-cover" viewBox="0 0 300 150" aria-hidden="true"><rect width="300" height="150" fill="url(#e-dusk)" /><path d="M40 120 L150 40 L260 120 Z" fill="#FFFFFF" opacity="0.25" /><circle cx="150" cy="90" r="14" fill="#B23A6B" opacity="0.65" /></svg>
              <div className="story-body">
                <p className="story-genre">Historical</p>
                <h3>The <em>Cartographer</em></h3>
                <p className="story-teaser">A commission, a long correspondence, and a meeting that has been years in the ink.</p>
                <div className="story-foot">
                  <span className="heat-pips" aria-label="Heat 2 of 5"><span className="pip on" /><span className="pip on" /><span className="pip" /><span className="pip" /><span className="pip" /></span>
                  <span className="heat-label">Heat 2</span>
                </div>
              </div>
            </article>
            <article className="story-card" role="listitem">
              <svg className="story-cover" viewBox="0 0 300 150" aria-hidden="true"><rect width="300" height="150" fill="url(#e-blush)" /><circle cx="150" cy="75" r="46" fill="none" stroke="#D4A437" strokeWidth="2" /><circle cx="150" cy="75" r="18" fill="#B23A6B" opacity="0.6" /></svg>
              <div className="story-body">
                <p className="story-genre">Sci-Fi Romance</p>
                <h3><em>Static</em></h3>
                <p className="story-teaser">A long-haul crew, a quiet shift, and a confession the comms were never meant to carry.</p>
                <div className="story-foot">
                  <span className="heat-pips" aria-label="Heat 4 of 5"><span className="pip on" /><span className="pip on" /><span className="pip on" /><span className="pip on" /><span className="pip" /></span>
                  <span className="heat-label">Heat 4</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* 8 · HOW IT WORKS — timeline */}
        <section className="section-top" id="how" aria-labelledby="how-title">
          <div className="wrap">
            <p className="eyebrow" style={{ textAlign: 'center' }}>The Process</p>
            <h2 id="how-title" style={{ textAlign: 'center', fontSize: 'clamp(2.1rem,4.4vw,3.3rem)' }}>From a single idea to your story</h2>
            <ol className="timeline">
              <li className="reveal">
                <span className="tl-num" aria-hidden="true">1</span>
                <h3>Describe the two of them</h3>
                <p>Name your fictional adults, sketch their looks and history, and set the dynamic — a first spark, a reunion, a long-simmering will-they-won&apos;t-they. Everything starts from your imagination.</p>
              </li>
              <li className="reveal d1">
                <span className="tl-num" aria-hidden="true">2</span>
                <h3>Set the scene and the mood</h3>
                <p>Choose the setting and the register, from tender and romantic to playful and bold. Then move the heat dial to exactly where you want it. Nothing goes further than you decide.</p>
              </li>
              <li className="reveal d2">
                <span className="tl-num" aria-hidden="true">3</span>
                <h3>Compose and read</h3>
                <p>The AI erotic story generator returns a complete, tasteful chapter in seconds, with an optional illustration. Read it in private, right away.</p>
              </li>
              <li className="reveal d3">
                <span className="tl-num" aria-hidden="true">4</span>
                <h3>Refine, listen, and keep</h3>
                <p>Edit any line, regenerate a beat, or turn the chapter into audio narration. Save what you love. It is yours, and it stays private by default.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* 9 · STAT BAND */}
        <section className="stat-band" aria-labelledby="stat-title">
          <div className="wrap">
            <p className="eyebrow">By the Numbers</p>
            <h2 id="stat-title">Written for readers who wanted their own story</h2>
            <p className="stat-intro">Hundreds of thousands of adults now write the sensual fiction they could never quite find on a shelf.</p>
            <div className="stat-grid">
              <div className="stat reveal">
                <span className="n" data-count="522" data-suffix="K+">522K+</span>
                <span className="l">readers and writers</span>
              </div>
              <div className="stat reveal d1">
                <span className="n" data-count="10" data-suffix="M+">10M+</span>
                <span className="l">stories composed</span>
              </div>
              <div className="stat reveal d2">
                <span className="n" data-count="49" data-divide="10" data-suffix="/5">4.9/5</span>
                <span className="l">average reader rating</span>
              </div>
              <div className="stat reveal d3">
                <span className="n" data-count="100" data-suffix="%">100%</span>
                <span className="l">private by default</span>
              </div>
            </div>
          </div>
        </section>

        {/* 10 · HEAT CONTROL */}
        <section aria-labelledby="heat-title">
          <div className="wrap">
            <div className="heat-wrap">
              <p className="eyebrow">You hold the dial</p>
              <h2 id="heat-title">Heat is a setting, <em>not a surprise</em></h2>
              <p>Every story stays exactly as warm as you want it. Slide from sweet and suggestive to something bolder, scene by scene, and change your mind whenever you like. The writing stays tasteful and character driven at every level.</p>
              <div className="heat-panel reveal">
                <svg className="heat-svg" viewBox="0 0 800 160" role="img" aria-label="A heat scale from Sweet to Intense with the marker set near the middle">
                  <line x1="60" y1="80" x2="740" y2="80" stroke="#E6E0D8" strokeWidth="8" strokeLinecap="round" />
                  <line x1="60" y1="80" x2="470" y2="80" stroke="url(#e-gold)" strokeWidth="8" strokeLinecap="round" />
                  <g fontFamily="Poppins,sans-serif" fontSize="15" fill="#5A4F60" textAnchor="middle">
                    <circle cx="60" cy="80" r="7" fill="#D4A437" />
                    <text x="60" y="120">Sweet</text>
                    <circle cx="263" cy="80" r="7" fill="#D4A437" />
                    <text x="263" y="120">Warm</text>
                    <circle cx="470" cy="80" r="13" fill="#B23A6B" stroke="#FFFFFF" strokeWidth="3" />
                    <text x="470" y="122" fill="#8E2C54" fontWeight="600">Steamy</text>
                    <circle cx="673" cy="80" r="7" fill="#E6E0D8" />
                    <text x="673" y="120">Intense</text>
                  </g>
                  <text x="470" y="40" fontFamily="Cormorant Garamond,Georgia,serif" fontStyle="italic" fontSize="22" fill="#B23A6B" textAnchor="middle">you are here</text>
                </svg>
                <div className="heat-legend">
                  <span><b>Sweet</b> — longing, tension, a first touch</span>
                  <span><b>Steamy</b> — passionate, suggestive, tasteful</span>
                  <span><b>Intense</b> — bolder, still consent-first</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11 · STANDALONE PULL QUOTE */}
        <section aria-label="Reader reflection">
          <div className="wrap">
            <div className="pull-solo">
              <blockquote className="pull" style={{ maxWidth: '30ch', fontSize: 'clamp(1.9rem,4vw,3.1rem)' }}>
                Finally, spicy fiction that feels like it was written for me, and only me.
                <cite>— Verified user</cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* 12 · COMPARISON TABLE */}
        <section className="section-top" aria-labelledby="cmp-title">
          <div className="wrap">
            <p className="eyebrow">A Considered Comparison</p>
            <h2 id="cmp-title" style={{ fontSize: 'clamp(2rem,4vw,3.1rem)', marginBottom: '24px' }}>Why a purpose-built writer reads warmer</h2>
            <div className="cmp-wrap reveal">
              <table className="cmp">
                <caption className="eyebrow" style={{ padding: '14px 20px', color: 'var(--ink-soft)' }}>My Spicy Vanilla vs. a general chatbot</caption>
                <thead>
                  <tr>
                    <th scope="col">What matters</th>
                    <th scope="col" className="col-us">My Spicy Vanilla</th>
                    <th scope="col">General chatbots</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Writes adult romance without refusing</th>
                    <td className="col-us yes">Yes, adults 18+</td>
                    <td className="no">Usually blocked</td>
                  </tr>
                  <tr>
                    <th scope="row">User-controlled heat level</th>
                    <td className="col-us yes">Yes, scene by scene</td>
                    <td className="no">Inconsistent</td>
                  </tr>
                  <tr>
                    <th scope="row">Original illustrations per story</th>
                    <td className="col-us yes">Yes, included</td>
                    <td className="no">No</td>
                  </tr>
                  <tr>
                    <th scope="row">Audio narration</th>
                    <td className="col-us yes">Yes, expressive voices</td>
                    <td className="no">No</td>
                  </tr>
                  <tr>
                    <th scope="row">Holds character and mood across chapters</th>
                    <td className="col-us yes">Yes, stays consistent</td>
                    <td className="no">Forgets between sessions</td>
                  </tr>
                  <tr>
                    <th scope="row">Consent-first, adults-only framing</th>
                    <td className="col-us yes">Yes, always</td>
                    <td className="no">General purpose</td>
                  </tr>
                  <tr>
                    <th scope="row">Private by default</th>
                    <td className="col-us yes">Yes, only you see it</td>
                    <td className="no">Varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 13 · WHAT'S INSIDE — feature grid */}
        <section aria-labelledby="inside-title">
          <div className="wrap">
            <p className="eyebrow">In Every Issue</p>
            <h2 id="inside-title" style={{ fontSize: 'clamp(2rem,4vw,3.1rem)' }}>What is inside every story</h2>
            <div className="inside-grid">
              <article className="feat reveal">
                <span className="fi"><svg aria-hidden="true"><use href="#i-feather" /></svg></span>
                <h3>Personalized writing</h3>
                <p>Your cast, your setting, your mood. Each story is composed for you alone and reads like it was written to order — because it was.</p>
              </article>
              <article className="feat reveal d1">
                <span className="fi"><svg aria-hidden="true"><use href="#i-image" /></svg></span>
                <h3>Original illustrations</h3>
                <p>Tasteful, atmospheric artwork tuned to your scene, framed with the beat it belongs to rather than dropped in as decoration.</p>
              </article>
              <article className="feat reveal d2">
                <span className="fi"><svg aria-hidden="true"><use href="#i-headphones" /></svg></span>
                <h3>Audio narration</h3>
                <p>Turn any chapter into warm, expressive audio, with a softer ASMR option for the quiet moments. Read, listen, or both.</p>
              </article>
              <article className="feat reveal">
                <span className="fi"><svg aria-hidden="true"><use href="#i-sliders" /></svg></span>
                <h3>Heat you control</h3>
                <p>A dial from sweet to intense that only you move. Change it scene by scene, and the story follows without ever going further than you allow.</p>
              </article>
              <article className="feat reveal d1">
                <span className="fi"><svg aria-hidden="true"><use href="#i-lock" /></svg></span>
                <h3>Private by design</h3>
                <p>Nothing is public unless you choose to share it. Your stories are visible only to you, from the first prompt to the final draft.</p>
              </article>
              <article className="feat reveal d2">
                <span className="fi"><svg aria-hidden="true"><use href="#i-edit" /></svg></span>
                <h3>Edit and regenerate</h3>
                <p>Nudge a line, slow a middle, or ask for a fresh take. Built-in editing lets you shape every version until it reads exactly how you hear it.</p>
              </article>
            </div>
            <div style={{ textAlign: 'center', marginTop: '36px' }}>
              <button type="button" className="btn btn-primary btn-lg">Start your first story free</button>
            </div>
          </div>
        </section>

        {/* 14 · VOICES / TESTIMONIALS */}
        <section className="section-top" aria-labelledby="voices-title">
          <div className="wrap">
            <p className="eyebrow">From Our Readers</p>
            <h2 id="voices-title" style={{ fontSize: 'clamp(2rem,4vw,3.1rem)' }}>Notes from the margin</h2>
            <div className="voices">
              <article className="voice reveal">
                <span className="voice-stars" aria-label="5 out of 5 stars">★★★★★</span>
                <p className="voice-body">I always found published erotica either too much or not for me. Here I set the tone myself and it lands every time. It is the first thing that ever felt written for my taste.</p>
                <span className="voice-by">Verified user <span className="tagm">· reads solo</span></span>
              </article>
              <article className="voice reveal d1">
                <span className="voice-stars" aria-label="5 out of 5 stars">★★★★★</span>
                <p className="voice-body">My partner and I build a story together on date night, keep it warm rather than graphic, and read it aloud. The narration option is lovely. It has become our little ritual.</p>
                <span className="voice-by">Verified user <span className="tagm">· reads as a couple</span></span>
              </article>
              <article className="voice reveal d2">
                <span className="voice-stars" aria-label="5 out of 5 stars">★★★★★</span>
                <p className="voice-body">The privacy is the whole reason I stayed. Nothing is public, nothing is shared, and I can write exactly the slow, tender story I want without anyone ever seeing it.</p>
                <span className="voice-by">Verified user <span className="tagm">· values privacy</span></span>
              </article>
            </div>
          </div>
        </section>

        {/* 15 · STANDARDS / SAFETY */}
        <section aria-labelledby="std-title">
          <div className="wrap">
            <p className="eyebrow">Where We Stand</p>
            <h2 id="std-title" style={{ fontSize: 'clamp(2rem,4vw,3.1rem)', marginBottom: '22px' }}>Our standards, in plain terms</h2>
            <div className="standards reveal">
              <ul>
                <li><svg aria-hidden="true"><use href="#i-users" /></svg><b>Adults only.</b> My Spicy Vanilla is for readers 18 and over, and every character is a consenting adult. That rule is the foundation the whole experience is built on.</li>
                <li><svg aria-hidden="true"><use href="#i-heart" /></svg><b>Consent-first.</b> Enthusiastic, fictional consent runs through every scene. The heat comes from tension and chemistry, never from coercion or real-world instruction.</li>
                <li><svg aria-hidden="true"><use href="#i-shield" /></svg><b>No real people.</b> There is no real-person fiction here — no celebrities, no public figures, no thinly veiled stand-ins. Every character is wholly invented.</li>
                <li><svg aria-hidden="true"><use href="#i-sliders" /></svg><b>You control the heat.</b> Nothing goes further than you decide. The temperature is yours to set and change at any point, scene by scene.</li>
                <li><svg aria-hidden="true"><use href="#i-lock" /></svg><b>Private by default.</b> Your stories are private the moment they are created. Nothing publishes on its own and nothing is shared unless you choose to.</li>
                <li><svg aria-hidden="true"><use href="#i-book" /></svg><b>Your work stays yours.</b> The original stories you create belong to you. Edit them, save them, and stay in control of your words throughout.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 16 · LONG-FORM GUIDE with drop caps */}
        <section className="section-top" aria-labelledby="guide-title">
          <div className="wrap">
            <div className="guide">
              <p className="eyebrow">The Long Read</p>
              <h2 id="guide-title">A short guide to writing sensual fiction with AI</h2>
              <p className="dc">
                Good erotic fiction has always been about anticipation more than anatomy. The scenes that stay with a reader are the ones built on wanting — on the charged pause before a first touch, on two characters who finally stop pretending. An AI erotic story generator is at its best when you treat it the same way, briefing it for mood and character rather than asking only for heat.
              </p>
              <h3>Personalization is the whole point</h3>
              <p>
                A story shelf is written for an average reader who does not exist. The magic of a personalized generator is that you can be specific about the things you actually care about — the exact dynamic, the setting that does it for you, the slow build you never find enough of — and loose about the rest. The more you tell it about the people and the mood, the closer the result lands to the scene in your head.
              </p>
              <h3>Heat levels, consent, and taste</h3>
              <p>
                Setting a heat level is not a limitation, it is authorship. Sweet and suggestive can be every bit as compelling as something bolder, and the best tools let you move between them freely. Consent-first framing is what makes the chemistry believable in the first place: characters who choose each other read warmer than characters who are simply thrown together. Every character here is a fictional adult, and the writing stays tasteful and character driven at any temperature.
              </p>
              <h3>Illustration and audio, used well</h3>
              <p>
                A picture or a narrated line can deepen a scene, but only when it earns its place. Add an illustration when a moment wants to be seen, and turn on audio when you would rather listen than read — on a quiet evening, the right voice can carry a slow story better than the page. Both are there when the scene calls for them, and easy to leave out when it does not.
              </p>
              <h3>Getting the most from the generator</h3>
              <p>
                Give it a dynamic, a setting, a mood, and one detail that matters to you, then let it draft and steer from there. Try a few openings, keep the lines that make you lean in, and rewrite the rest. A good AI co-writer follows your lead, so the more direction you bring, the more the story sounds like yours — private, tasteful, and written to your taste.
              </p>
            </div>
          </div>
        </section>

        {/* 17 · FAQ */}
        <section className="section-top" id="faq" aria-labelledby="faq-title">
          <div className="wrap">
            <p className="eyebrow" style={{ textAlign: 'center' }}>Questions & Answers</p>
            <h2 id="faq-title" style={{ textAlign: 'center', fontSize: 'clamp(2.1rem,4.4vw,3.3rem)' }}>Before you begin</h2>
            <div className="faq">
              <details open>
                <summary>What is an AI erotic story generator?</summary>
                <p>An AI erotic story generator turns a short prompt into a finished sensual story. You choose the characters, the setting, and the mood, and the AI writes tasteful scenes to match. My Spicy Vanilla is built for adults 18 and over, with original illustrations and optional audio narration on top of the text, and you control the heat level throughout.</p>
              </details>
              <details>
                <summary>Do I control how explicit the stories are?</summary>
                <p>Yes. You set the temperature scene by scene, from sweet and suggestive to more intense. The story follows the level you choose and stays character driven rather than clinical. You can dial it up or down at any point and regenerate a scene until it reads the way you want.</p>
              </details>
              <details>
                <summary>Are my stories private?</summary>
                <p>Yes. Every story is private by default and visible only to you unless you choose to share it. Nothing is posted to a public feed, so you can read and write for yourself with no audience looking over your shoulder.</p>
              </details>
              <details>
                <summary>Are all the characters fictional and adults?</summary>
                <p>Always. Every character is fully fictional and a consenting adult over 18. My Spicy Vanilla does not create stories about real people, and consent runs through every scene. The heat comes from tension and chemistry, never from coercion.</p>
              </details>
              <details>
                <summary>Can I add illustrations and audio narration?</summary>
                <p>Yes. Each story can arrive with original illustrations tuned to the scene, and any story can be turned into warm, expressive audio narration with softer ASMR options. You can read, listen, or both, whenever it suits you.</p>
              </details>
              <details>
                <summary>Is My Spicy Vanilla free to start?</summary>
                <p>Yes. My Spicy Vanilla is free to start with no payment required. Optional upgrades add longer stories, more illustrations, and audio narration when you want them.</p>
              </details>
              <details>
                <summary>Who is the erotic story generator for?</summary>
                <p>It is for couples and solo readers 18 and over who want sensual fiction written to their own taste. Whether you want a slow, suggestive romance or something bolder, you shape the characters, the mood, and the heat. Every character is fictional and an adult.</p>
              </details>
              <details>
                <summary>How is this different from a general chatbot?</summary>
                <p>General chatbots often refuse romance prompts or flatten the mood into something safe. My Spicy Vanilla is purpose-built for adult sensual fiction, so it holds character voice, pacing, and tension across a full story, adds original illustrations and audio narration, and keeps everything private by default within a consent-first, adults-only scope.</p>
              </details>
            </div>
          </div>
        </section>

        {/* 18 · CLOSING CTA */}
        <section className="cta-final" aria-labelledby="final-title">
          <div className="wrap">
            <h2 id="final-title">Your first story is <em>waiting</em></h2>
            <p>Describe the two of them, set the mood, and read a tasteful, illustrated chapter in seconds. Join 522K+ readers writing the sensual fiction they always wanted — free to start, private by design, with the heat set entirely by you.</p>
            <button type="button" className="btn btn-primary btn-lg">Start My Story — Free</button>
          </div>
        </section>
      </main>

      <footer>
        <div className="foot">
          <p className="foot-brand">My Spicy <em>Vanilla</em></p>
          <nav className="foot-nav" aria-label="Footer navigation">
            <a href="/">Home</a>
            <a href="/ai-fanfiction-generator/">AI Fanfiction Generator</a>
            <a href="/ai-erotic-story-generator/">AI Erotic Story Generator</a>
            <a href="/ai-femdom-story-generator/">AI Femdom Story Generator</a>
            <a href="/ai-pegging-story-generator/">AI Pegging Story Generator</a>
            <a href="/ai-cuckold-story-generator/">AI Cuckold Story Generator</a>
            <FooterSiteLinks />
          </nav>
          <p>© <FooterYear /> My Spicy Vanilla. All rights reserved. All characters are fictional and 18+. <span className="age-badge">18+ Adults Only</span></p>
          <p><strong>Affiliate disclosure:</strong> This page contains affiliate links. If you sign up through them, we may earn a commission at no extra cost to you.</p>
        </div>
      </footer>

      <div className="sticky-cta">
        <button type="button" className="btn btn-primary">Start My Story — Free</button>
      </div>

      <RevealOnScroll />
      <StatCounters duration={1500} />
    </>
  );
}
