import type { CSSProperties } from "react";
import type { GiftCard } from "@/data/giftCards";
import { ExploreButton } from "./ExploreButton";
import { BrandLogo } from "./BrandLogo";

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
      className="card-premium animate-rise group flex min-w-0 flex-col overflow-hidden"
      style={{ animationDelay: `${Math.min(index, 8) * 40}ms`, "--a1": a1, "--a2": a2 } as CSSProperties}
    >
      <div className="p-1.5 pb-0 sm:p-2.5 sm:pb-0">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg shadow-lg sm:rounded-xl">
          <img
            src={card.image}
            alt={`${card.name} artwork`}
            loading="lazy"
            width={1088}
            height={608}
            className="card-zoom size-full object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          <BrandLogo logo={card.logo} className="absolute top-2 left-2 sm:top-3 sm:left-3" />
          <span
            className="badge-pill absolute right-2 bottom-2 !px-2 !py-0.5 !text-[10px] sm:right-3 sm:bottom-3 sm:!px-2.5 sm:!text-[11px]"
            style={{ "--badge": a1 } as CSSProperties}
          >
            {card.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1 p-2.5 min-[380px]:p-3 sm:gap-2 sm:p-5">
        <h3 className="font-display text-[14px] leading-snug font-semibold tracking-tight break-words min-[380px]:text-[15px] sm:text-lg sm:font-bold">
          {card.name}
        </h3>
        <p className="line-clamp-2 text-[11px] leading-relaxed text-muted-foreground min-[380px]:text-xs sm:text-sm">
          {card.description}
        </p>
        <p className="hidden text-xs text-muted-foreground/80 sm:block">{card.region}</p>
        <ExploreButton
          href={card.ctaUrl}
          from={a1}
          to={a2}
          className="mt-auto !min-h-9 !rounded-lg !px-2 !py-2 !text-[12.5px] sm:!min-h-[2.9rem] sm:!rounded-[0.8rem] sm:!px-5 sm:!text-[0.975rem]"
          aria-label={`Explore ${card.name}`}
        />
      </div>
    </article>
  );
}
