import Image from 'next/image'
import Link from 'next/link'
import { formatPrice, type Guitar } from '@/lib/products'

const accentShadow: Record<Guitar['accent'], string> = {
  red: 'group-hover:comic-shadow-red',
  cyan: 'group-hover:comic-shadow-cyan',
  yellow: 'group-hover:comic-shadow',
}

const accentBg: Record<Guitar['accent'], string> = {
  red: 'bg-primary text-primary-foreground',
  cyan: 'bg-secondary text-secondary-foreground',
  yellow: 'bg-accent text-accent-foreground',
}

export function ProductCard({ guitar }: { guitar: Guitar }) {
  return (
    <Link
      href={`/product/${guitar.id}`}
      className={`group relative flex flex-col border-[3px] border-border bg-card transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 comic-shadow ${accentShadow[guitar.accent]}`}
    >
      {guitar.badge && (
        <span
          className={`absolute left-3 top-3 z-10 -rotate-3 border-2 border-border px-2 py-0.5 font-display text-sm tracking-wide ${accentBg[guitar.accent]}`}
        >
          {guitar.badge}
        </span>
      )}
      <div className="relative aspect-square overflow-hidden border-b-[3px] border-border halftone-cyan">
        <Image
          src={guitar.image || '/placeholder.svg'}
          alt={`${guitar.name} electric guitar`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain p-4 transition-transform duration-200 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {guitar.dimension}
        </span>
        <h3 className="font-display text-2xl leading-none tracking-wide text-foreground">
          {guitar.name}
        </h3>
        <p className="text-sm text-muted-foreground">{guitar.bodyStyle}</p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-display text-2xl tracking-wide text-primary">
            {formatPrice(guitar.price)}
          </span>
          <span className="border-[3px] border-border px-3 py-1 font-display text-base tracking-wide text-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
            View
          </span>
        </div>
      </div>
    </Link>
  )
}
