import type { GiftCard } from "@/data/giftCards";

export function GiftCardItem({ card, index = 0 }: { card: GiftCard; index?: number }) {
  return (
    <article
      className="glass hover-lift animate-rise group flex flex-col overflow-hidden rounded-2xl"
      style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={card.image}
          alt={`${card.name} artwork`}
          loading="lazy"
          width={1088}
          height={608}
          className="card-zoom size-full object-cover"
        />
        <span className="glass absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide text-primary">
          {card.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-base font-bold tracking-tight">{card.name}</h3>
        <p className="text-sm text-muted-foreground">{card.description}</p>
        <p className="text-xs text-muted-foreground/80">{card.region}</p>
        <a
          href={card.ctaUrl}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
          aria-label={`Explore ${card.name}`}
        >
          Explore <span className="card-arrow">→</span>
        </a>
      </div>
    </article>
  );
}
