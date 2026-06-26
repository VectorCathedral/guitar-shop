'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/components/cart-provider'

const navLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/shop', label: 'Styles' },
  { href: '/#multiverse', label: 'Multiverse' },
  { href: '/#story', label: 'Our Story' },
]

export function SiteHeader() {
  const { totalItems } = useCart()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-border bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center border-[3px] border-border bg-primary text-primary-foreground comic-shadow-sm">
            <span className="font-display text-xl leading-none">W</span>
          </span>
          <span className="font-display text-2xl leading-none tracking-wide text-foreground">
            Web-Slinger <span className="text-primary">Axes</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link, i) => (
            <Link
              key={`${link.label}-${i}`}
              href={link.href}
              className="text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/checkout"
            className="relative flex h-10 items-center gap-2 border-[3px] border-border bg-accent px-3 font-display text-lg tracking-wide text-accent-foreground transition-transform hover:-translate-y-0.5"
            aria-label="View cart"
          >
            <ShoppingBag className="size-5" />
            <span className="hidden sm:inline">Cart</span>
            {totalItems > 0 && (
              <span className="flex size-6 items-center justify-center border-2 border-border bg-primary text-xs font-black text-primary-foreground">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center border-[3px] border-border bg-background text-foreground md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t-[3px] border-border bg-background md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link, i) => (
              <li key={`${link.label}-mobile-${i}`}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/30 px-6 py-4 font-display text-xl tracking-wide text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
