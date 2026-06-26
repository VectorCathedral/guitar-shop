import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b-[3px] border-foreground bg-background">
      {/* halftone + action line backdrop */}
      <div className="pointer-events-none absolute inset-0 text-primary/30 halftone" />
      <div className="pointer-events-none absolute inset-0 action-lines opacity-60" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:px-8 md:py-20">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 bg-comic-yellow px-3 py-1 font-display text-sm tracking-wide text-foreground comic-border-light">
            <Zap className="size-4" fill="currentColor" />
            NEW DROP — VOL. 01
          </span>

          <h1 className="font-display text-6xl leading-[0.9] tracking-wide text-foreground text-balance sm:text-7xl lg:text-8xl">
            <span className="block text-outline text-comic-cyan">PLAY LOUD</span>
            <span className="block text-glitch">ACROSS EVERY</span>
            <span className="block text-primary">DIMENSION</span>
          </h1>

          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            Electric guitars in every style and every universe. Strats, Les
            Pauls, Flying Vs and more — built bold, wired to scream.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="bg-primary font-display text-lg tracking-wide text-primary-foreground hover:bg-primary/90 comic-border-light"
              nativeButton={false}
              render={<Link href="/#shop" />}
            >
              Shop Guitars
              <ArrowRight className="size-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground bg-comic-cyan font-display text-lg tracking-wide text-accent-foreground hover:bg-comic-cyan/90 comic-border-light"
              nativeButton={false}
              render={<Link href="/#styles" />}
            >
              Browse Styles
            </Button>
          </div>

          <div className="mt-2 flex gap-6 font-display text-foreground">
            <div>
              <div className="text-3xl text-comic-cyan">120+</div>
              <div className="text-xs tracking-wide text-muted-foreground">
                MODELS IN STOCK
              </div>
            </div>
            <div>
              <div className="text-3xl text-comic-yellow">FREE</div>
              <div className="text-xs tracking-wide text-muted-foreground">
                SETUP &amp; SHIPPING
              </div>
            </div>
            <div>
              <div className="text-3xl text-primary">2-YR</div>
              <div className="text-xs tracking-wide text-muted-foreground">
                WARRANTY
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -rotate-3 bg-primary/20 blur-2xl" />
          <div className="relative -rotate-2 overflow-hidden bg-card comic-border-light">
            <Image
              src="/guitar-hero.png"
              alt="Spider-Verse style electric guitar"
              width={800}
              height={800}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <span className="absolute -bottom-4 -right-2 rotate-6 bg-comic-yellow px-4 py-2 font-display text-xl tracking-wide text-foreground comic-border-light">
            THWIP!
          </span>
        </div>
      </div>
    </section>
  )
}
