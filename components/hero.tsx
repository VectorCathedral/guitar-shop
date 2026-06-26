import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b-[3px] border-border bg-ink text-ink-foreground">
      {/* halftone texture overlay */}
      <div className="halftone pointer-events-none absolute inset-0 opacity-[0.12]" />
      {/* radiating action lines via repeating conic accent */}
      <div className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
        <div className="flex flex-col items-start gap-5">
          <span className="-rotate-2 border-[3px] border-ink-foreground bg-accent px-3 py-1 font-display text-lg tracking-wide text-accent-foreground">
            Six strings. Infinite realities.
          </span>
          <h1 className="font-display text-6xl uppercase leading-[0.85] tracking-wide text-balance sm:text-7xl lg:text-8xl">
            <span className="block text-ink-foreground">Shred</span>
            <span className="block text-primary text-stroke-lg">across the</span>
            <span className="block text-secondary text-stroke-lg">
              multiverse
            </span>
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-ink-foreground/80 text-pretty">
            Hand-inked electric guitars pulled from every corner of the
            spider-web. Bold tone, louder looks. Pick your dimension and plug in.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/shop"
              className="border-[3px] border-ink-foreground bg-primary px-6 py-3 font-display text-2xl tracking-wide text-primary-foreground transition-transform hover:-translate-y-1 comic-shadow"
              style={{ boxShadow: '6px 6px 0 0 var(--ink-foreground)' }}
            >
              Shop the lineup
            </Link>
            <Link
              href="#multiverse"
              className="border-[3px] border-ink-foreground bg-transparent px-6 py-3 font-display text-2xl tracking-wide text-ink-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
            >
              Meet the axes
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-md -rotate-2 border-[3px] border-ink-foreground bg-ink comic-shadow">
            <Image
              src="/guitars/hero-guitar.png"
              alt="Comic-book electric guitar exploding with energy"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="absolute -bottom-5 -left-5 rotate-3 border-[3px] border-ink-foreground bg-accent px-4 py-2 font-display text-2xl tracking-wide text-accent-foreground">
              BLAM!
            </span>
          </div>
        </div>
      </div>

      {/* bottom ticker strip */}
      <div className="halftone-cyan border-t-[3px] border-ink-foreground bg-secondary/90 py-2">
        <div className="flex items-center justify-center gap-6 px-4 font-display text-xl tracking-widest text-ink uppercase">
          <span>Free multiverse shipping</span>
          <span className="text-primary">●</span>
          <span>2-Year warranty</span>
          <span className="text-primary">●</span>
          <span>Set up by Spider-Luthiers</span>
        </div>
      </div>
    </section>
  )
}
