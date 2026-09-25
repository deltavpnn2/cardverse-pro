import type { CSSProperties } from "react";
import type { GiftCard } from "@/data/giftCards";
import { ExploreButton } from "./ExploreButton";

export function CardFace({ card }: { card: GiftCard }) {
  const [c1, c2] = card.colors;
  const { logo } = card;
  return (
    <div
      role="img"
      aria-label={`${card.name} card artwork`}
      className="card-zoom relative size-full overflow-hidden"
      style={{ background: `linear-gradient(160deg, ${c1} 0%, ${c2} 115%)` }}
    >
      {/* ambient brand glow */}
      <div
        aria-hidden="true"
        className="absolute -top-1/3 -right-1/4 size-[80%] rounded-full bg-foreground/10 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-1/2 -left-1/4 size-[90%] rounded-full border border-foreground/10"
      />
      {/* subtle digital dot-grid texture for a premium "tech card" feel */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:10px_10px] text-foreground"
      />
      {/* diagonal sheen */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(115deg,transparent_40%,color-mix(in_oklab,var(--foreground)_16%,transparent)_50%,transparent_60%)]"
      />

      {/* denomination, top-left */}
      <span
        aria-hidden="true"
        className="absolute top-[6%] left-[6%] rounded-full bg-background/30 px-2 py-0.5 text-[10px] font-extrabold tracking-wide text-foreground backdrop-blur-sm sm:text-xs"
      >
        {card.amount}
      </span>

      {/* FREE badge, top-right — neon glass pill, not a big banner */}
      <span
        aria-hidden="true"
        className="absolute top-[6%] right-[6%] rounded-full border border-primary/50 bg-primary/20 px-2 py-0.5 text-[9px] font-extrabold tracking-[0.08em] text-foreground uppercase shadow-[0_0_12px_-2px_var(--primary)] backdrop-blur-sm sm:text-[10px]"
      >
        Free
      </span>

      <span
        aria-hidden="true"
        className="absolute top-[17%] right-[6%] text-[8px] font-bold tracking-[0.2em] text-foreground/60 uppercase sm:text-[10px]"
      >
        Gift Card
      </span>

      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pt-[6%] pb-[16%]"
      >
        {logo?.path ? (
          <svg
            viewBox="0 0 24 24"
            className="size-[30%] fill-foreground drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]"
          >
            <path d={logo.path} />
          </svg>
        ) : (
          <span className="font-display text-[clamp(1.6rem,8vw,3.6rem)] leading-none font-extrabold text-foreground drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]">
            {logo?.text}
          </span>
        )}
      </div>

      <span
        aria-hidden="true"
        className="font-display absolute bottom-[13%] left-[6%] max-w-[88%] truncate text-[11px] font-extrabold tracking-tight text-foreground sm:text-base"
      >
        {card.wordmark}
      </span>

      {/* "digital code" footer strip, like a real prepaid card */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-background/25 py-[4%] backdrop-blur-sm"
      >
        <span className="text-[7px] font-semibold tracking-[0.25em] text-foreground/70 uppercase sm:text-[9px]">
          Digital Code
        </span>
      </div>
    </div>
  );
}

export function GiftCardItem({ card, index = 0 }: { card: GiftCard; index?: number }) {
  const a1 = card.colors[1];
  return (
    <article
      className="card-premium animate-rise group flex min-w-0 flex-col overflow-hidden"
      style={
        {
          animationDelay: `${Math.min(index, 8) * 40}ms`,
          "--a1": a1,
          "--a2": "var(--primary)",
        } as CSSProperties
      }
    >
      <div className="p-1.5 pb-0 sm:p-2.5 sm:pb-0">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg sm:rounded-xl">
          <CardFace card={card} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-3 sm:gap-2 sm:p-5">
        <h3 className="font-display text-[14px] leading-snug font-bold tracking-tight break-words min-[380px]:text-[15px] sm:text-lg">
          {card.name}
        </h3>
        <span
          className="badge-pill self-start !px-2 !py-0.5 !text-[10px] sm:!px-2.5 sm:!text-[11px]"
          style={{ "--badge": "var(--primary)" } as CSSProperties}
        >
          {card.category}
        </span>
        <ExploreButton
          href={card.ctaUrl}
          tone="primary"
          label="Claim"
          className="mt-auto !min-h-10 !rounded-lg !px-2 !py-2 !text-[13px] sm:!min-h-[2.9rem] sm:!rounded-[0.8rem] sm:!px-5 sm:!text-[0.975rem]"
          aria-label={`Claim ${card.name}`}
        />
      </div>
    </article>
  );
}
