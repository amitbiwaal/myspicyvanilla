import type { Metadata } from 'next';
import Breadcrumbs from '../../components/Breadcrumbs';
import JsonLd from '../../components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { GENERATOR_LINKS, SITE, absoluteUrl } from '@/lib/site';

const DESCRIPTION =
  'What My Spicy Vanilla is, who this site is for, and the consent-first, adults-only principles behind our story generators and guides.';

export const metadata: Metadata = pageMetadata({
  title: 'About Us',
  description: DESCRIPTION,
  path: '/about/',
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About My Spicy Vanilla',
          description: DESCRIPTION,
          url: absoluteUrl('/about/'),
          inLanguage: SITE.language,
          mainEntity: {
            '@type': 'Organization',
            name: SITE.name,
            url: absoluteUrl('/'),
            logo: absoluteUrl(SITE.logo),
          },
        }}
      />

      <header className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about/' },
            ]}
          />
          <span className="eyebrow">About</span>
          <h1>About My Spicy Vanilla</h1>
          <p className="lede">
            My Spicy Vanilla turns a couple&apos;s private fantasy into a personalized, illustrated story. This site
            explains how it works and publishes guides to sensual storytelling for adults.
          </p>
        </div>
      </header>

      <section aria-labelledby="what-title">
        <div className="wrap about-split">
          <div className="prose">
            <h2 id="what-title">What this site is</h2>
            <p>
              myspicyvanilla.net is the guide and resource site for My Spicy Vanilla, the AI story generator built for
              couples. Here you can learn what each story generator does, compare genres and heat levels, and read
              practical articles on writing prompts, tropes and reading together.
            </p>
            <p>
              The app itself, including your account, your stories and any billing, lives on the official My Spicy
              Vanilla website. When you choose to start a story, we send you there. Some of those links are affiliate
              links, which means we may earn a commission if you sign up, at no extra cost to you. Our{' '}
              <a href="/affiliate-disclosure/">affiliate disclosure</a> explains exactly how that works.
            </p>

            <h2>Who it is for</h2>
            <p>
              Adults aged 18 and over. Most of our readers are couples who want an easier, more playful way to talk
              about what they like, and solo readers who enjoy romance and erotica written around their own ideas. If
              you have never read spicy fiction before, you are welcome here too. We write our guides so that a
              first-time reader can follow them.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="about-art"
            src="/images/couple-styling.webp"
            alt="Character styling screen in My Spicy Vanilla with hair, outfit and vibe options for a couple"
            width={1411}
            height={1115}
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className="flat-alt" aria-labelledby="values-title">
        <div className="wrap">
          <div className="sec-head">
            <span className="kicker">Our principles</span>
            <h2 id="values-title">What we stand for</h2>
          </div>
          <div className="pillars">
            <div className="pillar">
              <h3>Consent comes first</h3>
              <p>Every story and every guide treats enthusiastic consent between characters as the starting point, not an afterthought.</p>
            </div>
            <div className="pillar">
              <h3>Adults only</h3>
              <p>Everything here is written for adults. All characters are fictional and 18 or older, without exception.</p>
            </div>
            <div className="pillar">
              <h3>Fiction, clearly labelled</h3>
              <p>Stories are fantasy. We encourage original characters and never fiction about real people.</p>
            </div>
            <div className="pillar">
              <h3>No judgment</h3>
              <p>Curiosity is normal. We explain tropes, dynamics and heat levels plainly, without shame and without hype.</p>
            </div>
            <div className="pillar">
              <h3>Honest about money</h3>
              <p>We are an affiliate partner and say so on every page. Recommendations are never presented as anything else.</p>
            </div>
            <div className="pillar">
              <h3>Useful before promotional</h3>
              <p>A guide should help you even if you never click a button. That is the standard we edit to.</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="explore-title">
        <div className="wrap">
          <div className="sec-head">
            <span className="kicker">Explore</span>
            <h2 id="explore-title">What you will find here</h2>
            <p>Start with a generator, or read the guides first.</p>
          </div>
          <ul className="link-list">
            <li>
              <a href="/">AI Story Generator for Couples</a>
            </li>
            {GENERATOR_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href="/blog/">Guides and articles on the blog</a>
            </li>
            <li>
              <a href="/contact/">Contact the team</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="final" aria-labelledby="about-cta-title">
        <div className="wrap">
          <h2 id="about-cta-title">Curious how a story comes together?</h2>
          <p>See the generator, the genres and the heat levels on the homepage, then decide if it is for you.</p>
          <a className="btn btn-primary btn-lg" href="/">
            See How It Works
          </a>
        </div>
      </section>
    </>
  );
}
