import type { Offer } from "@/data/offers";

const accentBg: Record<Offer["accent"], string> = {
  cyan: "linear-gradient(135deg, var(--primary), var(--primary-glow))",
  violet: "linear-gradient(135deg, var(--violet), var(--pink))",
  sunset: "linear-gradient(135deg, var(--orange), var(--coral))",
  teal: "linear-gradient(135deg, var(--primary), var(--violet))",
};

export function OfferCard({ offer, index = 0 }: { offer: Offer; index?: number }) {
  return (
    <article
      className="glass hover-lift animate-rise group relative flex flex-col overflow-hidden rounded-2xl"
      style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: accentBg[offer.accent] }}
      />
      <div className="relative aspect-video overflow-hidden">
        <img
          src={offer.image}
          alt={`${offer.title} artwork`}
          loading="lazy"
          width={1088}
          height={608}
          className="card-zoom size-full object-cover"
        />
        <span
          className="absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide text-primary-foreground"
          style={{ background: accentBg[offer.accent] }}
        >
          {offer.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">
          {offer.category}
        </p>
        <h3 className="text-lg font-bold tracking-tight">{offer.title}</h3>
        <p className="text-sm text-muted-foreground">{offer.description}</p>
        <a
          href={offer.ctaUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="btn-base btn-ghost mt-4 w-full"
          aria-label={`Explore ${offer.title}`}
        >
          Explore <span className="card-arrow">→</span>
        </a>
      </div>
    </article>
  );
}
