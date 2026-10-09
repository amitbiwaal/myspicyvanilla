import type { Metadata, Viewport } from 'next';
import SiteNav from '../components/SiteNav';
import FooterSiteLinks from '../components/FooterSiteLinks';
import FooterYear from '../components/FooterYear';
import RevealOnScroll from '../components/RevealOnScroll';
import StatCounters from '../components/StatCounters';
import './femdom.css';

export const metadata: Metadata = {
  title: 'AI Femdom Story Generator | My Spicy Vanilla',
  description:
    'Create private, consent-first AI femdom stories. Craft female-led power exchange fiction with negotiated limits, safe words, and an intensity dial you control.',
  keywords:
    'AI femdom story generator, femdom fiction AI, female domination stories, Domme story writer, female led relationship stories, power exchange fiction, femdom story generator',
  authors: [{ name: 'My Spicy Vanilla' }],
  alternates: { canonical: 'https://myspicyvanilla.net/ai-femdom-story-generator/' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  icons: {
    icon: [
      { url: '/images/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/images/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    title: 'AI Femdom Story Generator | My Spicy Vanilla',
    description:
      'A female-led AI story generator for consensual power exchange fiction. Negotiate the scene, set safe words and limits, and command the intensity. Free to start, private by design.',
    url: 'https://myspicyvanilla.net/ai-femdom-story-generator/',
    siteName: 'My Spicy Vanilla',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://myspicyvanilla.net/images/og-share.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Femdom Story Generator | My Spicy Vanilla',
    description:
      'Write female-led power exchange fiction on your terms. Negotiated limits, safe words, aftercare, and an intensity dial you control. Free to start, private by design.',
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
      'My Spicy Vanilla is an adults-only AI story generator for tasteful, consent-first fiction, including female-led power exchange stories.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AI Femdom Story Generator | My Spicy Vanilla',
    applicationCategory: 'EntertainmentApplication',
    operatingSystem: 'Web',
    url: 'https://myspicyvanilla.net/ai-femdom-story-generator/',
    description:
      'A female-led AI story generator for consensual power exchange fiction. Negotiate the scene, set limits and safe words, choose aftercare, and control the intensity dial. Adults 18+ only.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1840',
      bestRating: '5',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://myspicyvanilla.net/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'AI Femdom Story Generator',
        item: 'https://myspicyvanilla.net/ai-femdom-story-generator/',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an AI femdom story generator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is a tool that turns your prompt into a finished female-led power exchange story. You describe the Domme, the dynamic, the limits, and the mood, and the AI writes a private, tasteful scene for you. My Spicy Vanilla is built for adults 18+, with a consent-first frame and an intensity dial you control.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is femdom fiction consensual and safe here?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Every scene is fiction between consenting adults. You negotiate the dynamic up front, set hard and soft limits, choose a safe word, and aftercare is written into the arc. Nothing is coercive and nothing depicts non-consent.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I control how intense the story gets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Completely. The intensity dial runs from tender and suggestive to firm and commanding, and you set it scene by scene. You can turn it down, pause, or change direction at any time. You hold the dial the whole way through.',
        },
      },
      {
        '@type': 'Question',
        name: 'What kinds of female-led dynamics can I write?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can explore Domme and submissive dynamics, female-led relationships, keyholding, service and praise, tease and denial, protocol and ritual, and power exchange in modern or fantasy settings. Every character is a fictional adult and every dynamic is consensual.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are the characters real people?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. My Spicy Vanilla does not write about real people, celebrities, or public figures. Every character is fictional, original, and an adult over 18. You invent the cast and the world around them.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is My Spicy Vanilla private?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Your stories are private by default and visible only to you unless you choose to share them. Nothing is posted to a public feed. You write for yourself, discreetly.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to be experienced with femdom to use it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not at all. The generator explains dynamics as you go, suggests negotiated limits, and keeps the intensity where you set it. Beginners can start soft and curious, while experienced readers can dial in specific protocol and pacing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it free to start?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. My Spicy Vanilla is free to start with no payment required. Optional upgrades add longer stories, more scenes, illustrations, and audio narration when you want them.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can a general chatbot write femdom fiction instead?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most general chatbots refuse mature romance or flatten the dynamic into something generic. My Spicy Vanilla is purpose-built for adult, consent-first power exchange fiction, so it holds tone, persona, and pacing across a full story and keeps everything private.',
        },
      },
    ],
  },
];

export default function FemdomPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
      />
      {jsonLd.map((o, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(o) }}
        />
      ))}

      <SiteNav current="femdom" ctaText="Take Command" />

      {/* Icon sprite */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
        <defs>
          <symbol id="i-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z" />
            <path d="M9 12l2 2 4-4.5" />
          </symbol>
          <symbol id="i-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="10.5" width="14" height="9.5" />
            <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
          </symbol>
          <symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12.5l4 4 10-11" />
          </symbol>
          <symbol id="i-sliders" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
            <circle cx="15" cy="7" r="2.4" fill="currentColor" stroke="none" />
            <circle cx="9" cy="12" r="2.4" fill="currentColor" stroke="none" />
            <circle cx="17" cy="17" r="2.4" fill="currentColor" stroke="none" />
          </symbol>
          <symbol id="i-crown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 8l3.6 3.6L12 5l4.4 6.6L20 8l-1.6 10H5.6z" />
          </symbol>
          <symbol id="i-layers" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l8 4.5-8 4.5-8-4.5z" />
            <path d="M4 12l8 4.5 8-4.5" />
          </symbol>
          <symbol id="i-mic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="3" width="6" height="11" rx="3" />
            <path d="M6 11a6 6 0 0 0 12 0M12 17v4" />
          </symbol>
          <symbol id="i-edit" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 20h4L18 10l-4-4L4 16z" />
            <path d="M13.5 6.5l4 4" />
          </symbol>
          <symbol id="i-key" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="8" cy="8" r="4" />
            <path d="M11 11l8 8M16.5 16.5l2-2M18.5 18.5l2-2" />
          </symbol>
          <symbol id="i-scale" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 4v15M8 20h8M5 8h14M5 8l-2.5 5.5h5zM19 8l-2.5 5.5h5z" />
          </symbol>
          <symbol id="i-heart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20C6 16 3 12 3 8.5A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 9 1.5C21 12 18 16 12 20z" />
          </symbol>
          <symbol id="i-eye" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z" />
            <circle cx="12" cy="12" r="3" />
          </symbol>
          <symbol id="i-flame" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3c1 4 5 5 5 9a5 5 0 0 1-10 0c0-2 1-3 2-4 .5 2 2 2 2 2 0-3-1-5 1-7z" />
          </symbol>
        </defs>
      </svg>

      <main className="fd" id="top">
        {/* ===================== HERO ===================== */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div>
              <span className="hero-kicker">My Spicy Vanilla · Female-Led Fiction</span>
              <h1 id="hero-title">
                AI Femdom Story Generator
                <em>She sets the terms.</em>
              </h1>
              <p className="hero-lede">
                Write tasteful, female-led power exchange fiction where the tension is negotiated,
                the limits are yours, and the intensity is a dial you hold. Private by design, and
                built for adults who want to stay in control.
              </p>
              <div className="hero-actions">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                >
                  Take Command — Free
                </button>
                <a className="btn btn-line btn-lg" href="#c-how">
                  How It Works
                </a>
              </div>
              <ul className="hero-trust">
                <li>
                  <svg aria-hidden="true"><use href="#i-shield" /></svg> Consent-first, safe words
                </li>
                <li>
                  <svg aria-hidden="true"><use href="#i-lock" /></svg> Private by design
                </li>
                <li>
                  <svg aria-hidden="true"><use href="#i-check" /></svg> Free to start
                </li>
              </ul>
            </div>

            {/* Dominance dial panel */}
            <div className="dial-panel reveal" aria-label="Intensity control panel">
              <div className="panel-top">
                <span className="panel-tag">Intensity Console</span>
                <span className="panel-dot" aria-hidden="true"><i /><i /><i /></span>
              </div>
              <svg className="dial-svg" viewBox="0 0 400 236" role="img" aria-label="A dominance dial gauge set to a commanding intensity">
                <defs>
                  <linearGradient id="dialGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#B23A6B" />
                    <stop offset="0.55" stopColor="#C9527F" />
                    <stop offset="1" stopColor="#D4A437" />
                  </linearGradient>
                </defs>
                {/* track */}
                <path d="M40 200 A160 160 0 0 1 360 200" fill="none" stroke="rgba(244,241,236,0.14)" strokeWidth="22" strokeLinecap="butt" />
                {/* value arc ~72% */}
                <path d="M40 200 A160 160 0 0 1 360 200" fill="none" stroke="url(#dialGrad)" strokeWidth="22" strokeLinecap="round" strokeDasharray="362 520" />
                {/* ticks */}
                <g stroke="rgba(244,241,236,0.4)" strokeWidth="2">
                  <line x1="24" y1="200" x2="50" y2="200" />
                  <line x1="75.6" y1="75.6" x2="93.9" y2="93.9" />
                  <line x1="200" y1="24" x2="200" y2="50" />
                  <line x1="324.4" y1="75.6" x2="306.1" y2="93.9" />
                  <line x1="376" y1="200" x2="350" y2="200" />
                </g>
                {/* needle */}
                <line x1="200" y1="200" x2="283" y2="99" stroke="#F4F1EC" strokeWidth="4" strokeLinecap="round" />
                <circle cx="283" cy="99" r="6" fill="#D4A437" />
                <circle cx="200" cy="200" r="12" fill="#221A28" stroke="#D4A437" strokeWidth="3" />
                {/* end labels */}
                <text x="30" y="224" fill="rgba(244,241,236,0.65)" fontFamily="Oswald, sans-serif" fontSize="13" letterSpacing="1.5" textAnchor="start">TENDER</text>
                <text x="370" y="224" fill="rgba(244,241,236,0.65)" fontFamily="Oswald, sans-serif" fontSize="13" letterSpacing="1.5" textAnchor="end">UNRELENTING</text>
              </svg>
              <div className="dial-read">
                <span className="lvl">07<span>/10</span></span>
                <span className="lbl">Commanding — you set it, change it anytime</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== STAT STRIP ===================== */}
        <section className="stat-strip" aria-label="By the numbers">
          <div className="wrap">
            <div className="stat-cell">
              <span className="n" data-count="522" data-suffix="K+">522K+</span>
              <span className="k">Creators writing female-led fiction</span>
            </div>
            <div className="stat-cell">
              <span className="n" data-count="10" data-suffix="M+">10M+</span>
              <span className="k">Private stories generated</span>
            </div>
            <div className="stat-cell">
              <span className="n" data-count="100" data-suffix="%">100%</span>
              <span className="k">Private by default</span>
            </div>
            <div className="stat-cell">
              <span className="n" data-count="49" data-divide="10">4.9</span>
              <span className="k">Average creator rating ★</span>
            </div>
          </div>
        </section>

        {/* ===================== 01 · WHAT THIS DOES ===================== */}
        <section className="band band--cream" id="c-what" aria-labelledby="t-what">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-ix" aria-hidden="true">01</span>
              <div>
                <span className="sec-kicker">The Premise</span>
                <h2 className="sec-title" id="t-what">What This Generator Does</h2>
              </div>
            </div>
            <div className="rule" />
            <p className="sec-lead">
              You describe the Domme, the dynamic, and the mood you are after. The AI femdom story
              generator returns a complete, tasteful scene of female-led power exchange, written for
              you and no one else. She leads, the terms are negotiated, and you decide how far it goes.
            </p>
            <p style={{ marginTop: '18px', maxWidth: '68ch', color: 'var(--ink-soft)' }}>
              Every cast is original and fictional, every character an adult over 18. A composed
              executive who runs a household by protocol, a patient Mistress who rewards devotion, a
              partner exploring a female-led relationship for the first time — you shape the persona,
              the chemistry, and the pacing. The tool never writes about real people and never
              depicts anything coercive. It writes the version of the fantasy you negotiated, with a
              cast that belongs entirely to you.
            </p>
            <p style={{ marginTop: '14px', maxWidth: '68ch', color: 'var(--ink-soft)' }}>
              The result is private by default and made on demand. Nobody else sees the scene. So
              the confident, consent-first story you have been imagining finally gets written, in
              seconds, ready to read.
            </p>
          </div>
        </section>

        {/* ===================== 02 · HOW IT WORKS ===================== */}
        <section className="band band--dark" id="c-how" aria-labelledby="t-how">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-ix" aria-hidden="true">02</span>
              <div>
                <span className="sec-kicker">The Method</span>
                <h2 className="sec-title" id="t-how">How It Works</h2>
              </div>
            </div>
            <div className="rule rule--gold" />
            <p className="sec-lead">
              You bring the dynamic and the boundaries. The generator handles the words, and you stay
              in control of every line. Three steps take you from a blank page to a scene on your terms.
            </p>
            <div className="steps stagger">
              <div className="step reveal">
                <span className="s-n">1</span>
                <h3>Cast Her</h3>
                <p>
                  Build the Domme and her counterpart as original, fictional adults. Set her name,
                  her presence, and her style — cool and precise, warm and rewarding, or playful and
                  teasing. You define the persona that leads the scene.
                </p>
              </div>
              <div className="step reveal">
                <span className="s-n">2</span>
                <h3>Negotiate the Scene</h3>
                <p>
                  Choose the dynamic and set your limits before a word is written. Name your hard and
                  soft boundaries, pick a safe word, and select the mood. This is the negotiation that
                  makes the fantasy feel safe and yours.
                </p>
              </div>
              <div className="step reveal">
                <span className="s-n">3</span>
                <h3>Set the Dial, Generate</h3>
                <p>
                  Turn the intensity dial to where you want it and generate. Read your private scene in
                  seconds, keep what lands, and regenerate or edit any line. Turn it up, ease it down,
                  or stop — you hold the control the entire time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== 03 · THE DOMINANCE DIAL ===================== */}
        <section className="band band--ink-deep" id="c-dial" aria-labelledby="t-dial">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-ix" aria-hidden="true">03</span>
              <div>
                <span className="sec-kicker">Signature Control</span>
                <h2 className="sec-title" id="t-dial">The Dominance Dial</h2>
              </div>
            </div>
            <div className="rule rule--gold" />
            <div className="dial-explain">
              <div>
                <svg viewBox="0 0 400 236" role="img" aria-label="The dominance dial across five intensity presets" style={{ width: '100%', height: 'auto' }}>
                  <defs>
                    <linearGradient id="dialGrad2" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="#B23A6B" />
                      <stop offset="0.55" stopColor="#C9527F" />
                      <stop offset="1" stopColor="#D4A437" />
                    </linearGradient>
                  </defs>
                  <path d="M40 200 A160 160 0 0 1 360 200" fill="none" stroke="rgba(244,241,236,0.12)" strokeWidth="26" strokeLinecap="butt" />
                  <path d="M40 200 A160 160 0 0 1 360 200" fill="none" stroke="url(#dialGrad2)" strokeWidth="26" strokeLinecap="round" strokeDasharray="502 502" />
                  <g stroke="#221A28" strokeWidth="3">
                    <line x1="40" y1="200" x2="58" y2="200" />
                    <line x1="82" y1="82" x2="95" y2="95" />
                    <line x1="200" y1="40" x2="200" y2="58" />
                    <line x1="318" y1="82" x2="305" y2="95" />
                    <line x1="360" y1="200" x2="342" y2="200" />
                  </g>
                  <circle cx="200" cy="200" r="13" fill="#221A28" stroke="#D4A437" strokeWidth="3" />
                  <text x="200" y="150" fill="#F4F1EC" fontFamily="Oswald, sans-serif" fontSize="18" letterSpacing="2" textAnchor="middle">YOU HOLD IT</text>
                </svg>
              </div>
              <div className="preset-list stagger">
                <div className="preset reveal">
                  <span className="p-tick">01–02</span>
                  <div>
                    <h4>Tender and Suggestive</h4>
                    <p>Gentle authority, warm praise, and slow-building tension. All heat, nothing explicit.</p>
                  </div>
                </div>
                <div className="preset reveal">
                  <span className="p-tick">03–05</span>
                  <div>
                    <h4>Measured and Assured</h4>
                    <p>Clear direction and a confident lead. Playful teasing, gentle commands, devotion rewarded.</p>
                  </div>
                </div>
                <div className="preset reveal preset--hot">
                  <span className="p-tick">06–08</span>
                  <div>
                    <h4>Commanding</h4>
                    <p>Firm protocol and full presence. She leads decisively while limits and safe words stay in force.</p>
                  </div>
                </div>
                <div className="preset reveal preset--hot">
                  <span className="p-tick">09–10</span>
                  <div>
                    <h4>Unrelenting Intensity</h4>
                    <p>The most intense end of the spectrum, still tasteful and consent-first. Reserved for when you ask for it.</p>
                  </div>
                </div>
              </div>
            </div>
            <p style={{ marginTop: '26px', maxWidth: '70ch' }}>
              The dial is the whole point. It moves both directions, and it moves the moment you want
              it to. Set it low to explore, push it up when the scene earns it, or pull it back with a
              single click. Your safe word overrides everything, always.
            </p>
          </div>
        </section>

        {/* ===================== 04 · SCENE TILES ===================== */}
        <section className="band band--cream" id="c-scenes" aria-labelledby="t-scenes">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-ix" aria-hidden="true">04</span>
              <div>
                <span className="sec-kicker">Starting Points</span>
                <h2 className="sec-title" id="t-scenes">Scenes She Might Set</h2>
              </div>
            </div>
            <div className="rule" />
            <p className="sec-lead">
              Pick a setup and make it yours, or start from a blank page. Every tile is a tasteful,
              negotiated scenario between fictional adults — a shape to build on, not a script to follow.
            </p>
            <div className="tiles stagger">
              <article className="tile reveal">
                <span className="t-ix">SCENE 01</span>
                <h3>The Negotiation</h3>
                <p>Before anything begins, she talks it through. Limits named, a safe word chosen, expectations set with care. The scene that grounds every other.</p>
                <span className="t-tag">Consent · Trust</span>
              </article>
              <article className="tile reveal">
                <span className="t-ix">SCENE 02</span>
                <h3>Velvet Command</h3>
                <p>A composed Mistress who never raises her voice. Authority carried in a look, devotion earned through quiet, deliberate praise.</p>
                <span className="t-tag">Protocol · Praise</span>
              </article>
              <article className="tile reveal">
                <span className="t-ix">SCENE 03</span>
                <h3>The Keyholder</h3>
                <p>A dynamic built on anticipation and restraint. She sets the pace, holds the reins, and rewards patience on her own timeline.</p>
                <span className="t-tag">Tease · Denial</span>
              </article>
              <article className="tile reveal">
                <span className="t-ix">SCENE 04</span>
                <h3>Boardroom Reversal</h3>
                <p>An executive who runs the room and the evening the same way. Confident, exacting, and entirely in charge after hours.</p>
                <span className="t-tag">Power Exchange</span>
              </article>
              <article className="tile reveal">
                <span className="t-ix">SCENE 05</span>
                <h3>Her Household, Her Rules</h3>
                <p>A female-led relationship written with warmth. Everyday devotion, gentle structure, and a partnership where she leads by agreement.</p>
                <span className="t-tag">FLR · Devotion</span>
              </article>
              <article className="tile reveal">
                <span className="t-ix">SCENE 06</span>
                <h3>Aftercare Hour</h3>
                <p>The scene that closes every arc. Softness after intensity, reassurance, and the quiet return that makes the fantasy feel whole.</p>
                <span className="t-tag">Aftercare · Care</span>
              </article>
            </div>
          </div>
        </section>

        {/* ===================== 05 · THE PROTOCOL ===================== */}
        <section className="band band--dark" id="c-protocol" aria-labelledby="t-protocol">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-ix" aria-hidden="true">05</span>
              <div>
                <span className="sec-kicker">Non-Negotiable</span>
                <h2 className="sec-title" id="t-protocol">The Protocol</h2>
              </div>
            </div>
            <div className="rule rule--gold" />
            <p className="sec-lead">
              Confidence and safety are the same thing here. Six rules run underneath every female-led
              scene, and they never switch off — no matter how high the dial goes.
            </p>
            <ol className="protocol">
              <li>
                <span className="pr-n" aria-hidden="true">01</span>
                <div>
                  <h3>Negotiate First</h3>
                  <p>Every scene opens with an understanding. You name the dynamic and what it means before a single line is written, so the fantasy is agreed, not assumed.</p>
                </div>
              </li>
              <li>
                <span className="pr-n" aria-hidden="true">02</span>
                <div>
                  <h3>Set Hard and Soft Limits</h3>
                  <p>Draw the lines. Hard limits are never crossed and soft limits are approached only on your say-so. The generator honors both across the whole story.</p>
                </div>
              </li>
              <li>
                <span className="pr-n" aria-hidden="true">03</span>
                <div>
                  <h3>Choose a Safe Word</h3>
                  <p>Pick a word that stops or slows the scene instantly. It always takes priority over the narrative, the persona, and the dial. One word, full stop.</p>
                </div>
              </li>
              <li>
                <span className="pr-n" aria-hidden="true">04</span>
                <div>
                  <h3>You Hold the Dial</h3>
                  <p>Intensity is yours to move, up or down, at any moment. She leads the scene, but you lead the experience. Control never leaves your hands.</p>
                </div>
              </li>
              <li>
                <span className="pr-n" aria-hidden="true">05</span>
                <div>
                  <h3>Privacy by Default</h3>
                  <p>Your stories are private the instant they are created. Nothing publishes on its own and nothing is shared unless you decide to share it.</p>
                </div>
              </li>
              <li>
                <span className="pr-n" aria-hidden="true">06</span>
                <div>
                  <h3>Aftercare Is Written In</h3>
                  <p>Intensity closes with care. Every arc can land on reassurance and a gentle return, because good power exchange includes the comedown, not just the peak.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* ===================== 06 · WHAT YOU GET ===================== */}
        <section className="band band--cream" id="c-features" aria-labelledby="t-features">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-ix" aria-hidden="true">06</span>
              <div>
                <span className="sec-kicker">The Toolkit</span>
                <h2 className="sec-title" id="t-features">What You Get</h2>
              </div>
            </div>
            <div className="rule" />
            <p className="sec-lead">
              Everything a female-led story needs is built in. You bring the dynamic you keep
              imagining, and the generator handles the words, the persona, the heat, and the privacy.
            </p>
            <div className="spec">
              <div>
                <svg className="sp-ico" aria-hidden="true"><use href="#i-sliders" /></svg>
                <h3>Intensity Dial</h3>
                <p>Ten levels from tender to unrelenting, set scene by scene. Move it either direction at any point. The heat is always exactly where you left it.</p>
              </div>
              <div>
                <svg className="sp-ico" aria-hidden="true"><use href="#i-crown" /></svg>
                <h3>Custom Domme Personas</h3>
                <p>Design the woman who leads — cool and precise, warm and rewarding, playful and teasing. Every persona is an original, fictional adult you shape.</p>
              </div>
              <div>
                <svg className="sp-ico" aria-hidden="true"><use href="#i-scale" /></svg>
                <h3>Negotiated Limits</h3>
                <p>Set hard and soft limits and a safe word up front. The generator keeps them in force for the length of the story, every scene, every time.</p>
              </div>
              <div>
                <svg className="sp-ico" aria-hidden="true"><use href="#i-layers" /></svg>
                <h3>Any Setting</h3>
                <p>Modern boardroom, quiet household, fantasy court, or noir hotel. Drop the same dynamic into a new world and the tension shifts with it.</p>
              </div>
              <div>
                <svg className="sp-ico" aria-hidden="true"><use href="#i-mic" /></svg>
                <h3>Audio Narration</h3>
                <p>Turn any scene into narration with composed, expressive voices. Close your eyes and let a commanding read carry it, whenever you want to just listen.</p>
              </div>
              <div>
                <svg className="sp-ico" aria-hidden="true"><use href="#i-edit" /></svg>
                <h3>Rewrite Any Line</h3>
                <p>Built-in editing lets you soften a moment, sharpen a command, or ask for a new take. Steer the persona and pacing until the scene reads like yours.</p>
              </div>
            </div>
            <div style={{ marginTop: '30px' }}>
              <button
                type="button"
                className="btn btn-ink btn-lg"
              >
                Start Your First Scene — Free
              </button>
            </div>
          </div>
        </section>

        {/* ===================== 07 · DYNAMICS ===================== */}
        <section className="band band--blush" id="c-dynamics" aria-labelledby="t-dynamics">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-ix" aria-hidden="true">07</span>
              <div>
                <span className="sec-kicker">The Vocabulary</span>
                <h2 className="sec-title" id="t-dynamics">Dynamics to Explore</h2>
              </div>
            </div>
            <div className="rule" />
            <p className="sec-lead">
              Start from the female-led dynamics readers return to, then bend them around your own
              cast. Every one is consensual, tasteful, and between fictional adults 18+.
            </p>
            <div className="dyn">
              <span className="hot">Domme / Mistress</span>
              <span>Female-Led Relationship</span>
              <span className="gold">Power Exchange</span>
              <span>Service and Devotion</span>
              <span className="hot">Praise and Reward</span>
              <span>Tease and Denial</span>
              <span className="gold">Keyholding</span>
              <span>Protocol and Ritual</span>
              <span className="hot">Confident Executive</span>
              <span>Gentle Femdom</span>
              <span className="gold">Worship and Adoration</span>
              <span>Playful Brat Taming</span>
              <span>Household Authority</span>
              <span className="hot">Sensual Command</span>
              <span>First-Time Curiosity</span>
            </div>
            <p style={{ marginTop: '24px', maxWidth: '70ch', color: 'var(--ink-soft)' }}>
              Treat these as a starting vocabulary, not a menu. Stack two together, move the dynamic
              into a world of your own, or let the persona break the pattern the moment it gets
              predictable. You always define what the words mean in your story.
            </p>
          </div>
        </section>

        {/* ===================== 08 · CONSENT AND SAFETY ===================== */}
        <section className="band band--cream" id="c-consent" aria-labelledby="t-consent">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-ix" aria-hidden="true">08</span>
              <div>
                <span className="sec-kicker">Where We Stand</span>
                <h2 className="sec-title" id="t-consent">Consent, Limits, Aftercare</h2>
              </div>
            </div>
            <div className="rule" />
            <p className="sec-lead">
              Great femdom fiction is built on trust, and so is this tool. Here is exactly how My
              Spicy Vanilla handles consent, boundaries, and your privacy, so you always know where
              you stand.
            </p>
            <div className="safenote reveal">
              <h3>The Foundation</h3>
              <ul>
                <li><b>Enthusiastic Consent</b>Every scene is negotiated between fictional, consenting adults. The heat comes from choice and chemistry, never coercion. Nothing here depicts non-consent.</li>
                <li><b>Hard and Soft Limits</b>You set the lines before you begin. Hard limits are never crossed; soft limits are approached only when you invite them.</li>
                <li><b>Safe Words Always Win</b>A safe word stops or slows the scene at once. It overrides the persona, the plot, and the intensity dial, every time.</li>
                <li><b>You Control the Heat</b>The intensity dial is yours from the first line to the last. Turn it up, ease it down, or pause. Control never leaves you.</li>
                <li><b>Aftercare Named</b>Intensity is written to close with care and reassurance. The comedown is part of the story, not an afterthought.</li>
                <li><b>Adults Only, Fictional Only</b>Everyone is 18+, invented, and never a real person. My Spicy Vanilla is for readers over 18 and private by default.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================== 09 · COMPARISON ===================== */}
        <section className="band band--dark" id="c-compare" aria-labelledby="t-compare">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-ix" aria-hidden="true">09</span>
              <div>
                <span className="sec-kicker">The Difference</span>
                <h2 className="sec-title" id="t-compare">Against a General Chatbot</h2>
              </div>
            </div>
            <div className="rule rule--gold" />
            <p className="sec-lead">
              A general chatbot can help with a lot of things. Writing the confident, consent-first
              femdom fiction you actually want is rarely one of them.
            </p>
            <div className="vs-wrap reveal">
              <table className="vs">
                <thead>
                  <tr>
                    <th scope="col">Capability</th>
                    <th scope="col">My Spicy Vanilla</th>
                    <th scope="col">General Chatbots</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Writes mature female-led romance without refusing</td>
                    <td className="yes">Yes, adults 18+</td>
                    <td className="no">Usually blocked</td>
                  </tr>
                  <tr>
                    <td>Built for power exchange and femdom dynamics</td>
                    <td className="yes">Yes, at the core</td>
                    <td className="no">Not designed for it</td>
                  </tr>
                  <tr>
                    <td>Intensity dial you control scene by scene</td>
                    <td className="yes">Yes, ten levels</td>
                    <td className="no">No</td>
                  </tr>
                  <tr>
                    <td>Negotiated limits and safe words honored</td>
                    <td className="yes">Yes, always enforced</td>
                    <td className="no">Inconsistent</td>
                  </tr>
                  <tr>
                    <td>Holds a Domme persona across a full story</td>
                    <td className="yes">Yes, stays consistent</td>
                    <td className="no">Forgets between turns</td>
                  </tr>
                  <tr>
                    <td>Aftercare written into the arc</td>
                    <td className="yes">Yes, by design</td>
                    <td className="no">Not considered</td>
                  </tr>
                  <tr>
                    <td>Audio narration of your scenes</td>
                    <td className="yes">Yes, expressive voices</td>
                    <td className="no">No</td>
                  </tr>
                  <tr>
                    <td>Private by default</td>
                    <td className="yes">Yes, only you see it</td>
                    <td className="no">Varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===================== 10 · TESTIMONIALS ===================== */}
        <section className="band band--cream" id="c-voices" aria-labelledby="t-voices">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-ix" aria-hidden="true">10</span>
              <div>
                <span className="sec-kicker">In Their Words</span>
                <h2 className="sec-title" id="t-voices">From Verified Users</h2>
              </div>
            </div>
            <div className="rule" />
            <p className="sec-lead">
              These are the readers who tend to stay — specific, a little unglamorous, and honest
              about what made the difference for them.
            </p>
            <div className="voices stagger">
              <article className="voice reveal">
                <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
                <p>The negotiation step is what sold me. Naming my limits and a safe word before anything started made me relax enough to actually enjoy the fantasy. It felt considered, not careless.</p>
                <div className="who">Verified user <span>first scene</span></div>
              </article>
              <article className="voice reveal">
                <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
                <p>I set the dial low the first few times, then nudged it up once I trusted it. Being able to pull it back with one click, no drama, is the reason I kept writing. I stayed in control the whole way.</p>
                <div className="who">Verified user <span>the dial</span></div>
              </article>
              <article className="voice reveal">
                <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
                <p>Every other tool either refused or wrote something cold. This one holds the Mistress persona for a whole story and actually writes the aftercare at the end. That closing softness is why it feels complete.</p>
                <div className="who">Verified user <span>aftercare</span></div>
              </article>
            </div>
          </div>
        </section>

        {/* ===================== 11 · FORMATS ===================== */}
        <section className="band band--ink-deep" id="c-formats" aria-labelledby="t-formats">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-ix" aria-hidden="true">11</span>
              <div>
                <span className="sec-kicker">Your Way</span>
                <h2 className="sec-title" id="t-formats">Formats That Fit</h2>
              </div>
            </div>
            <div className="rule rule--gold" />
            <p className="sec-lead">
              Whether you want a single commanding scene or a slow-building female-led arc, the
              generator meets you where you already are. Every format stars fictional adults 18+.
            </p>
            <div className="formats stagger">
              <div className="format reveal">
                <span className="f-k">FORMAT 01</span>
                <h3>One-Scene Encounters</h3>
                <p>One perfect, self-contained scene. Set the dynamic, name your limits, and read a complete short story in minutes. Ideal for a quick, private read.</p>
              </div>
              <div className="format reveal">
                <span className="f-k">FORMAT 02</span>
                <h3>Ongoing FLR Sagas</h3>
                <p>Some dynamics need room to grow. Build a longer female-led arc chapter by chapter, keeping the persona and the trust consistent as the bond deepens.</p>
              </div>
              <div className="format reveal">
                <span className="f-k">FORMAT 03</span>
                <h3>Protocol Scenes</h3>
                <p>Structured, ritual-driven encounters where the rules are the point. Define the protocol, the rewards, and the pacing, and let the scene follow the order she sets.</p>
              </div>
              <div className="format reveal">
                <span className="f-k">FORMAT 04</span>
                <h3>Audio Narration</h3>
                <p>Prefer to listen? Send any scene to narration with a composed, expressive voice and play it anywhere. A commanding read, private and on your schedule.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== 12 · CRAFT ===================== */}
        <section className="band band--cream" id="c-craft" aria-labelledby="t-craft">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-ix" aria-hidden="true">12</span>
              <div>
                <span className="sec-kicker">Direct Like a Domme</span>
                <h2 className="sec-title" id="t-craft">Prompting for Better Scenes</h2>
              </div>
            </div>
            <div className="rule" />
            <p className="sec-lead">
              A good scene starts with a clear brief. The more you direct the generator, the closer it
              lands to the fantasy in your head. Four habits turn a plain idea into something worth reading.
            </p>
            <ol className="craft stagger">
              <li className="reveal">
                <span className="c-n">HABIT 01</span>
                <h3>Give her a presence</h3>
                <p>A Domme reads flat without a point of view. Tell the generator how she carries authority — through stillness, through praise, through precision. Name one thing she wants and one thing she will not tolerate, and the persona builds around it.</p>
              </li>
              <li className="reveal">
                <span className="c-n">HABIT 02</span>
                <h3>Negotiate on the page</h3>
                <p>Say the dynamic plainly and set your limits up front. Keyholding, service, tease and denial, a gentle FLR — naming it lets the generator pace the beats to match instead of guessing, and keeps the scene inside your boundaries.</p>
              </li>
              <li className="reveal">
                <span className="c-n">HABIT 03</span>
                <h3>Set the dial with intent</h3>
                <p>Decide the intensity before you generate, then adjust as you read. Start measured to find the tone, and move up only when the scene earns it. The dial is direction, so use it deliberately rather than all at once.</p>
              </li>
              <li className="reveal">
                <span className="c-n">HABIT 04</span>
                <h3>Generate, then refine</h3>
                <p>The first pass is a draft, not the finish line. Mark the line that made you lean in and steer from there. Ask for a firmer command, a softer close, or a slower build until the scene sounds like you directed it.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* ===================== 13 · GUIDE ===================== */}
        <section className="band band--blush" id="c-guide" aria-labelledby="t-guide">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-ix" aria-hidden="true">13</span>
              <div>
                <span className="sec-kicker">The Short Course</span>
                <h2 className="sec-title" id="t-guide">A Guide to Female-Led Fiction</h2>
              </div>
            </div>
            <div className="rule" />
            <div className="guide">
              <h3>What femdom fiction actually is</h3>
              <p>Femdom fiction is romantic and erotic storytelling where a woman leads the dynamic. It runs from the gentlest female-led relationship to intense, structured power exchange, and the appeal is the same across that whole range: confidence, trust, and the pleasure of a scene where roles are clear and chosen. The heat lives in the dynamic, not in graphic detail, which is why a tasteful telling can be more compelling than an explicit one.</p>

              <h3>Why negotiation and consent come first</h3>
              <p>In healthy power exchange, the person who appears to surrender control actually holds the most of it, because nothing happens without their agreement. That is why every scene here opens with negotiation. You name the dynamic, set hard and soft limits, and choose a safe word. Far from limiting the fantasy, that structure is what lets it feel safe enough to enjoy. The trust is the turn-on.</p>

              <h3>Dynamics, personas, and the range of the genre</h3>
              <p>A Domme is not a single character type. She might be a warm partner in a female-led household, a precise executive, a patient keyholder, or a playful tease. The submissive counterpart is equally varied — curious, devoted, or eager to be guided. This tool generates original, fictional adults in these roles, so you can shape any persona and dynamic without borrowing real people or copyrighted characters.</p>

              <h3>Heat, intensity, and staying in control</h3>
              <p>Good female-led fiction is built on control, and so is this generator. The intensity dial runs from tender and suggestive to firm and commanding, and you set it scene by scene. It moves both directions at any moment, and your safe word overrides everything. Intensity is something you dial in on purpose, never something that runs away from you.</p>

              <h3>Why aftercare belongs in the story</h3>
              <p>Aftercare is the care that follows intensity — reassurance, softness, and a gentle return to the everyday. In real power exchange it is essential, and good fiction honors that. Scenes here can close on aftercare so the arc feels complete rather than abrupt. The comedown is part of the fantasy, not a footnote to it.</p>

              <h3>Getting the most from the generator</h3>
              <p>Be specific about what matters and loose about the rest. Give the persona, the dynamic, a limit or two, and the intensity you want, then let it draft and use the built-in editing to steer. Try a few openings, keep the lines that make you lean in, and add audio narration when a scene earns it. A good AI co-writer follows your lead, so the more direction you bring, the more the story reads like yours.</p>
            </div>
          </div>
        </section>

        {/* ===================== 14 · FAQ ===================== */}
        <section className="band band--cream" id="c-faq" aria-labelledby="t-faq">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-ix" aria-hidden="true">14</span>
              <div>
                <span className="sec-kicker">Before You Start</span>
                <h2 className="sec-title" id="t-faq">Frequently Asked</h2>
              </div>
            </div>
            <div className="rule" />
            <div className="faq">
              <details open>
                <summary>What is an AI femdom story generator?</summary>
                <p>It is a tool that turns your prompt into a finished female-led power exchange story. You describe the Domme, the dynamic, the limits, and the mood, and the AI writes a private, tasteful scene for you. My Spicy Vanilla is built for adults 18+, with a consent-first frame and an intensity dial you control.</p>
              </details>
              <details>
                <summary>Is femdom fiction consensual and safe here?</summary>
                <p>Yes. Every scene is fiction between consenting adults. You negotiate the dynamic up front, set hard and soft limits, choose a safe word, and aftercare is written into the arc. Nothing is coercive and nothing depicts non-consent.</p>
              </details>
              <details>
                <summary>Can I control how intense the story gets?</summary>
                <p>Completely. The intensity dial runs from tender and suggestive to firm and commanding, and you set it scene by scene. You can turn it down, pause, or change direction at any time. You hold the dial the whole way through.</p>
              </details>
              <details>
                <summary>What kinds of female-led dynamics can I write?</summary>
                <p>You can explore Domme and submissive dynamics, female-led relationships, keyholding, service and praise, tease and denial, protocol and ritual, and power exchange in modern or fantasy settings. Every character is a fictional adult and every dynamic is consensual.</p>
              </details>
              <details>
                <summary>Are the characters real people?</summary>
                <p>No. My Spicy Vanilla does not write about real people, celebrities, or public figures. Every character is fictional, original, and an adult over 18. You invent the cast and the world around them.</p>
              </details>
              <details>
                <summary>Is My Spicy Vanilla private?</summary>
                <p>Yes. Your stories are private by default and visible only to you unless you choose to share them. Nothing is posted to a public feed. You write for yourself, discreetly.</p>
              </details>
              <details>
                <summary>Do I need to be experienced with femdom to use it?</summary>
                <p>Not at all. The generator explains dynamics as you go, suggests negotiated limits, and keeps the intensity where you set it. Beginners can start soft and curious, while experienced readers can dial in specific protocol and pacing.</p>
              </details>
              <details>
                <summary>Is it free to start?</summary>
                <p>Yes. My Spicy Vanilla is free to start with no payment required. Optional upgrades add longer stories, more scenes, illustrations, and audio narration when you want them.</p>
              </details>
              <details>
                <summary>Can a general chatbot write femdom fiction instead?</summary>
                <p>Most general chatbots refuse mature romance or flatten the dynamic into something generic. My Spicy Vanilla is purpose-built for adult, consent-first power exchange fiction, so it holds tone, persona, and pacing across a full story and keeps everything private.</p>
              </details>
            </div>
          </div>
        </section>

        {/* ===================== CLOSING CTA ===================== */}
        <section className="cta-final" aria-labelledby="final-title">
          <div className="wrap">
            <h2 id="final-title" className="reveal">She is ready when you are</h2>
            <p className="reveal">
              Negotiate the scene, set your limits, and command the intensity. Join 522K+ creators
              writing female-led fiction on their own terms. Free to start, no payment required, and
              private by design from the very first line.
            </p>
            <button
              type="button"
              className="btn btn-primary btn-lg reveal"
            >
              Take Command — Free
            </button>
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
          <p>
            © <FooterYear /> My Spicy Vanilla. All rights reserved. All characters are fictional and
            18+. <span className="age-badge">18+ Adults Only</span>
          </p>
          <p>
            <strong>Affiliate disclosure:</strong> This page contains affiliate links. If you sign up
            through them, we may earn a commission at no extra cost to you.
          </p>
        </div>
      </footer>

      <div className="sticky-cta">
        <button
          type="button"
          className="btn btn-primary"
        >
          Take Command — Free
        </button>
      </div>

      <RevealOnScroll />
      <StatCounters duration={1500} />
    </>
  );
}
