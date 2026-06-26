import type { Metadata } from 'next'
import { ProductCard } from '@/components/product-card'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { guitars } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Shop All Guitars — Web-Slinger Axes',
  description:
    'Browse every electric guitar in the Web-Slinger multiverse lineup.',
}

export default function ShopPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Page banner */}
        <section className="relative overflow-hidden border-b-[3px] border-border bg-ink text-ink-foreground">
          <div className="halftone pointer-events-none absolute inset-0 opacity-[0.12]" />
          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <span className="-rotate-2 inline-block border-[3px] border-ink-foreground bg-secondary px-3 py-1 font-display text-lg tracking-wide text-ink">
              The full collection
            </span>
            <h1 className="mt-4 font-display text-6xl uppercase leading-none tracking-wide sm:text-7xl">
              Every <span className="text-primary text-stroke">axe</span> in the
              web
            </h1>
            <p className="mt-3 max-w-lg text-lg text-ink-foreground/80">
              {guitars.length} guitars pulled from across the multiverse. Each
              one hand-inked, dimension-tested, and ready to shred.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guitars.map((guitar) => (
              <ProductCard key={guitar.id} guitar={guitar} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
