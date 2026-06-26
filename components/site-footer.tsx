import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t-[3px] border-border bg-ink text-ink-foreground">
      <div className="halftone-red h-3 w-full opacity-40" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <span className="font-display text-3xl tracking-wide">
            Web-Slinger <span className="text-primary">Axes</span>
          </span>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-foreground/70">
            Electric guitars pulled from every corner of the multiverse.
            Comic-built. Dimension-tested. Loud in any reality.
          </p>
        </div>

        <div>
          <h3 className="font-display text-xl tracking-wide text-accent">
            Shop
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/80">
            <li>
              <Link href="/shop" className="hover:text-primary">
                All Guitars
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-primary">
                New Drops
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-primary">
                Limited Editions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl tracking-wide text-accent">
            Help
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/80">
            <li>
              <Link href="/shop" className="hover:text-primary">
                Shipping
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-primary">
                Returns
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-primary">
                Warranty
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl tracking-wide text-accent">
            Join the Spider-Society
          </h3>
          <p className="mt-4 text-sm text-ink-foreground/70">
            Get first dibs on multiverse drops.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="h-11 w-full border-[3px] border-ink-foreground/30 bg-ink px-3 text-sm text-ink-foreground placeholder:text-ink-foreground/40 focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              className="h-11 shrink-0 border-[3px] border-l-0 border-ink-foreground/30 bg-primary px-4 font-display text-lg tracking-wide text-primary-foreground"
            >
              Go
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-ink-foreground/15 px-4 py-5 text-center text-xs text-ink-foreground/50 sm:px-6">
        © {new Date().getFullYear()} Web-Slinger Axes. A fictional comic-book
        store built for demonstration. Not affiliated with any real brand.
      </div>
    </footer>
  )
}
