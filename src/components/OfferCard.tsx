import type { CSSProperties } from "react";
import type { Offer } from "@/data/offers";
import { ExploreButton, toneGradient, type ExploreTone } from "./ExploreButton";

const accentTone: Record<Offer["accent"], ExploreTone> = {
  cyan: "primary",
  violet: "violet-pink",
  sunset: "pink-coral",
  teal: "blue-violet",
};

export function OfferCard({ offer, index = 0 }: { offer: Offer; index?: number }) {
  const tone = accentTone[offer.accent];
  const [a1, a2] = toneGradient[tone];
  return (
    <article
      className="card-premium card-offer animate-rise group relative flex flex-col overflow-hidden"
      style={{ animationDelay: `${Math.min(index, 8) * 40}ms`, "--a1": a1, "--a2": a2 } as CSSProperties}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: `linear-gradient(90deg, ${a1}, ${a2})` }}
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
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        <span className="badge-pill absolute top-3 left-3 uppercase" style={{ "--badge": a1 } as CSSProperties}>
          ✦ {offer.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-[11px] font-semibold tracking-widest uppercase" style={{ color: a1 }}>
          {offer.category}
        </p>
        <h3 className="text-lg font-bold tracking-tight">{offer.title}</h3>
        <p className="text-sm text-muted-foreground">{offer.description}</p>
        <ExploreButton
          href={offer.ctaUrl}
          tone={tone}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-auto"
          aria-label={`Explore ${offer.title}`}
        />
      </div>
    </article>
  );
}
