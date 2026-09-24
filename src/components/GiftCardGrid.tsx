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
    <div className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, i) => (
        <GiftCardItem key={card.id} card={card} index={i} />
      ))}
    </div>
  );
}
