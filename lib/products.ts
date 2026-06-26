export type Product = {
  slug: string
  name: string
  tagline: string
  style: string
  price: number
  color: string
  image: string
  specs: { label: string; value: string }[]
  description: string
}

export const products: Product[] = [
  {
    slug: 'spider-strat',
    name: 'SPIDER STRAT',
    tagline: 'The web-slinger',
    style: 'Stratocaster',
    price: 1299,
    color: 'magenta',
    image: '/guitar-strat.png',
    description:
      'Triple single-coil bite with a contoured body that hugs you like a hero landing. Built for players who want to leap between clean shimmer and full-on overdrive.',
    specs: [
      { label: 'Body', value: 'Alder' },
      { label: 'Neck', value: 'Maple, C-shape' },
      { label: 'Pickups', value: '3x Single-Coil' },
      { label: 'Frets', value: '22 Medium-Jumbo' },
    ],
  },
  {
    slug: 'noir-paul',
    name: 'NOIR PAUL',
    tagline: 'Heavy in the dark',
    style: 'Les Paul',
    price: 1899,
    color: 'cyan',
    image: '/guitar-lespaul.png',
    description:
      'Thick mahogany sustain and humbucker punch wrapped in a single-cutaway icon. This is the tone that fills a room and shakes the floor.',
    specs: [
      { label: 'Body', value: 'Mahogany + Maple Cap' },
      { label: 'Neck', value: 'Mahogany, Set' },
      { label: 'Pickups', value: '2x Humbucker' },
      { label: 'Frets', value: '22 Jumbo' },
    ],
  },
  {
    slug: 'multiverse-v',
    name: 'MULTIVERSE V',
    tagline: 'Pure attitude',
    style: 'Flying V',
    price: 1499,
    color: 'yellow',
    image: '/guitar-flyingv.png',
    description:
      'Aggressive lines, aggressive tone. The Flying V is all forward motion — high-output pickups and a fast neck for riffs that hit like a swing across the skyline.',
    specs: [
      { label: 'Body', value: 'Korina' },
      { label: 'Neck', value: 'Mahogany, Set' },
      { label: 'Pickups', value: '2x High-Output Humbucker' },
      { label: 'Frets', value: '24 Jumbo' },
    ],
  },
  {
    slug: 'venom-sg',
    name: 'VENOM SG',
    tagline: 'Devil horns up',
    style: 'SG',
    price: 1099,
    color: 'magenta',
    image: '/guitar-sg.png',
    description:
      'Lightweight, fast, and snarling. The double-cutaway SG gives you total fretboard access and a midrange growl that cuts through any mix.',
    specs: [
      { label: 'Body', value: 'Mahogany' },
      { label: 'Neck', value: 'Mahogany, Set' },
      { label: 'Pickups', value: '2x Humbucker' },
      { label: 'Frets', value: '22 Medium-Jumbo' },
    ],
  },
  {
    slug: 'glitch-tele',
    name: 'GLITCH TELE',
    tagline: 'Twang from elsewhere',
    style: 'Telecaster',
    price: 999,
    color: 'cyan',
    image: '/guitar-tele.png',
    description:
      'The original workhorse, reimagined in electric lime. Snappy bridge twang and a rock-solid feel that does everything from country to punk.',
    specs: [
      { label: 'Body', value: 'Ash' },
      { label: 'Neck', value: 'Maple, Modern-C' },
      { label: 'Pickups', value: '2x Single-Coil' },
      { label: 'Frets', value: '22 Medium-Jumbo' },
    ],
  },
  {
    slug: 'prowler-strat',
    name: 'PROWLER STRAT',
    tagline: 'Sleek and mean',
    style: 'Stratocaster',
    price: 1399,
    color: 'yellow',
    image: '/guitar-hero.png',
    description:
      'A blacked-out hot-rod strat with a high-output bridge humbucker. Vintage feel, modern firepower — equally at home shimmering or screaming.',
    specs: [
      { label: 'Body', value: 'Alder' },
      { label: 'Neck', value: 'Roasted Maple' },
      { label: 'Pickups', value: 'HSS' },
      { label: 'Frets', value: '22 Medium-Jumbo' },
    ],
  },
]

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}

export const formatPrice = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
