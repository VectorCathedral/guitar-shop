import type { Metadata } from 'next'
import { CheckoutClient } from '@/components/checkout-client'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Checkout — Web-Slinger Axes',
  description: 'Complete your multiverse guitar order.',
}

export default function CheckoutPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b-[3px] border-border bg-white text-ink-foreground">
          <div className="halftone pointer-events-none absolute inset-0 opacity-[0.12]" />
          <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6">
            <h1 className="font-display text-5xl uppercase tracking-wide sm:text-6xl">
              Check<span className="text-primary">out</span>
            </h1>
            <p className="mt-1 text-ink-foreground/80">
              One leap away from a new dimension of tone.
            </p>
          </div>
        </section>
        <CheckoutClient />
      </main>
      <SiteFooter />
    </div>
  )
}
