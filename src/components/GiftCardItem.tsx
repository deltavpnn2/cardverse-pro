import type { CSSProperties } from "react";
import type { GiftCard } from "@/data/giftCards";
import { ExploreButton } from "./ExploreButton";

/** Subtle per-card accent pairs (glow, border, badge, button). */
const accents: Record<string, [string, string]> = {
  steam: ["var(--blue)", "var(--violet)"],
  playstation: ["var(--blue)", "oklch(0.55 0.2 275)"],
  xbox: ["var(--green)", "var(--primary)"],
  nintendo: ["oklch(0.64 0.22 25)", "var(--coral)"],
  roblox: ["oklch(0.6 0.22 25)", "oklch(0.45 0.12 20)"],
  "razer-gold": ["var(--green)", "var(--primary)"],
  riot: ["oklch(0.58 0.22 20)", "oklch(0.5 0.2 10)"],
  fortnite: ["var(--blue)", "var(--violet)"],
  netflix: ["oklch(0.6 0.23 25)", "var(--coral)"],
  spotify: ["var(--green)", "var(--primary)"],
  apple: ["oklch(0.82 0.02 250)", "var(--blue)"],
  amazon: ["var(--orange)", "oklch(0.8 0.15 80)"],
  "google-play": ["var(--blue)", "var(--primary)"],
};

export function GiftCardItem({ card, index = 0 }: { card: GiftCard; index?: number }) {
  const [a1, a2] = accents[card.id] ?? ["var(--primary)", "var(--blue)"];
  return (
    <article
      className="card-premium animate-rise group flex flex-col overflow-hidden"
      style={{ animationDelay: `${Math.min(index, 8) * 40}ms`, "--a1": a1, "--a2": a2 } as CSSProperties}
    >
      <div className="p-2.5 pb-0">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl shadow-lg">
          <img
            src={card.image}
            alt={`${card.name} artwork`}
            loading="lazy"
            width={1088}
            height={608}
            className="card-zoom size-full object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          <span className="badge-pill absolute top-3 left-3" style={{ "--badge": a1 } as CSSProperties}>
            {card.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg font-bold tracking-tight">{card.name}</h3>
        <p className="text-sm text-muted-foreground">{card.description}</p>
        <p className="text-xs text-muted-foreground/80">{card.region}</p>
        <ExploreButton
          href={card.ctaUrl}
          from={a1}
          to={a2}
          className="mt-auto"
          aria-label={`Explore ${card.name}`}
        />
      </div>
    </article>
  );
}
