const items = [
  "FREE SHIPPING OVER $75",
  "OFFICIAL CUSTOM PRINTING",
  "AUTHENTIC PLAYER EDITIONS",
  "WORLDWIDE DELIVERY",
  "EASY 30-DAY RETURNS",
]

export function MarqueeStrip() {
  return (
    <div className="overflow-hidden border-y border-foreground bg-accent py-3 text-accent-foreground">
      <div className="flex w-max animate-[marquee_30s_linear_infinite] items-center">
        {[0, 1].map((dup) => (
          <ul key={dup} className="flex items-center" aria-hidden={dup === 1}>
            {items.map((item) => (
              <li
                key={`${dup}-${item}`}
                className="flex items-center gap-6 px-6 text-sm font-bold uppercase tracking-widest"
              >
                {item}
                <span className="text-base">*</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
