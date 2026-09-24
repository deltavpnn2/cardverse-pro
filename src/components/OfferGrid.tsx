import type { Offer } from "@/data/offers";
import { OfferCard } from "./OfferCard";

export function OfferGrid({ offers }: { offers: Offer[] }) {
  if (offers.length === 0) {
    return (
      <p className="glass rounded-2xl p-8 text-center text-sm text-muted-foreground">
        No offers match your search.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-3">
      {offers.map((offer, i) => (
        <OfferCard key={offer.id} offer={offer} index={i} />
      ))}
    </div>
  );
}
