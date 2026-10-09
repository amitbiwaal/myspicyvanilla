import type { Metadata, Viewport } from 'next';
import FanficHeader from '../components/FanficHeader';
import FooterSiteLinks from '../components/FooterSiteLinks';
import ReadingProgress from '../components/ReadingProgress';
import RevealOnScroll from '../components/RevealOnScroll';
import StatCounters from '../components/StatCounters';
import FooterYear from '../components/FooterYear';
import FanficSprite from './FanficSprite';
import PodficWave from './PodficWave';
import jsonLd from './fanfic.jsonld.json';
import './fanfic.css';

export const metadata: Metadata = {
  title: 'AI Fanfiction Generator | My Spicy Vanilla AI Fanfic Writer',
  description:
    'An AI fanfiction generator that turns your original characters, ships, and favorite tropes into illustrated fanfic chapters. Free to start, private by design.',
  keywords:
    'AI fanfiction generator, AI fanfic writer, fanfiction generator, write fanfiction with AI, fanfic AI, original character generator, ship generator, trope generator, AU story generator, illustrated fanfiction',
  authors: [{ name: 'My Spicy Vanilla' }],
  alternates: { canonical: 'https://myspicyvanilla.net/ai-fanfiction-generator/' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  icons: {
    icon: [
      { url: '/images/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/images/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    title: 'AI Fanfiction Generator | My Spicy Vanilla AI Fanfic Writer',
    description:
      'Turn your original characters, ships, and favorite tropes into illustrated fanfic chapters. An AI fanfiction generator built for fandom. Free to start, private by design.',
    url: 'https://myspicyvanilla.net/ai-fanfiction-generator/',
    siteName: 'My Spicy Vanilla',
    locale: 'en_US',
    type: 'article',
    images: [{ url: 'https://myspicyvanilla.net/images/og-share.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Fanfiction Generator | My Spicy Vanilla AI Fanfic Writer',
    description:
      'Your original characters, your ship, your tropes. An AI fanfic writer that delivers illustrated chapters in seconds, free to start.',
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

export default function FanfictionPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=Poppins:wght@400;500;600;700&display=swap"
      />
      {(jsonLd as Array<Record<string, unknown>>).map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}

      <FanficSprite />

      <ReadingProgress />

      <FanficHeader />

      <main id="top">
        <div className="shell">
          {/* MASTHEAD */}
          <section className="masthead" aria-labelledby="hero-title">
            <span className="kicker">My Spicy Vanilla · AI Fanfic Writer</span>
            <h1 id="hero-title">
              The AI fanfiction generator for the fic <em>nobody wrote</em>
            </h1>
            <p className="lede">
              Pick your tropes, cast your original characters, and watch a private chapter come to life. Every fic is yours alone, illustrated and ready to read in seconds.
            </p>
            <div className="actions">
              <button type="button" className="btn btn-primary">
                Write My Fanfic Free
              </button>
              <a className="btn btn-ghost" href="#c-how">See How It Works</a>
            </div>
            <p className="byline">
              <span><svg aria-hidden="true"><use href="#i-users" /></svg> Loved by 522K+ writers</span>
              <span><svg aria-hidden="true"><use href="#i-lock" /></svg> Private by design</span>
              <span><svg aria-hidden="true"><use href="#i-check" /></svg> No payment to start</span>
            </p>

            <article className="work" aria-label="Example of a generated fic">
              <h2 className="work-title">The Rival Who Learned My Name</h2>
              <p className="work-by">by <b>you</b> · Rowan / Ines · sorcery guild AU</p>
              <div className="tags">
                <span className="tag">#enemies-to-lovers</span>
                <span className="tag">#slow-burn</span>
                <span className="tag">#snowed-in</span>
                <span className="tag">#original-characters</span>
                <span className="tag tag-warn">#18+</span>
              </div>
              <p className="work-sum">
                Rowan swore he hated the way Ines argued back. Tonight, snowed in and out of excuses, he finally admitted the truth had always been the opposite.
              </p>
              <div className="work-meta">
                <span><svg aria-hidden="true"><use href="#i-heart" /></svg> <b>2,431</b> kudos</span>
                <span><svg aria-hidden="true"><use href="#i-bookmark" /></svg> <b>812</b> bookmarks</span>
                <span><svg aria-hidden="true"><use href="#i-book" /></svg> <b>12</b> chapters</span>
                <span><svg aria-hidden="true"><use href="#i-words" /></svg> <b>48,201</b> words</span>
              </div>
            </article>
          </section>

          <div className="doc">
            <div className="col">
              {/* CH.01 — WHAT THIS ACTUALLY DOES */}
              <section className="chap" id="c-premise" aria-labelledby="t-premise">
                <div className="chap-head">
                  <span className="chap-num" aria-hidden="true">01</span>
                  <h2 id="t-premise">What This Actually Does</h2>
                </div>
                <p className="intro">You describe the characters, the ship you want, the trope that hooks you, and the AU where it all plays out. The AI fanfiction generator takes it from there and returns a complete illustrated chapter, written for you and no one else. You stay in control of tone, pacing, and heat.</p>
                <p>Every cast is built from original characters and familiar archetypes. A sorcery guild, a rival superhero, a small-town hockey team, never a real franchise and never a real person. The tool does not write about anyone who exists. It writes the version of the trope you have been waiting for, with a cast that belongs to you.</p>
                <p>The result is private by default and made on demand. Nobody else sees the chapter, and nothing is pulled off a shelf. So the ship you always wanted finally gets the scene it deserves, in seconds, ready to read.</p>
                <blockquote className="pq reveal">“I finally got the slow burn between the two of them that no one ever wrote. It read like someone had finally told the version I always wanted.”<cite>— Verified user</cite></blockquote>
              </section>

              {/* CH.02 — HOW IT WORKS */}
              <section className="chap" id="c-how" aria-labelledby="t-how">
                <div className="chap-head">
                  <span className="chap-num" aria-hidden="true">02</span>
                  <h2 id="t-how">How It Works</h2>
                </div>
                <p className="intro">You bring the characters and the mood. The AI fanfic writer handles the rest, and you stay in control of every line. It takes three steps to go from a blank page to your ship.</p>
                <ol className="steps">
                  <li>
                    <h3>Build Your Characters</h3>
                    <p>Start with original characters that are fully your own. Set their names, their looks, and the dynamic between them. Every character is fictional and an adult, so you shape the personalities and the tension from scratch.</p>
                  </li>
                  <li>
                    <h3>Pick Your Trope and AU</h3>
                    <p>Choose the tropes you love, from enemies to lovers to a slow burn. Drop your cast into a coffee shop AU or a rival hockey team, then set the heat level so the story matches your taste.</p>
                  </li>
                  <li>
                    <h3>Generate Your Chapter</h3>
                    <p>Hit generate and read an illustrated chapter in seconds. Love a moment and keep it. Want a different beat? You can edit any line or regenerate the scene until it reads just right.</p>
                  </li>
                </ol>
              </section>

              {/* CH.03 — WHAT YOU GET */}
              <section className="chap" id="c-features" aria-labelledby="t-features">
                <div className="chap-head">
                  <span className="chap-num" aria-hidden="true">03</span>
                  <h2 id="t-features">What You Get</h2>
                </div>
                <p className="intro">Everything your story needs is built in. You bring the ship you keep imagining, and the tool handles the words, the pictures, the voice, and the quiet space to write in.</p>
                <dl className="spec">
                  <div>
                    <dt><svg aria-hidden="true"><use href="#i-users" /></svg>Ship Anyone You Invent</dt>
                    <dd>Pair your original characters however you like. Slow burn, enemies to lovers, or a reunion years in the making. Every ship you build is yours, and every character is a fictional adult you dreamed up.</dd>
                  </div>
                  <div>
                    <dt><svg aria-hidden="true"><use href="#i-flame" /></svg>Every Trope and AU</dt>
                    <dd>Fake dating, one bed, soulmate bonds, or a full alternate universe where the sorcery guild meets the vampire court. The AI fanfic writer knows the tropes you love and remixes them into something new.</dd>
                  </div>
                  <div>
                    <dt><svg aria-hidden="true"><use href="#i-image" /></svg>Illustrated Chapters</dt>
                    <dd>Each story arrives with original illustrations that match the scene and mood. See your leads, their world, and the moment everything shifts, drawn to fit the words you just read.</dd>
                  </div>
                  <div>
                    <dt><svg aria-hidden="true"><use href="#i-headphones" /></svg>Fanfic Audiobooks</dt>
                    <dd>Turn any chapter into audio narration with warm, expressive voices and soft ASMR options. Close your eyes and let the story read itself to you, whenever you want to just listen.</dd>
                  </div>
                  <div>
                    <dt><svg aria-hidden="true"><use href="#i-lock" /></svg>Private by Default</dt>
                    <dd>Your stories stay yours. Nothing is public unless you decide to share it, so you can write the ship you keep imagining without an audience looking over your shoulder.</dd>
                  </div>
                  <div>
                    <dt><svg aria-hidden="true"><use href="#i-edit" /></svg>Rewrite Any Line</dt>
                    <dd>Built-in editing lets you nudge a scene, soften a moment, or spin it a new way. Change a line, change the pacing, or ask for a fresh take until the chapter reads exactly how you hear it.</dd>
                  </div>
                </dl>
                <p>It is free to start, so you can build a ship and read the first chapter before you decide anything.</p>
                <button type="button" className="btn btn-primary">Start your first story free</button>
              </section>

              {/* CH.04 — THE SHIP BUILDER */}
              <section className="chap" id="c-builder" aria-labelledby="t-builder">
                <div className="chap-head">
                  <span className="chap-num" aria-hidden="true">04</span>
                  <h2 id="t-builder">The Ship Builder</h2>
                </div>
                <p className="intro">Every character starts as a blank page. You shape the look, the voice, and the chemistry, then watch the AI fanfic writer bring them to life. All original, all fictional, all adults 18+.</p>
                <figure className="fig reveal">
                  <svg className="art" viewBox="0 0 640 380" aria-hidden="true"><use href="#art-oc" /></svg>
                  <figcaption>The builder: a name, an archetype, the alternate universe, and a heat level you set yourself. A brooding vampire heir or a bright small-town barista, your original characters carry their own history into every scene.</figcaption>
                </figure>
                <p>From there you turn two leads into a pairing. Set the dynamic, from slow-burn rivals to a fated pair who cannot stay away. You decide the tension, the tropes, and how the ship finally clicks.</p>
                <figure className="fig reveal">
                  <svg className="art" viewBox="0 0 640 380" aria-hidden="true"><use href="#art-ship" /></svg>
                  <figcaption>Two originals become a ship. The tags you choose travel with the fic, so the tension is on the page before the first chapter opens.</figcaption>
                </figure>
              </section>

              {/* CH.05 — ILLUSTRATED CHAPTERS */}
              <section className="chap" id="c-illustrated" aria-labelledby="t-illustrated">
                <div className="chap-head">
                  <span className="chap-num" aria-hidden="true">05</span>
                  <h2 id="t-illustrated">Illustrated Chapters</h2>
                </div>

                <p className="intro">Some scenes ask to be seen. When your two leads finally stop circling each other, the AI draws original artwork tuned to that moment. The picture on the page matches the world you invented and the characters you cast.</p>

                <figure className="fig reveal">
                  <svg className="art" viewBox="0 0 640 420" aria-hidden="true"><use href="#art-scene" /></svg>
                  <figcaption>Artwork arrives attached to the chapter it belongs to, framed with the beat it illustrates rather than dropped in as decoration.</figcaption>
                </figure>

                <p>Set your own canon, a sorcery guild or a space opera crew, and get illustrations tuned to that world. The art follows your AU, not a stock template. It reads the setting, the look of your leads, and the beat where everything shifts, then draws that scene as its own image.</p>

                <figure className="fig reveal">
                  <svg className="art" viewBox="0 0 1180 420" aria-hidden="true"><use href="#art-worlds" /></svg>
                  <figcaption>One cast, three canons. Move the same two characters from a sorcery guild to a vampire court to a space opera crew, and the tropes shift with them.</figcaption>
                </figure>
              </section>

              {/* CH.06 — PODFIC WITHOUT A MIC */}
              <section className="chap" id="c-audio" aria-labelledby="t-audio">
                <div className="chap-head">
                  <span className="chap-num" aria-hidden="true">06</span>
                  <h2 id="t-audio">Podfic Without a Mic</h2>
                </div>
                <p className="intro">Reading is only half of it. Turn any story into audio and let a narrator carry the scene while your hands stay free.</p>
                <p>Your original characters get a voice, and every slow-burn ship lands a little harder when you can hear it. Pick a narrator, choose a mood, and press play. There is no recording booth and no editing software, just a story that reads itself aloud.</p>
                <div className="podfic reveal">
                  <div className="podfic-row">
                    <span className="podfic-play" aria-hidden="true"><svg><use href="#i-play" /></svg></span>
                    <PodficWave />
                    <span className="podfic-time">14:02</span>
                  </div>
                  <div className="podfic-meta">
                    <span className="tag">narrator: Ember</span>
                    <span className="tag">ASMR, unhurried</span>
                    <span className="tag">Ch 7 · the roof</span>
                  </div>
                </div>
                <dl className="spec">
                  <div>
                    <dt><svg aria-hidden="true"><use href="#i-mic" /></svg>Expressive Voices</dt>
                    <dd>Multiple narrators, from steady and cinematic to warm and close. Choose the one that fits the ship and the writer handles the pacing so the tension breathes the way good audio should.</dd>
                  </div>
                  <div>
                    <dt><svg aria-hidden="true"><use href="#i-clock" /></svg>Your Pace</dt>
                    <dd>Full stories or a single scene, ready to play in seconds. Listen on a walk, cool and composed, or let a whole slow burn unspool across an evening.</dd>
                  </div>
                  <div>
                    <dt><svg aria-hidden="true"><use href="#i-globe" /></svg>ASMR Narration</dt>
                    <dd>A softer setting for the quiet scenes, whisper-close and unhurried. Listen anywhere, private by default, with no one else on the thread.</dd>
                  </div>
                </dl>
                <p>You never touch a microphone. The narration is generated for you, so the only thing left to do is press play and listen.</p>
              </section>

              {/* CH.07 — WHY IT WORKS */}
              <section className="chap" id="c-numbers" aria-labelledby="t-numbers">
                <div className="chap-head">
                  <span className="chap-num" aria-hidden="true">07</span>
                  <h2 id="t-numbers">Why It Works</h2>
                </div>

                <p className="intro">You know the loop. You find the pairing you love, and the last update was two years ago. The blank page stares back, the tag you follow never fills, and the next chapter never comes.</p>

                <div className="numbers reveal">
                  <div>
                    <span className="n" data-count="522" data-suffix="K+">522K+</span>
                    <span className="l">writers and readers who stopped waiting for the next chapter</span>
                  </div>
                  <div>
                    <span className="n" data-count="10" data-suffix="M+">10M+</span>
                    <span className="l">stories generated once they picked up the pen themselves</span>
                  </div>
                </div>

                <p>An AI fanfiction writer changes who holds the pen. You pick the tropes, the AU, the original characters, and the slow burn you actually want. You describe the story, and it arrives.</p>

                <p>You stopped waiting for someone else to write your ship. No blank page, no abandoned WIP, no dead tag.</p>
              </section>

              {/* CH.08 — TROPES AND AUS */}
              <section className="chap" id="c-tropes" aria-labelledby="t-tropes">
                <div className="chap-head">
                  <span className="chap-num" aria-hidden="true">08</span>
                  <h2 id="t-tropes">Tropes and AUs</h2>
                </div>
                <p className="intro">Start from the setups readers love, then bend them around your original characters. Every AU, every ship, every slow reveal begins with a familiar shape you already know.</p>
                <div className="tags">
                  <span className="tag tag-lg">Enemies to Lovers</span>
                  <span className="tag tag-lg">Slow Burn</span>
                  <span className="tag tag-lg">Coffee Shop AU</span>
                  <span className="tag tag-lg">Fake Dating</span>
                  <span className="tag tag-lg">Soulmate AU</span>
                  <span className="tag tag-lg">Hurt / Comfort</span>
                  <span className="tag tag-lg">Found Family</span>
                  <span className="tag tag-lg">Rivals to Lovers</span>
                  <span className="tag tag-lg">Second Chance</span>
                  <span className="tag tag-lg">Time Travel AU</span>
                  <span className="tag tag-lg">Royalty AU</span>
                  <span className="tag tag-lg">Roommates to Lovers</span>
                </div>
                <p>Treat this list as a starting point, not a menu. Pick a trope, then make it yours. Stack two together, move the setup into a world of your own, or let your characters break the pattern the moment it gets predictable.</p>
              </section>

              {/* CH.09 — FORMATS */}
              <section className="chap" id="c-formats" aria-labelledby="t-formats">
                <div className="chap-head">
                  <span className="chap-num" aria-hidden="true">09</span>
                  <h2 id="t-formats">Formats</h2>
                </div>
                <p className="intro">The way you tell a story is personal. Whether you want a quick scene or a slow-burn saga, the AI fanfic writer meets you where you already are. Every story stars original characters, adults only, in the tropes and AU worlds you love.</p>
                <dl className="spec">
                  <div>
                    <dt><svg aria-hidden="true"><use href="#i-flame" /></svg>One-Shots</dt>
                    <dd>Sometimes you just want one perfect scene. Set the trope, name your ship, and get a complete short story in minutes. Ideal for a lunch-break read or a spark before you write your own.</dd>
                  </div>
                  <div>
                    <dt><svg aria-hidden="true"><use href="#i-clock" /></svg>Slow-Burn Multi-Chapter</dt>
                    <dd>Some tension needs room to breathe. Build a longer arc chapter by chapter, keeping your characters consistent as the pull between them grows. Enemies to lovers, fake dating, the long ache before the payoff.</dd>
                  </div>
                  <div>
                    <dt><svg aria-hidden="true"><use href="#i-headphones" /></svg>Podfic and Audio</dt>
                    <dd>Prefer to listen? Send any story to audio narration and queue it for the commute, or wind down with an ASMR reading of your favorite pairing.</dd>
                  </div>
                  <div>
                    <dt><svg aria-hidden="true"><use href="#i-gift" /></svg>Prompt Fills and Gift Fic</dt>
                    <dd>Writing something for a friend or filling a prompt? Drop in the request, tweak the details, and hand off a finished story with original illustrations. Thoughtful, private, and ready to share on your terms.</dd>
                  </div>
                </dl>
                <p>A multi-chapter fic keeps its own index, so the arc stays legible while you write it.</p>
                <ol className="chapters reveal">
                  <li><span className="ch-n">01</span><span className="ch-t">The rival who learned my name</span><span className="ch-w">3,412 words</span></li>
                  <li><span className="ch-n">02</span><span className="ch-t">Snowed in, and out of excuses</span><span className="ch-w">4,088 words</span></li>
                  <li><span className="ch-n">03</span><span className="ch-t">Everything he refused to say</span><span className="ch-w">3,970 words</span></li>
                  <li><span className="ch-n">07</span><span className="ch-t">The roof, and neither of them moving first</span><span className="ch-w">5,204 words</span></li>
                  <li><span className="ch-n">12</span><span className="ch-t">After, and the long quiet</span><span className="ch-w">4,631 words</span></li>
                </ol>
              </section>

              {/* CH.10 — PROMPTING LIKE A CO-AUTHOR */}
              <section className="chap" id="c-craft" aria-labelledby="t-craft">
                <div className="chap-head">
                  <span className="chap-num" aria-hidden="true">10</span>
                  <h2 id="t-craft">Prompting Like a Co-Author</h2>
                </div>
                <p className="intro">A good story starts with a good brief. The more you tell the generator, the closer it lands to the scene in your head. These four habits take a plain idea and turn it into something worth reading.</p>
                <ol className="steps">
                  <li>
                    <h3>Give your characters a history</h3>
                    <p>Original characters read flat when they have no past. Tell the AI who they were before the story opens. A retired duelist from a sorcery guild carries different tension than a green recruit. Name their wound, their want, and one thing they will not say out loud. The model builds the rest around it.</p>
                  </li>
                  <li>
                    <h3>Name the trope</h3>
                    <p>Tropes are shorthand your reader already loves. Say it plainly. Enemies to lovers, only one bed, slow burn, fake dating. When you name the ship dynamic up front, the fanfiction generator paces the beats to match instead of guessing. You can stack two, but pick a lead so the story keeps its shape.</p>
                  </li>
                  <li>
                    <h3>Choose the AU and the stakes</h3>
                    <p>An AU sets the rules of the world. A rival hockey team, a vampire court, a space opera crew, all pull different chemistry from the same two people. Then give them something to lose. Stakes are what make the tension land, so decide what breaks if they get close and what breaks if they do not.</p>
                  </li>
                  <li>
                    <h3>Generate, then rewrite</h3>
                    <p>The first pass is a draft, not the finish line. Read it, mark the line that made you pause, and steer from there. Ask for a hotter scene, a softer close, or a slower middle. The built-in editing tools let you shape every version, so the story ends up sounding like you wrote it with help.</p>
                  </li>
                </ol>
              </section>

              {/* CH.11 — WHY WRITERS RETURN TO TROPES */}
              <section className="chap" id="c-why-tropes" aria-labelledby="t-why-tropes">
                <div className="chap-head">
                  <span className="chap-num" aria-hidden="true">11</span>
                  <h2 id="t-why-tropes">Why Writers Return to Tropes</h2>
                </div>
                <p className="intro drop">Fanfiction is how readers become writers. You start by loving a world, a slow burn, an enemies-to-lovers arc that ended too soon, and one day you decide to keep going. Tropes are not lazy. They are a shared language. When you reach for a fake dating setup or a sorcery guild rivalry, you and your reader already agree on the rules. Every choice you make on top of that carries weight. The familiar frame is what lets the personal parts land.</p>
                <p>That is what an AI fanfic writer is good for. It removes the blank page, not the authorship. You bring the original characters, the ship you cannot stop thinking about, the AU you have been rewriting in your head. The tool drafts the scene so you can shape it, cut it, and make it yours. My Spicy Vanilla keeps your work private by default, lets you edit every line, and hands the voice back to you.</p>
                <p>The story is still written by you. You just started from something instead of nothing.</p>
                <button type="button" className="btn btn-primary">Start writing yours, free</button>
              </section>

              {/* CH.12 — WHERE WE DRAW THE LINE */}
              <section className="chap" id="c-ethics" aria-labelledby="t-ethics">
                <div className="chap-head">
                  <span className="chap-num" aria-hidden="true">12</span>
                  <h2 id="t-ethics">Where We Draw the Line</h2>
                </div>
                <p className="intro">Good stories need clear rules. Here is exactly how My Spicy Vanilla handles characters, consent, and your privacy, so you always know where you stand.</p>
                <div className="notice reveal">
                  <ul>
                    <li><b>Original Characters Only.</b> Every cast is invented for you, shaped from familiar archetypes like a sorcery-guild rival or a vampire-court heir. The tool does not reproduce, host, or copy characters from existing books, shows, or games.</li>
                    <li><b>No Real People.</b> There is no real person fiction here, no celebrities, no public figures, no thinly veiled stand-ins. The people you imagine are wholly made up and answer only to your story.</li>
                    <li><b>Adults Only.</b> My Spicy Vanilla is for readers 18 and over, and every character is a consenting adult. That rule is the foundation the whole experience is built on.</li>
                    <li><b>Consent-First.</b> Enthusiastic, fictional consent runs through every scene. The heat comes from tension, chemistry, and characters who choose each other, never from coercion or real-world instruction.</li>
                    <li><b>Privacy by Default.</b> Your stories are private the moment they are created. Nothing publishes on its own and nothing is shared to a feed unless you decide otherwise.</li>
                    <li><b>Your Work Stays Yours.</b> The original stories you generate belong to you. Edit them, save them, and stay in control of your words from the first prompt to the final draft.</li>
                  </ul>
                </div>
              </section>

              {/* CH.13 — AGAINST A GENERAL CHATBOT */}
              <section className="chap" id="c-compare" aria-labelledby="t-compare">
                <div className="chap-head">
                  <span className="chap-num" aria-hidden="true">13</span>
                  <h2 id="t-compare">Against a General Chatbot</h2>
                </div>
                <p className="intro">A general chatbot can help with a lot of things. Writing the fanfiction you actually want is rarely one of them. Here is how a purpose-built AI fanfic writer stacks up.</p>
                <div className="vs-wrap reveal">
                  <table className="vs">
                    <thead>
                      <tr>
                        <th scope="col">Feature</th>
                        <th scope="col">My Spicy Vanilla</th>
                        <th scope="col">General Chatbots</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Writes mature romance without refusing</td>
                        <td className="yes">Yes, adults 18+</td>
                        <td className="no">Usually blocked</td>
                      </tr>
                      <tr>
                        <td>Built for tropes and AUs</td>
                        <td className="yes">Yes, at the core</td>
                        <td className="no">Not designed for it</td>
                      </tr>
                      <tr>
                        <td>Original illustrations per story</td>
                        <td className="yes">Yes, included</td>
                        <td className="no">No</td>
                      </tr>
                      <tr>
                        <td>AI audio narration</td>
                        <td className="yes">Yes, AI voice narration</td>
                        <td className="no">No</td>
                      </tr>
                      <tr>
                        <td>Remembers your OCs across chapters</td>
                        <td className="yes">Yes, they stay consistent</td>
                        <td className="no">Forgets between sessions</td>
                      </tr>
                      <tr>
                        <td>Consent-first and adults-only framing</td>
                        <td className="yes">Yes, always</td>
                        <td className="no">General purpose</td>
                      </tr>
                      <tr>
                        <td>Private by default</td>
                        <td className="yes">Yes, only you see it</td>
                        <td className="no">Varies</td>
                      </tr>
                      <tr>
                        <td>Purpose-built for fandom writing</td>
                        <td className="yes">Yes, that is the point</td>
                        <td className="no">Not designed for it</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* CH.14 — FROM THE ARCHIVE */}
              <section className="chap" id="c-voices" aria-labelledby="t-voices">
                <div className="chap-head">
                  <span className="chap-num" aria-hidden="true">14</span>
                  <h2 id="t-voices">From the Archive</h2>
                </div>

                <p className="intro">These are the writers who tend to stay. Not the ones chasing a viral hit, but the reader who never posted, the fan with a pairing nobody else touches, and the person who would rather listen than read. Their notes are specific and a little unglamorous, which is why we kept them.</p>

                <div className="thread">
                  <article className="thread-item">
                    <div className="thread-head">
                      <span className="thread-user">verified user</span>
                      <span className="thread-stars" aria-label="5 out of 5 stars">★★★★★</span>
                      <span className="tag">first fic finished</span>
                    </div>
                    <p className="thread-body">I have read fanfiction for eleven years and never posted a word. I always felt too slow. Here I typed out the vampire court plot in my head, picked my two original characters, and had a real story by lunch. That is the first thing I have ever finished.</p>
                  </article>

                  <article className="thread-item">
                    <div className="thread-head">
                      <span className="thread-user">verified user</span>
                      <span className="thread-stars" aria-label="5 out of 5 stars">★★★★★</span>
                      <span className="tag">rare ship</span>
                    </div>
                    <p className="thread-body">My ship is two side characters from a small-town hockey team world that nobody else writes for. There is basically no fic for them anywhere. Now I make my own, in the exact tropes I like, and I stopped waiting on the internet to catch up.</p>
                  </article>

                  <article className="thread-item">
                    <div className="thread-head">
                      <span className="thread-user">verified user</span>
                      <span className="thread-stars" aria-label="5 out of 5 stars">★★★★★</span>
                      <span className="tag">podfic listener</span>
                    </div>
                    <p className="thread-body">The audio narration is why I stayed. I have a long commute and cannot read on the train without a headache. I generate a chapter about my space opera crew, turn on the soft ASMR voice, and just listen. It feels made for me, because it is.</p>
                  </article>
                </div>
              </section>

              {/* CH.15 — BUILT FOR FANDOM */}
              <section className="chap" id="c-fandom" aria-labelledby="t-fandom">
                <div className="chap-head">
                  <span className="chap-num" aria-hidden="true">15</span>
                  <h2 id="t-fandom">Built for Fandom</h2>
                </div>
                <p className="intro">A general chatbot writes for no one in particular. My Spicy Vanilla is an AI fanfiction generator built the other way around, for readers and writers who already know the tropes by heart. That focus changes what you get, how much heat you set, and who ever sees the result.</p>
                <h3>Written for fandom, not for everyone</h3>
                <p>You write in the archetypes you already love. Slow burn, enemies to lovers, a rival superhero and the analyst who reads him too well, all built from your original characters, your ship, your world. Most tools hand you a wall of text and stop there. Every chapter here arrives with its own illustrations, so you can see the leads you invented instead of only picturing them. Any chapter can become audio narration you play anywhere, from a soft read to something more cinematic. You can start free and pay only if you want more, which is how most of our 522K+ writers began.</p>
                <h3>Heat you control</h3>
                <p>Keep it sweet and suggestive, or turn it up. You set the temperature scene by scene, and every character stays a fictional adult you invented. No real people, no guesswork, just the pacing you want.</p>
                <h3>Yours, and private</h3>
                <p>Your stories are yours alone. Everything stays private by default, so nothing is public unless you decide to share it. Write the story you want, knowing it is only yours.</p>
              </section>

              {/* CH.16 — THE COMPLETE GUIDE */}
              <section className="chap" id="c-guide" aria-labelledby="t-guide">
                <div className="chap-head">
                  <span className="chap-num" aria-hidden="true">16</span>
                  <h2 id="t-guide">The Complete Guide</h2>
                </div>

                <p className="intro drop">Fanfiction has its own craft, and it rewards writers who understand it. This is the short version of everything worth knowing before you start, from what makes a fic land to how to brief a model so the story sounds like yours. Read it once and the rest of the page reads differently.</p>

                <h3>What fanfiction is, and what makes a fic work</h3>
                <p>Fanfiction is storytelling built on the shapes of stories you already love. It borrows the feeling of a world, the pull of a dynamic, the ache of a slow burn, and gives it somewhere new to go. A fic works when the emotional beats land, when the characters want something, and when the tension between them has room to build. The setting matters less than the wanting.</p>

                <h3>Why tropes and AUs are a shared language</h3>
                <p>Tropes are shorthand for feelings. Enemies to lovers, only one bed, fake dating, hurt and comfort: these are agreements between a writer and a reader about what kind of ride this is going to be. An AU, or alternate universe, takes a familiar dynamic and drops it into a coffee shop, a royal court, or a distant colony ship. Naming the trope and the AU gives the model a clear brief and gives you a story that hits the notes you actually came for.</p>

                <h3>Original characters vs the characters you love</h3>
                <p>This tool generates original characters and recognizable archetypes, not copyrighted names or real people. Instead of a specific wizard, you get a guarded prodigy in a sorcery guild. Instead of a branded superhero, you get a rival vigilante with a secret. That is better for you as a writer, because original characters can go anywhere the plot needs and carry any heat level. You keep the trope and the ship dynamic, and lose the legal and creative ceiling.</p>

                <h3>Heat levels, consent, and adults-only writing</h3>
                <p>Good spicy fiction is built on consent, and so is this tool. Every character is an adult, fictional, and written to choose what happens next. You set the heat, from a slow suggestive tension to something more explicit, and the story stays tasteful and character driven rather than clinical. Consent-first framing is not a limitation, it is what makes the chemistry believable.</p>

                <h3>Getting the most out of an AI fanfiction generator</h3>
                <p>Be specific about the things you care about and loose about the rest. Give the model a dynamic, a trope, an AU, and one detail that matters to you, then let it draft and use the built-in editing to steer. Try a few openings, keep the lines that make you lean in, and add illustrations or audio narration when a scene earns them. A good AI co-writer follows your lead, so the more direction you bring, the more it sounds like your story.</p>
              </section>

              {/* CH.17 — FREQUENTLY ASKED */}
              <section className="chap" id="c-faq" aria-labelledby="t-faq">
                <div className="chap-head">
                  <span className="chap-num" aria-hidden="true">17</span>
                  <h2 id="t-faq">Frequently Asked</h2>
                </div>
                <p className="intro">Short answers to the questions readers ask most before they start their first story.</p>
                <div className="faq">
                  <details open>
                    <summary>What is an AI fanfiction generator?</summary>
                    <p>An AI fanfiction generator is a tool that turns your prompt into a finished story. You pick the tropes, the characters, and the setting, and the AI writes the scenes for you. My Spicy Vanilla is an AI fanfic writer built for adult readers, with original illustrations and audio narration on top of the text.</p>
                  </details>
                  <details>
                    <summary>What is fanfiction?</summary>
                    <p>Fanfiction is fiction that plays inside a familiar style of world, using the tropes and dynamics fans love. Think enemies to lovers, slow burn, or the fake-dating setup. My Spicy Vanilla lets you write fanfiction with AI using original characters who fit those beloved patterns.</p>
                  </details>
                  <details>
                    <summary>What does AU mean in fanfiction?</summary>
                    <p>AU stands for alternate universe. It takes a dynamic you enjoy and drops it into a new setting, like a coffee-shop AU or a vampire court AU. You keep the chemistry and the trope while everything around it changes.</p>
                  </details>
                  <details>
                    <summary>What is a ship in fanfiction?</summary>
                    <p>A ship is a romantic pairing you want to see together. Fans ship characters whose tension, banter, or slow burn feels right. In My Spicy Vanilla, you build your own ship from original characters and let the AI bring the pairing to life.</p>
                  </details>
                  <details>
                    <summary>Can I write fanfiction about my favorite characters?</summary>
                    <p>My Spicy Vanilla generates original characters and archetypes rather than reproducing copyrighted ones. You cannot import a trademarked cast, but you can recreate the dynamic, the trope, and the AU with your own people. Want the rival-guild dynamic or the brooding space-opera captain? Build that archetype and the story feels just as familiar.</p>
                  </details>
                  <details>
                    <summary>Can I write fanfiction about real people?</summary>
                    <p>No. My Spicy Vanilla does not do real person fiction, so no celebrities, public figures, or real individuals. Every character is fictional, original, and an adult over 18. The focus stays on invented casts and the worlds you build around them.</p>
                  </details>
                  <details>
                    <summary>Is My Spicy Vanilla private?</summary>
                    <p>Yes. Your stories are private by default, visible only to you unless you choose to share them. Nothing you create is posted to a public feed. You write for yourself, not for a faceless audience.</p>
                  </details>
                  <details>
                    <summary>Can AI write fanfiction better than a general chatbot?</summary>
                    <p>General chatbots often refuse romance prompts or flatten the heat into something safe. My Spicy Vanilla is built for this on purpose, so it holds character voice, pacing, and tension across a full story. It also adds original illustrations, audio narration, and built-in editing that a plain chatbot does not. For adult fanfic, a purpose-built tool tends to read warmer and more consistent.</p>
                  </details>
                  <details>
                    <summary>Is My Spicy Vanilla free?</summary>
                    <p>Yes. My Spicy Vanilla is free to start with no payment required. Optional upgrades add longer stories, more illustrations, and audio narration when you want them.</p>
                  </details>
                  <details>
                    <summary>Who is the AI fanfiction generator for?</summary>
                    <p>It is for anyone who loves tropes, ships, and AU stories and wants them written to taste. Readers who never found their exact pairing, writers who want a fast first draft, and fans who want something private and adult all fit. If you have ever wished a story leaned into the slow burn a little longer, this is for you. All characters are original and 18 or older.</p>
                  </details>
                </div>
              </section>

            </div>{/* /.col */}
          </div>{/* /.doc */}
        </div>{/* /.shell */}

        {/* CLOSING CTA */}
        <section className="cta-band" aria-labelledby="final-title">
          <div className="shell">
            <h2 id="final-title" className="reveal">Your first chapter is waiting</h2>
            <p className="reveal">Pick a trope, shape your original characters, and let the words come. Join 522K+ writers building the stories they always wanted to read. Free to start, no payment required, and private by design from the very first line.</p>
            <button type="button" className="btn btn-primary reveal">Write your first chapter</button>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell foot">
          <nav className="foot-nav" aria-label="Footer navigation">
            <a href="/">Home</a>
            <a href="#top">AI Fanfiction Generator</a>
            <a href="/ai-erotic-story-generator/">AI Erotic Story Generator</a>
            <a href="/ai-femdom-story-generator/">AI Femdom Story Generator</a>
            <a href="/ai-pegging-story-generator/">AI Pegging Story Generator</a>
            <a href="/ai-cuckold-story-generator/">AI Cuckold Story Generator</a>
            <a href="#c-tropes">Tropes</a>
            <a href="#c-ethics">Ethics</a>
            <a href="#c-faq">FAQ</a>
            <FooterSiteLinks />
          </nav>
          <p>© <FooterYear /> My Spicy Vanilla. All rights reserved. All characters are fictional and 18+. <span className="age-badge">18+ Adults Only</span></p>
          <p><strong>Affiliate disclosure:</strong> This page contains affiliate links. If you sign up through them, we may earn a commission at no extra cost to you.</p>
        </div>
      </footer>

      <div className="sticky-cta">
        <button type="button" className="btn btn-primary">Write My Fanfic – Free</button>
      </div>

      <RevealOnScroll />
      <StatCounters duration={1500} />
    </>
  );
}
