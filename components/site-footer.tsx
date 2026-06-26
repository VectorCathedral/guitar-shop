"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const columns = [
  {
    title: "Shop",
    links: ["Club Kits", "National Teams", "Retro Classics", "New Drops", "Sale"],
  },
  {
    title: "Help",
    links: ["Sizing Guide", "Shipping", "Returns", "Track Order", "Contact"],
  },
  {
    title: "Company",
    links: ["About", "Sustainability", "Careers", "Stores", "Press"],
  },
]

export function SiteFooter() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setDone(true)
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 border-b border-primary-foreground/15 pb-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl leading-none tracking-tight text-balance sm:text-5xl">
              Never Miss
              <br />
              A Drop.
            </h2>
            <p className="mt-4 max-w-sm leading-relaxed text-primary-foreground/70">
              Join the squad for early access to limited kits, restocks and
              exclusive member pricing.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            {done ? (
              <p className="text-lg font-semibold text-accent">
                You&apos;re on the team. Check your inbox.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="h-12 flex-1 rounded-md border border-primary-foreground/20 bg-primary-foreground/5 px-4 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 bg-accent font-bold uppercase tracking-wide text-accent-foreground hover:bg-accent/90"
                >
                  Subscribe
                  <ArrowRight className="size-4" />
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-2xl tracking-tight">TOUCHLINE</span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
              Authentic football jerseys for every club, country and era.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary-foreground/50">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Touchline. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground">Privacy</a>
            <a href="#" className="hover:text-primary-foreground">Terms</a>
            <a href="#" className="hover:text-primary-foreground">Cookies</a>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-primary-foreground/10 py-6">
        <p className="text-center font-display text-[18vw] leading-none text-primary-foreground/5">
          TOUCHLINE
        </p>
      </div>
    </footer>
  )
}
