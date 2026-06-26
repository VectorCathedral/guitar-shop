'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, ShoppingBag, X, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/components/cart-provider'

const NAV = [
  { label: 'Guitars', href: '/#shop' },
  { label: 'Styles', href: '/#styles' },
  { label: 'The Multiverse', href: '/#feature' },
  { label: 'Support', href: '/#footer' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-foreground bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="group flex items-center gap-2">
          <span className="grid size-9 place-items-center bg-primary text-primary-foreground comic-border-light">
            <Zap className="size-5" fill="currentColor" />
          </span>
          <span className="font-display text-2xl tracking-wide text-foreground text-glitch">
            AMP CITY
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-display text-lg tracking-wide text-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search"
            className="text-foreground hover:bg-secondary"
          >
            <Search className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Cart"
            className="relative text-foreground hover:bg-secondary"
            render={<Link href="/checkout" />}
          >
            <ShoppingBag className="size-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid size-5 place-items-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Menu"
            className="text-foreground hover:bg-secondary md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav className="border-t-[3px] border-foreground bg-background md:hidden">
          <div className="flex flex-col px-4 py-2">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 font-display text-xl tracking-wide text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
