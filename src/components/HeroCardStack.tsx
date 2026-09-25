import { giftCards } from "@/data/giftCards";
import { CardFace } from "./GiftCardItem";

/** Ids selected from data/giftCards to build the Hero composition. */
const stackIds = ["steam", "playstation", "xbox", "google-play", "amazon"] as const;

const layout: Record<(typeof stackIds)[number], string> = {
  steam: "top-[2%] left-0 z-30 w-[56%] -rotate-[6deg]",
  playstation: "top-0 right-0 z-20 w-[44%] rotate-[7deg]",
  xbox: "right-[2%] bottom-[4%] z-40 w-[46%] rotate-[4deg]",
  "google-play": "top-[42%] left-0 z-[15] w-[30%] rotate-[9deg] hidden min-[420px]:block",
  amazon: "top-[46%] right-0 z-10 w-[30%] -rotate-[8deg] hidden min-[420px]:block",
};

export function HeroCardStack() {
  const cards = stackIds.map((id) => giftCards.find((c) => c.id === id)).filter(Boolean);

  return (
    <div className="relative aspect-[6/5] w-full" aria-hidden="true">
      {cards.map((card) => {
        if (!card) return null;
        return (
          <div
            key={card.id}
            className={`absolute aspect-[16/10] overflow-hidden rounded-xl ring-1 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.85)] ring-white/10 transition-transform duration-500 hover:z-50 hover:scale-[1.04] ${layout[card.id as keyof typeof layout]}`}
          >
            <CardFace card={card} />
          </div>
        );
      })}
    </div>
  );
}
