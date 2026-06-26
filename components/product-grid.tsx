"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

type Product = {
  id: number
  name: string
  team: string
  price: number
  image: string
  badge?: string
  category: "Home" | "Away" | "Third"
}

const products: Product[] = [
  { id: 1, name: "Home Authentic 25/26", team: "Crimson FC", price: 89, image: "/jersey-red.png", badge: "New", category: "Home" },
  { id: 2, name: "Away Match Kit 25/26", team: "Azzurri United", price: 84, image: "/jersey-blue.png", category: "Away" },
  { id: 3, name: "Stripe Edition Jersey", team: "Halcyon SC", price: 79, image: "/jersey-white.png", badge: "Limited", category: "Third" },
  { id: 4, name: "Emerald Pro Jersey", team: "Verde Athletic", price: 92, image: "/jersey-green.png", category: "Home" },
  { id: 5, name: "Home Authentic 25/26", team: "Crimson FC", price: 89, image: "/jersey-red.png", category: "Home" },
  { id: 6, name: "Away Match Kit 25/26", team: "Azzurri United", price: 84, image: "/jersey-blue.png", badge: "New", category: "Away" },
  { id: 7, name: "Stripe Edition Jersey", team: "Halcyon SC", price: 79, image: "/jersey-white.png", category: "Third" },
  { id: 8, name: "Emerald Pro Jersey", team: "Verde Athletic", price: 92, image: "/jersey-green.png", badge: "Limited", category: "Away" },
]

const filters = ["All", "Home", "Away", "Third"] as const

export function ProductGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All")
  const [liked, setLiked] = useState<number[]>([])

  const visible = active === "All" ? products : products.filter((p) => p.category === active)

  const toggleLike = (id: number) =>
    setLiked((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  return (
    <section id="shop" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl leading-none tracking-tight sm:text-5xl lg:text-6xl">
            Gear Up
          </h2>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
                  active === f
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-background text-foreground hover:border-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {visible.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-foreground"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary">
                {p.badge && (
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">
                    {p.badge}
                  </span>
                )}
                <button
                  onClick={() => toggleLike(p.id)}
                  aria-label="Add to wishlist"
                  className="absolute right-3 top-3 z-10 flex size-8 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-background"
                >
                  <Heart
                    className={`size-4 ${liked.includes(p.id) ? "fill-accent text-accent" : ""}`}
                  />
                </button>
                <img
                  src={p.image || "/placeholder.svg"}
                  alt={`${p.team} ${p.name}`}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {p.team}
                </span>
                <h3 className="mt-1 text-sm font-semibold leading-snug text-foreground">
                  {p.name}
                </h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-xl text-foreground">${p.price}</span>
                  <Button
                    size="sm"
                    className="font-bold uppercase tracking-wide opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    Add
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
