import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { MarqueeStrip } from "@/components/marquee-strip"
import { Collections } from "@/components/collections"
import { ProductGrid } from "@/components/product-grid"
import { CustomPrint } from "@/components/custom-print"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <MarqueeStrip />
      <Collections />
      <ProductGrid />
      <CustomPrint />
      <SiteFooter />
    </main>
  )
}
