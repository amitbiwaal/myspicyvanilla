import type { Metadata, Viewport } from 'next';
import SiteNav from '../components/SiteNav';
import FooterSiteLinks from '../components/FooterSiteLinks';
import FooterYear from '../components/FooterYear';
import RevealOnScroll from '../components/RevealOnScroll';
import StatCounters from '../components/StatCounters';
import './cuckold.css';

export const metadata: Metadata = {
  title: 'AI Cuckold Story Generator | My Spicy Vanilla',
  description:
    'An AI cuckold story generator for couples: craft consensual hotwife and cuckold fiction built on trust, communication, and the heat you control. Free, private.',
  keywords:
    'AI cuckold story generator, cuckold stories, hotwife fiction AI, cuckold fiction writer, couples cuckold stories, hotwife story generator, cuckold romance stories',
  authors: [{ name: 'My Spicy Vanilla' }],
  alternates: { canonical: 'https://myspicyvanilla.net/ai-cuckold-story-generator/' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  icons: {
    icon: [
      { url: '/images/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/images/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    title: 'AI Cuckold Story Generator | My Spicy Vanilla',
    description:
      'Write consensual cuckold and hotwife fiction as a couple. A private AI story generator built on trust, open communication, and heat you set yourself. Free to start.',
    url: 'https://myspicyvanilla.net/ai-cuckold-story-generator/',
    siteName: 'My Spicy Vanilla',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://myspicyvanilla.net/images/og-share.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Cuckold Story Generator | My Spicy Vanilla',
    description:
      'A private AI cuckold story generator for couples. Consensual hotwife and cuckold fiction, built on trust and communication, with the heat level you control.',
    images: ['https://myspicyvanilla.net/images/og-share.jpg'],
  },
  other: {
    rating: 'adult',
    'msapplication-TileColor': '#B23A6B',
  },
};

export const viewport: Viewport = { themeColor: '#F4F1EC' };

const faqs = [
  {
    q: 'What is an AI cuckold story generator?',
    a: 'It is a private writing tool that turns your prompt into a finished cuckold or hotwife story. You describe the couple, the dynamic, and the mood you want, and My Spicy Vanilla writes the scenes for you. Every character is a fictional adult over 18, and every story is framed around consent, trust, and open communication between partners.',
  },
  {
    q: 'Is the cuckold fantasy healthy for a couple to explore?',
    a: 'For many couples, sharing a fantasy on the page is a low-pressure way to talk about desire honestly. Fiction lets you explore the idea together without anything happening in real life. My Spicy Vanilla frames the cuckold and hotwife dynamic as consensual, communicative, and mutual, so the story stays about closeness rather than humiliation or betrayal.',
  },
  {
    q: 'Can my partner and I write stories together?',
    a: 'Yes. Many couples use it side by side, trading prompts and steering the story until it matches what you both want. You can start a story alone, hand it over, or build it together from the first line. It is designed to be a shared journal you write in as a pair.',
  },
  {
    q: 'Do I control how explicit the story gets?',
    a: 'Always. You set the heat level, from suggestive and slow to more intense, and you can change it scene by scene. The tool keeps the tone you choose and never pushes past it, so the story reads exactly as warm or as restrained as you want.',
  },
  {
    q: 'Are the stories private?',
    a: 'Yes. Your stories are private by default and visible only to you unless you deliberately choose to share them. Nothing is posted to a public feed. This is a discreet space meant for you and, if you like, your partner.',
  },
  {
    q: 'Is everything consensual and adults only?',
    a: 'Every character is a fictional adult 18 or older, and every scene is built on enthusiastic, fictional consent. My Spicy Vanilla does not write real people and does not write non-consensual or harmful scenarios. The dynamic is always a shared choice between partners.',
  },
  {
    q: 'What is the difference between cuckold and hotwife stories?',
    a: 'They describe the same consensual dynamic from different angles. A hotwife story usually centers the adored partner and her confidence, while a cuckold story leans into the devoted partner who delights in watching. My Spicy Vanilla writes both, and you can blend the framing however fits your fantasy.',
  },
  {
    q: 'Is My Spicy Vanilla free to start?',
    a: 'Yes. You can begin writing for free with no payment required. Optional upgrades add longer stories, more detail, and audio narration when you want them, but the first entries are on us.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'My Spicy Vanilla',
    url: 'https://myspicyvanilla.net/',
    logo: 'https://myspicyvanilla.net/images/logo.png',
    description:
      'My Spicy Vanilla is an adults-only AI story generator for consent-first, private, character-driven fiction.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AI Cuckold Story Generator | My Spicy Vanilla',
    applicationCategory: 'EntertainmentApplication',
    operatingSystem: 'Web',
    url: 'https://myspicyvanilla.net/ai-cuckold-story-generator/',
    description:
      'A private AI cuckold and hotwife story generator for couples, built on consent, trust, and communication, with a heat level you control.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '3184',
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
        name: 'AI Cuckold Story Generator',
        item: 'https://myspicyvanilla.net/ai-cuckold-story-generator/',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
];

export default function CuckoldPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;1,400;1,500&family=Poppins:wght@400;500;600;700&display=swap"
      />
      {jsonLd.map((o, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(o) }}
        />
      ))}

      <SiteNav current="cuckold" />

      <main id="top">
        {/* Hidden icon sprite */}
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
          <defs>
            <symbol id="j-lock" viewBox="0 0 24 24">
              <rect x="4.5" y="10.5" width="15" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </symbol>
            <symbol id="j-heart" viewBox="0 0 24 24">
              <path d="M12 20s-7-4.6-7-9.4A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7-.4c0 4.8-7 9.4-7 9.4Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </symbol>
            <symbol id="j-check" viewBox="0 0 24 24">
              <path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </symbol>
            <symbol id="j-chat" viewBox="0 0 24 24">
              <path d="M4.5 6.5h15v9h-9l-4 3.5v-3.5h-2Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </symbol>
            <symbol id="j-shield" viewBox="0 0 24 24">
              <path d="M12 3.5l7 2.6v5.2c0 4.4-3 7.6-7 9.2-4-1.6-7-4.8-7-9.2V6.1Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </symbol>
            <symbol id="j-eye" viewBox="0 0 24 24">
              <path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </symbol>
            <symbol id="j-feather" viewBox="0 0 24 24">
              <path d="M18.5 5.5c-6 0-11 4.5-12 11l1.5 1.5c6.5-1 11-6 11-12Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M8 18l6-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </symbol>
            <symbol id="j-flame" viewBox="0 0 24 24">
              <path d="M12 3.5c2.5 3 4.5 5 4.5 8.5A4.5 4.5 0 0 1 7.5 12c0-1.6.7-2.7 1.6-3.6.3 1 .9 1.6 1.7 1.8C10.2 8 11 6 12 3.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </symbol>
            <symbol id="j-clock" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M12 8v4.3l3 1.7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </symbol>
            <symbol id="j-mic" viewBox="0 0 24 24">
              <rect x="9.5" y="3.5" width="5" height="11" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M6 11a6 6 0 0 0 12 0M12 17v3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </symbol>
            <symbol id="j-edit" viewBox="0 0 24 24">
              <path d="M5 19h4l9-9-4-4-9 9Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M13 6l4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </symbol>
            <symbol id="j-users" viewBox="0 0 24 24">
              <circle cx="9" cy="8.5" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M16 6.5a3 3 0 0 1 0 6M17 14.2c2.2.5 3.8 2.3 3.8 4.8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </symbol>
          </defs>
        </svg>

        <div className="journal">
          {/* 1 — COVER / HERO */}
          <section className="cover" aria-labelledby="hero-title">
            <span className="label">The Cuckold Journal · My Spicy Vanilla</span>
            <h1 id="hero-title">
              The AI cuckold story generator for the fantasy you finally say <em>out loud</em>
            </h1>
            <p className="lede">
              Some desires are easier to write than to speak. My Spicy Vanilla turns the cuckold and hotwife fantasy into private, tasteful fiction you shape together — a shared journal built on trust, honest communication, and the heat you control.
            </p>
            <div className="actions">
              <button
                type="button"
                className="btn btn-primary btn-lg"
              >
                Start Your First Entry Free
              </button>
              <a className="btn btn-ghost" href="#how">
                How It Works
              </a>
            </div>
            <ul className="cover-marks">
              <li>
                <svg aria-hidden="true"><use href="#j-shield" /></svg> Consent-first, always
              </li>
              <li>
                <svg aria-hidden="true"><use href="#j-lock" /></svg> Private by design
              </li>
              <li>
                <svg aria-hidden="true"><use href="#j-check" /></svg> Free to start
              </li>
            </ul>

            <div className="stat-strip reveal" aria-label="Community at a glance">
              <div>
                <span className="n" data-count="522" data-suffix="K+">522K+</span>
                <span className="stat-l">writers keeping a private journal</span>
              </div>
              <div>
                <span className="n" data-count="1.8" data-suffix="M+">1.8M+</span>
                <span className="stat-l">couples’ stories written together</span>
              </div>
              <div>
                <span className="n" data-count="4.9" data-suffix="/5">4.9/5</span>
                <span className="stat-l">average reader rating</span>
              </div>
            </div>
          </section>

          <div className="column">
            {/* 2 — ENTRY ZERO / PREMISE */}
            <section className="essay" id="premise" aria-labelledby="t-premise">
              <span className="entry-tag">Entry Zero</span>
              <h2 id="t-premise">The fantasy that is really about trust</h2>
              <p className="drop">
                The cuckold fantasy is one of the most misunderstood desires there is. Stripped of the noise, it is rarely about betrayal at all. It is about wanting your partner to be wanted, about the strange and tender thrill of watching someone you love be adored, and about being so secure in each other that you can invite a little heat in and stay closer for it.
              </p>
              <p>
                My Spicy Vanilla is an AI cuckold story generator built for exactly that reading of it. You describe the couple, the dynamic, and the mood, and the tool writes a complete, character-driven story. Every character is a fictional adult, every scene is consensual, and the tone stays tasteful — closer to a confessional diary than anything crude.
              </p>
              <p>
                Think of the pages that follow as a private journal the two of you keep. You can write in it alone, hand it to your partner, or fill it in together. Whatever you write stays yours.
              </p>
              <blockquote className="pull reveal">
                “We had circled this fantasy for years and never quite said it. Writing it down together was the first time it felt like ours instead of something to be nervous about.”
                <cite>— Verified user</cite>
              </blockquote>
            </section>

            {/* 3 — THE DYNAMICS DIAGRAM */}
            <section className="essay diagram-sec" id="dynamics" aria-labelledby="t-dynamics">
              <span className="entry-tag">The Dynamic</span>
              <h2 id="t-dynamics">Three roles, one consensual arrangement</h2>
              <p className="intro">
                Every cuckold and hotwife story is really a small cast. Here is the shape of it, framed the way it should be — as a dynamic three adults choose together, with consent and communication running through the middle.
              </p>

              <figure className="diagram reveal">
                <svg viewBox="0 0 720 400" role="img" aria-labelledby="diag-title diag-desc">
                  <title id="diag-title">A consensual cuckold dynamic between three adults</title>
                  <desc id="diag-desc">
                    Three labelled role nodes — the devoted partner, the adored center, and the invited third — connected by lines marked consent, desire, and trust.
                  </desc>
                  <defs>
                    <linearGradient id="nodeGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#FCE7ED" />
                      <stop offset="1" stopColor="#F8C8D4" />
                    </linearGradient>
                  </defs>

                  {/* connecting lines */}
                  <line x1="170" y1="270" x2="360" y2="120" stroke="#C9527F" strokeWidth="1.6" strokeDasharray="2 7" strokeLinecap="round" />
                  <line x1="550" y1="270" x2="360" y2="120" stroke="#C9527F" strokeWidth="1.6" strokeDasharray="2 7" strokeLinecap="round" />
                  <line x1="170" y1="270" x2="550" y2="270" stroke="#D4A437" strokeWidth="1.6" strokeDasharray="2 7" strokeLinecap="round" />

                  {/* line labels */}
                  <text x="248" y="188" textAnchor="middle" fontFamily="Lora, serif" fontStyle="italic" fontSize="16" fill="#8E2C54">desire</text>
                  <text x="470" y="188" textAnchor="middle" fontFamily="Lora, serif" fontStyle="italic" fontSize="16" fill="#8E2C54">trust</text>
                  <text x="360" y="292" textAnchor="middle" fontFamily="Lora, serif" fontStyle="italic" fontSize="16" fill="#D4A437">consent</text>

                  {/* center node — the adored */}
                  <circle cx="360" cy="120" r="54" fill="url(#nodeGrad)" stroke="#B23A6B" strokeWidth="2" />
                  <text x="360" y="126" textAnchor="middle" fontFamily="Lora, serif" fontSize="20" fontWeight="600" fill="#8E2C54">The</text>
                  <text x="360" y="150" textAnchor="middle" fontFamily="Lora, serif" fontSize="20" fontWeight="600" fill="#8E2C54">Adored</text>
                  <text x="360" y="205" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="12.5" fill="#5A4F60">also “the hotwife / vixen”</text>

                  {/* left node — the devoted partner */}
                  <circle cx="170" cy="270" r="54" fill="url(#nodeGrad)" stroke="#B23A6B" strokeWidth="2" />
                  <text x="170" y="266" textAnchor="middle" fontFamily="Lora, serif" fontSize="18" fontWeight="600" fill="#8E2C54">The Devoted</text>
                  <text x="170" y="288" textAnchor="middle" fontFamily="Lora, serif" fontSize="18" fontWeight="600" fill="#8E2C54">Partner</text>
                  <text x="170" y="350" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="12.5" fill="#5A4F60">watches with joy · the “stag”</text>

                  {/* right node — the invited third */}
                  <circle cx="550" cy="270" r="54" fill="url(#nodeGrad)" stroke="#B23A6B" strokeWidth="2" />
                  <text x="550" y="266" textAnchor="middle" fontFamily="Lora, serif" fontSize="18" fontWeight="600" fill="#8E2C54">The Invited</text>
                  <text x="550" y="288" textAnchor="middle" fontFamily="Lora, serif" fontSize="18" fontWeight="600" fill="#8E2C54">Third</text>
                  <text x="550" y="350" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="12.5" fill="#5A4F60">a welcomed guest · the “bull”</text>
                </svg>
                <figcaption>
                  Nobody is deceived and nobody is diminished. The couple stays the center of gravity; the third is a guest they invite together. You can center any of the three when you write, and the tool keeps the arrangement warm and consensual.
                </figcaption>
              </figure>
            </section>

            {/* 4 — HOW IT WORKS */}
            <section className="essay" id="how" aria-labelledby="t-how">
              <span className="entry-tag">The Method</span>
              <h2 id="t-how">How you write an entry</h2>
              <p className="intro">
                You bring the couple and the feeling you are chasing. The generator handles the prose, and you stay in control of every beat. It takes three steps to go from a blank page to a story that sounds like yours.
              </p>
              <ol className="steps">
                <li>
                  <span className="step-n">1</span>
                  <h3>Cast the couple</h3>
                  <p>
                    Start with two fictional adults who feel like you, or like the fantasy version of you. Name them, sketch their looks, and set the tone between them — settled and secure, playful and daring, quietly intense. This is the couple the whole story protects.
                  </p>
                </li>
                <li>
                  <span className="step-n">2</span>
                  <h3>Choose the dynamic</h3>
                  <p>
                    Decide who is adored and who loves to watch, and invite the third. Set the mood, the pacing, and the framing — hotwife confidence, devoted anticipation, a slow reveal over an evening. Then set the heat level so the story matches your comfort exactly.
                  </p>
                </li>
                <li>
                  <span className="step-n">3</span>
                  <h3>Write, then steer</h3>
                  <p>
                    Generate the entry and read it in seconds. Keep the lines that land, soften the ones that do not, and ask for a warmer or cooler take. Edit any moment until the story reads the way the two of you actually imagine it.
                  </p>
                </li>
              </ol>
            </section>

            {/* 5 — WHAT YOU GET */}
            <section className="essay" id="features" aria-labelledby="t-features">
              <span className="entry-tag">What Is Inside</span>
              <h2 id="t-features">Everything the fantasy needs, and nothing it does not</h2>
              <p className="intro">
                You bring the dynamic you keep imagining; the tool handles the words, the consistency, and the quiet, private space to write in.
              </p>
              <dl className="spec">
                <div>
                  <dt><svg aria-hidden="true"><use href="#j-users" /></svg>A couple at the center</dt>
                  <dd>Every story keeps your two leads as the emotional core. The third is invited in, never a wedge. The devotion between the couple is the point, and the generator writes it that way.</dd>
                </div>
                <div>
                  <dt><svg aria-hidden="true"><use href="#j-flame" /></svg>Heat you set yourself</dt>
                  <dd>Slide from suggestive and tender to charged and intense, scene by scene. The tool holds the line you choose and never pushes past your comfort.</dd>
                </div>
                <div>
                  <dt><svg aria-hidden="true"><use href="#j-chat" /></svg>Written for couples</dt>
                  <dd>Pass the story back and forth, trade prompts, and build it together. It is designed to be a shared journal, a soft way to say what is hard to say out loud.</dd>
                </div>
                <div>
                  <dt><svg aria-hidden="true"><use href="#j-mic" /></svg>Audio narration</dt>
                  <dd>Turn any entry into warm, unhurried audio and listen together in the dark. No microphone, no editing — just press play.</dd>
                </div>
                <div>
                  <dt><svg aria-hidden="true"><use href="#j-lock" /></svg>Private by default</dt>
                  <dd>Nothing is public unless you decide to share it. Your journal is yours, discreet from the first line to the last.</dd>
                </div>
                <div>
                  <dt><svg aria-hidden="true"><use href="#j-edit" /></svg>Rewrite any line</dt>
                  <dd>Built-in editing lets you nudge a moment, cool it down, or take it a new way, until the entry reads exactly how the two of you hear it.</dd>
                </div>
              </dl>
              <button
                type="button"
                className="btn btn-primary"
              >
                Open a Blank Page
              </button>
            </section>

            {/* 6 — JOURNAL ENTRIES */}
            <section className="essay" id="entries" aria-labelledby="t-entries">
              <span className="entry-tag">From the Journal</span>
              <h2 id="t-entries">A few entries, lightly redacted</h2>
              <p className="intro">
                To show the register, here are three short openings in the tasteful, confessional voice the generator writes in. Suggestive, never graphic — the heat is in the wanting, not the detail.
              </p>

              <article className="entry reveal">
                <header className="entry-head">
                  <span className="entry-date">Friday · late</span>
                  <span className="entry-heat">heat: sensual</span>
                </header>
                <h3>The dress she chose for someone else</h3>
                <p>
                  She asked me to zip her up, and I understood the whole evening in that one small favor. The dress was not for me, and we both knew it, and the not-for-me of it was the most generous thing she had ever done. I fixed her clasp, kissed the back of her neck, and told her to have a wonderful time.
                </p>
              </article>

              <article className="entry reveal">
                <header className="entry-head">
                  <span className="entry-date">Later that week</span>
                  <span className="entry-heat">heat: charged</span>
                </header>
                <h3>The chair by the window</h3>
                <p>
                  We agreed on the rules over coffee, the way we always do — a word to pause, a look that means keep going. When the guest arrived she introduced us like old friends, and I took the chair by the window, exactly where she wanted me. Watching her be wanted, I have never felt more like hers.
                </p>
              </article>

              <article className="entry reveal">
                <header className="entry-head">
                  <span className="entry-date">Sunday morning</span>
                  <span className="entry-heat">heat: tender</span>
                </header>
                <h3>After, and only us</h3>
                <p>
                  In the morning it was just the two of us again, coffee going cold, her head on my chest while she told me every part she had loved. That is the piece nobody warns you about. The fantasy ends and the closeness stays, and you are somehow more of a couple than you were before.
                </p>
              </article>
            </section>

            {/* 7 — THE JOURNEY TIMELINE */}
            <section className="essay" id="journey" aria-labelledby="t-journey">
              <span className="entry-tag">The Journey</span>
              <h2 id="t-journey">How a couple usually gets here</h2>
              <p className="intro">
                Nobody arrives at a shared fantasy all at once. In our experience it tends to unfold as a series of small, honest steps — which is exactly what writing it out can help with.
              </p>
              <ol className="timeline">
                <li className="reveal">
                  <span className="tl-dot" aria-hidden="true" />
                  <span className="tl-when">The first admission</span>
                  <h3>Saying it exists</h3>
                  <p>One of you finally names the curiosity out loud. Writing a first entry alone can make the confession feel safe — a draft you choose whether to share.</p>
                </li>
                <li className="reveal">
                  <span className="tl-dot" aria-hidden="true" />
                  <span className="tl-when">The shared read</span>
                  <h3>Reading it together</h3>
                  <p>You hand the story over. Reading a fantasy on the page is far gentler than a cold conversation, and it gives you both a vocabulary for what you actually want.</p>
                </li>
                <li className="reveal">
                  <span className="tl-dot" aria-hidden="true" />
                  <span className="tl-when">The negotiation</span>
                  <h3>Drawing the lines</h3>
                  <p>Together you decide what thrills you and what is off the table. In fiction you can test every version risk-free, then keep only the parts you both love.</p>
                </li>
                <li className="reveal">
                  <span className="tl-dot" aria-hidden="true" />
                  <span className="tl-when">The shared authorship</span>
                  <h3>Writing as a pair</h3>
                  <p>Now it is a project. You trade prompts, steer scenes, and build a private library of stories that are unmistakably the two of you.</p>
                </li>
              </ol>
            </section>

            {/* 8 — HEAT CONTROL */}
            <section className="essay" id="heat" aria-labelledby="t-heat">
              <span className="entry-tag">The Dial</span>
              <h2 id="t-heat">You hold the temperature</h2>
              <p className="intro">
                The most important control on the page is the one that decides how far a scene goes. It is yours, and you can move it at any moment.
              </p>
              <div className="heat-scale reveal" role="img" aria-label="Heat levels from suggestive to intense, which the writer controls">
                <div className="heat-track">
                  <span className="heat-fill" />
                  <span className="heat-knob" aria-hidden="true" />
                </div>
                <ul className="heat-steps">
                  <li><b>Suggestive</b><span>a glance, a zipper, everything implied</span></li>
                  <li><b>Sensual</b><span>slow, tender, warmth over detail</span></li>
                  <li><b>Charged</b><span>confident, breathless, the good tension</span></li>
                  <li><b>Intense</b><span>as bold as you both want it</span></li>
                </ul>
              </div>
              <p>
                Wherever you set it, the story stays tasteful and character-driven rather than clinical, and it never drifts past the line you drew. Change your mind mid-story and the tone follows you.
              </p>
            </section>

            {/* 9 — CONSENT & COMMUNICATION */}
            <section className="essay accent-sec" id="trust" aria-labelledby="t-trust">
              <span className="entry-tag">The Foundation</span>
              <h2 id="t-trust">Consent is the whole plot</h2>
              <p className="intro">
                A cuckold story that ignores consent is not spicy, it is sad. Every story here is built the other way around — the thrill comes from two people who are certain of each other choosing to open a door together.
              </p>
              <div className="trust-grid">
                <div className="trust-card">
                  <svg aria-hidden="true"><use href="#j-chat" /></svg>
                  <h3>Communication first</h3>
                  <p>The stories model the conversation before the scene — the check-ins, the safe words, the yes that has to be enthusiastic to count.</p>
                </div>
                <div className="trust-card">
                  <svg aria-hidden="true"><use href="#j-heart" /></svg>
                  <h3>Never humiliating harm</h3>
                  <p>Playful teasing, yes, if you want it. Cruelty, degradation that wounds, or betrayal, never. The couple always ends closer than they began.</p>
                </div>
                <div className="trust-card">
                  <svg aria-hidden="true"><use href="#j-shield" /></svg>
                  <h3>Adults, fictional, willing</h3>
                  <p>Every character is 18 or older, invented, and choosing this freely. No real people, no coercion, no exceptions.</p>
                </div>
              </div>
              <blockquote className="pull reveal">
                “The stories actually write the conversation part — the checking in, the yes. Seeing it on the page taught us how to have it in real life.”
                <cite>— Verified user</cite>
              </blockquote>
            </section>

            {/* 10 — DYNAMICS & FLAVORS */}
            <section className="essay" id="flavors" aria-labelledby="t-flavors">
              <span className="entry-tag">The Range</span>
              <h2 id="t-flavors">Dynamics you can dial in</h2>
              <p className="intro">
                Cuckold and hotwife fiction is not one note. Start from a framing you like and bend it around your couple — stack two, or invent your own.
              </p>
              <div className="tagset">
                <span className="chip">Hotwife confidence</span>
                <span className="chip">Devoted watcher</span>
                <span className="chip">Slow reveal</span>
                <span className="chip">First time, together</span>
                <span className="chip">Long-distance retelling</span>
                <span className="chip">Stag &amp; vixen</span>
                <span className="chip">Playful teasing</span>
                <span className="chip">Anniversary gift</span>
                <span className="chip">The invited friend</span>
                <span className="chip">Whispered afterward</span>
                <span className="chip">Date night out</span>
                <span className="chip">Reunion &amp; homecoming</span>
              </div>
              <p>
                Treat these as prompts, not a menu. Pick one, describe your couple, and let the generator find the version that fits the two of you.
              </p>
            </section>

            {/* 11 — FORMATS */}
            <section className="essay" id="formats" aria-labelledby="t-formats">
              <span className="entry-tag">The Shapes</span>
              <h2 id="t-formats">Whatever length the night calls for</h2>
              <p className="intro">
                Some fantasies are a single charged scene; others are a slow arc across an evening. Every format stars fictional adults, framed with consent, at the heat you choose.
              </p>
              <dl className="spec two">
                <div>
                  <dt><svg aria-hidden="true"><use href="#j-flame" /></svg>The quick entry</dt>
                  <dd>One perfect scene in minutes. Set the dynamic, name your couple, and get a complete short story — ideal for a spark before bed.</dd>
                </div>
                <div>
                  <dt><svg aria-hidden="true"><use href="#j-clock" /></svg>The slow build</dt>
                  <dd>Let the anticipation breathe across chapters. The conversation, the planning, the evening itself, and the tender morning after.</dd>
                </div>
                <div>
                  <dt><svg aria-hidden="true"><use href="#j-mic" /></svg>The bedtime listen</dt>
                  <dd>Send any entry to audio narration and listen together in the dark, a warm voice carrying the scene while your hands stay free.</dd>
                </div>
                <div>
                  <dt><svg aria-hidden="true"><use href="#j-feather" /></svg>The shared draft</dt>
                  <dd>Start a story and pass it over. Your partner adds a line, changes a beat, and hands it back. A journal you fill in together.</dd>
                </div>
              </dl>
            </section>

            {/* 12 — COMPARISON */}
            <section className="essay" id="compare" aria-labelledby="t-compare">
              <span className="entry-tag">The Difference</span>
              <h2 id="t-compare">Why not just use a general chatbot?</h2>
              <p className="intro">
                A general assistant can help with a lot. Writing a consensual cuckold story that stays warm, in character, and un-refused is rarely one of them. Here is how a purpose-built tool compares.
              </p>
              <div className="vs-wrap reveal">
                <table className="vs">
                  <thead>
                    <tr>
                      <th scope="col">What matters</th>
                      <th scope="col">My Spicy Vanilla</th>
                      <th scope="col">General chatbots</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Writes adult cuckold themes without refusing</td>
                      <td className="yes">Yes, adults 18+</td>
                      <td className="no">Usually blocked</td>
                    </tr>
                    <tr>
                      <td>Frames the dynamic around consent</td>
                      <td className="yes">Yes, at the core</td>
                      <td className="no">Not designed for it</td>
                    </tr>
                    <tr>
                      <td>Keeps the couple emotionally central</td>
                      <td className="yes">Yes, always</td>
                      <td className="no">Hit or miss</td>
                    </tr>
                    <tr>
                      <td>Heat level you control scene by scene</td>
                      <td className="yes">Yes, a real dial</td>
                      <td className="no">Inconsistent</td>
                    </tr>
                    <tr>
                      <td>Audio narration built in</td>
                      <td className="yes">Yes, included</td>
                      <td className="no">No</td>
                    </tr>
                    <tr>
                      <td>Private by default</td>
                      <td className="yes">Yes, only you see it</td>
                      <td className="no">Varies</td>
                    </tr>
                    <tr>
                      <td>Built for couples to write together</td>
                      <td className="yes">Yes, that is the point</td>
                      <td className="no">Not designed for it</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 13 — TESTIMONIAL THREAD */}
            <section className="essay" id="voices" aria-labelledby="t-voices">
              <span className="entry-tag">Notes Left Behind</span>
              <h2 id="t-voices">In their own words</h2>
              <p className="intro">
                Short, first-person notes from readers and couples. Specific and a little unglamorous, which is why we kept them.
              </p>
              <div className="thread">
                <article className="note">
                  <div className="note-head">
                    <span className="note-user">Verified user</span>
                    <span className="note-stars" aria-label="5 out of 5 stars">★★★★★</span>
                    <span className="chip sm">wrote it first, said it after</span>
                  </div>
                  <p>I could never get the words out. I wrote one entry, left it open on the tablet, and let him find it. He climbed into bed grinning. We have talked about everything since.</p>
                </article>
                <article className="note">
                  <div className="note-head">
                    <span className="note-user">Verified user</span>
                    <span className="note-stars" aria-label="5 out of 5 stars">★★★★★</span>
                    <span className="chip sm">the heat dial</span>
                  </div>
                  <p>What sold me is that it never runs off the rails. We keep it sensual, mostly implied, and it respects that every single time. It feels safe, which is the only way this works for us.</p>
                </article>
                <article className="note">
                  <div className="note-head">
                    <span className="note-user">Verified user</span>
                    <span className="note-stars" aria-label="5 out of 5 stars">★★★★★</span>
                    <span className="chip sm">a couples’ ritual</span>
                  </div>
                  <p>Friday nights are ours now. One of us starts a story, the other adds to it, and we read the finished thing out loud. It is the closest we have been in years.</p>
                </article>
                <article className="note">
                  <div className="note-head">
                    <span className="note-user">Verified user</span>
                    <span className="note-stars" aria-label="5 out of 5 stars">★★★★★</span>
                    <span className="chip sm">private and discreet</span>
                  </div>
                  <p>I like that nothing is public. It is just a private journal on my account. No feed, no audience, no worrying who might see. Exactly what a fantasy this personal should be.</p>
                </article>
              </div>
            </section>

            {/* 14 — WHERE WE DRAW THE LINE */}
            <section className="essay note-sec" id="ethics" aria-labelledby="t-ethics">
              <span className="entry-tag">House Rules</span>
              <h2 id="t-ethics">Where we draw the line</h2>
              <p className="intro">
                Clear rules make a fantasy safe to explore. Here is exactly how My Spicy Vanilla handles characters, consent, and your privacy.
              </p>
              <div className="notice reveal">
                <ul>
                  <li><b>Adults only.</b> The site is for readers 18 and over, and every character is a consenting adult. That rule is the foundation everything else rests on.</li>
                  <li><b>Consent-first.</b> Enthusiastic, fictional consent runs through every scene. The heat comes from mutual choice, never coercion, betrayal, or harm.</li>
                  <li><b>No real people.</b> No celebrities, no public figures, no real individuals or stand-ins. Every couple and every guest is wholly invented.</li>
                  <li><b>Never harmful humiliation.</b> Playful teasing is yours to choose; degradation meant to wound is not something the tool will write.</li>
                  <li><b>Private by default.</b> Your stories are private the moment they exist. Nothing publishes on its own, and nothing joins a public feed.</li>
                  <li><b>Your work is yours.</b> The stories you create belong to you, to edit, keep, or delete, in your control from first prompt to final line.</li>
                </ul>
              </div>
            </section>

            {/* 15 — THE COMPLETE GUIDE */}
            <section className="essay" id="guide" aria-labelledby="t-guide">
              <span className="entry-tag">The Long Read</span>
              <h2 id="t-guide">A short, honest guide to the fantasy</h2>
              <p className="intro drop">
                The cuckold and hotwife fantasy has more depth than its reputation suggests. This is the short version of everything worth understanding before you write your first entry — read it once and the rest of the page reads differently.
              </p>

              <h3>What the cuckold fantasy actually is</h3>
              <p>
                At its heart, the cuckold fantasy is about compersion — the joy of seeing someone you love experience pleasure. For the devoted partner, the thrill is in their partner being desired and confident. For the adored partner, it is in being celebrated and free. Framed honestly, it is a fantasy of abundance and security, not scarcity or loss. The best stories keep the couple bonded through the whole arc.
              </p>

              <h3>Hotwife, cuckold, stag and vixen: the vocabulary</h3>
              <p>
                These words all describe the same consensual arrangement from different angles. Hotwife centers the adored partner and her confidence. Cuckold leans into the partner who loves to watch. Stag and vixen is a warmer, playful pair of terms many couples prefer because it emphasizes teamwork. The invited third is sometimes called a bull. You do not need any of the labels to write a story — pick the framing that feels like yours.
              </p>

              <h3>Why writing it down helps couples</h3>
              <p>
                Fantasies are hard to speak and easy to misread out loud. Fiction lowers the stakes. A written story is a draft you can share or keep, a way to say “this is what I picture” without demanding anything real. Couples use it to discover what genuinely excites them, to negotiate limits gently, and to build a shared language. Nothing has to happen off the page for the exercise to bring you closer.
              </p>

              <h3>Consent, limits, and keeping it kind</h3>
              <p>
                Good spicy fiction is built on consent, and so is this tool. Every character is an adult, invented, and choosing what happens next. You decide the heat and the framing, and the story stays tasteful and character-driven rather than clinical or cruel. Consent-first writing is not a limitation — it is the thing that makes the chemistry believable and the fantasy safe to enjoy.
              </p>

              <h3>Getting the most out of the generator</h3>
              <p>
                Be specific about what matters to you and loose about the rest. Give the tool your couple, the dynamic, one detail you cannot stop thinking about, and the heat level, then let it draft and steer from there. Try a few openings, keep the lines that make you lean in, and add audio when a scene earns it. The more direction you bring, the more the story sounds like the two of you wrote it.
              </p>
            </section>

            {/* 16 — FAQ */}
            <section className="essay" id="faq" aria-labelledby="t-faq">
              <span className="entry-tag">Questions</span>
              <h2 id="t-faq">Frequently asked</h2>
              <p className="intro">
                Short answers to what couples ask most before their first entry.
              </p>
              <div className="faq">
                {faqs.map((f, i) => (
                  <details key={i} open={i === 0}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>{/* /.column */}
        </div>{/* /.journal */}

        {/* 17 — CLOSING CTA */}
        <section className="cta-band" aria-labelledby="final-title">
          <div className="cta-inner">
            <span className="label label-light">One blank page away</span>
            <h2 id="final-title" className="reveal">Start the journal the two of you have been circling</h2>
            <p className="reveal">
              Cast your couple, choose the dynamic, and let the first entry come. Join 522K+ writers exploring a shared fantasy the honest way — consensual, private, and warm. Free to start, no payment required, discreet from the very first line.
            </p>
            <button
              type="button"
              className="btn btn-primary btn-lg reveal"
            >
              Write Your First Entry Free
            </button>
            <p className="cta-fine reveal">All characters are fictional and 18+. You control the heat.</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="foot">
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
            © <FooterYear /> My Spicy Vanilla. All rights reserved. All characters are fictional and 18+.{' '}
            <span className="age-badge">18+ Adults Only</span>
          </p>
          <p className="foot-aff">
            <strong>Affiliate disclosure:</strong> This page contains affiliate links. If you sign up through them, we may earn a commission at no extra cost to you.
          </p>
        </div>
      </footer>

      <div className="sticky-cta">
        <button
          type="button"
          className="btn btn-primary"
        >
          Start Your First Entry — Free
        </button>
      </div>

      <RevealOnScroll />
      <StatCounters />
    </>
  );
}
