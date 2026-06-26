'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Check, Minus, Plus } from 'lucide-react'
import { useCart } from '@/components/cart-provider'
import type { Guitar } from '@/lib/products'

export function BuyActions({ guitar }: { guitar: Guitar }) {
  const { addItem } = useCart()
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  function handleAddToCart() {
    addItem(guitar, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  function handleBuyNow() {
    addItem(guitar, quantity)
    router.push('/checkout')
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="font-display text-lg uppercase tracking-wide text-foreground">
          Qty
        </span>
        <div className="flex items-center border-[3px] border-border">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="flex size-11 items-center justify-center text-foreground transition-colors hover:bg-muted"
            aria-label="Decrease quantity"
          >
            <Minus className="size-4" />
          </button>
          <span className="flex h-11 w-12 items-center justify-center border-x-[3px] border-border font-display text-xl text-foreground">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="flex size-11 items-center justify-center text-foreground transition-colors hover:bg-muted"
            aria-label="Increase quantity"
          >
            <Plus className="size-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleBuyNow}
          className="flex-1 border-[3px] border-border bg-primary px-6 py-4 font-display text-2xl tracking-wide text-primary-foreground transition-transform hover:-translate-y-1 comic-shadow"
        >
          Buy Now
        </button>
        <button
          type="button"
          onClick={handleAddToCart}
          className="flex flex-1 items-center justify-center gap-2 border-[3px] border-border bg-accent px-6 py-4 font-display text-2xl tracking-wide text-accent-foreground transition-transform hover:-translate-y-1 comic-shadow-sm"
        >
          {added ? (
            <>
              <Check className="size-6" /> Added!
            </>
          ) : (
            'Add to Cart'
          )}
        </button>
      </div>
    </div>
  )
}
