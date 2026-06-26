'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/components/cart-provider'
import { formatPrice } from '@/lib/products'

const SHIPPING = 0

export function CheckoutClient() {
  const { items, updateQuantity, removeItem, subtotal, clear } = useCart()
  const [placed, setPlaced] = useState(false)

  const tax = Math.round(subtotal * 0.08)
  const total = subtotal + tax + SHIPPING

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setPlaced(true)
    clear()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (placed) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
        <div className="mx-auto -rotate-2 border-[3px] border-border bg-accent px-6 py-10 comic-shadow">
          <span className="font-display text-5xl uppercase tracking-wide text-accent-foreground sm:text-6xl">
            Thwip! Order placed
          </span>
          <p className="mt-4 text-lg text-accent-foreground/90">
            Your new axe is swinging across the multiverse to your door. A
            confirmation has been sent to your inbox.
          </p>
        </div>
        <Link
          href="/shop"
          className="mt-8 inline-block border-[3px] border-border bg-primary px-6 py-3 font-display text-2xl tracking-wide text-primary-foreground transition-transform hover:-translate-y-1 comic-shadow-sm"
        >
          Keep shopping
        </Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <ShoppingBag className="mx-auto size-16 text-muted-foreground" />
        <h1 className="mt-6 font-display text-5xl uppercase tracking-wide text-foreground">
          Your cart is empty
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          No axes in any dimension yet. Let&apos;s fix that.
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-block border-[3px] border-border bg-primary px-6 py-3 font-display text-2xl tracking-wide text-primary-foreground transition-transform hover:-translate-y-1 comic-shadow"
        >
          Shop guitars
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
      {/* Cart + form */}
      <div className="flex flex-col gap-8">
        {/* Cart items */}
        <div>
          <h2 className="mb-4 font-display text-3xl uppercase tracking-wide text-foreground">
            Your cart
          </h2>
          <ul className="flex flex-col gap-4">
            {items.map((item) => (
              <li
                key={item.guitar.id}
                className="flex gap-4 border-[3px] border-border bg-card p-3"
              >
                <div className="relative size-24 shrink-0 border-[3px] border-border halftone-cyan">
                  <Image
                    src={item.guitar.image || '/placeholder.svg'}
                    alt={item.guitar.name}
                    fill
                    sizes="96px"
                    className="object-contain p-1"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-xl leading-none tracking-wide text-foreground">
                        {item.guitar.name}
                      </h3>
                      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        {item.guitar.dimension}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.guitar.id)}
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label={`Remove ${item.guitar.name}`}
                    >
                      <Trash2 className="size-5" />
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center border-[3px] border-border">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.guitar.id, item.quantity - 1)
                        }
                        className="flex size-8 items-center justify-center text-foreground hover:bg-muted"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="size-3.5" />
                      </button>
                      <span className="flex h-8 w-9 items-center justify-center border-x-[3px] border-border font-display text-base text-foreground">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.guitar.id, item.quantity + 1)
                        }
                        className="flex size-8 items-center justify-center text-foreground hover:bg-muted"
                        aria-label="Increase quantity"
                      >
                        <Plus className="size-3.5" />
                      </button>
                    </div>
                    <span className="font-display text-xl tracking-wide text-primary">
                      {formatPrice(item.guitar.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Checkout form */}
        <form id="checkout-form" onSubmit={handleSubmit} className="flex flex-col gap-5">
          <h2 className="font-display text-3xl uppercase tracking-wide text-foreground">
            Shipping &amp; payment
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" name="name" placeholder="Miles Morales" />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="miles@earth1610.com"
            />
            <div className="sm:col-span-2">
              <Field
                label="Address"
                name="address"
                placeholder="42 Web Avenue"
              />
            </div>
            <Field label="City" name="city" placeholder="Brooklyn" />
            <Field label="ZIP code" name="zip" placeholder="11201" />
            <div className="sm:col-span-2">
              <Field
                label="Card number"
                name="card"
                placeholder="4242 4242 4242 4242"
              />
            </div>
            <Field label="Expiry" name="expiry" placeholder="12 / 28" />
            <Field label="CVC" name="cvc" placeholder="123" />
          </div>
        </form>
      </div>

      {/* Summary */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="border-[3px] border-border bg-card comic-shadow">
          <h2 className="border-b-[3px] border-border bg-ink px-5 py-3 font-display text-2xl tracking-wide text-ink-foreground">
            Order summary
          </h2>
          <div className="flex flex-col gap-3 p-5">
            <Row label="Subtotal" value={formatPrice(subtotal)} />
            <Row
              label="Shipping"
              value={SHIPPING === 0 ? 'FREE' : formatPrice(SHIPPING)}
            />
            <Row label="Tax (est.)" value={formatPrice(tax)} />
            <div className="my-1 border-t-[3px] border-border" />
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl uppercase tracking-wide text-foreground">
                Total
              </span>
              <span className="font-display text-3xl tracking-wide text-primary">
                {formatPrice(total)}
              </span>
            </div>
            <button
              type="submit"
              form="checkout-form"
              className="mt-2 w-full border-[3px] border-border bg-primary px-6 py-4 font-display text-2xl tracking-wide text-primary-foreground transition-transform hover:-translate-y-1 comic-shadow-sm"
            >
              Place order
            </button>
            <p className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Demo store — no real charge
            </p>
          </div>
        </div>
      </aside>
    </div>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-display text-base uppercase tracking-wide text-foreground">
        {label}
      </span>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-11 border-[3px] border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </label>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-semibold text-foreground">{value}</span>
    </div>
  )
}
