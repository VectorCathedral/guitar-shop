'use client'

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { Product } from '@/lib/products'

export type CartItem = {
  slug: string
  name: string
  style: string
  price: number
  image: string
  qty: number
}

type CartContextType = {
  items: CartItem[]
  count: number
  subtotal: number
  addItem: (product: Product, qty?: number) => void
  removeItem: (slug: string) => void
  updateQty: (slug: string, qty: number) => void
  clear: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  function addItem(product: Product, qty = 1) {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === product.slug)
      if (existing) {
        return prev.map((i) =>
          i.slug === product.slug ? { ...i, qty: i.qty + qty } : i,
        )
      }
      return [
        ...prev,
        {
          slug: product.slug,
          name: product.name,
          style: product.style,
          price: product.price,
          image: product.image,
          qty,
        },
      ]
    })
  }

  function removeItem(slug: string) {
    setItems((prev) => prev.filter((i) => i.slug !== slug))
  }

  function updateQty(slug: string, qty: number) {
    setItems((prev) =>
      prev
        .map((i) => (i.slug === slug ? { ...i, qty: Math.max(0, qty) } : i))
        .filter((i) => i.qty > 0),
    )
  }

  function clear() {
    setItems([])
  }

  const value = useMemo(() => {
    const count = items.reduce((sum, i) => sum + i.qty, 0)
    const subtotal = items.reduce((sum, i) => sum + i.qty * i.price, 0)
    return { items, count, subtotal, addItem, removeItem, updateQty, clear }
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
