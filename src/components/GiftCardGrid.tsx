import type { GiftCard } from "@/data/giftCards";
import { GiftCardItem } from "./GiftCardItem";

export function GiftCardGrid({ cards }: { cards: GiftCard[] }) {
  if (cards.length === 0) {
    return (
      <p className="glass rounded-2xl p-8 text-center text-sm text-muted-foreground">
        No gift cards match your search.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 min-[300px]:grid-cols-2 gap-2.5 min-[380px]:gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-6 xl:gap-7">
      {cards.map((card, i) => (
        <GiftCardItem key={card.id} card={card} index={i} />
      ))}
    </div>
  );
}
