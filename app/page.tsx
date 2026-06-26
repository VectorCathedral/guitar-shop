import Link from 'next/link'
import { Hero } from '@/components/hero'
import { ProductCard } from '@/components/product-card'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { guitars } from '@/lib/products'

const features = [
  {
    title: 'Hand-Inked Finishes',
    body: 'Every body is finished with halftone shading and bold ink lines, so it looks like it leapt off a comic page.',
  },
  {
    title: 'Dimension-Tested Tone',
    body: 'Pickups voiced and road-tested across realities for tone that cuts through any mix, any universe.',
  },
  {
    title: 'Set Up by Spider-Luthiers',
    body: 'Each guitar is hand set up and intonated before it swings its way to your door.',
  },
]

export default function HomePage() {
  const featured = guitars.slice(0, 6)

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />

        {/* Featured lineup */}
        <section id="multiverse" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                Issue #1 — The Lineup
              </span>
              <h2 className="font-display text-5xl uppercase tracking-wide text-foreground sm:text-6xl">
                Pick your <span className="text-primary">dimension</span>
              </h2>
            </div>
            <Link
              href="/shop"
              className="border-[3px] border-border bg-background px-5 py-2.5 font-display text-xl tracking-wide text-foreground transition-colors hover:bg-accent hover:text-accent-foreground comic-shadow-sm"
            >
              See all guitars
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((guitar) => (
              <ProductCard key={guitar.id} guitar={guitar} />
            ))}
          </div>
        </section>

        {/* Why band */}
        <section
          id="story"
          className="border-y-[3px] border-border bg-ink text-ink-foreground"
        >
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
            <h2 className="mb-10 max-w-2xl font-display text-5xl uppercase leading-none tracking-wide text-balance sm:text-6xl">
              Built in the panels.{' '}
              <span className="text-secondary">Played in your reality.</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className="border-[3px] border-ink-foreground/40 bg-ink p-6"
                >
                  <span className="flex size-12 items-center justify-center border-[3px] border-ink-foreground bg-primary font-display text-2xl text-primary-foreground">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-2xl tracking-wide text-accent">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-foreground/75">
                    {feature.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="halftone-red bg-primary">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-16 text-center sm:px-6">
            <h2 className="font-display text-5xl uppercase leading-none tracking-wide text-primary-foreground text-balance sm:text-7xl">
              Your next guitar is in another universe
            </h2>
            <p className="max-w-xl text-lg text-primary-foreground/90">
              Stop scrolling through realities. Find the axe that was always
              meant for you.
            </p>
            <Link
              href="/shop"
              className="border-[3px] border-border bg-background px-8 py-4 font-display text-3xl tracking-wide text-foreground transition-transform hover:-translate-y-1 comic-shadow"
            >
              Enter the shop
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
