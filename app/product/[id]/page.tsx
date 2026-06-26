import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, Truck, Undo2, Wrench } from 'lucide-react'
import { BuyActions } from '@/components/buy-actions'
import { ProductCard } from '@/components/product-card'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { formatPrice, getGuitar, guitars } from '@/lib/products'

export function generateStaticParams() {
  return guitars.map((guitar) => ({ id: guitar.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const guitar = getGuitar(id)
  if (!guitar) return { title: 'Guitar not found — Web-Slinger Axes' }
  return {
    title: `${guitar.name} — Web-Slinger Axes`,
    description: guitar.description,
  }
}

const perks = [
  { icon: Truck, label: 'Free multiverse shipping' },
  { icon: Wrench, label: 'Pro setup included' },
  { icon: Undo2, label: '30-day reality returns' },
]

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const guitar = getGuitar(id)
  if (!guitar) notFound()

  const related = guitars.filter((g) => g.id !== guitar.id).slice(0, 3)

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b-[3px] border-border bg-background">
          <div className="mx-auto flex max-w-7xl items-center gap-1 px-4 py-3 font-mono text-xs uppercase tracking-widest text-muted-foreground sm:px-6">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="size-3" />
            <Link href="/shop" className="hover:text-primary">
              Shop
            </Link>
            <ChevronRight className="size-3" />
            <span className="text-foreground">{guitar.name}</span>
          </div>
        </div>

        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2">
          {/* Image */}
          <div className="flex flex-col gap-4">
  <div className="relative aspect-square -rotate-1 overflow-hidden border-[3px] border-border bg-card comic-shadow">
    <Image
      src={guitar.image || "/placeholder.svg"}
      alt={`${guitar.name} electric guitar`}
      fill
      priority
      sizes="(max-width: 1024px) 100vw, 50vw"
      className="object-contain p-6"
    />

    {guitar.badge && (
      <span className="absolute left-4 top-4 -rotate-3 border-[3px] border-border bg-primary px-3 py-1 font-display text-lg tracking-wide text-primary-foreground">
        {guitar.badge}
      </span>
    )}
  </div>

  <iframe
    src={guitar.spotifyEmbed}
    width="100%"
    height="152"
    style={{ borderRadius: "12px" }}
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  />
</div>

          {/* Details */}
          <div className="flex flex-col gap-5">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                {guitar.dimension}
              </span>
              <h1 className="font-display text-6xl uppercase leading-none tracking-wide text-foreground">
                {guitar.name}
              </h1>
              <p className="mt-2 text-xl text-muted-foreground">
                {guitar.tagline}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-display text-5xl tracking-wide text-primary">
                {formatPrice(guitar.price)}
              </span>
              <span className="border-2 border-border bg-accent px-2 py-0.5 font-display text-sm tracking-wide text-accent-foreground">
                In stock
              </span>
            </div>

            <p className="text-base leading-relaxed text-foreground">
              {guitar.description}
            </p>

            <BuyActions guitar={guitar} />

            {/* perks */}
            <div className="grid grid-cols-1 gap-2 border-t-[3px] border-border pt-5 sm:grid-cols-3">
              {perks.map((perk) => (
                <div key={perk.label} className="flex items-center gap-2">
                  <perk.icon className="size-5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">
                    {perk.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Specs */}
            <div className="border-[3px] border-border bg-card">
              <h2 className="border-b-[3px] border-border bg-ink px-4 py-2 font-display text-2xl tracking-wide text-ink-foreground">
                Spec Sheet
              </h2>
              <dl className="divide-y divide-border/30">
                {guitar.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between gap-4 px-4 py-2.5"
                  >
                    <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {spec.label}
                    </dt>
                    <dd className="text-sm font-semibold text-foreground">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="border-t-[3px] border-border bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <h2 className="mb-8 font-display text-4xl uppercase tracking-wide text-foreground sm:text-5xl">
              More from the <span className="text-primary">multiverse</span>
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((g) => (
                <ProductCard key={g.id} guitar={g} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
