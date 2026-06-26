import { ArrowUpRight } from "lucide-react"

const collections = [
  {
    title: "Club Kits",
    count: "320 jerseys",
    image: "/jersey-red.png",
    tag: "Home & Away",
  },
  {
    title: "National Teams",
    count: "80 jerseys",
    image: "/collection-national.png",
    tag: "World Edition",
    feature: true,
  },
  {
    title: "Retro Classics",
    count: "120 jerseys",
    image: "/jersey-white.png",
    tag: "Vintage",
  },
]

export function Collections() {
  return (
    <section id="collections" className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-4xl leading-none tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Shop By
          <br />
          Collection
        </h2>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          From matchday classics to limited retro drops — find the kit that
          tells your story.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {collections.map((c) => (
          <a
            key={c.title}
            href="#shop"
            className={`group relative flex flex-col justify-end overflow-hidden rounded-lg border border-border bg-card p-6 transition-colors hover:border-foreground ${
              c.feature ? "md:row-span-2 min-h-[420px]" : "min-h-[320px]"
            }`}
          >
            <img
              src={c.image || "/placeholder.svg"}
              alt={c.title}
              className="absolute inset-0 size-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
            <div className="relative z-10 text-primary-foreground">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                {c.tag}
              </span>
              <div className="mt-2 flex items-end justify-between gap-2">
                <div>
                  <h3 className="font-display text-3xl tracking-tight">{c.title}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/70">{c.count}</p>
                </div>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="size-5" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
