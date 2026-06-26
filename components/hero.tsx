import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:px-6 md:py-16 lg:py-20">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-foreground">
            2025/26 Season Kits
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-8xl">
            Wear The
            <br />
            <span className="text-accent">Badge.</span> Own
            <br />
            The Game.
          </h1>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-primary-foreground/70">
            Authentic club and national team jerseys, printed to order with the
            names and numbers that matter. Built for the pitch, made for the
            stands.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="bg-accent font-bold uppercase tracking-wide text-accent-foreground hover:bg-accent/90"
              nativeButton={false}
              render={<a href="#shop" />}
            >
              Shop Jerseys
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              nativeButton={false}
              render={<a href="#collections" />}
            >
              View Collections
            </Button>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-primary-foreground/15 pt-6">
            {[
              { value: "500+", label: "Club Kits" },
              { value: "80+", label: "Nations" },
              { value: "48h", label: "Custom Print" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl text-accent">{stat.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-primary-foreground/60">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-0 flex items-center justify-center">
            <span className="font-display text-[28vw] leading-none text-primary-foreground/5 md:text-[16vw]">
              KIT
            </span>
          </div>
          <img
            src="/hero-player.png"
            alt="Footballer wearing an authentic red and white jersey"
            className="relative z-10 mx-auto w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  )
}
