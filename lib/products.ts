export type Guitar = {
  id: string
  name: string
  dimension: string
  tagline: string
  price: number
  bodyStyle: string
  pickups: string
  finish: string
  scale: string
  accent: 'red' | 'cyan' | 'yellow'
  image: string
  spotifyEmbed: string
  description: string
  specs: { label: string; value: string }[]
  badge?: string
}

export const guitars: Guitar[] = [
  {
    id: 'arachnid-strat',
    name: 'The Arachnid',
    dimension: 'Earth-616',
    tagline: 'The original web-slinger of six-strings.',
    price: 1899,
    bodyStyle: 'Offset Double-Cut',
    pickups: 'HSS Arc-Reactor Coils',
    finish: 'Crimson & Cobalt Web',
    scale: '25.5"',
    accent: 'red',
    image: '/guitars/arachnid.png',
    spotifyEmbed: "https://open.spotify.com/embed/track/3th89PlDwtE7GHz7GD67rz?utm_source=generator",
    badge: 'BEST SELLER',
    description:
      'The guitar that started it all. A blazing red body wrapped in cobalt web-lines, tuned for tone that swings between dimensions. Built for players who never miss a beat — or a leap.',
    specs: [
      { label: 'Body', value: 'Alder, Crimson Web finish' },
      { label: 'Neck', value: 'Roasted Maple, C-profile' },
      { label: 'Fingerboard', value: 'Rosewood, 22 frets' },
      { label: 'Pickups', value: 'HSS Arc-Reactor Coils' },
      { label: 'Bridge', value: '2-Point Tremolo' },
      { label: 'Scale', value: '25.5 inches' },
    ],
  },
  {
    id: 'venom-vii',
    name: 'Venom VII',
    dimension: 'Earth-1048',
    tagline: 'It bites back when you bend.',
    price: 2249,
    bodyStyle: 'Single-Cut',
    pickups: 'Symbiote Humbuckers',
    finish: 'Gloss Black / Toxic Teal Drip',
    scale: '24.75"',
    accent: 'cyan',
    image: '/guitars/venom.png',
    spotifyEmbed: "https://open.spotify.com/embed/track/0sU8jSH3MZaBIXAzhQNMuT?utm_source=generator",

    description:
      'A glossy black beast with toxic-teal symbiote drip oozing across the body. Thick, snarling humbuckers deliver a low-end that consumes everything in the room.',
    specs: [
      { label: 'Body', value: 'Mahogany w/ Maple cap' },
      { label: 'Neck', value: 'Mahogany, set-neck' },
      { label: 'Fingerboard', value: 'Ebony, 22 frets' },
      { label: 'Pickups', value: 'Symbiote Humbuckers' },
      { label: 'Bridge', value: 'Tune-o-matic' },
      { label: 'Scale', value: '24.75 inches' },
    ],
  },
  {
    id: 'gwen-jazz',
    name: 'Spider-Gwen',
    dimension: 'Earth-65',
    tagline: 'Punk-rock poise from another reality.',
    price: 1999,
    bodyStyle: 'Offset Jazz',
    pickups: 'Ballet Single-Coils',
    finish: 'Arctic White / Teal / Hot Pink',
    scale: '25.5"',
    accent: 'cyan',
    image: '/guitars/gwen.png',
    spotifyEmbed: "https://open.spotify.com/embed/track/0WoFs3EdGOx58yX5BtXvOa?utm_source=generator",

    badge: 'NEW DROP',
    description:
      'Equal parts ballet and basement show. Teal and hot-pink offset body with chiming single-coils that cut through any mix. Light, fast, and unapologetically loud.',
    specs: [
      { label: 'Body', value: 'Basswood, Tri-tone finish' },
      { label: 'Neck', value: 'Maple, modern-C' },
      { label: 'Fingerboard', value: 'Maple, 21 frets' },
      { label: 'Pickups', value: 'Ballet Single-Coils' },
      { label: 'Bridge', value: 'Floating Tremolo' },
      { label: 'Scale', value: '25.5 inches' },
    ],
  },
  {
    id: 'noir-lp',
    name: 'The Noir',
    dimension: 'Earth-90214',
    tagline: 'Tone in black and white. Mostly black.',
    price: 2099,
    bodyStyle: 'Single-Cut',
    pickups: 'Greyscale P-90s',
    finish: 'Monochrome Ink Wash',
    scale: '24.75"',
    accent: 'yellow',
    image: '/guitars/noir.png',
    spotifyEmbed: "https://open.spotify.com/embed/track/73ABUTIRGYBQ76FzV2w57Y?utm_source=generator",


    description:
      'Straight out of a 1930s detective story. A monochrome single-cut with growling P-90s that drips with dramatic, high-contrast attitude. Every note casts a long shadow.',
    specs: [
      { label: 'Body', value: 'Mahogany, ink-wash finish' },
      { label: 'Neck', value: 'Mahogany, set-neck' },
      { label: 'Fingerboard', value: 'Ebony, 22 frets' },
      { label: 'Pickups', value: 'Greyscale P-90s' },
      { label: 'Bridge', value: 'Wraparound' },
      { label: 'Scale', value: '24.75 inches' },
    ],
  },
  {
    id: 'sun-spider-v',
    name: 'Sun-Spider',
    dimension: 'Earth-11580',
    tagline: 'A solar flare you can play.',
    price: 1799,
    bodyStyle: 'Flying V',
    pickups: 'Solar-Flare Humbuckers',
    finish: 'Sunburst Yellow / Orange',
    scale: '25.5"',
    accent: 'yellow',
    image: '/guitars/sun-spider.png',
    spotifyEmbed: "https://open.spotify.com/embed/track/3zEN0ii6s4DHHBpnTp3RP7?utm_source=generator",

    description:
      'Pure radiant energy in a Flying-V shape. Yellow-to-orange sunburst body with high-output humbuckers that scream like a supernova. Impossible to ignore on any stage.',
    specs: [
      { label: 'Body', value: 'Korina, Sunburst finish' },
      { label: 'Neck', value: 'Maple, thin-taper' },
      { label: 'Fingerboard', value: 'Rosewood, 24 frets' },
      { label: 'Pickups', value: 'Solar-Flare Humbuckers' },
      { label: 'Bridge', value: 'String-thru body' },
      { label: 'Scale', value: '25.5 inches' },
    ],
  },
  {
    id: 'miles-sg',
    name: 'Miles 42',
    dimension: 'Earth-1610',
    tagline: 'Spray-paint swagger, dual-horn power.',
    price: 2149,
    bodyStyle: 'Dual-Horn',
    pickups: 'Graffiti Humbuckers',
    finish: 'Matte Black / Spray Red',
    scale: '24.75"',
    accent: 'red',
    image: '/guitars/miles.png',
    spotifyEmbed: "https://open.spotify.com/embed/track/5IOW5kQxAWmdcJfdRCbwM8?utm_source=generator",

    badge: 'LIMITED',
    description:
      'Matte black with bright red spray-paint accents — the sound of the next generation. Aggressive dual-horn body and punchy humbuckers built for players writing their own story.',
    specs: [
      { label: 'Body', value: 'Mahogany, matte finish' },
      { label: 'Neck', value: 'Mahogany, slim-taper' },
      { label: 'Fingerboard', value: 'Rosewood, 22 frets' },
      { label: 'Pickups', value: 'Graffiti Humbuckers' },
      { label: 'Bridge', value: 'Tune-o-matic' },
      { label: 'Scale', value: '24.75 inches' },
    ],
  },
]

export function getGuitar(id: string): Guitar | undefined {
  return guitars.find((g) => g.id === id)
}

export function formatPrice(value: number): string {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })
}
