import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const perks = [
  "Official fonts, names & numbers",
  "League & cup sleeve patches",
  "Printed and shipped in 48 hours",
]

export function CustomPrint() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <div className="grid items-stretch gap-4 overflow-hidden rounded-xl border border-border md:grid-cols-2">
        <div className="relative min-h-[300px] bg-primary">
          <img
            src="/jersey-blue.png"
            alt="Customizable blue football jersey"
            className="absolute inset-0 size-full object-cover"
          />
          <span className="absolute bottom-6 left-6 font-display text-6xl text-primary-foreground/90">
            #10
          </span>
        </div>
        <div className="flex flex-col justify-center bg-card p-8 md:p-12">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Personalize It
          </span>
          <h2 className="mt-3 font-display text-4xl leading-none tracking-tight text-balance sm:text-5xl">
            Make The Kit Yours
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Add your name, your number, your hero. Every jersey is custom-printed
            with authentic league materials so you wear the real thing.
          </p>
          <ul className="mt-6 space-y-3">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-3 text-sm font-medium text-foreground">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-3" />
                </span>
                {perk}
              </li>
            ))}
          </ul>
          <Button
            size="lg"
            className="mt-8 w-fit font-bold uppercase tracking-wide"
            nativeButton={false}
            render={<a href="#shop" />}
          >
            Start Customizing
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
